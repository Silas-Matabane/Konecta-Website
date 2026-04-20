import SectionEyebrow from "@components/common/SectionEyebrow";
import useInView from "@hooks/useInView";

const TEAM_MEMBERS = [
  {
    name: "Yandisa Sokhanyile",
    role: "CEO / Founder",
    image: "/images/team/Yandisa%20Sokhanyile.jpg",
  },
  {
    name: "Nwabisa Vumazonke",
    role: "Marketing & Public Relations Coordinator",
    image: "/images/team/Nwabisa%20Vumazonke.jpg",
  },
  {
    name: "Silas Matabane",
    role: "Junior Cloud Developer",
    image: "/images/team/Silas%20Matabane%20.jpg",
  },
  {
    name: "Siphokazi Pika",
    role: "Sales Coordinator",
    image: "/images/team/Siphokazi%20Pika.jpg",
  },
  {
    name: "Katleho Lesenyeho",
    role: "Business Development Administrator",
    image: "/images/team/Katleho%20Lesenyeho.jpg",
  },
  {
    name: "Mthokozisi Hector Hlatshwayo",
    role: "Media & Graphic Design",
    image: "/images/team/Mthokozisi%20Hector%20Hlatshwayo.jpg",
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
}

function TeamCard({ member, index }) {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl overflow-hidden group hover:border-konecta-orange/30 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-konecta-orange/10 to-konecta-black">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-heading font-extrabold text-5xl text-konecta-orange/40">
              {getInitials(member.name)}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-heading font-bold text-sm text-konecta-white group-hover:text-konecta-orange transition-colors">
          {member.name}
        </h3>
        <p className="text-sm text-white/60 mt-1">{member.role}</p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="team"
      className="relative bg-konecta-black content-px py-section overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-konecta-orange/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div
        className={`relative z-10 text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionEyebrow text="Our People" />
        <h2 className="section-title mt-4 mx-auto">
          Meet the <span className="text-gradient-orange">Team</span>
        </h2>
        <p className="text-base text-white/75 max-w-xl mx-auto leading-relaxed mt-4">
          The passionate individuals driving Konecta&apos;s mission to transform
          Africa&apos;s digital landscape.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
        {TEAM_MEMBERS.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </section>
  );
}
