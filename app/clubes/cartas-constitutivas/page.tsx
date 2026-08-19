'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FileCheck, Building2, Calendar, ArrowLeft, ArrowRight, Search, ShieldCheck } from 'lucide-react';
import { CLUBS_DATA } from '@/data/clubsData';

export default function ClubChartersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const sortedClubs = [...CLUBS_DATA].sort((a, b) => {
    return new Date(a.charterDate).getTime() - new Date(b.charterDate).getTime();
  });

  const filteredClubs = sortedClubs.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.charterDate.includes(searchTerm)
  );

  return (
    <div className="w-full flex flex-col bg-[#F8FAFC]">
      
      {/* Header */}
      <section className="w-full bg-[#00246C] text-white py-12 border-b-4 border-[#F7A81B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500 text-[#00246C] text-xs font-bold uppercase tracking-wider mb-2">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Patrimonio e Historia</span>
              </div>
              <h1 className="text-3xl font-black text-white">
                Cartas Constitutivas de los Clubes D4320
              </h1>
              <p className="text-blue-100 text-xs sm:text-sm mt-1">
                Registro cronológico de admisión oficial en Rotary International.
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
          
          <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Buscar por club, año o región..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] text-slate-800 shadow-sm"
              />
            </div>
            <span className="text-xs text-slate-500">
              Ordenado por antigüedad histórica de fundación
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4">Club Rotario</th>
                    <th className="py-3.5 px-4">Región / Zona</th>
                    <th className="py-3.5 px-4">Fecha de Carta</th>
                    <th className="py-3.5 px-4">Antigüedad</th>
                    <th className="py-3.5 px-4 text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredClubs.map((club, idx) => {
                    const charterYear = new Date(club.charterDate + 'T00:00:00').getFullYear();
                    const ageYears = new Date().getFullYear() - charterYear;

                    return (
                      <tr key={club.id} className="hover:bg-blue-50/60 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-[#00246C]">
                          <Link href={`/clubes/${club.slug}`} className="hover:underline flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-blue-100 text-[#00246C] flex items-center justify-center text-[10px] font-bold">
                              {idx + 1}
                            </span>
                            <span>{club.name}</span>
                          </Link>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">
                          {club.region}
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-slate-900">
                          {new Date(club.charterDate + 'T00:00:00').toLocaleDateString('es-CL', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[#00246C] font-bold text-[11px] border border-blue-200">
                            {ageYears} años
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <Link
                            href={`/clubes/${club.slug}`}
                            className="text-xs font-bold text-[#00246C] hover:text-blue-800 hover:underline"
                          >
                            Ver club →
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
