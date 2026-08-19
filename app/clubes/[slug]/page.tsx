import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  Clock,
  MapPin,
  Mail,
  Phone,
  Award,
  Sparkles,
  ChevronRight,
  Send,
  ArrowLeft,
  CalendarDays,
} from 'lucide-react';
import { CLUBS_DATA } from '@/data/clubsData';
import rawMockData from '@/data/mockData.json';
import NewsSection from '@/components/NewsSection';
import { NewsItem } from '@/components/NewsCard';

const mockNews: NewsItem[] = rawMockData as NewsItem[];

interface ClubPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CLUBS_DATA.map((club) => ({
    slug: club.slug,
  }));
}

export default async function ClubDetailPage({ params }: ClubPageProps) {
  const resolvedParams = await params;
  const club = CLUBS_DATA.find((c) => c.slug === resolvedParams.slug);

  if (!club) {
    notFound();
  }

  // Filter ONLY news belonging to this clubId
  const clubNews = mockNews.filter(
    (item) => item.clubId.toLowerCase() === club.id.toLowerCase()
  );

  const formattedCharterDate = new Date(club.charterDate + 'T00:00:00').toLocaleDateString(
    'es-CL',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  );

  return (
    <div className="w-full flex flex-col bg-[#F8FAFC]">
      
      {/* Breadcrumb Navigation Strip */}
      <div className="w-full bg-slate-100 border-b border-slate-200 py-2.5 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#00246C]">Inicio</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/clubes" className="hover:text-[#00246C]">Clubes D4320</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-bold text-[#00246C] truncate">{club.name}</span>
          </div>

          <Link
            href="/clubes"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#00246C] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Todos los Clubes</span>
          </Link>
        </div>
      </div>

      {/* EXCLUSIVE CLUB HERO HEADER */}
      <section className="relative w-full bg-[#00246C] text-white overflow-hidden border-b-4 border-[#F7A81B]">
        
        {/* Background Image with Deep Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={club.bannerImage}
            alt={club.name}
            fill
            priority
            sizes="100vw"
            referrerPolicy="no-referrer"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001744] via-[#00246C]/95 to-[#001744]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Main Club Info */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#F7A81B] text-[#00246C] text-xs font-black uppercase tracking-wider shadow-sm">
                  Distrito 4320 · Chile
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-900/80 border border-blue-400/40 text-blue-200 text-xs font-medium">
                  {club.region} ({club.zone})
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-medium">
                  Carta: {formattedCharterDate}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {club.name}
              </h1>

              {/* Local Club Motto */}
              <div className="p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 max-w-2xl">
                <div className="flex items-center gap-2 text-[#F7A81B] text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Lema Local del Club</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-white italic">
                  &ldquo;{club.motto}&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-3xl">
                {club.summary}
              </p>

              {/* Meeting Details Bar */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-blue-950/70 p-3 rounded-xl border border-blue-800/80 flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#F7A81B] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-slate-400 font-semibold text-[10px] uppercase">Reunión Ordinaria</span>
                    <span className="font-bold text-white">{club.meetingDay} · {club.meetingTime}</span>
                  </div>
                </div>

                <div className="bg-blue-950/70 p-3 rounded-xl border border-blue-800/80 flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#F7A81B] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-slate-400 font-semibold text-[10px] uppercase">Sede de Sesiones</span>
                    <span className="font-bold text-white truncate block max-w-[180px]">{club.meetingPlace}</span>
                  </div>
                </div>

                <div className="bg-blue-950/70 p-3 rounded-xl border border-blue-800/80 flex items-start gap-2.5">
                  <CalendarDays className="w-4 h-4 text-[#F7A81B] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-slate-400 font-semibold text-[10px] uppercase">Aniversario del Club</span>
                    <span className="font-bold text-white">{club.anniversaryDayMonth}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Board of Directors Card */}
            <div className="lg:col-span-4">
              <div className="bg-white text-slate-900 rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-100">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                  <div>
                    <h3 className="font-extrabold text-sm text-[#00246C]">Directiva 2026-2027</h3>
                    <p className="text-[11px] text-slate-500">Liderazgo y mesa directiva local</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-[#00246C] text-[10px] font-bold">
                    {club.memberCount} Socios
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                    <span className="text-slate-500 font-medium">Presidente:</span>
                    <span className="font-bold text-[#00246C]">{club.president}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                    <span className="text-slate-500 font-medium">Secretaria/o:</span>
                    <span className="font-bold text-slate-800">{club.secretary}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                    <span className="text-slate-500 font-medium">Tesorera/o:</span>
                    <span className="font-bold text-slate-800">{club.treasurer}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                    <span className="text-slate-500 font-medium">Macero:</span>
                    <span className="font-bold text-slate-800">{club.macero}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#F7A81B]" />
                    <a href={`mailto:${club.contactEmail}`} className="text-[#00246C] hover:underline font-semibold truncate">
                      {club.contactEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#F7A81B]" />
                    <span>{club.contactPhone}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <a
                    href={`mailto:${club.contactEmail}?subject=Contacto%20desde%20Portal%20Distrital%204320`}
                    className="w-full py-2 px-3 rounded-xl bg-[#00246C] hover:bg-blue-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Send className="w-3 h-3 text-[#F7A81B]" />
                    <span>Contactar a la Directiva</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* EXCLUSIVE FEED SECTION FOR THIS CLUB ONLY */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00246C] mb-1">
                <Building2 className="w-4 h-4 text-[#F7A81B]" />
                <span>Feed Exclusivo de Noticias y Obras</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900">
                Publicaciones de {club.name}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Mostrando únicamente los artículos y actividades reportados por este club al Distrito 4320.
              </p>
            </div>

            <a
              href={`mailto:secretaria@rotary4320.cl?subject=Nueva%20Actividad%20${encodeURIComponent(club.name)}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F7A81B] hover:bg-amber-400 text-[#00246C] font-bold text-xs shadow-sm transition-all whitespace-nowrap self-start md:self-auto"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enviar Actividad de este Club</span>
            </a>
          </div>

          {/* Render Club News */}
          {clubNews.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 shadow-sm max-w-xl mx-auto space-y-4">
              <div className="w-14 h-14 rounded-full bg-blue-50 text-[#00246C] flex items-center justify-center mx-auto">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">
                Aún no hay publicaciones recientes registradas para {club.name}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Si eres el presidente o secretario de este club, envía las actas, fotografías o testimonios de tus proyectos para que aparezcan en este feed oficial.
              </p>
              <a
                href="mailto:secretaria@rotary4320.cl"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00246C] text-white font-bold text-xs hover:bg-blue-900 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#F7A81B]" />
                <span>Enviar noticias a secretaria@rotary4320.cl</span>
              </a>
            </div>
          ) : (
            <NewsSection initialNews={clubNews} preselectedClubId={club.id} hideClubFilter={true} />
          )}

          {/* Featured Club Projects Summary */}
          <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-[#00246C] mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#F7A81B]" />
              <span>Proyectos Emblema de {club.name}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {club.featuredProjects.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#00246C] transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-[#00246C] text-[#F7A81B] font-bold text-xs flex items-center justify-center mb-2">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900">{proj}</h4>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Iniciativa comunitaria impulsada por el comité de proyectos de servicio.
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
