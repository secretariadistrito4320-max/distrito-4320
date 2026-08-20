export interface GovernorLetter {
  id: string;
  month: string;
  title: string;
  summary: string;
  fullText: string;
  pdfUrl: string;
  date: string;
}

export interface Governor {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  period: string;
  homeClub: string;
  theme: string;
  photoUrl: string;
  bio: string;
  letters: GovernorLetter[];
}

export const GOVERNORS_DATA: Governor[] = [
  {
    id: "jose-miguel",
    slug: "jose-miguel",
    name: "José Miguel Núñez Alvarado",
    shortName: "José Miguel",
    period: "2026-2027",
    homeClub: "Distrito 4320",
    theme: "Unidos Para Hacer El Bien",
    photoUrl: "",
    bio: "Gobernador del Distrito 4320 de Rotary International para el periodo 2026-2027.",
    letters: []
  },
  {
    id: "wilson",
    slug: "wilson",
    name: "Wilson Pizarro Carvajal",
    shortName: "Wilson",
    period: "2025-2026",
    homeClub: "Rotary Club Ovalle",
    theme: "La Magia de Rotary",
    photoUrl: "",
    bio: "Gobernador del Distrito 4320 para el periodo 2025-2026.",
    letters: []
  },
  {
    id: "carlos",
    slug: "carlos",
    name: "Carlos Flores",
    shortName: "Carlos",
    period: "2024-2025",
    homeClub: "Rotary Club La Herradura",
    theme: "Crea Esperanza en el Mundo",
    photoUrl: "",
    bio: "Gobernador del Distrito 4320 para el periodo 2024-2025.",
    letters: []
  },
  {
    id: "rodrigo",
    slug: "rodrigo",
    name: "Rodrigo Jarufe",
    shortName: "Rodrigo",
    period: "2023-2024",
    homeClub: "Rotary Club Quillota",
    theme: "Imagina Rotary",
    photoUrl: "",
    bio: "Gobernador del Distrito 4320 para el periodo 2023-2024.",
    letters: []
  },
  {
    id: "patricia",
    slug: "patricia",
    name: "Patricia Lorca Rojas",
    shortName: "Patricia",
    period: "2022-2023",
    homeClub: "Rotary Club Caliche",
    theme: "Servir Para Cambiar Vidas",
    photoUrl: "",
    bio: "Gobernadora del Distrito 4320 para el periodo 2022-2023.",
    letters: []
  },
  {
    id: "ricardo",
    slug: "ricardo",
    name: "Ricardo Vera Martínez",
    shortName: "Ricardo",
    period: "2021-2022",
    homeClub: "Rotary Club Copiapó",
    theme: "Rotary Abre Oportunidades",
    photoUrl: "",
    bio: "Gobernador del Distrito 4320 para el periodo 2021-2022.",
    letters: []
  },
  {
    id: "emilio",
    slug: "emilio",
    name: "Emilio Sepúlveda Aguilar",
    shortName: "Emilio",
    period: "2020-2021",
    homeClub: "Rotary Club Chuquicamata",
    theme: "Rotary Conecta el Mundo",
    photoUrl: "",
    bio: "Gobernador del Distrito 4320 para el periodo 2020-2021.",
    letters: []
  },
  {
    id: "carlos-tapia",
    slug: "carlos-tapia",
    name: "Carlos Tapia",
    shortName: "Carlos Tapia",
    period: "2019-2020",
    homeClub: "Rotary Club La Serena",
    theme: "Sé la Inspiración",
    photoUrl: "",
    bio: "Gobernador del Distrito 4320 para el periodo 2019-2020.",
    letters: []
  },
  {
    id: "luz",
    slug: "luz",
    name: "Luz Bernal González",
    shortName: "Luz",
    period: "2018-2019",
    homeClub: "Rotary Club La Calera",
    theme: "Rotary Marca la Diferencia",
    photoUrl: "",
    bio: "Gobernadora del Distrito 4320 para el periodo 2018-2019.",
    letters: []
  },
  {
    id: "edgar",
    slug: "edgar",
    name: "Edgar Ibarra González",
    shortName: "Edgar",
    period: "2017-2018",
    homeClub: "Rotary Club Calama",
    theme: "Rotary al Servicio de la Humanidad",
    photoUrl: "",
    bio: "Gobernador del Distrito 4320 para el periodo 2017-2018.",
    letters: []
  },
  {
    id: "sonia",
    slug: "sonia",
    name: "Sonia Garay Garay",
    shortName: "Sonia",
    period: "2016-2017",
    homeClub: "Rotary Club Playa Ancha",
    theme: "Rotary al Servicio de la Comunidad",
    photoUrl: "",
    bio: "Gobernadora del Distrito 4320 para el periodo 2016-2017.",
    letters: []
  },
  {
    id: "humberto",
    slug: "humberto",
    name: "Humberto Beckers Argomedo",
    shortName: "Humberto",
    period: "2015-2016",
    homeClub: "Rotary Club La Portada",
    theme: "Enriquece el Mundo",
    photoUrl: "",
    bio: "Gobernador del Distrito 4320 para el periodo 2015-2016.",
    letters: []
  }
];
