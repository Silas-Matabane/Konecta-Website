import ServicesGrid from "@components/sections/ServicesGrid";
import CTASection from "@components/common/CTASection";
import PageHeader from "@components/common/PageHeader";
import SEO from "@components/common/SEO";
import { PAGE_SEO } from "@data/constants";

export default function ServicesPage() {
  return (
    <>
      <SEO
        title={PAGE_SEO.services.title}
        description={PAGE_SEO.services.description}
        path="/services"
      />
      <PageHeader
        eyebrow="What We Do"
        title="Our Services"
        description="Six pillars of telecoms and technology excellence u{2013} from network deployment to AI adoption, designed to drive measurable business outcomes across Africa."
      />
      <ServicesGrid />
      <CTASection />
    </>
  );
}
