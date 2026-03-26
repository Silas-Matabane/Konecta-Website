import Hero from '@components/sections/Hero';
import LogoMarquee from '@components/sections/LogoMarquee';
import ServicesGrid from '@components/sections/ServicesGrid';
import Pipeline from '@components/sections/Pipeline';
import MicrosoftPartnership from '@components/sections/MicrosoftPartnership';
import KaiSection from '@components/sections/KaiSection';
import EventsSection from '@components/sections/EventsSection';
import ImpactSection from '@components/sections/ImpactSection';
import Leadership from '@components/sections/Leadership';
import AfricaPresence from '@components/sections/AfricaPresence';
import WiTechAfricaBand from '@components/sections/WiTechAfricaBand';
import Testimonials from '@components/sections/Testimonials';
import InsightsSection from '@components/sections/InsightsSection';
import PartnersSection from '@components/sections/PartnersSection';
import CTASection from '@components/common/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ServicesGrid />
      <Pipeline />
      <MicrosoftPartnership />
      <KaiSection />
      <EventsSection />
      <WiTechAfricaBand />
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
