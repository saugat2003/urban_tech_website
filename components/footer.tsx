import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-bold text-base tracking-widest mb-6 uppercase">● URBAN TECH</h3>
            <p className="text-white/70 text-xs leading-relaxed">
              Digital marketing agency specializing in influencer partnerships and brand growth.
            </p>
          </div>

          <div>
            <h4 className="font-bold tracking-widest mb-6 text-xs uppercase">Services</h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="#services" className="text-white/70 hover:text-white transition-colors duration-200">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-white transition-colors duration-200">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-white transition-colors duration-200">
                  Influencer Marketing
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-white transition-colors duration-200">
                  Web Design & Dev
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold tracking-widest mb-6 text-xs uppercase">Company</h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-white/70 hover:text-white transition-colors duration-200">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#insights" className="text-white/70 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold tracking-widest mb-6 text-xs uppercase">Connect</h4>
            <div className="space-y-3 text-xs">
              <p>
                <a href="mailto:info@urbantech.com.np" className="text-white/70 hover:text-white transition-colors duration-200">
                  info@urbantech.com.np
                </a>
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  Twitter
                </Link>
                <Link href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  LinkedIn
                </Link>
                <Link href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-xs">© 2024 Urban Tech. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <Link href="#" className="text-white/60 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
