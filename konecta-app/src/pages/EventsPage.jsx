import EventsSection from "@components/sections/EventsSection";
import WiTechAfricaBand from "@components/sections/WiTechAfricaBand";
import CTASection from "@components/common/CTASection";
import PageHeader from "@components/common/PageHeader";
import SEO from "@components/common/SEO";
import { PAGE_SEO } from "@data/constants";

export default function EventsPage() {
  return (
    <>
      <SEO
        title={PAGE_SEO.events.title}
        description={PAGE_SEO.events.description}
        path="/events"
      />
      <PageHeader
        eyebrow="Events"
        title="Industry Events"
        description="Konecta convenes Africa's most important technology conversations through three flagship events u{2013} connecting CIOs, municipal leaders, and telecoms innovators."
      />
      <EventsSection />
      <WiTechAfricaBand />
      <CTASection />
    </>
  );
}
