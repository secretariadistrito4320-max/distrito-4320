export interface RotaryClub {
  id: string;
  name: string;
  slug: string;
  region: string;
  zone: string;
  charterDate: string; // Fecha de Carta Constitutiva
  anniversaryDayMonth: string; // Día y mes para calendario
  meetingDay: string; // e.g. "Miércoles 20:30 hrs"
  meetingTime: string;
  meetingPlace: string;
  president: string;
  secretary: string;
  treasurer: string;
  macero: string;
  motto: string;
  memberCount: number;
  bannerImage: string;
  logoUrl?: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  summary: string;
  featuredProjects: string[];
}

export const CLUBS_DATA: RotaryClub[] = [
  {
    id: "la-serena",
    name: "Rotary Club La Serena",
    slug: "la-serena",
    region: "Región de Coquimbo",
    zone: "Zona 4 - Elqui",
    charterDate: "1927-05-18",
    anniversaryDayMonth: "18 de Mayo",
    meetingDay: "Miércoles",
    meetingTime: "20:30 hrs",
    meetingPlace: "Sede Rotaria, Calle Los Carrera 380, La Serena",
    president: "Fernando Tapia Morales",
    secretary: "Ana María Cortés",
    treasurer: "Jorge Albarrán Peña",
    macero: "Rodrigo Véliz",
    motto: "Servir con Orgullo y Fraternidad en la Tierra de Gabriela",
    memberCount: 38,
    bannerImage: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop",
    contactEmail: "contacto@rotarylaserena.cl",
    contactPhone: "+56 51 222 3410",
    address: "Los Carrera 380, La Serena, Región de Coquimbo",
    summary: "Fundado en 1927, Rotary Club La Serena es uno de los clubes decanos del norte de Chile, liderando proyectos de salud visual, bancos de ayudas técnicas y becas de excelencia escolar para niños vulnerables.",
    featuredProjects: [
      "Banco de Ayudas Técnicas para Adultos Mayores",
      "Clínica de Salud Visual Infantil",
      "Arborización de Plazas Barriales"
    ]
  },
  {
    id: "valparaiso",
    name: "Rotary Club Valparaíso",
    slug: "valparaiso",
    region: "Región de Valparaíso",
    zone: "Zona 7 - Costa Centro",
    charterDate: "1923-04-12",
    anniversaryDayMonth: "12 de Abril",
    meetingDay: "Jueves",
    meetingTime: "13:30 hrs",
    meetingPlace: "Club Naval de Valparaíso, Condell 1586",
    president: "Gonzalo Valenzuela R.",
    secretary: "Patricia Arratia G.",
    treasurer: "Marcelo Henríquez P.",
    macero: "Esteban Donoso",
    motto: "Pioneros del Rotarismo en el Océano Pacífico",
    memberCount: 44,
    bannerImage: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    contactEmail: "secretaria@rotaryvalparaiso.cl",
    contactPhone: "+56 32 225 1923",
    address: "Condell 1586, Valparaíso",
    summary: "Primer club rotario de la costa del Pacífico sur, con más de 100 años de servicio ininterrumpido a la comunidad porteña. Destaca por sus plantas desaladoras y becas universitarias.",
    featuredProjects: [
      "Plantas Potabilizadoras Solares para Caletas",
      "Restauración Patrimonial de Ascensores",
      "Programa de Apoyo a Bomberos de Valparaíso"
    ]
  },
  {
    id: "antofagasta",
    name: "Rotary Club Antofagasta",
    slug: "antofagasta",
    region: "Región de Antofagasta",
    zone: "Zona 2 - Desierto y Minería",
    charterDate: "1926-11-20",
    anniversaryDayMonth: "20 de Noviembre",
    meetingDay: "Martes",
    meetingTime: "20:45 hrs",
    meetingPlace: "Hotel Antofagasta, Balmaceda 2575",
    president: "Mauricio Sanhueza C.",
    secretary: "Loreto Miranda K.",
    treasurer: "Claudio Zepeda T.",
    macero: "Alfonso Bravo",
    motto: "Acción Solidaria en el Corazón Minero de Chile",
    memberCount: 35,
    bannerImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop",
    contactEmail: "info@rotaryantofagasta.cl",
    contactPhone: "+56 55 234 8800",
    address: "Balmaceda 2575, Antofagasta",
    summary: "Líder en megaoperativos médicos y quirúrgicos en alianza con hospitales regionales. Promueve el desarrollo integral de la juventud mediante brigadas de liderazgo RYLA e Interact.",
    featuredProjects: [
      "Operativo Quirúrgico de Labio Leporino y Quemaduras",
      "Comedor Solidario Padre Hurtado",
      "Campaña 'Abrigando el Desierto'"
    ]
  },
  {
    id: "arica",
    name: "Rotary Club Arica",
    slug: "arica",
    region: "Región de Arica y Parinacota",
    zone: "Zona 1 - Puerta Norte",
    charterDate: "1928-09-14",
    anniversaryDayMonth: "14 de Septiembre",
    meetingDay: "Viernes",
    meetingTime: "21:00 hrs",
    meetingPlace: "Sede Social Arica, 21 de Mayo 670",
    president: "Carlos Mamani Quispe",
    secretary: "Gabriela Silva Rojas",
    treasurer: "Héctor Gómez V.",
    macero: "Luis Araya",
    motto: "Paz, Integración Fronteriza y Servicio Sin Fronteras",
    memberCount: 30,
    bannerImage: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?q=80&w=1200&auto=format&fit=crop",
    contactEmail: "contacto@rotaryarica.cl",
    contactPhone: "+56 58 221 4455",
    address: "21 de Mayo 670, Arica",
    summary: "Guardián de la fraternidad internacional en la triple frontera. Desarrolla proyectos de agricultura limpia en los valles de Lluta y Azapa e intercambios estudiantiles transfronterizos.",
    featuredProjects: [
      "Huertos Agroecológicos en Escuelas Rurales",
      "Jornadas Médicas Trinacionales Chile-Perú-Bolivia",
      "Banco de Libros Escolares de Azapa"
    ]
  },
  {
    id: "iquique",
    name: "Rotary Club Iquique",
    slug: "iquique",
    region: "Región de Tarapacá",
    zone: "Zona 1 - Tarapacá",
    charterDate: "1927-10-05",
    anniversaryDayMonth: "05 de Octubre",
    meetingDay: "Lunes",
    meetingTime: "20:30 hrs",
    meetingPlace: "Club de la Unión Iquique, Plaza Prat s/n",
    president: "Valeria Pinto Morales",
    secretary: "Cristián Barraza H.",
    treasurer: "Paulina Solís M.",
    macero: "René Carvajal",
    motto: "Fuerza, Heroísmo y Servicio a Nuestra Gente",
    memberCount: 32,
    bannerImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    contactEmail: "secretaria@rotaryiquique.cl",
    contactPhone: "+56 57 241 1200",
    address: "Plaza Prat s/n, Iquique",
    summary: "Con casi un siglo de trayectoria en Tarapacá, centra su labor en el empoderamiento de mujeres emprendedoras, la salud bucal en caletas y la donación de instrumental para rescate marítimo.",
    featuredProjects: [
      "Academia 'Mujeres en Acción' para Emprendedoras",
      "Salud Bucal y Flúor en Caletas del Litoral",
      "Equipamiento de Emergencia para Bomberos"
    ]
  },
  {
    id: "vina-del-mar",
    name: "Rotary Club Viña del Mar",
    slug: "vina-del-mar",
    region: "Región de Valparaíso",
    zone: "Zona 7 - Costa Centro",
    charterDate: "1931-06-25",
    anniversaryDayMonth: "25 de Junio",
    meetingDay: "Miércoles",
    meetingTime: "13:30 hrs",
    meetingPlace: "Club de Viña, Plaza Vergara s/n",
    president: "Ignacio De la Fuente S.",
    secretary: "Beatriz Larraguibel O.",
    treasurer: "Eduardo Carrasco L.",
    macero: "Tomás Ureta",
    motto: "Embelleciendo Vidas a Través del Servicio",
    memberCount: 40,
    bannerImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    contactEmail: "contacto@rotaryvinadelmar.cl",
    contactPhone: "+56 32 268 4500",
    address: "Plaza Vergara s/n, Viña del Mar",
    summary: "Reconocido por sus operativos oftalmológicos, la mantención de jardines infantiles comunitarios y la entrega de reconocimientos al mérito ciudadano 'Paul Harris Local'.",
    featuredProjects: [
      "Operativo Oftalmológico Infantil 'Ver para Crecer'",
      "Habilitación de Salas Sensoriales TEA",
      "Recuperación de Espacios Verdes Urbanos"
    ]
  },
  {
    id: "copiapo",
    name: "Rotary Club Copiapó",
    slug: "copiapo",
    region: "Región de Atacama",
    zone: "Zona 3 - Valles del Desierto",
    charterDate: "1935-08-30",
    anniversaryDayMonth: "30 de Agosto",
    meetingDay: "Jueves",
    meetingTime: "20:30 hrs",
    meetingPlace: "Sede Rotaria Copiapó, O'Higgins 740",
    president: "Rodrigo Zuleta P.",
    secretary: "Mariela Campillay",
    treasurer: "Sergio Santander",
    macero: "Guillermo Páez",
    motto: "Floreciendo en la Adversidad con Amor por Atacama",
    memberCount: 28,
    bannerImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
    contactEmail: "contacto@rotarycopiapo.cl",
    contactPhone: "+56 52 221 7890",
    address: "O'Higgins 740, Copiapó",
    summary: "Referente en Atacama en gestión del riesgo de desastres, reforestación del río Copiapó con especies nativas y provisión de estanques de agua para crianceros de la precordillera.",
    featuredProjects: [
      "Reforestación Nativa con Algarrobos y Chañares",
      "Filtros de Agua Domésticos para Familias Rurales",
      "Fondo de Emergencia Escolar ante Aluviones"
    ]
  },
  {
    id: "coquimbo",
    name: "Rotary Club Coquimbo",
    slug: "coquimbo",
    region: "Región de Coquimbo",
    zone: "Zona 4 - Elqui",
    charterDate: "1938-12-03",
    anniversaryDayMonth: "03 de Diciembre",
    meetingDay: "Martes",
    meetingTime: "20:30 hrs",
    meetingPlace: "Club Social de Coquimbo, Aldunate 1035",
    president: "César Munizaga F.",
    secretary: "Francisca Osorio G.",
    treasurer: "Raúl Tapia V.",
    macero: "Manuel Navea",
    motto: "El Puerto Solidario que Guía con la Luz del Faro",
    memberCount: 29,
    bannerImage: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1200&auto=format&fit=crop",
    contactEmail: "contacto@rotarycoquimbo.cl",
    contactPhone: "+56 51 231 6670",
    address: "Aldunate 1035, Coquimbo",
    summary: "Comprometido con la inclusión de deportistas paralímpicos, apoyo a las familias del borde costero y fomento del cuidado de los humedales urbanos de la bahía.",
    featuredProjects: [
      "Donación de Equipamiento Deportivo Paralímpico",
      "Limpieza y Señalética del Humedal El Culebrón",
      "Entrega de Becas Alimenticias a Universitarios"
    ]
  },
  {
    id: "calama",
    name: "Rotary Club Calama",
    slug: "calama",
    region: "Región de Antofagasta",
    zone: "Zona 2 - El Loa",
    charterDate: "1942-03-15",
    anniversaryDayMonth: "15 de Marzo",
    meetingDay: "Miércoles",
    meetingTime: "21:00 hrs",
    meetingPlace: "Sede Rotaria Calama, Sotomayor 1850",
    president: "Víctor Barrientos C.",
    secretary: "Silvia Collao A.",
    treasurer: "Néstor Rivera J.",
    macero: "Hugo Pavez",
    motto: "Calidez Humana en la Altura de la Puna",
    memberCount: 26,
    bannerImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    contactEmail: "secretaria@rotarycalama.cl",
    contactPhone: "+56 55 231 9000",
    address: "Sotomayor 1850, Calama",
    summary: "Atiende las necesidades críticas de las comunidades atacameñas del Alto El Loa, llevando energía termosolar, abrigo de invierno y clínicas dentales móviles.",
    featuredProjects: [
      "Termotanques Solares para Pueblos del Alto El Loa",
      "Operativo Dental Rural en Caspana y Chiu Chiu",
      "Campaña Invernal 'Frío Cero'"
    ]
  },
  {
    id: "quilpue",
    name: "Rotary Club Quilpué",
    slug: "quilpue",
    region: "Región de Valparaíso",
    zone: "Zona 6 - Marga Marga",
    charterDate: "1948-07-22",
    anniversaryDayMonth: "22 de Julio",
    meetingDay: "Lunes",
    meetingTime: "20:00 hrs",
    meetingPlace: "Sede Rotaria Quilpué, Blanco Encalada 1230",
    president: "Camila Arancibia D.",
    secretary: "Manuel Godoy R.",
    treasurer: "Teresa Bustamante",
    macero: "Emilio Castro",
    motto: "Cultura, Fraternidad y Juventud en Acción",
    memberCount: 27,
    bannerImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
    contactEmail: "contacto@rotaryquilpue.cl",
    contactPhone: "+56 32 291 4400",
    address: "Blanco Encalada 1230, Quilpué",
    summary: "Impulsa bibliotecas rodantes comunitarias, apoyo a ollas comunes y una destacada labor con clubes juveniles Interact y Rotaract en la provincia de Marga Marga.",
    featuredProjects: [
      "Bibliotecas Rodantes Comunitarias",
      "Equipamiento de Talleres Técnicos Vocacionales",
      "Campamento de Liderazgo Juvenil RYLA Marga Marga"
    ]
  },
  {
    id: "ovalle",
    name: "Rotary Club Ovalle",
    slug: "ovalle",
    region: "Región de Coquimbo",
    zone: "Zona 5 - Limarí",
    charterDate: "1936-10-18",
    anniversaryDayMonth: "18 de Octubre",
    meetingDay: "Jueves",
    meetingTime: "20:30 hrs",
    meetingPlace: "Sede Rotaria Ovalle, Vicuña Mackenna 450",
    president: "Osvaldo Barraza V.",
    secretary: "Margarita Jofré T.",
    treasurer: "Claudio Olivares",
    macero: "Arturo Segovia",
    motto: "El Corazón Fértil del Limarí al Servicio de los Pueblos",
    memberCount: 24,
    bannerImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    contactEmail: "secretaria@rotaryovalle.cl",
    contactPhone: "+56 53 262 1100",
    address: "Vicuña Mackenna 450, Ovalle",
    summary: "Pionero en soluciones de atrapanieblas y bombas solares para pequeños agricultores y escuelas rurales del secano costero e interior de la Provincia del Limarí.",
    featuredProjects: [
      "Sistemas de Cosecha de Aguas Lluvias y Atrapanieblas",
      "Entrega de Útiles e Indumentaria Escolar Rural",
      "Campaña de Prevención Cardiovascular"
    ]
  },
  {
    id: "san-felipe",
    name: "Rotary Club San Felipe",
    slug: "san-felipe",
    region: "Región de Valparaíso",
    zone: "Zona 8 - Aconcagua",
    charterDate: "1933-04-08",
    anniversaryDayMonth: "08 de Abril",
    meetingDay: "Martes",
    meetingTime: "20:30 hrs",
    meetingPlace: "Club San Felipe, Merced 140",
    president: "Hernán Herrera G.",
    secretary: "Catalina Ponce S.",
    treasurer: "Mario Gallardo L.",
    macero: "Gustavo Riveros",
    motto: "Tradición y Nobleza en el Valle de Aconcagua",
    memberCount: 28,
    bannerImage: "https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=1200&auto=format&fit=crop",
    contactEmail: "contacto@rotarysanfelipe.cl",
    contactPhone: "+56 34 251 2233",
    address: "Merced 140, San Felipe",
    summary: "Tradicional club de la cordillera de Aconcagua con foco en el equipamiento de hospitales provinciales, becas universitarias y preservación del patrimonio agrícola.",
    featuredProjects: [
      "Incubadoras y Monitores para Neonatología Hospital San Camilo",
      "Becas de Educación Superior para Jóvenes Destacados",
      "Operativo de Vacunación y Esterilización de Mascotas"
    ]
  }
];
