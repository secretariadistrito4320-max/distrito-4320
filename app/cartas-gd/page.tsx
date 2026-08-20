import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, ArrowRight, FileText } from 'lucide-react';
import { GOVERNORS_DATA } from '@/data/governorsData';
import { SHEETS_API_URL } from '@/lib/getLetters';

export const revalidate = 60;

const SLUG_MAP: Record<string, string> = {
  'jose-miguel': 'jose-miguel',
  'josé miguel': 'jose-miguel',
  'jose miguel nuñez': 'jose-miguel',
  'josé miguel núñez alvarado (2026-2027)': 'jose-miguel',
  'wilson': 'wilson',
  'wilson pizarro': 'wilson',
  'wilson pizarro carvajal (2025-2026)': 'wilson',
  'carlos': 'carlos',
  'carlos flores': 'carlos',
  'carlos flores (2024-2025)': 'carlos',
  'rodrigo': 'rodrigo',
  'rodrigo jarufe': 'rodrigo',
  'rodrigo jarufe (2023-2024)': 'rodrigo',
  'patricia': 'patricia',
  'patricia lorca': 'patricia',
  'patricia lorca rojas (2022-2023)': 'patricia',
  'ricardo': 'ricardo',
  'ricardo vera': 'ricardo',
  'ricardo vera martínez (2021-2022)': 'ricardo',
  'emilio': 'emilio',
  'emilio sepúlveda': 'emilio',
  'emilio sepúlveda aguilar (2020-2021)': 'emilio',
  'carlos-tapia': 'carlos-tapia',
  'carlos tapia': 'carlos-tapia',
  'carlos tapia (2019-2020)': 'carlos-tapia',
  'luz': 'luz',
  'luz bernal': 'luz',
  'luz bernal gonzález (2018-2019)': 'luz',
  'edgar': 'edgar',
  'edgar ibarra': 'edgar',
  'edgar ibarra gonzález (2017-2018)': 'edgar',
  'sonia': 'sonia',
  'sonia garay': 'sonia',
  'sonia garay garay (2016-2017)': 'sonia',
  'humberto': 'humberto',
  'humberto beckers': 'humberto',
  'humberto beckers argomedo (2015-2016)': 'humberto',
  'felipe': 'felipe',
  'felipe platero': 'felipe',
  'felipe platero moscópulos (2014-2015)': 'felipe',
};

function normalizeSlug(input: string): string {
  if (!input) return '';
  const clean = input.toLowerCase().trim();
  return SLUG_MAP[clean] || clean.replace(/\s+/g, '-');
}

async function getLetterCounts(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};

  try {
    const res = await fetch(`${SHEETS_API_URL}?sheet=Cartas_GD`, {
      method: 'GET',
      redirect: 'follow',
      next: { revalidate: 60 },
    });

    if (!res.ok) return counts;

    const text = await res.text();
    if (text.trim().startsWith('<')) return counts;

    const data = JSON.parse(text);
    if (!Array.isArray(data)) return counts;

    data.forEach((item: any) => {
      const slug = normalizeSlug(item.governorSlug || '');
      if (slug) {
        counts[slug] = (counts[slug] || 0) + 1;
      }
    });
  } catch (err) {
    console.warn('Error calculando conteo de cartas:', err);
  }

  return counts;
}

export default async function CartasMainPage() {
  const letterCounts = await getLetterCounts();

  return (
    <div className="w-full bg-[#F8FAFC] py-10 sm:py-16 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#00246C] text-xs font-bold border border-blue-100">
                <BookOpen className="w-3.5 h-3.5 text-[#F7A81B]" />
                <span>Archivo de Liderazgo Distrital</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#00246C]">
                Gobernadores de Distrito 4320
              </h1>
              <p className="text-xs sm:text-sm text-slate-600">
                Selecciona a un Gobernador para leer y descargar sus cartas mensuales en formato digital.
              </p>
            </div>

            <div className="bg-blue-50 p-3.5 rounded-2xl border border-blue-100 text-xs font-bold text-[#00246C] flex-shrink-0">
              {GOVERNORS_DATA.length} Gobernadores en Archivo
            </div>
          </div>
        </div>

        {/* Grilla de los 13 Gobernadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOVERNORS_DATA.map((gov) => {
            const count = letterCounts[gov.slug] || 0;

            return (
              <div
                key={gov.id}
                className={`bg-white rounded-3xl border ${
                  gov.slug === 'jose-miguel'
                    ? 'border-[#F7A81B] ring-2 ring-[#F7A81B]/20'
                    : 'border-slate-200'
                } shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group`}
              >
                {/* Header Periodo */}
                <div className="bg-[#00246C] text-white px-6 py-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Periodo {gov.period}
                  </span>
                  {gov.slug === 'jose-miguel' && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F7A81B] text-[#00246C] font-black text-[10px] uppercase tracking-wider">
                      Vigente
                    </span>
                  )}
                </div>

                {/* Contenido Sin Foto */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Gobernador(a) D4320
                    </span>
                    <h3 className="text-lg font-black text-[#00246C] group-hover:text-blue-800 transition-colors">
                      {gov.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">
                      {gov.homeClub}
                    </p>
                  </div>

                  {gov.theme && (
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="text-[9px] uppercase font-bold text-[#F7A81B] block">
                        Lema del Periodo:
                      </span>
                      <p className="text-xs font-semibold text-slate-700 italic">
                        &ldquo;{gov.theme}&rdquo;
                      </p>
                    </div>
                  )}

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {gov.bio}
                  </p>
                </div>

                {/* Footer y Enlace */}
                <div className="p-6 pt-0 space-y-3">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-semibold">
                      <FileText className="w-3.5 h-3.5 text-[#F7A81B]" />
                      <span>Cartas Disponibles:</span>
                    </span>
                    <span className="font-extrabold text-[#00246C] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                      ({count})
                    </span>
                  </div>

                  <Link
                    href={`/cartas-gd/${gov.slug}`}
                    className="w-full py-2.5 rounded-xl bg-[#00246C] hover:bg-blue-900 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 group-hover:bg-blue-900"
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
    </div>
  );
}
