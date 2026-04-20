/*  ────────────────────────────────────────────────────────
    Konecta Events Database
    ──────────────────────────────────────────────────────── */

export const EVENT_CATEGORIES = [
  { value: "all", label: "All Events" },
  { value: "summit", label: "Summits" },
  { value: "forum", label: "Forums" },
  { value: "indaba", label: "Indabas" },
  { value: "conference", label: "Conferences" },
  { value: "workshop", label: "Workshops" },
  { value: "hackathon", label: "Hackathons" },
  { value: "roundtable", label: "Roundtables" },
  { value: "networking", label: "Networking" },
  { value: "webinar", label: "Webinars" },
  { value: "expo", label: "Expos & Showcases" },
  { value: "awards", label: "Awards Galas" },
];

export const EVENT_SECTORS = [
  { value: "all", label: "All Sectors" },
  { value: "private", label: "Private Sector" },
  { value: "public", label: "Public Sector" },
  { value: "government", label: "Government" },
  { value: "cross-sector", label: "Cross-Sector" },
];

export const EVENT_LOCATIONS = [
  { value: "all", label: "All Locations" },
  { value: "Johannesburg", label: "Johannesburg" },
  { value: "Cape Town", label: "Cape Town" },
  { value: "Dubai", label: "Dubai" },
  { value: "Nairobi", label: "Nairobi" },
  { value: "Lagos", label: "Lagos" },
  { value: "East London", label: "East London" },
];

export const eventsDatabase = [
  /* ── UPCOMING EVENTS ─────────────────────────────────── */
  {
    id: "municipal-indaba-2026",
    slug: "municipal-indaba-2026",
    name: "Municipal Indaba 2026",
    shortName: "Municipal Indaba",
    tagline: "Innovation · Sustainability · Service Delivery",
    category: "indaba",
    sector: "government",
    status: "upcoming",
    featured: true,
    badge: "Government & Municipal",

    dateStart: "2026-04-22",
    dateEnd: "2026-04-23",
    time: "08:30 – 15:30 SAST",
    registrationDeadline: "2026-04-15",

    venue: "East London International Convention Centre",
    city: "East London",
    country: "South Africa",
    address:
      "Esplanade, 22 Esplanade St, Quigney, East London, Eastern Cape 5201",
    mapUrl:
      "https://maps.google.com/maps?q=Esplanade%2C+22+Esplanade+St%2C+Quigney%2C+South+Africa+East+London+Eastern+Cape+5201+South+Africa",

    image: "/images/municipal-indaba-2026/Banner%20Municipal%20Indaba.png",
    gallery: [
      "/images/municipla-indaba-2024/IMG_20240221_144613-scaled.jpeg",
      "/images/municipla-indaba-2024/Indaba-Group-picture.jpg",
      "/images/municipla-indaba-2024/KhathuMapula.jpeg",
    ],
    galleryLabel: "Gallery — Municipal Indaba 2024 (Past Event)",

    description:
      "The Municipal Indaba 2026, hosted by Konecta, brings together key stakeholders across local government, the public and private sectors, civil society, and development partners to reimagine local governance through digital transformation and artificial intelligence.",
    longDescription:
      "This year's theme, 'Rethinking Local Governance: Innovation, Sustainability, and Service Delivery', aims to explore how technology and innovation can drive smarter, more inclusive, and citizen-centred public service delivery. The Indaba will feature thought-provoking discussions and expert insights on key governance challenges and opportunities.\n\nKey themes include AI for Governance — leveraging predictive analytics, automation, and enhanced service delivery; Smart Infrastructure — IoT, connected utilities, and public Wi-Fi; Cybersecurity & Trust — protecting digital infrastructure and data integrity; Cloud Migration for municipal systems; Digital Platforms for connected government; and Digital Inclusion to ensure no community is left behind.\n\nAs a Level 1 B-BBEE company, Konecta bridges the gap between government procurement requirements and world-class technology delivery, making this indaba uniquely positioned to facilitate meaningful partnerships between government and the private sector.",
    highlights: [
      "AI for Governance: Predictive analytics, automation & enhanced service delivery",
      "Smart Infrastructure: IoT, connected utilities & public Wi-Fi",
      "Cybersecurity & Trust: Protecting digital infrastructure & data integrity",
      "Cloud Migration for municipal systems",
      "Digital Platforms for connected government",
      "Digital Inclusion: Ensuring no community is left behind",
    ],

    speakers: [
      {
        name: "Yandisa Sokhanyile",
        role: "CEO, Konecta",
        image: "/images/speakers/yandisa-sokhanyile.jpg",
      },
      {
        name: "Miyelani Holeni",
        role: "Ntinyiso Consulting",
        image: "/images/speakers/miyelani-holeni.png",
      },
      {
        name: "Monde Sekiti",
        role: "Sentech",
        image: "/images/speakers/monde-sekiti.png",
      },
      {
        name: "John Smith",
        role: "Kagiso Trust",
        image: "/images/speakers/john-smith.png",
      },
    ],

    agenda: [
      {
        day: "Day 1 — 22 April: Keynote Addresses, Presentations & Panel Discussions",
        sessions: [
          {
            time: "08:30 – 09:00",
            title: "Registration & Networking Breakfast",
            description:
              "Arrival of delegates, welcome refreshments, exhibitor walkabout",
            type: "networking",
          },
          {
            time: "09:00 – 09:45",
            title: "Opening & Welcome Remarks",
            description:
              "Welcome from organisers, overview of the Indaba, setting the tone",
            type: "keynote",
          },
          {
            time: "09:45 – 10:15",
            title: "Opening Keynote: The Future of Local Government",
            description:
              "Rethinking Governance in the Age of Digital Transformation",
            type: "keynote",
          },
          {
            time: "10:15 – 11:30",
            title: "Panel 1: Digital Transformation in Municipal Operations",
            description:
              "AI, Cybersecurity & Digital Infrastructure for Secure Municipal Management — Focus: AI in service delivery, structured cybersecurity infrastructure protection, data governance, and risk management",
            type: "panel",
          },
          {
            time: "11:30 – 12:45",
            title: "Panel 2: Smart & Inclusive Cities",
            description:
              "Bridging the Digital Divide: Smart Infrastructure and Inclusive Municipalities — Focus: Connectivity, smart infrastructure, citizen access, digital inclusion",
            type: "panel",
          },
          {
            time: "12:45 – 13:00",
            title: "Q & A",
            type: "panel",
          },
          {
            time: "13:00 – 14:00",
            title: "Lunch Break & Networking",
            type: "break",
          },
          {
            time: "14:00 – 15:15",
            title: "Panel 3: Financial Innovation & Collaborative Governance",
            description:
              "Modernising Municipal Finance Through Technology and Partnerships — Focus: Revenue optimisation, transparency, data-driven finance, partnerships, funding models",
            type: "panel",
          },
          {
            time: "15:15 – 15:30",
            title: "Day 1 Wrap-Up",
            description:
              "Summary of key insights, takeaways for municipalities",
            type: "networking",
          },
        ],
      },
      {
        day: "Day 2 — 23 April: Workshops & Technology Demonstrations",
        sessions: [
          {
            time: "08:30 – 09:00",
            title: "Registration & Morning Networking",
            description: "Arrival, coffee, and informal networking",
            type: "networking",
          },
          {
            time: "09:00 – 10:30",
            title: "Workshop 1: Revenue & Data Management",
            description:
              "Kagiso Trust — Practical, interactive session on optimising municipal revenue and data management",
            type: "workshop",
          },
          {
            time: "10:30 – 11:00",
            title:
              "Workshop 2: Unpacking Digital Transformation for Municipalities",
            description:
              "Konecta — Exploring digital frameworks, innovative solutions, and strategies to accelerate service delivery through technology, including how to procure software efficiently via the Microsoft Marketplace",
            type: "workshop",
          },
          {
            time: "11:00 – 11:30",
            title: "Tea Break",
            description: "Light refreshments and networking",
            type: "break",
          },
          {
            time: "11:30 – 13:00",
            title: "Workshop 3: Turnaround Strategies & Municipal Funding",
            description:
              "KNM — Practical insights into improving municipal performance, funding strategies, and implementing turnaround plans for sustainable service delivery",
            type: "workshop",
          },
          {
            time: "13:00 – 14:00",
            title: "Lunch Break",
            description: "Attendees network over lunch and visit stands",
            type: "break",
          },
          {
            time: "14:00 – 15:30",
            title:
              "Workshop 4: Enabling Smart Municipalities Through Connectivity & Digital Infrastructure",
            description:
              "Sentech — Showcasing infrastructure solutions, connectivity, and digital platforms that enable smarter, more efficient municipalities",
            type: "workshop",
          },
          {
            time: "15:30",
            title: "Closing Remarks & Wrap-Up",
            type: "networking",
          },
        ],
      },
    ],

    tickets: [
      {
        tier: "Standard Delegate",
        price: "R 5,999",
        currency: "ZAR",
        perks: [
          "Full 2-day access",
          "All sessions & workshops",
          "Networking lunches",
          "Conference proceedings",
        ],
        available: true,
      },
    ],
    ticketUrl: "https://municipalindaba.com/event/municipal-indaba-2026/",

    capacity: "200+",
    attendeeProfile:
      "Mayors, Municipal Managers, Government CIOs, IT Directors, Civil Society, Development Partners",
    sponsors: [
      "Konecta",
      "SITA",
      "Microsoft",
      "Sentech",
      "Kagiso Trust",
      "KNM",
      "Ntinyiso Consulting",
      "Khumalo Xaba Xulu Auditors",
    ],
    tags: [
      "AI for Governance",
      "Smart Infrastructure",
      "Cybersecurity",
      "Cloud Migration",
      "Digital Inclusion",
      "Service Delivery",
    ],
  },

  /* ── PAST EVENTS ─────────────────────────────────────── */
  {
    id: "cio-konect-2025",
    slug: "cio-konect-summit-2025",
    name: "CIO Konect Summit 2025",
    shortName: "CIO Konect",
    tagline: "Cloud, Cybersecurity & the African Enterprise",
    category: "summit",
    sector: "cross-sector",
    status: "past",
    featured: false,
    badge: "Flagship Annual Summit",

    dateStart: "2025-09-11",
    dateEnd: "2025-09-12",
    time: "08:00 – 17:00 SAST",
    registrationDeadline: "2025-09-04",

    venue: "Adapt IT Johannesburg Campus",
    city: "Johannesburg",
    country: "South Africa",
    address: "Adapt IT Johannesburg Campus",
    mapUrl: "https://maps.google.com/?q=Adapt+IT+Johannesburg+Campus",

    image: "/images/cio-konect-2025/cover.jpg",
    gallery: [
      "/images/cio-konect-2025/gallery-1.jpg",
      "/images/cio-konect-2025/gallery-2.jpg",
      "/images/cio-konect-2025/gallery-3.jpg",
      "/images/cio-konect-2025/gallery-4.jpg",
    ],
    galleryLabel: "Event Recap — CIO Konect Summit 2025",

    description:
      "The 6th edition of CIO Konect Summit brought together 250+ CIOs and technology leaders under the theme 'Cloud, Cybersecurity & the African Enterprise'. The summit featured 25 speakers, 35 exhibitors, and the inaugural CIO Awards Africa.",
    longDescription:
      "CIO Konect 2025 marked a milestone year with record attendance and the launch of the CIO Awards Africa. The summit delivered actionable insights on cloud migration at scale, zero-trust security frameworks, and the role of AI co-pilots in enterprise productivity.\n\nHighlights included a keynote by Microsoft Africa's Managing Director on the Azure Hyperscale opportunity, a live cyber attack simulation by Dimension Data, and the emotional inauguration of the CIO Awards Africa recognising outstanding technology leadership across the continent.",
    highlights: [
      "250+ CIOs and IT leaders attended",
      "25 speakers across 2 days",
      "Inaugural CIO Awards Africa ceremony",
      "Live cyber attack simulation & response demo",
      "35 technology vendors on the exhibition floor",
    ],

    speakers: [
      {
        name: "Yandisa Sokhanyile",
        role: "CEO, Konecta Group",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
      },
      {
        name: "Lillian Barnard",
        role: "MD, Microsoft South Africa",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
      },
    ],

    agenda: [],
    tickets: [],
    ticketUrl: "",

    capacity: "250+",
    attendeeProfile: "CIOs, CTOs, CISOs, IT Directors",
    sponsors: [
      "Microsoft",
      "MTN Business",
      "Dimension Data",
      "Vodacom Business",
    ],
    tags: ["Cloud", "Cybersecurity", "CIO", "Enterprise", "Awards"],
  },

  {
    id: "witechnology-2025",
    slug: "witechnology-forum-2025",
    name: "WiTechnology Forum 2025",
    shortName: "WiTechnology",
    tagline: "5G · Fibre · The Last Mile",
    category: "forum",
    sector: "private",
    status: "past",
    featured: false,
    badge: "Pan-African Telecoms",

    dateStart: "2025-11-13",
    dateEnd: "2025-11-14",
    time: "09:00 – 17:00 SAST",
    registrationDeadline: "2025-11-06",

    venue: "Adapt IT Johannesburg Campus",
    city: "Johannesburg",
    country: "South Africa",
    address: "Adapt IT Johannesburg Campus",
    mapUrl: "https://maps.google.com/?q=Adapt+IT+Johannesburg+Campus",

    image: "/images/witechnology-summit-2025/cover.jpg",
    gallery: [
      "/images/witechnology-summit-2025/gallery-1.jpg",
      "/images/witechnology-summit-2025/gallery-2.jpg",
      "/images/witechnology-summit-2025/gallery-3.jpg",
    ],
    galleryLabel: "Event Recap — WiTechnology Forum 2025",

    description:
      "The 3rd edition of WiTechnology brought together 450+ delegates from 8 African countries. The forum focused on 5G deployment strategies, fibre economics, and solving Africa's last-mile connectivity challenge.",
    longDescription:
      "WiTechnology 2025 cemented its position as Africa's most important wireless and telecoms innovation forum. With 450+ delegates representing 8 countries, the 3rd edition delivered powerful sessions on 5G deployment realities in African markets, the economics of fibre-to-the-home, and innovative models for last-mile connectivity in rural and peri-urban areas.\n\nThe forum also hosted the first WiTech Startup Pitch Competition, with 10 emerging connectivity startups competing for a R500,000 prize pool and mentorship from industry leaders.",
    highlights: [
      "450+ delegates from 8 countries",
      "First WiTech Startup Pitch Competition",
      "5G live demo zone with 3 equipment vendors",
      "Regulator roundtable with ICASA, CA Kenya, ZICTA",
    ],

    speakers: [
      {
        name: "Yandisa Sokhanyile",
        role: "CEO, Konecta Group",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
      },
      {
        name: "Kwame Asante",
        role: "CEO, AirtelTigo Ghana",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
      },
    ],

    agenda: [],
    tickets: [],
    ticketUrl: "",

    capacity: "450+",
    attendeeProfile: "MNO Executives, Regulators, Tower Companies, Startups",
    sponsors: ["Huawei", "Ericsson", "IHS Towers"],
    tags: ["5G", "Fibre", "Last Mile", "Telecoms", "Wireless"],
  },

  {
    id: "municipal-indaba-2024",
    slug: "municipal-indaba-2024",
    name: "Municipal Indaba 2024",
    shortName: "Municipal Indaba",
    tagline: "Digital Transformation for Local Government",
    category: "indaba",
    sector: "government",
    status: "past",
    featured: false,
    badge: "Government & Municipal",

    dateStart: "2024-02-21",
    dateEnd: "2024-02-22",
    time: "08:30 – 15:30 SAST",
    registrationDeadline: "2024-02-14",

    venue: "Adapt IT Johannesburg Campus",
    city: "Johannesburg",
    country: "South Africa",
    address: "Adapt IT Johannesburg Campus",
    mapUrl: "https://maps.google.com/?q=Adapt+IT+Johannesburg+Campus",

    image: "/images/municipla-indaba-2024/Indaba-Group-picture.jpg",
    gallery: [
      "/images/municipla-indaba-2024/IMG_20240221_144613-scaled.jpeg",
      "/images/municipla-indaba-2024/Indaba-Group-picture.jpg",
      "/images/municipla-indaba-2024/KhathuMapula.jpeg",
    ],
    galleryLabel: "Event Recap — Municipal Indaba 2024",

    description:
      "The Municipal Indaba 2024, hosted by Konecta, brought together key stakeholders across local government, the public and private sectors, and development partners to explore digital transformation strategies for improved municipal service delivery.",
    longDescription:
      "Municipal Indaba 2024 focused on practical approaches to digitising local government operations and improving citizen engagement through technology. The event featured presentations and panel discussions on smart infrastructure, community WiFi deployment, digital platforms for connected government, and strategies for ensuring digital inclusion across municipalities.\n\nAs a Level 1 B-BBEE company, Konecta demonstrated its role in bridging the gap between government procurement requirements and world-class technology delivery.",
    highlights: [
      "Digital transformation strategies for municipalities",
      "Smart infrastructure & community WiFi discussions",
      "Government-private sector partnership facilitation",
      "Digital inclusion for underserved communities",
    ],

    speakers: [
      {
        name: "Yandisa Sokhanyile",
        role: "CEO, Konecta",
        image: "/images/speakers/yandisa-sokhanyile.jpg",
      },
    ],

    agenda: [],
    tickets: [],
    ticketUrl: "",

    capacity: "150+",
    attendeeProfile: "Municipal Managers, Government CIOs, Councillors",
    sponsors: ["Microsoft", "Huawei"],
    tags: ["eGovernment", "Municipal", "Digital Inclusion", "WiFi"],
  },
];
