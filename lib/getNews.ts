import rawMockData from '@/data/mockData.json';
import { NewsItem } from '@/components/NewsCard';

export const SHEETS_API_URL =
  'https://script.google.com/macros/s/AKfycbyB2VdT6qYPNcEAmlrAMWpgpd9LObcTAk0imjRMsI6W3-ChCegRi31w_B1WoZpxW5va/exec';

export function parseNewsData(data: any[]): NewsItem[] {
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
}

export async function getNews(): Promise<NewsItem[]> {
  try {
    const res = await fetch(SHEETS_API_URL, {
      method: 'GET',
      redirect: 'follow',
      next: { revalidate: 60 },
    });

    if (!res.ok) return rawMockData as NewsItem[];

    const text = await res.text();
    if (text.trim().startsWith('<')) return rawMockData as NewsItem[];

    const data = JSON.parse(text);
    if (!Array.isArray(data) || data.length === 0) return rawMockData as NewsItem[];

    return parseNewsData(data);
  } catch (error) {
    console.warn('Google Sheets no disponible durante la compilación:', error);
    return rawMockData as NewsItem[];
  }
}
