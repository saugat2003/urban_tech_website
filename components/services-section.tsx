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
      title: 'DIGITAL MARKETING',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, facilis atque maxime natus porro odio totam veritatis repellendus optio nisl.',
      number: '1',
    },
    {
      title: 'SEO',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, facilis atque maxime natus porro odio totam veritatis repellendus optio nisl.',
      number: '2',
    },
    {
      title: 'WEB DESIGN',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, facilis atque maxime natus porro odio totam veritatis repellendus optio nisl.',
      number: '3',
    },
    {
      title: 'UI/UX',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, facilis atque maxime natus porro odio totam veritatis repellendus optio nisl.',
      number: '4',
    },
  ];

  return (
    <section ref={ref} id="services" className="w-full py-32 bg-gray-50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="heading-xl mb-6">OUR SERVICES</h2>
          <p className="body-lg max-w-2xl text-foreground/60">
            Comprehensive digital solutions tailored to elevate your brand and drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900 rounded-2xl p-8 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Service Title with Blue First Letter */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">
                  <span className="text-blue-500">{service.title.charAt(0)}</span>
                  {service.title.slice(1)}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              
              {/* Number */}
              <div className="absolute bottom-4 right-8">
                <span className="text-6xl font-bold text-gray-700">{service.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
