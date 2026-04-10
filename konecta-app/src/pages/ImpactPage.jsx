import { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@components/common/SEO";
import SectionEyebrow from "@components/common/SectionEyebrow";
import ThemedIcon from "@components/common/ThemedIcon";
import CTASection from "@components/common/CTASection";
import useInView from "@hooks/useInView";
import { PAGE_SEO } from "@data/constants";
import {
  impactProjectsDatabase,
  newsDatabase,
  IMPACT_CATEGORIES,
  IMPACT_YEARS,
  NEWS_CATEGORIES,
  NEWS_SOURCES,
  searchItems,
  filterByCategory,
  filterByYear,
  filterBySource,
  sortItems,
} from "@data/impactData";

/* ── Tabs ── */
const TABS = [
  { key: "impact", label: "Impact Projects" },
  { key: "events", label: "Events" },
  { key: "news", label: "News" },
];

/* ── Custom Dropdown ── */
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

/* ── Impact Project Card ── */
function ImpactCard({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <Link
      to={`/impact/${item.slug}`}
      ref={ref}
      className={`group glass-card overflow-hidden hover:border-konecta-orange/30 transition-all duration-700 flex flex-col ${
        item.featured ? "md:col-span-2 md:flex-row" : ""
      } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${item.featured ? "md:w-1/2 min-h-[240px] md:min-h-full" : "min-h-[200px]"}`}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover object-[center_20%] absolute inset-0 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-konecta-black via-konecta-black/60 to-transparent" />

        {item.badge && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.65rem] font-heading font-bold uppercase tracking-wider backdrop-blur-sm bg-konecta-orange/20 text-konecta-orange border border-konecta-orange/30">
              {item.badge}
            </span>
          </div>
        )}

        {item.metric && !item.featured && (
          <div className="absolute bottom-4 left-4">
            <div className="font-heading font-extrabold text-2xl text-konecta-orange leading-none">
              {item.metric}
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-0.5">
              {item.metricLabel}
            </div>
          </div>
        )}
      </div>

      {/* Body */}
      <div
        className={`p-6 lg:p-8 flex flex-col flex-1 ${item.featured ? "md:w-1/2" : ""}`}
      >
        {item.featured && item.metric && (
          <div className="mb-3">
            <div className="font-heading font-extrabold text-gradient-orange inline-block text-3xl">
              {item.metric}
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider">
              {item.metricLabel}
            </div>
          </div>
        )}

        <h3
          className={`font-heading font-extrabold text-konecta-white tracking-tight leading-tight mb-3 ${item.featured ? "text-2xl lg:text-3xl" : "text-lg"}`}
        >
          {item.shortTitle || item.title}
        </h3>

        <p className="text-base text-white/70 leading-relaxed mb-5 line-clamp-3">
          {item.description}
        </p>

        <div className="mt-auto space-y-2 text-sm text-white/60">
          {item.location && (
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
              <span>{item.location}</span>
            </div>
          )}
          {item.year && (
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
              <span>{item.year}</span>
            </div>
          )}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <span className="text-konecta-orange text-base font-heading font-bold group-hover:translate-x-1 transition-transform">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── News Card ── */
function NewsCard({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 });

  const inner = (
    <>
      <div
        className={`relative overflow-hidden ${item.featured ? "md:w-1/2 min-h-[220px] md:min-h-full" : "min-h-[180px]"}`}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover object-[center_20%] absolute inset-0 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-konecta-black via-konecta-black/60 to-transparent" />
        {item.sourceName && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.65rem] font-heading font-bold uppercase tracking-wider backdrop-blur-sm bg-white/10 text-white/80 border border-white/10">
              {item.sourceName}
            </span>
          </div>
        )}
      </div>

      <div
        className={`p-6 lg:p-8 flex flex-col flex-1 ${item.featured ? "md:w-1/2" : ""}`}
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-md bg-konecta-orange/10 text-konecta-orange text-xs font-heading font-bold tracking-wider uppercase">
            {NEWS_CATEGORIES.find((c) => c.value === item.category)?.label ||
              item.category}
          </span>
          {item.date && (
            <span className="text-xs text-white/40">{item.date}</span>
          )}
        </div>

        <h3
          className={`font-heading font-extrabold text-konecta-white tracking-tight leading-tight mb-3 ${item.featured ? "text-xl lg:text-2xl" : "text-lg"}`}
        >
          {item.title}
        </h3>

        <p className="text-base text-white/70 leading-relaxed mb-5 line-clamp-3">
          {item.excerpt || item.description}
        </p>

        {item.externalUrl && (
          <div className="mt-auto flex items-center gap-3">
            <span className="text-konecta-orange text-base font-heading font-bold group-hover:translate-x-1 transition-transform">
              Read Article →
            </span>
            <svg
              className="w-3.5 h-3.5 text-konecta-orange/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );

  const classes = `group glass-card overflow-hidden hover:border-konecta-orange/30 transition-all duration-700 flex flex-col ${
    item.featured ? "md:col-span-2 md:flex-row" : ""
  } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  if (item.externalUrl) {
    return (
      <a
        ref={ref}
        href={item.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        style={{ transitionDelay: `${(index % 6) * 80}ms` }}
      >
        {inner}
      </a>
    );
  }

  return (
    <div
      ref={ref}
      className={classes}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      {inner}
    </div>
  );
}

/* ── Events Card ── */
function EventMiniCard({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <Link
      to={`/impact/${item.slug}`}
      ref={ref}
      className={`group glass-card overflow-hidden hover:border-konecta-orange/30 transition-all duration-700 flex flex-col ${
        item.featured ? "md:col-span-2 md:flex-row" : ""
      } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      <div
        className={`relative overflow-hidden ${item.featured ? "md:w-1/2 min-h-[220px] md:min-h-full" : "min-h-[180px]"}`}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover object-[center_20%] absolute inset-0 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-konecta-black via-konecta-black/60 to-transparent" />
        {item.badge && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.65rem] font-heading font-bold uppercase tracking-wider backdrop-blur-sm bg-konecta-orange/20 text-konecta-orange border border-konecta-orange/30">
              {item.badge}
            </span>
          </div>
        )}
        {!item.featured && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="font-heading font-extrabold text-xl text-konecta-white tracking-tight leading-tight">
              {item.shortTitle || item.title}
            </div>
          </div>
        )}
      </div>

      <div
        className={`p-6 lg:p-8 flex flex-col flex-1 ${item.featured ? "md:w-1/2" : ""}`}
      >
        {item.featured && (
          <h3 className="font-heading font-extrabold text-2xl lg:text-3xl text-konecta-white tracking-tight leading-tight mb-3">
            {item.shortTitle || item.title}
          </h3>
        )}
        <p className="text-base text-white/70 leading-relaxed mb-5 line-clamp-3">
          {item.description}
        </p>
        <div className="mt-auto space-y-2 text-sm text-white/60">
          {item.location && (
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
              <span>{item.location}</span>
            </div>
          )}
        </div>
        <div className="mt-5 flex items-center gap-3">
          <span className="text-konecta-orange text-base font-heading font-bold group-hover:translate-x-1 transition-transform">
            View Event Recap →
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── Empty State ── */
function EmptyState({ type }) {
  return (
    <div className="relative z-10 text-center py-20">
      <ThemedIcon name="search" size={40} className="mb-4 opacity-30" />
      <h3 className="font-heading font-bold text-xl text-konecta-white mb-2">
        No {type} found
      </h3>
      <p className="text-sm text-white/50">
        Try adjusting your search or filters to find what you&apos;re looking
        for.
      </p>
    </div>
  );
}

/* ── Stats Band ── */
function StatsBand() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const stats = [
    { value: "10+", label: "Events Hosted" },
    { value: "2,000+", label: "Leaders Convened" },
    { value: "6", label: "News Features" },
    { value: "5", label: "Industries Impacted" },
  ];

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="glass-card p-6 text-center"
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <div className="font-heading font-extrabold text-gradient-orange text-3xl lg:text-4xl">
            {stat.value}
          </div>
          <div className="text-xs text-white/60 uppercase tracking-wider mt-2">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Main Page ── */
export default function ImpactPage() {
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });

  const [activeTab, setActiveTab] = useState("impact");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [year, setYear] = useState("all");
  const [source, setSource] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearch("");
    setCategory("all");
    setYear("all");
    setSource("all");
    setSortBy("newest");
  };

  /* Filtered Impact Projects */
  const filteredImpact = useMemo(() => {
    let items = [...impactProjectsDatabase];
    items = searchItems(items, search);
    items = filterByCategory(items, category);
    items = filterByYear(items, year);
    return sortItems(items, sortBy);
  }, [search, category, year, sortBy]);

  /* Filtered Events (event-hosted type only) */
  const filteredEvents = useMemo(() => {
    let items = impactProjectsDatabase.filter((p) => p.type === "event-hosted");
    items = searchItems(items, search);
    items = filterByCategory(items, category);
    items = filterByYear(items, year);
    return sortItems(items, sortBy);
  }, [search, category, year, sortBy]);

  /* Filtered News */
  const filteredNews = useMemo(() => {
    let items = [...newsDatabase];
    items = searchItems(items, search);
    if (category !== "all")
      items = items.filter((n) => n.category === category);
    items = filterBySource(items, source);
    items = filterByYear(items, year);
    return sortItems(items, sortBy);
  }, [search, category, source, year, sortBy]);

  const currentItems =
    activeTab === "impact"
      ? filteredImpact
      : activeTab === "events"
        ? filteredEvents
        : filteredNews;
  const categoryOptions =
    activeTab === "news" ? NEWS_CATEGORIES : IMPACT_CATEGORIES;

  return (
    <>
      <SEO
        title={PAGE_SEO.impact.title}
        description={PAGE_SEO.impact.description}
        path="/impact"
      />

      {/* Hero */}
      <section
        ref={headerRef}
        className="relative px-6 lg:px-14 pt-40 pb-10 overflow-hidden"
      >
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-konecta-orange/[0.03] blur-[150px] rounded-full pointer-events-none" />
        <div
          className={`relative z-10 transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <SectionEyebrow text="Our Impact" />
          <h1
            className="font-heading font-extrabold text-konecta-white mt-4 leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Impact
            <br />
            <span className="text-gradient-orange">&amp; News</span>
          </h1>
          <p className="text-base text-white/70 mt-6 max-w-2xl leading-relaxed">
            From transformative projects and flagship events to media features —
            explore how Konecta is driving measurable change across
            Africa&apos;s technology landscape.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative px-6 lg:px-14">
        <StatsBand />
      </section>

      {/* Tabs + Content */}
      <section className="relative px-6 lg:px-14 pb-section">
        {/* Tab Pills */}
        <div className="flex gap-1 mb-8 rounded-xl overflow-hidden border border-white/10 w-fit">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`px-6 py-3 text-sm font-heading font-bold uppercase tracking-wider transition-all ${
                activeTab === tab.key
                  ? "bg-konecta-orange text-white"
                  : "bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

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
            placeholder={
              activeTab === "news"
                ? "Search news by title, source, or topic..."
                : "Search by title, location, or topic..."
            }
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-2.5 text-sm text-konecta-white outline-none focus:border-konecta-orange/50 transition-all w-full pl-11"
          />
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap gap-3 items-center mb-12">
          <Dropdown
            value={category}
            onChange={setCategory}
            options={categoryOptions}
            className="min-w-[170px]"
          />
          <Dropdown
            value={year}
            onChange={setYear}
            options={IMPACT_YEARS}
            className="min-w-[120px]"
          />
          {activeTab === "news" && (
            <Dropdown
              value={source}
              onChange={setSource}
              options={NEWS_SOURCES}
              className="min-w-[150px]"
            />
          )}
          <Dropdown
            value={sortBy}
            onChange={setSortBy}
            options={[
              { value: "newest", label: "Newest First" },
              { value: "oldest", label: "Oldest First" },
              { value: "featured", label: "Featured" },
            ]}
            className="min-w-[150px]"
          />
          <div className="ml-auto text-xs text-white/40">
            {currentItems.length} result{currentItems.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Cards Grid */}
        {currentItems.length > 0 ? (
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {activeTab === "impact" &&
              filteredImpact.map((item, i) => (
                <ImpactCard key={item.id} item={item} index={i} />
              ))}
            {activeTab === "events" &&
              filteredEvents.map((item, i) => (
                <EventMiniCard key={item.id} item={item} index={i} />
              ))}
            {activeTab === "news" &&
              filteredNews.map((item, i) => (
                <NewsCard key={item.id} item={item} index={i} />
              ))}
          </div>
        ) : (
          <EmptyState type={activeTab === "news" ? "articles" : activeTab} />
        )}
      </section>

      <CTASection />
    </>
  );
}
