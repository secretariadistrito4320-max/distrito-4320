import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Building2,
  User,
  ArrowLeft,
  ChevronRight,
  Share2,
  Tag,
  Clock
} from 'lucide-react';
import rawMockData from '@/data/mockData.json';
import { NewsItem } from '@/components/NewsCard';
import { CLUBS_DATA } from '@/data/clubsData';

const mockNews: NewsItem[] = rawMockData as NewsItem[];

interface NewsDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Función requerida para exportación estática en Cloudflare
export async function generateStaticParams() {
  return mockNews.map((news) => ({
    slug: news.slug,
  }));
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const resolvedParams = await params;
  const news = mockNews.find((n) => n.slug === resolvedParams.slug);

  if (!news) {
    notFound();
  }

  // Buscar información del club asociado
  const associatedClub = CLUBS_DATA.find(
    (c) => c.id.toLowerCase() === news.clubId.toLowerCase()
  );

  return (
    <div className="w-full flex flex-col bg-[#F8FAFC]">
      
      {/* Breadcrumb Navigation Strip */}
      <div className="w-full bg-slate-100 border-b border-slate-200 py-2.5 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <Link href="/" className="hover:text-[#00246C]">Inicio</Link>
            <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
            <Link href="/#noticias-section" className="hover:text-[#00246C]">Noticias</Link>
            <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
            <span className="font-bold text-[#00246C] truncate">{news.title}</span>
          </div>

          <Link
            href="/#noticias-section"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#00246C] hover:underline whitespace-nowrap"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a Noticias</span>
          </Link>
        </div>
      </div>

      {/* Article Header & Main Content */}
      <article className="w-full py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Article Header Info */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-[#00246C] text-[#F7A81B] font-black uppercase tracking-wider">
                {news.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-[#00246C] font-bold border border-blue-200">
                {news.clubName}
              </span>
              <span className="flex items-center gap-1 text-slate-500 font-medium">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {news.date}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              {news.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed bg-slate-100 p-4 rounded-2xl border-l-4 border-[#F7A81B]">
              {news.summary}
            </p>

            <div className="flex items-center justify-between pt-2 text-xs text-slate-500 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#00246C]" />
                <span>Por <strong className="text-slate-800">{news.author}</strong></span>
              </div>
              <div className="flex items-center gap-1">
                <Building2 className="w-4 h-4 text-[#00246C]" />
                <span>Distrito 4320</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {news.imageUrl && (
            <div className="relative w-full h-64 sm:h-96 md:h-[450px] rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src={news.imageUrl}
                alt={news.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          )}

          {/* Body Content */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 text-slate-800 text-sm sm:text-base leading-relaxed whitespace-pre-line">
            {news.content}
          </div>

          {/* Associated Club Footer Box */}
          {associatedClub && (
            <div className="bg-blue-50 rounded-3xl p-6 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00246C] block">
                  Publicado por el Club
                </span>
                <h3 className="text-base font-black text-[#00246C]">
                  {associatedClub.name}
                </h3>
                <p className="text-xs text-slate-600">
                  {associatedClub.region} · Reuniones los {associatedClub.meetingDay}
                </p>
              </div>

              <Link
                href={`/clubes/${associatedClub.slug}`}
                className="px-4 py-2 rounded-xl bg-[#00246C] hover:bg-blue-900 text-white font-bold text-xs transition-colors whitespace-nowrap shadow-sm"
              >
                Ver perfil completo del club →
              </Link>
            </div>
          )}

        </div>
      </article>

    </div>
  );
}
