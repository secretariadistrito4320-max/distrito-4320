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

const SLUG_MAP: Record<string, string> = {
  'jose-miguel': 'jose-miguel',
  'josé miguel': 'jose-miguel',
  'jose miguel nuñez': 'jose-miguel',
  'josé miguel núñez alvarado (2026-2027)': 'jose-miguel',
  'wilson': 'wilson',
  'wilson pizarro': 'wilson',
  'wilson pizarro carvajal (2025-2026)': 'wilson',
  'carlos': 'carlos',
  'carlos flores': 'carlos',
  'carlos flores (2024-2025)': 'carlos',
  'rodrigo': 'rodrigo',
  'rodrigo jarufe': 'rodrigo',
  'rodrigo jarufe (2023-2024)': 'rodrigo',
  'patricia': 'patricia',
  'patricia lorca': 'patricia',
  'patricia lorca rojas (2022-2023)': 'patricia',
  'ricardo': 'ricardo',
  'ricardo vera': 'ricardo',
  'ricardo vera martínez (2021-2022)': 'ricardo',
  'emilio': 'emilio',
  'emilio sepúlveda': 'emilio',
  'emilio sepúlveda aguilar (2020-2021)': 'emilio',
  'carlos-tapia': 'carlos-tapia',
  'carlos tapia': 'carlos-tapia',
  'carlos tapia (2019-2020)': 'carlos-tapia',
  'luz': 'luz',
  'luz bernal': 'luz',
  'luz bernal gonzález (2018-2019)': 'luz',
  'edgar': 'edgar',
  'edgar ibarra': 'edgar',
  'edgar ibarra gonzález (2017-2018)': 'edgar',
  'sonia': 'sonia',
  'sonia garay': 'sonia',
  'sonia garay garay (2016-2017)': 'sonia',
  'humberto': 'humberto',
  'humberto beckers': 'humberto',
  'humberto beckers argomedo (2015-2016)': 'humberto',
  'felipe': 'felipe',
  'felipe platero': 'felipe',
  'felipe platero moscópulos (2014-2015)': 'felipe',
};

function normalizeSlug(input: string): string {
  if (!input) return '';
  const clean = input.toLowerCase().trim();
  return SLUG_MAP[clean] || clean.replace(/\s+/g, '-');
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

    const targetSlug = normalizeSlug(governorSlug);

    const sheetLetters = data
      .filter((item: any) => {
        const itemSlug = normalizeSlug(item.governorSlug || '');
        return itemSlug === targetSlug || itemSlug === 'todos';
      })
      .map((item: any, index: number) => ({
        id: item.id || `letter-sheet-${index}`,
        governorSlug: targetSlug,
        month: item.month || 'Carta Oficial',
        title: item.title || 'Carta del Gobernador',
        summary: item.summary || '',
        pdfUrl: item.pdfUrl || '',
        date: item.date || new Date().toISOString().split('T')[0],
      }));

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
