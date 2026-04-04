import { Link } from "react-router-dom";
import SectionEyebrow from "@components/common/SectionEyebrow";
import MicrosoftLogo from "@components/common/MicrosoftLogo";
import useInView from "@hooks/useInView";
import { microsoftSolutions } from "@data/services";

export default function MicrosoftPartnership() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative bg-konecta-black px-6 lg:px-14 py-section overflow-hidden"
      id="microsoft"
    >
      {/* Ambient blue glow */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-konecta-slate/[0.04] blur-[120px] rounded-full pointer-events-none" />

      {/* Centered header */}
      <div
        className={`relative z-10 text-center mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionEyebrow text="Microsoft Partnership" color="blue" />
        <h2 className="section-title mt-4 mx-auto">
          Delivering the Microsoft Ecosystem
          <br />
          <span className="text-gradient-blue">Across Africa</span>
        </h2>
        <p className="text-base text-white/75 mt-6 max-w-2xl mx-auto leading-relaxed">
          Konecta is an authorised Microsoft Partner delivering enterprise-grade
          cloud, productivity, security, and AI solutions to organisations
          across Africa. Through this partnership, clients gain access to
          Microsoft&apos;s full technology ecosystem. Our teams guide
          organisations through the entire transformation journey, from cloud
          migration and infrastructure modernisation to AI adoption and advanced
          analytics.
        </p>
      </div>

      {/* Microsoft logo feature — glass card */}
      <div
        className={`relative z-10 flex justify-center mb-16 transition-all duration-700 delay-200 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <div className="glass-card-blue flex items-center gap-6 px-12 py-8 rounded-xl">
          <MicrosoftLogo size={60} />
          <div>
            <div className="font-heading font-bold text-xl text-konecta-silver">
              Microsoft Partner Network
            </div>
            <div className="text-sm text-white/80">
              Authorised reseller &amp; implementation partner
            </div>
          </div>
        </div>
      </div>

      {/* Solutions grid — glass cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {microsoftSolutions.map((sol, i) => (
          <div
            key={sol.title}
            className={`glass-card-blue p-10 lg:p-12 transition-all duration-500 group ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${300 + i * 100}ms` }}
          >
            <div className="text-3xl mb-5">{sol.icon}</div>
            <h3 className="font-heading font-bold text-lg text-konecta-white mb-3">
              {sol.title}
            </h3>
            <p className="text-base text-white/75 leading-relaxed">
              {sol.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 text-center mt-14">
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/contact" className="btn-primary">
            Microsoft Consultation
          </Link>
          <Link to="/microsoft" className="btn-secondary">
            View All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
