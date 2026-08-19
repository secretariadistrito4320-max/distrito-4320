export interface ClubPaymentStatus {
  clubId: string;
  clubName: string;
  zone: string;
  activeMembers: number;
  semester1Status: "Pagado" | "Pendiente" | "Parcial";
  semester1Amount: number;
  semester2Status: "Pagado" | "Pendiente" | "No Emitido";
  semester2Amount: number;
  lastPaymentDate?: string;
  receiptNumber?: string;
}

export interface TransparencyDocument {
  id: string;
  title: string;
  category: "Actas de Asamblea" | "Estatutos y Reglamentos" | "Balances y Auditorías" | "Manuales Distritales";
  date: string;
  period: string;
  fileSize: string;
  downloadUrl: string;
  description: string;
}

export const BANK_DETAILS = {
  bankName: "Banco Santander Chile",
  accountType: "Cuenta Corriente",
  accountNumber: "78-904320-1",
  beneficiaryName: "Corporación Rotary International Distrito 4320",
  rut: "71.432.000-K",
  emailReceipt: "tesoreria@rotary4320.cl",
  emailSecretaria: "secretaria@rotary4320.cl",
  perCapitaRateSemesterCLP: 18500, // Cuota per cápita distrital por semestre
  perCapitaInsuranceCLP: 3500 // Seguro rotario anual
};

export const CLUB_PAYMENTS_2026_2027: ClubPaymentStatus[] = [
  {
    clubId: "la-serena",
    clubName: "Rotary Club La Serena",
    zone: "Zona 4 - Elqui",
    activeMembers: 38,
    semester1Status: "Pagado",
    semester1Amount: 703000,
    semester2Status: "Pendiente",
    semester2Amount: 703000,
    lastPaymentDate: "2026-07-20",
    receiptNumber: "D4320-2026-0012"
  },
  {
    clubId: "valparaiso",
    clubName: "Rotary Club Valparaíso",
    zone: "Zona 7 - Costa Centro",
    activeMembers: 44,
    semester1Status: "Pagado",
    semester1Amount: 814000,
    semester2Status: "Pendiente",
    semester2Amount: 814000,
    lastPaymentDate: "2026-07-15",
    receiptNumber: "D4320-2026-0008"
  },
  {
    clubId: "antofagasta",
    clubName: "Rotary Club Antofagasta",
    zone: "Zona 2 - Minería",
    activeMembers: 35,
    semester1Status: "Pagado",
    semester1Amount: 647500,
    semester2Status: "Pendiente",
    semester2Amount: 647500,
    lastPaymentDate: "2026-07-28",
    receiptNumber: "D4320-2026-0021"
  },
  {
    clubId: "arica",
    clubName: "Rotary Club Arica",
    zone: "Zona 1 - Puerta Norte",
    activeMembers: 30,
    semester1Status: "Pagado",
    semester1Amount: 555000,
    semester2Status: "Pendiente",
    semester2Amount: 555000,
    lastPaymentDate: "2026-08-02",
    receiptNumber: "D4320-2026-0034"
  },
  {
    clubId: "iquique",
    clubName: "Rotary Club Iquique",
    zone: "Zona 1 - Tarapacá",
    activeMembers: 32,
    semester1Status: "Pagado",
    semester1Amount: 592000,
    semester2Status: "Pendiente",
    semester2Amount: 592000,
    lastPaymentDate: "2026-07-22",
    receiptNumber: "D4320-2026-0016"
  },
  {
    clubId: "vina-del-mar",
    clubName: "Rotary Club Viña del Mar",
    zone: "Zona 7 - Costa Centro",
    activeMembers: 40,
    semester1Status: "Pagado",
    semester1Amount: 740000,
    semester2Status: "Pendiente",
    semester2Amount: 740000,
    lastPaymentDate: "2026-07-18",
    receiptNumber: "D4320-2026-0010"
  },
  {
    clubId: "copiapo",
    clubName: "Rotary Club Copiapó",
    zone: "Zona 3 - Valles del Desierto",
    activeMembers: 28,
    semester1Status: "Pagado",
    semester1Amount: 518000,
    semester2Status: "Pendiente",
    semester2Amount: 518000,
    lastPaymentDate: "2026-08-05",
    receiptNumber: "D4320-2026-0041"
  },
  {
    clubId: "coquimbo",
    clubName: "Rotary Club Coquimbo",
    zone: "Zona 4 - Elqui",
    activeMembers: 29,
    semester1Status: "Pendiente",
    semester1Amount: 536500,
    semester2Status: "Pendiente",
    semester2Amount: 536500
  },
  {
    clubId: "calama",
    clubName: "Rotary Club Calama",
    zone: "Zona 2 - El Loa",
    activeMembers: 26,
    semester1Status: "Pagado",
    semester1Amount: 481000,
    semester2Status: "Pendiente",
    semester2Amount: 481000,
    lastPaymentDate: "2026-07-30",
    receiptNumber: "D4320-2026-0027"
  },
  {
    clubId: "quilpue",
    clubName: "Rotary Club Quilpué",
    zone: "Zona 6 - Marga Marga",
    activeMembers: 27,
    semester1Status: "Pendiente",
    semester1Amount: 499500,
    semester2Status: "Pendiente",
    semester2Amount: 499500
  },
  {
    clubId: "ovalle",
    clubName: "Rotary Club Ovalle",
    zone: "Zona 5 - Limarí",
    activeMembers: 24,
    semester1Status: "Pagado",
    semester1Amount: 444000,
    semester2Status: "Pendiente",
    semester2Amount: 444000,
    lastPaymentDate: "2026-08-11",
    receiptNumber: "D4320-2026-0048"
  },
  {
    clubId: "san-felipe",
    clubName: "Rotary Club San Felipe",
    zone: "Zona 8 - Aconcagua",
    activeMembers: 28,
    semester1Status: "Pendiente",
    semester1Amount: 518000,
    semester2Status: "Pendiente",
    semester2Amount: 518000
  }
];

export const TRANSPARENCY_DOCUMENTS: TransparencyDocument[] = [
  {
    id: "doc-01",
    title: "Acta Oficial de Apertura - Asamblea Distrital 2026-2027",
    category: "Actas de Asamblea",
    date: "2026-08-02",
    period: "2026-2027",
    fileSize: "2.4 MB",
    downloadUrl: "#",
    description: "Aprobación del presupuesto distrital 2026-2027, fijación de cuotas per cápita y nombramiento del equipo distrital de gobernación."
  },
  {
    id: "doc-02",
    title: "Balance Financiero Consolidado y Dictamen de Auditoría 2025-2026",
    category: "Balances y Auditorías",
    date: "2026-06-30",
    period: "2025-2026",
    fileSize: "4.1 MB",
    downloadUrl: "#",
    description: "Informe emitido por la Comisión Revisora de Cuentas del Distrito 4320 con detalle de ingresos por cuotas y egresos de proyectos."
  },
  {
    id: "doc-03",
    title: "Estatuto Oficial del Distrito 4320 (Actualizado Mayo 2026)",
    category: "Estatutos y Reglamentos",
    date: "2026-05-15",
    period: "2026-2030",
    fileSize: "1.8 MB",
    downloadUrl: "#",
    description: "Cuerpo normativo regulatorio del Distrito 4320 conforme a las directrices vigentes de Rotary International."
  },
  {
    id: "doc-04",
    title: "Manual de Procedimientos y Guía de Tesorería para Clubes D4320",
    category: "Manuales Distritales",
    date: "2026-07-10",
    period: "2026-2027",
    fileSize: "3.2 MB",
    downloadUrl: "#",
    description: "Instrucciones para la rendición de subvenciones distritales, pagos per cápita y emisión de certificados de donación con fines tributarios."
  },
  {
    id: "doc-05",
    title: "Acta de la 97ª Conferencia Distrital de Viña del Mar",
    category: "Actas de Asamblea",
    date: "2026-05-20",
    period: "2025-2026",
    fileSize: "5.6 MB",
    downloadUrl: "#",
    description: "Resoluciones plenarias, distinciones Paul Harris y proclamación del Gobernador Electo para el periodo 2027-2028."
  },
  {
    id: "doc-06",
    title: "Reglamento del Comité de Subvenciones y Fundación Rotaria D4320",
    category: "Estatutos y Reglamentos",
    date: "2026-01-20",
    period: "2026-2027",
    fileSize: "1.5 MB",
    downloadUrl: "#",
    description: "Bases y requisitos para la postulación a Subvenciones Distritales y Globales de Rotary International."
  }
];
