'use client';

import { useEffect, useState } from 'react';

interface Alerta {
  id: string;
  active: string | boolean;
  message: string;
  buttonText?: string;
  linkUrl?: string;
}

export default function TopAlert() {
  const [alerta, setAlerta] = useState<Alerta | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    async function fetchAlert() {
      try {
        const res = await fetch(
          'https://script.google.com/macros/s/AKfycbyB2VdT6qYPNcEAmlrAMWpgpd9LObcTAk0imjRMsI6W3-ChCegRi31w_B1WoZpxW5va/exec?sheet=Alertas_Portada'
        );
        const data: Alerta[] = await res.json();

        // Evalúa variantes de verdadero (Yes/True/VERDADERO/1) generadas por Google Sheets
        const activa = data.find((item) => {
          const val = String(item.active).toLowerCase().trim();
          return val === 'true' || val === 'verdadero' || val === 'yes' || val === '1';
        });

        if (activa) setAlerta(activa);
      } catch (err) {
        console.error('Error cargando alertas de portada:', err);
      }
    }

    fetchAlert();
  }, []);

  if (!visible || !alerta) return null;

  return (
    <div className="bg-[#00246C] text-white px-4 py-2.5 shadow-md border-b border-[#F7A81B]/40 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        
        {/* Etiqueta y Mensaje */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="bg-[#F7A81B] text-[#00246C] text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
            Aviso
          </span>
          <p className="font-medium leading-tight">{alerta.message}</p>
        </div>

        {/* Botón de Enlace y Cierre */}
        <div className="flex items-center gap-3 shrink-0">
          {alerta.linkUrl && (
            <a
              href={alerta.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#F7A81B] hover:bg-[#e09716] text-[#00246C] font-semibold text-xs px-3 py-1.5 rounded-md transition-colors"
            >
              {alerta.buttonText || 'Ver más'}
              <span className="text-xs">→</span>
            </a>
          )}

          <button
            onClick={() => setVisible(false)}
            className="text-white/60 hover:text-white px-1.5 py-0.5 rounded transition-colors text-xs"
            aria-label="Cerrar aviso"
          >
            ✕
          </button>
        </div>

      </div>
    </div>
  );
}
