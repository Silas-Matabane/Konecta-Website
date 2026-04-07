import { useState, useEffect, useMemo, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import SEO from "@components/common/SEO";
import SectionEyebrow from "@components/common/SectionEyebrow";
import useInView from "@hooks/useInView";
import {
  getArticleBySlug,
  enrichArticle,
  getRelatedArticles,
  getArticles,
  BLOG_CATEGORIES,
} from "@data/blogData";

/* ═══════════════════════════════════════════════════════════
   UTILITIES
   ═══════════════════════════════════════════════════════════ */

function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatDateShort(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/* ═══════════════════════════════════════════════════════════
   READING PROGRESS BAR
   ═══════════════════════════════════════════════════════════ */

function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(
        docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0,
      );
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-0.5 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-konecta-orange to-konecta-gold transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════ */

function HeroSection({ article }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const enriched = enrichArticle(article);

  return (
    <section
      ref={ref}
      className="relative min-h-[50vh] lg:min-h-[55vh] flex items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={article.featuredImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-konecta-black via-konecta-black/70 to-konecta-black/30" />
      </div>

      <div
        className={`relative z-10 w-full px-6 lg:px-14 pb-14 pt-40 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <Link
          to="/insights"
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
          Back to Insights
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-konecta-orange/20 text-konecta-orange text-xs font-heading font-bold uppercase tracking-wider border border-konecta-orange/30">
            {enriched.categoryLabel}
          </span>
          {article.featured && (
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-heading font-bold uppercase tracking-wider border border-white/10">
              Featured
            </span>
          )}
        </div>

        <h1
          className="font-heading font-extrabold text-konecta-white leading-[1.08] max-w-4xl"
          style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
        >
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <AuthorAvatar name={enriched.authorData.name} />
            <div>
              <div className="text-konecta-white font-heading font-bold">
                {enriched.authorData.name}
              </div>
              <div className="text-xs text-white/40">
                {enriched.authorData.role}
              </div>
            </div>
          </div>
          <span>{formatDate(article.publishDate)}</span>
          <span>{enriched.readingTime}</span>
          <span className="flex items-center gap-1">
            <EyeIcon /> {article.views.toLocaleString()} views
          </span>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ARTICLE CONTENT
   ═══════════════════════════════════════════════════════════ */

function ArticleContent({ html }) {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div
        className="article-content prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Article content styles */}
      <style>{`
        .article-content h2 {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--color-konecta-white, #F5F5F5);
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .article-content h3 {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--color-konecta-white, #F5F5F5);
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .article-content p {
          color: rgba(255,255,255,0.7);
          line-height: 1.85;
          margin-bottom: 1.25rem;
        }
        .article-content ul, .article-content ol {
          color: rgba(255,255,255,0.7);
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }
        .article-content li {
          margin-bottom: 0.5rem;
          line-height: 1.75;
        }
        .article-content strong {
          color: var(--color-konecta-white, #F5F5F5);
          font-weight: 700;
        }
        .article-content a {
          color: var(--color-konecta-orange, #E85A1B);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .article-content a:hover {
          color: var(--color-konecta-gold, #F4A020);
        }
        .article-content blockquote {
          border-left: 3px solid var(--color-konecta-orange, #E85A1B);
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          background: rgba(232,90,27,0.05);
          border-radius: 0 0.75rem 0.75rem 0;
        }
        .article-content blockquote p {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   INFO SIDEBAR
   ═══════════════════════════════════════════════════════════ */

function InfoSidebar({ article, likes, onLike, liked }) {
  const enriched = enrichArticle(article);

  return (
    <div className="glass-card p-6 lg:p-8 sticky top-28 space-y-6">
      {/* Like button */}
      <button
        onClick={onLike}
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl border font-heading font-bold text-sm transition-all ${
          liked
            ? "bg-konecta-orange/15 border-konecta-orange/30 text-konecta-orange"
            : "bg-[rgba(255,255,255,0.03)] border-white/10 text-white/60 hover:border-konecta-orange/30 hover:text-konecta-orange"
        }`}
      >
        <HeartIcon filled={liked} />
        {liked ? "Liked" : "Like this article"} · {likes}
      </button>

      <div className="space-y-4">
        {/* Category */}
        <div>
          <div className="text-xs uppercase tracking-wider text-white/40 font-heading font-bold mb-1">
            Category
          </div>
          <div className="text-base text-konecta-white">
            {enriched.categoryLabel}
          </div>
        </div>

        {/* Published */}
        <div>
          <div className="text-xs uppercase tracking-wider text-white/40 font-heading font-bold mb-1">
            Published
          </div>
          <div className="text-base text-konecta-white">
            {formatDate(article.publishDate)}
          </div>
        </div>

        {/* Reading time */}
        <div>
          <div className="text-xs uppercase tracking-wider text-white/40 font-heading font-bold mb-1">
            Reading Time
          </div>
          <div className="text-base text-konecta-white">
            {enriched.readingTime}
          </div>
        </div>

        {/* Author */}
        <div>
          <div className="text-xs uppercase tracking-wider text-white/40 font-heading font-bold mb-1">
            Author
          </div>
          <div className="flex items-center gap-3 mt-2">
            <AuthorAvatar name={enriched.authorData.name} />
            <div>
              <div className="text-base text-konecta-white">
                {enriched.authorData.name}
              </div>
              <div className="text-sm text-white/40">
                {enriched.authorData.role}
              </div>
            </div>
          </div>
          {enriched.authorData.bio && (
            <p className="text-sm text-white/50 mt-2 leading-relaxed">
              {enriched.authorData.bio}
            </p>
          )}
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div>
            <div className="text-xs uppercase tracking-wider text-white/40 font-heading font-bold mb-2">
              Topics
            </div>
            <div className="flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-white/[0.04] text-xs text-white/50 border border-white/5 font-heading font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Share */}
      <div>
        <div className="text-xs uppercase tracking-wider text-white/40 font-heading font-bold mb-3">
          Share
        </div>
        <ShareButtons title={article.title} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SHARE BUTTONS
   ═══════════════════════════════════════════════════════════ */

function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = () => {
    navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex gap-2">
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[rgba(255,255,255,0.03)] border border-white/5 text-white/50 text-xs font-heading font-bold hover:border-[#0A66C2]/40 hover:text-[#0A66C2] transition-all"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        LinkedIn
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[rgba(255,255,255,0.03)] border border-white/5 text-white/50 text-xs font-heading font-bold hover:border-white/20 hover:text-white transition-all"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        X
      </a>
      <button
        onClick={handleCopy}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[rgba(255,255,255,0.03)] border border-white/5 text-white/50 text-xs font-heading font-bold hover:border-konecta-orange/30 hover:text-konecta-orange transition-all"
      >
        {copied ? (
          <>
            <CheckIcon /> Copied
          </>
        ) : (
          <>
            <CopyIcon /> Copy
          </>
        )}
      </button>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   RELATED ARTICLES
   ═══════════════════════════════════════════════════════════ */

function RelatedArticles({ articles }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  if (!articles || articles.length === 0) return null;

  return (
    <section
      ref={ref}
      className="bg-konecta-black px-6 lg:px-14 py-16 border-t border-white/5"
    >
      <div
        className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionEyebrow text="Keep Reading" />
        <h2 className="section-title mt-4 mb-10">
          Related <span className="text-gradient-orange">Articles</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => {
            const enriched = enrichArticle(article);
            return (
              <Link
                key={article.id}
                to={`/insights/${article.slug}`}
                className="group glass-card overflow-hidden rounded-2xl flex flex-col hover:border-konecta-orange/30 transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative overflow-hidden h-[180px]">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-konecta-black/60 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-konecta-orange/15 text-konecta-orange text-xs font-heading font-bold tracking-wider uppercase backdrop-blur-sm">
                    {enriched.categoryLabel}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-base text-konecta-white leading-snug mb-2 group-hover:text-konecta-orange transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-2 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-white/40 mt-3 pt-3 border-t border-white/5">
                    <span>{formatDateShort(article.publishDate)}</span>
                    <span>{enriched.readingTime}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PREV / NEXT NAVIGATION
   ═══════════════════════════════════════════════════════════ */

function PrevNextNav({ prevArticle, nextArticle }) {
  if (!prevArticle && !nextArticle) return null;

  return (
    <div className="bg-konecta-black px-6 lg:px-14 py-10 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {prevArticle ? (
          <Link
            to={`/insights/${prevArticle.slug}`}
            className="group glass-card p-5 rounded-xl hover:border-konecta-orange/20 transition-all"
          >
            <div className="text-xs text-white/40 font-heading font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
              <svg
                className="w-3 h-3"
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
              Previous
            </div>
            <div className="font-heading font-bold text-sm text-konecta-white group-hover:text-konecta-orange transition-colors line-clamp-2">
              {prevArticle.title}
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextArticle ? (
          <Link
            to={`/insights/${nextArticle.slug}`}
            className="group glass-card p-5 rounded-xl hover:border-konecta-orange/20 transition-all text-right"
          >
            <div className="text-xs text-white/40 font-heading font-bold uppercase tracking-wider mb-2 flex items-center justify-end gap-1">
              Next
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="font-heading font-bold text-sm text-konecta-white group-hover:text-konecta-orange transition-colors line-clamp-2">
              {nextArticle.title}
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ICON COMPONENTS
   ═══════════════════════════════════════════════════════════ */

function EyeIcon({ className = "w-4 h-4" }) {
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

function HeartIcon({ filled, className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill={filled ? "currentColor" : "none"}
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

function CopyIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function AuthorAvatar({ name }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm text-konecta-orange shrink-0"
      style={{
        background: "rgba(232,90,27,0.1)",
        border: "1px solid rgba(232,90,27,0.2)",
      }}
    >
      {initials}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   404 STATE
   ═══════════════════════════════════════════════════════════ */

function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center bg-konecta-black px-6 text-center">
      <div className="w-20 h-20 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6">
        <svg
          className="w-8 h-8 text-white/20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h1 className="font-heading font-bold text-2xl text-konecta-white mb-2">
        Article Not Found
      </h1>
      <p className="text-white/50 mb-6 max-w-md">
        The article you&rsquo;re looking for doesn&rsquo;t exist or has been
        removed.
      </p>
      <Link
        to="/insights"
        className="px-6 py-3 rounded-xl bg-konecta-orange text-white font-heading font-bold text-sm hover:bg-konecta-gold transition-colors"
      >
        Browse All Articles
      </Link>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════ */

export default function ArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = useMemo(() => getArticleBySlug(slug), [slug]);

  // Likes (client-side state)
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if (article) {
      setLikes(article.likes);
      // Check localStorage for previous like
      const likedSlugs = JSON.parse(
        localStorage.getItem("konecta-liked-articles") || "[]",
      );
      setLiked(likedSlugs.includes(slug));
    }
  }, [article, slug]);

  const handleLike = () => {
    const likedSlugs = JSON.parse(
      localStorage.getItem("konecta-liked-articles") || "[]",
    );
    if (liked) {
      setLikes((l) => l - 1);
      setLiked(false);
      localStorage.setItem(
        "konecta-liked-articles",
        JSON.stringify(likedSlugs.filter((s) => s !== slug)),
      );
    } else {
      setLikes((l) => l + 1);
      setLiked(true);
      localStorage.setItem(
        "konecta-liked-articles",
        JSON.stringify([...likedSlugs, slug]),
      );
    }
  };

  // Related articles
  const related = useMemo(
    () => (article ? getRelatedArticles(article, 3) : []),
    [article],
  );

  // Prev / next navigation
  const { prevArticle, nextArticle } = useMemo(() => {
    const published = getArticles().sort((a, b) =>
      b.publishDate.localeCompare(a.publishDate),
    );
    const idx = published.findIndex((a) => a.slug === slug);
    return {
      prevArticle: idx > 0 ? published[idx - 1] : null,
      nextArticle: idx < published.length - 1 ? published[idx + 1] : null,
    };
  }, [slug]);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) return <NotFound />;

  return (
    <>
      <SEO
        title={`${article.title} | Konecta Insights`}
        description={article.excerpt}
        path={`/insights/${slug}`}
      />
      <ReadingProgressBar />
      <HeroSection article={article} />

      {/* Content + sidebar */}
      <section className="bg-konecta-black px-6 lg:px-14 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 max-w-[1280px] mx-auto">
          <ArticleContent html={article.content} />
          <InfoSidebar
            article={article}
            likes={likes}
            onLike={handleLike}
            liked={liked}
          />
        </div>
      </section>

      {/* Tags bar */}
      {article.tags && article.tags.length > 0 && (
        <div className="bg-konecta-black px-6 lg:px-14 pb-10">
          <div className="flex flex-wrap items-center gap-2 max-w-[1280px] mx-auto">
            <span className="text-xs text-white/30 font-heading font-bold uppercase tracking-wider mr-2">
              Tags:
            </span>
            {article.tags.map((tag) => (
              <Link
                key={tag}
                to="/insights"
                className="px-3 py-1.5 rounded-full bg-white/[0.03] text-xs text-white/50 border border-white/5 font-heading font-bold hover:border-konecta-orange/30 hover:text-konecta-orange transition-all"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      <PrevNextNav prevArticle={prevArticle} nextArticle={nextArticle} />
      <RelatedArticles articles={related} />
    </>
  );
}
