import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Download,
  ArrowLeft,
  ChevronRight,
  FileText,
  Sparkles
} from 'lucide-react';
import { GOVERNORS_DATA } from '@/data/governorsData';

interface GovernorPageProps {
  params: Promise<{
    gobernador: string;
  }>;
}

// Función requerida por Next.js para la exportación estática en Cloudflare Pages
export async function generateStaticParams() {
  return GOVERNORS_DATA.map((gov) => ({
    gobernador: gov.slug,
  }));
}

export default async function GovernorDetailPage({ params }: GovernorPageProps) {
  const resolvedParams = await params;
  const gov = GOVERNORS_DATA.find((g) => g.slug === resolvedParams.gobernador);

  if (!gov) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col bg-[#F8FAFC] font-sans min-h-screen">
      
      {/* Breadcrumb */}
      <div className="w-full bg-slate-100 border-b border-slate-200 py-2.5 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#00246C] transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/cartas-gd" className="hover:text-[#00246C] transition-colors">Cartas GD</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-bold text-[#00246C]">GD {gov.shortName}</span>
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
      <section className="w-full bg-[#00246C] text-white py-10 sm:py-14 border-b-4 border-[#F7A81B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F7A81B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Portrait / Avatar Fallback */}
            <div className="md:col-span-4 lg:col-span-3 flex justify-center md:justify-start">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden bg-gradient-to-br from-[#001744] to-blue-900 border-4 border-[#F7A81B] shadow-2xl flex items-center justify-center text-[#F7A81B] font-black text-3xl sm:text-4xl flex-shrink-0">
                {gov.photoUrl ? (
                  <Image
                    src={gov.photoUrl}
                    alt={gov.name}
                    fill
                    priority
                    sizes="180px"
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                ) : (
                  <span>{gov.shortName.slice(0, 2).toUpperCase()}</span>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-8 lg:col-span-9 space-y-3 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="px-3 py-1 rounded-full bg-[#F7A81B] text-[#00246C] text-xs font-black uppercase tracking-wider shadow-sm">
                  Periodo {gov.period}
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-900 border border-blue-400/30 text-blue-100 text-xs font-semibold">
                  {gov.homeClub}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                GD {gov.name}
              </h1>

              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 max-w-xl mx-auto md:mx-0">
                <span className="text-[10px] uppercase font-bold text-[#F7A81B] block">
                  Lema Oficial de la Gobernación
                </span>
                <p className="text-sm font-semibold text-white italic">
                  &ldquo;{gov.theme}&rdquo;
                </p>
              </div>

              {gov.bio && (
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-2xl">
                  {gov.bio}
                </p>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Letters Feed */}
      <section className="w-full py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#00246C] flex items-center gap-2">
                <FileText className="w-6 h-6 text-[#F7A81B]" />
                <span>Cartas Mensuales del Periodo {gov.period}</span>
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
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#00246C] text-[#F7A81B] font-black text-[11px] uppercase">
                      {letter.month}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-semibold text-slate-600">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {letter.date}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#00246C] leading-snug">
                    {letter.title}
                  </h3>
                </div>

                {letter.pdfUrl && (
                  <a
                    href={letter.pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#00246C] hover:bg-blue-900 text-white text-xs font-bold transition-all shadow-md active:scale-95 whitespace-nowrap self-start sm:self-center"
                  >
                    <Download className="w-4 h-4 text-[#F7A81B]" />
                    <span>Descargar PDF</span>
                  </a>
                )}
              </div>

              {letter.summary && (
                <p className="text-xs sm:text-sm font-semibold text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 leading-relaxed">
                  {letter.summary}
                </p>
              )}

              {/* Visor de PDF Integrado */}
              {letter.pdfUrl && (
                <div className="w-full h-[500px] sm:h-[650px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                  <iframe
                    src={`${letter.pdfUrl}#toolbar=0`}
                    title={letter.title}
                    className="w-full h-full border-0"
                  />
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#F7A81B]" />
                  <span>Distrito 4320 · Rotary International</span>
                </span>
                <span className="font-bold text-[#00246C]">Gobernación {gov.name}</span>
              </div>
            </article>
          ))}

          {/* Quick Governor selector grid */}
          <div className="mt-14 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-4">
              Explorar Cartas de Otros Gobernadores
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {GOVERNORS_DATA.filter((g) => g.id !== gov.id).map((otherGov) => (
                <Link
                  key={otherGov.id}
                  href={`/cartas-gd/${otherGov.slug}`}
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 text-center transition-all group"
                >
                  <span className="block font-bold text-xs text-[#00246C] group-hover:underline">
                    GD {otherGov.shortName}
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
