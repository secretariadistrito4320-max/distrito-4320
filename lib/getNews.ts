export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  contentHtml: string;
  date: string;
  imageUrl?: string;
  clubId?: string;
  clubName?: string;
  author?: string;
  galleryImages?: string[];
}

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyB2VdT6qYPNcEAmlrAMWpgpd9LObcTAk0imjRMsI6W3-ChCegRi31w_B1WoZpxW5va/exec';

export async function getNews(): Promise<NewsItem[]> {
  try {
    const res = await fetch(`${APPS_SCRIPT_URL}?sheet=Noticias`, {
      cache: 'no-store', // Omite la memoria caché estática de 2MB de Next.js
    });

    if (!res.ok) return [];

    const data = await res.json();
    if (!Array.isArray(data)) return [];

    return data.map((item: any) => {
      const title = item.title || 'Sin Título';
      const slug = item.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

      return {
        id: item.id || slug,
        slug,
        title,
        summary: item.summary || item.description || '',
        contentHtml: item.contentHtml || item.content || '',
        date: item.date || item.selectedDate || '',
        imageUrl: item.imageUrl || '',
        clubId: item.clubId || '',
        clubName: item.clubName || '',
        author: item.author || 'Prensa Distrito 4320',
      };
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  const allNews = await getNews();
  return allNews.find((n) => n.slug === slug) || null;
}
