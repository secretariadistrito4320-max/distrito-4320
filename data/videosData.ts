export interface RotaryVideo {
  id: string;
  youtubeId: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  category: string;
  thumbnail: string;
}

export const FEATURED_VIDEOS: RotaryVideo[] = [
  {
    id: 'v1',
    youtubeId: 'B2KO_VE9Slo',
    title: 'Pongamos fin a la Polio (End Polio Now)',
    subtitle: 'El histórico compromiso de Rotary por un mundo libre de poliomielitis',
    description: 'Conoce cómo Rotary International y sus aliados han vacunado a más de 3.000 millones de niños en todo el mundo, reduciendo los casos de polio en un 99.9%. Un esfuerzo histórico que no se detendrá hasta lograr la erradicación total.',
    duration: '4:35 min',
    category: 'POLIOPLUS',
    thumbnail: 'https://img.youtube.com/vi/B2KO_VE9Slo/hqdefault.jpg'
  },
  {
    id: 'v2',
    youtubeId: '_KKCv02hVUw',
    title: 'Gente de Acción: Distritos Rotarios de Chile',
    subtitle: 'Líderes que transforman ideas en impacto tangible para nuestras comunidades',
    description: 'Conoce la labor unificada de los distritos rotarios en Chile. Desde Arica hasta Valparaíso y Rapa Nui, descubre las historias humanas de servicio, amistad y liderazgo que definen el espíritu rotario nacional.',
    duration: '2:01 min',
    category: 'DISTRITO 4320',
    thumbnail: 'https://img.youtube.com/vi/_KKCv02hVUw/hqdefault.jpg'
  },
  {
    id: 'v3',
    youtubeId: '7u_tcu1bIBg',
    title: 'Centenario del Rotarismo en Chile',
    subtitle: 'Cien años forjando líderes y cambiando comunidades',
    description: 'En 1923 se fundó el primer Club Rotario en Valparaíso, marcando el inicio de una era de servicio desinteresado en nuestro país. Revive en este recorrido histórico cómo Rotary se ha consolidado a lo largo del territorio nacional.',
    duration: '5:01 min',
    category: 'HISTORIA',
    thumbnail: 'https://img.youtube.com/vi/7u_tcu1bIBg/hqdefault.jpg'
  }
];
