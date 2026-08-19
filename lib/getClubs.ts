import { CLUBS_DATA, Club } from '@/data/clubsData';

export const SHEETS_API_URL =
  'https://script.google.com/macros/s/AKfycbyB2VdT6qYPNcEAmlrAMWpgpd9LObcTAk0imjRMsI6W3-ChCegRi31w_B1WoZpxW5va/exec';

export async function getClubs(): Promise<Club[]> {
  try {
    const res = await fetch(`${SHEETS_API_URL}?sheet=Clubes`, {
      method: 'GET',
      redirect: 'follow',
      next: { revalidate: 60 },
    });

    if (!res.ok) return CLUBS_DATA;

    const text = await res.text();
    if (text.trim().startsWith('<')) return CLUBS_DATA;

    const data = JSON.parse(text);
    if (!Array.isArray(data) || data.length === 0) return CLUBS_DATA;

    const sheetClubsMap = new Map<string, any>();
    data.forEach((item: any) => {
      const id = item.clubId || item.id;
      if (id) {
        sheetClubsMap.set(id.toLowerCase(), item);
      }
    });

    return CLUBS_DATA.map((staticClub) => {
      const sheetClub = sheetClubsMap.get(staticClub.id.toLowerCase());
      if (sheetClub) {
        return {
          ...staticClub,
          name: sheetClub.clubName || sheetClub.name || staticClub.name,
          city: sheetClub.city || staticClub.city,
          president: sheetClub.presidentName || sheetClub.president || staticClub.president,
          email: sheetClub.email || staticClub.email,
        };
      }
      return staticClub;
    });
  } catch (error) {
    console.warn('⚠️ Google Sheets no disponible para Clubes. Usando respaldo local:', error);
    return CLUBS_DATA;
  }
}
