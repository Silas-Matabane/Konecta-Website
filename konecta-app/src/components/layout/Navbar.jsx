import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '@data/constants';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'glass-nav border-b border-white/[0.06]'
        : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between px-6 lg:px-14 py-5">
        {/* Logo */}
        <Link to="/" className="font-syne text-2xl font-extrabold tracking-tight text-konecta-white no-underline">
          KONEC<span className="text-konecta-orange">T</span>A
        </Link>

        {/* Desktop Nav Links — centered */}
        <ul className="hidden lg:flex gap-8 list-none absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-[0.7rem] font-medium uppercase tracking-[0.15em] no-underline transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-konecta-white'
                    : 'text-konecta-muted hover:text-konecta-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right — single CTA */}
        <Link to="/contact" className="hidden lg:inline-block btn-primary text-xs !py-3 !px-6">
          Connect With Us
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-6 h-0.5 bg-konecta-white transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-konecta-white transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-konecta-white transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu — full screen glass overlay */}
      <div className={`fixed inset-0 z-40 flex flex-col justify-center items-center transition-all duration-500 lg:hidden ${
        mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`} style={{ background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)' }}>
        {/* Close button */}
        <button
          className="absolute top-5 right-6 p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <span className="block w-6 h-0.5 bg-konecta-white rotate-45 translate-y-[1px]" />
          <span className="block w-6 h-0.5 bg-konecta-white -rotate-45 -translate-y-[1px]" />
        </button>

        <ul className="flex flex-col items-center gap-8 list-none">
          {NAV_LINKS.map((link, i) => (
            <li key={link.path} className={`transition-all duration-500 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${i * 60}ms` }}>
              <Link
                to={link.path}
                className="font-syne text-2xl font-bold uppercase tracking-wider text-konecta-white no-underline hover:text-konecta-orange transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className={`pt-4 transition-all duration-500 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${NAV_LINKS.length * 60}ms` }}>
            <Link
              to="/contact"
              className="btn-primary"
              onClick={() => setMobileOpen(false)}
            >
              Connect With Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
