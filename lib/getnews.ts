import rawMockData from '@/data/mockData.json';
import { NewsItem } from '@/components/NewsCard';

const API_URL = process.env.NEXT_PUBLIC_SHEETS_API_URL || 'https://script.google.com/macros/s/AKfycbyB2VdT6qYPNcEAmlrAMWpgpd9LObcTAk0imjRMsI6W3-ChCegRi31w_B1WoZpxW5va/exec';

export async function getNews(): Promise<NewsItem[]> {
  try {
    const res = await fetch(API_URL, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      console.warn('Error al consultar Google Sheets, usando mockData');
      return rawMockData as NewsItem[];
    }

    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      return rawMockData as NewsItem[];
    }

    return data.map((item: Record<string, string>, index: number) => ({
      id: item.id || `sheet-news-${index}`,
      title: item.title || 'Sin Título',
      slug: item.slug || `noticia-${index}`,
      summary: item.summary || '',
      content: item.content || '',
      imageUrl: item.imageUrl || 'https://images.unsplash.com/photo-1577495508048-b635879837f1',
      videoUrl: item.videoUrl || '',
      clubId: item.clubId || 'distrital',
      clubName: item.clubName || 'Rotary Distrito 4320',
      category: item.category || 'Noticias',
      date: item.date || new Date().toISOString().split('T')[0],
      author: item.author || 'Prensa Distrito 4320'
    }));

  } catch (error) {
    console.error('Error al conectar con la API de Google Sheets:', error);
    return rawMockData as NewsItem[];
  }
}
