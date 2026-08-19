'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Building2,
  Search,
  MapPin,
  Clock,
  Users,
  ChevronRight,
  Filter,
  CalendarDays,
  FileCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CLUBS_DATA, RotaryClub } from '@/data/clubsData';

const REGIONS = [
  'Todas las Regiones',
  'Región de Arica y Parinacota',
  'Región de Tarapacá',
  'Región de Antofagasta',
  'Región de Atacama',
  'Región de Coquimbo',
  'Región de Valparaíso',
];

export default function ClubesDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Todas las Regiones');

  const filteredClubs = useMemo(() => {
    return CLUBS_DATA.filter((club) => {
      const regionMatch =
        selectedRegion === 'Todas las Regiones' || club.region === selectedRegion;

      const searchMatch =
        searchTerm === '' ||
        club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        club.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
        club.president.toLowerCase().includes(searchTerm.toLowerCase()) ||
        club.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        club.motto.toLowerCase().includes(searchTerm.toLowerCase());

      return regionMatch && searchMatch;
    });
  }, [searchTerm, selectedRegion]);

  return (
    <div className="w-full flex flex-col bg-[#F8FAFC]">
      
      {/* Hero Header */}
      <section className="w-full bg-[#00246C] text-white py-12 sm:py-16 border-b-4 border-[#F7A81B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7A81B] text-[#00246C] text-xs font-bold uppercase tracking-wider mb-3">
                <Building2 className="w-3.5 h-3.5" />
                <span>Directorio Distrital de Clubes</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Clubes Rotarios del Distrito 4320
              </h1>
              <p className="text-blue-100 text-sm mt-2 leading-relaxed">
                Descubre los más de 70 clubes rotarios y sedes comunitarias ubicados desde el límite norte en Arica hasta las costas de Valparaíso y la Isla de Pascua (Rapa Nui).
              </p>
            </div>

            {/* Quick Submenu Links */}
            <div className="flex flex-wrap gap-2 text-xs">
              <Link
                href="/clubes/aniversarios"
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold flex items-center gap-1.5 transition-colors"
              >
                <CalendarDays className="w-4 h-4 text-[#F7A81B]" />
                <span>Calendario de Aniversarios</span>
              </Link>
              <Link
                href="/clubes/cartas-constitutivas"
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold flex items-center gap-1.5 transition-colors"
              >
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <span>Cartas Constitutivas</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Directory Grid */}
      <section className="w-full py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm mb-8 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              
              <div className="md:col-span-7 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Buscar por nombre del club, ciudad, presidente o lema..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] text-slate-800"
                />
              </div>

              <div className="md:col-span-5 relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full pl-10 pr-8 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] text-slate-800 appearance-none cursor-pointer font-medium"
                >
                  {REGIONS.map((reg) => (
                    <option key={reg} value={reg}>
                      {reg}
                    </option>
                  ))}
                </select>
                <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
              </div>

            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
              <span>
                Mostrando <strong className="text-[#00246C] font-bold">{filteredClubs.length}</strong> clubes rotarios
              </span>
              {(searchTerm !== '' || selectedRegion !== 'Todas las Regiones') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedRegion('Todas las Regiones');
                  }}
                  className="text-[#00246C] hover:underline font-semibold"
                >
                  Limpiar filtros
                </button>
              )}
            </div>
          </div>

          {/* Clubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClubs.map((club) => (
              <div
                key={club.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Banner Image */}
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={club.bannerImage}
                      alt={club.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#00246C] text-[#F7A81B] text-[10px] font-bold uppercase tracking-wider border border-[#F7A81B]/40">
                        {club.zone}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="font-extrabold text-base sm:text-lg leading-tight drop-shadow-sm group-hover:text-[#F7A81B] transition-colors">
                        {club.name}
                      </h3>
                      <span className="text-xs text-blue-200 font-medium">
                        {club.region}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3">
                    
                    {/* Club Motto */}
                    <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 text-[11px] text-[#00246C] italic">
                      &ldquo;{club.motto}&rdquo;
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex items-start gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#F7A81B] mt-0.5 flex-shrink-0" />
                        <span><strong>Reunión:</strong> {club.meetingDay} · {club.meetingTime}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#F7A81B] mt-0.5 flex-shrink-0" />
                        <span className="truncate"><strong>Sede:</strong> {club.address}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="w-3.5 h-3.5 text-[#F7A81B] mt-0.5 flex-shrink-0" />
                        <span><strong>Presidente:</strong> {club.president} ({club.memberCount} socios)</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="p-5 pt-0">
                  <Link
                    href={`/clubes/${club.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#00246C] group-hover:bg-blue-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>Ver Página Oficial del Club</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F7A81B]" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
