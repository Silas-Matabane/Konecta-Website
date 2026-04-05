import { Link } from "react-router-dom";
import SectionEyebrow from "@components/common/SectionEyebrow";
import useInView from "@hooks/useInView";
import { LEADERSHIP_DATA } from "@data/constants";

export default function Leadership() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative bg-konecta-black px-6 lg:px-14 py-section overflow-hidden"
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
          <h2 className="section-title mt-4 mb-8">
            Leadership With Deep
            <br />
            <span className="text-gradient-orange">Industry Expertise.</span>
          </h2>

          <blockquote className="glass-card p-6 rounded-xl mb-8 border-l-2 border-konecta-orange">
            <p className="text-lg text-konecta-white/90 italic leading-relaxed">
              &ldquo;{LEADERSHIP_DATA.quote}&rdquo;
            </p>
            <footer className="text-sm text-konecta-orange mt-4 font-heading font-bold">
              — {LEADERSHIP_DATA.author}
            </footer>
          </blockquote>

          <p className="text-base text-white/75 leading-relaxed mb-8">
            Konecta&apos;s leadership team combines decades of experience across
            telecommunications, enterprise technology, and public sector
            innovation. Through strong partnerships with global technology
            leaders and direct engagement with African governments and
            operators, the team brings a unique perspective on how digital
            infrastructure can accelerate economic development.
          </p>

          <Link to="/about" className="btn-primary">
            Meet the Team
          </Link>
        </div>
      </div>
    </section>
  );
}
