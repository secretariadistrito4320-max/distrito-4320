import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Calendar, FileText, Download, User, Sparkles, ArrowRight, ChevronRight, Award } from 'lucide-react';
import { GOVERNORS_DATA } from '@/data/governorsData';

export default function CartasGdOverviewPage() {
  return (
    <div className="w-full flex flex-col bg-[#F8FAFC]">
      
      {/* Header */}
      <section className="w-full bg-[#00246C] text-white py-12 sm:py-16 border-b-4 border-[#F7A81B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7A81B] text-[#00246C] text-xs font-bold uppercase tracking-wider mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>Liderazgo y Orientaciones Distritales</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Cartas Mensuales de Gobernadores de Distrito
            </h1>
            <p className="text-blue-100 text-sm mt-2 leading-relaxed">
              Repositorio oficial de mensajes, directrices estratégicas y cartas redactadas por las autoridades distritales del Distrito 4320 a lo largo de los periodos rotarios.
            </p>
          </div>
        </div>
      </section>

      {/* Main Governors Grid */}
      <section className="w-full py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Gobernadores de Distrito 4320
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Selecciona a un Gobernador para leer y descargar sus cartas mensuales en formato digital.
              </p>
            </div>
            <span className="text-xs font-bold text-[#00246C] bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200">
              {GOVERNORS_DATA.length} Gobernadores en Archivo
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GOVERNORS_DATA.map((gov) => {
              const isCurrent = gov.period === '2026-2027';

              return (
                <div
                  key={gov.id}
                  className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group ${
                    isCurrent
                      ? 'border-[#F7A81B] ring-2 ring-[#F7A81B]/40'
                      : 'border-slate-200 hover:border-[#00246C]'
                  }`}
                >
                  <div>
                    {/* Top strip */}
                    <div className="bg-[#00246C] p-4 text-white flex items-center justify-between">
                      <span className="font-extrabold text-xs text-[#F7A81B]">
                        Periodo {gov.period}
                      </span>
                      {isCurrent && (
                        <span className="px-2 py-0.5 rounded-full bg-[#F7A81B] text-[#00246C] text-[10px] font-black uppercase">
                          Vigente
                        </span>
                      )}
                    </div>

                    {/* Governor Portrait & Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border-2 border-slate-200 group-hover:border-[#00246C] transition-colors">
                          <Image
                            src={gov.photoUrl}
                            alt={gov.name}
                            fill
                            sizes="64px"
                            referrerPolicy="no-referrer"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                            Gobernador(a) D4320
                          </span>
                          <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#00246C] transition-colors leading-tight">
                            {gov.name}
                          </h3>
                          <span className="text-xs text-[#00246C] font-semibold block mt-0.5">
                            {gov.homeClub}
                          </span>
                        </div>
                      </div>

                      {/* Theme Motto */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs mb-4">
                        <span className="text-[10px] uppercase font-bold text-slate-500 block mb-0.5">
                          Lema del Periodo:
                        </span>
                        <p className="font-semibold text-slate-800 italic">
                          &ldquo;{gov.theme}&rdquo;
                        </p>
                      </div>

                      {/* Bio */}
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                        {gov.bio}
                      </p>

                      {/* Letters List Preview */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                          Cartas Disponibles ({gov.letters.length}):
                        </span>
                        {gov.letters.map((letter) => (
                          <div
                            key={letter.id}
                            className="text-xs text-slate-700 font-medium flex items-center justify-between p-1.5 rounded bg-slate-50"
                          >
                            <span className="truncate pr-2">{letter.month}: {letter.title}</span>
                            <span className="text-[10px] text-[#00246C] font-bold whitespace-nowrap">PDF</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card CTA */}
                  <div className="p-6 pt-0">
                    <Link
                      href={`/cartas-gd/${gov.slug}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#00246C] group-hover:bg-blue-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <span>Leer Cartas de {gov.shortName}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F7A81B]" />
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
