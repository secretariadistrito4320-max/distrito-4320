export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  contentHtml: string;
  content: string;
  date: string;
  imageUrl: string;
  clubId: string;
  clubName: string;
  author: string;
  category: string;
  galleryImages?: string[];
}

export const SHEETS_API_URL =
  'https://script.google.com/macros/s/AKfycbyB2VdT6qYPNcEAmlrAMWpgpd9LObcTAk0imjRMsI6W3-ChCegRi31w_B1WoZpxW5va/exec';

// Caché temporal en memoria durante la compilación
let newsCache: NewsItem[] | null = null;
let newsCacheTime = 0;

export function parseNewsData(data: any[]): NewsItem[] {
  if (!Array.isArray(data)) return [];

  return data.map((item: any) => {
    const title = item.title || 'Sin Título';
    const slug =
      item.slug ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

    return {
      id: item.id || slug,
      slug,
      title,
      summary: item.summary || item.description || '',
      contentHtml: item.contentHtml || item.content || '',
      content: item.content || item.contentHtml || '',
      date: item.date || item.selectedDate || '',
      imageUrl: item.imageUrl || '',
      clubId: item.clubId || '',
      clubName: item.clubName || '',
      author: item.author || 'Prensa Distrito 4320',
      category: item.category || 'Noticias',
    };
  });
}

export async function getNews(): Promise<NewsItem[]> {
  const now = Date.now();
  // Reutiliza los datos si la consulta se hizo hace menos de 60 segundos
  if (newsCache && now - newsCacheTime < 60000) {
    return newsCache;
  }

  try {
    const res = await fetch(`${SHEETS_API_URL}?sheet=Noticias`, {
      cache: 'no-store',
    });

    if (!res.ok) return newsCache || [];

    const data = await res.json();
    newsCache = parseNewsData(data);
    newsCacheTime = now;
    return newsCache;
  } catch (error) {
    console.error('Error fetching news:', error);
    return newsCache || [];
  }
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  const allNews = await getNews();
  return allNews.find((n) => n.slug === slug) || null;
}
