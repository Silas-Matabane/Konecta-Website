import { Link } from "react-router-dom";
import SectionEyebrow from "@components/common/SectionEyebrow";
import useInView from "@hooks/useInView";
import { impactStudies } from "@data/insights";

function ImpactCard({ study, index }) {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group glass-card overflow-hidden hover:border-konecta-orange/30 transition-all duration-700 ${
        study.large ? "md:col-span-2" : ""
      } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image area with real photo */}
      <div
        className={`relative overflow-hidden ${study.large ? "min-h-[240px]" : "min-h-[180px]"}`}
      >
        <img
          src={study.image}
          alt={study.title}
          loading="lazy"
          className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-konecta-black/90 to-transparent" />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-konecta-orange/15 text-konecta-orange text-xs font-heading font-bold tracking-wider uppercase backdrop-blur-sm">
          {study.tag}
        </div>
      </div>

      {/* Body */}
      <div className="p-8">
        <div
          className="font-heading font-extrabold text-gradient-orange inline-block"
          style={{ fontSize: "clamp(2rem, 3vw, 3rem)" }}
        >
          {study.metric}
        </div>
        <div className="text-xs text-white/80 mb-4 uppercase tracking-wider">
          {study.metricLabel}
        </div>
        <h3 className="font-heading font-bold text-lg text-konecta-white mb-3">
          {study.title}
        </h3>
        <p className="text-base text-white/75 leading-relaxed">
          {study.description}
        </p>
      </div>
    </div>
  );
}

export default function ImpactSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative bg-[#0D0D0D] px-6 lg:px-14 py-section overflow-hidden"
      id="impact"
    >
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-konecta-slate/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div
        className={`relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-end transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div>
          <SectionEyebrow text="Impact" />
          <h2 className="section-title mt-4">
            Delivering Measurable
            <br />
            <span className="text-gradient-orange">Results.</span>
          </h2>
        </div>
        <div className="lg:text-right">
          <p className="text-base text-white/75 leading-relaxed mb-4">
            Konecta&apos;s work is measured by real outcomes. Our projects
            deliver tangible improvements in connectivity, operational
            efficiency, digital engagement, and revenue generation.
          </p>
          <Link to="/impact" className="btn-secondary">
            All Projects
          </Link>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {impactStudies.map((study, i) => (
          <ImpactCard key={study.id} study={study} index={i} />
        ))}
      </div>
    </section>
  );
}
