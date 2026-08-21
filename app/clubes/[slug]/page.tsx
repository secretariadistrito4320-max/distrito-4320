import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Building2,
  MapPin,
  Mail,
  ArrowLeft,
  Newspaper,
  Sparkles
} from 'lucide-react';
import { CLUBS_DATA } from '@/data/clubsData';
import { getNews } from '@/lib/getNews';
import NewsSection from '@/components/NewsSection';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CLUBS_DATA.map((club) => ({
    slug: club.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const club = CLUBS_DATA.find((c) => c.slug === slug);

  if (!club) {
    return {
      title: 'Club no encontrado | Rotary Distrito 4320',
    };
  }

  return {
    title: `${club.name} | Rotary Distrito 4320`,
    description: `Información oficial, actividades y noticias de ${club.name} en ${club.city}, ${club.region}.`,
  };
}

export default async function ClubDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const club = CLUBS_DATA.find((c) => c.slug === slug);

  if (!club) {
    notFound();
  }

  const allNews = await getNews();
  const clubNews = allNews.filter(
    (item) => item.clubId === club.id || (item.clubName?.toLowerCase() || '').includes(club.name.toLowerCase())
  );

  const formattedCharterDate = club.charterDate
    ? new Date(club.charterDate + 'T00:00:00').toLocaleDateString('es-CL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : null;

  return (
    <div className="w-full bg-[#F8FAFC] py-10 sm:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Botón Volver */}
        <div className="mb-6">
          <Link
            href="/clubes"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#00246C] hover:text-blue-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-[#F7A81B]" />
            <span>Volver al Directorio de Clubes</span>
          </Link>
        </div>

        {/* Ficha Principal del Club */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#00246C] text-xs font-bold border border-blue-100">
                <Building2 className="w-3.5 h-3.5 text-[#F7A81B]" />
                <span>{club.region}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-[#00246C] tracking-tight">
                {club.name}
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Comunidad de socias y socios rotarios comprometidos con el servicio comunitario en la ciudad de <strong className="text-[#00246C]">{club.city}</strong>. Integrados a la red del Distrito 4320 de Rotary International.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-semibold">
                <MapPin className="w-4 h-4 text-[#F7A81B]" />
                <span>Ubicación: {club.city}, Chile</span>
              </div>
            </div>

            {/* Tarjeta Lateral de Datos Rápidos */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#00246C] to-blue-900 text-white rounded-2xl p-6 shadow-md border border-blue-900 space-y-4">
              <h3 className="font-bold text-sm text-[#F7A81B] flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Ficha Institucional</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="block text-blue-200 text-[10px] uppercase">Ciudad:</span>
                  <span className="font-bold text-white">{club.city}, Chile</span>
                </div>

                {formattedCharterDate && (
                  <div>
                    <span className="block text-blue-200 text-[10px] uppercase">Carta Constitutiva:</span>
                    <span className="font-bold text-white">{formattedCharterDate}</span>
                  </div>
                )}

                <div>
                  <span className="block text-blue-200 text-[10px] uppercase">Distrito Rotario:</span>
                  <span className="font-bold text-white">Distrito 4320 (Chile)</span>
                </div>

                {club.email && (
                  <div className="pt-2 border-t border-blue-800">
                    <span className="block text-blue-200 text-[10px] uppercase mb-1">Contacto Oficial:</span>
                    <a
                      href={`mailto:${club.email}`}
                      className="inline-flex items-center gap-1.5 font-bold text-[#F7A81B] hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{club.email}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Sección de Noticias del Club */}
        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-black text-[#00246C] flex items-center gap-2">
              <Newspaper className="w-6 h-6 text-[#F7A81B]" />
              <span>Actividades y Noticias de {club.name}</span>
            </h2>
          </div>

          {clubNews.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-2">
              <Newspaper className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="font-bold text-slate-700 text-sm">Sin noticias registradas actualmente</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Las actividades de este club se irán sincronizando automáticamente desde la Secretaría Distrital.
              </p>
            </div>
          ) : (
            <NewsSection initialNews={clubNews} preselectedClubId={club.id} hideClubFilter={true} />
          )}
        </div>

      </div>
    </div>
  );
}
