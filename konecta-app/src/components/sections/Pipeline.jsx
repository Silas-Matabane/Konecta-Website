import { Link } from "react-router-dom";
import SectionEyebrow from "@components/common/SectionEyebrow";
import useInView from "@hooks/useInView";
import { pipelineStages } from "@data/services";

function StageCard({ stage, index }) {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group relative glass-card p-8 lg:p-10 hover:border-konecta-orange/30 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Stage number */}
      <div className="font-heading font-extrabold text-6xl text-konecta-orange/50 absolute top-4 right-6 leading-none group-hover:text-konecta-orange/70 transition-colors">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="text-3xl mb-5">{stage.icon}</div>
      <h3 className="font-heading font-bold text-lg text-konecta-white mb-3">
        {stage.title.replace(/^\d+\.\s*/, "")}
      </h3>
      <p className="text-base text-white/75 leading-relaxed mb-5">
        {stage.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {stage.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-md text-[0.65rem] text-white/80 uppercase tracking-wider"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover arrow */}
      <div className="absolute bottom-6 right-6 text-konecta-orange text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        →
      </div>
    </div>
  );
}

export default function Pipeline() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative bg-[#0D0D0D] px-6 lg:px-14 py-section overflow-hidden"
      id="platform"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-konecta-slate/[0.04] blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <div
        className={`relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-end transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div>
          <SectionEyebrow text="How We Work" />
          <h2 className="section-title mt-4">
            From Connectivity to
            <br />
            <span className="text-gradient-orange">Intelligence</span>
          </h2>
        </div>
        <p className="text-base text-white/75 leading-relaxed lg:text-right">
          Most organisations treat connectivity as basic infrastructure. Konecta
          treats it as the foundation of a digital intelligence platform. Our
          model integrates four layers: network infrastructure, software
          platforms, data analytics, and value-added services — converting
          connectivity into insight, operational efficiency, and sustainable
          revenue.
        </p>
      </div>

      {/* Bento grid of stages */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {pipelineStages.map((stage, i) => (
          <StageCard key={stage.title} stage={stage} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-[rgba(255,255,255,0.06)]">
        <div>
          <h3 className="font-heading font-bold text-xl text-konecta-white">
            From Infrastructure to Revenue Intelligence
          </h3>
          <p className="text-base text-konecta-muted mt-1">
            Traditional infrastructure providers focus on deployment. Konecta
            focuses on outcomes.
          </p>
        </div>
        <Link to="/contact" className="btn-primary">
          Build Your Platform
        </Link>
      </div>
    </section>
  );
}
