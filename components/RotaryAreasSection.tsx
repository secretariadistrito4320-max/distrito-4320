import React from 'react';
import {
  ShieldCheck,
  Droplets,
  HeartPulse,
  BookOpen,
  TrendingUp,
  TreePine,
  Syringe,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Users,
  Award,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export default function RotaryAreasSection() {
  const areas = [
    {
      title: 'Paz y Prevención de Conflictos',
      icon: ShieldCheck,
      color: 'text-sky-600 bg-sky-50 border-sky-200',
      description:
        'Fomentamos el diálogo intercultural, la mediación vecinal y becas pro paz para líderes jóvenes en toda nuestra geografía.',
    },
    {
      title: 'Agua, Saneamiento e Higiene',
      icon: Droplets,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      description:
        'Instalamos plantas desaladoras solares, atrapanieblas y sistemas de agua potable en caletas y caseríos rurales afectados por la sequía.',
    },
    {
      title: 'Salud Materno-Infantil',
      icon: HeartPulse,
      color: 'text-rose-600 bg-rose-50 border-rose-200',
      description:
        'Equipamos maternidades públicas, donamos incubadoras y realizamos operativos reconstructivos pediátricos de alta complejidad.',
    },
    {
      title: 'Educación Básica y Alfabetización',
      icon: BookOpen,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      description:
        'Entregamos lentes ópticos escolares, construimos bibliotecas rodantes y otorgamos becas de educación superior a estudiantes vulnerables.',
    },
    {
      title: 'Desarrollo Económico de la Comunidad',
      icon: TrendingUp,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      description:
        'Capacitamos a mujeres jefas de hogar en microemprendimiento y otorgamos capital semilla para impulsar economías locales.',
    },
    {
      title: 'Protección del Medio Ambiente',
      icon: TreePine,
      color: 'text-teal-600 bg-teal-50 border-teal-200',
      description:
        'Reforestamos cuencas desérticas con especies nativas, limpiamos el borde costero y promovemos el uso de energías 100% renovables.',
    },
    {
      title: 'Erradicación de la Polio (PolioPlus)',
      icon: Syringe,
      color: 'text-red-600 bg-red-50 border-red-200',
      description:
        'Nuestra insignia global. Recaudamos fondos y mantenemos la vigilancia epidemiológica hasta que el mundo esté libre de poliomielitis.',
    },
  ];

  return (
    <section className="w-full py-14 sm:py-20 bg-white border-t border-slate-200" id="quienes-somos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. MANIFIESTO DISTRITAL & CIFRAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16" id="objetivos-valores">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F7A81B]" />
              <span>Manifiesto Distrital · Periodo 2026-2027</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00246C] tracking-tight leading-tight">
              Unidos Para Hacer El Bien y Generar un Impacto Duradero
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              El <strong className="text-[#00246C]">Distrito 4320</strong> se extiende por más de 2.000 kilómetros a lo largo de la costa, valles y desiertos de Chile. Desde la frontera norte en Arica hasta las bahías históricas de Valparaíso y la lejana isla de Rapa Nui, nuestras socias y socios rotarios transforman su pasión en proyectos sostenibles.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  <strong>Servicio Por Encima de Sí:</strong> Ponemos nuestro talento profesional al servicio desinteresado de quienes más lo necesitan.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  <strong>Integridad y Transparencia:</strong> Cada peso de donación y cuota distrital se administra con rigurosidad y auditoría permanente.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  <strong>Acción Global con Raíz Local:</strong> Conectados a la red mundial de más de 1.4 millones de rotarios en 200 países.
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/clubes"
                className="px-5 py-2.5 rounded-xl bg-[#00246C] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Conoce Nuestros Clubes</span>
                <ArrowRight className="w-4 h-4 text-[#F7A81B]" />
              </Link>
              <Link
                href="/pagos-2026-2027"
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-colors"
              >
                Portal de Transparencia
              </Link>
            </div>
          </div>

          {/* Distrito en cifras */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#00246C] to-[#001744] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F7A81B]/10 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-lg font-bold text-[#F7A81B] mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#F7A81B]" />
              <span>Distrito 4320 en Cifras Oficiales</span>
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#F7A81B] block">
                  70+
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                  Clubes Rotarios y Juveniles
                </span>
                <span className="text-[11px] text-blue-200 mt-0.5 block">
                  Rotary, Rotaract e Interact
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#F7A81B] block">
                  1.400+
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                  Personas de Acción
                </span>
                <span className="text-[11px] text-blue-200 mt-0.5 block">
                  Socias y socios comprometidos
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#F7A81B] block">
                  6 Regiones
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                  Cobertura Geográfica
                </span>
                <span className="text-[11px] text-blue-200 mt-0.5 block">
                  Arica a Valparaíso y Rapa Nui
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#F7A81B] block">
                  100+ Años
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                  Historia y Tradición
                </span>
                <span className="text-[11px] text-blue-200 mt-0.5 block">
                  RC Valparaíso fundado en 1923
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 text-center text-xs text-blue-200">
              Corporación Rotary International Distrito 4320 · Chile
            </div>
          </div>

        </div>

        {/* 2. LAS 7 ÁREAS DE INTERÉS DE ROTARY */}
        <div className="mt-16 pt-10 border-t border-slate-100" id="nuestros-proyectos">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#00246C] font-bold text-xs uppercase tracking-widest">
              Compromiso Global
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Las 7 Áreas de Interés de Rotary International
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Nuestros clubes concentran sus esfuerzos y subvenciones en causas de alto impacto que transforman vidas en todo el mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {areas.slice(0, 4).map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#00246C]/40 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${area.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 mb-1.5">
                      {area.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
            {areas.slice(4).map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#00246C]/40 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${area.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 mb-1.5">
                      {area.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. PROGRAMAS JUVENILES (INTERACT Y ROTARACT) */}
        <div className="mt-16 pt-10 border-t border-slate-200" id="interact">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="rotaract">
            
            {/* Tarjeta Interact */}
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-100 block">
                    Jóvenes de 12 a 18 años
                  </span>
                  <h4 className="text-xl font-black">Programa Interact</h4>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-amber-50 leading-relaxed mb-4">
                Formamos a la próxima generación de líderes. Los clubes Interact organizan proyectos de servicio comunitario, desarrollan habilidades de oratoria y promueven la amistad internacional.
              </p>
              <Link
                href="/clubes"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-white text-amber-900 px-4 py-2 rounded-xl hover:bg-amber-50 transition-colors shadow-sm"
              >
                <span>Ver clubes Interact del Distrito</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Tarjeta Rotaract */}
            <div className="bg-gradient-to-br from-[#00246C] to-blue-900 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-200 block">
                    Jóvenes y Adultos de 18+ años
                  </span>
                  <h4 className="text-xl font-black">Programa Rotaract</h4>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed mb-4">
                Líderes jóvenes impulsando innovación social. Rotaract permite a universitarios y profesionales jóvenes abordar desafíos comunitarios, liderar proyectos globales y tejer redes de contacto.
              </p>
              <Link
                href="/clubes"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#F7A81B] text-[#00246C] px-4 py-2 rounded-xl hover:bg-amber-400 transition-colors shadow-sm"
              >
                <span>Ver clubes Rotaract del Distrito</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
