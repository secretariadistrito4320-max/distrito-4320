'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface FotoDestacada {
  id: string;
  clubId: string;
  title: string;
  imageUrl: string;
  active: string | boolean;
  selectedDate?: string;
  description?: string;
}

export default function FeaturedPhoto() {
  const [foto, setFoto] = useState<FotoDestacada | null>(null);

  useEffect(() => {
    async function fetchFeaturedPhoto() {
      try {
        const res = await fetch(
          'https://script.google.com/macros/s/AKfycbyB2VdT6qYPNcEAmlrAMWpgpd9LObcTAk0imjRMsI6W3-ChCegRi31w_B1WoZpxW5va/exec?sheet=Foto_Destacada'
        );
        const data: FotoDestacada[] = await res.json();

        // Filtra la foto marcada como activa
        const activa = data.find((item) => {
          const val = String(item.active).toLowerCase().trim();
          return val === 'true' || val === 'verdadero' || val === 'yes' || val === '1';
        });

        if (activa) setFoto(activa);
      } catch (err) {
        console.error('Error cargando la foto destacada:', err);
      }
    }

    fetchFeaturedPhoto();
  }, []);

  if (!foto) return null; // Si no hay foto activa en AppSheet, la sección se oculta sola

  return (
    <section className="py-12 bg-slate-100 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
          <div>
            <span className="inline-block bg-[#F7A81B] text-[#00246C] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
              Impacto en la Comunidad
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00246C]">
              Imagen de Servicio Destacada
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Reconocimiento semanal al trabajo en terreno realizado por nuestros clubes en el Distrito 4320.
          </p>
        </div>

        {/* Tarjeta Principal */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Imagen Grande */}
          <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] bg-slate-900">
            {foto.imageUrl ? (
              <img
                src={foto.imageUrl}
                alt={foto.title || 'Foto de servicio destacada'}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                Sin vista previa
              </div>
            )}
          </div>

          {/* Información e Historia */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              {/* Badge del Club y Fecha */}
              <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                <span className="bg-[#00246C]/10 text-[#00246C] text-xs font-bold px-3 py-1 rounded-md border border-[#00246C]/20">
                  {foto.clubId ? foto.clubId.toUpperCase().replace('RC-', 'ROTARY CLUB ') : 'DISTRITO 4320'}
                </span>
                {foto.selectedDate && (
                  <span className="text-xs text-slate-400 font-medium">
                    {foto.selectedDate}
                  </span>
                )}
              </div>

              {/* Título de la Acción */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                {foto.title}
              </h3>

              {/* Descripción / Relato */}
              {foto.description && (
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {foto.description}
                </p>
              )}
            </div>

            {/* Pie de Tarjeta */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00246C] text-[#F7A81B] font-extrabold flex items-center justify-center text-sm shadow-md shrink-0">
                4320
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Acción Rotary en Acción
                </p>
                <p className="text-xs text-slate-500">
                  Aporte enviado vía AppSheet por el club
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
