export const COMPANY = {
  name: "Konecta",
  fullName: "Konecta Group (Pty) Ltd",
  tagline: "Africa's Leading Telecoms & Digital Infrastructure Consultancy",
  email: "marketing@konecta.co.za",
  location: "Johannesburg, South Africa",
  country: "South Africa",
  registrationNote: "Registered in South Africa · CIPC Reg. No. [XXXXXXX]",
  year: new Date().getFullYear(),
};

export const PAGE_SEO = {
  home: {
    title: null,
    description:
      "Konecta — Africa's premier telecoms & technology consultancy. We build networks, power data, and enable value-added services across the continent.",
  },
  platform: {
    title: "Our Platform",
    description:
      "Konecta's end-to-end value chain transforms connectivity into intelligent platforms that generate big data, analytics, and revenue.",
  },
  services: {
    title: "Our Services",
    description:
      "Six pillars of telecoms and technology excellence — from network deployment to AI adoption, driving measurable outcomes across Africa.",
  },
  microsoft: {
    title: "Microsoft Partnership",
    description:
      "As an authorised Microsoft Partner, Konecta delivers Azure, Microsoft 365, Copilot AI, and Dynamics 365 to African enterprises.",
  },
  events: {
    title: "Industry Events",
    description:
      "Konecta convenes Africa's most important technology conversations through three flagship events for CIOs, municipal leaders, and telecoms innovators.",
  },
  impact: {
    title: "Impact & Case Studies",
    description:
      "Real projects, measurable results. See how Konecta delivers transformative outcomes for Africa's leading organisations.",
  },
  insights: {
    title: "Insights & Thought Leadership",
    description:
      "Expert analysis on telecoms, AI adoption, Microsoft technologies, and digital strategy across Africa.",
  },
  about: {
    title: "About Konecta",
    description:
      "Africa's premier telecoms and technology consultancy — Level 1 B-BBEE certified, 100% women-owned, and a trusted Microsoft Partner.",
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with Konecta. Offices in Johannesburg, Cape Town, Dubai, and Mumbai. Let's build Africa's digital future together.",
  },
  wifiPlatform: {
    title: "WiFi Platform",
    description:
      "Konecta's enterprise-grade WiFi platform delivering connectivity, captive portals, and analytics across Africa.",
  },
  academy: {
    title: "Konecta Academy",
    description:
      "Accredited training programmes in AI, technopreneurship, and change management — upskilling Africa's digital workforce.",
  },
};

export const OFFICES = [
  { city: "Johannesburg", tz: "Africa/Johannesburg", label: "Headquarters" },
  { city: "Cape Town", tz: "Africa/Johannesburg", label: "Regional Office" },
  { city: "Dubai", tz: "Asia/Dubai", label: "UAE Office" },
  { city: "Mumbai", tz: "Asia/Kolkata", label: "India Office" },
  { city: "London", tz: "Europe/London", label: "UK Office" },
];

export const FOOTER_SERVICES = [
  "Network Build & WiFi-as-a-Service",
  "Big Data & Analytics Platforms",
  "Value-Added Services",
  "Microsoft Azure & AI",
  "Managed IT Services",
  "Telecoms Consulting",
];

export const FOOTER_EVENTS = [
  { label: "CIO Konect Summit", to: "/events/cio-konect-summit-2026" },
  { label: "Municipal Indaba", to: "/events/municipal-indaba-2026" },
  { label: "WiTechnology Forum", to: "/events/witechnology-forum-2026" },
  { label: "All Events", to: "/events" },
  { label: "Sponsor an Event", to: "/contact" },
];

export const FOOTER_COMPANY = [
  { label: "About Konecta", to: "/about" },
  { label: "Impact Projects", to: "/impact" },
  { label: "Insights & News", to: "/insights" },
];

export const BADGES = [
  "Level 1 B-BBEE Certified",
  "100% Women-Owned",
  "Pan-African TMT Specialist",
];

export const HERO_STATS = [
  { end: 12, suffix: "+", label: "African Markets", icon: "🌍" },
  { end: 50, suffix: "+", label: "Enterprise Clients", icon: "🏢" },
  { end: 3, suffix: "", label: "Industry Platforms", icon: "🎙️" },
  { end: 100, suffix: "%", label: "Women-Owned", icon: "♀️" },
];

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80";

export const LEADERSHIP_DATA = {
  image: "/speakers/yandisa-sokhanyile.png",
  yearsExperience: "15+",
  quote:
    "Konecta has evolved into a technology company focused on building the intelligent infrastructure that powers Africa\u2019s digital future.",
  author: "Yandisa Sokhanyile, Founder & CEO, Konecta Group",
};

export const CONTACT_SUBJECTS = [
  "WiFi & Network Build",
  "Microsoft Azure & AI",
  "Telecoms Consulting",
  "Event Sponsorship",
  "General Enquiry",
];

export const NAV_LINKS = [
  { label: "Platform", path: "/platform" },
  { label: "Services", path: "/services" },
  { label: "Microsoft", path: "/microsoft" },
  { label: "Events", path: "/events" },
  { label: "Impact", path: "/impact" },
  { label: "Insights", path: "/insights" },
  { label: "Academy", path: "/academy" },
  { label: "About", path: "/about" },
];

export const CREDIBILITY_ITEMS = [
  {
    icon: "🏆",
    title: "Level 1 B-BBEE",
    desc: "Highest empowerment certification supporting inclusive economic participation",
  },
  {
    icon: "♀",
    title: "100% Women-Owned",
    desc: "Driving inclusive tech growth",
  },
  {
    icon: "microsoft",
    title: "Microsoft Partner",
    desc: "Azure, 365, AI & Dynamics deployments",
    isMicrosoft: true,
  },
  { icon: "🌍", title: "Pan-African Reach", desc: "Active in 12+ markets" },
  {
    icon: "📡",
    title: "TMT Specialist",
    desc: "Technology · Media · Telecoms",
  },
  {
    icon: "🎙️",
    title: "3 Industry Platforms",
    desc: "Flagship technology events convening Africa's leading digital decision-makers",
  },
];

export const TICKER_ITEMS = [
  "Network Build & Deployment",
  "Big Data Collection & Analytics",
  "Value-Added Services Enablement",
  "Microsoft Partner — Azure · Copilot · Dynamics",
  "CIO Konect Annual Summit",
  "Municipal Indaba",
  "WiTechnology Forum",
  "WiFi-as-a-Service",
  "Level 1 B-BBEE · 100% Women-Owned",
];

export const COUNTRIES = [
  { name: "South Africa", active: true },
  { name: "Kenya", active: true },
  { name: "Zambia", active: true },
  { name: "Zimbabwe", active: true },
  { name: "Tanzania", active: true },
  { name: "Mozambique", active: true },
  { name: "Nigeria", active: false, note: "Expanding" },
  { name: "Ghana", active: false, note: "Expanding" },
  { name: "Uganda", active: false, note: "Expanding" },
  { name: "Rwanda", active: false, note: "Expanding" },
];

export const SOCIAL_LINKS = [
  { label: "in", href: "#", platform: "LinkedIn" },
  { label: "f", href: "#", platform: "Facebook" },
  { label: "𝕏", href: "#", platform: "X" },
];
