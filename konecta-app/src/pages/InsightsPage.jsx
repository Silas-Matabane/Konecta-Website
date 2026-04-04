import InsightsSection from "@components/sections/InsightsSection";
import CTASection from "@components/common/CTASection";
import PageHeader from "@components/common/PageHeader";

export default function InsightsPage() {
  return (
    <>
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
