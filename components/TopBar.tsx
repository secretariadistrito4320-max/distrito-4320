'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Send, Facebook, Instagram, Youtube, Sparkles, ExternalLink } from 'lucide-react';
import RotaryWheelLogo from './RotaryWheelLogo';

export default function TopBar() {
  return (
    <header className="w-full bg-slate-900 text-slate-100 border-b border-slate-800 text-xs selection:bg-[#F7A81B] selection:text-[#00246C]">
      {/* Upper Announcement & Contact Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        {/* Left: Official District Logo + Motto Isotype Badge */}
        <div className="flex items-center gap-3.5 flex-wrap justify-center md:justify-start">
          <RotaryWheelLogo variant="light" showSubtitle={true} />
          
          <div className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-950/80 border border-[#F7A81B]/40 text-[#F7A81B] font-medium text-[11px]">
            <Sparkles className="w-3 h-3 text-[#F7A81B] animate-pulse" />
            <span>Genera un Impacto Duradero · 2026-2027</span>
          </div>
        </div>

        {/* Center: Contact text for club submissions */}
        <div className="flex items-center text-center md:text-left gap-2 text-slate-300 font-normal leading-relaxed text-[11px] sm:text-xs">
          <Mail className="w-3.5 h-3.5 text-[#F7A81B] flex-shrink-0 hidden sm:inline" />
          <span>
            Envía las actividades de tu club a{' '}
            <a
              href="mailto:secretaria@rotary4320.cl?subject=Actividad%20Club%20Rotario%20-%20Portal%20D4320"
              className="text-[#F7A81B] hover:text-amber-300 font-semibold underline underline-offset-2 transition-colors"
            >
              secretaria@rotary4320.cl
            </a>{' '}
            y las compartiremos con el mundo.
          </span>
        </div>

        {/* Right: Social Media Links & Submit Action */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-slate-400">
            <a
              href="https://facebook.com/rotarydistrito4320"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:bg-slate-800 hover:text-white transition-colors"
              title="Facebook Rotary D4320"
              aria-label="Facebook Rotary D4320"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com/rotary4320"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:bg-slate-800 hover:text-white transition-colors"
              title="Instagram Rotary D4320"
              aria-label="Instagram Rotary D4320"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com/@rotarydistrito4320"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:bg-slate-800 hover:text-white transition-colors"
              title="YouTube Rotary D4320"
              aria-label="YouTube Rotary D4320"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>

          <span className="hidden sm:inline text-slate-700">|</span>

          <a
            href="mailto:secretaria@rotary4320.cl?subject=Publicar%20Noticia%20en%20Portal%20D4320"
            className="inline-flex items-center gap-1.5 bg-[#F7A81B] hover:bg-amber-400 text-[#00246C] font-bold px-3 py-1 rounded-md transition-all shadow-sm active:scale-95 text-[11px]"
            id="topbar-btn-enviar-actividad"
          >
            <Send className="w-3 h-3" />
            <span className="whitespace-nowrap">Enviar Noticia</span>
          </a>
        </div>

      </div>
    </header>
  );
}
