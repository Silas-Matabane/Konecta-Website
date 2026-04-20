import { Link } from "react-router-dom";
import SectionEyebrow from "@components/common/SectionEyebrow";
import {
  articlesDatabase,
  enrichArticle,
  BLOG_CATEGORIES,
} from "@data/blogData";
import useInView from "@hooks/useInView";

const insights = articlesDatabase
  .filter((a) => a.status === "published")
  .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
  .slice(0, 3)
  .map(enrichArticle);

function FeaturedCard({ article }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const categoryLabel =
    BLOG_CATEGORIES.find((c) => c.id === article.category)?.label ||
    article.category;

  return (
    <Link
      to={`/insights/${article.slug}`}
      ref={ref}
      className={`glass-card group overflow-hidden transition-all duration-700 md:row-span-2 flex flex-col ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="relative overflow-hidden min-h-[260px] md:flex-1">
        <img
          src={article.featuredImage}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover object-[center_20%] absolute inset-0 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-konecta-black/80 to-transparent" />
      </div>
      <div className="p-6 lg:p-8">
        <div className="text-[0.65rem] font-heading font-bold tracking-widest uppercase mb-3 text-konecta-orange">
          {categoryLabel}
        </div>
        <h3 className="font-heading font-bold text-xl lg:text-2xl text-konecta-white leading-snug mb-4 card-hover-underline">
          {article.title}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex gap-4 text-xs text-white/80">
          <span>{article.readingTime}</span>
          <span>
            {new Date(article.publishDate).toLocaleDateString("en-ZA", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </Link>
  );
}

function SmallCard({ article, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const categoryLabel =
    BLOG_CATEGORIES.find((c) => c.id === article.category)?.label ||
    article.category;

  return (
    <Link
      to={`/insights/${article.slug}`}
      ref={ref}
      className={`glass-card group overflow-hidden transition-all duration-700 md:grid md:grid-cols-[200px_1fr] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative overflow-hidden min-h-[180px] md:min-h-full">
        <img
          src={article.featuredImage}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover object-[center_20%] absolute inset-0 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-konecta-black/80 to-transparent" />
      </div>
      <div className="p-5">
        <div className="text-[0.65rem] font-heading font-bold tracking-widest uppercase mb-2 text-konecta-orange">
          {categoryLabel}
        </div>
        <h3 className="font-heading font-bold text-base text-konecta-white leading-snug mb-2 card-hover-underline">
          {article.title}
        </h3>
        <p className="text-xs text-white/60 leading-relaxed mb-3 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex gap-4 text-xs text-white/80">
          <span>{article.readingTime}</span>
          <span>
            {new Date(article.publishDate).toLocaleDateString("en-ZA", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function InsightsSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative bg-konecta-black content-px py-section overflow-hidden"
      id="insights"
    >
      <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-konecta-slate/[0.03] blur-[100px] rounded-full pointer-events-none" />

      {/* Split header */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <SectionEyebrow text="Thought Leadership" />
          <h2 className="section-title mt-4">
            <span className="text-gradient-orange">Konecta Insights</span>
          </h2>
        </div>
        <div
          className={`flex items-end justify-end transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Link to="/insights" className="btn-secondary">
            All Articles →
          </Link>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        <FeaturedCard article={insights[0]} />
        {insights.slice(1).map((article, i) => (
          <SmallCard key={article.id} article={article} index={i + 1} />
        ))}
      </div>
    </section>
  );
}
