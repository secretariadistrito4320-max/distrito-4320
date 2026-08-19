import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Building2, ArrowRight, Tag } from 'lucide-react';

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  imageUrl: string;
  videoUrl?: string;
  clubId: string;
  clubName: string;
  category: string;
  date: string;
  author: string;
}

interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
}

export default function NewsCard({ news, featured = false }: NewsCardProps) {
  const formattedDate = new Date(news.date + 'T00:00:00').toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'polio':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'proyectos':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'comunidad':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cartas gd':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  if (featured) {
    return (
      <article className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Featured Image */}
        <div className="relative lg:col-span-7 h-64 sm:h-80 lg:h-auto min-h-[280px] bg-slate-100 overflow-hidden">
          <Image
            src={news.imageUrl}
            alt={news.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            referrerPolicy="no-referrer"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border shadow-sm ${getCategoryColor(
                news.category
              )}`}
            >
              {news.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#00246C] text-[#F7A81B] shadow-sm">
              Destacado Distrital
            </span>
          </div>
        </div>

        {/* Featured Content */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 flex-wrap">
              <span className="flex items-center gap-1.5 font-semibold text-[#00246C]">
                <Building2 className="w-3.5 h-3.5 text-[#F7A81B]" />
                {news.clubName}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {formattedDate}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#00246C] transition-colors leading-tight mb-3">
              <Link href={`/noticias/${news.slug}`}>{news.title}</Link>
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed line-clamp-4 mb-4">
              {news.summary}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-slate-400" />
              {news.author}
            </span>

            <Link
              href={`/noticias/${news.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00246C] hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-lg transition-colors"
            >
              <span>Leer Noticia Completa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </article>
    );
  }

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
      
      <div>
        {/* Thumbnail */}
        <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
          <Image
            src={news.imageUrl}
            alt={news.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            referrerPolicy="no-referrer"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border shadow-sm ${getCategoryColor(
                news.category
              )}`}
            >
              {news.category}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2.5 flex-wrap">
            <span className="font-semibold text-[#00246C] truncate max-w-[170px] flex items-center gap-1">
              <Building2 className="w-3 h-3 text-[#F7A81B] flex-shrink-0" />
              {news.clubName}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-400" />
              {formattedDate}
            </span>
          </div>

          <h3 className="text-base font-bold text-slate-900 group-hover:text-[#00246C] transition-colors leading-snug line-clamp-2 mb-2">
            <Link href={`/noticias/${news.slug}`}>{news.title}</Link>
          </h3>

          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {news.summary}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-100 text-xs">
        <span className="text-[11px] text-slate-500 truncate max-w-[130px]">
          {news.author}
        </span>
        <Link
          href={`/noticias/${news.slug}`}
          className="font-bold text-[#00246C] hover:text-blue-800 text-xs inline-flex items-center gap-1 hover:underline"
        >
          <span>Leer más</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

    </article>
  );
}
