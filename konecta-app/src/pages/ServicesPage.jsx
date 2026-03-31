import ServicesGrid from '@components/sections/ServicesGrid';
import CTASection from '@components/common/CTASection';
import useInView from '@hooks/useInView';

export default function ServicesPage() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <>
      <section ref={ref} className="px-6 lg:px-14 pt-40 pb-12">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-eyebrow text-konecta-orange">What We Do</div>
          <h1 className="font-heading font-extrabold text-konecta-white mt-4 leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            Our Services
          </h1>
          <p className="text-base text-konecta-muted mt-6 max-w-2xl leading-relaxed">
            Six pillars of telecoms and technology excellence â€” from network deployment to AI adoption, designed to drive measurable business outcomes across Africa.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <CTASection />
    </>
  );
}
