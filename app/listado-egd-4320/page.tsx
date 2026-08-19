'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  Search,
  Award,
  Calendar,
  Building2,
  Sparkles,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { EGD_DATA, EGDRecord } from '@/data/egdData';

export default function ListadoEgdPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEgd = EGD_DATA.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.club.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.year.includes(searchTerm) ||
      item.theme.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.notableAchievement.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col bg-[#F8FAFC]">
      
      {/* Header */}
      <section className="w-full bg-[#00246C] text-white py-12 sm:py-16 border-b-4 border-[#F7A81B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7A81B] text-[#00246C] text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Memoria Institucional y Liderazgo</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Listado de Ex Gobernadores de Distrito (EGD) 4320
            </h1>
            <p className="text-blue-100 text-sm mt-2 leading-relaxed">
              Homenaje a los líderes rotarios que han guiado los destinos del Distrito 4320 con generosidad, entrega y devoción al servicio desinteresado por encima de sí.
            </p>
          </div>
        </div>
      </section>

      {/* Main Table Content */}
      <section className="w-full py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Buscar por nombre, club, año o lema..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] text-slate-800 shadow-sm"
              />
            </div>
            <span className="text-xs text-slate-500 font-semibold">
              Mostrando {filteredEgd.length} Ex Gobernadores registrados
            </span>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#00246C] text-white font-bold uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Periodo</th>
                    <th className="py-4 px-4 sm:px-6">Ex Gobernador(a)</th>
                    <th className="py-4 px-4 sm:px-6">Club de Origen</th>
                    <th className="py-4 px-4 sm:px-6">Lema Rotario Internacional</th>
                    <th className="py-4 px-4 sm:px-6">Hito / Logro Distrital</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredEgd.map((egd, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-blue-50/60 transition-colors group"
                    >
                      <td className="py-4 px-4 sm:px-6 font-bold text-[#00246C] whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#00246C] border border-blue-200 text-xs">
                          {egd.year}
                        </span>
                      </td>

                      <td className="py-4 px-4 sm:px-6 font-extrabold text-slate-900 text-sm">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#F7A81B] flex-shrink-0" />
                          <span>EGD {egd.name}</span>
                        </div>
                      </td>

                      <td className="py-4 px-4 sm:px-6 font-semibold text-slate-700">
                        {egd.club}
                      </td>

                      <td className="py-4 px-4 sm:px-6 text-slate-700 italic">
                        &ldquo;{egd.theme}&rdquo;
                      </td>

                      <td className="py-4 px-4 sm:px-6 text-slate-600 leading-relaxed text-[11px] max-w-xs">
                        {egd.notableAchievement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-between">
            <span>
              ¿Deseas aportar antecedentes o fotografías de pasados gobernadores para la memoria distrital?
            </span>
            <a
              href="mailto:secretaria@rotary4320.cl?subject=Aporte%20Historico%20EGD%20D4320"
              className="font-bold underline text-[#00246C] hover:text-blue-900 ml-2 whitespace-nowrap"
            >
              Contactar a Secretaría Distrital
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
