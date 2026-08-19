'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Mail,
  Calendar,
  Download,
  FileText,
  Building2,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Share2,
  Printer,
  CheckCircle2
} from 'lucide-react';
import { GOVERNORS_DATA, Governor } from '@/data/governorsData';

interface GovernorPageProps {
  params: Promise<{
    gobernador: string;
  }>;
}

export default function GovernorDetailPage({ params }: GovernorPageProps) {
  const resolvedParams = use(params);
  const gov = GOVERNORS_DATA.find((g) => g.slug === resolvedParams.gobernador);

  if (!gov) {
    notFound();
  }

  const handleDownload = (letterTitle: string) => {
    alert(`Descargando copia oficial en PDF de: ${letterTitle}`);
  };

  return (
    <div className="w-full flex flex-col bg-[#F8FAFC]">
      
      {/* Breadcrumb */}
      <div className="w-full bg-slate-100 border-b border-slate-200 py-2.5 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#00246C]">Inicio</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/cartas-gd" className="hover:text-[#00246C]">Cartas GD</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-bold text-[#00246C]">{gov.name}</span>
          </div>

          <Link
            href="/cartas-gd"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#00246C] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Todos los Gobernadores</span>
          </Link>
        </div>
      </div>

      {/* Governor Profile Hero Header */}
      <section className="w-full bg-[#00246C] text-white py-10 sm:py-14 border-b-4 border-[#F7A81B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Portrait */}
            <div className="md:col-span-4 lg:col-span-3 flex justify-center md:justify-start">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden bg-slate-200 border-4 border-[#F7A81B] shadow-2xl">
                <Image
                  src={gov.photoUrl}
                  alt={gov.name}
                  fill
                  priority
                  sizes="180px"
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-8 lg:col-span-9 space-y-3 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="px-3 py-1 rounded-full bg-[#F7A81B] text-[#00246C] text-xs font-black uppercase tracking-wider">
                  Periodo {gov.period}
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-900 border border-blue-400/30 text-blue-100 text-xs">
                  {gov.homeClub}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {gov.name}
              </h1>

              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 max-w-xl mx-auto md:mx-0">
                <span className="text-[10px] uppercase font-bold text-[#F7A81B] block">
                  Lema Oficial de la Gobernación
                </span>
                <p className="text-sm font-semibold text-white italic">
                  &ldquo;{gov.theme}&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-2xl">
                {gov.bio}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Letters Feed */}
      <section className="w-full py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Cartas Mensuales del Periodo {gov.period}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Mensajes oficiales dirigidos a los clubes y socias/socios del Distrito 4320.
              </p>
            </div>
            <span className="text-xs font-bold text-[#00246C] bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
              {gov.letters.length} Cartas Emitidas
            </span>
          </div>

          {gov.letters.map((letter) => (
            <article
              key={letter.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="px-2.5 py-1 rounded-full bg-[#00246C] text-[#F7A81B] font-black text-xs">
                    {letter.month}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {letter.date}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleDownload(letter.title)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-[#00246C]" />
                    <span>Descargar PDF</span>
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#00246C] mb-3 leading-snug">
                  {letter.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 mb-4 leading-relaxed">
                  {letter.summary}
                </p>
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {letter.fullText}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Distrito 4320 · Rotary International</span>
                <span className="font-bold text-[#00246C]">Gobernación {gov.name}</span>
              </div>
            </article>
          ))}

          {/* Quick Governor selector grid below */}
          <div className="mt-14 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
              Explorar Cartas de Otros Gobernadores
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {GOVERNORS_DATA.filter((g) => g.id !== gov.id).map((otherGov) => (
                <Link
                  key={otherGov.id}
                  href={`/cartas-gd/${otherGov.slug}`}
                  className="p-2 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 text-center transition-all group"
                >
                  <span className="block font-bold text-xs text-[#00246C] group-hover:underline">
                    {otherGov.shortName}
                  </span>
                  <span className="block text-[10px] text-slate-500">
                    {otherGov.period}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
