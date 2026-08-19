export interface Club {
  id: string;
  slug: string;
  name: string;
  city: string;
  region: string;
  meetingDay?: string;
  meetingTime?: string;
  meetingPlace?: string;
  president?: string;
  email?: string;
  charterDate?: string;
  anniversaryDayMonth?: string;
}

export const CLUBS_DATA: Club[] = [
  { id: "rc-arica", slug: "rc-arica", name: "Rotary Club Arica", city: "Arica", region: "Región de Arica y Parinacota", meetingDay: "Jueves", meetingTime: "20:30 hrs", meetingPlace: "Sede Rotaria Arica", charterDate: "1927-05-15", anniversaryDayMonth: "05-15" },
  { id: "rc-azapa", slug: "rc-azapa", name: "Rotary Club Azapa", city: "Arica", region: "Región de Arica y Parinacota", meetingDay: "Martes", meetingTime: "20:30 hrs", meetingPlace: "Valle de Azapa, Arica" },
  { id: "rc-concordia", slug: "rc-concordia", name: "Rotary Club Concordia", city: "Arica", region: "Región de Arica y Parinacota", meetingDay: "Miércoles", meetingTime: "20:00 hrs", meetingPlace: "Sede Arica" },
  { id: "rc-chinchorro", slug: "rc-chinchorro", name: "Rotary Club Chinchorro", city: "Arica", region: "Región de Arica y Parinacota", meetingDay: "Lunes", meetingTime: "20:30 hrs", meetingPlace: "Sede Chinchorro" },
  { id: "rc-san-marcos-arica", slug: "rc-san-marcos-arica", name: "Rotary Club San Marcos Arica", city: "Arica", region: "Región de Arica y Parinacota", meetingDay: "Jueves", meetingTime: "21:00 hrs", meetingPlace: "Sede Arica" },
  { id: "rc-parinacota", slug: "rc-parinacota", name: "Rotary Club Parinacota", city: "Putre", region: "Región de Arica y Parinacota", meetingDay: "Viernes", meetingTime: "20:00 hrs", meetingPlace: "Sede Putre" },
  { id: "rc-fraternidad-internacional-distrito-4320", slug: "rc-fraternidad-internacional-distrito-4320", name: "Rotary Club Fraternidad Internacional D4320", city: "Valparaíso", region: "Región de Valparaíso", meetingDay: "Telemático", meetingTime: "21:00 hrs", meetingPlace: "Plataforma Virtual" },
  { id: "rc-iquique", slug: "rc-iquique", name: "Rotary Club Iquique", city: "Iquique", region: "Región de Tarapacá", meetingDay: "Jueves", meetingTime: "21:00 hrs", meetingPlace: "Sede Rotaria Iquique", charterDate: "1927-11-20", anniversaryDayMonth: "11-20" },
  { id: "rc-cavancha", slug: "rc-cavancha", name: "Rotary Club Cavancha", city: "Iquique", region: "Región de Tarapacá", meetingDay: "Martes", meetingTime: "20:30 hrs", meetingPlace: "Cavancha, Iquique" },
  { id: "rc-huayquique", slug: "rc-huayquique", name: "Rotary Club Huayquique", city: "Iquique", region: "Región de Tarapacá", meetingDay: "Miércoles", meetingTime: "20:30 hrs", meetingPlace: "Iquique" },
  { id: "rc-santa-laura", slug: "rc-santa-laura", name: "Rotary Club Santa Laura", city: "Iquique", region: "Región de Tarapacá", meetingDay: "Jueves", meetingTime: "20:00 hrs", meetingPlace: "Iquique" },
  { id: "rc-esmeralda", slug: "rc-esmeralda", name: "Rotary Club Esmeralda", city: "Iquique", region: "Región de Tarapacá", meetingDay: "Lunes", meetingTime: "20:30 hrs", meetingPlace: "Iquique" },
  { id: "rc-pica", slug: "rc-pica", name: "Rotary Club Pica", city: "Pica", region: "Región de Tarapacá", meetingDay: "Viernes", meetingTime: "20:00 hrs", meetingPlace: "Sede Pica" },
  { id: "rc-satelite-humberstone", slug: "rc-satelite-humberstone", name: "Rotary Club Satélite Humberstone", city: "Pozo Almonte", region: "Región de Tarapacá", meetingDay: "Miércoles", meetingTime: "20:00 hrs", meetingPlace: "Pozo Almonte" },
  { id: "rc-maria-elena", slug: "rc-maria-elena", name: "Rotary Club María Elena", city: "María Elena", region: "Región de Antofagasta", meetingDay: "Jueves", meetingTime: "20:30 hrs", meetingPlace: "María Elena" },
  { id: "rc-tocopilla", slug: "rc-tocopilla", name: "Rotary Club Tocopilla", city: "Tocopilla", region: "Región de Antofagasta", meetingDay: "Martes", meetingTime: "20:30 hrs", meetingPlace: "Sede Tocopilla" },
  { id: "rc-antofagasta", slug: "rc-antofagasta", name: "Rotary Club Antofagasta", city: "Antofagasta", region: "Región de Antofagasta", meetingDay: "Jueves", meetingTime: "21:00 hrs", meetingPlace: "Sede Antofagasta", charterDate: "1926-10-12", anniversaryDayMonth: "10-12" },
  { id: "rc-la-portada", slug: "rc-la-portada", name: "Rotary Club La Portada", city: "Antofagasta", region: "Región de Antofagasta", meetingDay: "Miércoles", meetingTime: "20:30 hrs", meetingPlace: "Antofagasta" },
  { id: "rc-caliche", slug: "rc-caliche", name: "Rotary Club Caliche", city: "Antofagasta", region: "Región de Antofagasta", meetingDay: "Lunes", meetingTime: "20:30 hrs", meetingPlace: "Antofagasta" },
  { id: "rc-mejillones", slug: "rc-mejillones", name: "Rotary Club Mejillones", city: "Mejillones", region: "Región de Antofagasta", meetingDay: "Martes", meetingTime: "20:00 hrs", meetingPlace: "Mejillones" },
  { id: "rc-coloso", slug: "rc-coloso", name: "Rotary Club Coloso", city: "Antofagasta", region: "Región de Antofagasta", meetingDay: "Viernes", meetingTime: "20:30 hrs", meetingPlace: "Antofagasta" },
  { id: "rc-salar-grande", slug: "rc-salar-grande", name: "Rotary Club Salar Grande", city: "Antofagasta", region: "Región de Antofagasta", meetingDay: "Jueves", meetingTime: "20:30 hrs", meetingPlace: "Antofagasta" },
  { id: "rc-calama", slug: "rc-calama", name: "Rotary Club Calama", city: "Calama", region: "Región de Antofagasta", meetingDay: "Jueves", meetingTime: "21:00 hrs", meetingPlace: "Sede Calama" },
  { id: "rc-chuquicamata", slug: "rc-chuquicamata", name: "Rotary Club Chuquicamata", city: "Calama", region: "Región de Antofagasta", meetingDay: "Martes", meetingTime: "20:30 hrs", meetingPlace: "Calama" },
  { id: "rc-rio-loa", slug: "rc-rio-loa", name: "Rotary Club Río Loa", city: "Calama", region: "Región de Antofagasta", meetingDay: "Miércoles", meetingTime: "20:30 hrs", meetingPlace: "Calama" },
  { id: "rc-oasis-calama", slug: "rc-oasis-calama", name: "Rotary Club Oasis Calama", city: "Calama", region: "Región de Antofagasta", meetingDay: "Lunes", meetingTime: "20:30 hrs", meetingPlace: "Calama" },
  { id: "rc-taltal", slug: "rc-taltal", name: "Rotary Club Taltal", city: "Taltal", region: "Región de Antofagasta", meetingDay: "Viernes", meetingTime: "20:00 hrs", meetingPlace: "Sede Taltal" },
  { id: "rc-el-salvador", slug: "rc-el-salvador", name: "Rotary Club El Salvador", city: "Diego de Almagro", region: "Región de Atacama", meetingDay: "Jueves", meetingTime: "20:30 hrs", meetingPlace: "El Salvador" },
  { id: "rc-copiapo", slug: "rc-copiapo", name: "Rotary Club Copiapó", city: "Copiapó", region: "Región de Atacama", meetingDay: "Jueves", meetingTime: "21:00 hrs", meetingPlace: "Sede Copiapó" },
  { id: "rc-copiapo-oriente", slug: "rc-copiapo-oriente", name: "Rotary Club Copiapó Oriente", city: "Copiapó", region: "Región de Atacama", meetingDay: "Martes", meetingTime: "20:30 hrs", meetingPlace: "Copiapó" },
  { id: "rc-satelite-caldera", slug: "rc-satelite-caldera", name: "Rotary Club Satélite Bahía de Caldera", city: "Caldera", region: "Región de Atacama", meetingDay: "Miércoles", meetingTime: "20:00 hrs", meetingPlace: "Caldera" },
  { id: "rc-vallenar", slug: "rc-vallenar", name: "Rotary Club Vallenar", city: "Vallenar", region: "Región de Atacama", meetingDay: "Jueves", meetingTime: "20:30 hrs", meetingPlace: "Sede Vallenar" },
  { id: "rc-huasco", slug: "rc-huasco", name: "Rotary Club Huasco", city: "Huasco", region: "Región de Atacama", meetingDay: "Viernes", meetingTime: "20:00 hrs", meetingPlace: "Huasco" },
  { id: "rc-vicuna", slug: "rc-vicuna", name: "Rotary Club Vicuña", city: "Vicuña", region: "Región de Coquimbo", meetingDay: "Miércoles", meetingTime: "20:30 hrs", meetingPlace: "Vicuña" },
  { id: "rc-la-serena", slug: "rc-la-serena", name: "Rotary Club La Serena", city: "La Serena", region: "Región de Coquimbo", meetingDay: "Jueves", meetingTime: "21:00 hrs", meetingPlace: "Sede La Serena", charterDate: "1927-04-10", anniversaryDayMonth: "04-10" },
  { id: "rc-la-serena-oriente", slug: "rc-la-serena-oriente", name: "Rotary Club La Serena Oriente", city: "La Serena", region: "Región de Coquimbo", meetingDay: "Martes", meetingTime: "20:30 hrs", meetingPlace: "La Serena" },
  { id: "rc-la-serena-san-joaquin", slug: "rc-la-serena-san-joaquin", name: "Rotary Club La Serena San Joaquín", city: "La Serena", region: "Región de Coquimbo", meetingDay: "Lunes", meetingTime: "20:30 hrs", meetingPlace: "La Serena" },
  { id: "rc-coquimbo", slug: "rc-coquimbo", name: "Rotary Club Coquimbo", city: "Coquimbo", region: "Región de Coquimbo", meetingDay: "Jueves", meetingTime: "20:30 hrs", meetingPlace: "Sede Coquimbo" },
  { id: "rc-la-herradura", slug: "rc-la-herradura", name: "Rotary Club La Herradura", city: "Coquimbo", region: "Región de Coquimbo", meetingDay: "Martes", meetingTime: "20:30 hrs", meetingPlace: "La Herradura, Coquimbo" },
  { id: "rc-penuelas", slug: "rc-penuelas", name: "Rotary Club Peñuelas", city: "Coquimbo", region: "Región de Coquimbo", meetingDay: "Miércoles", meetingTime: "20:30 hrs", meetingPlace: "Peñuelas, Coquimbo" },
  { id: "rc-valle-del-elqui", slug: "rc-valle-del-elqui", name: "Rotary Club Valle del Elqui", city: "Vicuña", region: "Región de Coquimbo", meetingDay: "Viernes", meetingTime: "20:00 hrs", meetingPlace: "Valle del Elqui" },
  { id: "rc-ovalle", slug: "rc-ovalle", name: "Rotary Club Ovalle", city: "Ovalle", region: "Región de Coquimbo", meetingDay: "Jueves", meetingTime: "21:00 hrs", meetingPlace: "Sede Ovalle" },
  { id: "rc-punitaqui", slug: "rc-punitaqui", name: "Rotary Club Punitaqui", city: "Punitaqui", region: "Región de Coquimbo", meetingDay: "Martes", meetingTime: "20:00 hrs", meetingPlace: "Punitaqui" },
  { id: "rc-combarbala", slug: "rc-combarbala", name: "Rotary Club Combarbalá", city: "Combarbalá", region: "Región de Coquimbo", meetingDay: "Miércoles", meetingTime: "20:00 hrs", meetingPlace: "Combarbalá" },
  { id: "rc-illapel", slug: "rc-illapel", name: "Rotary Club Illapel", city: "Illapel", region: "Región de Coquimbo", meetingDay: "Jueves", meetingTime: "20:30 hrs", meetingPlace: "Sede Illapel" },
  { id: "rc-salamanca", slug: "rc-salamanca", name: "Rotary Club Salamanca", city: "Salamanca", region: "Región de Coquimbo", meetingDay: "Viernes", meetingTime: "20:00 hrs", meetingPlace: "Salamanca" },
  { id: "rc-cabildo", slug: "rc-cabildo", name: "Rotary Club Cabildo", city: "Cabildo", region: "Región de Valparaíso", meetingDay: "Jueves", meetingTime: "20:30 hrs", meetingPlace: "Cabildo" },
  { id: "rc-zapallar", slug: "rc-zapallar", name: "Rotary Club Zapallar", city: "Zapallar", region: "Región de Valparaíso", meetingDay: "Martes", meetingTime: "20:00 hrs", meetingPlace: "Zapallar" },
  { id: "rc-la-ligua", slug: "rc-la-ligua", name: "Rotary Club La Ligua", city: "La Ligua", region: "Región de Valparaíso", meetingDay: "Miércoles", meetingTime: "20:30 hrs", meetingPlace: "La Ligua" },
  { id: "rc-petorca", slug: "rc-petorca", name: "Rotary Club Petorca", city: "Petorca", region: "Región de Valparaíso", meetingDay: "Viernes", meetingTime: "20:00 hrs", meetingPlace: "Petorca" },
  { id: "rc-los-andes", slug: "rc-los-andes", name: "Rotary Club Los Andes", city: "Los Andes", region: "Región de Valparaíso", meetingDay: "Jueves", meetingTime: "21:00 hrs", meetingPlace: "Sede Los Andes" },
  { id: "rc-llay-llay-centro", slug: "rc-llay-llay-centro", name: "Rotary Club Llay Llay Centro", city: "Llay-Llay", region: "Región de Valparaíso", meetingDay: "Martes", meetingTime: "20:30 hrs", meetingPlace: "Llay-Llay" },
  { id: "rc-putaendo", slug: "rc-putaendo", name: "Rotary Club Putaendo", city: "Putaendo", region: "Región de Valparaíso", meetingDay: "Miércoles", meetingTime: "20:00 hrs", meetingPlace: "Putaendo" },
  { id: "rc-san-felipe", slug: "rc-san-felipe", name: "Rotary Club San Felipe", city: "San Felipe", region: "Región de Valparaíso", meetingDay: "Jueves", meetingTime: "20:30 hrs", meetingPlace: "Sede San Felipe" },
  { id: "rc-satelite-nuevo-llay-llay", slug: "rc-satelite-nuevo-llay-llay", name: "Rotary Club Satélite Nuevo Llay Llay", city: "Llay-Llay", region: "Región de Valparaíso", meetingDay: "Viernes", meetingTime: "20:00 hrs", meetingPlace: "Llay-Llay" },
  { id: "rc-quintero", slug: "rc-quintero", name: "Rotary Club Quintero", city: "Quintero", region: "Región de Valparaíso", meetingDay: "Martes", meetingTime: "20:30 hrs", meetingPlace: "Quintero" },
  { id: "rc-quillota", slug: "rc-quillota", name: "Rotary Club Quillota", city: "Quillota", region: "Región de Valparaíso", meetingDay: "Jueves", meetingTime: "20:30 hrs", meetingPlace: "Sede Quillota" },
  { id: "rc-la-calera", slug: "rc-la-calera", name: "Rotary Club La Calera", city: "La Calera", region: "Región de Valparaíso", meetingDay: "Miércoles", meetingTime: "20:30 hrs", meetingPlace: "La Calera" },
  { id: "rc-la-cruz", slug: "rc-la-cruz", name: "Rotary Club La Cruz", city: "La Cruz", region: "Región de Valparaíso", meetingDay: "Lunes", meetingTime: "20:00 hrs", meetingPlace: "La Cruz" },
  { id: "rc-valparaiso", slug: "rc-valparaiso", name: "Rotary Club Valparaíso", city: "Valparaíso", region: "Región de Valparaíso", meetingDay: "Jueves", meetingTime: "21:00 hrs", meetingPlace: "Sede Valparaíso", charterDate: "1923-04-14", anniversaryDayMonth: "04-14" },
  { id: "rc-villa-alemana", slug: "rc-villa-alemana", name: "Rotary Club Villa Alemana", city: "Villa Alemana", region: "Región de Valparaíso", meetingDay: "Martes", meetingTime: "20:30 hrs", meetingPlace: "Villa Alemana" },
  { id: "rc-limache", slug: "rc-limache", name: "Rotary Club Limache", city: "Limache", region: "Región de Valparaíso", meetingDay: "Miércoles", meetingTime: "20:30 hrs", meetingPlace: "Limache" },
  { id: "rc-olmue", slug: "rc-olmue", name: "Rotary Club Olmué", city: "Olmué", region: "Región de Valparaíso", meetingDay: "Viernes", meetingTime: "20:00 hrs", meetingPlace: "Olmué" },
  { id: "rc-el-almendral", slug: "rc-el-almendral", name: "Rotary Club El Almendral", city: "Valparaíso", region: "Región de Valparaíso", meetingDay: "Lunes", meetingTime: "20:30 hrs", meetingPlace: "Valparaíso" },
  { id: "rc-concon", slug: "rc-concon", name: "Rotary Club Concón", city: "Concón", region: "Región de Valparaíso", meetingDay: "Martes", meetingTime: "20:30 hrs", meetingPlace: "Concón" },
  { id: "rc-renaca", slug: "rc-renaca", name: "Rotary Club Reñaca", city: "Viña del Mar", region: "Región de Valparaíso", meetingDay: "Miércoles", meetingTime: "20:30 hrs", meetingPlace: "Reñaca, Viña del Mar" },
  { id: "rc-recreo", slug: "rc-recreo", name: "Rotary Club Recreo", city: "Viña del Mar", region: "Región de Valparaíso", meetingDay: "Jueves", meetingTime: "20:30 hrs", meetingPlace: "Recreo, Viña del Mar" },
  { id: "rc-vina-del-mar", slug: "rc-vina-del-mar", name: "Rotary Club Viña del Mar", city: "Viña del Mar", region: "Región de Valparaíso", meetingDay: "Jueves", meetingTime: "21:00 hrs", meetingPlace: "Sede Viña del Mar", charterDate: "1927-03-08", anniversaryDayMonth: "03-08" },
  { id: "rc-nogales", slug: "rc-nogales", name: "Rotary Club Nogales", city: "Nogales", region: "Región de Valparaíso", meetingDay: "Lunes", meetingTime: "20:00 hrs", meetingPlace: "Nogales" },
  { id: "rc-puchuncavi", slug: "rc-puchuncavi", name: "Rotary Club Puchuncaví", city: "Puchuncaví", region: "Región de Valparaíso", meetingDay: "Martes", meetingTime: "20:00 hrs", meetingPlace: "Puchuncaví" },
  { id: "rc-hijuelas", slug: "rc-hijuelas", name: "Rotary Club Hijuelas", city: "Hijuelas", region: "Región de Valparaíso", meetingDay: "Miércoles", meetingTime: "20:00 hrs", meetingPlace: "Hijuelas" },
  { id: "rc-quilpue", slug: "rc-quilpue", name: "Rotary Club Quilpué", city: "Quilpué", region: "Región de Valparaíso", meetingDay: "Jueves", meetingTime: "20:30 hrs", meetingPlace: "Sede Quilpué" },
  { id: "rc-valparaiso-bellavista", slug: "rc-valparaiso-bellavista", name: "Rotary Club Valparaíso Bellavista", city: "Valparaíso", region: "Región de Valparaíso", meetingDay: "Viernes", meetingTime: "20:00 hrs", meetingPlace: "Valparaíso" },
  { id: "rc-playa-ancha", slug: "rc-playa-ancha", name: "Rotary Club Playa Ancha", city: "Valparaíso", region: "Región de Valparaíso", meetingDay: "Lunes", meetingTime: "20:30 hrs", meetingPlace: "Playa Ancha, Valparaíso" },
  { id: "rc-vina-del-mar-norte", slug: "rc-vina-del-mar-norte", name: "Rotary Club Viña del Mar Norte", city: "Viña del Mar", region: "Región de Valparaíso", meetingDay: "Martes", meetingTime: "20:30 hrs", meetingPlace: "Viña del Mar" }
];
