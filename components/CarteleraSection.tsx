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
    <section className="w-full py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00246C]/10 text-[#00246C] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F7A81B]" />
              <span>Agenda & Eventos Distritales</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#00246C] tracking-tight">
              Cartelera de Actividades
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Próximos encuentros, seminarios y actividades oficiales del Distrito 4320.
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventos.map((evt) => (
            <div
              key={evt.eventId || evt.title}
              className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Afiche / Imagen si existe */}
                {evt.imageUrl && (
                  <div className="relative w-full h-48 bg-slate-200 overflow-hidden">
                    <img
                      src={evt.imageUrl}
                      alt={evt.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-5">
                  {/* Metadata: Fecha y Ciudad */}
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mb-2 flex-wrap">
                    {evt.date && (
                      <span className="flex items-center gap-1 text-[#00246C] bg-blue-100/70 px-2.5 py-1 rounded-md">
                        <Calendar className="w-3.5 h-3.5 text-[#F7A81B]" />
                        {evt.date}
                      </span>
                    )}
                    {evt.city && (
                      <span className="flex items-center gap-1 text-slate-600 bg-slate-200/60 px-2.5 py-1 rounded-md">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {evt.city}
                      </span>
                    )}
                  </div>

                  {/* Título */}
                  <h3 className="font-bold text-base text-slate-900 mb-2 leading-snug">
                    {evt.title}
                  </h3>

                  {/* Descripción */}
                  {evt.description && (
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {evt.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Botón de inscripción */}
              {evt.linkRegistration && (
                <div className="p-5 pt-0">
                  <a
                    href={evt.linkRegistration}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#00246C] hover:bg-blue-900 text-white font-bold text-xs transition-colors shadow-sm"
                  >
                    <span>Inscribirse / Más información</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#F7A81B]" />
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
