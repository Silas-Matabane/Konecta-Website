import SectionEyebrow from '@components/common/SectionEyebrow';
import useInView from '@hooks/useInView';
import useCountUp from '@hooks/useCountUp';
import { COUNTRIES } from '@data/constants';

function MarketStat({ end, suffix, label }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const count = useCountUp(end, inView, 2000);
  return (
    <div ref={ref} className="glass-card p-6 text-center">
      <div className="font-heading font-extrabold text-4xl text-gradient-orange">{count}{suffix}</div>
      <div className="text-xs text-white/80 mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function AfricaPresence() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative bg-konecta-black px-6 lg:px-14 py-section overflow-hidden" id="presence">
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-konecta-orange/[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* Centered header */}
      <div className={`relative z-10 text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionEyebrow text="Pan-African Reach" />
        <h2 className="section-title mt-4 mx-auto">
          Headquartered in Johannesburg.<br /><span className="text-gradient-orange">Active Across Africa.</span>
        </h2>
        <p className="text-base text-white/75 mt-6 max-w-2xl mx-auto leading-relaxed">
          From Johannesburg, Konecta delivers telecoms infrastructure, Microsoft technology deployments, and consultancy across Southern, Eastern, and West Africa.
        </p>
      </div>

      {/* Stats bar — glass cards */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <MarketStat end={12} suffix="+" label="African Markets" />
        <MarketStat end={6} suffix="" label="Active Countries" />
        <MarketStat end={4} suffix="" label="Expanding Markets" />
        <MarketStat end={1} suffix="" label="Continent. One Mission." />
      </div>

      {/* Country grid — glass pills */}
      <div className="relative z-10 flex flex-wrap gap-3 justify-center">
        {COUNTRIES.map((c) => (
          <div
            key={c.name}
            className={`px-6 py-3 rounded-xl text-sm font-heading font-medium transition-all duration-300 ${
              c.active
                ? 'glass-card-orange text-konecta-white hover:border-konecta-orange/40'
                : 'glass-card text-white/80'
            }`}
          >
            <span className={`inline-block w-2 h-2 rounded-full mr-2 ${c.active ? 'bg-konecta-orange' : 'bg-white/20'}`} />
            {c.name}{c.note ? ` · ${c.note}` : ''}
          </div>
        ))}
      </div>
    </section>
  );
}
