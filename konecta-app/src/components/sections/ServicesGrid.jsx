import { useState } from "react";
import { Link } from "react-router-dom";
import SectionEyebrow from "@components/common/SectionEyebrow";
import useInView from "@hooks/useInView";
import { services } from "@data/services";

export default function ServicesGrid() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [sectionRef, inView] = useInView({ threshold: 0.1 });
  const active = services[activeIdx];

  return (
    <section
      ref={sectionRef}
      className="relative bg-konecta-black px-6 lg:px-14 py-section overflow-hidden"
      id="services"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-konecta-orange/[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div
        className={`relative z-10 mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionEyebrow text="What We Do" />
        <h2 className="section-title mt-4 max-w-3xl">
          Six Pillars of
          <br />
          <span className="text-gradient-orange">Telecoms Excellence</span>
        </h2>
      </div>

      {/* Numbered tab strip — glass style */}
      <div
        className={`relative z-10 flex gap-2 mb-12 overflow-x-auto pb-2 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {services.map((svc, i) => (
          <button
            key={svc.id}
            onClick={() => setActiveIdx(i)}
            className={`flex-shrink-0 px-5 lg:px-8 py-4 rounded-xl text-left transition-all duration-300 cursor-pointer border ${
              i === activeIdx
                ? "glass-card-orange text-konecta-white"
                : "bg-transparent border-white/[0.06] text-konecta-muted hover:border-white/[0.15] hover:text-konecta-white"
            }`}
          >
            <div className="font-heading font-bold text-xl lg:text-2xl">
              {svc.number}
            </div>
            <div className="text-[0.65rem] uppercase tracking-wider mt-1 whitespace-nowrap">
              {svc.title.split("&")[0].trim()}
            </div>
          </button>
        ))}
      </div>

      {/* Active service content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left — description in glass card */}
        <div key={active.id} className="glass-card p-8 lg:p-10 animate-fade-in">
          <div className="text-4xl mb-5">{active.icon}</div>
          <h3
            className="font-heading font-extrabold text-konecta-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)" }}
          >
            {active.title}
          </h3>
          <p className="text-base text-white/80 leading-relaxed mb-6">
            {active.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {active.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-lg text-xs text-white/75 uppercase tracking-wider"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <Link to="/wifi-platform" className="btn-primary">
            Learn More
          </Link>
        </div>

        {/* Right — demo image with glass overlay */}
        <div className="image-glass-overlay rounded-2xl overflow-hidden min-h-[250px] sm:min-h-[400px]">
          <img
            src={active.image}
            alt={active.title}
            loading="lazy"
            className="w-full h-full object-cover min-h-[250px] sm:min-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
