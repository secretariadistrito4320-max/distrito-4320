'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  Building2,
  CalendarDays,
  FileCheck,
  Mail,
  Users,
  CreditCard,
  FileText,
  Home,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Search
} from 'lucide-react';
import { CLUBS_DATA } from '@/data/clubsData';
import { GOVERNORS_DATA } from '@/data/governorsData';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clubesDropdownOpen, setClubesDropdownOpen] = useState(false);
  const [cartasDropdownOpen, setCartasDropdownOpen] = useState(false);
  const [searchClubTerm, setSearchClubTerm] = useState('');

  const clubesRef = useRef<HTMLDivElement>(null);
  const cartasRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (clubesRef.current && !clubesRef.current.contains(event.target as Node)) {
        setClubesDropdownOpen(false);
      }
      if (cartasRef.current && !cartasRef.current.contains(event.target as Node)) {
        setCartasDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const prevPathnameRef = useRef(pathname);

  // Close menus when pathname changes
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setMobileMenuOpen(false);
      setClubesDropdownOpen(false);
      setCartasDropdownOpen(false);
    }
  }, [pathname]);

  const filteredClubs = CLUBS_DATA.filter((club) =>
    club.name.toLowerCase().includes(searchClubTerm.toLowerCase()) ||
    club.region.toLowerCase().includes(searchClubTerm.toLowerCase())
  );

  const isInicioActive = pathname === '/';
  const isClubesActive = pathname.startsWith('/clubes');
  const isCartasActive = pathname.startsWith('/cartas-gd');
  const isEgdActive = pathname === '/listado-egd-4320';
  const isPagosActive = pathname === '/pagos-2026-2027';
  const isTransparenciaActive = pathname === '/transparencia-y-actas';

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-[#00246C] text-white shadow-md border-b border-[#001b52]"
      id="main-rotary-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Mobile brand text (if topbar scrolled away) */}
          <div className="flex items-center lg:hidden">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-sm text-white tracking-wide"
            >
              <div className="w-7 h-7 rounded-full bg-[#F7A81B] text-[#00246C] flex items-center justify-center font-black text-xs">
                R
              </div>
              <span className="font-extrabold tracking-wide">DISTRITO 4320</span>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-semibold tracking-wide">
            
            {/* [Inicio] */}
            <Link
              href="/"
              id="nav-link-inicio"
              className={`px-3 py-2 rounded-md transition-all flex items-center gap-1.5 ${
                isInicioActive
                  ? 'bg-blue-900 text-[#F7A81B] font-bold shadow-inner'
                  : 'text-slate-100 hover:bg-[#001d57] hover:text-[#F7A81B]'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Inicio</span>
            </Link>

            {/* [CLUBES ▾] Dropdown */}
            <div
              className="relative"
              ref={clubesRef}
              onMouseEnter={() => setClubesDropdownOpen(true)}
              onMouseLeave={() => setClubesDropdownOpen(false)}
            >
              <button
                type="button"
                id="nav-dropdown-clubes"
                onClick={() => setClubesDropdownOpen(!clubesDropdownOpen)}
                className={`px-3 py-2 rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                  isClubesActive
                    ? 'bg-blue-900 text-[#F7A81B] font-bold shadow-inner'
                    : 'text-slate-100 hover:bg-[#001d57] hover:text-[#F7A81B]'
                }`}
                aria-expanded={clubesDropdownOpen}
              >
                <Building2 className="w-4 h-4 text-[#F7A81B]" />
                <span>CLUBES</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    clubesDropdownOpen ? 'rotate-180 text-[#F7A81B]' : ''
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu for Clubs */}
              {clubesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-[540px] rounded-xl bg-white text-slate-800 shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  
                  {/* Top quick links */}
                  <div className="p-3 bg-slate-50 border-b border-slate-200 grid grid-cols-3 gap-2 text-xs">
                    <Link
                      href="/clubes"
                      className="p-2 rounded-lg bg-white border border-slate-200 hover:border-[#00246C] hover:bg-blue-50/60 font-bold text-[#00246C] flex items-center gap-1.5 transition-colors"
                    >
                      <Users className="w-3.5 h-3.5 text-[#00246C]" />
                      <span>Listado de Clubes</span>
                    </Link>
                    <Link
                      href="/clubes/aniversarios"
                      className="p-2 rounded-lg bg-white border border-slate-200 hover:border-[#00246C] hover:bg-blue-50/60 font-bold text-[#00246C] flex items-center gap-1.5 transition-colors"
                    >
                      <CalendarDays className="w-3.5 h-3.5 text-[#F7A81B]" />
                      <span>Aniversarios</span>
                    </Link>
                    <Link
                      href="/clubes/cartas-constitutivas"
                      className="p-2 rounded-lg bg-white border border-slate-200 hover:border-[#00246C] hover:bg-blue-50/60 font-bold text-[#00246C] flex items-center gap-1.5 transition-colors"
                    >
                      <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Cartas Constitutivas</span>
                    </Link>
                  </div>

                  {/* Club Quick Filter & Direct Access List */}
                  <div className="p-3.5">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">
                        Acceso Directo a Clubes D4320
                      </span>
                      <span className="text-[11px] text-[#00246C] font-semibold">
                        {CLUBS_DATA.length} Clubes en el Distrito
                      </span>
                    </div>

                    <div className="relative mb-3">
                      <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Buscar club o ciudad..."
                        value={searchClubTerm}
                        onChange={(e) => setSearchClubTerm(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-100 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00246C] text-slate-800 placeholder-slate-400"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>

                    <div className="max-h-56 overflow-y-auto pr-1 grid grid-cols-2 gap-1.5 custom-scrollbar">
                      {filteredClubs.map((club) => (
                        <Link
                          key={club.id}
                          href={`/clubes/${club.slug}`}
                          className="px-2.5 py-1.5 rounded text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-[#00246C] flex items-center justify-between transition-colors group"
                        >
                          <span className="truncate">{club.name}</span>
                          <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#00246C] flex-shrink-0 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Footer callout */}
                  <div className="p-2.5 bg-blue-900 text-white flex items-center justify-between text-xs font-medium">
                    <span>¿No encuentras tu club o deseas actualizar los datos?</span>
                    <Link
                      href="/clubes"
                      className="text-[#F7A81B] hover:underline font-bold text-[11px] whitespace-nowrap ml-2"
                    >
                      Ver directorio completo →
                    </Link>
                  </div>

                </div>
              )}
            </div>

            {/* [CARTAS GD ▾] Dropdown */}
            <div
              className="relative"
              ref={cartasRef}
              onMouseEnter={() => setCartasDropdownOpen(true)}
              onMouseLeave={() => setCartasDropdownOpen(false)}
            >
              <button
                type="button"
                id="nav-dropdown-cartas-gd"
                onClick={() => setCartasDropdownOpen(!cartasDropdownOpen)}
                className={`px-3 py-2 rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                  isCartasActive
                    ? 'bg-blue-900 text-[#F7A81B] font-bold shadow-inner'
                    : 'text-slate-100 hover:bg-[#001d57] hover:text-[#F7A81B]'
                }`}
                aria-expanded={cartasDropdownOpen}
              >
                <Mail className="w-4 h-4 text-[#F7A81B]" />
                <span>CARTAS GD</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    cartasDropdownOpen ? 'rotate-180 text-[#F7A81B]' : ''
                  }`}
                />
              </button>

              {/* Mega Dropdown for Governors' Letters */}
              {cartasDropdownOpen && (
                <div className="absolute left-0 mt-1 w-[460px] rounded-xl bg-white text-slate-800 shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="p-3 bg-[#00246C] text-white flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-[#F7A81B]">Cartas Mensuales de Gobernadores</h4>
                      <p className="text-[11px] text-blue-200">Mensajes de liderazgo distrital y orientaciones institucionales</p>
                    </div>
                    <Link
                      href="/cartas-gd"
                      className="px-2 py-1 rounded bg-[#F7A81B] text-[#00246C] font-bold text-[11px] hover:bg-amber-400 transition-colors"
                    >
                      Ver Todas
                    </Link>
                  </div>

                  {/* Grid of the 12 Named Governors */}
                  <div className="p-3 grid grid-cols-3 gap-2 bg-slate-50">
                    {GOVERNORS_DATA.map((gov) => (
                      <Link
                        key={gov.id}
                        href={`/cartas-gd/${gov.slug}`}
                        className="p-2 rounded-lg bg-white border border-slate-200 hover:border-[#00246C] hover:bg-blue-50/70 transition-all text-center group"
                      >
                        <span className="block font-bold text-xs text-[#00246C] group-hover:text-blue-800">
                          {gov.shortName}
                        </span>
                        <span className="block text-[10px] text-slate-500 font-medium">
                          {gov.period}
                        </span>
                        <span className="block text-[9px] text-[#F7A81B] font-bold mt-0.5 truncate">
                          {gov.letters.length} {gov.letters.length === 1 ? 'carta' : 'cartas'}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="p-2.5 bg-slate-100 border-t border-slate-200 text-center">
                    <Link
                      href="/cartas-gd"
                      className="text-xs font-bold text-[#00246C] hover:underline"
                    >
                      Explorar el archivo histórico de Cartas Mensuales D4320 →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* [LISTADO EGD 4320] */}
            <Link
              href="/listado-egd-4320"
              id="nav-link-egd"
              className={`px-3 py-2 rounded-md transition-all flex items-center gap-1.5 ${
                isEgdActive
                  ? 'bg-blue-900 text-[#F7A81B] font-bold shadow-inner'
                  : 'text-slate-100 hover:bg-[#001d57] hover:text-[#F7A81B]'
              }`}
            >
              <Users className="w-4 h-4 text-[#F7A81B]" />
              <span>LISTADO EGD 4320</span>
            </Link>

            {/* [PAGOS 2026-2027] */}
            <Link
              href="/pagos-2026-2027"
              id="nav-link-pagos"
              className={`px-3 py-2 rounded-md transition-all flex items-center gap-1.5 relative ${
                isPagosActive
                  ? 'bg-blue-900 text-[#F7A81B] font-bold shadow-inner'
                  : 'text-slate-100 hover:bg-[#001d57] hover:text-[#F7A81B]'
              }`}
            >
              <CreditCard className="w-4 h-4 text-[#F7A81B]" />
              <span>PAGOS 2026-2027</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping absolute top-2 right-1" />
            </Link>

            {/* [TRANSPARENCIA Y ACTAS] */}
            <Link
              href="/transparencia-y-actas"
              id="nav-link-transparencia"
              className={`px-3 py-2 rounded-md transition-all flex items-center gap-1.5 ${
                isTransparenciaActive
                  ? 'bg-blue-900 text-[#F7A81B] font-bold shadow-inner'
                  : 'text-slate-100 hover:bg-[#001d57] hover:text-[#F7A81B]'
              }`}
            >
              <FileText className="w-4 h-4 text-[#F7A81B]" />
              <span>TRANSPARENCIA Y ACTAS</span>
            </Link>

          </div>

          {/* Right side CTA: Portal My Rotary */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://my.rotary.org/es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#001d57] hover:bg-[#001642] border border-blue-400/30 text-xs font-semibold text-white transition-all shadow-sm"
              title="Acceso oficial a My Rotary International"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#F7A81B]" />
              <span>My Rotary</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-[#F7A81B]"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#F7A81B]" />
              ) : (
                <Menu className="w-6 h-6 text-[#F7A81B]" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#001d57] border-t border-blue-900 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          
          <Link
            href="/"
            className={`block px-3 py-2.5 rounded-lg text-sm font-bold ${
              isInicioActive
                ? 'bg-blue-950 text-[#F7A81B]'
                : 'text-white hover:bg-blue-900'
            }`}
          >
            Inicio
          </Link>

          {/* Mobile Clubes Submenu */}
          <div className="rounded-lg bg-blue-950/60 p-2.5 space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F7A81B] px-1 pb-1 border-b border-blue-900 flex items-center justify-between">
              <span>Clubes D4320</span>
              <span className="text-[10px] text-blue-300 font-normal">{CLUBS_DATA.length} sedes</span>
            </div>
            <Link
              href="/clubes"
              className="block px-2 py-1.5 text-xs text-white hover:bg-blue-900 rounded font-medium"
            >
              • Listado de Clubes Completo
            </Link>
            <Link
              href="/clubes/aniversarios"
              className="block px-2 py-1.5 text-xs text-white hover:bg-blue-900 rounded font-medium"
            >
              • Calendario de Aniversarios
            </Link>
            <Link
              href="/clubes/cartas-constitutivas"
              className="block px-2 py-1.5 text-xs text-white hover:bg-blue-900 rounded font-medium"
            >
              • Cartas Constitutivas de Clubes
            </Link>
          </div>

          {/* Mobile Cartas GD Submenu */}
          <div className="rounded-lg bg-blue-950/60 p-2.5 space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F7A81B] px-1 pb-1 border-b border-blue-900 flex items-center justify-between">
              <span>Cartas de Gobernadores</span>
              <Link href="/cartas-gd" className="text-[10px] text-amber-300 underline">
                Ver todas
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-1 pt-1">
              {GOVERNORS_DATA.slice(0, 8).map((gov) => (
                <Link
                  key={gov.id}
                  href={`/cartas-gd/${gov.slug}`}
                  className="px-2 py-1 text-xs text-slate-200 hover:text-[#F7A81B] hover:bg-blue-900 rounded truncate"
                >
                  GD {gov.shortName} ({gov.period})
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/listado-egd-4320"
            className={`block px-3 py-2.5 rounded-lg text-sm font-bold ${
              isEgdActive
                ? 'bg-blue-950 text-[#F7A81B]'
                : 'text-white hover:bg-blue-900'
            }`}
          >
            Listado EGD 4320 (Pasados Gobernadores)
          </Link>

          <Link
            href="/pagos-2026-2027"
            className={`block px-3 py-2.5 rounded-lg text-sm font-bold flex items-center justify-between ${
              isPagosActive
                ? 'bg-blue-950 text-[#F7A81B]'
                : 'text-white hover:bg-blue-900'
            }`}
          >
            <span>Pagos 2026-2027 (Transparencia)</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold">
              Vigente
            </span>
          </Link>

          <Link
            href="/transparencia-y-actas"
            className={`block px-3 py-2.5 rounded-lg text-sm font-bold ${
              isTransparenciaActive
                ? 'bg-blue-950 text-[#F7A81B]'
                : 'text-white hover:bg-blue-900'
            }`}
          >
            Transparencia y Actas Distritales
          </Link>

          <div className="pt-2 border-t border-blue-900">
            <a
              href="https://my.rotary.org/es"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#F7A81B] text-[#00246C] font-bold text-xs shadow"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Acceder a My Rotary International</span>
            </a>
          </div>

        </div>
      )}
    </nav>
  );
}
