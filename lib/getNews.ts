import rawMockData from '@/data/mockData.json';
import { NewsItem } from '@/components/NewsCard';

const API_URL =
  process.env.NEXT_PUBLIC_SHEETS_API_URL ||
  'https://script.google.com/macros/s/AKfycbyB2VdT6qYPNcEAmlrAMWpgpd9LObcTAk0imjRMsI6W3-ChCegRi31w_B1WoZpxW5va/exec';

export async function getNews(): Promise<NewsItem[]> {
  try {
    const res = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json',
      },
      redirect: 'follow',
      cache: 'no-store',
    });

    if (!res.ok) {
      console.warn(`⚠️ HTTP Error ${res.status} al consultar Google Sheets`);
      return rawMockData as NewsItem[];
    }

    const text = await res.text();

    if (text.trim().startsWith('<')) {
      console.error('❌ Google Apps Script devolvió HTML en vez de JSON. Revisa los permisos de la implementación.');
      return rawMockData as NewsItem[];
    }

    const data = JSON.parse(text);

    if (data.error || !Array.isArray(data) || data.length === 0) {
      console.warn('⚠️ La respuesta de Google Sheets no es un listado válido:', data);
      return rawMockData as NewsItem[];
    }

    return data.map((item: Record<string, string>, index: number) => ({
      id: item.id || `sheet-news-${index}`,
      title: item.title || 'Sin Título',
      slug: item.slug || `noticia-${index}`,
      summary: item.summary || '',
      content: item.content || item.summary || '',
      imageUrl: item.imageUrl || 'https://images.unsplash.com/photo-1577495508048-b635879837f1',
      videoUrl: item.videoUrl || '',
      clubId: item.clubId || 'distrital',
      clubName: item.clubName || 'Rotary Distrito 4320',
      category: item.category || 'Noticias',
      date: item.date || new Date().toISOString().split('T')[0],
      author: item.author || 'Prensa Distrito 4320',
      gallery: item.gallery || '',
    }));
  } catch (error) {
    console.error('❌ Error de conexión al consultar Google Sheets:', error);
    return rawMockData as NewsItem[];
  }
}
