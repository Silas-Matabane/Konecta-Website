import { Link } from "react-router-dom";
import useInView from "@hooks/useInView";
import { kaiFeatures } from "@data/services";

function KaiFeatureCard({ feat, index }) {
  const [cardRef, cardInView] = useInView({ threshold: 0.2 });
  return (
    <div
      ref={cardRef}
      className={`glass-card-orange p-8 lg:p-10 group transition-all duration-700 ${cardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="font-heading text-5xl font-extrabold text-konecta-orange/50 mb-6 group-hover:text-konecta-orange/70 transition-colors">
        {feat.number}
      </div>
      <h3 className="font-heading font-bold text-lg text-konecta-white mb-3">
        {feat.title}
      </h3>
      <p className="text-base text-white/75 leading-relaxed">
        {feat.description}
      </p>
    </div>
  );
}

export default function KaiSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative bg-konecta-black content-px py-section overflow-hidden"
      id="kai"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-konecta-orange/[0.04] blur-[120px] rounded-full pointer-events-none" />

      {/* Split header */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="section-eyebrow text-konecta-orange">
            AI Infrastructure & Factory
          </div>
          <h2 className="section-title mt-4">
            Enterprise AI.
            <br />
            Built for <span className="text-gradient-orange">Africa.</span>
          </h2>
        </div>
        <div
          className={`flex items-end transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-base text-white/75 leading-relaxed max-w-lg">
            Artificial intelligence will redefine how organisations operate
            across every sector. Konecta&apos;s AI Infrastructure &amp; Factory
            practice enables African enterprises and public sector organisations
            to deploy production-grade AI capabilities — ensuring AI adoption
            moves beyond experimentation into real operational deployment.
          </p>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {kaiFeatures.map((feat, i) => (
          <KaiFeatureCard key={feat.title} feat={feat} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        className={`mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-[rgba(255,255,255,0.06)] transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-base text-konecta-muted">
          Explore how our AI Infrastructure & Factory practice transforms
          enterprise operations.
        </p>
        <Link to="/contact" className="btn-primary flex-shrink-0">
          Explore AI Solutions
        </Link>
      </div>
    </section>
  );
}
