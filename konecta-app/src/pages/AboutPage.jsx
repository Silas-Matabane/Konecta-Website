import Leadership from '@components/sections/Leadership';
import AfricaPresence from '@components/sections/AfricaPresence';
import WiTechAfricaBand from '@components/sections/WiTechAfricaBand';
import PartnersSection from '@components/sections/PartnersSection';
import CTASection from '@components/common/CTASection';
import PageHeader from '@components/common/PageHeader';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About Konecta"
        description="Africa's premier telecoms and technology consultancy u{2013} Level 1 B-BBEE certified, 100% women-owned, and a trusted Microsoft Partner."
      />
      <Leadership />
      <AfricaPresence />
      <WiTechAfricaBand />
      <PartnersSection />
      <CTASection />
    </>
  );
}