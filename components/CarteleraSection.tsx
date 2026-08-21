'use client';

import { useEffect, useState } from 'react';
import { Calendar, MapPin, ExternalLink, Sparkles } from 'lucide-react';

interface EventoCartelera {
  eventId: string;
  title: string;
  date: string;
  city?: string;
  description?: string;
  linkRegistration?: string;
  imageUrl?: string;
}

export default function CarteleraSection() {
  const [eventos, setEventos] = useState<EventoCartelera[]>([]);

  useEffect(() => {
    async function fetchCartelera() {
      try {
        const res = await fetch(
          'https://script.google.com/macros/s/AKfycbyB2VdT6qYPNcEAmlrAMWpgpd9LObcTAk0imjRMsI6W3-ChCegRi31w_B1WoZpxW5va/exec?sheet=Cartelera'
        );
        const data: EventoCartelera[] = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setEventos(data);
        }
      } catch (err) {
        console.error('Error cargando cartelera:', err);
      }
    }

    fetchCartelera();
  }, []);

  if (!eventos || eventos.length === 0) return null;

  return (
    <section className="w-full py-8 sm:py-10 bg-gradient-to-r from-[#001233] via-[#001744] to-[#00246C] text-white border-t-2 border-[#F7A81B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Compacto */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 border-b border-blue-900/60 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F7A81B] text-[#00246C] text-[11px] font-black uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3 h-3 text-[#00246C]" />
              <span>Agenda & Eventos Distritales</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Cartelera de Actividades
            </h2>
          </div>
          <p className="text-xs text-blue-200/80 max-w-sm">
            Próximos encuentros, seminarios y actividades oficiales del Distrito 4320.
          </p>
        </div>

        {/* Grid de Tarjetas Compacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {eventos.map((evt) => (
            <div
              key={evt.eventId || evt.title}
              className="bg-[#001d57]/80 rounded-xl border border-blue-800/80 hover:border-[#F7A81B]/80 overflow-hidden shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Afiche / Imagen Reducida (h-36) */}
                {evt.imageUrl && (
                  <div className="relative w-full h-36 bg-slate-950 overflow-hidden border-b border-blue-900/50">
                    <img
                      src={evt.imageUrl}
                      alt={evt.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-4 space-y-2">
                  {/* Metadata: Fecha y Ciudad */}
                  <div className="flex items-center gap-2 text-[11px] font-semibold flex-wrap">
                    {evt.date && (
                      <span className="flex items-center gap-1 text-[#F7A81B] bg-[#F7A81B]/10 border border-[#F7A81B]/30 px-2 py-0.5 rounded-md">
                        <Calendar className="w-3 h-3 text-[#F7A81B]" />
                        {evt.date}
                      </span>
                    )}
                    {evt.city && (
                      <span className="flex items-center gap-1 text-blue-200 bg-blue-900/50 border border-blue-700/50 px-2 py-0.5 rounded-md">
                        <MapPin className="w-3 h-3 text-blue-300" />
                        {evt.city}
                      </span>
                    )}
                  </div>

                  {/* Título */}
                  <h3 className="font-bold text-sm text-white leading-snug line-clamp-2">
                    {evt.title}
                  </h3>

                  {/* Descripción corta */}
                  {evt.description && (
                    <p className="text-xs text-blue-100/70 line-clamp-2 leading-relaxed">
                      {evt.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Botón Dorado de Inscripción */}
              {evt.linkRegistration && (
                <div className="p-4 pt-0 mt-2">
                  <a
                    href={evt.linkRegistration}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#F7A81B] hover:bg-amber-400 text-[#00246C] font-extrabold text-xs transition-colors shadow"
                  >
                    <span>Inscribirse / Más información</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#00246C]" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
