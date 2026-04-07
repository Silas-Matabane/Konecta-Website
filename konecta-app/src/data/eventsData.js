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
    id: "cio-konect-2026",
    slug: "cio-konect-summit-2026",
    name: "CIO Konect Summit 2026",
    shortName: "CIO Konect",
    tagline: "Where Africa's Technology Leaders Converge",
    category: "summit",
    sector: "cross-sector",
    status: "upcoming",
    featured: true,
    badge: "Flagship Annual Summit",

    // Date & Time
    dateStart: "2026-09-17",
    dateEnd: "2026-09-18",
    time: "08:00 – 17:00 SAST",
    registrationDeadline: "2026-09-10",

    // Venue
    venue: "Sandton Convention Centre",
    city: "Johannesburg",
    country: "South Africa",
    address: "161 Maude St, Sandton, 2196",
    mapUrl: "https://maps.google.com/?q=Sandton+Convention+Centre",

    // Media
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
    ],

    // Content
    description:
      "Africa's premier gathering for Chief Information Officers, technology executives, and digital transformation leaders. CIO Konect 2026 creates a curated environment for peer learning, strategic partnerships, and exposure to the technologies reshaping enterprise IT.",
    longDescription:
      "Now in its 7th edition, CIO Konect Summit continues to set the gold standard for C-suite technology events across the African continent. This year's theme — 'The Intelligent Enterprise: AI, Cloud & Cyber Resilience' — explores how African organisations can harness generative AI, secure their cloud estates, and build future-proof digital strategies.\n\nAttendees will engage with 30+ speakers across keynotes, panels, fireside chats, and interactive workshops. The summit also hosts an exclusive exhibition floor where leading technology vendors showcase their latest solutions.\n\nWhether you're a CIO, CTO, CISO, or digital transformation leader, CIO Konect provides the peer network and strategic insights you need to lead with confidence in a rapidly evolving technology landscape.",
    highlights: [
      "Keynote: The Future of AI in African Enterprise — by Microsoft Africa",
      "CIO Roundtable: Cyber Resilience Strategies for 2027",
      "Exhibition floor with 40+ technology vendors",
      "Exclusive networking dinner at The Venue, Melrose Arch",
      "Microsoft Azure & Copilot deep-dive workshops",
      "CIO Awards: Recognising Africa's most innovative technology leaders",
    ],

    // Speakers
    speakers: [
      {
        name: "Yandisa Sokhanyile",
        role: "CEO, Konecta Group",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
      },
      {
        name: "Dr. Nkosazana Dube",
        role: "CIO, Standard Bank Group",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
      },
      {
        name: "Thabo Molefe",
        role: "Head of Cloud, Microsoft Africa",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      },
      {
        name: "Amina Hassan",
        role: "CISO, MTN Group",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
      },
      {
        name: "James Okonkwo",
        role: "VP Engineering, Andela",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      },
      {
        name: "Fatima Al-Rashidi",
        role: "Director, Deloitte Digital MEA",
        image:
          "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&q=80",
      },
    ],

    // Agenda
    agenda: [
      {
        day: "Day 1 — 17 September",
        sessions: [
          {
            time: "08:00 – 09:00",
            title: "Registration & Networking Breakfast",
            type: "networking",
          },
          {
            time: "09:00 – 09:30",
            title: "Opening Keynote: The Intelligent Enterprise",
            type: "keynote",
          },
          {
            time: "09:45 – 10:30",
            title: "Panel: AI in African Enterprise — Hype vs. Reality",
            type: "panel",
          },
          {
            time: "10:30 – 11:00",
            title: "Tea Break & Exhibition",
            type: "break",
          },
          {
            time: "11:00 – 11:45",
            title: "Fireside Chat: Cloud Strategy for the Continent",
            type: "fireside",
          },
          {
            time: "12:00 – 12:45",
            title: "Workshop Track A: Azure Migration Masterclass",
            type: "workshop",
          },
          {
            time: "12:00 – 12:45",
            title: "Workshop Track B: Cybersecurity Frameworks",
            type: "workshop",
          },
          {
            time: "13:00 – 14:00",
            title: "Networking Lunch",
            type: "networking",
          },
          {
            time: "14:00 – 14:45",
            title: "CIO Roundtable: Cyber Resilience 2027",
            type: "panel",
          },
          {
            time: "15:00 – 15:45",
            title: "Keynote: Data Sovereignty & African Cloud",
            type: "keynote",
          },
          {
            time: "16:00 – 17:00",
            title: "Day 1 Closing & Drinks Reception",
            type: "networking",
          },
          {
            time: "19:00 – 22:00",
            title: "Gala Dinner at Melrose Arch",
            type: "networking",
          },
        ],
      },
      {
        day: "Day 2 — 18 September",
        sessions: [
          {
            time: "08:30 – 09:00",
            title: "Coffee & Connect",
            type: "networking",
          },
          {
            time: "09:00 – 09:45",
            title: "Keynote: Copilot, Agents & the AI Workforce",
            type: "keynote",
          },
          {
            time: "10:00 – 10:45",
            title: "Panel: Digital Transformation Case Studies",
            type: "panel",
          },
          {
            time: "10:45 – 11:15",
            title: "Tea Break & Exhibition",
            type: "break",
          },
          {
            time: "11:15 – 12:00",
            title: "Workshop: Building with Microsoft Copilot Studio",
            type: "workshop",
          },
          {
            time: "12:15 – 13:00",
            title: "CIO Awards Ceremony",
            type: "keynote",
          },
          {
            time: "13:00 – 14:00",
            title: "Farewell Lunch & Networking",
            type: "networking",
          },
        ],
      },
    ],

    // Tickets
    tickets: [
      {
        tier: "Early Bird",
        price: "R 4,500",
        currency: "ZAR",
        perks: [
          "Full 2-day access",
          "Exhibition floor",
          "Networking lunch & dinner",
          "Conference materials",
        ],
        available: true,
      },
      {
        tier: "Standard",
        price: "R 6,500",
        currency: "ZAR",
        perks: [
          "Full 2-day access",
          "Exhibition floor",
          "Networking lunch & dinner",
          "Conference materials",
        ],
        available: true,
      },
      {
        tier: "VIP",
        price: "R 12,000",
        currency: "ZAR",
        perks: [
          "Priority seating",
          "VIP lounge access",
          "Gala dinner table",
          "1-on-1 speaker meet & greet",
          "Full 2-day access",
        ],
        available: true,
      },
      {
        tier: "Group (5+)",
        price: "R 3,800 pp",
        currency: "ZAR",
        perks: [
          "Full 2-day access",
          "Exhibition floor",
          "Networking lunch",
          "10% discount",
        ],
        available: true,
      },
    ],
    ticketUrl: "https://events.konecta.co.za/cio-konect-2026",

    // Meta
    capacity: "300+",
    attendeeProfile:
      "CIOs, CTOs, CISOs, IT Directors, Digital Transformation Leaders",
    sponsors: [
      "Microsoft",
      "MTN Business",
      "Vodacom Business",
      "AWS",
      "Dimension Data",
    ],
    tags: [
      "AI",
      "Cloud",
      "Cybersecurity",
      "Digital Transformation",
      "CIO",
      "Enterprise",
    ],
  },

  {
    id: "witechnology-2026",
    slug: "witechnology-forum-2026",
    name: "WiTechnology Forum 2026",
    shortName: "WiTechnology",
    tagline: "Wireless · Telecoms · Innovation",
    category: "forum",
    sector: "private",
    status: "upcoming",
    featured: true,
    badge: "Pan-African Telecoms",

    dateStart: "2026-11-05",
    dateEnd: "2026-11-06",
    time: "09:00 – 17:00 SAST",
    registrationDeadline: "2026-10-28",

    venue: "CTICC (Cape Town International Convention Centre)",
    city: "Cape Town",
    country: "South Africa",
    address: "Convention Square, 1 Lower Long St, Cape Town, 8001",
    mapUrl: "https://maps.google.com/?q=CTICC+Cape+Town",

    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
    ],

    description:
      "Africa's most influential wireless technology and telecoms innovation platform. WiTechnology 2026 brings together MNOs, spectrum regulators, equipment vendors, and independent technologists to shape the future of African connectivity.",
    longDescription:
      "The 4th edition of WiTechnology Forum gathers 500+ delegates from 10+ African nations under the theme 'Connected Continent: 5G, Satellite & the Last Mile'. This two-day forum tackles the most pressing challenges in African connectivity — from spectrum allocation and 5G rollout to satellite integration, rural broadband, and the economics of last-mile delivery.\n\nWiTechnology is where policy meets practice. Regulators, operators, tower companies, and technology vendors come together to forge the partnerships that will connect the next 500 million Africans.\n\nThe forum features live technology demonstrations, a startup showcase, and the prestigious WiTech Innovation Awards recognising groundbreaking connectivity solutions across the continent.",
    highlights: [
      "Keynote: 5G Rollout — Lessons from Africa's Pioneers",
      "Regulator Panel: Spectrum Policy for the Next Decade",
      "Live demo: LEO Satellite + Terrestrial Hybrid Networks",
      "Startup Showcase: 15 emerging connectivity innovators",
      "WiTech Innovation Awards 2026",
      "Operator roundtable: ARPU growth through VAS",
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
      {
        name: "Sipho Maseko",
        role: "Former CEO, Telkom SA",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      },
      {
        name: "Dr. Mercy Wanjau",
        role: "Director General, CA Kenya",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
      },
    ],

    agenda: [
      {
        day: "Day 1 — 5 November",
        sessions: [
          {
            time: "08:30 – 09:30",
            title: "Registration & Welcome Coffee",
            type: "networking",
          },
          {
            time: "09:30 – 10:15",
            title: "Opening Keynote: Connected Continent Vision",
            type: "keynote",
          },
          {
            time: "10:30 – 11:15",
            title: "Panel: 5G Economics — Is Africa Ready?",
            type: "panel",
          },
          {
            time: "11:15 – 11:45",
            title: "Tea Break & Exhibition",
            type: "break",
          },
          {
            time: "11:45 – 12:30",
            title: "Regulator Roundtable: Spectrum for Growth",
            type: "panel",
          },
          {
            time: "12:45 – 13:30",
            title: "Live Demo: Satellite-Terrestrial Hybrid",
            type: "workshop",
          },
          {
            time: "13:30 – 14:30",
            title: "Networking Lunch",
            type: "networking",
          },
          {
            time: "14:30 – 15:15",
            title: "Startup Showcase Pitches",
            type: "panel",
          },
          {
            time: "15:30 – 16:15",
            title: "Workshop: Rural Broadband Business Models",
            type: "workshop",
          },
          {
            time: "16:30 – 17:30",
            title: "Sundowner Networking on the Terrace",
            type: "networking",
          },
        ],
      },
      {
        day: "Day 2 — 6 November",
        sessions: [
          {
            time: "09:00 – 09:45",
            title: "Keynote: The Economics of Last-Mile Delivery",
            type: "keynote",
          },
          {
            time: "10:00 – 10:45",
            title: "Operator Panel: ARPU Growth Through VAS",
            type: "panel",
          },
          {
            time: "11:00 – 11:45",
            title: "Infrastructure Sharing: Tower & Fibre Models",
            type: "panel",
          },
          {
            time: "12:00 – 12:45",
            title: "WiTech Innovation Awards 2026",
            type: "keynote",
          },
          {
            time: "13:00 – 14:00",
            title: "Farewell Lunch",
            type: "networking",
          },
        ],
      },
    ],

    tickets: [
      {
        tier: "Standard Delegate",
        price: "R 3,200",
        currency: "ZAR",
        perks: [
          "Full 2-day access",
          "Exhibition & demos",
          "Networking lunches",
          "Digital proceedings",
        ],
        available: true,
      },
      {
        tier: "Operator Pass",
        price: "R 5,500",
        currency: "ZAR",
        perks: [
          "Priority seating",
          "Operator-only roundtable",
          "Full 2-day access",
          "Networking dinner",
        ],
        available: true,
      },
      {
        tier: "Startup Pass",
        price: "R 1,500",
        currency: "ZAR",
        perks: [
          "Full 2-day access",
          "Startup showcase entry",
          "Mentorship session",
        ],
        available: true,
      },
    ],
    ticketUrl: "https://events.konecta.co.za/witechnology-2026",

    capacity: "500+",
    attendeeProfile:
      "MNO Executives, Regulators, Tower Companies, Equipment Vendors, Startups",
    sponsors: ["Huawei", "Ericsson", "IHS Towers", "ICASA", "MTN"],
    tags: [
      "5G",
      "Wireless",
      "Telecoms",
      "Spectrum",
      "Rural Broadband",
      "Satellite",
    ],
  },

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

    image:
      "https://municipalindaba.com/wp-content/uploads/2026/03/Banner-Municipal-Indaba.png",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
    ],

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
        image: "/images/speakers/yandisa-sokhanyile.png",
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

  {
    id: "ai-enterprise-workshop-2026",
    slug: "ai-enterprise-workshop-jhb-2026",
    name: "AI for Enterprise Workshop",
    shortName: "AI Workshop",
    tagline: "From Pilot to Production — Practical AI for African Business",
    category: "workshop",
    sector: "private",
    status: "upcoming",
    featured: false,
    badge: "Hands-on Workshop",

    dateStart: "2026-06-12",
    dateEnd: "2026-06-12",
    time: "09:00 – 16:00 SAST",
    registrationDeadline: "2026-06-08",

    venue: "The Campus, Bryanston",
    city: "Johannesburg",
    country: "South Africa",
    address: "57 Sloane Street, Bryanston, 2021",
    mapUrl: "https://maps.google.com/?q=The+Campus+Bryanston",

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    gallery: [],

    description:
      "A hands-on, one-day workshop designed for IT leaders and architects who want to move AI projects from proof-of-concept to production. Powered by Microsoft Azure AI and Copilot Studio.",
    longDescription:
      "Stop talking about AI. Start building with it.\n\nThis intensive one-day workshop, co-hosted by Konecta and Microsoft, is designed for CIOs, IT architects, and development leads who need to translate AI strategy into working solutions. Participants will work hands-on with Azure OpenAI Service, Copilot Studio, and AI Foundry to build real enterprise AI agents.\n\nBy the end of the day, each team will have a working prototype they can take back to their organisation. Limited to 40 participants to ensure personalised guidance.",
    highlights: [
      "Hands-on: Build an AI agent with Copilot Studio",
      "Azure OpenAI Service deep dive",
      "AI governance and responsible AI frameworks",
      "Prototype: Take home a working AI solution",
      "Lunch and networking included",
    ],

    speakers: [
      {
        name: "Thabo Molefe",
        role: "Head of Cloud, Microsoft Africa",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      },
      {
        name: "Yandisa Sokhanyile",
        role: "CEO, Konecta Group",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
      },
    ],

    agenda: [
      {
        day: "12 June 2026",
        sessions: [
          {
            time: "09:00 – 09:30",
            title: "Welcome & AI Landscape Overview",
            type: "keynote",
          },
          {
            time: "09:30 – 10:30",
            title: "Lab 1: Azure OpenAI Service Basics",
            type: "workshop",
          },
          { time: "10:30 – 11:00", title: "Coffee Break", type: "break" },
          {
            time: "11:00 – 12:30",
            title: "Lab 2: Building Agents with Copilot Studio",
            type: "workshop",
          },
          {
            time: "12:30 – 13:30",
            title: "Lunch & Networking",
            type: "networking",
          },
          {
            time: "13:30 – 15:00",
            title: "Lab 3: Enterprise RAG Pattern Implementation",
            type: "workshop",
          },
          {
            time: "15:00 – 15:30",
            title: "AI Governance & Responsible AI",
            type: "keynote",
          },
          {
            time: "15:30 – 16:00",
            title: "Showcase & Wrap-up",
            type: "networking",
          },
        ],
      },
    ],

    tickets: [
      {
        tier: "Workshop Pass",
        price: "R 2,500",
        currency: "ZAR",
        perks: [
          "Full-day hands-on workshop",
          "Azure credits included",
          "Lunch & refreshments",
          "Certificate of completion",
        ],
        available: true,
      },
    ],
    ticketUrl: "https://events.konecta.co.za/ai-workshop-2026",

    capacity: "40",
    attendeeProfile: "CIOs, IT Architects, Development Leads, AI Champions",
    sponsors: ["Microsoft"],
    tags: ["AI", "Azure", "Copilot", "Workshop", "Hands-on"],
  },

  {
    id: "konecta-cxo-networking-2026",
    slug: "konecta-cxo-networking-dubai-2026",
    name: "Konecta CxO Networking Evening — Dubai",
    shortName: "CxO Dubai",
    tagline: "An Exclusive Evening of Connection & Conversation",
    category: "networking",
    sector: "private",
    status: "upcoming",
    featured: false,
    badge: "Invite-Only",

    dateStart: "2026-10-14",
    dateEnd: "2026-10-14",
    time: "18:00 – 22:00 GST",
    registrationDeadline: "2026-10-07",

    venue: "Armani Hotel, Burj Khalifa",
    city: "Dubai",
    country: "UAE",
    address: "Armani Hotel Dubai, Burj Khalifa, Downtown Dubai",
    mapUrl: "https://maps.google.com/?q=Armani+Hotel+Dubai",

    image:
      "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1200&q=80",
    gallery: [],

    description:
      "An invite-only networking evening for senior technology executives exploring African market opportunities. Join Konecta's leadership for an evening of curated conversation, fine dining, and strategic introductions.",
    longDescription:
      "Konecta's CxO Networking Evenings bring together a carefully curated group of 50 senior technology executives for an evening of meaningful conversation, fine dining, and strategic introductions.\n\nThe Dubai edition connects Middle East and African technology leaders who share a common interest in the continent's rapidly growing digital economy. This is not a conference — there are no PowerPoint presentations. Just genuine conversation over an exceptional meal.\n\nAttendance is by invitation only. Request your invitation today.",
    highlights: [
      "Curated guest list of 50 senior executives",
      "Fine dining at Armani Hotel Burj Khalifa",
      "Facilitated matchmaking conversations",
      "No presentations — pure networking",
    ],

    speakers: [
      {
        name: "Yandisa Sokhanyile",
        role: "CEO, Konecta Group",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
      },
    ],

    agenda: [
      {
        day: "14 October 2026",
        sessions: [
          {
            time: "18:00 – 19:00",
            title: "Welcome Drinks & Introductions",
            type: "networking",
          },
          {
            time: "19:00 – 19:15",
            title: "Opening Remarks: Africa's Digital Opportunity",
            type: "keynote",
          },
          {
            time: "19:15 – 21:00",
            title: "Dinner & Facilitated Conversation",
            type: "networking",
          },
          {
            time: "21:00 – 22:00",
            title: "Dessert & Open Networking",
            type: "networking",
          },
        ],
      },
    ],

    tickets: [
      {
        tier: "Invitation",
        price: "Complimentary",
        currency: "",
        perks: [
          "Fine dining included",
          "Curated introductions",
          "Post-event contact sharing",
        ],
        available: true,
      },
    ],
    ticketUrl: "https://events.konecta.co.za/cxo-dubai-2026",

    capacity: "50",
    attendeeProfile:
      "C-Suite Executives, Technology Leaders, Investment Directors",
    sponsors: [],
    tags: ["Networking", "Executive", "Dubai", "CxO"],
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

    venue: "Sandton Convention Centre",
    city: "Johannesburg",
    country: "South Africa",
    address: "161 Maude St, Sandton, 2196",
    mapUrl: "https://maps.google.com/?q=Sandton+Convention+Centre",

    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
    ],

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

    venue: "CTICC",
    city: "Cape Town",
    country: "South Africa",
    address: "Convention Square, 1 Lower Long St, Cape Town, 8001",
    mapUrl: "https://maps.google.com/?q=CTICC+Cape+Town",

    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80",
    gallery: [],

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
    id: "municipal-indaba-2025",
    slug: "municipal-indaba-2025",
    name: "Municipal Indaba 2025",
    shortName: "Municipal Indaba",
    tagline: "Digital Service Delivery for Local Government",
    category: "indaba",
    sector: "government",
    status: "past",
    featured: false,
    badge: "Government & Municipal",

    dateStart: "2025-07-17",
    dateEnd: "2025-07-18",
    time: "08:30 – 16:30 SAST",
    registrationDeadline: "2025-07-10",

    venue: "Birchwood Hotel & OR Tambo Conference Centre",
    city: "Johannesburg",
    country: "South Africa",
    address: "1 Jones Rd, Boksburg, Gauteng, 1459",
    mapUrl: "https://maps.google.com/?q=Birchwood+Hotel+OR+Tambo",

    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80",
    gallery: [],

    description:
      "The 2025 Municipal Indaba hosted 180+ government officials from 45+ municipalities, focusing on practical digital service delivery transformation, community WiFi deployment, and municipal cybersecurity.",
    longDescription:
      "Municipal Indaba 2025 delivered tangible outcomes for local government technology leaders. The programme focused on practical implementation — moving beyond strategy documents to actual deployment case studies.\n\nKey outcomes included the launch of the Municipal Digital Readiness Index (a Konecta initiative tracking ICT maturity across SA municipalities), partnerships between 12 municipalities and technology vendors facilitated through structured matchmaking sessions, and a standing-room-only workshop on community WiFi business models.",
    highlights: [
      "180+ officials from 45+ municipalities",
      "Launch of Municipal Digital Readiness Index",
      "12 municipality-vendor partnerships facilitated",
      "Community WiFi workshop — standing room only",
    ],

    speakers: [
      {
        name: "Yandisa Sokhanyile",
        role: "CEO, Konecta Group",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
      },
    ],

    agenda: [],
    tickets: [],
    ticketUrl: "",

    capacity: "180+",
    attendeeProfile: "Municipal Managers, Government CIOs, Councillors",
    sponsors: ["SITA", "Microsoft", "Huawei"],
    tags: ["eGovernment", "Municipal", "Digital Inclusion", "WiFi"],
  },

  {
    id: "cio-konect-2024",
    slug: "cio-konect-summit-2024",
    name: "CIO Konect Summit 2024",
    shortName: "CIO Konect",
    tagline: "AI, Automation & the Digital Enterprise",
    category: "summit",
    sector: "cross-sector",
    status: "past",
    featured: false,
    badge: "Flagship Annual Summit",

    dateStart: "2024-09-19",
    dateEnd: "2024-09-20",
    time: "08:00 – 17:00 SAST",
    registrationDeadline: "2024-09-12",

    venue: "Sandton Convention Centre",
    city: "Johannesburg",
    country: "South Africa",
    address: "161 Maude St, Sandton, 2196",
    mapUrl: "https://maps.google.com/?q=Sandton+Convention+Centre",

    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    gallery: [],

    description:
      "The 5th edition of CIO Konect explored the intersection of AI, automation, and enterprise digital strategy. 200+ senior technology leaders gathered to chart the course for the intelligent enterprise.",
    longDescription:
      "CIO Konect 2024 was defined by the rapid emergence of generative AI and its implications for African enterprises. The summit explored how CIOs can responsibly adopt AI tools, automate workflows, and build the foundation for the intelligent enterprise.\n\nA partnership with Microsoft saw live demonstrations of Copilot for Microsoft 365 and Azure AI Studio, giving attendees hands-on experience with tools that would reshape enterprise productivity.",
    highlights: [
      "200+ senior technology leaders",
      "Live Microsoft Copilot demonstrations",
      "First AI-focused track at CIO Konect",
      "Partnership with Microsoft on AI workshop",
    ],

    speakers: [
      {
        name: "Yandisa Sokhanyile",
        role: "CEO, Konecta Group",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
      },
    ],

    agenda: [],
    tickets: [],
    ticketUrl: "",

    capacity: "200+",
    attendeeProfile: "CIOs, CTOs, IT Directors",
    sponsors: ["Microsoft", "Vodacom Business", "AWS"],
    tags: ["AI", "Automation", "Digital Transformation", "Enterprise"],
  },
];
