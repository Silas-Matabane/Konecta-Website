import EventsSection from '@components/sections/EventsSection';
import WiTechAfricaBand from '@components/sections/WiTechAfricaBand';
import CTASection from '@components/common/CTASection';
import PageHeader from '@components/common/PageHeader';

export default function EventsPage() {
  return (
    <>
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