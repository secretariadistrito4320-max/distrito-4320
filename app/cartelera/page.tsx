'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Search, ArrowLeft, ExternalLink, RefreshCw, Sparkles } from 'lucide-react';
import { EventItem, FALLBACK_EVENTS, SHEETS_API_URL } from '@/lib/getEvents';

export default function CarteleraPage() {
  const [events, setEvents] = useState<EventItem[]>(FALLBACK_EVENTS);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Sincronización en vivo desde Google Sheets / AppSheet
  useEffect(() => {
    async function fetchLiveEvents() {
      try {
        setLoading(true);
        const res = await fetch(`${SHEETS_API_URL}?sheet=Cartelera`, {
          method: 'GET',
          redirect: 'follow',
        });
        if (!res.ok) return;

        const text = await res.text();
        if (text.trim().startsWith('<')) return;

        const data = JSON.parse(text);
        if (Array.isArray(data) && data.length > 0) {
          const parsed = data.map((item: any, index: number) => ({
            eventId: item.eventId || item.id || `event-${index}`,
            title: item.title || 'Evento Rotario',
            date: item.date || new Date().toISOString().split('T')[0],
            city: item.city || 'Distrito 4320',
            description: item.description || '',
            linkRegistration: item.linkRegistration || '',
          }));
          setEvents(parsed);
        }
      } catch (err) {
        console.warn('Cargando respaldo local de Cartelera:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchLiveEvents();
  }, []);

  const filteredEvents = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return events.filter(
      (item) =>
        item.title.toLowerCase().includes(term) ||
        item.city.toLowerCase().includes(term) ||
        (item.description && item.description.toLowerCase().includes(term))
    );
  }, [events, searchTerm]);

  return (
    <div className="w-full bg-[#F8FAFC] py-10 sm:py-16 font-sans min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
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
                <Calendar className="w-3.5 h-3.5 text-[#F7A81B]" />
                <span>Agenda Distrital Oficial</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#00246C]">
                Cartelera y Eventos del Distrito 4320
              </h1>
              <p className="text-xs sm:text-sm text-slate-600">
                Calendario de encuentros, asambleas, capacitaciones y actividades comunitarias programadas.
              </p>
            </div>

            <div className="bg-blue-50 p-3.5 rounded-2xl border border-blue-100 text-xs font-bold text-[#00246C] flex-shrink-0 flex items-center gap-2">
              {loading && <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#00246C]" />}
              <span>{events.length} Eventos en Agenda</span>
            </div>
          </div>
        </div>

        {/* Buscador */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 relative">
          <Search className="w-4 h-4 absolute left-7 top-7 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar evento por título, ciudad o descripción..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] text-slate-800"
          />
        </div>

        {/* Tarjetas de Eventos */}
        {filteredEvents.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-2">
            <Calendar className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="font-bold text-slate-700 text-sm">No hay eventos programados con ese criterio</h3>
            <p className="text-xs text-slate-500">Prueba con otro término de búsqueda.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEvents.map((evt) => {
              const formattedDate = evt.date
                ? new Date(evt.date + 'T00:00:00').toLocaleDateString('es-CL', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })
                : evt.date;

              return (
                <div
                  key={evt.eventId}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-[11px] font-bold border border-amber-200">
                        <Calendar className="w-3.5 h-3.5 text-[#F7A81B]" />
                        <span>{formattedDate}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        <MapPin className="w-3 h-3 text-[#F7A81B]" />
                        <span>{evt.city}</span>
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-[#00246C] leading-snug">
                      {evt.title}
                    </h3>

                    {evt.description && (
                      <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                        {evt.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#F7A81B]" />
                      <span>Distrito 4320</span>
                    </span>

                    {evt.linkRegistration ? (
                      <a
                        href={evt.linkRegistration}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00246C] hover:bg-blue-900 text-white text-xs font-bold transition-all shadow-sm"
                      >
                        <span>Inscribirse / Más info</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#F7A81B]" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-semibold text-slate-400 italic">
                        Sin enlace externo
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
