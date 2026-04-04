import { Link } from "react-router-dom";
import SectionEyebrow from "@components/common/SectionEyebrow";
import useInView from "@hooks/useInView";
import { events } from "@data/events";

function EventCard({ event, index }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const isFlagship = event.type === "flagship";

  return (
    <div
      ref={ref}
      className={`group glass-card overflow-hidden hover:border-konecta-orange/30 transition-all duration-700 ${
        isFlagship ? "md:col-span-2" : ""
      } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image area with real demo photo */}
      <div
        className={`relative ${isFlagship ? "min-h-[280px]" : "min-h-[200px]"} overflow-hidden`}
      >
        <img
          src={event.image}
          alt={event.name}
          loading="lazy"
          className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-konecta-black via-konecta-black/50 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div
            className={`font-heading font-extrabold ${isFlagship ? "text-3xl" : "text-xl"} text-konecta-white tracking-tight`}
          >
            {event.name}
          </div>
          <div className="text-xs text-white/75 mt-1 tracking-widest uppercase">
            {event.tagline}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-8 lg:p-10">
        <div className="inline-block px-3 py-1 rounded-md bg-konecta-orange/10 text-konecta-orange text-[0.6rem] font-heading font-bold tracking-wider uppercase mb-4">
          {event.badge}
        </div>
        <p className="text-base text-white/75 leading-relaxed mb-6">
          {event.description}
        </p>

        {event.meta && (
          <div className="flex flex-wrap gap-6 mb-6">
            {event.meta.map((m) => (
              <span key={m.text} className="text-sm text-white/80">
                {m.icon}{" "}
                <strong className="text-konecta-white">{m.text}</strong>
              </span>
            ))}
          </div>
        )}

        <Link to="/events" className="btn-secondary text-xs">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default function EventsSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative bg-konecta-black px-6 lg:px-14 py-section overflow-hidden"
      id="events"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-konecta-orange/[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* Header — split layout */}
      <div
        className={`relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-end transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div>
          <SectionEyebrow text="Industry Events" />
          <h2 className="section-title mt-4">
            Convening Africa&apos;s
            <br />
            <span className="text-gradient-orange">Technology Leaders</span>
          </h2>
        </div>
        <div className="lg:text-right">
          <p className="text-base text-white/75 leading-relaxed mb-4">
            Technology transformation does not happen in isolation. Konecta
            convenes some of Africa&apos;s most influential technology
            platforms, bringing together CIOs, telecom operators, policymakers,
            and technology innovators to shape the future of digital
            infrastructure across the continent.
          </p>
          <Link to="/events" className="btn-secondary">
            All Events
          </Link>
        </div>
      </div>

      {/* Events grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((ev, i) => (
          <EventCard key={ev.id} event={ev} index={i} />
        ))}
      </div>
    </section>
  );
}
