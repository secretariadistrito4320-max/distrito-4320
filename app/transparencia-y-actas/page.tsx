'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Download,
  Calendar,
  Search,
  ShieldCheck,
  Building2,
  FileCheck,
  CreditCard,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import {
  TRANSPARENCY_DOCUMENTS,
  TransparencyDocument
} from '@/data/transparencyData';

const CATEGORIES = [
  'Todas',
  'Actas de Asamblea',
  'Balances y Auditorías',
  'Estatutos y Reglamentos',
  'Manuales Distritales',
];

export default function TransparenciaActasPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocs = TRANSPARENCY_DOCUMENTS.filter((doc) => {
    const categoryMatch =
      selectedCategory === 'Todas' || doc.category === selectedCategory;

    const searchMatch =
      searchTerm === '' ||
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.period.includes(searchTerm);

    return categoryMatch && searchMatch;
  });

  const handleDownload = (doc: TransparencyDocument) => {
    alert(`Descargando documento oficial: ${doc.title} (${doc.fileSize})`);
  };

  return (
    <div className="w-full flex flex-col bg-[#F8FAFC]">
      
      {/* Header */}
      <section className="w-full bg-[#00246C] text-white py-12 sm:py-16 border-b-4 border-[#F7A81B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7A81B] text-[#00246C] text-xs font-bold uppercase tracking-wider mb-3">
                <FileText className="w-3.5 h-3.5" />
                <span>Transparencia y Documentos Institucionales</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Transparencia, Actas y Balances Distritales
              </h1>
              <p className="text-blue-100 text-sm mt-2 leading-relaxed">
                Repositorio documental público del Distrito 4320. Accede a las actas de asambleas, conferencias distritales, estatutos vigentes e informes auditados de tesorería.
              </p>
            </div>

            <Link
              href="/pagos-2026-2027"
              className="px-4 py-2.5 rounded-xl bg-[#F7A81B] hover:bg-amber-400 text-[#00246C] font-bold text-xs flex items-center gap-2 shadow-md transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <CreditCard className="w-4 h-4" />
              <span>Ver Estado de Pagos de Clubes</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Controls Bar */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-4">
            
            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Buscar acta, balance, estatuto o palabra clave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] text-slate-800"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#00246C] text-[#F7A81B]'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Document Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#00246C] font-bold text-[11px] border border-blue-200">
                      {doc.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Periodo {doc.period}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#00246C] transition-colors leading-snug mb-2">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">
                    PDF · {doc.fileSize} · {doc.date}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleDownload(doc)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#00246C] hover:bg-blue-900 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-[#F7A81B]" />
                    <span>Descargar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
