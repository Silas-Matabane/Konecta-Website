import Pipeline from '@components/sections/Pipeline';
import KaiSection from '@components/sections/KaiSection';
import CTASection from '@components/common/CTASection';
import useInView from '@hooks/useInView';

export default function PlatformPage() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <>
      <section ref={ref} className="px-6 lg:px-14 pt-40 pb-12">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-eyebrow text-konecta-orange">Our Platform</div>
          <h1 className="font-syne font-extrabold text-konecta-white mt-4 leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            Network → Platform →<br />Data → Revenue
          </h1>
          <p className="text-base text-konecta-muted mt-6 max-w-2xl leading-relaxed">
            Konecta&apos;s end-to-end value chain transforms raw connectivity infrastructure into intelligent platforms that generate big data, analytics, and value-added services.
          </p>
        </div>
      </section>
      <Pipeline />
      <KaiSection />
      <CTASection />
    </>
  );
}
