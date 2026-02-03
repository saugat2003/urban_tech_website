export default function AboutSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-slate-50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Content */}
          <div className="relative">
            <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-accent/30 to-orange-300/30 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl font-bold text-accent">INFLUENCER</p>
                <p className="text-foreground/60 mt-4">Marketing Excellence</p>
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="heading-md mb-6">ABOUT URBAN TECH</h2>
              <p className="body-lg text-foreground/70 mb-6">
                We're an influencer-led marketing agency helping brands create impactful campaigns through strategic partnerships, compelling content, and data-driven strategy.
              </p>
              <p className="body-lg text-foreground/70">
                Our influential voices that drive real engagement, trust, and measurable results for your brand.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold tracking-widest text-foreground mb-2 uppercase">► Our Approach</h3>
                <p className="text-sm text-foreground/60">Strategic partnerships with authentic influencers</p>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-widest text-foreground mb-2 uppercase">► Our Mission</h3>
                <p className="text-sm text-foreground/60">Create measurable impact through innovative digital strategies</p>
              </div>
            </div>

            <button className="btn-modern bg-accent text-white hover:bg-accent/90">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
