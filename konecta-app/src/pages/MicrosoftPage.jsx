import MicrosoftPartnership from '@components/sections/MicrosoftPartnership';
import CTASection from '@components/common/CTASection';
import useInView from '@hooks/useInView';

export default function MicrosoftPage() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <>
      <section ref={ref} className="px-6 lg:px-14 pt-40 pb-12">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-eyebrow text-konecta-blue-light">Microsoft Partner</div>
          <h1 className="font-syne font-extrabold text-konecta-white mt-4 leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            Microsoft Partnership
          </h1>
          <p className="text-base text-konecta-muted mt-6 max-w-2xl leading-relaxed">
            As an authorised Microsoft Partner, Konecta delivers the full Microsoft ecosystem to African enterprises — Azure, Microsoft 365, Copilot AI, and Dynamics 365.
          </p>
        </div>
      </section>
      <MicrosoftPartnership />
      <CTASection />
    </>
  );
}
