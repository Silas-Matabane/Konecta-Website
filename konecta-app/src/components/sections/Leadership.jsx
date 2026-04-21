import SectionEyebrow from "@components/common/SectionEyebrow";
import useInView from "@hooks/useInView";
import { LEADERSHIP_DATA } from "@data/constants";

export default function Leadership() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative bg-konecta-dark-gray content-px py-section overflow-hidden"
      id="about"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-konecta-orange/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Photo — real demo image */}
        <div
          className={`transition-all duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >
          <div className="relative max-w-sm mx-auto">
            <div className="image-glass-overlay rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                src={LEADERSHIP_DATA.image}
                alt="Konecta Leadership"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating glass accent */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-xl glass-card-orange flex items-center justify-center">
              <span className="font-heading font-extrabold text-2xl text-konecta-orange">
                {LEADERSHIP_DATA.yearsExperience}
              </span>
              <span className="text-[0.5rem] text-white/80 uppercase tracking-wider ml-1">
                Yrs
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className={`transition-all duration-1000 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
        >
          <SectionEyebrow text="Leadership" />
          <h2 className="section-title mt-4 mb-2">{LEADERSHIP_DATA.name}</h2>
          <p className="text-sm text-konecta-orange font-heading font-bold tracking-wide mb-1">
            {LEADERSHIP_DATA.title}
          </p>
          <p className="text-xs text-white/50 tracking-wide mb-8">
            {LEADERSHIP_DATA.tagline}
          </p>

          <p className="text-base text-white/75 leading-relaxed mb-4">
            {LEADERSHIP_DATA.bio}
          </p>
          <p className="text-base text-white/75 leading-relaxed mb-8">
            {LEADERSHIP_DATA.bioExtended}
          </p>

          <blockquote className="glass-card p-6 rounded-xl mb-8 border-l-2 border-konecta-orange">
            <p className="text-lg text-konecta-white/90 italic leading-relaxed">
              &ldquo;{LEADERSHIP_DATA.quote}&rdquo;
            </p>
            <footer className="text-sm text-konecta-orange mt-4 font-heading font-bold">
              — {LEADERSHIP_DATA.author}
            </footer>
          </blockquote>

          {/* Recognition */}
          {LEADERSHIP_DATA.recognition && (
            <div>
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-konecta-white mb-4">
                Awards & Recognition
              </h4>
              <div className="flex flex-wrap gap-2">
                {LEADERSHIP_DATA.recognition.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-konecta-gold border border-konecta-gold/20 rounded-lg px-3 py-1.5 backdrop-blur-sm bg-konecta-gold/[0.03]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
