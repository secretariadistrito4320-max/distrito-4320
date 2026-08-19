'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Award, Search, Phone, Mail, ArrowLeft, Building2, RefreshCw } from 'lucide-react';
import { EGDItem, FALLBACK_EGD_LIST, SHEETS_API_URL } from '@/lib/getEgd';

export default function ListadoEgdPage() {
  const [egdList, setEgdList] = useState<EGDItem[]>(FALLBACK_EGD_LIST);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Sincronización en vivo desde Google Sheets / AppSheet
  useEffect(() => {
    async function fetchLiveEgd() {
      try {
        setLoading(true);
        const res = await fetch(`${SHEETS_API_URL}?sheet=Listado_EGD`, {
          method: 'GET',
          redirect: 'follow',
        });
        if (!res.ok) return;

        const text = await res.text();
        if (text.trim().startsWith('<')) return;

        const data = JSON.parse(text);
        if (Array.isArray(data) && data.length > 0) {
          const parsed = data.map((item: any) => ({
            period: item.period || '',
            name: item.name || '',
            club: item.club || '',
            phone: item.phone || '',
            email: item.email || '',
            status: item.status || item.obs || '',
            obs: item.obs || item.status || '',
          }));
          setEgdList(parsed);
        }
      } catch (err) {
        console.warn('Cargando respaldo local de EGD:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchLiveEgd();
  }, []);

  const filteredEgd = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return egdList.filter((item) => (
      item.name.toLowerCase().includes(term) ||
      item.club.toLowerCase().includes(term) ||
      item.period.toLowerCase().includes(term)
    ));
  }, [egdList, searchTerm]);

  return (
    <div className="w-full bg-[#F8FAFC] py-10 sm:py-16 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Botón Volver */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#00246C] hover:text-blue-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-[#F7A81B]" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Encabezado */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#00246C] text-xs font-bold border border-blue-100">
                <Award className="w-3.5 h-3.5 text-[#F7A81B]" />
                <span>Memoria Institucional y Liderazgo</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#00246C]">
                Listado de Ex Gobernadores de Distrito (EGD)
              </h1>
              <p className="text-xs sm:text-sm text-slate-600">
                Registro histórico oficial de los líderes rotarios del Distrito 4320 desde 1923 a la fecha.
              </p>
            </div>

            <div className="bg-blue-50 p-3.5 rounded-2xl border border-blue-100 text-xs font-bold text-[#00246C] flex-shrink-0 flex items-center gap-2">
              {loading && <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#00246C]" />}
              <span>Total Registrados: {egdList.length} Gobernaciones</span>
            </div>
          </div>
        </div>

        {/* Buscador */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 relative">
          <Search className="w-4 h-4 absolute left-7 top-7 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por nombre, club de origen o periodo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] text-slate-800"
          />
        </div>

        {/* Tabla Dinámica */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#00246C] text-white text-[11px] font-black uppercase tracking-wider">
                  <th className="py-3.5 px-4 sm:px-6">Periodo</th>
                  <th className="py-3.5 px-4 sm:px-6">Ex Gobernador(a)</th>
                  <th className="py-3.5 px-4 sm:px-6">Club de Origen</th>
                  <th className="py-3.5 px-4 sm:px-6">Contacto</th>
                  <th className="py-3.5 px-4 sm:px-6">Observación</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                {filteredEgd.map((item, idx) => {
                  const statusText = item.status || item.obs || '';
                  return (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-bold text-[#00246C] whitespace-nowrap">
                        {item.period}
                      </td>
                      <td className="py-3 px-4 sm:px-6 font-extrabold text-slate-900">
                        {item.name}
                      </td>
                      <td className="py-3 px-4 sm:px-6 font-medium text-slate-600 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-[#F7A81B]" />
                          <span>{item.club}</span>
                        </span>
                      </td>
                      <td className="py-3 px-4 sm:px-6 space-y-0.5 whitespace-nowrap">
                        {item.phone && (
                          <div className="flex items-center gap-1 text-[11px] text-slate-600">
                            <Phone className="w-3 h-3 text-slate-400" />
                            <span>{item.phone}</span>
                          </div>
                        )}
                        {item.email && (
                          <a href={`mailto:${item.email}`} className="flex items-center gap-1 text-[11px] text-[#00246C] font-semibold hover:underline">
                            <Mail className="w-3 h-3 text-[#F7A81B]" />
                            <span>{item.email}</span>
                          </a>
                        )}
                        {!item.phone && !item.email && <span className="text-slate-400 text-[11px]">—</span>}
                      </td>
                      <td className="py-3 px-4 sm:px-6 whitespace-nowrap">
                        {statusText ? (
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            statusText.includes('Q.E.P.D.')
                              ? 'bg-slate-100 text-slate-600'
                              : 'bg-amber-100 text-amber-900'
                          }`}>
                            {statusText}
                          </span>
                        ) : (
                          <span className="text-emerald-700 font-bold text-[10px] uppercase bg-emerald-50 px-2.5 py-0.5 rounded-full">
                            Activo
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
