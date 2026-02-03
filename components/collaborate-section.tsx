'use client';

import Image from 'next/image';

export default function CollaborateSection() {
  const handleScheduleCall = () => {
    // Open calendar booking link in new tab
    window.open('https://calendly.com/urbantech', '_blank');
    // Alternative: You can also redirect to a contact form or modal
    // window.location.href = '/contact';
  };

  return (
    <section className="w-full py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white to-slate-50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8">
            * LET'S <span className="text-accent">Collaborate</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Ready to elevate your brand? Let's work together to create something extraordinary.
          </p>
        </div>

        <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-12 md:mb-16 shadow-lg">
          <Image
            src="/collaboration.jpg"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-border hover:border-accent hover:shadow-lg transition-all">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💼</div>
            <h3 className="font-bold text-base sm:text-lg text-foreground mb-2 sm:mb-3">Strategy</h3>
            <p className="text-foreground/60 text-xs sm:text-sm">Understand your goals and create a tailored roadmap</p>
          </div>

          <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-border hover:border-accent hover:shadow-lg transition-all">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎨</div>
            <h3 className="font-bold text-base sm:text-lg text-foreground mb-2 sm:mb-3">Execution</h3>
            <p className="text-foreground/60 text-xs sm:text-sm">Implement campaigns with precision and creativity</p>
          </div>

          <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-border hover:border-accent hover:shadow-lg transition-all sm:col-span-2 md:col-span-1">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
            <h3 className="font-bold text-base sm:text-lg text-foreground mb-2 sm:mb-3">Results</h3>
            <p className="text-foreground/60 text-xs sm:text-sm">Track, measure, and optimize for maximum impact</p>
          </div>
        </div>

        <div className="bg-white border-2 border-accent rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-black">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-black">Ready to Get Started?</h3>
          <p className="text-black/70 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base px-2">
            Let's discuss how Urban Tech can help drive your brand forward.
          </p>
          <button 
            onClick={handleScheduleCall}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-bold rounded-full hover:bg-black/80 transition text-sm sm:text-base"
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
}
