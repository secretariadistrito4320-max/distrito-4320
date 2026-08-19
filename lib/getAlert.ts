export const SHEETS_API_URL =
  'https://script.google.com/macros/s/AKfycbyB2VdT6qYPNcEAmlrAMWpgpd9LObcTAk0imjRMsI6W3-ChCegRi31w_B1WoZpxW5va/exec';

export interface AlertItem {
  id?: string;
  active: boolean;
  message: string;
  buttonText?: string;
  linkUrl?: string;
}

export async function getActiveAlert(): Promise<AlertItem | null> {
  try {
    const res = await fetch(`${SHEETS_API_URL}?sheet=Alertas_Portada`, {
      method: 'GET',
      redirect: 'follow',
      next: { revalidate: 30 },
    });

    if (!res.ok) return null;

    const text = await res.text();
    if (text.trim().startsWith('<')) return null;

    const data = JSON.parse(text);
    if (!Array.isArray(data) || data.length === 0) return null;

    // Buscar el primer elemento que tenga 'active' en TRUE, SI o 1
    const activeItem = data.find((item: any) => {
      const val = String(item.active).toUpperCase().trim();
      return val === 'TRUE' || val === '1' || val === 'SI' || val === 'SÍ';
    });

    if (!activeItem) return null;

    return {
      id: activeItem.id || 'alert-1',
      active: true,
      message: activeItem.message || '',
      buttonText: activeItem.buttonText || '',
      linkUrl: activeItem.linkUrl || '',
    };
  } catch (error) {
    console.warn('⚠️ Google Sheets no disponible para Alertas Portada:', error);
    return null;
  }
}
