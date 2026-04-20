import { useState } from "react";
import SEO from "@components/common/SEO";
import PageHeader from "@components/common/PageHeader";
import CTASection from "@components/common/CTASection";
import SectionEyebrow from "@components/common/SectionEyebrow";
import ThemedIcon from "@components/common/ThemedIcon";
import useInView from "@hooks/useInView";
import { PAGE_SEO } from "@data/constants";

/* ── programme data ─────────────────────────────────────── */
const PROGRAMMES = [
  {
    id: "ai",
    icon: "🤖",
    tag: "Enterprise · Government · SMME",
    title: "Artificial Intelligence Training",
    headline: "From AI awareness to AI advantage.",
    body: "Our AI training programmes are built for organisations that want more than awareness — they want results. Whether you are a government department, enterprise, or SMME, our modules are designed to move your teams from curiosity to capability.",
    modules: [
      "AI Fundamentals for Business and Public Sector",
      "Generative AI for Productivity and Innovation",
      "AI Adoption Strategy Across Departments",
      "AI Governance, Ethics, and Compliance",
      "Data-Driven Decision-Making",
    ],
    outcome:
      "Your teams leave with practical tools and a clear adoption roadmap — not just a certificate.",
    color: "#E85A1B",
  },
  {
    id: "tech",
    icon: "🚀",
    tag: "SMMEs · Entrepreneurs · Corporate Innovation",
    title: "Technopreneurship",
    headline: "Build the business. Own the future.",
    body: "Konecta Academy's Technopreneurship programme empowers entrepreneurs and innovation teams to build viable, tech-enabled businesses from the ground up.",
    modules: [
      "Digital Business Models and Platform Economies",
      "Product Development and Innovation Methodology",
      "Go-to-Market Strategy",
      "Funding Readiness and Investment Preparation",
      "Building Sustainable, Tech-Enabled Ventures",
    ],
    outcome:
      "Ideal for SMMEs, startups, innovation hubs, incubators, corporate innovation teams, and anyone serious about building a tech-enabled business.",
    color: "#E85A1B",
    badge: "QCTO Qualification Applied",
  },
  {
    id: "change",
    icon: "🔄",
    tag: "Enterprise · Government",
    title: "Change & Adoption Training",
    headline: "Technology only works when people do.",
    body: "The most common reason digital transformation fails is not the technology — it is the people. This programme equips leaders, managers, and change champions to drive lasting adoption across their organisations.",
    modules: [
      "Organisational Readiness for AI and Digital Transformation",
      "Behavioural and Cultural Change Management",
      "Leadership Alignment and Executive Buy-In",
      "User Adoption of New Systems and Platforms",
      "Reducing Resistance and Sustaining Implementation Success",
    ],
    outcome:
      "Real, lasting value from your technology investments — measured in adoption rates, user satisfaction, and business impact.",
    color: "#E85A1B",
  },
];

const STATS = [
  { value: "3", label: "Core Programme Areas" },
  { value: "15+", label: "Verified Attendee Reviews" },
  { value: "QCTO", label: "Qualification Applied" },
  { value: "MEA", label: "Market Reach" },
];

const TESTIMONIALS = [
  {
    quote:
      "The AI training shifted how our entire leadership team thinks about technology. We went from being cautious to confident in just a few weeks.",
    name: "Thabo Molefe",
    org: "CTO, Ndalo Technologies",
  },
  {
    quote:
      "Practically the most useful training I have attended. The facilitators understood our context and made everything immediately applicable.",
    name: "Amina Osei",
    org: "Founder, DataBridge Africa",
  },
  {
    quote:
      "Konecta Academy did not just teach us about AI — they showed us exactly where and how to apply it in our daily operations.",
    name: "Dr. Naledi Khumalo",
    org: "CHRO, Mzansi Financial Group",
  },
];

const WHY_ITEMS = [
  {
    icon: "🌍",
    title: "Built for the African Context",
    description:
      "Our programmes are designed for the specific challenges and opportunities of the African market.",
  },
  {
    icon: "🛠️",
    title: "Practical, Not Theoretical",
    description:
      "Every module connects to real tools, real processes, and real outcomes your teams can use immediately.",
  },
  {
    icon: "🏛️",
    title: "Government & Enterprise Ready",
    description:
      "We understand procurement, compliance, and the unique dynamics of serving public institutions.",
  },
  {
    icon: "📜",
    title: "Formal Qualification Pathway",
    description:
      "Our Technopreneurship programme is aligned to QCTO standards for formal qualification.",
  },
  {
    icon: "⚡",
    title: "Backed by Real Delivery",
    description:
      "Konecta Academy is part of the Konecta Group — a leading African technology and telecoms consultancy.",
  },
];

/* ── sub-components ─────────────────────────────────────── */

function ProgrammeCard({ programme, isActive, onClick }) {
  const { title, tag, headline, color, icon, badge, body, modules, outcome } =
    programme;

  return (
    <button
      onClick={onClick}
      className={`group w-full text-left transition-all duration-300 p-8 lg:p-10 ${
        isActive ? "glass-card-orange" : "glass-card"
      }`}
    >
      {/* header row */}
      <div className="flex items-start gap-4">
        <ThemedIcon name={icon} size={32} />
        <div className="flex-1">
          <p className="text-[0.65rem] font-bold uppercase tracking-widest mb-1 text-konecta-orange">
            {tag}
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <h3
              className={`font-heading text-xl md:text-2xl font-bold ${isActive ? "text-konecta-orange" : "text-konecta-white"}`}
            >
              {title}
            </h3>
            {badge && (
              <span className="text-[0.65rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-konecta-orange/10 text-konecta-orange">
                ✦ {badge}
              </span>
            )}
          </div>
          <p className="text-sm font-semibold italic mt-1 text-konecta-orange">
            {headline}
          </p>
        </div>
        <span
          className={`text-konecta-silver transition-transform duration-300 ${
            isActive ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>

      {/* expandable body */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isActive ? "max-h-[600px] opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-base text-white/80 leading-relaxed mb-6">{body}</p>

        <h4 className="font-heading text-sm font-semibold text-konecta-white uppercase tracking-wider mb-3">
          Programme Modules
        </h4>
        <ul className="space-y-2 mb-6">
          {modules.map((m) => (
            <li key={m} className="flex items-start gap-2 text-white/80">
              <span className="mt-1 block w-1.5 h-1.5 rounded-full flex-shrink-0 bg-konecta-orange" />
              {m}
            </li>
          ))}
        </ul>

        <div className="rounded-xl p-4 bg-konecta-orange/[0.06] border border-konecta-orange/20">
          <h4 className="font-heading text-xs font-semibold uppercase tracking-wider mb-1 text-konecta-orange">
            Key Outcome
          </h4>
          <p className="text-white/80 leading-relaxed">{outcome}</p>
        </div>
      </div>

      {/* collapsed hint */}
      {!isActive && (
        <p className="text-konecta-muted text-xs mt-3">Tap to explore →</p>
      )}
    </button>
  );
}

function StatsBar() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-konecta-orange to-konecta-gold content-px py-16 md:py-20"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <p className="font-heading text-3xl md:text-4xl font-extrabold text-white">
              {s.value}
            </p>
            <p className="text-white/80 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className="relative bg-konecta-black content-px py-section overflow-hidden"
    >
      <div className="absolute top-0 right-1/3 w-[350px] h-[350px] bg-konecta-orange/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div
        className={`relative z-10 mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionEyebrow text="What People Are Saying" />
        <h2 className="section-title mt-4">
          Trusted by Leaders Across
          <br />
          <span className="text-gradient-orange">Africa</span>
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.name}
            className={`glass-card p-8 lg:p-10 flex flex-col transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="text-gradient-orange text-4xl font-serif leading-none mb-4">
              &ldquo;
            </div>
            <p className="text-base text-konecta-white/85 leading-relaxed flex-1">
              {t.quote}
            </p>
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/[0.06]">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm text-konecta-orange"
                style={{
                  background: "rgba(232,90,27,0.1)",
                  border: "1px solid rgba(232,90,27,0.2)",
                }}
              >
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="font-heading font-bold text-sm text-konecta-white">
                  {t.name}
                </div>
                <div className="text-xs text-white/80 mt-0.5">{t.org}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="relative z-10 text-konecta-muted text-sm italic mt-8">
        + 12 more verified reviews from programme alumni
      </p>
    </section>
  );
}

function WhySection() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className="relative bg-konecta-black content-px py-section overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-konecta-orange/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div
        className={`relative z-10 mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionEyebrow text="The Konecta Difference" />
        <h2 className="section-title mt-4">
          Why Konecta
          <br />
          <span className="text-gradient-orange">Academy</span>
        </h2>
      </div>

      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {WHY_ITEMS.map((item, i) => (
          <div
            key={item.title}
            className={`glass-card p-8 lg:p-10 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <ThemedIcon name={item.icon} size={32} className="mb-5" />
            <h3 className="font-heading text-lg font-bold text-konecta-white mb-2">
              {item.title}
            </h3>
            <p className="text-base text-white/80 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── main page ──────────────────────────────────────────── */

export default function AcademyPage() {
  const [activeProgramme, setActiveProgramme] = useState("ai");
  const [ref, inView] = useInView();
  const [introRef, introInView] = useInView();

  return (
    <>
      <SEO
        title={PAGE_SEO.academy.title}
        description={PAGE_SEO.academy.description}
        path="/academy"
      />

      <PageHeader
        eyebrow="Konecta Academy"
        title="Future-Focused <span class='text-konecta-orange'>Training</span>"
        description="Equipping organisations and individuals to adopt, implement, and lead with technology — built for the African context."
      />

      {/* Audience tags */}
      <div className="bg-konecta-black -mt-4 pb-8 content-px">
        <div className="flex gap-2 flex-wrap">
          {["Enterprise", "Government", "SMME", "Startups"].map((tag) => (
            <span
              key={tag}
              className="glass-card text-xs font-medium text-konecta-silver px-4 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <StatsBar />

      {/* Intro Section */}
      <section
        ref={introRef}
        className="relative bg-konecta-black content-px py-section overflow-hidden"
      >
        <div className="absolute top-10 right-0 w-[300px] h-[300px] bg-konecta-orange/[0.03] blur-[100px] rounded-full pointer-events-none" />
        <div
          className={`relative z-10 transition-all duration-700 ${
            introInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <SectionEyebrow text="Our Approach" />
          <h2 className="section-title mt-4 mb-6">
            Structured for Impact.
            <br />
            <span className="text-gradient-orange">Designed for Africa.</span>
          </h2>
          <p className="text-base text-white/80 leading-relaxed max-w-2xl">
            Konecta Academy&rsquo;s programmes are built on a simple belief:
            technology adoption fails without the right skills, mindset, and
            support. Our training bridges that gap.
          </p>
        </div>
      </section>

      {/* Programmes */}
      <section
        ref={ref}
        className="relative bg-konecta-black content-px py-section overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-konecta-orange/[0.03] blur-[120px] rounded-full pointer-events-none" />

        <div
          className={`relative z-10 mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <SectionEyebrow text="Our Programmes" />
          <h2 className="section-title mt-4">
            Three Pillars of
            <br />
            <span className="text-gradient-orange">Excellence</span>
          </h2>
        </div>

        <div className="relative z-10 space-y-4">
          {PROGRAMMES.map((p, i) => (
            <div
              key={p.id}
              className={`transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <ProgrammeCard
                programme={p}
                isActive={activeProgramme === p.id}
                onClick={() =>
                  setActiveProgramme(activeProgramme === p.id ? null : p.id)
                }
              />
            </div>
          ))}
        </div>
      </section>

      <TestimonialsSection />
      <WhySection />
      <CTASection />
    </>
  );
}
