import SectionEyebrow from "@components/common/SectionEyebrow";
import ThemedIcon from "@components/common/ThemedIcon";
import useInView from "@hooks/useInView";

const industries = [
  {
    icon: "building",
    label: "Public Sector",
    description:
      "Smart digital infrastructure and connectivity for government services and municipalities.",
  },
  {
    icon: "bank",
    label: "DFI's",
    description:
      "Development Finance Institutions driving sustainable technology investment and impact.",
  },
  {
    icon: "satellite",
    label: "Telecommunications",
    description:
      "End-to-end TMT solutions for network operators and carriers across Africa.",
  },
  {
    icon: "globe",
    label: "Internet Service Providers",
    description:
      "Scalable platforms and managed services that power last-mile connectivity.",
  },
  {
    icon: "shop",
    label: "Hospitality",
    description:
      "Guest Wi-Fi, analytics, and digital engagement tools for hotels and venues.",
  },
  {
    icon: "pin",
    label: "Transport",
    description:
      "Connected mobility solutions that keep commuters and fleets digitally linked.",
  },
];

function IndustryCard({ industry, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`glass-card p-6 lg:p-8 flex flex-col gap-4 transition-all duration-700 group hover:border-konecta-orange/30 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-konecta-orange/10 border border-konecta-orange/20 flex items-center justify-center shrink-0 group-hover:bg-konecta-orange/20 transition-colors duration-300">
        <ThemedIcon
          name={industry.icon}
          className="w-6 h-6 text-konecta-orange"
        />
      </div>
      <div>
        <h3 className="font-heading font-bold text-base lg:text-lg text-konecta-white mb-2 leading-snug">
          {industry.label}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed">
          {industry.description}
        </p>
      </div>
    </div>
  );
}

export default function IndustriesSection() {
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });

  return (
    <section
      className="relative bg-konecta-black content-px py-section overflow-hidden"
      id="industries"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-konecta-orange/[0.04] blur-[140px] rounded-full pointer-events-none" />

      {/* Header */}
      <div
        ref={headerRef}
        className={`relative z-10 mb-14 transition-all duration-700 ${
          headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionEyebrow text="Industries" />
        <h2 className="section-title mt-4 max-w-2xl">
          Industries We <span className="text-gradient-orange">Work With</span>
        </h2>
        <p className="text-base text-white/60 mt-4 max-w-2xl">
          Konecta delivers tailored technology, media, and telecommunications
          solutions across the sectors that drive Africa's digital economy.
        </p>
      </div>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {industries.map((industry, i) => (
          <IndustryCard key={industry.label} industry={industry} index={i} />
        ))}
      </div>
    </section>
  );
}
