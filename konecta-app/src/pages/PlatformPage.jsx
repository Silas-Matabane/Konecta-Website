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
        title="From connectivity to intelligent platforms — driving big data, analytics, and value-added services."
      />
      <Pipeline />
      <KaiSection />
      <CTASection />
    </>
  );
}
