import { useState } from "react";
import SectionEyebrow from "@components/common/SectionEyebrow";
import ThemedIcon from "@components/common/ThemedIcon";
import useInView from "@hooks/useInView";
import { useCases } from "@data/useCases";

export default function UseCasesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [sectionRef, inView] = useInView({ threshold: 0.1 });
  const active = useCases[activeIdx];

  return (
    <section
      ref={sectionRef}
      className="relative bg-konecta-black content-px py-section overflow-hidden"
      id="use-cases"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-konecta-orange/[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div
        className={`relative z-10 mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionEyebrow text="Use Cases" />
        <h2 className="section-title mt-4 max-w-3xl">
          Real Challenges.
          <br />
          <span className="text-gradient-orange">Real Outcomes.</span>
        </h2>
        <p className="text-base text-white/60 mt-4 max-w-2xl">
          How Konecta has delivered for enterprise and government clients across
          South Africa.
        </p>
      </div>

      {/* Case selector tabs */}
      <div
        className={`relative z-10 flex gap-2 mb-12 overflow-x-auto pb-2 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {useCases.map((uc, i) => (
          <button
            key={uc.id}
            onClick={() => setActiveIdx(i)}
            className={`flex-shrink-0 px-5 lg:px-8 py-4 rounded-xl text-left transition-all duration-300 cursor-pointer border ${
              i === activeIdx
                ? "glass-card-orange text-konecta-white"
                : "bg-transparent border-white/[0.06] text-konecta-muted hover:border-white/[0.15] hover:text-konecta-white"
            }`}
          >
            <ThemedIcon name={uc.icon} size={24} className="mb-1" />
            <div className="text-[0.65rem] uppercase tracking-wider mt-1 whitespace-nowrap">
              {uc.category}
            </div>
          </button>
        ))}
      </div>

      {/* Active use case */}
      <div
        key={active.id}
        className="relative z-10 glass-card p-8 lg:p-10 animate-fade-in"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-widest text-konecta-orange border border-konecta-orange/20 bg-konecta-orange/[0.05]">
            {active.service}
          </span>
        </div>

        <h3
          className="font-heading font-extrabold text-konecta-white leading-tight mb-6"
          style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
        >
          {active.title}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Challenge */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-konecta-white mb-3">
              The Challenge
            </h4>
            <p className="text-sm text-white/70 leading-relaxed">
              {active.challenge}
            </p>
          </div>

          {/* Outcomes */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-konecta-white mb-3">
              Outcomes
            </h4>
            <ul className="space-y-2">
              {active.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-2 text-sm text-white/70"
                >
                  <span className="text-konecta-orange mt-0.5">&#x2713;</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
