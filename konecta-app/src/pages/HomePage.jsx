import Hero from "@components/sections/Hero";
import LogoMarquee from "@components/sections/LogoMarquee";
import ServicesGrid from "@components/sections/ServicesGrid";
import Pipeline from "@components/sections/Pipeline";
import MicrosoftPartnership from "@components/sections/MicrosoftPartnership";
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

      <ServicesGrid />
      <Pipeline />
      <MicrosoftPartnership />
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
