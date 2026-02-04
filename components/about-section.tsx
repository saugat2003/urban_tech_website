export default function AboutSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-slate-50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Content */}
          <div className="relative">
            <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-accent/30 to-orange-300/30 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl font-bold text-accent">DIGITAL</p>
                <p className="text-foreground/60 mt-4">Marketing Excellence</p>
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="heading-md mb-6">ABOUT URBAN TECH</h2>
              <p className="body-lg text-foreground/70 mb-6">
                We're a full-service digital marketing agency helping brands create impactful online presence through strategic web design, development, SEO, and data-driven marketing.
              </p>
              <p className="body-lg text-foreground/70">
                Our expert team delivers innovative solutions that drive real engagement, trust, and measurable results for your brand.
              </p>
              <p className="body-lg text-foreground/70">
                Moving from "Small to Giant" isn’t just about scaling—it’s about commanding market presence. We provide the strategic engine to propel emerging brands into industry leaders. Simultaneously, we refine "Good to Great" by auditing existing assets and injecting the excellence required to transform a functional business into an aspirational icon.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold tracking-widest text-foreground mb-2 uppercase">► Our Approach</h3>
                <p className="text-sm text-foreground/60">Custom web development and design solutions</p>
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
