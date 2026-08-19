'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  User,
  Building2,
  Share2,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Video,
  Printer,
  Bookmark
} from 'lucide-react';
import rawMockData from '@/data/mockData.json';
import { NewsItem } from '@/components/NewsCard';
import NewsCard from '@/components/NewsCard';

const mockNews: NewsItem[] = rawMockData as NewsItem[];

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const resolvedParams = use(params);
  const article = mockNews.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Related articles from the same category or club
  const relatedArticles = mockNews
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const formattedDate = new Date(article.date + 'T00:00:00').toLocaleDateString(
    'es-CL',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  );

  return (
    <div className="w-full flex flex-col bg-[#F8FAFC]">
      
      {/* Breadcrumb */}
      <div className="w-full bg-slate-100 border-b border-slate-200 py-2.5 text-xs text-slate-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <Link href="/" className="hover:text-[#00246C]">Inicio</Link>
            <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
            <Link href="/#noticias-section" className="hover:text-[#00246C]">Noticias</Link>
            <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
            <span className="font-bold text-[#00246C] truncate">{article.title}</span>
          </div>

          <Link
            href="/#noticias-section"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#00246C] hover:underline flex-shrink-0 ml-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a Noticias</span>
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="w-full py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Article Header */}
          <div className="space-y-4 mb-8">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#00246C] text-[#F7A81B] text-xs font-black uppercase tracking-wider">
                {article.category}
              </span>
              <Link
                href={`/clubes/${article.clubId}`}
                className="px-3 py-1 rounded-full bg-blue-100 text-[#00246C] hover:bg-blue-200 text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>{article.clubName}</span>
              </Link>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              {article.summary}
            </p>

            {/* Author & Date metadata bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-b border-slate-200 py-3 text-xs text-slate-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-medium">
                  <User className="w-4 h-4 text-slate-400" />
                  <strong>Por:</strong> {article.author}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  {formattedDate}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      navigator.clipboard?.writeText(window.location.href);
                      alert('Enlace del artículo copiado al portapapeles');
                    }
                  }}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1 font-semibold text-xs cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Compartir</span>
                </button>
              </div>
            </div>

          </div>

          {/* Main Article Image */}
          <div className="relative w-full h-72 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-lg mb-10 border border-slate-200">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              referrerPolicy="no-referrer"
              className="object-cover"
            />
          </div>

          {/* Video Attachment Notice if exists */}
          {article.videoUrl && (
            <div className="mb-10 p-5 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#00246C]">
                    Esta noticia incluye cobertura en vídeo
                  </h4>
                  <p className="text-[11px] text-slate-600">
                    Puedes revisar los vídeos oficiales en el canal de YouTube del Distrito 4320.
                  </p>
                </div>
              </div>
              <a
                href={article.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors whitespace-nowrap"
              >
                <span>Ver Vídeo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Main Body Text */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 text-slate-800 text-sm sm:text-base leading-relaxed">
            <div className="prose prose-slate max-w-none space-y-4">
              {article.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Club Signature Box */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-5 rounded-2xl">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Publicado por:
                </span>
                <span className="font-black text-sm text-[#00246C] block">
                  {article.clubName}
                </span>
                <span className="text-xs text-slate-500">
                  Rotary International Distrito 4320 · Chile
                </span>
              </div>

              <Link
                href={`/clubes/${article.clubId}`}
                className="px-4 py-2 rounded-xl bg-[#00246C] hover:bg-blue-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors self-start sm:self-auto"
              >
                <span>Ver perfil del club</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#F7A81B]" />
              </Link>
            </div>
          </div>

          {/* Related Articles Strip */}
          <div className="mt-14 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#00246C]">
                Otras Noticias del Distrito 4320
              </h3>
              <Link href="/#noticias-section" className="text-xs font-bold text-[#00246C] hover:underline">
                Ver todas →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedArticles.map((rel) => (
                <NewsCard key={rel.id} news={rel} />
              ))}
            </div>
          </div>

        </div>
      </article>

    </div>
  );
}
