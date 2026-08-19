'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Video, Sparkles } from 'lucide-react';
import { FEATURED_VIDEOS, RotaryVideo } from '@/data/videosData';
import VideoModal from './VideoModal';

export default function FeaturedVideosSection() {
  const [selectedVideo, setSelectedVideo] = useState<RotaryVideo | null>(null);

  return (
    <section className="w-full py-12 sm:py-16 bg-gradient-to-b from-slate-900 to-[#001744] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-[#F7A81B]/40 text-[#F7A81B] text-xs font-bold uppercase tracking-wider mb-2">
              <Video className="w-3.5 h-3.5" />
              <span>Rotary en Acción · Producciones Audiovisuales</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Vídeos Destacados del Distrito y Campañas Globales
            </h2>
            <p className="text-slate-300 text-sm mt-1.5 max-w-2xl">
              Descubre las historias humanas de servicio, la lucha por la erradicación mundial de la polio y el impacto de nuestros clubes en Chile.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-[#F7A81B]">
            <Sparkles className="w-4 h-4 text-[#F7A81B]" />
            <span>Haz clic en cualquier vídeo para reproducir</span>
          </div>
        </div>

        {/* 3-Column Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FEATURED_VIDEOS.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group cursor-pointer bg-slate-800/70 hover:bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-[#F7A81B]/60 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between transform hover:-translate-y-1"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                  {video.duration}
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-[#00246C] text-[#F7A81B] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#F7A81B]/40">
                  {video.category}
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#F7A81B] text-[#00246C] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-amber-400 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Video Info Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F7A81B] transition-colors line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-amber-200/90 font-medium mt-1 mb-2">
                    {video.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[#F7A81B] font-semibold group-hover:underline flex items-center gap-1">
                    <Play className="w-3 h-3 fill-current" /> Ver vídeo ahora
                  </span>
                  <span>Distrito 4320</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          youtubeId={selectedVideo.youtubeId}
          title={selectedVideo.title}
        />
      )}
    </section>
  );
}
