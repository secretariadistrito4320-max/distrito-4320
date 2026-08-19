'use client';

import React from 'react';
import { Mail, Facebook, Instagram, Youtube, Globe, ShieldCheck, Sparkles } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="w-full bg-[#001744] text-slate-100 border-b border-blue-900/50 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* IZQUIERDA: Lema y Texto Oficial */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#F7A81B] text-[#00246C] font-black text-[10px] uppercase">
            <Sparkles className="w-3 h-3 fill-current" />
            LEMA 26-27
          </div>
          
          <div className="flex items-center gap-1.5 text-blue-200 text-[11px] sm:text-xs">
            <Mail className="w-3.5 h-3.5 text-[#F7A81B] hidden sm:block flex-shrink-0" />
            <span>
              Envía las actividades de tu club a{' '}
              <a href="mailto:secretaria@rotary4320.cl" className="text-[#F7A81B] font-bold hover:underline">
                secretaria@rotary4320.cl
              </a>{' '}
              y las compartiremos con el mundo.
            </span>
          </div>
        </div>

        {/* DERECHA: Links Externos y Redes Sociales */}
        <div className="flex items-center gap-4 text-blue-200">
          <a
            href="https://www.rotary.org/es-mx"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex hover:text-[#F7A81B] transition-colors items-center gap-1 font-medium text-[11px]"
          >
            <Globe className="w-3 h-3 text-[#F7A81B]" />
            <span>Rotary.org</span>
          </a>
          
          <a
            href="https://my.rotary.org/es"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex hover:text-[#F7A81B] transition-colors items-center gap-1 font-medium text-[11px]"
          >
            <ShieldCheck className="w-3 h-3 text-[#F7A81B]" />
            <span>My Rotary</span>
          </a>

          <span className="hidden sm:block text-blue-800">|</span>

          {/* Redes Sociales */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/rotary4320"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F7A81B] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/rotary4320"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F7A81B] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@Rotary4320"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F7A81B] transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}
