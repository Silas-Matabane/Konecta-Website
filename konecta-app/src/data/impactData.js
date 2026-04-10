/*  ────────────────────────────────────────────────────────
    Konecta Impact & News CMS Database
    JSON-driven content management for Impact Projects,
    Events, and News/Media sections.
    ──────────────────────────────────────────────────────── */

/* ── FILTER OPTIONS ── */

export const IMPACT_CATEGORIES = [
  { value: "all", label: "All Categories" },
  { value: "digital-transformation", label: "Digital Transformation" },
  { value: "community-development", label: "Community Development" },
  { value: "women-in-tech", label: "Women in Tech" },
  { value: "wifi-as-a-service", label: "WiFi-as-a-Service" },
  { value: "microsoft-azure", label: "Microsoft Azure" },
  { value: "municipal-technology", label: "Municipal Technology" },
  { value: "education", label: "Education & Innovation" },
];

export const IMPACT_YEARS = [
  { value: "all", label: "All Years" },
  { value: "2026", label: "2026" },
  { value: "2025", label: "2025" },
  { value: "2024", label: "2024" },
];

export const NEWS_CATEGORIES = [
  { value: "all", label: "All News" },
  { value: "press", label: "Press Coverage" },
  { value: "media-feature", label: "Media Features" },
  { value: "interview", label: "Interviews" },
  { value: "announcement", label: "Announcements" },
];

export const NEWS_SOURCES = [
  { value: "all", label: "All Sources" },
  { value: "itweb", label: "ITWeb" },
  { value: "sabc", label: "SABC" },
  { value: "worlds-leaders", label: "World's Leaders Magazine" },
  { value: "tech-central", label: "TechCentral" },
  { value: "other", label: "Other" },
];

/* ── IMPACT PROJECTS DATABASE ── */

export const impactProjectsDatabase = [
  {
    id: "witechnology-summit-2025",
    slug: "witechnology-summit-2025",
    title: "WiTechnology Summit 2025: Empowering Women, Igniting Innovation",
    shortTitle: "WiTechnology Summit 2025",
    category: "women-in-tech",
    type: "event-hosted",
    status: "completed",
    featured: true,
    date: "2025-08",
    year: "2025",
    location: "Midrand, South Africa",
    badge: "Women in Tech",
    image: "/images/witechnology-summit-2025/cover.jpg",
    thumbnail: "/images/witechnology-summit-2025/cover.jpg",
    description:
      "The WiTechnology Summit 2025 brought together trailblazing women, industry leaders, and innovators in Midrand for an unforgettable celebration of progress in ICT and technology. From the official launch of the WiTechnology digital hub to powerful conversations on women's economic empowerment, the summit spotlighted changemakers driving Africa's digital transformation.",
    longDescription:
      "The WiTechnology Summit 2025, held during Women's Month, was a powerful convergence of female entrepreneurs, corporates, and government partners in Midrand. The event successfully created an inspiring and empowering atmosphere dedicated to strengthening gender equity and inclusivity in the technology and telecommunications sector.\n\nThe highlight was the official launch of the WiTechnology digital marketplace platform, a new hub designed to connect, support, and spotlight women innovators.",
    purpose:
      "The summit is more than just an event; it's a catalytic platform dedicated to elevating the role of women in technology. Our mission is to break barriers and create new opportunities in an industry that thrives on innovation and diversity, ultimately building an inclusive, innovative, and transformative tech community across the continent.",
    focusAreas: [
      "Women's Economic Empowerment: Championing growth through targeted support like Sedfa's Women's Desk and the upcoming R300-million Women's Entrepreneurship Fund",
      "Collaborative Ecosystem Building: Fostering strategic partnerships between SMMEs, established corporations, and government agencies",
      "Knowledge Sharing & Mentorship: Enriching the dialogue with expertise from industry leaders on topics like ESD, 5G, AI, and 4IR",
      "Digital Connectivity: Launching and growing the WiTechnology digital hub as a central resource for women innovators and entrepreneurs",
    ],
    highlights: [
      "Official Platform Launch: The successful unveiling of the WiTechnology digital hub",
      "Inspiring Keynote Addresses: Visionary talks from leaders like Yandisa Sokhanyile of KONECTA on 'Fueling the Next Wave of African Tech through Enterprise and Supplier Development'",
      "Strategic Government Partnership: Sedfa's participation, highlighting their role and the monumental R300-million Women's Entrepreneurship Fund",
      "Powerful Panels & Discussions: Enriching dialogues from speakers from UN Women, Adapt IT, BiPTEL, and the Department of Trade and Industry",
      "Vibrant Networking: Creating meaningful connections between aspiring entrepreneurs and established industry leaders",
      "Strong Sponsor Commitment: Support from sponsors like Motorola Solutions, Telecel Centrafrique SA, and Innovator Trust",
    ],
    gallery: [
      "/images/witechnology-summit-2025/gallery-hero.jpg",
      "/images/witechnology-summit-2025/gallery-1.jpg",
      "/images/witechnology-summit-2025/gallery-2.jpg",
      "/images/witechnology-summit-2025/gallery-3.jpg",
    ],
    ctaText: "Visit WiTechnology Hub",
    ctaUrl: "https://witechnology.africa/become-a-member/",
    tags: [
      "women-in-tech",
      "summit",
      "digital-hub",
      "empowerment",
      "WiTechnology",
    ],
    metric: "200+",
    metricLabel: "Women leaders & innovators convened",
  },

  {
    id: "cio-konect-2025",
    slug: "cio-konect-2025",
    title: "CIO-Konect 2025: Shaping the Future of Technology Leadership",
    shortTitle: "CIO-Konect 2025",
    category: "digital-transformation",
    type: "event-hosted",
    status: "completed",
    featured: true,
    date: "2025-05-22",
    year: "2025",
    location: "Adapt IT, Johannesburg",
    badge: "Tech Leadership",
    image: "/images/cio-konect-2025/cover.jpg",
    thumbnail: "/images/cio-konect-2025/cover.jpg",
    description:
      "CIO-Konect 2025 took place on 22 May at Adapt IT, Johannesburg, uniting South Africa's top tech leaders and digital transformation experts for a day of bold ideas and future-forward thinking.",
    longDescription:
      "Konecta proudly participated in the prestigious CIO-Konect 2025, a premier event that brought together South Africa's most influential Chief Information Officers, technology executives, and industry leaders for a day of insight, innovation, and forward-thinking dialogue at the Adapt IT offices in Johannesburg.\n\nCIO-Konect is a well-established platform for technology decision-makers, and this year's edition was no exception. It provided a dynamic space for discussions on the critical trends shaping the future of technology leadership in Africa.",
    purpose:
      "Our participation at CIO-Konect underscores Konecta's commitment to being at the forefront of technological innovation and its deep connection to the African tech leadership community.",
    focusAreas: [
      "Keynote Addresses: Visionary talks from leading CIOs and technology executives on the evolving landscape of digital transformation, AI integration, and the strategic role of technology",
      "Expert Panel Discussions: Engaging panels that tackled pressing issues such as cybersecurity, cloud adoption, data governance, and the future of work",
      "Networking Opportunities: Invaluable networking sessions that facilitated meaningful connections between technology leaders, solution providers, and innovators",
      "Innovation Showcases: Cutting-edge technology demonstrations and solution showcases that highlighted the latest advancements",
    ],
    highlights: [
      "Thought Leadership: Engaging with top CIOs to understand the evolving needs of enterprise technology",
      "Strategic Partnerships: Building and strengthening relationships with key decision-makers driving digital transformation",
      "Market Positioning: Showcasing Konecta's capabilities in WiFi-as-a-Service, managed IT solutions, and digital platforms",
      "Industry Insight: Gaining valuable insights into the challenges and opportunities facing CIOs and IT leaders",
    ],
    gallery: [
      "/images/cio-konect-2025/gallery-hero.png",
      "/images/cio-konect-2025/gallery-1.jpg",
      "/images/cio-konect-2025/gallery-2.jpg",
      "/images/cio-konect-2025/gallery-3.jpg",
      "/images/cio-konect-2025/gallery-4.jpg",
    ],
    tags: ["CIO", "digital-transformation", "leadership", "enterprise", "AI"],
    metric: "100+",
    metricLabel: "CIOs and technology executives convened",
  },

  {
    id: "govtech-2025",
    slug: "govtech-2025",
    title:
      "Konecta Drives Smarter, More Inclusive Digital Government at GovTech 2025",
    shortTitle: "GovTech 2025",
    category: "municipal-technology",
    type: "event-hosted",
    status: "completed",
    featured: false,
    date: "2025-09-08",
    year: "2025",
    location: "Durban, South Africa",
    badge: "Digital Government",
    image: "/images/govtech-2025/cover.jpeg",
    thumbnail: "/images/govtech-2025/cover.jpeg",
    description:
      "A recap of Konecta's impactful participation at South Africa's premier public sector ICT event, where we showcased how smarter WiFi connectivity is building more inclusive, efficient, and data-driven government services.",
    longDescription:
      "From 8–10 September 2025, South Africa's premier public sector ICT conference, GovTech 2025, took place in Durban. The Konecta team was proud to exhibit and engage with government leaders and industry experts to showcase how our WiFi platform supports the development of transformative digital government services.",
    purpose:
      "Our participation was driven by a commitment to collaborate with policymakers and leaders to explore solutions that bridge the digital divide and enhance service delivery for all citizens.",
    focusAreas: [
      "Expanding access to digital services through reliable, free WiFi networks",
      "Unlocking data-driven insights to improve service delivery",
      "Fostering inclusive engagement between government and citizens",
    ],
    highlightsIntro:
      "The three-day event was filled with inspiring conversations and productive discussions that built momentum for future collaborations.",
    highlights: [
      "Day 1: Set the tone with inspiring conversations and strong interest in how connectivity unlocks opportunities for efficient governance",
      "Day 2: Featured deeper discussions on the practical applications of our solutions",
      "Day 3: Wrapped up with a focus on collaboration and next steps for building inclusive digital solutions",
    ],
    galleryDescription:
      "A look at our team in action at the Konecta stall, connecting with delegates at GovTech 2025.",
    gallery: [
      { src: "/images/govtech-2025/gallery-hero.jpeg", caption: "" },
      { src: "/images/govtech-2025/gallery-1.jpeg", caption: "" },
      { src: "/images/govtech-2025/gallery-2.jpeg", caption: "" },
      { src: "/images/govtech-2025/gallery-3.jpeg", caption: "" },
      { src: "/images/govtech-2025/gallery-4.jpeg", caption: "" },
    ],
    tags: ["government", "digital-services", "WiFi", "public-sector"],
    metric: "3",
    metricLabel: "Days of impactful engagement with government leaders",
  },

  {
    id: "smart-procurement-indaba",
    slug: "smart-procurement-indaba",
    title:
      "Konecta Showcases Smart Connectivity at the 19th Annual Smart Procurement Indaba",
    shortTitle: "Smart Procurement Indaba",
    category: "digital-transformation",
    type: "event-hosted",
    status: "completed",
    featured: false,
    date: "2025-09-16",
    year: "2025",
    location: "Gallagher Convention Centre, Midrand",
    badge: "Enterprise Development",
    image: "/images/smart-procurement-indaba/cover.jpg",
    thumbnail: "/images/smart-procurement-indaba/cover.jpg",
    description:
      "At the 19th Annual Smart Procurement Indaba, Konecta revealed how its platform transforms simple internet access into a strategic tool for customer intelligence and community engagement.",
    longDescription:
      "The Konecta team was proud to participate in the 19th Annual Smart Procurement Indaba, held on 16–17 September 2025 at the Gallagher Convention Centre in Midrand. The event served as a key gathering for entrepreneurs, corporates, and industry leaders, offering two days of intensive knowledge-sharing, networking, and enterprise development opportunities.\n\nOur presence with a dedicated stall allowed us to engage directly with delegates and showcase our innovative WiFi solutions.\n\nOur participation was driven by a clear vision: to demonstrate how technology can be a bridge for business transformation. We believe connectivity should do more than just provide internet access; it should be a strategic tool for growth and engagement.",
    focusAreas: [
      "Expanding Digital Access: Powering free WiFi networks to bridge the digital divide",
      "Unlocking Customer Insights: Using big data analytics to transform connectivity into actionable business intelligence",
      "Driving Brand Engagement: Creating meaningful touchpoints that connect companies with their audiences in impactful ways",
    ],
    highlights: [
      "Successfully demonstrating the Konecta WiFi platform to hundreds of delegates",
      "Engaging in productive meetings with entrepreneurs and corporate leaders eager for innovation",
      "Exploring concrete collaborations with companies committed to growth",
      "Reinforcing the importance of building ecosystems where technology and enterprise development go hand-in-hand",
    ],
    gallery: [
      "/images/smart-procurement-indaba/gallery-hero.jpeg",
      "/images/smart-procurement-indaba/gallery-1.jpg",
      "/images/smart-procurement-indaba/gallery-2.jpeg",
      "/images/smart-procurement-indaba/gallery-3.jpg",
    ],
    tags: ["procurement", "enterprise", "WiFi", "business-growth"],
    metric: "100s",
    metricLabel: "Delegates engaged with Konecta WiFi platform",
  },

  {
    id: "hackathon-wits-adapt-it",
    slug: "hackathon-wits-adapt-it",
    title:
      "Driving Social Impact Through Innovation: Konecta at the Wits & Adapt IT Social Good Hackathon",
    shortTitle: "Social Good Hackathon",
    category: "education",
    type: "event-hosted",
    status: "completed",
    featured: false,
    date: "2025-09-05",
    year: "2025",
    location: "University of the Witwatersrand, Johannesburg",
    badge: "Social Innovation",
    image: "/images/hackathon-wits-adapt-it/cover.jpg",
    thumbnail: "/images/hackathon-wits-adapt-it/cover.jpg",
    description:
      "Join 261 students driving social impact through technology. Discover how Konecta supported innovative solutions like Ubuntu Shield for digital safety and community empowerment at the Wits & Adapt IT Hackathon.",
    longDescription:
      "On Friday, 5 September 2025, the University of the Witwatersrand, in collaboration with Adapt IT Telecoms, hosted the Social Good Hackathon — a dynamic gathering where 261 students came together to harness the power of technology for positive social impact.\n\nThe event showcased the creativity, collaboration, and problem-solving abilities of South Africa's next generation of innovators. Teams worked intensively to develop solutions addressing some of society's most pressing challenges, from digital safety to community upliftment.\n\nAs part of our commitment to empowering young innovators, Konecta sponsored gifts for the 2nd place winners, Ctrl Alt Defeat. Their project, Ubuntu Shield, stood out for its innovative approach to digital safety, offering a fresh perspective on how technology can be used to protect and empower communities.\n\nCongratulations to Ctrl Alt Defeat and to all the teams who took part in this inspiring event. Every participant demonstrated the potential of technology to create meaningful change.",
    closingSection: {
      title: "A Day to Remember",
      text: "The Social Good Hackathon was more than just a competition — it was a celebration of innovation with purpose. By bringing together students, industry leaders, and partners, the event reinforced the role of technology as a tool for social transformation.",
    },
    purpose:
      "To bring together students, industry leaders, and partners to harness the power of technology for positive social impact — reinforcing the role of innovation as a tool for social transformation.",
    focusAreas: [
      "Social Impact Solutions: Developing technology solutions that address society's most pressing challenges",
      "Digital Safety: Innovating approaches to protect and empower communities in the digital age",
      "Industry-Academia Collaboration: Bridging the gap between academic learning and real-world problem solving",
      "Youth Empowerment: Supporting the next generation of tech innovators to make a positive difference",
    ],
    highlights: [
      "261 students participated in the hackathon",
      "Focus on social impact solutions",
      "Industry and academic collaboration",
      "Innovation in digital safety",
      "Development of Ubuntu Shield project by Ctrl Alt Defeat (2nd place winners)",
      "Strengthened industry-academia ties",
      "Konecta sponsored gifts for the 2nd place winners",
      "Demonstration of tech for social good",
    ],
    gallery: [
      "/images/hackathon-wits-adapt-it/gallery-hero.jpg",
      "/images/hackathon-wits-adapt-it/1757583589528.jpg",
      "/images/hackathon-wits-adapt-it/1757583589578.jpg",
      "/images/hackathon-wits-adapt-it/1757583589735.jpg",
      "/images/hackathon-wits-adapt-it/1757583589742.jpg",
      "/images/hackathon-wits-adapt-it/1757583590013.jpg",
      "/images/hackathon-wits-adapt-it/1757583590166.jpg",
    ],
    inlineImages: [
      {
        afterParagraph: 1,
        src: "/images/hackathon-wits-adapt-it/1757583589528.jpg",
        alt: "Students collaborating at the Social Good Hackathon",
      },
    ],
    quote: {
      text: "Events like these are crucial for bridging the gap between academic learning and real-world problem solving. We're proud to support the next generation of tech innovators who are using their skills to make a positive difference in society.",
      author: "Konecta Representative",
    },
    tags: ["hackathon", "education", "social-impact", "youth", "innovation"],
    metric: "261",
    metricLabel: "Students driving social change through tech",
  },

  {
    id: "world-bank-thembisa",
    slug: "world-bank-thembisa",
    title:
      "Mission Week in Thembisa: Bridging the Digital Divide Through Collaborative Innovation",
    shortTitle: "World Bank Thembisa",
    category: "community-development",
    type: "event-hosted",
    status: "completed",
    featured: true,
    date: "2025-05",
    year: "2025",
    location: "Thembisa, Ekurhuleni",
    badge: "Community Impact",
    image: "/images/world-bank-thembisa/cover.png",
    thumbnail: "/images/world-bank-thembisa/cover.png",
    description:
      "The City of Ekurhuleni, in collaboration with National Treasury, the World Bank, and technical partners Konecta and Avo Vision, hosted a two-day digital strategy validation session in Tembisa.",
    longDescription:
      "In May 2025, a historic Mission Week unfolded in Thembisa, one of South Africa's largest and most vibrant townships, bringing together a powerful coalition of partners dedicated to bridging the digital divide. The City of Ekurhuleni, South African National Treasury, the World Bank Group, Konecta, and Avo Vision (by Nedbank) joined forces to explore and initiate a comprehensive digital transformation roadmap for the community.\n\nThis collaborative initiative represents a significant step towards creating a more equitable digital landscape, focusing on practical solutions that empower local residents and businesses.",
    inlineImages: [
      {
        afterParagraph: 0,
        src: "/images/world-bank-thembisa/gallery/dsc00005_54518755534_o.jpg",
        alt: "Mission Week opening session in Thembisa",
      },
      {
        afterParagraph: 1,
        src: "/images/world-bank-thembisa/gallery/dsc00099_54518572341_o.jpg",
        alt: "Stakeholder collaboration during Mission Week",
      },
      {
        afterParagraph: 1,
        src: "/images/world-bank-thembisa/gallery/1747304409780.jpg",
        alt: "Community engagement in Thembisa",
      },
    ],
    purpose:
      "Bridging the digital divide through a public-private partnership model that leverages technology for community empowerment.",
    focusAreas: [
      "Digital Infrastructure: Building the foundational connectivity and network infrastructure required for a thriving digital ecosystem",
      "Digital Platforms: Developing accessible platforms that enable service delivery, community engagement, and economic participation",
      "Digital Financial Services: Promoting financial inclusion through digital payment systems, banking access, and innovative fintech solutions",
      "Digital Entrepreneurship: Fostering local innovation and supporting small businesses with the tools and resources to compete in the digital economy",
      "Digital Skills: Equipping the community with the essential digital literacy and skills needed to participate meaningfully in the modern economy",
    ],
    highlights: [
      "Collaborative Roadmap Development: Stakeholders from government, private sector, and international finance worked together to develop a detailed digital transformation roadmap",
      "Community Engagement: Direct engagement with local residents and businesses to understand their needs",
      "Key Leadership Insights: Contributions from Yandisa Sokhanyile (Konecta) and Lethu Collen Masango",
      "Envirocare Tembisa Partnership: Bridging environmental sustainability with digital innovation",
      "Public-Private Partnership Model: Landmark demonstration of collaboration between municipal government, national treasury, international organisations, and the private sector",
    ],
    gallery: [
      "/images/world-bank-thembisa/gallery-hero.png",
      "/images/world-bank-thembisa/gallery-1.jpg",
      "/images/world-bank-thembisa/gallery-2.webp",
      "/images/world-bank-thembisa/gallery-3.jpg",
      "/images/world-bank-thembisa/gallery/dsc00001_54518755514_o.jpg",
      "/images/world-bank-thembisa/gallery/dsc00009_54518573111_o.jpg",
      "/images/world-bank-thembisa/gallery/dsc00018_54518754829_o.jpg",
      "/images/world-bank-thembisa/gallery/dsc00050_54517710417_o.jpg",
      "/images/world-bank-thembisa/gallery/dsc00084_54518572611_o.jpg",
      "/images/world-bank-thembisa/gallery/dsc00101_54518572361_o.jpg",
      "/images/world-bank-thembisa/gallery/dsc00109_54518923615_o.jpg",
      "/images/world-bank-thembisa/gallery/1747304409516.jpg",
      "/images/world-bank-thembisa/gallery/1747304409906.jpg",
      "/images/world-bank-thembisa/gallery/1747304410147.jpg",
      "/images/world-bank-thembisa/gallery/1747304410216.jpg",
      "/images/world-bank-thembisa/gallery/1747304410370.jpg",
    ],
    quote: {
      text: "The convergence of the World Bank, National Treasury, the City of Ekurhuleni, and private sector partners like Konecta and Avo Vision in Thembisa signals a new era of collaborative digital development, one where technology truly serves the people.",
      author: null,
    },
    tags: [
      "world-bank",
      "digital-divide",
      "community",
      "government",
      "fintech",
    ],
    metric: "5",
    metricLabel: "Pillars of digital transformation initiated",
  },

  {
    id: "witechnology-summit-2024",
    slug: "witechnology-summit-2024",
    title:
      "WiTechnology 2024: The Launch of a Transformative Platform for Women in African Telecoms",
    shortTitle: "WiTechnology 2024",
    category: "women-in-tech",
    type: "event-hosted",
    status: "completed",
    featured: false,
    date: "2024",
    year: "2024",
    location: "South Africa",
    badge: "Inaugural Summit",
    image: "/images/witechnology-summit-2024/cover.webp",
    thumbnail: "/images/witechnology-summit-2024/cover.webp",
    description:
      "Konecta, a telecoms consultancy firm, launched the WiTechnology platform to promote diversity, innovation, and excellence in the telecoms industry.",
    longDescription:
      "The inaugural WiTechnology Telecoms and Datacentre Summit 2024 marked the birth of a groundbreaking platform dedicated to championing diversity, innovation, and excellence in Africa's rapidly growing telecommunications and datacentre sectors.\n\nThis landmark event brought together some of the continent's most brilliant minds, pioneering leaders, and passionate advocates for a future where technology is inclusive, transformative, and empowering for all.\n\nWiTechnology was conceived as more than a conference – it is a movement. The summit was designed to create a permanent, impactful platform addressing critical needs in the African tech ecosystem.",
    focusAreas: [
      "Women's Empowerment: Elevating the role of women in the telecoms and datacentre industries by creating opportunities for leadership, mentorship, and career advancement",
      "Startup Growth & Innovation: Providing a launchpad for startups and emerging businesses in the tech space, connecting them with investors, mentors, and established industry players",
      "Diversity & Inclusion: Championing a more representative and inclusive tech sector across Africa",
      "Industry Excellence: Setting new benchmarks for excellence in African telecoms and datacentres through knowledge sharing and best practice dissemination",
    ],
    highlights: [
      "Official Platform Launch: The historic unveiling of the WiTechnology platform, establishing a permanent digital home for the community",
      "Keynote by Wabo Majavu: An inspiring opening address emphasising the critical need for diversity and innovation",
      "Expert Panel Discussions: High-impact panels featuring executives from Seacom, Sentech, and Telecel SA",
      "Networking & Masterclasses: Dedicated sessions for capacity building, knowledge exchange, and forging new partnerships",
      "Focus on 5G, IoT & Digital Inclusion: Deep dives into emerging technologies and their potential to bridge the digital divide",
    ],
    gallery: [
      "/images/witechnology-summit-2024/gallery-hero.jpeg",
      "/images/witechnology-summit-2024/gallery-1.jpeg",
      "/images/witechnology-summit-2024/gallery-2.jpeg",
      "/images/witechnology-summit-2024/gallery-3.jpeg",
      "/images/witechnology-summit-2024/gallery-4.jpeg",
    ],
    ctaText: "Visit WiTechnology",
    ctaUrl: "https://witechnology.africa/",
    tags: ["women-in-tech", "telecoms", "datacentre", "startup", "diversity"],
    metric: "1st",
    metricLabel: "Inaugural WiTechnology platform launch",
  },

  {
    id: "women-in-telecoms",
    slug: "women-in-telecoms",
    title: "Women in Telecoms",
    shortTitle: "Women in Telecoms",
    category: "women-in-tech",
    type: "event-hosted",
    status: "completed",
    featured: false,
    date: "2024",
    year: "2024",
    location: "South Africa",
    badge: "Empowerment",
    image: "/images/witechnology-summit-2025/cover.jpg",
    thumbnail: "/images/witechnology-summit-2025/cover.jpg",
    description:
      "An inspiring event focused on empowering women who are leading the way in the telecom industry. We celebrate their contributions, fostering conversations on the vital role women play in shaping the future of telecoms.",
    tags: ["women-in-tech", "telecoms", "empowerment", "leadership"],
  },

  {
    id: "municipal-indaba-legacy",
    slug: "municipal-indaba-legacy",
    title: "Municipal Indaba",
    shortTitle: "Municipal Indaba",
    category: "municipal-technology",
    type: "event-hosted",
    status: "completed",
    featured: false,
    date: "2024",
    year: "2024",
    location: "South Africa",
    badge: "Service Delivery",
    image: "/images/hackathon-wits-adapt-it/cover.jpg",
    thumbnail: "/images/hackathon-wits-adapt-it/cover.jpg",
    description:
      "A dynamic event that brings together experts to discuss the challenges and solutions in municipal service delivery. The Municipal Indaba creates a space for dialogue that helps improve local governance and service provision.",
    tags: ["municipal", "governance", "service-delivery", "public-sector"],
  },
];

/* ── NEWS & MEDIA DATABASE ── */

export const newsDatabase = [
  {
    id: "witechnology-marketplace-launch",
    slug: "witechnology-marketplace-launch",
    title: "WiTechnology Launches Marketplace to Boost Women in Tech",
    category: "announcement",
    source: "other",
    sourceName: "Industry Press",
    date: "2025-09",
    year: "2025",
    featured: true,
    image: "/images/witechnology-summit-2025/cover.jpg",
    thumbnail: "/images/witechnology-summit-2025/cover.jpg",
    excerpt:
      "WiTechnology has officially launched its new digital marketplace platform. The initiative, launched at an event in Midrand, aims to connect female entrepreneurs with corporate and government partners.",
    description:
      "WiTechnology has officially launched its new digital marketplace platform. The initiative, launched at an event in Midrand, aims to connect female entrepreneurs with corporate and government partners. The primary goal of the platform is to advance gender equity and foster greater inclusivity within the South African technology sector.",
    externalUrl: "https://www.itweb.co.za/videos/dgp45MaBp9jqX9l8",
    tags: ["witechnology", "marketplace", "women-in-tech", "digital-platform"],
  },

  {
    id: "ai-reshaping-workforce",
    slug: "ai-reshaping-workforce",
    title: "Adapting to the Future: How AI Will Reshape the Workforce",
    category: "interview",
    source: "itweb",
    sourceName: "ITWeb TV",
    date: "2025-05",
    year: "2025",
    featured: true,
    image: "/images/cio-konect-2025/cover.jpg",
    thumbnail: "/images/cio-konect-2025/cover.jpg",
    excerpt:
      "On the sidelines of the CIO Konect event, ITWeb TV hosted a discussion with industry experts on the impending impact of artificial intelligence on jobs.",
    description:
      "On the sidelines of the CIO Konect event, ITWeb TV hosted a discussion with industry experts John Bosco Arends, Chair of the Chartered CIO Council, and Billy Mabena, Group Sales Executive at Adapt IT. The conversation focused on the impending impact of artificial intelligence on jobs. They explored practical strategies for employers, technology teams, and employees to successfully navigate and adapt to the significant changes AI is expected to bring.",
    externalUrl: null,
    tags: ["AI", "workforce", "CIO-Konect", "future-of-work"],
  },

  {
    id: "world-bank-thembisa-news",
    slug: "world-bank-thembisa-news",
    title: "World Bank, Treasury Pilot Digital Strategy in Thembisa",
    category: "press",
    source: "tech-central",
    sourceName: "TechCentral",
    date: "2025-05",
    year: "2025",
    featured: false,
    image: "/images/world-bank-thembisa/cover.png",
    thumbnail: "/images/world-bank-thembisa/cover.png",
    excerpt:
      "The City of Ekurhuleni, in collaboration with National Treasury, the World Bank, and technical partners Konecta and Avo Vision, hosted a two-day digital strategy validation session in Tembisa.",
    description:
      "The City of Ekurhuleni, in collaboration with National Treasury, the World Bank, and technical partners Konecta and Avo Vision, hosted a two-day digital strategy validation session in Tembisa aimed at reshaping township economies through technology.",
    externalUrl: null,
    tags: ["world-bank", "treasury", "thembisa", "digital-strategy"],
  },

  {
    id: "witechnology-platform-launch-news",
    slug: "witechnology-platform-launch-news",
    title: "Konecta Launches WiTechnology Platform for Local Tech Startups",
    category: "announcement",
    source: "other",
    sourceName: "Industry Press",
    date: "2024",
    year: "2024",
    featured: false,
    image: "/images/witechnology-summit-2024/cover.webp",
    thumbnail: "/images/witechnology-summit-2024/cover.webp",
    excerpt:
      "Konecta, a telecoms consultancy firm, launched the WiTechnology platform to promote diversity, innovation, and excellence in the telecoms industry.",
    description:
      "Konecta, a telecoms consultancy firm, launched the WiTechnology platform to promote diversity, innovation, and excellence in the telecoms industry.",
    externalUrl: null,
    tags: ["witechnology", "startups", "telecoms", "diversity"],
  },

  {
    id: "yandisa-sabc-interview",
    slug: "yandisa-sabc-witech-africa-2024",
    title:
      "Yandisa Sokhanyile on SABC | Key Insights from the WiTech Africa Summit 2024",
    category: "interview",
    source: "sabc",
    sourceName: "SABC",
    date: "2024",
    year: "2024",
    featured: true,
    image: "/images/witechnology-summit-2024/cover.webp",
    thumbnail: "/images/witechnology-summit-2024/cover.webp",
    excerpt:
      "In this interview on SABC, Yandisa Sokhanyile discusses the highlights and key takeaways from the WiTech Africa Summit 2024.",
    description:
      "In this interview on SABC, Yandisa Sokhanyile discusses the highlights and key takeaways from the WiTech Africa Summit 2024. Watch as Yandisa provides insights into the event's major themes, innovative discussions, and the impact on the technology and telecommunications sectors in Africa.",
    externalUrl: null,
    tags: ["SABC", "interview", "WiTechnology", "Yandisa-Sokhanyile"],
  },

  {
    id: "yandisa-worlds-leaders",
    slug: "yandisa-worlds-leaders-magazine",
    title: "Yandisa Sokhanyile Featured in World's Leaders Magazine",
    category: "media-feature",
    source: "worlds-leaders",
    sourceName: "World's Leaders Magazine",
    date: "2024",
    year: "2024",
    featured: true,
    image: "/images/witechnology-summit-2025/cover.jpg",
    thumbnail: "/images/witechnology-summit-2025/cover.jpg",
    excerpt:
      "Founder and CEO of Konecta, Yandisa Sokhanyile is spotlighted as a prominent figure in the African telecommunications space.",
    description:
      "Founder and CEO of Konecta, Yandisa Sokhanyile is spotlighted as a prominent figure in the African telecommunications space. In this feature, she shares her journey from humble beginnings to leading one of South Africa's most innovative ICT firms – empowering communities through connectivity, data, and digital transformations.",
    externalUrl: null,
    tags: ["Yandisa-Sokhanyile", "feature", "leadership", "telecoms"],
  },
];

/* ── HELPER: Get all unique tags across all databases ── */
export function getAllTags(database) {
  const tags = new Set();
  database.forEach((item) => {
    if (item.tags) item.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

/* ── HELPER: Search across title, description, tags ── */
export function searchItems(items, query) {
  if (!query || !query.trim()) return items;
  const q = query.toLowerCase().trim();
  return items.filter(
    (item) =>
      (item.title && item.title.toLowerCase().includes(q)) ||
      (item.shortTitle && item.shortTitle.toLowerCase().includes(q)) ||
      (item.description && item.description.toLowerCase().includes(q)) ||
      (item.excerpt && item.excerpt.toLowerCase().includes(q)) ||
      (item.location && item.location.toLowerCase().includes(q)) ||
      (item.tags && item.tags.some((tag) => tag.toLowerCase().includes(q))),
  );
}

/* ── HELPER: Filter by category ── */
export function filterByCategory(items, category) {
  if (!category || category === "all") return items;
  return items.filter((item) => item.category === category);
}

/* ── HELPER: Filter by year ── */
export function filterByYear(items, year) {
  if (!year || year === "all") return items;
  return items.filter((item) => item.year === year);
}

/* ── HELPER: Filter by source (news) ── */
export function filterBySource(items, source) {
  if (!source || source === "all") return items;
  return items.filter((item) => item.source === source);
}

/* ── HELPER: Sort items ── */
export function sortItems(items, sortBy = "newest") {
  return [...items].sort((a, b) => {
    if (sortBy === "newest") return b.date.localeCompare(a.date);
    if (sortBy === "oldest") return a.date.localeCompare(b.date);
    if (sortBy === "featured")
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    return 0;
  });
}
