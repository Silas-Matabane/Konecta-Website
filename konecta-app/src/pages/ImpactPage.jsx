import ImpactSection from "@components/sections/ImpactSection";
import Testimonials from "@components/sections/Testimonials";
import CTASection from "@components/common/CTASection";
import PageHeader from "@components/common/PageHeader";
import SEO from "@components/common/SEO";
import { PAGE_SEO } from "@data/constants";

export default function ImpactPage() {
  return (
    <>
      <SEO
        title={PAGE_SEO.impact.title}
        description={PAGE_SEO.impact.description}
        path="/impact"
      />
      <PageHeader
        eyebrow="Our Impact"
        title="Impact &amp;<br />Case Studies"
        description="Real projects. Measurable results. See how Konecta delivers transformative outcomes for Africa's leading organisations."
      />
      <ImpactSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
