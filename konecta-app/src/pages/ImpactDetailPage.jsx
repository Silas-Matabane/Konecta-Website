import { useParams, Link } from "react-router-dom";
import SEO from "@components/common/SEO";
import SectionEyebrow from "@components/common/SectionEyebrow";
import useInView from "@hooks/useInView";
import { impactProjectsDatabase, IMPACT_CATEGORIES } from "@data/impactData";

/* ── Hero ── */
function HeroSection({ project }) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative min-h-[55vh] flex items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-konecta-black via-konecta-black/70 to-konecta-black/30" />
      </div>

      <div
        className={`relative z-10 w-full px-6 lg:px-14 pb-14 pt-40 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <Link
          to="/impact"
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
          Back to Impact
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          {project.badge && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.65rem] font-heading font-bold uppercase tracking-wider backdrop-blur-sm bg-konecta-orange/20 text-konecta-orange border border-konecta-orange/30">
              {project.badge}
            </span>
          )}
          <span className="px-2.5 py-0.5 rounded-md bg-white/10 text-white/70 text-[0.6rem] font-heading font-bold tracking-wider uppercase border border-white/10">
            {project.type === "event-hosted" ? "Event" : "Case Study"}
          </span>
        </div>

        <h1
          className="font-heading font-extrabold text-konecta-white leading-[1.05]"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {project.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-sm text-white/70">
          {project.location && (
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
              {project.location}
            </div>
          )}
          {project.year && (
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
              {project.year}
            </div>
          )}
        </div>

        {project.metric && (
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-konecta-orange/10 border border-konecta-orange/20 backdrop-blur-sm">
            <span className="font-heading font-extrabold text-3xl bg-gradient-to-b from-konecta-orange to-konecta-gold bg-clip-text text-transparent leading-none">
              {project.metric}
            </span>
            <span className="text-xs text-white/60 uppercase tracking-wider">
              {project.metricLabel}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

/* ── Info Sidebar ── */
function InfoSidebar({ project }) {
  const categoryLabel =
    IMPACT_CATEGORIES.find((c) => c.value === project.category)?.label ||
    project.category;

  return (
    <div className="glass-card p-6 lg:p-8 sticky top-28 space-y-6">
      {project.ctaUrl && (
        <a
          href={project.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-konecta-orange hover:bg-konecta-orange/90 text-white font-heading font-bold px-6 py-3.5 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(244,129,32,0.3)]"
        >
          {project.ctaText || "Learn More"} →
        </a>
      )}

      <div className="space-y-4">
        <div>
          <div className="text-[0.6rem] uppercase tracking-wider text-white/40 font-heading font-bold mb-1">
            Category
          </div>
          <div className="text-sm text-konecta-white">{categoryLabel}</div>
        </div>
        {project.location && (
          <div>
            <div className="text-[0.6rem] uppercase tracking-wider text-white/40 font-heading font-bold mb-1">
              Location
            </div>
            <div className="text-sm text-konecta-white">{project.location}</div>
          </div>
        )}
        {project.year && (
          <div>
            <div className="text-[0.6rem] uppercase tracking-wider text-white/40 font-heading font-bold mb-1">
              Year
            </div>
            <div className="text-sm text-konecta-white">{project.year}</div>
          </div>
        )}
        {project.metric && (
          <div>
            <div className="text-[0.6rem] uppercase tracking-wider text-white/40 font-heading font-bold mb-1">
              Key Metric
            </div>
            <div className="font-heading font-extrabold text-xl text-konecta-orange">
              {project.metric}
            </div>
            <div className="text-xs text-white/50 mt-0.5">
              {project.metricLabel}
            </div>
          </div>
        )}
      </div>

      {project.tags?.length > 0 && (
        <div>
          <div className="text-[0.6rem] uppercase tracking-wider text-white/40 font-heading font-bold mb-2">
            Topics
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-full bg-konecta-orange/10 text-konecta-orange text-[0.6rem] font-heading font-bold tracking-wider"
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

/* ── Description & Details ── */
function DescriptionSection({ project }) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <h2 className="font-heading font-extrabold text-xl text-konecta-white mb-4">
        About This Project
      </h2>
      {project.longDescription.split("\n\n").map((para, i) => (
        <p key={i} className="text-sm text-white/70 leading-relaxed mb-4">
          {para}
        </p>
      ))}

      {/* Purpose */}
      {project.purpose && (
        <div className="mt-8 glass-card p-6 border-l-2 border-konecta-orange/50">
          <h3 className="font-heading font-bold text-base text-konecta-orange mb-3">
            Our Purpose
          </h3>
          <p className="text-sm text-white/70 leading-relaxed">
            {project.purpose}
          </p>
        </div>
      )}

      {/* Focus Areas */}
      {project.focusAreas?.length > 0 && (
        <div className="mt-8">
          <h3 className="font-heading font-bold text-lg text-konecta-white mb-4">
            Focus Areas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.focusAreas.map((area, i) => {
              const [title, ...rest] = area.split(": ");
              const desc = rest.join(": ");
              return (
                <div
                  key={i}
                  className="glass-card p-4 hover:border-konecta-orange/20 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-konecta-orange shrink-0" />
                    <div>
                      <div className="text-sm font-heading font-bold text-konecta-white">
                        {title}
                      </div>
                      {desc && (
                        <div className="text-xs text-white/60 mt-1 leading-relaxed">
                          {desc}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Highlights */}
      {project.highlights?.length > 0 && (
        <div className="mt-8">
          <h3 className="font-heading font-bold text-lg text-konecta-white mb-4">
            Key Highlights
          </h3>
          <ul className="space-y-2.5">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-white/70"
              >
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

/* ── Gallery ── */
function GallerySection({ gallery, title }) {
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
              alt={`${title} gallery ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Related Projects ── */
function RelatedProjects({ current }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const related = impactProjectsDatabase
    .filter(
      (p) =>
        p.id !== current.id && (p.category === current.category || p.featured),
    )
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <section
      ref={ref}
      className={`px-6 lg:px-14 pb-section transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <h2 className="font-heading font-extrabold text-xl text-konecta-white mb-6">
        More Impact Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {related.map((p) => (
          <Link
            key={p.id}
            to={`/impact/${p.slug}`}
            className="glass-card overflow-hidden group hover:border-konecta-orange/20 transition-colors"
          >
            <div className="relative h-40">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-konecta-black via-konecta-black/50 to-transparent" />
              {p.badge && (
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded-full text-[0.55rem] font-heading font-bold uppercase tracking-wider bg-konecta-orange/20 text-konecta-orange border border-konecta-orange/30">
                    {p.badge}
                  </span>
                </div>
              )}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="font-heading font-bold text-sm text-konecta-white">
                  {p.shortTitle || p.title}
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="text-xs text-white/50 mb-2">
                {p.year} · {p.location}
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

/* ── 404 ── */
function ProjectNotFound() {
  return (
    <section className="px-6 lg:px-14 pt-40 pb-section text-center">
      <div className="text-5xl mb-6 opacity-30">🔗</div>
      <h1 className="font-heading font-extrabold text-3xl text-konecta-white mb-3">
        Project Not Found
      </h1>
      <p className="text-sm text-white/50 mb-8">
        The impact project you&apos;re looking for doesn&apos;t exist or has
        been removed.
      </p>
      <Link
        to="/impact"
        className="inline-flex items-center gap-2 px-6 py-3 bg-konecta-orange text-white font-heading font-bold rounded-xl hover:bg-konecta-orange/90 transition-all"
      >
        ← Browse All Impact
      </Link>
    </section>
  );
}

/* ── Main ── */
export default function ImpactDetailPage() {
  const { slug } = useParams();
  const project = impactProjectsDatabase.find((p) => p.slug === slug);

  if (!project) return <ProjectNotFound />;

  return (
    <>
      <SEO
        title={`${project.shortTitle || project.title} | Konecta Impact`}
        description={project.description}
        path={`/impact/${project.slug}`}
      />

      <HeroSection project={project} />

      <section className="px-6 lg:px-14 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <DescriptionSection project={project} />
            <GallerySection gallery={project.gallery} title={project.title} />
          </div>
          <div className="lg:w-[340px] shrink-0">
            <InfoSidebar project={project} />
          </div>
        </div>
      </section>

      <RelatedProjects current={project} />
    </>
  );
}
