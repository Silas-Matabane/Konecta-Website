import { Helmet } from "react-helmet-async";

const SITE_NAME = "Konecta";
const DEFAULT_DESCRIPTION =
  "Africa's Premier Telecoms & Technology Consultancy. We build networks, power data, and enable value-added services across the continent.";
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80";
const BASE_URL = "https://konecta.co.za";

export default function SEO({ title, description, path = "/", image }) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — ${DEFAULT_DESCRIPTION.slice(0, 60)}`;
  const desc = description || DEFAULT_DESCRIPTION;
  const img = image || DEFAULT_IMAGE;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={url} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}
