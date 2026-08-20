import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  ChevronRight,
  MapPin,
  Users
} from 'lucide-react';
import FeaturedVideosSection from '@/components/FeaturedVideosSection';
import NewsSection from '@/components/NewsSection';
import RotaryAreasSection from '@/components/RotaryAreasSection';
import TopAlertBanner from '@/components/TopAlertBanner';
import FeaturedPhoto from '@/components/FeaturedPhoto';
import { CLUBS_DATA } from '@/data/clubsData';
import { GOVERNORS_DATA } from '@/data/governorsData';
import { getNews } from '@/lib/getNews';
import { getActiveAlert } from '@/lib/getAlert';

export const revalidate = 60;

const currentGovernor = GOVERNORS_DATA[0]; // Carlos Tapia Gómez 2026-2027

export default async function HomePage() {
  const [news, alert] = await Promise.all([
    getNews(),
    getActiveAlert()
  ]);

  return (
    <div className="w-full flex flex-col">
      
      {/* 0. CINTILLO / BANNER DE ALERTA DINÁMICO */}
      <TopAlertBanner initialAlert={alert} />

      {/* 1. HERO BANNER SECTION */}
      <section className="relative w-full bg-gradient-to-r from-[#001744] via-[#00246C] to-slate-900 text-white overflow-hidden py-14 sm:py-20 lg:py-24 border-b-4 border-[#F7A81B]">
        
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F7A81B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F7A81B]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7A81B] text-[#00246C] font-extrabold text-xs tracking-wider uppercase shadow-md mx-auto lg:mx-0">
                <Sparkles className="w-4 h-4 text-[#00246C] fill-current" />
                <span>Lema Oficial 2026-2027 · Rotary International</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
                Unidos Para Hacer El Bien y{' '}
                <span className="text-[#F7A81B] underline decoration-[#F7A81B]/40 decoration-wavy underline-offset-8">
                  Generar un Impacto Duradero
                </span>
              </h1>

              <p className="text-sm sm:text-base text-blue-100/90 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Bienvenidos al portal oficial del <strong className="text-white font-bold">Rotary Club Distrito 4320 (Chile)</strong>. Conectamos a más de 70 clubes desde Arica hasta Valparaíso y Rapa Nui, impulsando proyectos de salud, agua potable, educación y desarrollo comunitario.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="#noticias-section"
                  className="px-5 py-3 rounded-xl bg-[#F7A81B] hover:bg-amber-400 text-[#00246C] font-black text-xs sm:text-sm transition-all shadow-lg active:scale-95 inline-flex items-center gap-2"
                >
                  <span>Explorar Noticias y Actividades</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/clubes"
                  className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all backdrop-blur-sm inline-flex items-center gap-2"
                >
                  <Building2 className="w-4 h-4 text-[#F7A81B]" />
                  <span>Directorio de Clubes</span>
                </Link>
              </div>

              {/* Quick Geographic Badge */}
              <div className="pt-4 border-t border-blue-800/60 flex items-center justify-center lg:justify-start gap-4 text-xs text-blue-200">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F7A81B]" />
                  6 Regiones de Chile
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#F7A81B]" />
                  70+ Clubes Activos
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F7A81B]" />
                  Distrito 4320
                </span>
              </div>

            </div>

            {/* Right Card: Gobernador Distrital Vigente */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 text-slate-900 shadow-2xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#F7A81B] text-[#00246C] font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-bl-xl">
                  Gobernación 2026-2027
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-[#00246C] to-blue-900 flex items-center justify-center text-[#F7A81B] font-black text-xl sm:text-2xl border-2 border-[#00246C] flex-shrink-0 shadow-md">
                    {currentGovernor.photoUrl ? (
                      <Image
                        src={currentGovernor.photoUrl}
                        alt={currentGovernor.name}
                        fill
                        sizes="80px"
                        referrerPolicy="no-referrer"
                        className="object-cover"
                      />
                    ) : (
                      <span>{currentGovernor.shortName.slice(0, 2).toUpperCase()}</span>
                    )}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Gobernador de Distrito 4320
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-[#00246C] leading-tight">
                      {currentGovernor.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#F7A81B]">
                      {currentGovernor.homeClub}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed mb-4">
                  <p className="italic">
                    &ldquo;El rotarismo chileno se nutre de la calidez de su gente. En este periodo 2026-2027, les invito a transformar cada encuentro en una oportunidad para servir a nuestro prójimo.&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <Link
                    href={`/cartas-gd/${currentGovernor.slug}`}
                    className="text-xs font-bold text-[#00246C] hover:text-blue-800 flex items-center gap-1 hover:underline"
                  >
                    <span>Leer Cartas GD del Gobernador</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#F7A81B]" />
                  </Link>

                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-[#00246C]">
                    Periodo Vigente
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 2. FEATURED VIDEOS MODULE */}
      <FeaturedVideosSection />

      {/* 3. NEWS & UPDATES SECTION */}
      <NewsSection initialNews={news} />

      {/* 4. FOTO DE SERVICIO DESTACADA DEL MES / SEMANA */}
      <FeaturedPhoto />

      {/* 5. DISTRICT MANIFESTO & 7 AREAS OF FOCUS */}
      <RotaryAreasSection />

      {/* 6. QUICK DISTRICT CLUBS DIRECTORY PREVIEW STRIP */}
      <section className="w-full py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-3">
            <div>
              <h3 className="text-lg font-bold text-[#00246C]">
                Clubes Rotarios del Distrito 4320
              </h3>
              <p className="text-xs text-slate-500">
                Encuentra tu club más cercano y sus actividades comunitarias.
              </p>
            </div>
            <Link
              href="/clubes"
              className="text-xs font-bold text-[#00246C] hover:text-blue-800 flex items-center gap-1 hover:underline whitespace-nowrap"
            >
              <span>Ver todos los {CLUBS_DATA.length} clubes</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#F7A81B]" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {CLUBS_DATA.slice(0, 12).map((club) => (
              <Link
                key={club.id}
                href={`/clubes/${club.slug}`}
                className="bg-white p-3 rounded-xl border border-slate-200 hover:border-[#00246C] hover:shadow-md transition-all text-center group flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#00246C] font-bold text-xs flex items-center justify-center mx-auto mb-2 group-hover:bg-[#00246C] group-hover:text-[#F7A81B] transition-colors">
                    RC
                  </div>
                  <h4 className="font-bold text-xs text-slate-800 group-hover:text-[#00246C] truncate">
                    {club.name.replace('Rotary Club ', '')}
                  </h4>
                  <p className="text-[10px] text-slate-400 truncate mt-0.5">
                    {club.region.replace('Región de ', '')}
                  </p>
                </div>
                <span className="text-[9px] text-[#00246C] font-semibold mt-2 group-hover:underline block">
                  Ver Club →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
