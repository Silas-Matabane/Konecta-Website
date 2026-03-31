import SectionEyebrow from '@components/common/SectionEyebrow';
import { testimonials } from '@data/testimonials';
import useInView from '@hooks/useInView';

function QuoteCard({ t, index }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`glass-card p-8 lg:p-10 flex flex-col justify-between transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div>
        <div className="text-gradient-orange text-4xl font-serif leading-none mb-4">&ldquo;</div>
        <p className="text-base text-konecta-white/85 leading-relaxed">
          {t.text}
        </p>
      </div>
      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/[0.06]">
        <div className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm text-konecta-orange" style={{ background: 'rgba(232,90,27,0.1)', border: '1px solid rgba(232,90,27,0.2)' }}>
          {t.name.charAt(0)}
        </div>
        <div>
          <div className="font-heading font-bold text-sm text-konecta-white">{t.name}</div>
          <div className="text-xs text-white/80 mt-0.5">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative bg-konecta-black px-6 lg:px-14 py-section overflow-hidden">
      <div className="absolute top-0 right-1/3 w-[350px] h-[350px] bg-konecta-orange/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className={`relative z-10 text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionEyebrow text="Client Voices" />
        <h2 className="section-title mt-4 mx-auto">Trusted by Africa&apos;s<br /><span className="text-gradient-orange">Leading Organisations</span></h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <QuoteCard key={t.id} t={t} index={i} />
        ))}
      </div>
    </section>
  );
}
