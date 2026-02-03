'use client';

import Image from 'next/image';

export default function InsightsSection() {
  const insights = [
    {
      title: 'Maximizing SEO Impact',
      excerpt: 'How to optimize your website for better search engine rankings',
      category: 'SEO Strategy',
      image: '/insights-1.jpg',
    },
    {
      title: 'Crafting High-Impact Digital Campaigns',
      excerpt: 'Best practices for creating campaigns that drive real engagement',
      category: 'Digital Marketing',
      image: '/insights-2.jpg',
    },
    {
      title: 'Modern Web Design Trends 2026',
      excerpt: 'Discover the latest trends shaping the future of web design and development',
      category: 'Web Design',
      image: '/insights-1.jpg',
    },
  ];

  return (
    <section id="insights" className="w-full py-32 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-8">New Insights</h2>
          <p className="text-foreground/60 max-w-2xl">
            Latest thoughts and research on digital marketing, web development, and brand growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article
              key={index}
              className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={insight.image || "/placeholder.svg"}
                  alt={insight.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                />
              </div>

              <div className="p-8 bg-white border border-border group-hover:border-accent transition-colors">
                <p className="text-xs font-medium text-accent uppercase tracking-wide mb-3">{insight.category}</p>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">{insight.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-6">{insight.excerpt}</p>

                <button className="text-accent font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
