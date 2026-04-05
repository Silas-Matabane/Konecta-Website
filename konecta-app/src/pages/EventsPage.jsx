import { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@components/common/SEO";
import SectionEyebrow from "@components/common/SectionEyebrow";
import useInView from "@hooks/useInView";
import { PAGE_SEO } from "@data/constants";
import {
  eventsDatabase,
  EVENT_CATEGORIES,
  EVENT_SECTORS,
  EVENT_LOCATIONS,
} from "@data/eventsData";

/* ── helpers ── */
function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatDateRange(start, end) {
  if (start === end) return formatDate(start);
  const s = new Date(start + "T00:00:00");
  const e = new Date(end + "T00:00:00");
  if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()) {
    return `${s.getDate()} – ${e.getDate()} ${e.toLocaleDateString("en-ZA", { month: "short", year: "numeric" })}`;
  }
  return `${formatDate(start)} – ${formatDate(end)}`;
}

function daysUntil(iso) {
  return Math.ceil(
    (new Date(iso + "T00:00:00") - new Date()) / (1000 * 60 * 60 * 24),
  );
}

/* ── EventCard ── */
function EventCard({ event, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const isUpcoming = event.status === "upcoming";
  const days = daysUntil(event.dateStart);

  return (
    <Link
      to={`/events/${event.slug}`}
      ref={ref}
      className={`group glass-card overflow-hidden hover:border-konecta-orange/30 transition-all duration-700 flex flex-col ${
        event.featured ? "md:col-span-2 md:flex-row" : ""
      } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          event.featured
            ? "md:w-1/2 min-h-[240px] md:min-h-full"
            : "min-h-[200px]"
        }`}
      >
        <img
          src={event.image}
          alt={event.name}
          loading="lazy"
          className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-konecta-black via-konecta-black/60 to-transparent" />

        {/* Status badge */}
        <div className="absolute top-4 left-4">
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
        </div>

        {/* Days countdown */}
        {isUpcoming && days > 0 && (
          <div className="absolute top-4 right-4 bg-konecta-black/80 backdrop-blur-sm border border-konecta-orange/20 rounded-lg px-3 py-1.5 text-center">
            <div className="font-heading font-extrabold text-konecta-orange text-lg leading-none">
              {days}
            </div>
            <div className="text-[0.55rem] text-white/60 uppercase tracking-wider">
              days to go
            </div>
          </div>
        )}

        {/* Title overlay (non-featured) */}
        {!event.featured && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="font-heading font-extrabold text-xl text-konecta-white tracking-tight leading-tight">
              {event.name}
            </div>
          </div>
        )}
      </div>

      {/* Body */}
      <div
        className={`p-6 lg:p-8 flex flex-col flex-1 ${event.featured ? "md:w-1/2" : ""}`}
      >
        {event.featured && (
          <div className="font-heading font-extrabold text-2xl lg:text-3xl text-konecta-white tracking-tight leading-tight mb-3">
            {event.name}
          </div>
        )}

        <div className="inline-flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-md bg-konecta-orange/10 text-konecta-orange text-xs font-heading font-bold tracking-wider uppercase">
            {event.badge}
          </span>
        </div>

        <p className="text-base text-white/70 leading-relaxed mb-5 line-clamp-3">
          {event.description}
        </p>

        {/* Meta row */}
        <div className="mt-auto space-y-2 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <svg
              className="w-3.5 h-3.5 text-konecta-orange/70 shrink-0"
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
            <span className="text-white/80">
              {formatDateRange(event.dateStart, event.dateEnd)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-3.5 h-3.5 text-konecta-orange/70 shrink-0"
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
            <span>
              {event.venue}, {event.city}
            </span>
          </div>
          {event.capacity && (
            <div className="flex items-center gap-2">
              <svg
                className="w-3.5 h-3.5 text-konecta-orange/70 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{event.capacity} attendees</span>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-5 flex items-center gap-3">
          <span className="text-konecta-orange text-base font-heading font-bold group-hover:translate-x-1 transition-transform">
            {isUpcoming ? "View Details & Tickets" : "View Recap"} →
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── Custom Dropdown (fully styled, no native <select>) ── */
function Dropdown({ value, onChange, options, className = "" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const selected = options.find((o) => (o.value ?? o) === value);
  const label = selected?.label ?? selected ?? value;

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between gap-2 bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-2.5 text-sm text-konecta-white outline-none focus:border-konecta-orange/50 transition-all"
      >
        <span className="truncate">{label}</span>
        <svg
          className={`w-4 h-4 shrink-0 text-white/60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <ul className="absolute z-50 mt-1.5 w-full min-w-[160px] max-h-[280px] overflow-y-auto rounded-xl border border-white/10 bg-konecta-black/95 backdrop-blur-xl shadow-2xl py-1">
          {options.map((opt) => {
            const v = opt.value ?? opt;
            const l = opt.label ?? opt;
            const isActive = v === value;
            return (
              <li key={v}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(v);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-konecta-orange/20 text-konecta-orange"
                      : "text-white/70 hover:bg-konecta-orange/10 hover:text-konecta-orange"
                  }`}
                >
                  {l}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/* ── Filter Bar ── */
function FilterBar({
  search,
  onSearch,
  statusFilter,
  onStatus,
  category,
  onCategory,
  sector,
  onSector,
  location,
  onLocation,
  sortBy,
  onSort,
  resultCount,
}) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative z-20 mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {/* Search */}
      <div className="relative mb-5">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search events by name, topic, or location..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-2.5 text-sm text-konecta-white outline-none focus:border-konecta-orange/50 transition-all w-full pl-11"
        />
      </div>

      {/* Filters row */}
      <div className="flex flex-wrap gap-3 items-center">
        {/* Status toggles */}
        <div className="flex rounded-xl overflow-hidden border border-white/10">
          {[
            { value: "all", label: "All" },
            { value: "upcoming", label: "Upcoming" },
            { value: "past", label: "Past" },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => onStatus(opt.value)}
              className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                statusFilter === opt.value
                  ? "bg-konecta-orange text-white"
                  : "bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <Dropdown
          value={category}
          onChange={onCategory}
          options={EVENT_CATEGORIES}
          className="min-w-[160px]"
        />

        <Dropdown
          value={sector}
          onChange={onSector}
          options={EVENT_SECTORS}
          className="min-w-[140px]"
        />

        <Dropdown
          value={location}
          onChange={onLocation}
          options={EVENT_LOCATIONS}
          className="min-w-[140px]"
        />

        <Dropdown
          value={sortBy}
          onChange={onSort}
          options={[
            { value: "date-asc", label: "Date ↑ (Soonest)" },
            { value: "date-desc", label: "Date ↓ (Latest)" },
            { value: "name-asc", label: "Name A–Z" },
            { value: "name-desc", label: "Name Z–A" },
          ]}
          className="min-w-[160px]"
        />

        <div className="ml-auto text-xs text-white/40">
          {resultCount} event{resultCount !== 1 ? "s" : ""}
        </div>
      </div>
    </div>
  );
}

/* ── Main Page ── */
export default function EventsPage() {
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("upcoming");
  const [category, setCategory] = useState("all");
  const [sector, setSector] = useState("all");
  const [location, setLocation] = useState("all");
  const [sortBy, setSortBy] = useState("date-asc");

  const filtered = useMemo(() => {
    let result = [...eventsDatabase];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.city.toLowerCase().includes(q) ||
          e.venue.toLowerCase().includes(q) ||
          e.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }

    if (statusFilter !== "all") {
      result = result.filter((e) => e.status === statusFilter);
    }
    if (category !== "all") {
      result = result.filter((e) => e.category === category);
    }
    if (sector !== "all") {
      result = result.filter((e) => e.sector === sector);
    }
    if (location !== "all") {
      result = result.filter((e) => e.city === location);
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case "date-asc":
          return a.dateStart.localeCompare(b.dateStart);
        case "date-desc":
          return b.dateStart.localeCompare(a.dateStart);
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return result;
  }, [search, statusFilter, category, sector, location, sortBy]);

  return (
    <>
      <SEO
        title={PAGE_SEO.events.title}
        description={PAGE_SEO.events.description}
        path="/events"
      />

      {/* Hero header */}
      <section
        ref={headerRef}
        className="relative px-6 lg:px-14 pt-40 pb-10 overflow-hidden"
      >
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-konecta-orange/[0.03] blur-[150px] rounded-full pointer-events-none" />

        <div
          className={`relative z-10 transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <SectionEyebrow text="Events" />
          <h1
            className="font-heading font-extrabold text-konecta-white mt-4 leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Convening Africa&apos;s
            <br />
            <span className="text-gradient-orange">Technology Leaders</span>
          </h1>
          <p className="text-base text-white/70 mt-6 max-w-2xl leading-relaxed">
            From flagship summits to intimate executive dinners, Konecta creates
            the platforms where Africa&apos;s most influential technology
            leaders connect, collaborate, and shape the future of digital
            infrastructure.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="relative px-6 lg:px-14 pb-section">
        <FilterBar
          search={search}
          onSearch={setSearch}
          statusFilter={statusFilter}
          onStatus={setStatusFilter}
          category={category}
          onCategory={setCategory}
          sector={sector}
          onSector={setSector}
          location={location}
          onLocation={setLocation}
          sortBy={sortBy}
          onSort={setSortBy}
          resultCount={filtered.length}
        />

        {filtered.length > 0 ? (
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((ev, i) => (
              <EventCard key={ev.id} event={ev} index={i} />
            ))}
          </div>
        ) : (
          <div className="relative z-10 text-center py-20">
            <div className="text-4xl mb-4 opacity-30">🔍</div>
            <h3 className="font-heading font-bold text-xl text-konecta-white mb-2">
              No events found
            </h3>
            <p className="text-sm text-white/50">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
