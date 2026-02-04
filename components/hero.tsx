'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import FloatingLines from './ui/FloatingLines';

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  const parallaxOffset = scrollY * 0.5;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* FloatingLines Background */}
      <div className="absolute inset-0 z-0">
        <FloatingLines 
          enabledWaves={["top","middle","bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          linesGradient={["#e947f5", "#2f4ba2", "#ff6b35"]}
        />
      </div>
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 px-4 sm:px-6 max-w-7xl mx-auto w-full h-full">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-6 md:gap-8 text-center md:text-left pt-8 md:pt-0">
          <div className="space-y-3 md:space-y-4">
            <p className="text-xs font-bold tracking-widest text-white uppercase">● Digital Excellence</p>
            <h1 className="heading-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="relative inline-block text-accent">
                URBAN TECH
              </span>
            </h1>
          </div>
          <p className="body-lg max-w-md text-white/80 text-sm sm:text-base md:text-lg px-4 md:px-0">
            Building brands through innovative web design, development, and digital marketing solutions
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button className="btn-modern bg-accent text-white hover:bg-accent/90 w-full sm:w-auto">
              Explore
            </button>
            <button className="btn-modern border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>

        {/* Right - Tilted YouTube Video with Parallax */}
        <div className="hidden md:flex flex-1 items-center justify-center h-full">
          <div
            className="relative w-96 h-96 md:w-full md:h-full flex items-center justify-center"
            style={{
              transform: `perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(${parallaxOffset * 0.3}px)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl" />
            <div className="relative w-[480px] h-[270px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
              {mounted ? (
                <iframe
                  src="https://www.youtube.com/embed/4eIDBV4Mpek?autoplay=1&mute=1&loop=1&playlist=4eIDBV4Mpek&controls=0&modestbranding=1&rel=0"
                  title="Urban Tech Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <div className="absolute inset-0 w-full h-full bg-gray-900 flex items-center justify-center">
                  <div className="animate-pulse text-white">Loading...</div>
                </div>
              )}
            </div>
            {/* Floating elements for parallax effect */}
            <div
              className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full"
              style={{
                transform: `translateY(${parallaxOffset * 0.2}px)`,
              }}
            />
            <div
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full"
              style={{
                transform: `translateY(${-parallaxOffset * 0.15}px)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
