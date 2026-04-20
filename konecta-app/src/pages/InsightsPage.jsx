import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@components/common/SEO";
import SectionEyebrow from "@components/common/SectionEyebrow";
import useInView from "@hooks/useInView";
import { PAGE_SEO } from "@data/constants";
import {
  articlesDatabase,
  BLOG_CATEGORIES,
  SORT_OPTIONS,
  getAllTags,
  expandTags,
  enrichArticle,
  AUTHORS,
} from "@data/blogData";
import UseCasesSection from "@components/sections/UseCasesSection";

/* -----------------------------------------------------------
   UTILITIES
   ----------------------------------------------------------- */

function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function calcReadingTime(content) {
  if (!content) return "3 min";
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 220))} min`;
}

/* -----------------------------------------------------------
   FEATURED HERO CARD
   ----------------------------------------------------------- */

function FeaturedHero({ article }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const enriched = enrichArticle(article);

  return (
    <Link
      ref={ref}
      to={`/insights/${article.slug}`}
      className={`group relative block overflow-hidden rounded-2xl min-h-[420px] lg:min-h-[480px] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <img
        src={article.featuredImage}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-konecta-black via-konecta-black/60 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-konecta-orange/20 text-konecta-orange text-xs font-heading font-bold uppercase tracking-wider border border-konecta-orange/30">
            Featured
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-heading font-bold uppercase tracking-wider border border-white/10">
            {enriched.categoryLabel}
          </span>
        </div>

        <h2 className="font-heading font-extrabold text-2xl lg:text-4xl text-konecta-white leading-tight mb-4 max-w-3xl">
          {article.title}
        </h2>

        <p className="text-white/70 leading-relaxed mb-6 max-w-2xl line-clamp-2">
          {article.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
          <span className="flex items-center gap-2">
            <AuthorAvatar author={enriched.authorData} size="sm" />
            {enriched.authorData.name}
          </span>
          <span>{formatDate(article.publishDate)}</span>
          <span>{calcReadingTime(article.content)} read</span>
          <span className="flex items-center gap-1">
            <EyeIcon /> {article.views.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
}

/* -----------------------------------------------------------
   ARTICLE CARD
   ----------------------------------------------------------- */

function ArticleCard({ article, index }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const enriched = enrichArticle(article);

  return (
    <Link
      ref={ref}
      to={`/insights/${article.slug}`}
      className={`group glass-card overflow-hidden rounded-2xl flex flex-col transition-all duration-700 hover:border-konecta-orange/30 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-[200px]">
        <img
          src={article.featuredImage}
          alt={article.title}
          className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-konecta-black/60 to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-konecta-orange/15 text-konecta-orange text-xs font-heading font-bold tracking-wider uppercase backdrop-blur-sm">
          {enriched.categoryLabel}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-lg text-konecta-white leading-snug mb-3 group-hover:text-konecta-orange transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-white/60 leading-relaxed mb-4 line-clamp-2 flex-1">
          {article.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-white/40 pt-4 border-t border-white/5">
          <div className="flex items-center gap-3">
            <AuthorAvatar author={enriched.authorData} size="xs" />
            <span>{formatDate(article.publishDate)}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <EyeIcon className="w-3.5 h-3.5" />
              {article.views.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <HeartIcon className="w-3.5 h-3.5" />
              {article.likes}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* -----------------------------------------------------------
   SIDEBAR POPULAR CARD (compact)
   ----------------------------------------------------------- */

function PopularCard({ article, rank }) {
  return (
    <Link
      to={`/insights/${article.slug}`}
      className="group flex gap-4 items-start py-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] rounded-lg px-2 -mx-2 transition-colors"
    >
      <span className="font-heading font-extrabold text-2xl text-konecta-orange/30 mt-0.5 shrink-0 w-8 text-center">
        {rank}
      </span>
      <div className="flex-1 min-w-0">
        <h4 className="font-heading font-bold text-sm text-konecta-white leading-snug mb-1 group-hover:text-konecta-orange transition-colors line-clamp-2">
          {article.title}
        </h4>
        <div className="flex items-center gap-2 text-xs text-white/40">
          <span>{calcReadingTime(article.content)} read</span>
          <span>�</span>
          <span className="flex items-center gap-1">
            <EyeIcon className="w-3 h-3" />
            {article.views.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
}

/* -----------------------------------------------------------
   FILTER BAR
   ----------------------------------------------------------- */

function FilterBar({
  search,
  setSearch,
  activeCategory,
  setActiveCategory,
  sortBy,
  setSortBy,
  activeTags,
  toggleTag,
  activeAuthor,
  setActiveAuthor,
  featuredOnly,
  setFeaturedOnly,
  totalResults,
}) {
  const [showFilters, setShowFilters] = useState(false);
  const allTags = useMemo(() => getAllTags(), []);

  return (
    <div className="space-y-4 mb-10">
      {/* Search + Sort row */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 pl-11 text-konecta-white outline-none focus:border-konecta-orange/60 focus:bg-[rgba(255,255,255,0.05)] transition-all placeholder:text-white/25"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
            >
              <XIcon />
            </button>
          )}
        </div>

        {/* Sort dropdown */}
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />

        {/* Filters toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all font-heading font-bold text-sm ${
            showFilters
              ? "bg-konecta-orange/10 border-konecta-orange/30 text-konecta-orange"
              : "bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] text-white/60 hover:border-white/20"
          }`}
        >
          <FilterIcon />
          Filters
          {(activeTags.length > 0 || activeAuthor || featuredOnly) && (
            <span className="w-5 h-5 rounded-full bg-konecta-orange text-white text-xs flex items-center justify-center">
              {activeTags.length +
                (activeAuthor ? 1 : 0) +
                (featuredOnly ? 1 : 0)}
            </span>
          )}
        </button>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2">
        {BLOG_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm font-heading font-bold transition-all ${
              activeCategory === cat.id
                ? "bg-konecta-orange text-white"
                : "bg-[rgba(255,255,255,0.04)] text-white/60 hover:text-white/80 hover:bg-[rgba(255,255,255,0.08)] border border-white/5"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Expanded filters */}
      <div
        className={`overflow-hidden transition-all duration-500 ${showFilters ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="glass-card rounded-2xl p-6 space-y-5">
          {/* Tags */}
          <div>
            <div className="text-xs uppercase tracking-wider text-white/40 font-heading font-bold mb-3">
              Tags
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-xs font-heading font-bold tracking-wide transition-all ${
                    activeTags.includes(tag)
                      ? "bg-konecta-orange/20 text-konecta-orange border border-konecta-orange/30"
                      : "bg-white/[0.03] text-white/50 border border-white/5 hover:border-white/20"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Author + Featured row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wider text-white/40 font-heading font-bold mb-3">
                Author
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveAuthor(null)}
                  className={`px-3 py-1.5 rounded-full text-xs font-heading font-bold transition-all ${
                    !activeAuthor
                      ? "bg-konecta-orange/20 text-konecta-orange border border-konecta-orange/30"
                      : "bg-white/[0.03] text-white/50 border border-white/5 hover:border-white/20"
                  }`}
                >
                  All Authors
                </button>
                {AUTHORS.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setActiveAuthor(a.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-heading font-bold transition-all ${
                      activeAuthor === a.id
                        ? "bg-konecta-orange/20 text-konecta-orange border border-konecta-orange/30"
                        : "bg-white/[0.03] text-white/50 border border-white/5 hover:border-white/20"
                    }`}
                  >
                    {a.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-white/40 font-heading font-bold mb-3">
                Options
              </div>
              <button
                onClick={() => setFeaturedOnly(!featuredOnly)}
                className={`px-3 py-1.5 rounded-full text-xs font-heading font-bold transition-all ${
                  featuredOnly
                    ? "bg-konecta-orange/20 text-konecta-orange border border-konecta-orange/30"
                    : "bg-white/[0.03] text-white/50 border border-white/5 hover:border-white/20"
                }`}
              >
                ? Featured Only
              </button>
            </div>
          </div>

          {/* Clear all */}
          {(activeTags.length > 0 || activeAuthor || featuredOnly) && (
            <button
              onClick={() => {
                toggleTag(null);
                setActiveAuthor(null);
                setFeaturedOnly(false);
              }}
              className="text-xs text-konecta-orange hover:underline font-heading font-bold"
            >
              ? Clear all filters
            </button>
          )}
        </div>
      </div>

      {/* Result count */}
      <div className="text-sm text-white/40">
        {totalResults} {totalResults === 1 ? "article" : "articles"} found
        {search && (
          <span>
            {" "}
            for &ldquo;<span className="text-konecta-orange">{search}</span>
            &rdquo;
          </span>
        )}
      </div>
    </div>
  );
}

/* -----------------------------------------------------------
   SORT DROPDOWN
   ----------------------------------------------------------- */

function SortDropdown({ sortBy, setSortBy }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = SORT_OPTIONS.find((o) => o.id === sortBy) || SORT_OPTIONS[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-2 bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm text-konecta-white outline-none hover:border-white/20 transition-all min-w-[170px]"
      >
        <span className="text-white/60">{current.label}</span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-full bg-[#1a1f27] border border-white/10 rounded-xl shadow-2xl shadow-black/40 z-50 overflow-hidden">
          {SORT_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => {
                setSortBy(opt.id);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                sortBy === opt.id
                  ? "bg-konecta-orange/10 text-konecta-orange"
                  : "text-white/60 hover:bg-white/5 hover:text-white/80"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* -----------------------------------------------------------
   TAG CLOUD (sidebar)
   ----------------------------------------------------------- */

function TagCloud({ activeTags, toggleTag }) {
  const allTags = useMemo(() => getAllTags(), []);
  return (
    <div className="glass-card rounded-2xl p-6">
      <h3 className="font-heading font-bold text-base text-konecta-white mb-4">
        Topics
      </h3>
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1.5 rounded-full text-xs font-heading font-bold tracking-wide transition-all ${
              activeTags.includes(tag)
                ? "bg-konecta-orange/20 text-konecta-orange border border-konecta-orange/30"
                : "bg-white/[0.03] text-white/50 border border-white/5 hover:border-white/20 hover:text-white/70"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

/* -----------------------------------------------------------
   EMPTY STATE
   ----------------------------------------------------------- */

function EmptyState({ search, onClear }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      <div className="w-20 h-20 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6">
        <SearchIcon className="w-8 h-8 text-white/20" />
      </div>
      <h3 className="font-heading font-bold text-xl text-konecta-white mb-2">
        No articles found
      </h3>
      <p className="text-white/50 mb-6 max-w-md">
        {search
          ? `We couldn't find any articles matching "${search}". Try adjusting your search or filters.`
          : "No articles match your current filters. Try removing some filters."}
      </p>
      <button
        onClick={onClear}
        className="px-6 py-3 rounded-xl bg-konecta-orange text-white font-heading font-bold text-sm hover:bg-konecta-gold transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );
}

/* -----------------------------------------------------------
   SMALL ICON COMPONENTS
   ----------------------------------------------------------- */

function SearchIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
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
  );
}

function EyeIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
}

function HeartIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}

function FilterIcon() {
  return (
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
        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
      />
    </svg>
  );
}

function XIcon() {
  return (
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
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      className={`w-4 h-4 text-white/40 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function AuthorAvatar({ author, size = "sm" }) {
  const sizes = { xs: "w-6 h-6 text-[0.5rem]", sm: "w-8 h-8 text-xs" };
  const initials = author.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className={`${sizes[size]} rounded-full flex items-center justify-center font-heading font-bold text-konecta-orange shrink-0`}
      style={{
        background: "rgba(232,90,27,0.1)",
        border: "1px solid rgba(232,90,27,0.2)",
      }}
    >
      {initials}
    </div>
  );
}

/* -----------------------------------------------------------
   MAIN PAGE
   ----------------------------------------------------------- */

export default function InsightsPage() {
  // -- State --
  const [search, setSearchRaw] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [activeTags, setActiveTags] = useState([]);
  const [activeAuthor, setActiveAuthor] = useState(null);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  // Debounce search
  const debounceRef = useRef(null);
  const setSearch = useCallback((val) => {
    setSearchRaw(val);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setDebouncedSearch(val);
      setPage(1);
    }, 300);
  }, []);

  // Reset page on filter change
  const setCategoryAndReset = useCallback((c) => {
    setActiveCategory(c);
    setPage(1);
  }, []);
  const setSortAndReset = useCallback((s) => {
    setSortBy(s);
    setPage(1);
  }, []);
  const setAuthorAndReset = useCallback((a) => {
    setActiveAuthor(a);
    setPage(1);
  }, []);
  const setFeaturedAndReset = useCallback((f) => {
    setFeaturedOnly(f);
    setPage(1);
  }, []);

  const toggleTag = useCallback((tag) => {
    if (tag === null) {
      setActiveTags([]);
    } else {
      setActiveTags((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
      );
    }
    setPage(1);
  }, []);

  const clearAll = useCallback(() => {
    setSearchRaw("");
    setDebouncedSearch("");
    setActiveCategory("all");
    setSortBy("newest");
    setActiveTags([]);
    setActiveAuthor(null);
    setFeaturedOnly(false);
    setPage(1);
  }, []);

  // -- Published articles only --
  const published = useMemo(
    () => articlesDatabase.filter((a) => a.status === "published"),
    [],
  );

  // -- Featured articles (top 2 for hero) --
  const featuredArticles = useMemo(
    () => published.filter((a) => a.featured).slice(0, 2),
    [published],
  );

  // -- Popular articles (sidebar, top 5 by views) --
  const popularArticles = useMemo(
    () => [...published].sort((a, b) => b.views - a.views).slice(0, 5),
    [published],
  );

  // -- Filtered + sorted articles --
  const filtered = useMemo(() => {
    let result = [...published];
    const q = debouncedSearch.toLowerCase().trim();

    // Text search
    if (q) {
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags?.some((t) => t.toLowerCase().includes(q)) ||
          a.content?.toLowerCase().includes(q),
      );
    }

    // Category
    if (activeCategory !== "all") {
      result = result.filter((a) => a.category === activeCategory);
    }

    // Tags (AND logic — expand curated labels to original tags)
    if (activeTags.length > 0) {
      const expanded = expandTags(activeTags);
      result = result.filter((a) => a.tags?.some((t) => expanded.has(t)));
    }

    // Author
    if (activeAuthor) {
      result = result.filter((a) => a.author === activeAuthor);
    }

    // Featured only
    if (featuredOnly) {
      result = result.filter((a) => a.featured);
    }

    // Sort
    switch (sortBy) {
      case "oldest":
        result.sort((a, b) => a.publishDate.localeCompare(b.publishDate));
        break;
      case "most-viewed":
        result.sort((a, b) => b.views - a.views);
        break;
      case "most-liked":
        result.sort((a, b) => b.likes - a.likes);
        break;
      default: // newest
        result.sort((a, b) => b.publishDate.localeCompare(a.publishDate));
    }

    return result;
  }, [
    published,
    debouncedSearch,
    activeCategory,
    activeTags,
    activeAuthor,
    featuredOnly,
    sortBy,
  ]);

  // -- Split case studies from articles --
  const filteredCaseStudies = useMemo(
    () => filtered.filter((a) => a.category === "case-studies"),
    [filtered],
  );
  const filteredArticles = useMemo(
    () => filtered.filter((a) => a.category !== "case-studies"),
    [filtered],
  );

  // -- Pagination (articles only, case studies always show) --
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(0, page * ITEMS_PER_PAGE);
  const hasMore = page < totalPages;

  // -- Determine if hero should show (no active filters/search) --
  const showHero =
    !debouncedSearch &&
    activeCategory === "all" &&
    activeTags.length === 0 &&
    !activeAuthor &&
    !featuredOnly &&
    sortBy === "newest";

  return (
    <>
      <SEO
        title={PAGE_SEO.insights.title}
        description={PAGE_SEO.insights.description}
        path="/insights"
      />

      {/* Page header */}
      <section className="relative bg-konecta-black content-px pt-36 pb-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-konecta-orange/[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-konecta-slate/[0.03] blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl">
          <SectionEyebrow text="Thought Leadership" />
          <h1 className="section-title mt-4 mb-4">
            <span className="text-gradient-orange">Insights</span> &amp;
            Articles
          </h1>
          <p className="text-white/60 leading-relaxed max-w-2xl">
            Expert analysis on telecoms, AI adoption, Microsoft technologies,
            and digital strategy across Africa.
          </p>
        </div>
      </section>

      {/* Featured hero */}
      {showHero && featuredArticles.length > 0 && (
        <section className="bg-konecta-black content-px pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {featuredArticles.map((article) => (
              <FeaturedHero key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* Use Cases */}
      <UseCasesSection />

      {/* Main content area */}
      <section className="bg-konecta-black content-px pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          {/* Main column */}
          <div>
            <FilterBar
              search={search}
              setSearch={setSearch}
              activeCategory={activeCategory}
              setActiveCategory={setCategoryAndReset}
              sortBy={sortBy}
              setSortBy={setSortAndReset}
              activeTags={activeTags}
              toggleTag={toggleTag}
              activeAuthor={activeAuthor}
              setActiveAuthor={setAuthorAndReset}
              featuredOnly={featuredOnly}
              setFeaturedOnly={setFeaturedAndReset}
              totalResults={filtered.length}
            />

            {/* Content */}
            {filtered.length > 0 ? (
              <>
                {/* Case Studies section */}
                {filteredCaseStudies.length > 0 && (
                  <div className="mb-12">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 rounded-full bg-konecta-orange" />
                        <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-konecta-white tracking-tight">
                          Case Studies
                        </h2>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-konecta-orange/30 to-transparent" />
                      <span className="px-3 py-1 rounded-full bg-konecta-orange/10 text-konecta-orange text-sm font-heading font-bold border border-konecta-orange/20">
                        {filteredCaseStudies.length}{" "}
                        {filteredCaseStudies.length === 1 ? "study" : "studies"}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredCaseStudies.map((article, i) => (
                        <ArticleCard
                          key={article.id}
                          article={article}
                          index={i}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Articles section */}
                {paginatedArticles.length > 0 && (
                  <div>
                    {filteredCaseStudies.length > 0 && (
                      <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-8 rounded-full bg-konecta-slate" />
                          <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-konecta-white tracking-tight">
                            Articles
                          </h2>
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
                        <span className="px-3 py-1 rounded-full bg-white/5 text-white/50 text-sm font-heading font-bold border border-white/10">
                          {filteredArticles.length}{" "}
                          {filteredArticles.length === 1
                            ? "article"
                            : "articles"}
                        </span>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {paginatedArticles.map((article, i) => (
                        <ArticleCard
                          key={article.id}
                          article={article}
                          index={i}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Load more */}
                {hasMore && (
                  <div className="flex justify-center mt-12">
                    <button
                      onClick={() => setPage((p) => p + 1)}
                      className="px-8 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-white/10 text-white/60 font-heading font-bold text-sm hover:border-konecta-orange/40 hover:text-konecta-orange transition-all"
                    >
                      Load More Articles
                    </button>
                  </div>
                )}
              </>
            ) : (
              <EmptyState search={debouncedSearch} onClear={clearAll} />
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {/* Popular articles */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-heading font-bold text-base text-konecta-white mb-4 flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-konecta-orange"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" />
                </svg>
                Trending
              </h3>
              {popularArticles.map((article, i) => (
                <PopularCard key={article.id} article={article} rank={i + 1} />
              ))}
            </div>

            {/* Tag cloud */}
            <TagCloud activeTags={activeTags} toggleTag={toggleTag} />

            {/* Newsletter CTA */}
            <div className="glass-card rounded-2xl p-6 border-konecta-orange/10">
              <h3 className="font-heading font-bold text-base text-konecta-white mb-2">
                Stay Updated
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Get the latest insights delivered to your inbox.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 rounded-xl bg-konecta-orange text-white font-heading font-bold text-sm hover:bg-konecta-gold transition-colors"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
