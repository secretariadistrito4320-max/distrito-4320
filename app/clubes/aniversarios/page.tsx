'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CalendarDays, Building2, Sparkles, ArrowRight, ArrowLeft, Search } from 'lucide-react';
import { CLUBS_DATA } from '@/data/clubsData';

export default function ClubAnniversariesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const sortedClubs = [...CLUBS_DATA].sort((a, b) => {
    // Sort by charter date month/day
    return a.anniversaryDayMonth.localeCompare(b.anniversaryDayMonth);
  });

  const filteredClubs = sortedClubs.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.anniversaryDayMonth.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col bg-[#F8FAFC]">
      
      {/* Header */}
      <section className="w-full bg-[#00246C] text-white py-12 border-b-4 border-[#F7A81B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7A81B] text-[#00246C] text-xs font-bold uppercase tracking-wider mb-2">
                <CalendarDays className="w-3.5 h-3.5" />
                <span>Efemérides Distritales</span>
              </div>
              <h1 className="text-3xl font-black text-white">
                Calendario de Aniversarios de Clubes D4320
              </h1>
              <p className="text-blue-100 text-xs sm:text-sm mt-1">
                Conmemoración oficial de las fechas de fundación y celebración de los clubes del distrito.
              </p>
            </div>

            <Link
              href="/clubes"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a Clubes</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search bar */}
          <div className="mb-8 relative max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Buscar club o fecha de aniversario..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] text-slate-800 shadow-sm"
            />
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-600">
              <span>Club Rotario y Región</span>
              <span>Fecha Oficial de Aniversario</span>
            </div>

            <div className="divide-y divide-slate-100">
              {filteredClubs.map((club) => (
                <div
                  key={club.id}
                  className="p-4 hover:bg-blue-50/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00246C] text-[#F7A81B] flex items-center justify-center font-bold text-xs flex-shrink-0">
                      RC
                    </div>
                    <div>
                      <Link
                        href={`/clubes/${club.slug}`}
                        className="font-bold text-sm text-[#00246C] hover:underline"
                      >
                        {club.name}
                      </Link>
                      <span className="block text-xs text-slate-500">
                        {club.region} · {club.zone}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs border border-amber-200">
                      {club.anniversaryDayMonth}
                    </span>
                    <Link
                      href={`/clubes/${club.slug}`}
                      className="text-xs font-semibold text-[#00246C] hover:text-blue-800 flex items-center gap-1"
                    >
                      <span>Ver club</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
