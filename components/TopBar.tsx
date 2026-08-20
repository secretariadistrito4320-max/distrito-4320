'use client';

import React from 'react';
import { Mail, Globe, ShieldCheck, Facebook, Instagram, Youtube } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full bg-[#001744] text-slate-200 text-[11px] sm:text-xs py-2 px-4 border-b border-blue-900/60 hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Lado Izquierdo: Correo de contacto */}
        <div className="flex items-center gap-2">
          <Mail className="w-3.5 h-3.5 text-[#F7A81B]" />
          <span>
            Envía las actividades de tu club a{' '}
            <a
              href="mailto:secretaria@rotary4320.cl"
              className="text-[#F7A81B] font-bold hover:underline"
            >
              secretaria@rotary4320.cl
            </a>{' '}
            y las compartiremos con el mundo.
          </span>
        </div>

        {/* Lado Derecho: Enlaces Oficiales y Redes Sociales */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 pr-3 border-r border-slate-700/60">
            <a
              href="https://www.rotary.org/es-mx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#F7A81B] transition-colors"
            >
              <Globe className="w-3 h-3 text-[#F7A81B]" />
              <span>Rotary.org</span>
            </a>
            <a
              href="https://my.rotary.org/es"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#F7A81B] transition-colors"
            >
              <ShieldCheck className="w-3 h-3 text-[#F7A81B]" />
              <span>My Rotary</span>
            </a>
          </div>

          {/* Redes Sociales */}
          <div className="flex items-center gap-2.5 text-slate-300">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F7A81B] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F7A81B] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F7A81B] transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
