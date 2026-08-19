'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Building2, ArrowRight, User } from 'lucide-react';

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
  gallery?: string;
}

export interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
}

export default function NewsCard({ news, featured = false }: NewsCardProps) {
  if (featured) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 group">
        {/* Foto de Portada Clickeable */}
        <Link
          href={`/noticias/${news.slug}`}
          className="lg:col-span-7 relative aspect-video lg:aspect-auto w-full h-full min-h-[260px] bg-slate-900 overflow-hidden block cursor-pointer"
        >
          <Image
            src={news.imageUrl}
            alt={news.title}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            <span className="px-3 py-1 rounded-full bg-[#00246C] text-[#F7A81B] text-[10px] font-black uppercase tracking-wider shadow">
              {news.category || 'Noticias'}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#F7A81B] text-[#00246C] text-[10px] font-extrabold uppercase tracking-wider shadow">
              Destacado Distrital
            </span>
          </div>
        </Link>

        {/* Detalle */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1 font-semibold text-[#00246C]">
                <Building2 className="w-3.5 h-3.5 text-[#F7A81B]" />
                {news.clubName}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {news.date}
              </span>
            </div>

            <Link href={`/noticias/${news.slug}`} className="block group-hover:text-blue-900 transition-colors">
              <h3 className="text-xl sm:text-2xl font-black text-[#00246C] leading-tight tracking-tight">
                {news.title}
              </h3>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
              {news.summary}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-slate-400" />
              {news.author || 'Prensa Distrito 4320'}
            </span>
            <Link
              href={`/noticias/${news.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00246C] bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors"
            >
              <span>Leer Noticia Completa</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F7A81B]" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        {/* Foto Clickeable */}
        <Link
          href={`/noticias/${news.slug}`}
          className="relative aspect-video w-full bg-slate-900 overflow-hidden block cursor-pointer"
        >
          <Image
            src={news.imageUrl}
            alt={news.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#00246C] text-white text-[10px] font-black uppercase tracking-wider shadow z-10">
            {news.category || 'Noticias'}
          </span>
        </Link>

        {/* Detalle */}
        <div className="p-5 space-y-2.5">
          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1 font-bold text-[#00246C] truncate max-w-[180px]">
              <Building2 className="w-3 h-3 text-[#F7A81B] flex-shrink-0" />
              <span className="truncate">{news.clubName}</span>
            </span>
            <span className="flex items-center gap-1 flex-shrink-0">
              <Calendar className="w-3 h-3 text-slate-400" />
              {news.date}
            </span>
          </div>

          <Link href={`/noticias/${news.slug}`} className="block">
            <h3 className="text-base font-extrabold text-[#00246C] group-hover:text-blue-800 transition-colors line-clamp-2 leading-snug">
              {news.title}
            </h3>
          </Link>

          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
            {news.summary}
          </p>
        </div>
      </div>

      <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-400 text-[11px] truncate">
          {news.author || 'Prensa Distrito 4320'}
        </span>
        <Link
          href={`/noticias/${news.slug}`}
          className="font-extrabold text-[#00246C] hover:text-blue-900 inline-flex items-center gap-1 group-hover:underline"
        >
          <span>Leer más</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#F7A81B]" />
        </Link>
      </div>
    </div>
  );
}
