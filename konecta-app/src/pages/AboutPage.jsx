import Leadership from "@components/sections/Leadership";
import AfricaPresence from "@components/sections/AfricaPresence";
import WiTechnologyBand from "@components/sections/WiTechnologyBand";
import PartnersSection from "@components/sections/PartnersSection";
import CTASection from "@components/common/CTASection";
import PageHeader from "@components/common/PageHeader";
import SEO from "@components/common/SEO";
import { PAGE_SEO } from "@data/constants";

export default function AboutPage() {
  return (
    <>
      <SEO
        title={PAGE_SEO.about.title}
        description={PAGE_SEO.about.description}
        path="/about"
      />
      <PageHeader
        eyebrow="About Us"
        title="About Konecta"
        description="Africa's premier telecoms and technology consultancy u{2013} Level 1 B-BBEE certified, 100% women-owned, and a trusted Microsoft Partner."
      />
      <Leadership />
      <AfricaPresence />
      <WiTechnologyBand />
      <PartnersSection />
      <CTASection />
    </>
  );
}
