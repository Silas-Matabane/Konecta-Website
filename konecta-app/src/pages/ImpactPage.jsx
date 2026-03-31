import ImpactSection from '@components/sections/ImpactSection';
import Testimonials from '@components/sections/Testimonials';
import CTASection from '@components/common/CTASection';
import useInView from '@hooks/useInView';

export default function ImpactPage() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <>
      <section ref={ref} className="px-6 lg:px-14 pt-40 pb-12">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-eyebrow text-konecta-orange">Our Impact</div>
          <h1 className="font-heading font-extrabold text-konecta-white mt-4 leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            Impact &amp;<br />Case Studies
          </h1>
          <p className="text-base text-konecta-muted mt-6 max-w-2xl leading-relaxed">
            Real projects. Measurable results. See how Konecta delivers transformative outcomes for Africa&apos;s leading organisations.
          </p>
        </div>
      </section>
      <ImpactSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
