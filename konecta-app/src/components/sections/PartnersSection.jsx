import SectionEyebrow from "@components/common/SectionEyebrow";
import { partners } from "@data/partners";
import useInView from "@hooks/useInView";

function PartnerCard({ partner, index }) {
  const [cardRef, cardInView] = useInView({ threshold: 0.2 });
  return (
    <div
      ref={cardRef}
      className={`glass-card p-6 flex flex-col items-center justify-center group hover:border-konecta-orange/20 transition-all duration-500 ${cardInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {partner.logo ? (
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-12 max-w-[120px] object-contain mb-3 opacity-80 group-hover:opacity-100 transition-opacity"
          loading="lazy"
        />
      ) : (
        <div
          className={`font-heading font-bold text-sm mb-3 ${partner.isMicrosoft ? "text-konecta-silver/85" : "text-konecta-white/80"} group-hover:text-konecta-orange transition-colors`}
        >
          {partner.name}
        </div>
      )}
      <div className="text-xs text-white/75 mt-auto">{partner.type}</div>
    </div>
  );
}

export default function PartnersSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative bg-konecta-black px-6 lg:px-14 py-section overflow-hidden"
    >
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-konecta-slate/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div
        className={`relative z-10 text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionEyebrow text="Partners & Clients" />
        <h2 className="section-title mt-4 mx-auto">
          <span className="text-gradient-orange">In Good Company</span>
        </h2>
        <p className="text-base text-white/75 max-w-xl mx-auto leading-relaxed mt-4">
          We collaborate with global technology leaders and African enterprises
          who share our vision for transformative digital impact.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {partners.map((p, i) => (
          <PartnerCard key={p.name} partner={p} index={i} />
        ))}
      </div>
    </section>
  );
}
