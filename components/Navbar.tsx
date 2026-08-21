'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  Building2,
  CalendarDays,
  Mail,
  Users,
  CreditCard,
  FileText,
  ExternalLink,
  ChevronRight,
  Search,
  Globe,
  Sparkles,
  Info,
  Calendar,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { CLUBS_DATA } from '@/data/clubsData';
import { GOVERNORS_DATA } from '@/data/governorsData';

export default function Navbar() {
  const pathname = usePathname();

  // Estados de Menús Desplegables
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sobreRotaryOpen, setSobreRotaryOpen] = useState(false);
  const [distritoOpen, setDistritoOpen] = useState(false);
  const [cartasOpen, setCartasOpen] = useState(false);
  const [carteleraOpen, setCarteleraOpen] = useState(false);
  const [searchClubTerm, setSearchClubTerm] = useState('');

  // Refs para Click Outside
  const sobreRotaryRef = useRef<HTMLDivElement>(null);
  const distritoRef = useRef<HTMLDivElement>(null);
  const cartasRef = useRef<HTMLDivElement>(null);
  const carteleraRef = useRef<HTMLDivElement>(null);

  // Timers para tiempo de gracia al quitar el mouse (200ms)
  const sobreRotaryTimer = useRef<NodeJS.Timeout | null>(null);
  const distritoTimer = useRef<NodeJS.Timeout | null>(null);
  const cartasTimer = useRef<NodeJS.Timeout | null>(null);
  const carteleraTimer = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    timerRef: React.MutableRefObject<NodeJS.Timeout | null>
  ) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setter(true);
  };

  const handleMouseLeave = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    timerRef: React.MutableRefObject<NodeJS.Timeout | null>
  ) => {
    timerRef.current = setTimeout(() => {
      setter(false);
    }, 200);
  };

  // Cerrar dropdowns al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sobreRotaryRef.current && !sobreRotaryRef.current.contains(event.target as Node)) {
        setSobreRotaryOpen(false);
      }
      if (distritoRef.current && !distritoRef.current.contains(event.target as Node)) {
        setDistritoOpen(false);
      }
      if (cartasRef.current && !cartasRef.current.contains(event.target as Node)) {
        setCartasOpen(false);
      }
      if (carteleraRef.current && !carteleraRef.current.contains(event.target as Node)) {
        setCarteleraOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setMobileMenuOpen(false);
      setSobreRotaryOpen(false);
      setDistritoOpen(false);
      setCartasOpen(false);
      setCarteleraOpen(false);
    }
  }, [pathname]);

  const filteredClubs = CLUBS_DATA.filter((club) =>
    club.name.toLowerCase().includes(searchClubTerm.toLowerCase()) ||
    club.region.toLowerCase().includes(searchClubTerm.toLowerCase())
  );

  const isClubesActive = pathname.startsWith('/clubes');
  const isCartasActive = pathname.startsWith('/cartas-gd');
  const isEgdActive = pathname === '/listado-egd-4320';
  const isPagosActive = pathname === '/pagos-2026-2027';
  const isTransparenciaActive = pathname === '/transparencia-y-actas';

  return (
    <nav className="sticky top-0 z-50 w-full font-sans bg-[#00246C] text-white shadow-xl border-b border-[#001744]" id="main-rotary-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* LOGO OFICIAL */}
          <Link href="/" className="flex items-center py-2 flex-shrink-0 h-full">
            <div className="relative w-44 h-12 sm:w-60 sm:h-14 lg:w-72 lg:h-16">
              <Image
                src="/images/logo-rotary_2.png" 
                alt="Rotary Distrito 4320"
                fill
                priority
                sizes="(max-width: 768px) 176px, (max-width: 1024px) 240px, 288px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* MENÚ DE NAVEGACIÓN DESKTOP */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 text-xs xl:text-sm font-bold tracking-wide">
            
            <Link href="/#quienes-somos" className="px-2.5 py-2 rounded-md hover:bg-[#001d57] hover:text-[#F7A81B] transition-all">
              Quiénes Somos
            </Link>

            {/* 1. SOBRE ROTARY ▾ */}
            <div
              className="relative"
              ref={sobreRotaryRef}
              onMouseEnter={() => handleMouseEnter(setSobreRotaryOpen, sobreRotaryTimer)}
              onMouseLeave={() => handleMouseLeave(setSobreRotaryOpen, sobreRotaryTimer)}
            >
              <button
                type="button"
                onClick={() => setSobreRotaryOpen(!sobreRotaryOpen)}
                className="px-2.5 py-2 rounded-md hover:bg-[#001d57] hover:text-[#F7A81B] transition-all flex items-center gap-1 cursor-pointer"
              >
                <span>Sobre Rotary</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#F7A81B] transition-transform ${sobreRotaryOpen ? 'rotate-180' : ''}`} />
              </button>

              {sobreRotaryOpen && (
                <div className="absolute left-0 top-full pt-1.5 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="rounded-xl bg-white text-slate-800 shadow-xl border border-slate-200 overflow-hidden p-2 space-y-1 text-xs">
                    <Link href="/#objetivos-valores" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-[#00246C] font-semibold transition-colors">
                      <Info className="w-3.5 h-3.5 text-[#00246C]" />
                      <span>Objetivos y Valores</span>
                    </Link>
                    <Link href="/#prueba-cuadruple" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-[#00246C] font-semibold transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F7A81B]" />
                      <span>Prueba Cuádruple</span>
                    </Link>
                    <div className="border-t border-slate-100 my-1" />
                    <a href="https://www.rotary.org/es-mx" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-blue-50 text-blue-900 font-bold transition-colors">
                      <span className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-[#00246C]" /> Rotary.org (Oficial)</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                    <a href="https://my.rotary.org/es" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-blue-50 text-blue-900 font-bold transition-colors">
                      <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-[#00246C]" /> My Rotary (Portal)</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 2. EL DISTRITO ▾ */}
            <div
              className="relative"
              ref={distritoRef}
              onMouseEnter={() => handleMouseEnter(setDistritoOpen, distritoTimer)}
              onMouseLeave={() => handleMouseLeave(setDistritoOpen, distritoTimer)}
            >
              <button
                type="button"
                onClick={() => setDistritoOpen(!distritoOpen)}
                className={`px-2.5 py-2 rounded-md transition-all flex items-center gap-1 cursor-pointer ${isClubesActive || isEgdActive || isPagosActive || isTransparenciaActive ? 'bg-blue-900 text-[#F7A81B] font-bold' : 'hover:bg-[#001d57] hover:text-[#F7A81B]'}`}
              >
                <Building2 className="w-4 h-4 text-[#F7A81B]" />
                <span>EL DISTRITO</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${distritoOpen ? 'rotate-180' : ''}`} />
              </button>

              {distritoOpen && (
                <div className="absolute left-0 top-full pt-1.5 w-[540px] z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="rounded-xl bg-white text-slate-800 shadow-xl border border-slate-200 overflow-hidden">
                    <div className="p-3 bg-slate-50 border-b border-slate-200 grid grid-cols-3 gap-2 text-xs">
                      <Link href="/clubes" className="p-2 rounded-lg bg-white border border-slate-200 hover:border-[#00246C] hover:bg-blue-50 font-bold text-[#00246C] flex items-center gap-1.5 transition-colors">
                        <Users className="w-3.5 h-3.5 text-[#00246C]" /> Clubes Rotarios
                      </Link>
                      <Link href="/#interact" className="p-2 rounded-lg bg-white border border-slate-200 hover:border-[#00246C] hover:bg-blue-50 font-bold text-[#00246C] flex items-center gap-1.5 transition-colors">
                        <Sparkles className="w-3.5 h-3.5 text-[#F7A81B]" /> Interact
                      </Link>
                      <Link href="/#rotaract" className="p-2 rounded-lg bg-white border border-slate-200 hover:border-[#00246C] hover:bg-blue-50 font-bold text-[#00246C] flex items-center gap-1.5 transition-colors">
                        <Users className="w-3.5 h-3.5 text-blue-600" /> Rotaract
                      </Link>
                    </div>
                    <div className="p-3.5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">Directorio de Clubes D4320</span>
                        <span className="text-[11px] text-[#00246C] font-semibold">{CLUBS_DATA.length} Clubes</span>
                      </div>
                      <div className="relative mb-2.5">
                        <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Buscar club o ciudad..."
                          value={searchClubTerm}
                          onChange={(e) => setSearchClubTerm(e.target.value)}
                          className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-100 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00246C] text-slate-800"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      <div className="max-h-48 overflow-y-auto pr-1 grid grid-cols-2 gap-1 custom-scrollbar">
                        {filteredClubs.map((club) => (
                          <Link key={club.id} href={`/clubes/${club.slug}`} className="px-2.5 py-1.5 rounded text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-[#00246C] flex items-center justify-between transition-colors group">
                            <span className="truncate">{club.name}</span>
                            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#00246C] flex-shrink-0 transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="p-3 bg-slate-100 border-t border-slate-200 grid grid-cols-3 gap-2 text-xs font-semibold">
                      <Link href="/listado-egd-4320" className="text-[#00246C] hover:underline flex items-center gap-1"><Users className="w-3.5 h-3.5 text-[#F7A81B]" /> Listado EGD</Link>
                      <Link href="/pagos-2026-2027" className="text-emerald-700 hover:underline flex items-center gap-1 font-bold"><CreditCard className="w-3.5 h-3.5 text-emerald-600" /> Pagos 26-27</Link>
                      <Link href="/transparencia-y-actas" className="text-[#00246C] hover:underline flex items-center gap-1"><FileText className="w-3.5 h-3.5 text-[#00246C]" /> Transparencia</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. CARTAS GD ▾ */}
            <div
              className="relative"
              ref={cartasRef}
              onMouseEnter={() => handleMouseEnter(setCartasOpen, cartasTimer)}
              onMouseLeave={() => handleMouseLeave(setCartasOpen, cartasTimer)}
            >
              <button
                type="button"
                onClick={() => setCartasOpen(!cartasOpen)}
                className={`px-2.5 py-2 rounded-md transition-all flex items-center gap-1 cursor-pointer ${isCartasActive ? 'bg-blue-900 text-[#F7A81B] font-bold' : 'hover:bg-[#001d57] hover:text-[#F7A81B]'}`}
              >
                <Mail className="w-4 h-4 text-[#F7A81B]" />
                <span>Cartas GD</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${cartasOpen ? 'rotate-180' : ''}`} />
              </button>

              {cartasOpen && (
                <div className="absolute left-0 top-full pt-1.5 w-[520px] z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="rounded-xl bg-white text-slate-800 shadow-xl border border-slate-200 overflow-hidden">
                    <div className="p-3 bg-[#00246C] text-white flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-sm text-[#F7A81B]">Cartas Mensuales de Gobernadores</h4>
                        <p className="text-[11px] text-blue-200">Mensajes oficiales de liderazgo distrital</p>
                      </div>
                      <Link href="/cartas-gd" className="px-2.5 py-1 rounded-lg bg-[#F7A81B] text-[#00246C] font-black text-[11px] hover:bg-amber-400 transition-colors">Ver Todas</Link>
                    </div>
                    <div className="p-3 grid grid-cols-3 gap-2 bg-slate-50">
                      {GOVERNORS_DATA.slice(0, 9).map((gov) => (
                        <Link key={gov.id} href={`/cartas-gd/${gov.slug}`} className="p-2 rounded-lg bg-white border border-slate-200 hover:border-[#00246C] hover:bg-blue-50 transition-all text-center group">
                          <span className="block font-bold text-xs text-[#00246C] group-hover:text-blue-800 truncate">GD {gov.shortName}</span>
                          <span className="block text-[10px] text-slate-500 font-medium">{gov.period}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. CARTELERA ▾ */}
            <div
              className="relative"
              ref={carteleraRef}
              onMouseEnter={() => handleMouseEnter(setCarteleraOpen, carteleraTimer)}
              onMouseLeave={() => handleMouseLeave(setCarteleraOpen, carteleraTimer)}
            >
              <button
                type="button"
                onClick={() => setCarteleraOpen(!carteleraOpen)}
                className="px-2.5 py-2 rounded-md hover:bg-[#001d57] hover:text-[#F7A81B] transition-all flex items-center gap-1 cursor-pointer"
              >
                <CalendarDays className="w-4 h-4 text-[#F7A81B]" />
                <span>Cartelera</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${carteleraOpen ? 'rotate-180' : ''}`} />
              </button>

              {carteleraOpen && (
                <div className="absolute right-0 top-full pt-1.5 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="rounded-xl bg-white text-slate-800 shadow-xl border border-slate-200 overflow-hidden p-2 space-y-1 text-xs font-semibold">
                    <Link href="/#cartelera-distrital" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-[#00246C] transition-colors">
                      <Calendar className="w-3.5 h-3.5 text-[#00246C]" /> Agenda del Gobernador
                    </Link>
                    <Link href="/#cartelera-distrital" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 text-[#00246C] font-bold transition-colors">
                      <Sparkles className="w-3.5 h-3.5 text-[#F7A81B]" /> ACTIVIDADES DISTRITALES
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/#noticias-section" className="px-3.5 py-2 rounded-xl bg-[#F7A81B] hover:bg-amber-400 text-[#00246C] font-extrabold text-xs transition-all shadow-md active:scale-95 ml-1">
              Noticias y artículos de Clubes
            </Link>

          </div>

          {/* Menú Móvil Botón */}
          <div className="flex lg:hidden items-center">
            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md text-white hover:bg-blue-900 focus:outline-none">
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#F7A81B]" /> : <Menu className="w-6 h-6 text-[#F7A81B]" />}
            </button>
          </div>

        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#001d57] border-t border-blue-900 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 text-xs font-semibold max-h-[80vh] overflow-y-auto">
          <Link href="/#quienes-somos" className="block px-3 py-2 rounded-lg text-white hover:bg-blue-900">Quiénes Somos</Link>

          <div className="rounded-lg bg-blue-950/60 p-2.5 space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F7A81B] block px-1 pb-1 border-b border-blue-900">Sobre Rotary</span>
            <Link href="/#objetivos-valores" className="block px-2 py-1.5 text-white hover:bg-blue-900 rounded">• Objetivos y valores</Link>
            <Link href="/#prueba-cuadruple" className="block px-2 py-1.5 text-white hover:bg-blue-900 rounded">• Prueba cuádruple</Link>
            <a href="https://www.rotary.org/es-mx" target="_blank" rel="noopener noreferrer" className="block px-2 py-1.5 text-blue-200 hover:text-[#F7A81B] rounded">• Rotary.org (Oficial) ↗</a>
            <a href="https://my.rotary.org/es" target="_blank" rel="noopener noreferrer" className="block px-2 py-1.5 text-blue-200 hover:text-[#F7A81B] rounded">• My Rotary (Portal) ↗</a>
          </div>

          <div className="rounded-lg bg-blue-950/60 p-2.5 space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F7A81B] block px-1 pb-1 border-b border-blue-900">El Distrito</span>
            <Link href="/clubes" className="block px-2 py-1.5 text-white hover:bg-blue-900 rounded">• Clubes Rotarios ({CLUBS_DATA.length} sedes)</Link>
            <Link href="/#interact" className="block px-2 py-1.5 text-white hover:bg-blue-900 rounded">• Programa Interact</Link>
            <Link href="/#rotaract" className="block px-2 py-1.5 text-white hover:bg-blue-900 rounded">• Programa Rotaract</Link>
            <Link href="/listado-egd-4320" className="block px-2 py-1.5 text-white hover:bg-blue-900 rounded">• Listado EGD 4320</Link>
            <Link href="/pagos-2026-2027" className="block px-2 py-1.5 text-emerald-400 font-bold rounded">• Pagos 2026-2027</Link>
            <Link href="/transparencia-y-actas" className="block px-2 py-1.5 text-white hover:bg-blue-900 rounded">• Transparencia y Actas</Link>
          </div>

          <div className="rounded-lg bg-blue-950/60 p-2.5 space-y-1">
            <div className="flex items-center justify-between px-1 pb-1 border-b border-blue-900">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F7A81B]">Cartas GD</span>
              <Link href="/cartas-gd" className="text-[10px] text-amber-300 underline">Ver todas</Link>
            </div>
            <div className="grid grid-cols-2 gap-1 pt-1">
              {GOVERNORS_DATA.slice(0, 9).map((gov) => (
                <Link key={gov.id} href={`/cartas-gd/${gov.slug}`} className="px-2 py-1 text-[11px] text-slate-200 hover:text-[#F7A81B] rounded truncate">GD {gov.shortName}</Link>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-blue-950/60 p-2.5 space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F7A81B] block px-1 pb-1 border-b border-blue-900">Cartelera</span>
            <Link href="/#cartelera-distrital" className="block px-2 py-1.5 text-white hover:bg-blue-900 rounded">• Agenda del Gobernador</Link>
            <Link href="/#cartelera-distrital" className="block px-2 py-1.5 text-[#F7A81B] font-bold rounded">• ACTIVIDADES DISTRITALES</Link>
          </div>

          <Link href="/#noticias-section" className="block px-3 py-2.5 rounded-lg bg-[#F7A81B] text-[#00246C] font-black text-center shadow">
            Noticias y artículos de Clubes
          </Link>
        </div>
      )}
    </nav>
  );
}
