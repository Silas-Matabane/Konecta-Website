import MicrosoftPartnership from '@components/sections/MicrosoftPartnership';
import CTASection from '@components/common/CTASection';
import PageHeader from '@components/common/PageHeader';

export default function MicrosoftPage() {
  return (
    <>
      <PageHeader
        eyebrow="Microsoft Partner"
        eyebrowColor="text-konecta-silver"
        title="Microsoft Partnership"
        description="As an authorised Microsoft Partner, Konecta delivers the full Microsoft ecosystem to African enterprises u{2013} Azure, Microsoft 365, Copilot AI, and Dynamics 365."
      />
      <MicrosoftPartnership />
      <CTASection />
    </>
  );
}