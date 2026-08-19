'use client';

import React, { useState, useMemo, useEffect } from 'react';
import NewsCard, { NewsItem } from './NewsCard';
import { Search, Filter, Newspaper, Sparkles, ChevronDown } from 'lucide-react';

interface NewsSectionProps {
  initialNews: NewsItem[];
  preselectedClubId?: string;
  hideClubFilter?: boolean;
}

export default function NewsSection({
  initialNews = [],
  preselectedClubId = 'Todos',
  hideClubFilter = false
}: NewsSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedClub, setSelectedClub] = useState(preselectedClubId);
  const [visibleCount, setVisibleCount] = useState(20);

  useEffect(() => {
    if (preselectedClubId) {
      setSelectedClub(preselectedClubId);
    }
  }, [preselectedClubId]);

  const clubList = useMemo(() => {
    const clubsMap = new Map<string, string>();
    initialNews.forEach((item) => {
      if (item.clubId && item.clubName && item.clubId !== 'distrital') {
        clubsMap.set(item.clubId, item.clubName);
      }
    });
    return Array.from(clubsMap.entries()).map(([id, name]) => ({ id, name }));
  }, [initialNews]);

  const filteredNews = useMemo(() => {
    const sorted = [...initialNews].sort((a, b) => {
      const dateA = new Date(a.date).getTime() || 0;
      const dateB = new Date(b.date).getTime() || 0;
      return dateB - dateA;
    });

    return sorted.filter((news) => {
      const matchesSearch =
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.clubName.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'Todos' || news.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesClub =
        selectedClub === 'Todos' || news.clubId === selectedClub;

      return matchesSearch && matchesCategory && matchesClub;
    });
  }, [initialNews, searchTerm, selectedCategory, selectedClub]);

  const handleFilterChange = (type: 'category' | 'club', value: string) => {
    if (type === 'category') setSelectedCategory(value);
    if (type === 'club') setSelectedClub(value);
    setVisibleCount(20);
  };

  const categories = ['Todos', 'Noticias', 'Polio', 'Comunidad', 'Proyectos', 'Cartas GD'];

  const visibleNews = filteredNews.slice(0, visibleCount);
  const featuredNews = visibleNews[0];
  const gridNews = visibleNews.slice(1);

  return (
    <section className="w-full py-12 sm:py-16 bg-[#F8FAFC]" id="noticias-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#00246C] text-xs font-bold uppercase tracking-wider mb-2">
              <Newspaper className="w-3.5 h-3.5 text-[#00246C]" />
              <span>Portal de Noticias e Información Actualizada</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#00246C] tracking-tight">
              Actividades y Proyectos del Distrito 4320
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Conoce las obras de servicio, donaciones y testimonios rotarios en nuestras comunidades.
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-500 self-start md:self-end">
            Mostrando <strong className="text-[#00246C]">{visibleNews.length}</strong> de{' '}
            <strong className="text-[#00246C]">{filteredNews.length}</strong> publicaciones
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            
            <div className={hideClubFilter ? "md:col-span-12 relative" : "md:col-span-7 relative"}>
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por título, contenido, autor o ciudad..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setVisibleCount(20);
                }}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] text-slate-800"
              />
            </div>

            {!hideClubFilter && (
              <div className="md:col-span-5 relative">
                <Filter className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <select
                  value={selectedClub}
                  onChange={(e) => handleFilterChange('club', e.target.value)}
                  className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] text-slate-800 appearance-none font-medium cursor-pointer"
                >
                  <option value="Todos">Todos los Clubes del Distrito ({clubList.length})</option>
                  {clubList.map((club) => (
                    <option key={club.id} value={club.id}>
                      {club.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
              </div>
            )}

          </div>

          <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-0.5 custom-scrollbar">
            <span className="text-xs font-bold text-slate-500 whitespace-nowrap mr-1">Categoría:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleFilterChange('category', cat)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#00246C] text-[#F7A81B] shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredNews.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <Newspaper className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">No se encontraron publicaciones</h3>
            <p className="text-xs text-slate-500 mt-1">Intenta ajustando los términos de búsqueda o los filtros.</p>
          </div>
        ) : (
          <div className="space-y-8">
            
            {featuredNews && (
              <div className="w-full">
                <NewsCard news={featuredNews} isFeatured={true} />
              </div>
            )}

            {gridNews.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gridNews.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            )}

            {visibleCount < filteredNews.length && (
              <div className="text-center pt-6">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 20)}
                  className="px-6 py-3 rounded-xl bg-[#00246C] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2 active:scale-95 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#F7A81B]" />
                  <span>Cargar más publicaciones ({filteredNews.length - visibleCount} restantes)</span>
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
