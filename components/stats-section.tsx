export default function StatsSection() {
  const stats = [
    { number: '109+', label: 'Campaigns' },
    { number: '16+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '65+', label: 'Team Members' },
  ];

  return (
    <section className="w-full py-24 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-3">
              <p className="text-5xl md:text-7xl font-bold tracking-tight text-accent">{stat.number}</p>
              <p className="text-xs md:text-sm font-bold tracking-widest text-foreground/60 text-center uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
