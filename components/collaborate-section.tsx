'use client';

import Image from 'next/image';

export default function CollaborateSection() {
  return (
    <section className="w-full py-32 bg-gradient-to-b from-white to-slate-50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-8">
            * LET'S <span className="text-accent">Collaborate</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Ready to elevate your brand? Let's work together to create something extraordinary.
          </p>
        </div>

        <div className="relative w-full h-80 rounded-3xl overflow-hidden mb-16 shadow-lg">
          <Image
            src="/collaboration.jpg"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-white border border-border hover:border-accent hover:shadow-lg transition-all">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="font-bold text-lg text-foreground mb-3">Strategy</h3>
            <p className="text-foreground/60 text-sm">Understand your goals and create a tailored roadmap</p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-border hover:border-accent hover:shadow-lg transition-all">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-bold text-lg text-foreground mb-3">Execution</h3>
            <p className="text-foreground/60 text-sm">Implement campaigns with precision and creativity</p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-border hover:border-accent hover:shadow-lg transition-all">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="font-bold text-lg text-foreground mb-3">Results</h3>
            <p className="text-foreground/60 text-sm">Track, measure, and optimize for maximum impact</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent to-orange-400 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Let's discuss how Urban Tech can help drive your brand forward.
          </p>
          <button className="px-8 py-4 bg-white text-accent font-bold rounded-full hover:bg-white/90 transition">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
}
