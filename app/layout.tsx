import type { Metadata } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Rotary Club Distrito 4320 | Portal Web Oficial - Chile',
  description: 'Portal oficial de Rotary International Distrito 4320 (Chile). Noticias, clubes de Arica a Valparaíso y Rapa Nui, cartas de gobernadores, transparencia y pagos 2026-2027.',
  openGraph: {
    title: 'Rotary Club Distrito 4320 | Chile',
    description: 'Genera un Impacto Duradero · Unidos Para Hacer El Bien. Portal de Noticias, Clubes y Gestión Distrital.',
    type: 'website',
    locale: 'es_CL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rotary Club Distrito 4320 | Chile',
    description: 'Portal oficial de Rotary Distrito 4320 (Chile).',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-[#F7A81B] selection:text-[#00246C]"
      >
        <TopBar />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
