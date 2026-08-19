'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Megaphone, ArrowRight, X } from 'lucide-react';
import { AlertItem, SHEETS_API_URL } from '@/lib/getAlert';

interface TopAlertBannerProps {
  initialAlert?: AlertItem | null;
}

export default function TopAlertBanner({ initialAlert = null }: TopAlertBannerProps) {
  const [alert, setAlert] = useState<AlertItem | null>(initialAlert);
  const [dismissed, setDismissed] = useState(false);

  // Consulta en vivo desde el navegador
  useEffect(() => {
    async function fetchLiveAlert() {
      try {
        const res = await fetch(`${SHEETS_API_URL}?sheet=Alertas_Portada`, {
          method: 'GET',
          redirect: 'follow',
        });
        if (!res.ok) return;

        const text = await res.text();
        if (text.trim().startsWith('<')) return;

        const data = JSON.parse(text);
        if (Array.isArray(data) && data.length > 0) {
          const activeItem = data.find((item: any) => {
            const val = String(item.active).toUpperCase().trim();
            return val === 'TRUE' || val === '1' || val === 'SI' || val === 'SÍ';
          });

          if (activeItem) {
            setAlert({
              id: activeItem.id || 'alert-1',
              active: true,
              message: activeItem.message || '',
              buttonText: activeItem.buttonText || '',
              linkUrl: activeItem.linkUrl || '',
            });
          } else {
            setAlert(null);
          }
        }
      } catch (err) {
        console.warn('Sin alertas en vivo:', err);
      }
    }

    fetchLiveAlert();
  }, []);

  if (!alert || !alert.message || dismissed) {
    return null;
  }

  const isExternal = alert.linkUrl?.startsWith('http');

  return (
    <div className="w-full bg-gradient-to-r from-amber-500 via-[#F7A81B] to-amber-400 text-[#00246C] py-3 px-4 shadow-md relative z-40 border-b border-amber-600/20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-extrabold">
          <span className="p-1 rounded-lg bg-[#00246C] text-[#F7A81B] flex-shrink-0">
            <Megaphone className="w-4 h-4" />
          </span>
          <span className="leading-snug">{alert.message}</span>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          {alert.buttonText && alert.linkUrl && (
            isExternal ? (
              <a
                href={alert.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#00246C] hover:bg-blue-900 text-white font-black text-xs transition-all shadow-sm inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>{alert.buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F7A81B]" />
              </a>
            ) : (
              <Link
                href={alert.linkUrl}
                className="px-3.5 py-1.5 rounded-lg bg-[#00246C] hover:bg-blue-900 text-white font-black text-xs transition-all shadow-sm inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>{alert.buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F7A81B]" />
              </Link>
            )
          )}

          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Cerrar aviso"
            className="p-1 rounded-lg hover:bg-black/10 text-[#00246C] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
