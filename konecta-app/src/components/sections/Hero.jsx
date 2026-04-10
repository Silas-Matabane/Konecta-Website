import { Link } from "react-router-dom";
import ThemedIcon from "@components/common/ThemedIcon";
import useInView from "@hooks/useInView";
import useCountUp from "@hooks/useCountUp";
import { HERO_STATS, HERO_IMAGE } from "@data/constants";

function StatCounter({ end, suffix = "", label, icon }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const count = useCountUp(end, inView, 2000);

  return (
    <div ref={ref} className="glass-card p-6 lg:p-8 text-center group">
      <ThemedIcon
        name={icon}
        size={28}
        className="mb-3 opacity-60 group-hover:opacity-100 transition-opacity"
      />
      <div
        className="font-heading font-extrabold text-konecta-white leading-none"
        style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
      >
        <span className="text-gradient-orange">
          {count}
          {suffix}
        </span>
      </div>
      <div className="text-xs text-konecta-muted mt-2 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-konecta-black/50 via-konecta-black/40 to-konecta-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-konecta-black/60 via-transparent to-transparent" />
      </div>

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-konecta-orange/10 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 left-[20%] w-[300px] h-[300px] bg-konecta-slate/8 rounded-full blur-[100px] animate-float-slow pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 px-6 lg:px-14 pt-32 pb-10">
        {/* Eyebrow with glass pill */}
        <div
          className={`inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{
            background: "rgba(244, 129, 32, 0.08)",
            border: "1px solid rgba(244, 129, 32, 0.2)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="w-2 h-2 rounded-full bg-konecta-orange animate-pulse-dot" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-konecta-orange">
            Africa&apos;s Leading Telecoms &amp; Digital Infrastructure
            Consultancy
          </span>
        </div>

        {/* Hero headline */}
        <h1
          className={`font-heading font-extrabold text-konecta-white leading-[0.95] tracking-tight max-w-5xl transition-all duration-1000 delay-200 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
        >
          We Build
          <br />
          Networks. We
          <br />
          Power <em className="not-italic text-gradient-orange">Data.</em>
        </h1>

        {/* Sub-copy */}
        <p
          className={`text-base lg:text-lg text-white/80 mt-8 max-w-xl leading-relaxed transition-all duration-1000 delay-400 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Africa&apos;s digital economy is expanding rapidly, yet the
          infrastructure required to support intelligent digital services
          remains uneven. Konecta helps organisations close this gap — designing
          and deploying telecommunications infrastructure while developing the
          intelligent data platforms that run on top of it.
        </p>

        {/* CTAs */}
        <div
          className={`flex gap-4 mt-10 flex-wrap transition-all duration-1000 delay-500 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <Link to="/platform" className="btn-primary">
            Explore Our Platform
          </Link>
          <Link to="/contact" className="btn-secondary">
            Connect With Us
          </Link>
        </div>
      </div>

      {/* Stats strip — Glassmorphism cards */}
      <div className="relative z-10 mt-auto px-6 lg:px-14 pb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {HERO_STATS.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2.5 rounded-full bg-konecta-orange animate-bounce" />
        </div>
      </div>
    </section>
  );
}
