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
    id: "carlos",
    slug: "carlos",
    name: "Carlos Tapia Gómez",
    shortName: "Carlos",
    period: "2026-2027",
    homeClub: "Rotary Club La Serena",
    theme: "Unidos Para Hacer El Bien",
    photoUrl: "", // Dejado sin foto genérica
    bio: "Ingeniero Civil y rotario desde hace 24 años. Ha liderado múltiples comités distritales de La Fundación Rotaria y proyectos de desarrollo hídrico en la Región de Coquimbo.",
    letters: [
      {
        id: "carlos-ago-2026",
        month: "Agosto 2026",
        title: "Carta N° 2: Mes de la Membresía y Nuevas Generaciones",
        summary: "El Gobernador Carlos convoca a todos los clubes a abrir sus puertas a nuevos líderes comunitarios, fortalecer la equidad y acoger con entusiasmo a Interact y Rotaract.",
        fullText: "Estimadas amigas y amigos rotarios del Distrito 4320:\n\nIniciamos agosto con el firme propósito de enriquecer la vida de nuestros clubes. La membresía no es un número estadístico; es el corazón palpitante que permite que un niño reciba lentes en Viña del Mar, que una caleta tenga agua potable en Valparaíso o que un adulto mayor tenga una silla de ruedas en La Serena.\n\nLes invito a que este mes celebremos 'La Noche del Invitado', acercando a profesionales jóvenes, mujeres líderes y personas de acción que comparten nuestro anhelo de servir por encima de uno mismo.\n\nCon afecto fraternal,\nCarlos Tapia Gómez - Gobernador Distrito 4320",
        pdfUrl: "/docs/carta-gd-carlos-agosto-2026.pdf",
        date: "2026-08-01"
      },
      {
        id: "carlos-jul-2026",
        month: "Julio 2026",
        title: "Carta N° 1: El Despertar de un Nuevo Periodo de Servicio",
        summary: "Mensaje inaugural del periodo 2026-2027: visión estratégica, alineación con las 7 áreas de interés de Rotary y metas de recaudación para PolioPlus.",
        fullText: "Querida familia rotaria:\n\nAsumo con humildad y profundo compromiso la gobernación de este maravilloso distrito que abraza desde las cumbres de Arica hasta las olas de Valparaíso y la magia de Rapa Nui. Nuestro lema 'Unidos Para Hacer El Bien' será la brújula que guiará cada una de nuestras acciones durante estos doce meses.\n\n¡Trabajemos unidos con entusiasmo inquebrantable!",
        pdfUrl: "/docs/carta-gd-carlos-julio-2026.pdf",
        date: "2026-07-01"
      }
    ]
  },
  {
    id: "patricia",
    slug: "patricia",
    name: "Patricia Lorca Miranda",
    shortName: "Patricia",
    period: "2025-2026",
    homeClub: "Rotary Club Valparaíso",
    theme: "La Magia de Rotary en Cada Rincón",
    photoUrl: "",
    bio: "Médica Pediatra y destacada líder comunitaria. Impulsó durante su gobernación la erradicación de la violencia intrafamiliar y grandes operativos de salud infantil.",
    letters: [
      {
        id: "patricia-jun-2026",
        month: "Junio 2026",
        title: "Carta N° 12: Gratitud y balance de un año histórico",
        summary: "Balance del periodo 2025-2026: 9 subvenciones globales ejecutadas y 200 nuevos socios incorporados al Distrito 4320.",
        fullText: "Al concluir este año de servicio, mi corazón rebosa de agradecimiento. Gracias a cada presidente, secretaria, macero y socio por no rendirse jamás y por mantener viva la antorcha del rotarismo en el norte de Chile.",
        pdfUrl: "/docs/carta-gd-patricia-junio-2026.pdf",
        date: "2026-06-01"
      },
      {
        id: "patricia-may-2026",
        month: "Mayo 2026",
        title: "Carta N° 11: La Conferencia Distrital en Viña del Mar",
        summary: "Invitación oficial y programa definitivo de la Conferencia de Distrito 2026 con destacados expositores internacionales.",
        fullText: "Nos reuniremos en el Club de Viña del Mar para celebrar nuestras victorias compartidas y planificar el futuro de nuestra institución.",
        pdfUrl: "/docs/carta-gd-patricia-mayo-2026.pdf",
        date: "2026-05-01"
      }
    ]
  },
  {
    id: "rodrigo",
    slug: "rodrigo",
    name: "Rodrigo Jarufe Fuentes",
    shortName: "Rodrigo",
    period: "2024-2025",
    homeClub: "Rotary Club Viña del Mar",
    theme: "Crea Esperanza en el Mundo",
    photoUrl: "",
    bio: "Empresario y académico universitario. Fomentó la sustentabilidad financiera de los clubes y la digitalización de las actas y capacitaciones distritales.",
    letters: [
      {
        id: "rodrigo-jun-2025",
        month: "Junio 2025",
        title: "Carta N° 12: Esperanza cumplida y legado para el futuro",
        summary: "Resumen de las metas logradas en alfabetización y donaciones a la Fundación Rotaria.",
        fullText: "Un año de trabajo incansable donde demostramos que la esperanza se construye con hechos concretos y voluntades unidas.",
        pdfUrl: "/docs/carta-gd-rodrigo-junio-2025.pdf",
        date: "2025-06-01"
      }
    ]
  },
  {
    id: "felipe",
    slug: "felipe",
    name: "Felipe Platero Garibaldi",
    shortName: "Felipe",
    period: "2023-2024",
    homeClub: "Rotary Club Antofagasta",
    theme: "Imagina Rotary",
    photoUrl: "",
    bio: "Abogado y docente de Derecho Constitucional. Reconocido por modernizar los reglamentos internos del distrito y promover la ética profesional en el servicio.",
    letters: [
      {
        id: "felipe-dic-2023",
        month: "Diciembre 2023",
        title: "Carta N° 6: Navidad con sentido y fraternidad rotaria",
        summary: "Reflexión sobre el valor de la generosidad y el impacto de los comedores rotarios durante las fiestas de fin de año.",
        fullText: "Llevemos la alegría de Rotary a los hogares más necesitados de nuestro norte grande y centro del país.",
        pdfUrl: "/docs/carta-gd-felipe-diciembre-2023.pdf",
        date: "2023-12-01"
      }
    ]
  },
  {
    id: "edgar",
    slug: "edgar",
    name: "Edgar Ibarra González",
    shortName: "Edgar",
    period: "2022-2023",
    homeClub: "Rotary Club Iquique",
    theme: "Servir Para Cambiar Vidas",
    photoUrl: "",
    bio: "Contador Auditor con más de 30 años de rotarismo. Impulsó la transparencia contable y la creación de 4 nuevos clubes satélite en Tarapacá y Atacama.",
    letters: [
      {
        id: "edgar-abr-2023",
        month: "Abril 2023",
        title: "Carta N° 10: Salud materno-infantil en el norte chileno",
        summary: "Proyectos conjuntos con maternidades públicas y entrega de incubadoras móviles.",
        fullText: "Proteger la vida de un recién nacido es asegurar el porvenir de nuestra patria.",
        pdfUrl: "/docs/carta-gd-edgar-abril-2023.pdf",
        date: "2023-04-01"
      }
    ]
  },
  {
    id: "emilio",
    slug: "emilio",
    name: "Emilio Sepúlveda Aguilar",
    shortName: "Emilio",
    period: "2021-2022",
    homeClub: "Rotary Club Quilpué",
    theme: "Rotary Abre Oportunidades",
    photoUrl: "",
    bio: "Profesor de Estado y escritor. Lideró la respuesta solidaria durante los tiempos de pandemia, promoviendo ollas comunes, ventiladores mecánicos y conectividad escolar.",
    letters: [
      {
        id: "emilio-oct-2021",
        month: "Octubre 2021",
        title: "Carta N° 4: La Polio no espera y Rotary no se detiene",
        summary: "Campaña de recaudación telemática para la erradicación global de la poliomielitis.",
        fullText: "Incluso en momentos de incertidumbre sanitaria mundial, Rotary se mantuvo firme en la primera línea de la solidaridad.",
        pdfUrl: "/docs/carta-gd-emilio-octubre-2021.pdf",
        date: "2021-10-01"
      }
    ]
  },
  {
    id: "humberto",
    slug: "humberto",
    name: "Humberto Beckers Silva",
    shortName: "Humberto",
    period: "2020-2021",
    homeClub: "Rotary Club Arica",
    theme: "Rotary Conecta el Mundo",
    photoUrl: "",
    bio: "Arquitecto urbanista. Desarrolló el plan maestro de sedes rotarias sustentables e impulsó los comités binacionales de paz con el sur de Perú y Bolivia.",
    letters: [
      {
        id: "humberto-feb-2021",
        month: "Febrero 2021",
        title: "Carta N° 8: Mes de la Paz y la Resolución de Conflictos",
        summary: "Mensaje por el 116° aniversario de Rotary International y la hermandad universal.",
        fullText: "La paz se construye día a día en cada comunidad cuando vencemos el hambre, la ignorancia y la indiferencia.",
        pdfUrl: "/docs/carta-gd-humberto-febrero-2021.pdf",
        date: "2021-02-01"
      }
    ]
  },
  {
    id: "jose-miguel",
    slug: "jose-miguel",
    name: "José Miguel Oportus Valenzuela",
    shortName: "José Miguel",
    period: "2019-2020",
    homeClub: "Rotary Club Copiapó",
    theme: "Sé la Inspiración",
    photoUrl: "",
    bio: "Geólogo y consultor minero. Dedicó su periodo a la protección de las cuencas desérticas y la provisión de agua potable en asentamientos rurales de Atacama.",
    letters: [
      {
        id: "jose-miguel-nov-2019",
        month: "Noviembre 2019",
        title: "Carta N° 5: La Fundación Rotaria, nuestro motor de servicio",
        summary: "Estrategias para que cada socio done US$ 100 anuales a la Fundación Rotaria (Every Rotarian Every Year).",
        fullText: "Nuestras donaciones a la Fundación se transforman en pozos de agua, cirugías y escuelas en los rincones más olvidados del planeta.",
        pdfUrl: "/docs/carta-gd-jose-miguel-nov-2019.pdf",
        date: "2019-11-01"
      }
    ]
  },
  {
    id: "luz",
    slug: "luz",
    name: "Luz Angélica Gómez Barrientos",
    shortName: "Luz",
    period: "2018-2019",
    homeClub: "Rotary Club San Felipe",
    theme: "Rotary Marca la Diferencia",
    photoUrl: "",
    bio: "Farmacéutica y primera mujer gobernadora en la historia del Distrito 4320. Pionera en el fomento del liderazgo femenino rotario en Chile.",
    letters: [
      {
        id: "luz-mar-2019",
        month: "Marzo 2019",
        title: "Carta N° 9: Mes del Agua y Saneamiento",
        summary: "Inauguración de filtros comunitarios y conmemoración del Día Internacional de la Mujer.",
        fullText: "Las mujeres rotarias hemos demostrado que con coraje y ternura el servicio se vuelve invencible.",
        pdfUrl: "/docs/carta-gd-luz-marzo-2019.pdf",
        date: "2019-03-01"
      }
    ]
  },
  {
    id: "ricardo",
    slug: "ricardo",
    name: "Ricardo Vera Morales",
    shortName: "Ricardo",
    period: "2017-2018",
    homeClub: "Rotary Club Calama",
    theme: "Rotary al Servicio de la Humanidad",
    photoUrl: "",
    bio: "Técnico en Telecomunicaciones. Impulsó la conectividad radial de emergencia entre los clubes rotarios del norte chileno para situaciones de catástrofe.",
    letters: [
      {
        id: "ricardo-ene-2018",
        month: "Enero 2018",
        title: "Carta N° 7: Servicio Profesional y Ética Rotaria",
        summary: "La Prueba Cuádruple aplicada a los negocios y a la función pública.",
        fullText: "Nuestras profesiones son el vehículo supremo para dignificar la vida en sociedad.",
        pdfUrl: "/docs/carta-gd-ricardo-enero-2018.pdf",
        date: "2018-01-01"
      }
    ]
  },
  {
    id: "sonia",
    slug: "sonia",
    name: "Sonia Garay Castillo",
    shortName: "Sonia",
    period: "2016-2017",
    homeClub: "Rotary Club Coquimbo",
    theme: "Rotary al Servicio de la Comunidad",
    photoUrl: "",
    bio: "Asistente Social y gestora cultural. Lideró los fondos de emergencia para damnificados tras el terremoto y tsunami de Coquimbo en 2015.",
    letters: [
      {
        id: "sonia-sep-2016",
        month: "Septiembre 2016",
        title: "Carta N° 3: Fiestas Patrias con Solidaridad y Amistad",
        summary: "Reencuentro de los clubes y apoyo solidario a pescadores artesanales.",
        fullText: "Chile late en el corazón de cada club rotario que tiende su mano al que más sufre.",
        pdfUrl: "/docs/carta-gd-sonia-septiembre-2016.pdf",
        date: "2016-09-01"
      }
    ]
  },
  {
    id: "wilson",
    slug: "wilson",
    name: "Wilson Pizarro Carvajal",
    shortName: "Wilson",
    period: "2015-2016",
    homeClub: "Rotary Club Ovalle",
    theme: "Enriquece el Mundo",
    photoUrl: "",
    bio: "Agrónomo e investigador agrícola. Fomentó el intercambio de jóvenes (RYE) y la creación de bosques nativos rotarios en el Valle del Limarí.",
    letters: [
      {
        id: "wilson-nov-2015",
        month: "Noviembre 2015",
        title: "Carta N° 5: Juventud e Intercambio Estudiantil",
        summary: "Bienvenida a los 35 estudiantes de intercambio internacional llegados al Distrito 4320.",
        fullText: "Un joven que conoce otras culturas es un embajador de la paz mundial para toda la vida.",
        pdfUrl: "/docs/carta-gd-wilson-nov-2015.pdf",
        date: "2015-11-01"
      }
    ]
  }
];
