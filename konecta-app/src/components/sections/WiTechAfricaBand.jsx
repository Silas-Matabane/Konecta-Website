import { Link } from 'react-router-dom';
import { witechafricaStats } from '@data/events';
import useInView from '@hooks/useInView';
import useCountUp from '@hooks/useCountUp';

function WiStat({ value, label }) {
  const num = parseInt(value, 10);
  const suffix = value.replace(String(num), '');
  const [ref, inView] = useInView({ threshold: 0.3 });
  const count = useCountUp(num || 0, inView, 1800);

  return (
    <div ref={ref} className="glass-card p-6 text-center">
      <div className="font-heading font-extrabold text-gradient-orange" style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)' }}>
        {num ? count : value}{suffix}
      </div>
      <div className="text-xs text-white/80 mt-2 uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function WiTechAfricaBand() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section ref={ref} className="relative bg-konecta-black px-6 lg:px-14 py-section overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-konecta-orange/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-konecta-orange/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-eyebrow text-konecta-orange justify-center">WiTechAfrica Initiative</div>
          <h2 className="font-heading font-extrabold text-konecta-white leading-[1.05] mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Convening Africa&apos;s<br /><span className="text-gradient-orange">Technology Conversation</span>
          </h2>
          <p className="text-base text-white/75 leading-relaxed mt-6 max-w-2xl mx-auto">
            The WiTechAfrica Summit brings together Africa&apos;s top telecoms operators, technology leaders, policymakers, and innovators to shape the continent&apos;s digital future.
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {witechafricaStats.map((s) => (
            <WiStat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>

        <div className={`flex gap-4 justify-center flex-wrap mt-12 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link to="/events" className="btn-primary">Learn About WiTechAfrica</Link>
          <Link to="/events" className="btn-secondary">2025 Summit Highlights</Link>
        </div>
      </div>
    </section>
  );
}
