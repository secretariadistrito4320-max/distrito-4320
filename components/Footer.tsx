import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  MapPin,
  Heart,
  Globe,
  ExternalLink,
  Sparkles,
  ChevronRight,
  UserCheck
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#001744] text-slate-300 border-t-4 border-[#F7A81B] text-xs">
      
      {/* 1. PRUEBA CUÁDRUPLE (CÓDIGO DE ÉTICA ROTARIA) */}
      <div className="bg-[#00246C] text-white py-6 border-b border-blue-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-4">
            <span className="text-[#F7A81B] uppercase tracking-widest text-[11px] font-bold">
              Código de Ética Rotaria
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
              La Prueba Cuádruple de lo que se piensa, se dice o se hace
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-center">
            <div className="bg-[#001d57] p-3 rounded-lg border border-blue-800/60 shadow-sm">
              <span className="inline-block w-6 h-6 rounded-full bg-[#F7A81B] text-[#00246C] font-black text-xs leading-6 mb-1.5">
                1
              </span>
              <p className="font-semibold text-white text-xs">¿Es la VERDAD?</p>
            </div>
            <div className="bg-[#001d57] p-3 rounded-lg border border-blue-800/60 shadow-sm">
              <span className="inline-block w-6 h-6 rounded-full bg-[#F7A81B] text-[#00246C] font-black text-xs leading-6 mb-1.5">
                2
              </span>
              <p className="font-semibold text-white text-xs">¿Es EQUITATIVO para todos los interesados?</p>
            </div>
            <div className="bg-[#001d57] p-3 rounded-lg border border-blue-800/60 shadow-sm">
              <span className="inline-block w-6 h-6 rounded-full bg-[#F7A81B] text-[#00246C] font-black text-xs leading-6 mb-1.5">
                3
              </span>
              <p className="font-semibold text-white text-xs">¿Creará BUENA VOLUNTAD y MEJORES AMISTADES?</p>
            </div>
            <div className="bg-[#001d57] p-3 rounded-lg border border-blue-800/60 shadow-sm">
              <span className="inline-block w-6 h-6 rounded-full bg-[#F7A81B] text-[#00246C] font-black text-xs leading-6 mb-1.5">
                4
              </span>
              <p className="font-semibold text-white text-xs">¿Será BENEFICIOSO para todos los interesados?</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Identity & Official Logo Agrandado */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-72 h-20 sm:w-80 sm:h-24">
                <Image
                  src="/images/logo-rotary_2.png"
                  alt="Rotary Distrito 4320"
                  fill
                  priority
                  sizes="320px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              El <strong className="text-white">Distrito 4320 de Rotary International</strong> reúne a líderes y personas de acción de las regiones de Arica y Parinacota, Tarapacá, Antofagasta, Atacama, Coquimbo, Valparaíso y el territorio especial de Rapa Nui, unidos para servir con integridad y transformar positivamente nuestras comunidades.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F7A81B]">
              <Sparkles className="w-4 h-4 text-[#F7A81B]" />
              <span>Dar de Sí Antes de Pensar en Sí · Service Above Self</span>
            </div>
          </div>

          {/* Column 2: Secciones del Portal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-blue-900/80 pb-2">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#F7A81B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#F7A81B]" /> Inicio / Portada
                </Link>
              </li>
              <li>
                <Link href="/clubes" className="hover:text-[#F7A81B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#F7A81B]" /> Directorio de Clubes
                </Link>
              </li>
              <li>
                <Link href="/cartas-gd" className="hover:text-[#F7A81B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#F7A81B]" /> Cartas de Gobernadores
                </Link>
              </li>
              <li>
                <Link href="/listado-egd-4320" className="hover:text-[#F7A81B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#F7A81B]" /> Listado EGD 4320
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Transparencia y Finanzas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-blue-900/80 pb-2">
              Transparencia y Gestión
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/pagos-2026-2027" className="hover:text-[#F7A81B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#F7A81B]" /> Pagos y Cuotas 2026-2027
                </Link>
              </li>
              <li>
                <Link href="/transparencia-y-actas" className="hover:text-[#F7A81B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#F7A81B]" /> Actas de Asambleas
                </Link>
              </li>
              <li>
                <Link href="/transparencia-y-actas" className="hover:text-[#F7A81B] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#F7A81B]" /> Balances y Auditorías
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto Oficial */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-blue-900/80 pb-2">
              Contacto Distrital
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F7A81B] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-slate-400 text-[10px]">Secretaría Distrital:</span>
                  <a
                    href="mailto:secretaria@rotary4320.cl"
                    className="text-[#F7A81B] hover:underline font-semibold"
                  >
                    secretaria@rotary4320.cl
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <UserCheck className="w-3.5 h-3.5 text-[#F7A81B] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-slate-400 text-[10px]">Tesorería (Lilian Correa F.):</span>
                  <a
                    href="mailto:tesoreria@rotary4320.cl"
                    className="text-[#F7A81B] hover:underline font-semibold"
                  >
                    tesoreria@rotary4320.cl
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F7A81B] mt-0.5 flex-shrink-0" />
                <span>Chile (Arica a Valparaíso / Rapa Nui)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Links & Créditos PáginasPro */}
        <div className="mt-10 pt-6 border-t border-blue-900/60 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          
          <div>
            © {new Date().getFullYear()} Rotary International Distrito 4320 - Chile. Todos los derechos reservados.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.rotary.org/es-mx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Globe className="w-3 h-3 text-[#F7A81B]" />
              <span>Rotary International</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <a
              href="https://www.endpolio.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Heart className="w-3 h-3 text-red-400" />
              <span>End Polio Now</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span className="hidden sm:inline text-slate-700">•</span>
            <a
              href="https://paginaspro.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-slate-400 inline-flex items-center gap-1 group"
            >
              <span>Desarrollado por</span>
              <span className="font-bold text-slate-300 group-hover:text-[#F7A81B] transition-colors">PáginasPro.cl</span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
