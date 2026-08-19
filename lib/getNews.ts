import rawMockData from '@/data/mockData.json';
import { NewsItem } from '@/components/NewsCard';

const API_URL =
  process.env.NEXT_PUBLIC_SHEETS_API_URL ||
  'https://script.google.com/macros/s/AKfycbyB2VdT6qYPNcEAmlrAMWpgpd9LObcTAk0imjRMsI6W3-ChCegRi31w_B1WoZpxW5va/exec';

let cachedNewsPromise: Promise<NewsItem[]> | null = null;

async function fetchNewsFromSheet(): Promise<NewsItem[]> {
  try {
    // Ampliamos el tiempo a 25 segundos para permitir que Google Apps Script entregue las 506 noticias
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    const res = await fetch(API_URL, {
      signal: controller.signal,
      redirect: 'follow',
      cache: 'no-store'
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn('⚠️ Respuesta no OK de Google Sheets, usando mockData');
      return rawMockData as NewsItem[];
    }

    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      console.warn('⚠️ JSON de Google Sheets vacío, usando mockData');
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
      gallery: item.gallery || ''
    }));

  } catch (error) {
    console.warn('⚠️ Google Sheets no respondió a tiempo. Usando respaldo local:', error);
    return rawMockData as NewsItem[];
  }
}

export function getNews(): Promise<NewsItem[]> {
  if (!cachedNewsPromise) {
    cachedNewsPromise = fetchNewsFromSheet();
  }
  return cachedNewsPromise;
}
