import useInView from "@hooks/useInView";

export default function PageHeader({
  eyebrow,
  eyebrowColor = "text-konecta-orange",
  title,
  description,
}) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="content-px pt-40 pb-12">
      <div
        className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className={`section-eyebrow ${eyebrowColor}`}>{eyebrow}</div>
        <h1
          className="font-heading font-extrabold text-konecta-white mt-4 leading-[1.05]"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-base text-konecta-muted mt-6 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
