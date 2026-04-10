import { Link } from "react-router-dom";
import {
  COMPANY,
  SOCIAL_LINKS,
  FOOTER_SERVICES,
  FOOTER_EVENTS,
  FOOTER_COMPANY,
  BADGES,
} from "@data/constants";

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="relative bg-[#050505] overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-konecta-orange/[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* Main footer grid */}
      <div className="relative z-10 px-6 lg:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="font-logo text-2xl font-extrabold tracking-tight mb-4">
              KONEC<span className="text-konecta-orange">T</span>A
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-[280px]">
              Africa&apos;s leading telecoms and technology consultancy. We
              build networks, develop platforms, and enable digital
              transformation across the continent.
            </p>
            <div className="flex flex-col gap-2">
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="text-[0.65rem] font-bold uppercase tracking-widest text-konecta-gold border border-konecta-gold/20 rounded-lg px-3 py-1.5 w-fit backdrop-blur-sm bg-konecta-gold/[0.03]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-heading text-xs font-bold uppercase tracking-widest text-konecta-white mb-6">
              Services
            </div>
            <ul className="flex flex-col gap-3 list-none">
              {FOOTER_SERVICES.map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-sm text-white/80 no-underline hover:text-konecta-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events + Company */}
          <div>
            <div className="font-heading text-xs font-bold uppercase tracking-widest text-konecta-white mb-6">
              Events
            </div>
            <ul className="flex flex-col gap-3 list-none mb-10">
              {FOOTER_EVENTS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/80 no-underline hover:text-konecta-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="font-heading text-xs font-bold uppercase tracking-widest text-konecta-white mb-6">
              Company
            </div>
            <ul className="flex flex-col gap-3 list-none">
              {FOOTER_COMPANY.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/80 no-underline hover:text-konecta-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-heading text-xs font-bold uppercase tracking-widest text-konecta-white mb-6">
              Get in Touch
            </div>
            <ul className="flex flex-col gap-3 list-none mb-8">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-white/80 no-underline hover:text-konecta-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <span className="text-sm text-white/80">
                  {COMPANY.location}
                </span>
              </li>
            </ul>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-sm text-white/80 no-underline hover:border-konecta-orange hover:text-konecta-orange transition-all"
                  aria-label={s.platform}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 px-6 lg:px-14 py-6 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-xs text-white/75 text-center sm:text-left">
          &copy; {COMPANY.year} {COMPANY.fullName} · {COMPANY.registrationNote}
        </div>
        <div className="text-xs text-white/75 flex gap-4">
          <span className="hover:text-konecta-white transition-colors cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-konecta-white transition-colors cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-konecta-white transition-colors cursor-pointer">
            POPIA
          </span>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/27721300531"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-20 z-50 w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-5 h-5 fill-white"
        >
          <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16.002c0 3.5 1.129 6.744 3.047 9.381L1.06 31.372l6.182-1.96A15.905 15.905 0 0 0 16.004 32C24.83 32 32 24.826 32 15.998S24.83 0 16.004 0zm9.32 22.602c-.39 1.1-2.276 2.103-3.156 2.18-.878.076-1.697.396-5.716-1.19-4.852-1.916-7.896-6.93-8.132-7.252-.236-.322-1.93-2.567-1.93-4.893s1.222-3.47 1.656-3.944c.435-.474.948-.593 1.264-.593.316 0 .632.003.908.016.292.014.682-.11 1.067.814.39.94 1.326 3.237 1.443 3.473.117.236.195.512.039.826-.156.316-.234.512-.468.788-.234.278-.494.62-.704.832-.234.234-.478.488-.206.96s1.214 2.003 2.606 3.244c1.79 1.596 3.3 2.09 3.77 2.326.468.236.74.198 1.012-.118.274-.316 1.17-1.364 1.482-1.834.312-.468.624-.39 1.054-.234.43.156 2.724 1.284 3.192 1.518.468.234.78.352.896.546.118.196.118 1.12-.272 2.218z" />
        </svg>
      </a>
    </footer>
  );
}
