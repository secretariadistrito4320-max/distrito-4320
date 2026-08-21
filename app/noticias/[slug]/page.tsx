import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  User,
  Building2,
  ArrowLeft,
  Sparkles,
  Images,
  ChevronRight
} from 'lucide-react';
import { getNews } from '@/lib/getNews';
import { NewsItem } from '@/components/NewsCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;
export const dynamicParams = false; // Requerido para exportación estática (output: 'export')

export async function generateStaticParams() {
  const allNews = await getNews();
  return allNews.map((news) => ({
    slug: news.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const allNews = await getNews();
  const news = allNews.find((item) => item.slug === slug);

  if (!news) {
    return {
      title: 'Noticia no encontrada | Rotary Distrito 4320',
    };
  }

  return {
    title: `${news.title} | Rotary Distrito 4320`,
    description: news.summary,
    openGraph: {
      title: news.title,
      description: news.summary,
      images: [news.imageUrl],
    },
  };
}

function formatArticleContent(rawContent: string): string {
  if (!rawContent) return '';

  let formatted = rawContent.trim();

  const hasHtmlTags = /<(p|div|h[1-6]|blockquote|figure|section|article)/i.test(formatted);

  if (hasHtmlTags) {
    formatted = formatted.replace(
      /<img /gi,
      '<img class="my-8 sm:my-10 rounded-2xl shadow-md border border-slate-200 w-full object-cover block" '
    );

    formatted = formatted.replace(
      /<figure/gi,
      '<figure class="my-8 sm:my-10 w-full overflow-hidden" '
    );

    formatted = formatted.replace(
      /<p>/gi,
      '<p class="mb-6 leading-relaxed text-slate-700 text-justify text-pretty">'
    );

    formatted = formatted.replace(
      /(ROTARY GENERA UN IMPACTO DURADERO|DAR DE SÍ ANTES DE PENSAR EN SÍ|EL PRINCIPIO QUE INSPIRA CADA ACCIÓN DE ROTARY|ROTARY CLUB [A-ZÁÉÍÓÚÑ\s]+ CONCENTRA APOYO|ROTARY CLUB [A-ZÁÉÍÓÚÑ\s]+ LIDERA ALIANZA)/g,
      '</p><h3 class="text-base sm:text-lg font-black text-[#00246C] mt-8 mb-4 pt-2 tracking-tight block">$1</h3><p>'
    );

    return formatted;
  }

  const blocks = formatted
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split(/\n\s*\n/)
    .filter((p) => p.trim().length > 0);

  return blocks
    .map((block) => {
      const trimmed = block.trim();

      const isShortHeading =
        trimmed.length > 0 &&
        trimmed.length < 60 &&
        !trimmed.endsWith('.') &&
        !trimmed.endsWith(':');

      if (isShortHeading) {
        return `<h3 class="text-base sm:text-lg font-black text-[#00246C] mt-8 mb-4 pt-2 border-t border-slate-100 tracking-tight block">${trimmed}</h3>`;
      }

      return `<p class="mb-6 leading-relaxed text-slate-700 text-justify text-pretty">${trimmed.replace(/\n/g, '<br/>')}</p>`;
    })
    .join('');
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const allNews = await getNews();
  const news = allNews.find((item) => item.slug === slug);

  if (!news) {
    notFound();
  }

  const relatedNews = allNews
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  const galleryImages = (news as NewsItem & { gallery?: string }).gallery
    ? (news as NewsItem & { gallery?: string }).gallery!
        .split(',')
        .map((img) => img.trim())
        .filter((img) => img.length > 0)
    : [];

  const formattedHtml = formatArticleContent(news.content);

  return (
    <div className="w-full bg-[#F8FAFC] py-10 sm:py-16 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Botón Volver */}
        <div className="mb-6">
          <Link
            href="/#noticias-section"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#00246C] hover:text-blue-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-[#F7A81B]" />
            <span>Volver al Portal de Noticias</span>
          </Link>
        </div>

        {/* Encabezado del Artículo */}
        <article className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-10">
          
          <div className="p-6 sm:p-10 space-y-4 border-b border-slate-100">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#00246C] text-[#F7A81B] text-[11px] font-black uppercase tracking-wider">
                {news.category || 'Noticias'}
              </span>
              {news.clubName && (
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#00246C] text-[11px] font-bold border border-blue-100 flex items-center gap-1">
                  <Building2 className="w-3 h-3 text-[#F7A81B]" />
                  {news.clubName}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00246C] leading-tight tracking-tight">
              {news.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#F7A81B]" />
                {news.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <User className="w-3.5 h-3.5 text-[#F7A81B]" />
                {news.author || 'Prensa Distrito 4320'}
              </span>
            </div>

          </div>

          {/* Imagen Principal de Portada */}
          {news.imageUrl && (
            <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[540px] bg-slate-950 overflow-hidden border-b border-slate-100">
              <Image
                src={news.imageUrl}
                alt=""
                fill
                className="object-cover blur-2xl opacity-25 scale-125 pointer-events-none"
              />
              <Image
                src={news.imageUrl}
                alt={news.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain p-2 sm:p-4"
              />
            </div>
          )}

          {/* Cuerpo del Artículo */}
          <div className="p-6 sm:p-10">
            <div
              className="prose prose-slate max-w-none text-slate-800 text-sm sm:text-base leading-relaxed
                          prose-headings:font-black prose-headings:text-[#00246C] prose-headings:tracking-tight prose-headings:mt-10 prose-headings:mb-4
                          prose-p:mb-6 prose-p:leading-relaxed prose-p:text-justify prose-p:text-pretty
                          prose-strong:text-[#00246C] prose-strong:font-bold
                          prose-a:text-[#00246C] prose-a:font-bold prose-a:underline hover:prose-a:text-amber-600
                          prose-img:rounded-2xl prose-img:shadow-md prose-img:my-8 prose-img:sm:my-10 prose-img:w-full prose-img:object-cover prose-img:border prose-img:border-slate-200
                          prose-figure:my-8 prose-figure:sm:my-10
                          [&_p>img]:my-8 [&_p>img]:sm:my-10 [&_img+img]:mt-8 [&_figure]:my-8"
              dangerouslySetInnerHTML={{ __html: formattedHtml }}
            />

            {/* Galería Fotográfica Secundaria */}
            {galleryImages.length > 1 && (
              <div className="mt-14 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-[#00246C] mb-6 flex items-center gap-2">
                  <Images className="w-5 h-5 text-[#F7A81B]" />
                  <span>Galería Fotográfica de la Actividad</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {galleryImages.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-950 group"
                    >
                      <Image
                        src={imgUrl}
                        alt=""
                        fill
                        sizes="10vw"
                        className="object-cover blur-xl opacity-30 scale-125 pointer-events-none"
                      />
                      <Image
                        src={imgUrl}
                        alt={`${news.title} - Imagen ${idx + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </article>

        {/* Noticias Sugeridas */}
        {relatedNews.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-xl font-black text-[#00246C] mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#F7A81B]" />
              <span>Otras publicaciones del Distrito 4320</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedNews.map((item) => (
                <Link
                  key={item.id}
                  href={`/noticias/${item.slug}`}
                  className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-[#00246C] hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950">
                      <Image
                        src={item.imageUrl}
                        alt=""
                        fill
                        sizes="10vw"
                        className="object-cover blur-lg opacity-30 pointer-events-none"
                      />
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        sizes="280px"
                        className="object-contain p-1 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F7A81B] block pt-1">
                      {item.category || 'Noticias'}
                    </span>
                    <h4 className="font-bold text-xs text-slate-800 group-hover:text-[#00246C] line-clamp-2 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold text-[#00246C] mt-3 inline-flex items-center gap-1 group-hover:underline">
                    <span>Leer más</span>
                    <ChevronRight className="w-3 h-3 text-[#F7A81B]" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
