import { Link } from 'react-router-dom';
import { COMPANY, SOCIAL_LINKS } from '@data/constants';
import useClock from '@hooks/useClock';

const OFFICES = [
  { city: 'Johannesburg', tz: 'Africa/Johannesburg', label: 'HQ' },
  { city: 'Cape Town', tz: 'Africa/Johannesburg', label: '' },
  { city: 'Nairobi', tz: 'Africa/Nairobi', label: '' },
  { city: 'London', tz: 'Europe/London', label: '' },
];

function OfficeClock({ city, tz, label }) {
  const time = useClock(tz);
  return (
    <div className="glass-card p-6 text-center">
      <div className="font-mono text-2xl lg:text-3xl text-gradient-orange tracking-wider">{time}</div>
      <div className="text-xs text-white/80 mt-2 uppercase tracking-wider">
        {city}{label ? ` · ${label}` : ''}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-konecta-orange/[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* Live clocks strip */}
      <div className="relative z-10 px-6 lg:px-14 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {OFFICES.map((o) => (
            <OfficeClock key={o.city} {...o} />
          ))}
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative z-10 px-6 lg:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="font-logo text-2xl font-extrabold tracking-tight mb-4">
              KONEC<span className="text-konecta-orange">T</span>A
            </div>
            <p className="text-sm text-white/80 leading-relaxed mb-6 max-w-[280px]">
              Africa&apos;s leading telecoms and technology consultancy. We build networks, develop platforms, and enable digital transformation across the continent.
            </p>
            <div className="flex flex-col gap-2">
              {['Level 1 B-BBEE Certified', '100% Women-Owned', 'Pan-African TMT Specialist'].map((badge) => (
                <span key={badge} className="text-[0.65rem] font-bold uppercase tracking-widest text-konecta-gold border border-konecta-gold/20 rounded-lg px-3 py-1.5 w-fit backdrop-blur-sm bg-konecta-gold/[0.03]">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-heading text-xs font-bold uppercase tracking-widest text-konecta-white mb-6">Services</div>
            <ul className="flex flex-col gap-3 list-none">
              {['Network Build & WiFi-as-a-Service', 'Big Data & Analytics Platforms', 'Value-Added Services', 'Microsoft Azure & AI', 'Managed IT Services', 'Telecoms Consulting'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm text-white/80 no-underline hover:text-konecta-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events + Company */}
          <div>
            <div className="font-heading text-xs font-bold uppercase tracking-widest text-konecta-white mb-6">Events</div>
            <ul className="flex flex-col gap-3 list-none mb-10">
              {[
                { label: 'CIO Konect Summit', to: '/events' },
                { label: 'Municipal Indaba', to: '/events' },
                { label: 'WiTechAfrica Forum', to: '/events' },
                { label: 'Sponsor an Event', to: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-white/80 no-underline hover:text-konecta-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="font-heading text-xs font-bold uppercase tracking-widest text-konecta-white mb-6">Company</div>
            <ul className="flex flex-col gap-3 list-none">
              {[
                { label: 'About Konecta', to: '/about' },
                { label: 'Impact Projects', to: '/impact' },
                { label: 'Insights & News', to: '/insights' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-white/80 no-underline hover:text-konecta-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-heading text-xs font-bold uppercase tracking-widest text-konecta-white mb-6">Get in Touch</div>
            <ul className="flex flex-col gap-3 list-none mb-8">
              <li><a href={`mailto:${COMPANY.email}`} className="text-sm text-white/80 no-underline hover:text-konecta-white transition-colors">{COMPANY.email}</a></li>
              <li><span className="text-sm text-white/80">{COMPANY.location}</span></li>
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
          <span className="hover:text-konecta-white transition-colors cursor-pointer">Privacy Policy</span>
          <span className="hover:text-konecta-white transition-colors cursor-pointer">Terms of Service</span>
          <span className="hover:text-konecta-white transition-colors cursor-pointer">POPIA</span>
        </div>
      </div>
    </footer>
  );
}
