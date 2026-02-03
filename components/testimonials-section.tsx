'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Leila Alexander',
      title: 'Director of Brand Growth',
      content:
        'Working with Urban Tech felt like having an in-house influencer team. The creators they partnered us with delivered authentic content that truly moved the audience and exceeded all expectations.',
      rating: 5,
      avatar: '/client-avatar.jpg',
    },
    {
      name: 'Marcus Johnson',
      title: 'CEO of Fashion Hub',
      content:
        'Their strategic approach to influencer marketing transformed our brand awareness. The ROI was exceptional, and the team was professional throughout.',
      rating: 5,
      avatar: '/client-avatar.jpg',
    },
    {
      name: 'Emma Wilson',
      title: 'Brand Manager at LifeStyle',
      content:
        'Urban Tech combined creative excellence with data-driven strategy. Our campaign exceeded all expectations and the collaboration was seamless.',
      rating: 5,
      avatar: '/client-avatar.jpg',
    },
  ];

  return (
    <section className="w-full py-32 bg-secondary text-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl md:text-7xl font-bold mb-24">Client Stories</h2>

        <div className="relative bg-secondary/80 rounded-3xl overflow-hidden">
          <div className="relative min-h-96 p-12 md:p-16 flex items-center justify-between gap-12">
            {/* Navigation - Left */}
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition"
            >
              ←
            </button>

            {/* Content */}
            <div className="ml-16 flex-1">
              <div className="mb-8">
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  "{testimonials[activeIndex].content}"
                </p>
              </div>

              <div>
                <p className="font-bold text-lg">{testimonials[activeIndex].name}</p>
                <p className="text-white/70 text-sm">{testimonials[activeIndex].title}</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Avatar - Right */}
            <div className="hidden md:block relative w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
              <Image
                src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                alt={testimonials[activeIndex].name}
                fill
                className="object-cover"
              />
            </div>

            {/* Navigation - Right */}
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition"
            >
              →
            </button>
          </div>

          {/* Indicators */}
          <div className="flex items-center justify-center gap-3 pb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-white w-8' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
