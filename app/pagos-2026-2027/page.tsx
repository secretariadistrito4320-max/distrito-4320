import React from 'react';
import Link from 'next/link';
import { CreditCard, Mail, Building, Globe, HeartHandshake, ArrowLeft, Send } from 'lucide-react';

export const metadata = {
  title: 'Obligaciones de Pago 2026-2027 | Rotary Distrito 4320',
  description: 'Información oficial sobre aranceles, cuotas distritales y datos de transferencia bancaria del Distrito 4320.',
};

export default function PagosPage() {
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-[#00246C] text-xs font-bold border border-blue-100">
                Periodo 2026-2027
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-[#00246C] mt-2">
                Obligaciones de Pago · Clubes Distrito 4320
              </h1>
            </div>
            <div className="text-left sm:text-right text-xs text-slate-600 bg-slate-50 p-3 rounded-2xl border border-slate-200">
              <span className="block font-bold text-[#00246C]">Tesorera Distrital:</span>
              <span className="block font-semibold">Lilian Correa Fuentealba</span>
              <a href="mailto:likakofu@gmail.com" className="text-[#F7A81B] font-bold hover:underline">
                likakofu@gmail.com
              </a>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Resumen oficial de los aranceles correspondientes al <strong>1er Semestre (Julio 2026 - Diciembre 2026)</strong> para los clubes rotarios pertenecientes al Distrito 4320[cite: 3].
          </p>
        </div>

        {/* Cuentas de Destino de Pago */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* 1. ROTARY INTERNATIONAL */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#00246C]" />
                <h3 className="font-black text-lg text-[#00246C]">1. Rotary International</h3>
              </div>
              <p className="text-xs text-slate-500">
                Factura enviada directamente por RI a la Directiva de cada Club y disponible en el portal <strong>My Rotary</strong>[cite: 3].
              </p>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-600 font-medium">Cuota Rotary:</span>
                  <span className="font-bold text-[#00246C]">US$ 42,75 / Socio (Semestral)</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-600 font-medium">Consejo de Legislación:</span>
                  <span className="font-bold text-[#00246C]">US$ 1,00 / Socio (Anual)</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 italic">
              * Forma de Pago: En My Rotary (Club → Finanzas → Factura de Club → Pago con Tarjeta)[cite: 3].
            </div>
          </div>

          {/* 2. GOBERNACIÓN DISTRITO 4320 */}
          <div className="bg-white rounded-3xl p-6 border-2 border-[#00246C] shadow-md space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-[#F7A81B]" />
                <h3 className="font-black text-lg text-[#00246C]">2. Gobernación de Distrito</h3>
              </div>

              <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 space-y-2 text-xs">
                <div className="flex justify-between border-b border-blue-100 pb-2">
                  <span className="text-slate-600 font-medium">Cuota Gobernación:</span>
                  <span className="font-bold text-[#00246C]">$10.000 CLP / Socio (Semestral)</span>
                </div>
                <div className="flex justify-between border-b border-blue-100 pb-2 pt-1">
                  <span className="text-slate-600 font-medium">Página Web Distrital:</span>
                  <span className="font-bold text-[#00246C]">$35.000 CLP / Club (Anual)</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-600 font-medium">Fondo Juventud:</span>
                  <span className="font-bold text-[#00246C]">$1.000 CLP / Socio (Semestral)</span>
                </div>
              </div>

              <div className="bg-[#00246C] text-white p-4 rounded-2xl space-y-1.5 text-xs">
                <span className="text-[10px] font-bold uppercase text-[#F7A81B] block">Datos para Transferencia Bancaria:</span>
                <p><strong>Titular:</strong> Lilian Correa Fuentealba[cite: 3]</p>
                <p><strong>Banco:</strong> Itaú Chile[cite: 3]</p>
                <p><strong>Cuenta Corriente:</strong> 0231278863[cite: 3]</p>
                <p><strong>RUT:</strong> 7.996.109-4[cite: 3]</p>
                <p><strong>Email:</strong> likakofu@gmail.com[cite: 3]</p>
              </div>
            </div>
          </div>

          {/* 3. REVISTA ROTARIO DE CHILE */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-[#00246C]" />
                <h3 className="font-black text-lg text-[#00246C]">3. Revista Rotario de Chile</h3>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-600 font-medium">Cuota Revista (3 ejemplares en línea):</span>
                  <span className="font-bold text-[#00246C]">$2.000 CLP / Socio (Semestral)</span>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-4 rounded-2xl space-y-1.5 text-xs">
                <span className="text-[10px] font-bold uppercase text-[#F7A81B] block">Datos Transferencia Tesoreria CORGOR:</span>
                <p><strong>Nombre:</strong> CORGOR[cite: 3]</p>
                <p><strong>Banco:</strong> Banco Estado[cite: 3]</p>
                <p><strong>Cuenta Corriente:</strong> 1372095918[cite: 3]</p>
                <p><strong>RUT:</strong> 65.247.394-6[cite: 3]</p>
                <p><strong>Email:</strong> bmartino@quiborax.com[cite: 3]</p>
              </div>
            </div>
          </div>

          {/* 4. LA FUNDACIÓN ROTARIA */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-[#F7A81B]" />
                <h3 className="font-black text-lg text-[#00246C]">4. La Fundación Rotaria</h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Aportes voluntarios y metas comprometidas por los socios o colaboradores del club[cite: 3].
              </p>

              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs text-amber-900 space-y-1">
                <span className="font-bold block">Instrucción:</span>
                <p>En el sistema <strong>My Rotary</strong>, seleccionar opción <em>Dona</em> → Elegir actividad y realizar aporte con tarjeta de crédito[cite: 3].</p>
              </div>
            </div>
          </div>

        </div>

        {/* Notificación de Comprobantes */}
        <div className="bg-gradient-to-r from-[#00246C] to-blue-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-black text-lg text-[#F7A81B] flex items-center justify-center sm:justify-start gap-2">
              <Send className="w-5 h-5" />
              <span>Reporte de Transferencias</span>
            </h3>
            <p className="text-xs text-blue-100 max-w-xl">
              Una vez realizada la transferencia de Gobernación y Revista, enviar los comprobantes adjuntos a <strong>likakofu@gmail.com</strong> indicando el <strong>Nombre del Club</strong> y el motivo del pago[cite: 3].
            </p>
          </div>
          <a
            href="mailto:likakofu@gmail.com?subject=Comprobante%20de%20Pago%20Distrito%204320"
            className="px-6 py-3 rounded-xl bg-[#F7A81B] hover:bg-amber-400 text-[#00246C] font-black text-xs transition-all shadow-md whitespace-nowrap"
          >
            Enviar Comprobantes
          </a>
        </div>

      </div>
    </div>
  );
}
