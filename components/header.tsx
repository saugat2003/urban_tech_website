import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-modern border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-xl font-bold tracking-wide text-foreground">● URBAN</div>
        <nav className="hidden md:flex items-center gap-10">
          <Link href="#services" className="text-xs font-bold tracking-widest text-foreground/60 hover:text-foreground transition-colors duration-200 uppercase">
            Services
          </Link>
          <Link href="#work" className="text-xs font-bold tracking-widest text-foreground/60 hover:text-foreground transition-colors duration-200 uppercase">
            Work
          </Link>
          <Link href="#insights" className="text-xs font-bold tracking-widest text-foreground/60 hover:text-foreground transition-colors duration-200 uppercase">
            Insights
          </Link>
          <Link href="#contact" className="text-xs font-bold tracking-widest text-foreground/60 hover:text-foreground transition-colors duration-200 uppercase">
            Contact
          </Link>
        </nav>
        <button className="hidden md:block px-5 py-2.5 bg-foreground text-background text-xs font-bold tracking-wide rounded-lg hover:bg-foreground/90 transition-all duration-200 uppercase">
          Get Started
        </button>
      </div>
    </header>
  );
}
