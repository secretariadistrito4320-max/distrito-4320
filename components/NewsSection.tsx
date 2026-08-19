'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, Newspaper, Sparkles, Building2, RefreshCw } from 'lucide-react';
import NewsCard, { NewsItem } from './NewsCard';
import { CLUBS_DATA } from '@/data/clubsData';

interface NewsSectionProps {
  initialNews: NewsItem[];
  preselectedClubId?: string;
  hideClubFilter?: boolean;
}

const CATEGORIES = [
  'Todos',
  'Polio',
  'Comunidad',
  'Proyectos',
  'Noticias',
  'Cartas GD',
];

export default function NewsSection({
  initialNews,
  preselectedClubId,
  hideClubFilter = false,
}: NewsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedClub, setSelectedClub] = useState<string>(preselectedClubId || 'todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredNews = useMemo(() => {
    return initialNews.filter((item) => {
      // Category match
      const categoryMatch =
        selectedCategory === 'Todos' ||
        item.category.toLowerCase() === selectedCategory.toLowerCase();

      // Club match
      const clubMatch =
        selectedClub === 'todos' ||
        item.clubId.toLowerCase() === selectedClub.toLowerCase();

      // Search term match
      const searchMatch =
        searchTerm === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.clubName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.author.toLowerCase().includes(searchTerm.toLowerCase());

      return categoryMatch && clubMatch && searchMatch;
    });
  }, [initialNews, selectedCategory, selectedClub, searchTerm]);

  const featuredArticle = filteredNews.length > 0 ? filteredNews[0] : null;
  const secondaryArticles = filteredNews.length > 1 ? filteredNews.slice(1) : [];

  const handleResetFilters = () => {
    setSelectedCategory('Todos');
    setSelectedClub('todos');
    setSearchTerm('');
  };

  return (
    <section className="w-full py-12 sm:py-16 bg-[#F8FAFC]" id="noticias-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#00246C] text-xs font-bold uppercase tracking-wider mb-2">
              <Newspaper className="w-3.5 h-3.5 text-[#00246C]" />
              <span>Portal de Noticias e Información Actualizada</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Actividades y Proyectos del Distrito 4320
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Conoce las obras de servicio, donaciones y testimonios rotarios en nuestras comunidades.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Mostrando <strong className="text-[#00246C] font-bold">{filteredNews.length}</strong> publicaciones
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm mb-10 space-y-4">
          
          {/* Top row: Search input + Club selector */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            
            {/* Search */}
            <div className="md:col-span-6 lg:col-span-7 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Buscar por título, contenido, autor o ciudad..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] focus:bg-white text-slate-800 transition-all placeholder-slate-400"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Club Filter Selector */}
            {!hideClubFilter && (
              <div className="md:col-span-6 lg:col-span-5 relative">
                <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                <select
                  value={selectedClub}
                  onChange={(e) => setSelectedClub(e.target.value)}
                  className="w-full pl-10 pr-8 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] focus:bg-white text-slate-800 transition-all cursor-pointer font-medium appearance-none"
                >
                  <option value="todos">Todos los Clubes del Distrito</option>
                  <option value="distrital">Gobernación / Distrito 4320</option>
                  {CLUBS_DATA.map((club) => (
                    <option key={club.id} value={club.id}>
                      {club.name} ({club.region})
                    </option>
                  ))}
                </select>
                <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
              </div>
            )}

          </div>

          {/* Bottom row: Category Pills + Reset */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-xs font-bold text-slate-500 mr-1 hidden sm:inline">
                Categoría:
              </span>
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#00246C] text-[#F7A81B] shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {(selectedCategory !== 'Todos' || selectedClub !== 'todos' || searchTerm !== '') && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-semibold text-red-600 hover:text-red-800 hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Limpiar filtros</span>
              </button>
            )}
          </div>

        </div>

        {/* Results Stream */}
        {filteredNews.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-[#00246C] flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">
              No se encontraron noticias con estos criterios
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Intenta seleccionar otra categoría o restablecer los términos de búsqueda.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-4 py-2 rounded-lg bg-[#00246C] text-white text-xs font-bold hover:bg-blue-900 transition-colors cursor-pointer"
            >
              Restablecer todos los filtros
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Featured Hero Article */}
            {featuredArticle && (
              <div className="w-full">
                <NewsCard news={featuredArticle} featured={true} />
              </div>
            )}

            {/* Secondary 3-Column Grid */}
            {secondaryArticles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {secondaryArticles.map((item) => (
                  <NewsCard key={item.id} news={item} />
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
