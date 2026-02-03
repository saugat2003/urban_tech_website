'use client';

import Image from 'next/image';

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10" />
      </div>

      <div className="relative z-10 flex items-center justify-center gap-8 px-6 max-w-7xl mx-auto w-full h-full">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start justify-center gap-8">
          <div className="space-y-4">
            <p className="text-xs font-bold tracking-widest text-accent/80 uppercase">● Digital Excellence</p>
            <h1 className="heading-display">
              CREATOR<br />
              <span className="relative inline-block text-accent">
                URBAN TECH
              </span>
            </h1>
          </div>
          <p className="body-lg max-w-md">
            Building brands through influencers and digital innovation
          </p>
          <div className="flex items-center gap-4">
            <button className="btn-modern bg-foreground text-background hover:bg-foreground/90">
              Explore
            </button>
            <button className="btn-modern border-2 border-foreground text-foreground hover:bg-foreground/5">
              Learn More
            </button>
          </div>
        </div>

        {/* Right - Tilted Image with Parallax */}
        <div className="flex-1 flex items-center justify-center h-full">
          <div
            className="relative w-96 h-96 md:w-full md:h-full flex items-center justify-center"
            style={{
              transform: `perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(${parallaxOffset * 0.3}px)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl" />
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-image.jpg"
                alt="Urban Tech Digital Marketing"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating elements for parallax effect */}
            <div
              className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"
              style={{
                transform: `translateY(${parallaxOffset * 0.2}px)`,
              }}
            />
            <div
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full"
              style={{
                transform: `translateY(${-parallaxOffset * 0.15}px)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-foreground rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
