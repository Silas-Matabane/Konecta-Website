import Pipeline from "@components/sections/Pipeline";
import KaiSection from "@components/sections/KaiSection";
import CTASection from "@components/common/CTASection";
import PageHeader from "@components/common/PageHeader";
import SEO from "@components/common/SEO";
import { PAGE_SEO } from "@data/constants";

export default function PlatformPage() {
  return (
    <>
      <SEO
        title={PAGE_SEO.platform.title}
        description={PAGE_SEO.platform.description}
        path="/platform"
      />
      <PageHeader
        eyebrow="Our Platform"
        title="Network &rarr; Platform &rarr;<br />Data &rarr; Revenue"
        description="Konecta's end-to-end value chain transforms raw connectivity infrastructure into intelligent platforms that generate big data, analytics, and value-added services."
      />
      <Pipeline />
      <KaiSection />
      <CTASection />
    </>
  );
}
