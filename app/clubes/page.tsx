'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  Building2,
  Search,
  MapPin,
  Calendar,
  Mail,
  ChevronRight,
  Filter,
  FileText,
  User,
  RefreshCw
} from 'lucide-react';
import { CLUBS_DATA, Club } from '@/data/clubsData';
import { SHEETS_API_URL } from '@/lib/getClubs';

const REGIONS = [
  'Todas las Regiones',
  'Región de Arica y Parinacota',
  'Región de Tarapacá',
  'Región de Antofagasta',
  'Región de Atacama',
  'Región de Coquimbo',
  'Región de Valparaíso',
];

export default function ClubsDirectoryPage() {
  const [clubsList, setClubsList] = useState<Club[]>(CLUBS_DATA);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Todas las Regiones');

  // Sincronización en vivo desde Google Sheets / AppSheet
  useEffect(() => {
    async function fetchLiveClubs() {
      try {
        setLoading(true);
        const res = await fetch(`${SHEETS_API_URL}?sheet=Clubes`, {
          method: 'GET',
          redirect: 'follow',
        });
        if (!res.ok) return;

        const text = await res.text();
        if (text.trim().startsWith('<')) return;

        const data = JSON.parse(text);
        if (Array.isArray(data) && data.length > 0) {
          const sheetClubsMap = new Map<string, any>();
          data.forEach((item: any) => {
            const id = item.clubId || item.id;
            if (id) {
              sheetClubsMap.set(id.toLowerCase(), item);
            }
          });

          setClubsList((prevClubs) =>
            prevClubs.map((staticClub) => {
              const sheetClub = sheetClubsMap.get(staticClub.id.toLowerCase());
              if (sheetClub) {
                return {
                  ...staticClub,
                  name: sheetClub.clubName || sheetClub.name || staticClub.name,
                  city: sheetClub.city || staticClub.city,
                  president: sheetClub.presidentName || sheetClub.president || staticClub.president,
                  email: sheetClub.email || staticClub.email,
                };
              }
              return staticClub;
            })
          );
        }
      } catch (err) {
        console.warn('Cargando respaldo local de Clubes:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchLiveClubs();
  }, []);

  const filteredClubs = useMemo(() => {
    return clubsList.filter((club: Club) => {
      const term = searchTerm.toLowerCase();

      const matchesSearch =
        club.name.toLowerCase().includes(term) ||
        club.city.toLowerCase().includes(term) ||
        club.region.toLowerCase().includes(term) ||
        (club.president?.toLowerCase().includes(term) ?? false);

      const matchesRegion =
        selectedRegion === 'Todas las Regiones' || club.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [clubsList, searchTerm, selectedRegion]);

  return (
    <div className="w-full bg-[#F8FAFC] py-10 sm:py-16 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#00246C] text-xs font-bold border border-blue-100">
                <Building2 className="w-3.5 h-3.5 text-[#F7A81B]" />
                <span>Directorio Oficial · Distrito 4320</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-[#00246C] tracking-tight">
                Clubes Rotarios del Distrito 4320
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Conoce nuestras <strong className="text-[#00246C]">{clubsList.length} sedes rotarias</strong> ubicadas desde Arica hasta Valparaíso y Rapa Nui, unidas por la vocación de servicio.
              </p>
            </div>

            {/* Accesos Rápidos */}
            <div className="flex flex-wrap sm:flex-col gap-2.5 flex-shrink-0">
              <div className="px-4 py-2 rounded-xl bg-blue-50 text-[#00246C] text-xs font-bold border border-blue-100 flex items-center justify-center gap-2">
                {loading && <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#00246C]" />}
                <span>{clubsList.length} Clubes Sincronizados</span>
              </div>
              <Link
                href="/clubes/aniversarios"
                className="px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#00246C] text-xs font-bold transition-all border border-blue-200 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#F7A81B]" />
                <span>Aniversarios de Clubes</span>
              </Link>
              <Link
                href="/clubes/cartas-constitutivas"
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#00246C]" />
                <span>Cartas Constitutivas</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Barra de Filtros y Búsqueda */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            
            {/* Buscador */}
            <div className="md:col-span-7 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por club, ciudad, región o presidente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] text-slate-800"
              />
            </div>

            {/* Filtro por Región */}
            <div className="md:col-span-5 relative">
              <Filter className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] text-slate-800 appearance-none font-medium cursor-pointer"
              >
                {REGIONS.map((reg) => (
                  <option key={reg} value={reg}>
                    {reg}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Lista de Clubes */}
        {filteredClubs.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
            <Building2 className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-bold text-slate-700 text-base">No se encontraron clubes</h3>
            <p className="text-xs text-slate-500">Intenta ajustando los términos de búsqueda o seleccionando otra región.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClubs.map((club: Club) => (
              <div
                key={club.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-[#00246C] border border-blue-100 truncate max-w-[200px]">
                      {club.region.replace('Región de ', '')}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-[#00246C] font-bold text-xs flex items-center justify-center group-hover:bg-[#00246C] group-hover:text-[#F7A81B] transition-colors">
                      RC
                    </div>
                  </div>

                  <Link href={`/clubes/${club.slug}`} className="block">
                    <h3 className="font-extrabold text-lg text-[#00246C] group-hover:text-blue-800 transition-colors">
                      {club.name}
                    </h3>
                  </Link>

                  <div className="space-y-1.5">
                    <p className="flex items-center gap-2 text-xs text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-[#F7A81B] flex-shrink-0" />
                      <span>{club.city}, Chile</span>
                    </p>

                    {club.president && (
                      <p className="flex items-center gap-2 text-xs text-slate-600">
                        <User className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span>Presidencia: <strong className="text-slate-800">{club.president}</strong></span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  {club.email ? (
                    <a
                      href={`mailto:${club.email}`}
                      className="text-slate-400 hover:text-[#00246C] flex items-center gap-1 text-[11px] truncate max-w-[160px]"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span className="truncate">{club.email}</span>
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-400">Distrito 4320</span>
                  )}

                  <Link
                    href={`/clubes/${club.slug}`}
                    className="font-bold text-[#00246C] group-hover:underline inline-flex items-center gap-1 text-xs"
                  >
                    <span>Ver Club</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#F7A81B]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
