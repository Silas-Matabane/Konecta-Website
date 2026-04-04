import ImpactSection from "@components/sections/ImpactSection";
import Testimonials from "@components/sections/Testimonials";
import CTASection from "@components/common/CTASection";
import PageHeader from "@components/common/PageHeader";

export default function ImpactPage() {
  return (
    <>
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
