import Hero from "@components/sections/Hero";
import LogoMarquee from "@components/sections/LogoMarquee";
import ServicesGrid from "@components/sections/ServicesGrid";
import Pipeline from "@components/sections/Pipeline";
import MicrosoftPartnership from "@components/sections/MicrosoftPartnership";
import KaiSection from "@components/sections/KaiSection";
import EventsSection from "@components/sections/EventsSection";
import UseCasesSection from "@components/sections/UseCasesSection";
import IndustriesSection from "@components/sections/IndustriesSection";
import Leadership from "@components/sections/Leadership";
import Testimonials from "@components/sections/Testimonials";
import InsightsSection from "@components/sections/InsightsSection";
import PartnersSection from "@components/sections/PartnersSection";
import CTASection from "@components/common/CTASection";
import SEO from "@components/common/SEO";
import { PAGE_SEO } from "@data/constants";

export default function HomePage() {
  return (
    <>
      <SEO description={PAGE_SEO.home.description} />
      <Hero />

      {/* About Konecta band */}
      <section className="relative bg-konecta-black content-px py-section overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-konecta-orange/[0.05] blur-[160px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-konecta-orange/20 bg-konecta-orange/[0.05] text-[0.7rem] font-bold uppercase tracking-[0.2em] text-konecta-orange">
            Who We Are
          </div>
          <h2
            className="font-heading font-extrabold text-konecta-white leading-[1.1] mb-6"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Connecting Businesses to{" "}
            <span className="text-gradient-orange">Success</span>
          </h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            At Konecta, we are passionate about creating solutions that connect
            businesses to success. We are a{" "}
            <span className="text-konecta-orange font-semibold">
              Level&nbsp;1 B-BBEE Company
            </span>
            ,{" "}
            <span className="text-konecta-orange font-semibold">
              100% women owned
            </span>{" "}
            operating in the Technology, Media and Telecommunications (TMT)
            Sector.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="glass-card px-5 py-3 rounded-xl text-center">
              <div className="font-heading font-extrabold text-lg text-gradient-orange">
                Level 1
              </div>
              <div className="text-[0.65rem] text-white/70 uppercase tracking-wider mt-1">
                B-BBEE Certified
              </div>
            </div>
            <div className="glass-card px-5 py-3 rounded-xl text-center">
              <div className="font-heading font-extrabold text-lg text-gradient-orange">
                100%
              </div>
              <div className="text-[0.65rem] text-white/70 uppercase tracking-wider mt-1">
                Women Owned
              </div>
            </div>
            <div className="glass-card px-5 py-3 rounded-xl text-center">
              <div className="font-heading font-extrabold text-lg text-gradient-orange">
                TMT
              </div>
              <div className="text-[0.65rem] text-white/70 uppercase tracking-wider mt-1">
                Sector Focus
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <Pipeline />
      <MicrosoftPartnership />
      <KaiSection />
      <EventsSection />
      <UseCasesSection />
      <IndustriesSection />
      <Leadership />
      <LogoMarquee />
      <Testimonials />
      <InsightsSection />
      <PartnersSection />
      <CTASection />
    </>
  );
}
