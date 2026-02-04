'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-modern border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Urban Tech Logo"
            width={240}
            height={80}
            className="h-14 w-auto object-contain"
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden backdrop-modern border-t border-border/50">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <Link 
              href="#services" 
              className="text-xs font-bold tracking-widest text-foreground/60 hover:text-foreground transition-colors duration-200 uppercase py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#work" 
              className="text-xs font-bold tracking-widest text-foreground/60 hover:text-foreground transition-colors duration-200 uppercase py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link 
              href="#insights" 
              className="text-xs font-bold tracking-widest text-foreground/60 hover:text-foreground transition-colors duration-200 uppercase py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link 
              href="#contact" 
              className="text-xs font-bold tracking-widest text-foreground/60 hover:text-foreground transition-colors duration-200 uppercase py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <button 
              className="px-5 py-2.5 bg-foreground text-background text-xs font-bold tracking-wide rounded-lg hover:bg-foreground/90 transition-all duration-200 uppercase w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
