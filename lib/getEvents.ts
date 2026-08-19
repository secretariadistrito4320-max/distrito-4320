export const SHEETS_API_URL =
  'https://script.google.com/macros/s/AKfycbyB2VdT6qYPNcEAmlrAMWpgpd9LObcTAk0imjRMsI6W3-ChCegRi31w_B1WoZpxW5va/exec';

export interface EventItem {
  eventId: string;
  title: string;
  date: string;
  city: string;
  description?: string;
  linkRegistration?: string;
}

export const FALLBACK_EVENTS: EventItem[] = [
  {
    eventId: 'evt-1',
    title: 'Asamblea de Capacitación Distrital 2026-2027',
    date: '2026-10-15',
    city: 'Valparaíso',
    description: 'Jornada de formación y planificación estratégica para directivas de clubes, comités y coordinadores distritales.',
    linkRegistration: 'mailto:secretaria@rotary4320.cl',
  },
  {
    eventId: 'evt-2',
    title: 'Conferencia Distrital de la Amistad',
    date: '2027-05-20',
    city: 'La Serena',
    description: 'Magno encuentro anual de la familia rotaria del Distrito 4320 para la cuenta de gestión y reconocimientos de proyectos.',
    linkRegistration: '',
  },
];

export async function getEvents(): Promise<EventItem[]> {
  try {
    const res = await fetch(`${SHEETS_API_URL}?sheet=Cartelera`, {
      method: 'GET',
      redirect: 'follow',
      next: { revalidate: 60 },
    });

    if (!res.ok) return FALLBACK_EVENTS;

    const text = await res.text();
    if (text.trim().startsWith('<')) return FALLBACK_EVENTS;

    const data = JSON.parse(text);
    if (!Array.isArray(data) || data.length === 0) return FALLBACK_EVENTS;

    return data.map((item: any, index: number) => ({
      eventId: item.eventId || item.id || `event-${index}`,
      title: item.title || 'Evento Rotario',
      date: item.date || new Date().toISOString().split('T')[0],
      city: item.city || 'Distrito 4320',
      description: item.description || '',
      linkRegistration: item.linkRegistration || '',
    }));
  } catch (error) {
    console.warn('⚠️ Google Sheets no disponible para Cartelera:', error);
    return FALLBACK_EVENTS;
  }
}
