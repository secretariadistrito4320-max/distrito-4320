import { GOVERNORS_DATA } from '@/data/governorsData';

export const SHEETS_API_URL =
  'https://script.google.com/macros/s/AKfycbyB2VdT6qYPNcEAmlrAMWpgpd9LObcTAk0imjRMsI6W3-ChCegRi31w_B1WoZpxW5va/exec';

export interface LetterItem {
  id: string;
  governorSlug: string;
  month: string;
  title: string;
  summary: string;
  pdfUrl: string;
  date: string;
}

export async function getLettersByGovernor(governorSlug: string): Promise<LetterItem[]> {
  try {
    const res = await fetch(`${SHEETS_API_URL}?sheet=Cartas_GD`, {
      method: 'GET',
      redirect: 'follow',
      next: { revalidate: 60 },
    });

    if (!res.ok) return getFallbackLetters(governorSlug);

    const text = await res.text();
    if (text.trim().startsWith('<')) return getFallbackLetters(governorSlug);

    const data = JSON.parse(text);
    if (!Array.isArray(data) || data.length === 0) return getFallbackLetters(governorSlug);

    // Filtrar únicamente las cartas pertenecientes a este Gobernador
    const sheetLetters = data
      .filter((item: any) => item.governorSlug === governorSlug || item.governorSlug === 'todos')
      .map((item: any, index: number) => ({
        id: item.id || `letter-sheet-${index}`,
        governorSlug: item.governorSlug || governorSlug,
        month: item.month || 'Carta Oficial',
        title: item.title || 'Carta del Gobernador',
        summary: item.summary || '',
        pdfUrl: item.pdfUrl || '',
        date: item.date || new Date().toISOString().split('T')[0],
      }));

    // Si Google Sheets tiene cartas registradas para este gobernador, usarlas
    if (sheetLetters.length > 0) {
      return sheetLetters;
    }

    return getFallbackLetters(governorSlug);
  } catch (error) {
    console.warn('⚠️ Google Sheets no disponible para Cartas GD. Usando respaldo local:', error);
    return getFallbackLetters(governorSlug);
  }
}

function getFallbackLetters(governorSlug: string): LetterItem[] {
  const governor = GOVERNORS_DATA.find((g) => g.slug === governorSlug);
  if (!governor || !governor.letters) return [];

  return governor.letters.map((l) => ({
    id: l.id,
    governorSlug: governorSlug,
    month: l.month,
    title: l.title,
    summary: l.summary || '',
    pdfUrl: l.pdfUrl || '',
    date: l.date || '',
  }));
}
