'use client';

import { useEffect, useRef, useState } from 'react';

export default function ServicesSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Digital Marketing',
      description: 'Strategic campaigns across all digital channels',
      color: 'from-blue-400 to-blue-600',
      icon: '📱',
    },
    {
      title: 'SEO Optimization',
      description: 'Boost your online visibility and rankings',
      color: 'from-purple-400 to-purple-600',
      icon: '🔍',
    },
    {
      title: 'Influencer Marketing',
      description: 'Partner with authentic voices and creators',
      color: 'from-pink-400 to-pink-600',
      icon: '⭐',
    },
    {
      title: 'Website Design & Development',
      description: 'Modern, responsive web solutions for your brand',
      color: 'from-orange-400 to-orange-600',
      icon: '🎨',
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that converts',
      color: 'from-green-400 to-green-600',
      icon: '✨',
    },
    {
      title: 'Brand Strategy',
      description: 'Build your brand identity and positioning',
      color: 'from-red-400 to-red-600',
      icon: '🎯',
    },
  ];

  return (
    <section ref={ref} id="services" className="w-full py-32 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="heading-xl mb-6">OUR SERVICES</h2>
          <p className="body-lg max-w-2xl text-foreground/60">
            Comprehensive digital solutions tailored to elevate your brand and drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative h-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90 group-hover:opacity-100 transition-opacity`} />

              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">{service.title}</h3>
                </div>
                <p className="text-sm text-white/85 leading-relaxed">{service.description}</p>
              </div>

              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
