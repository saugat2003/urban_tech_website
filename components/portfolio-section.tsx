'use client';

import Image from 'next/image';

export default function PortfolioSection() {
  const projects = [
    {
      title: 'E-commerce Website Design',
      category: 'Web Development',
      image: '/portfolio-1.jpg',
      stat: 'Conversion: +65%',
    },
    {
      title: 'Sunscreen SPF Product Launch',
      category: 'Digital Marketing',
      image: '/portfolio-2.jpg',
      stat: 'Conversion: +45%',
    },
  ];

  return (
    <section id="work" className="w-full py-32 bg-slate-50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="heading-xl mb-6">SELECTED WORK</h2>
          <p className="body-lg text-foreground/60 max-w-2xl">
            Successful campaigns and projects that have driven real results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 h-96"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-end justify-start p-8">
                <div className="text-white">
                  <p className="text-xs font-bold tracking-widest text-white/70 mb-2 uppercase">{project.category}</p>
                  <h3 className="text-xl font-bold tracking-tight mb-4">{project.title}</h3>
                  <p className="text-sm text-white/90 font-medium">{project.stat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 border-2 border-foreground text-foreground font-medium rounded-full hover:bg-foreground hover:text-background transition">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
