import React from 'react';
import Link from 'next/link';
import { Calendar, Building2, MapPin, ArrowLeft, Cake, Sparkles } from 'lucide-react';
import { CLUBS_DATA, Club } from '@/data/clubsData';

export const metadata = {
  title: 'Aniversarios de Clubes | Rotary Distrito 4320',
  description: 'Calendario oficial de aniversarios y cartas constitutivas de los clubes del Distrito 4320 de Rotary International.',
};

function getAnniversaryKey(club: Club): string {
  if (club.anniversaryDayMonth) return club.anniversaryDayMonth;
  if (club.charterDate) return club.charterDate.slice(5);
  return '12-31';
}

export default function ClubAnniversariesPage() {
  const sortedClubs = [...CLUBS_DATA].sort((a, b) => {
    const keyA = getAnniversaryKey(a);
    const keyB = getAnniversaryKey(b);
    return keyA.localeCompare(keyB);
  });

  const clubsWithDate = sortedClubs.filter((c) => c.charterDate || c.anniversaryDayMonth);

  return (
    <div className="w-full bg-[#F8FAFC] py-10 sm:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6">
          <Link
            href="/clubes"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#00246C] hover:text-blue-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-[#F7A81B]" />
            <span>Volver al Directorio de Clubes</span>
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 mb-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Cake className="w-3.5 h-3.5 text-[#F7A81B]" />
              <span>Efemérides Distritales</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#00246C] tracking-tight">
              Aniversarios de Clubes del Distrito 4320
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Fechas de fundación y cartas constitutivas de las sedes rotarias entre Arica y Valparaíso.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedClubs.map((club) => {
            const formattedDate = club.charterDate
              ? new Date(club.charterDate + 'T00:00:00').toLocaleDateString('es-CL', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })
              : null;

            return (
              <div
                key={club.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-[#00246C] border border-blue-100">
                      {club.region.replace('Región de ', '')}
                    </span>
                    <Building2 className="w-4 h-4 text-[#F7A81B]" />
                  </div>

                  <Link href={`/clubes/${club.slug}`} className="block hover:underline">
                    <h3 className="font-extrabold text-base text-[#00246C]">
                      {club.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{club.city}, Chile</span>
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-xs">
                  {formattedDate ? (
                    <div className="flex items-center justify-between text-[#00246C] font-bold">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#F7A81B]" />
                        <span>{formattedDate}</span>
                      </span>
                    </div>
                  ) : (
                    <span className="text-slate-400 text-[11px] italic">Fecha por confirmar con Secretaría</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
