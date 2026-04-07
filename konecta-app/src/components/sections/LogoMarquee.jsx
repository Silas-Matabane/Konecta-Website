import { partners } from "@data/partners";

const row1 = partners.slice(0, 6);
const row2 = partners.slice(6);

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-konecta-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-konecta-black to-transparent z-10" />

      <div
        className={`flex gap-6 items-center ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {doubled.map((p, i) => (
          <div
            key={`${p.name}-${i}`}
            className="flex-shrink-0 px-8 py-5 rounded-xl border border-konecta-orange/10 hover:border-konecta-orange/30 transition-all duration-300 flex items-center justify-center"
            style={{ background: "#ffede0" }}
          >
            {p.logo ? (
              <img
                src={p.logo}
                alt={p.name}
                className="h-10 max-w-[120px] object-contain transition-transform hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div
                className={`font-heading font-bold text-sm whitespace-nowrap tracking-wide ${p.isMicrosoft ? "text-konecta-silver/85" : "text-konecta-white/75"}`}
              >
                {p.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="py-16 bg-konecta-black">
      <div className="px-6 lg:px-14 mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
          In Partnership With Africa&apos;s Leading Operators &amp; Global Tech
          Leaders
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
