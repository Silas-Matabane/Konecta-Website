import { Link } from 'react-router-dom';
import { COMPANY } from '@data/constants';
import useInView from '@hooks/useInView';

export default function CTASection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-konecta-orange via-konecta-orange/90 to-konecta-gold" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.25),transparent_70%)]" />
      {/* Floating glass shapes */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/[0.06] backdrop-blur-sm pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-white/[0.04] backdrop-blur-sm pointer-events-none" />

      <div className="relative px-6 lg:px-14 py-section z-10">
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading font-extrabold leading-[1.05] tracking-tight text-konecta-white" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Build the Infrastructure That<br />Powers Your Digital Future
          </h2>
          <p className="text-lg text-white/80 mt-6 max-w-xl leading-relaxed">
            Whether you are planning a digital transformation programme, deploying large-scale connectivity infrastructure, or exploring artificial intelligence adoption, Konecta provides the strategic expertise and technology partnerships required to deliver results. Start the conversation with Konecta.
          </p>
        </div>

        <div className={`flex flex-wrap gap-4 mt-12 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href={`mailto:${COMPANY.email}`} className="btn-white">Book a Consultation</a>
          <Link to="/events" className="btn-outline-white">Attend an Event</Link>
        </div>
      </div>
    </section>
  );
}
