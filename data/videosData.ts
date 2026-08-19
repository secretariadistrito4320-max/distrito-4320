export interface RotaryVideo {
  id: string;
  title: string;
  subtitle: string;
  youtubeId: string;
  duration: string;
  thumbnail: string;
  category: string;
  description: string;
}

export const FEATURED_VIDEOS: RotaryVideo[] = [
  {
    id: "video-1",
    title: "Pongamos fin a la Polio (End Polio Now)",
    subtitle: "El histórico compromiso de Rotary por un mundo libre de poliomielitis",
    youtubeId: "mD0V7L5eQjQ",
    duration: "3:45 min",
    thumbnail: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop",
    category: "PolioPlus",
    description: "Conoce cómo Rotary International y sus aliados han vacunado a más de 3.000 millones de niños en todo el mundo, reduciendo los casos de polio en un 99.9%."
  },
  {
    id: "video-2",
    title: "Erradiquemos la Polio: El Último Tramo",
    subtitle: "Cada gota cuenta en la misión más grande de la historia de la salud pública",
    youtubeId: "0rE2H2WvKzM",
    duration: "4:12 min",
    thumbnail: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop",
    category: "Salud Global",
    description: "Trabajadores de salud y rotarios superan barreras geográficas y climáticas extremas para llevar vacunas a los rincones más inaccesibles del planeta."
  },
  {
    id: "video-3",
    title: "Gente de Acción: Distrito 4320 en Movimiento",
    subtitle: "Líderes que transforman ideas en impacto tangible para Chile",
    youtubeId: "gT8vWzQ2bL0",
    duration: "2:58 min",
    thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    category: "Distrito 4320",
    description: "Desde Arica hasta Valparaíso y Rapa Nui, descubre las historias humanas de servicio, amistad y liderazgo que definen el espíritu rotario chileno."
  }
];
