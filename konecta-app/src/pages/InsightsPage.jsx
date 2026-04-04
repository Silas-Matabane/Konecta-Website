import InsightsSection from "@components/sections/InsightsSection";
import CTASection from "@components/common/CTASection";
import PageHeader from "@components/common/PageHeader";
import SEO from "@components/common/SEO";
import { PAGE_SEO } from "@data/constants";

export default function InsightsPage() {
  return (
    <>
      <SEO
        title={PAGE_SEO.insights.title}
        description={PAGE_SEO.insights.description}
        path="/insights"
      />
      <PageHeader
        eyebrow="Thought Leadership"
        title="Insights &amp;<br />Thought Leadership"
        description="Expert analysis on telecoms, AI adoption, Microsoft technologies, and digital strategy across Africa."
      />
      <InsightsSection />
      <CTASection />
    </>
  );
}
