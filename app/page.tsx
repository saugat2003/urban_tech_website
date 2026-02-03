'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import StatsSection from '@/components/stats-section';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import PortfolioSection from '@/components/portfolio-section';
import TestimonialsSection from '@/components/testimonials-section';
import InsightsSection from '@/components/insights-section';
import CollaborateSection from '@/components/collaborate-section';
import Footer from '@/components/footer';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden bg-background">
      <Header />
      <Hero scrollY={scrollY} />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <InsightsSection />
      <CollaborateSection />
      <Footer />
    </div>
  );
}
