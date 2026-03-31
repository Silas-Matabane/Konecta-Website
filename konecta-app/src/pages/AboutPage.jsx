import Leadership from '@components/sections/Leadership';
import AfricaPresence from '@components/sections/AfricaPresence';
import WiTechAfricaBand from '@components/sections/WiTechAfricaBand';
import PartnersSection from '@components/sections/PartnersSection';
import CTASection from '@components/common/CTASection';
import useInView from '@hooks/useInView';

export default function AboutPage() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <>
      <section ref={ref} className="px-6 lg:px-14 pt-40 pb-12">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-eyebrow text-konecta-orange">About Us</div>
          <h1 className="font-heading font-extrabold text-konecta-white mt-4 leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            About Konecta
          </h1>
          <p className="text-base text-konecta-muted mt-6 max-w-2xl leading-relaxed">
            Africa&apos;s premier telecoms and technology consultancy â€” Level 1 B-BBEE certified, 100% women-owned, and a trusted Microsoft Partner.
          </p>
        </div>
      </section>
      <Leadership />
      <AfricaPresence />
      <WiTechAfricaBand />
      <PartnersSection />
      <CTASection />
    </>
  );
}
