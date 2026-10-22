import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFab from './WhatsAppFab';
import OpeningTicker from './OpeningTicker';

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-habibi-black">
      <Navbar />
      <main className="flex-1 pt-16 sm:pt-20">
        <OpeningTicker />
        {children}
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
