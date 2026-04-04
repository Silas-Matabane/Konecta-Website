import Pipeline from '@components/sections/Pipeline';
import KaiSection from '@components/sections/KaiSection';
import CTASection from '@components/common/CTASection';
import PageHeader from '@components/common/PageHeader';

export default function PlatformPage() {
  return (
    <>
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