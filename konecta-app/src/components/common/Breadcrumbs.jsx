import { Link, useLocation, useParams } from "react-router-dom";
import { eventsDatabase } from "@data/eventsData";

const ROUTE_LABELS = {
  platform: "Platform",
  services: "Services",
  microsoft: "Microsoft Partnership",
  events: "Events",
  impact: "Impact",
  insights: "Insights",
  about: "About",
  contact: "Contact",
  "wifi-platform": "WiFi Platform",
};

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const { slug } = useParams();

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const crumbs = segments.map((seg, i) => {
    const path = "/" + segments.slice(0, i + 1).join("/");
    const isLast = i === segments.length - 1;

    let label = ROUTE_LABELS[seg];
    if (!label && slug && seg === slug) {
      const event = eventsDatabase.find((e) => e.slug === slug);
      label = event ? event.shortName || event.name : seg;
    }
    if (!label)
      label = seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

    return { path, label, isLast };
  });

  return (
    <nav aria-label="Breadcrumb" className="px-6 md:px-12 lg:px-20 py-3">
      <ol className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
        <li>
          <Link to="/" className="hover:text-konecta-orange transition-colors">
            Home
          </Link>
        </li>
        {crumbs.map(({ path, label, isLast }) => (
          <li key={path} className="flex items-center gap-1.5">
            <span className="text-white/20">/</span>
            {isLast ? (
              <span className="text-konecta-orange truncate max-w-[200px]">
                {label}
              </span>
            ) : (
              <Link
                to={path}
                className="hover:text-konecta-orange transition-colors truncate max-w-[200px]"
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
