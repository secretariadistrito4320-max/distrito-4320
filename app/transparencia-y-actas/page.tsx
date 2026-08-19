import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, ArrowLeft, CreditCard, FileText, Building2 } from 'lucide-react';

export const metadata = {
  title: 'Transparencia y Rendición | Rotary Distrito 4320',
  description: 'Política oficial de rendición de cuentas, acceso a actas y estados financieros del Distrito 4320.',
};

export default function TransparenciaPage() {
  return (
    <div className="w-full bg-[#F8FAFC] py-10 sm:py-16 font-sans min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Botón Volver */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#00246C] hover:text-blue-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-[#F7A81B]" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Encabezado */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#00246C] text-xs font-bold border border-blue-100 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F7A81B]" />
            <span>Probidad Institucional</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#00246C]">
            Transparencia y Rendición de Cuentas
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            El Distrito 4320 mantiene un firme compromiso con la ética, el correcto uso de los fondos y la información abierta para todas las socias y socios de los clubes.
          </p>
        </div>

        {/* Secciones Informativas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-[#00246C]">
              <CreditCard className="w-5 h-5 text-[#F7A81B]" />
              <h3 className="font-bold text-base">Estado de Pagos y Aranceles</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consulta los montos fijados de cuotas per cápita, fondos de juventud y cuentas bancarias oficiales para transferencias de la Gobernación y Revista Rotario de Chile[cite: 3].
            </p>
            <div className="pt-2">
              <Link
                href="/pagos-2026-2027"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00246C] bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors"
              >
                <span>Ver Aranceles 2026-2027</span>
                <span className="text-[#F7A81B]">→</span>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-[#00246C]">
              <FileText className="w-5 h-5 text-[#F7A81B]" />
              <h3 className="font-bold text-base">Solicitud de Actas y Documentos</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Las directivas de los clubes rotarios pueden solicitar copias oficiales de actas de asambleas, conferencias distritales o estatutos a la Secretaría Distrital.
            </p>
            <div className="pt-2">
              <a
                href="mailto:likakofu@gmail.com?subject=Solicitud%20de%20Documentacion%20Distrital"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00246C] bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#F7A81B]" />
                <span>Contactar a Secretaría</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
