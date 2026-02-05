'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Shrestha',
      title: 'CEO, Techie',
      content:
        'Working with Urban Tech felt like having an in-house development team. Their web design and SEO expertise delivered exceptional results that exceeded all expectations.',
      rating: 5,
      avatar: '/client-avatar.jpg',
    },
    {
      name: 'Suman Karki',
      title: 'Director, The Film Nepal',
      content:
        'Their strategic approach to web development and digital marketing transformed our online presence. The ROI was exceptional, and the team was professional throughout.',
      rating: 5,
      avatar: '/client-avatar.jpg',
    },
    {
      name: 'Prakash Thapa',
      title: 'Managing Director, Techie',
      content:
        'Urban Tech combined creative excellence with data-driven strategy. Our campaign exceeded all expectations and the collaboration was seamless.',
      rating: 5,
      avatar: '/client-avatar.jpg',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 md:py-32 bg-secondary text-black border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12 sm:mb-16 md:mb-24 text-black">Client Stories</h2>

        <div className="relative bg-secondary/80 rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="relative min-h-72 sm:min-h-80 md:min-h-96 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            {/* Navigation - Left */}
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-black/30 flex items-center justify-center hover:border-black hover:bg-black/10 transition text-black text-sm sm:text-base"
            >
              ←
            </button>

            {/* Content */}
            <div className="mx-8 sm:mx-12 md:ml-16 md:mr-0 flex-1 text-center md:text-left">
              <div className="mb-6 md:mb-8">
                <p className="text-black/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  "{testimonials[activeIndex].content}"
                </p>
              </div>

              <div>
                <p className="font-bold text-base sm:text-lg text-black">{testimonials[activeIndex].name}</p>
                <p className="text-black/70 text-xs sm:text-sm">{testimonials[activeIndex].title}</p>
                <div className="flex gap-1 mt-3 md:mt-4 justify-center md:justify-start">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm sm:text-base">
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            </div>



            {/* Navigation - Right */}
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-black/30 flex items-center justify-center hover:border-black hover:bg-black/10 transition text-black text-sm sm:text-base"
            >
              →
            </button>
          </div>

          {/* Indicators */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 pb-6 sm:pb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-black w-8' : 'bg-black/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
