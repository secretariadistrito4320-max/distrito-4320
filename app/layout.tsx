import type { Metadata } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar'; // <- Vuelve a importar
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ... (resto del código igual) ...

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
        <TopBar />   {/* <- Vuelve a agregarlo aquí */}
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
