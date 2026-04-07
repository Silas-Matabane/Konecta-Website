import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import SEO from "@components/common/SEO";
import SectionEyebrow from "@components/common/SectionEyebrow";
import useInView from "@hooks/useInView";
import MicrosoftLogo from "@components/common/MicrosoftLogo";
import { eventsDatabase } from "@data/eventsData";

/* ── helpers ── */
function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
function formatDateRange(start, end) {
  if (start === end) return formatDate(start);
  const s = new Date(start + "T00:00:00");
  const e = new Date(end + "T00:00:00");
  if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()) {
    return `${s.getDate()} – ${e.getDate()} ${e.toLocaleDateString("en-ZA", { month: "long", year: "numeric" })}`;
  }
  return `${formatDate(start)} – ${formatDate(end)}`;
}
function daysUntil(iso) {
  return Math.ceil(
    (new Date(iso + "T00:00:00") - new Date()) / (1000 * 60 * 60 * 24),
  );
}

const SESSION_COLORS = {
  keynote: "border-konecta-orange/60 bg-konecta-orange/5",
  panel: "border-blue-400/40 bg-blue-400/5",
  workshop: "border-emerald-400/40 bg-emerald-400/5",
  fireside: "border-purple-400/40 bg-purple-400/5",
  networking: "border-konecta-gold/40 bg-konecta-gold/5",
  break: "border-white/10 bg-white/[0.02]",
};

/* ── Countdown Hook ── */
function useCountdown(isoDate) {
  const [timeLeft, setTimeLeft] = useState(() => calcRemaining(isoDate));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcRemaining(isoDate)), 1000);
    return () => clearInterval(id);
  }, [isoDate]);

  return timeLeft;
}

function calcRemaining(iso) {
  const diff = Math.max(0, new Date(iso + "T00:00:00") - new Date());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
    total: diff,
  };
}

/* ── Hero Section ── */
function HeroSection({ event }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const isUpcoming = event.status === "upcoming";
  const days = daysUntil(event.dateStart);
  const countdown = useCountdown(event.dateStart);

  return (
    <section
      ref={ref}
      className="relative min-h-[60vh] flex items-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-konecta-black via-konecta-black/70 to-konecta-black/30" />
      </div>

      <div
        className={`relative z-10 w-full px-6 lg:px-14 pb-14 pt-40 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-konecta-orange transition-colors mb-6"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Events
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.65rem] font-heading font-bold uppercase tracking-wider backdrop-blur-sm ${
              isUpcoming
                ? "bg-konecta-orange/20 text-konecta-orange border border-konecta-orange/30"
                : "bg-white/10 text-white/70 border border-white/10"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${isUpcoming ? "bg-konecta-orange animate-pulse" : "bg-white/50"}`}
            />
            {isUpcoming ? "Upcoming" : "Past Event"}
          </span>
          <span className="px-2.5 py-0.5 rounded-md bg-konecta-orange/10 text-konecta-orange text-xs font-heading font-bold tracking-wider uppercase">
            {event.badge}
          </span>
        </div>

        <h1
          className="font-heading font-extrabold text-konecta-white leading-[1.05]"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          {event.name}
        </h1>
        <p className="text-lg text-white/60 font-heading font-semibold mt-2">
          {event.tagline}
        </p>

        {/* Quick meta */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-konecta-orange/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {formatDateRange(event.dateStart, event.dateEnd)}
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-konecta-orange/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {event.venue}, {event.city}
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-konecta-orange/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {event.time}
          </div>
        </div>

        {isUpcoming && countdown.total > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {[
              { value: countdown.days, label: "Days" },
              { value: countdown.hours, label: "Hours" },
              { value: countdown.minutes, label: "Min" },
              { value: countdown.seconds, label: "Sec" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center w-[4.5rem] h-[4.5rem] rounded-xl bg-konecta-orange/10 border border-konecta-orange/20 backdrop-blur-sm"
              >
                <span className="font-heading font-extrabold text-2xl bg-gradient-to-b from-konecta-orange to-konecta-gold bg-clip-text text-transparent leading-none">
                  {String(value).padStart(2, "0")}
                </span>
                <span className="text-[0.55rem] uppercase tracking-wider text-white/50 font-heading font-bold mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ── Info Sidebar ── */
function InfoSidebar({ event }) {
  const isUpcoming = event.status === "upcoming";

  return (
    <div className="glass-card p-6 lg:p-8 sticky top-28 space-y-6">
      {/* Buy Tickets CTA */}
      {isUpcoming && event.ticketUrl && (
        <a
          href={event.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-konecta-orange hover:bg-konecta-orange/90 text-white font-heading font-bold px-6 py-3.5 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(244,129,32,0.3)]"
        >
          Buy Tickets →
        </a>
      )}

      {/* Details */}
      <div className="space-y-4">
        <div>
          <div className="text-xs uppercase tracking-wider text-white/40 font-heading font-bold mb-1">
            Date
          </div>
          <div className="text-base text-konecta-white">
            {formatDateRange(event.dateStart, event.dateEnd)}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-white/40 font-heading font-bold mb-1">
            Time
          </div>
          <div className="text-base text-konecta-white">{event.time}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-white/40 font-heading font-bold mb-1">
            Venue
          </div>
          <div className="text-base text-konecta-white">{event.venue}</div>
          <div className="text-sm text-white/50 mt-0.5">{event.address}</div>
          {event.mapUrl && (
            <a
              href={event.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-konecta-orange hover:underline mt-1 inline-block"
            >
              View on Google Maps →
            </a>
          )}
        </div>
        {event.capacity && (
          <div>
            <div className="text-xs uppercase tracking-wider text-white/40 font-heading font-bold mb-1">
              Capacity
            </div>
            <div className="text-base text-konecta-white">
              {event.capacity} attendees
            </div>
          </div>
        )}
        {event.attendeeProfile && (
          <div>
            <div className="text-xs uppercase tracking-wider text-white/40 font-heading font-bold mb-1">
              Who Attends
            </div>
            <div className="text-sm text-white/60 leading-relaxed">
              {event.attendeeProfile}
            </div>
          </div>
        )}
        {isUpcoming && event.registrationDeadline && (
          <div>
            <div className="text-xs uppercase tracking-wider text-white/40 font-heading font-bold mb-1">
              Registration Deadline
            </div>
            <div className="text-base text-konecta-orange font-semibold">
              {formatDate(event.registrationDeadline)}
            </div>
          </div>
        )}
      </div>

      {/* Sponsors */}
      {event.sponsors?.length > 0 && (
        <div>
          <div className="text-xs uppercase tracking-wider text-white/40 font-heading font-bold mb-2">
            Sponsors & Partners
          </div>
          <div className="flex flex-wrap gap-2">
            {event.sponsors.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[0.65rem] text-white/60"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {event.tags?.length > 0 && (
        <div>
          <div className="text-xs uppercase tracking-wider text-white/40 font-heading font-bold mb-2">
            Topics
          </div>
          <div className="flex flex-wrap gap-1.5">
            {event.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full bg-konecta-orange/10 text-konecta-orange text-xs font-heading font-bold tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Description ── */
function DescriptionSection({ event }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <h2 className="font-heading font-extrabold text-xl text-konecta-white mb-4">
        About This Event
      </h2>
      {event.longDescription.split("\n\n").map((para, i) => (
        <p key={i} className="text-white/70 leading-relaxed mb-4">
          {para}
        </p>
      ))}

      {/* Highlights */}
      {event.highlights?.length > 0 && (
        <div className="mt-8">
          <h3 className="font-heading font-bold text-lg text-konecta-white mb-4">
            Key Highlights
          </h3>
          <ul className="space-y-2.5">
            {event.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-white/70">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-konecta-orange shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ── Speakers ── */
function SpeakersSection({ speakers }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  if (!speakers?.length) return null;

  return (
    <div
      ref={ref}
      className={`mt-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <h2 className="font-heading font-extrabold text-xl text-konecta-white mb-6">
        Featured Speakers
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {speakers.map((s) => (
          <div
            key={s.name}
            className="glass-card p-4 text-center group hover:border-konecta-orange/20 transition-colors"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-3 ring-2 ring-white/10 group-hover:ring-konecta-orange/30 transition-all">
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="font-heading font-bold text-base text-konecta-white">
              {s.name}
            </div>
            <div className="text-xs text-white/50 mt-0.5 leading-tight">
              {s.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Partners & Sponsors ── */
function PartnersSection({ sponsors }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  if (!sponsors?.length) return null;

  const toSlug = (name) =>
    name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  const doubled = [...sponsors, ...sponsors];

  return (
    <div
      ref={ref}
      className={`mt-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <h2 className="font-heading font-extrabold text-xl text-konecta-white mb-6">
        Partners & Sponsors
      </h2>
      <div className="overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-konecta-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-konecta-black to-transparent z-10" />

        <div className="flex gap-10 items-center animate-marquee">
          {doubled.map((name, i) =>
            name === "Microsoft" ? (
              <div
                key={`${name}-${i}`}
                className="flex-shrink-0 flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity"
              >
                <MicrosoftLogo size={40} />
                <span className="font-heading font-bold text-2xl sm:text-3xl text-white/90 whitespace-nowrap">
                  Microsoft
                </span>
              </div>
            ) : (
              <div
                key={`${name}-${i}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={`/images/sponsors/${toSlug(name)}.png`}
                  alt={name}
                  className="h-24 sm:h-32 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <span className="font-heading font-bold text-sm text-white/70 hover:text-konecta-orange transition-colors text-center hidden whitespace-nowrap">
                  {name}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Agenda ── */
function AgendaSection({ agenda }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  if (!agenda?.length) return null;

  return (
    <div
      ref={ref}
      className={`mt-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <h2 className="font-heading font-extrabold text-xl text-konecta-white mb-6">
        Event Agenda
      </h2>
      <div className="space-y-8">
        {agenda.map((day) => (
          <div key={day.day}>
            <h3 className="font-heading font-bold text-base text-konecta-orange mb-4">
              {day.day}
            </h3>
            <div className="space-y-2">
              {day.sessions.map((session, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-3.5 rounded-xl border-l-2 ${SESSION_COLORS[session.type] || SESSION_COLORS.break}`}
                >
                  <div className="text-xs text-white/50 font-mono w-28 shrink-0 pt-0.5">
                    {session.time}
                  </div>
                  <div>
                    <div className="text-sm text-konecta-white font-medium">
                      {session.title}
                    </div>
                    {session.description && (
                      <div className="text-xs text-white/50 mt-1 leading-relaxed">
                        {session.description}
                      </div>
                    )}
                    <div className="text-xs text-white/40 uppercase tracking-wider mt-0.5">
                      {session.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Tickets ── */
function TicketsSection({ event }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const isUpcoming = event.status === "upcoming";
  if (!event.tickets?.length) return null;

  return (
    <div
      ref={ref}
      className={`mt-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <h2 className="font-heading font-extrabold text-xl text-konecta-white mb-6">
        {isUpcoming ? "Ticket Options" : "Pricing (Event Ended)"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {event.tickets.map((t) => (
          <div
            key={t.tier}
            className="glass-card p-6 hover:border-konecta-orange/20 transition-colors"
          >
            <div className="flex items-baseline justify-between mb-3">
              <h4 className="font-heading font-bold text-base text-konecta-white">
                {t.tier}
              </h4>
              <span className="font-heading font-extrabold text-lg text-konecta-orange">
                {t.price}
              </span>
            </div>
            <ul className="space-y-1.5 mb-4">
              {t.perks.map((p, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-xs text-white/60"
                >
                  <svg
                    className="w-3 h-3 text-konecta-orange/70 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
            {isUpcoming && t.available && event.ticketUrl && (
              <a
                href={event.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xs font-heading font-bold text-konecta-orange border border-konecta-orange/30 hover:bg-konecta-orange/10 rounded-lg py-2 transition-colors"
              >
                Select {t.tier} →
              </a>
            )}
            {!t.available && (
              <div className="text-center text-xs text-white/30 font-heading font-bold py-2">
                Sold Out
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Gallery ── */
function GallerySection({ gallery, name }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  if (!gallery?.length) return null;

  return (
    <div
      ref={ref}
      className={`mt-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <h2 className="font-heading font-extrabold text-xl text-konecta-white mb-6">
        Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {gallery.map((src, i) => (
          <div key={i} className="rounded-xl overflow-hidden aspect-video">
            <img
              src={src}
              alt={`${name} gallery ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Related Events ── */
function RelatedEvents({ current }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const related = eventsDatabase
    .filter(
      (e) =>
        e.id !== current.id &&
        (e.category === current.category || e.status === "upcoming"),
    )
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <section
      ref={ref}
      className={`px-6 lg:px-14 pb-section transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <h2 className="font-heading font-extrabold text-xl text-konecta-white mb-6">
        More Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {related.map((e) => (
          <Link
            key={e.id}
            to={`/events/${e.slug}`}
            className="glass-card overflow-hidden group hover:border-konecta-orange/20 transition-colors"
          >
            <div className="relative h-40">
              <img
                src={e.image}
                alt={e.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-konecta-black via-konecta-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="font-heading font-bold text-sm text-konecta-white">
                  {e.name}
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="text-xs text-white/50 mb-2">
                {new Date(e.dateStart + "T00:00:00").toLocaleDateString(
                  "en-ZA",
                  { day: "numeric", month: "short", year: "numeric" },
                )}{" "}
                · {e.city}
              </div>
              <span className="text-xs text-konecta-orange font-heading font-bold group-hover:translate-x-1 inline-block transition-transform">
                View Details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ── 404 state ── */
function EventNotFound() {
  return (
    <section className="px-6 lg:px-14 pt-40 pb-section text-center">
      <div className="text-5xl mb-6 opacity-30">🔗</div>
      <h1 className="font-heading font-extrabold text-3xl text-konecta-white mb-3">
        Event Not Found
      </h1>
      <p className="text-sm text-white/50 mb-8">
        The event you&apos;re looking for doesn&apos;t exist or has been
        removed.
      </p>
      <Link
        to="/events"
        className="inline-flex items-center gap-2 px-6 py-3 bg-konecta-orange text-white font-heading font-bold rounded-xl hover:bg-konecta-orange/90 transition-all"
      >
        ← Browse All Events
      </Link>
    </section>
  );
}

/* ── Main Page ── */
export default function EventDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const event = eventsDatabase.find((e) => e.slug === slug);

  if (!event) return <EventNotFound />;

  return (
    <>
      <SEO
        title={`${event.name} | Konecta Events`}
        description={event.description}
        path={`/events/${event.slug}`}
      />

      <HeroSection event={event} />

      {/* Content + Sidebar */}
      <section className="px-6 lg:px-14 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            <DescriptionSection event={event} />
            <PartnersSection sponsors={event.sponsors} />
            <SpeakersSection speakers={event.speakers} />
            <AgendaSection agenda={event.agenda} />
            <TicketsSection event={event} />
            <GallerySection gallery={event.gallery} name={event.name} />
          </div>

          {/* Sidebar */}
          <div className="lg:w-[340px] shrink-0">
            <InfoSidebar event={event} />
          </div>
        </div>
      </section>

      <RelatedEvents current={event} />
    </>
  );
}
