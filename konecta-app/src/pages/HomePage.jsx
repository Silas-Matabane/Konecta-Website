import Hero from "@components/sections/Hero";
import LogoMarquee from "@components/sections/LogoMarquee";
import ServicesGrid from "@components/sections/ServicesGrid";
import Pipeline from "@components/sections/Pipeline";
import MicrosoftPartnership from "@components/sections/MicrosoftPartnership";
import KaiSection from "@components/sections/KaiSection";
import EventsSection from "@components/sections/EventsSection";
import ImpactSection from "@components/sections/ImpactSection";
import Leadership from "@components/sections/Leadership";
import AfricaPresence from "@components/sections/AfricaPresence";
import WiTechnologyBand from "@components/sections/WiTechnologyBand";
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
      <LogoMarquee />
      <ServicesGrid />
      <Pipeline />
      <MicrosoftPartnership />
      <KaiSection />
      <EventsSection />
      <WiTechnologyBand />
      <ImpactSection />
      <AfricaPresence />
      <Leadership />
      <Testimonials />
      <InsightsSection />
      <PartnersSection />
      <CTASection />
    </>
  );
}
