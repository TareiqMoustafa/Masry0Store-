import { type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import ParticleNetwork from '@/components/ParticleNetwork';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-cairo" dir="rtl">
      <ScrollProgress />
      <ParticleNetwork />
      <Header />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
