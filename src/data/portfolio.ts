export interface CaseStudy {
  problem: string;
  process: string[];
  solution: string;
  result: string[];
}

export interface Project {
  id: string;
  name: string;
  year: string;
  role: string;
  tagline: string;
  description: string;
  tech: string[];
  accent: string;
  demoUrl: string;
  sourceUrl: string;
  caseStudy: CaseStudy;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  current?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
}

export interface Post {
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  tags: string[];
}

/* ------------------------------------------------------------------ */
/* Dummy profile data — replace with your real information             */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Ferhen",
  role: "Frontend Developer & UI Engineer",
  location: "Pekanbaru, Indonesia",
  email: "hello@ferhen.dev",
  headline: "I design and build fast, thoughtful interfaces for the web.",
  github: "https://github.com/ferhen",
  linkedin: "https://linkedin.com/in/ferhen",
  twitter: "https://x.com/ferhen",
  dribbble: "https://dribbble.com/ferhen",
};

export const projects: Project[] = [
  {
    id: "nusaboard",
    name: "NusaBoard",
    year: "2025",
    role: "Frontend Lead",
    tagline: "Real-time analytics dashboard for retail SMEs",
    description:
      "A real-time analytics dashboard helping 200+ small retailers track sales, stock, and staff performance from any device.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts", "WebSocket"],
    accent: "#0071e3",
    demoUrl: "#",
    sourceUrl: "#",
    caseStudy: {
      problem:
        "Shop owners relied on end-of-day spreadsheets, so every business decision lagged a full 24 hours behind reality.",
      process: [
        "Interviewed 12 store owners to map the decisions they make every day",
        "Prototyped 3 dashboard layouts and tested them on low-end Android phones",
        "Built a token-driven chart component library for visual consistency",
      ],
      solution:
        "A mobile-first dashboard with a live sales feed, smart low-stock alerts, and one-tap reports — loading in under 1.2s on 3G.",
      result: [
        "Decision latency dropped from 24 hours to real-time",
        "92% weekly active usage after 3 months",
        "4.8/5 satisfaction score across 200+ stores",
      ],
    },
  },
  {
    id: "kopikita",
    name: "KopiKita",
    year: "2024",
    role: "Frontend Developer",
    tagline: "Ordering & loyalty web app for a coffee chain",
    description:
      "End-to-end ordering experience for a 15-outlet coffee chain — browse the menu, customize drinks, pay, and collect loyalty points.",
    tech: ["Next.js", "Tailwind CSS", "Stripe", "PWA"],
    accent: "#b64400",
    demoUrl: "#",
    sourceUrl: "#",
    caseStudy: {
      problem:
        "Peak-hour queues stretched past 20 minutes and the chain had no direct digital relationship with its customers.",
      process: [
        "Shadowed baristas during rush hour to understand the real bottleneck",
        "Designed a 3-tap ordering flow, tested with 30 regular customers",
        "Added offline-first PWA support for outlets with spotty Wi-Fi",
      ],
      solution:
        "A PWA ordering app with saved favorites, live queue tracking, and a points-based loyalty program.",
      result: [
        "38% of peak-hour orders moved to the app in 2 months",
        "Average queue time fell from 20 to 7 minutes",
        "22k loyalty members in the first quarter",
      ],
    },
  },
  {
    id: "arunika",
    name: "Arunika DS",
    year: "2024",
    role: "Design Engineer",
    tagline: "Design system with 40+ accessible components",
    description:
      "A token-based design system unifying 3 products under one visual language — with docs, tests, and Figma parity.",
    tech: ["React", "Storybook", "Radix UI", "Figma API"],
    accent: "#0066cc",
    demoUrl: "#",
    sourceUrl: "#",
    caseStudy: {
      problem:
        "Three products, three visual languages, and every new feature started from a blank Figma file.",
      process: [
        "Audited 400+ screens to extract the real, used patterns",
        "Defined color, type, and spacing tokens as the single source of truth",
        "Paired each component with its Figma equivalent and usage docs",
      ],
      solution:
        "Arunika DS: 40+ accessible React components, auto-generated docs, and a Figma library synced from the same tokens.",
      result: [
        "New feature UI build time cut by 60%",
        "Zero visual regressions across 3 products in 6 months",
        "Adopted by 4 teams without a single breaking change",
      ],
    },
  },
  {
    id: "svara",
    name: "Svara",
    year: "2023",
    role: "Frontend Developer",
    tagline: "AI meeting-notes companion",
    description:
      "Real-time transcription and auto-summarized meeting notes, with shareable highlights and action items.",
    tech: ["React", "TypeScript", "WebSocket", "Tailwind CSS"],
    accent: "#1d1d1f",
    demoUrl: "#",
    sourceUrl: "#",
    caseStudy: {
      problem:
        "Teams lost key decisions in hour-long calls; nobody re-watched recordings and notes were inconsistent.",
      process: [
        "Mapped the meeting lifecycle: before, during, and after the call",
        "Prototyped a live-caption UI that stays readable at a glance",
        "Tested summary formats with 5 distributed teams",
      ],
      solution:
        "A companion app that transcribes live, highlights decisions as they happen, and emails a structured summary when the call ends.",
      result: [
        "Note-taking time per meeting dropped by 80%",
        "94% of summaries rated 'accurate' by participants",
        "Adopted as the default tool by 2 remote-first companies",
      ],
    },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite", "Zustand"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "Hono", "PostgreSQL", "Redis", "REST APIs"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "Figma", "Storybook", "Vercel", "GA4"],
  },
  {
    title: "Practices",
    items: [
      "Design Systems",
      "Web Performance",
      "Accessibility (WCAG)",
      "SEO Basics",
      "Agile / Scrum",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Senior Frontend Developer",
    company: "Kirana Digital",
    description:
      "Leading frontend for a SaaS analytics suite used by 2,000+ businesses. Own the design system, mentor 4 engineers, and guard the performance budget.",
    current: true,
  },
  {
    period: "2022 — 2024",
    role: "Frontend Developer",
    company: "PixelForge Studio",
    description:
      "Shipped 12 client websites and web apps, from marketing pages to full e-commerce. Raised the studio's average Lighthouse score from 71 to 96.",
  },
  {
    period: "2021 — 2022",
    role: "UI Engineer Intern",
    company: "BrightLab",
    description:
      "Built internal dashboards and learned the craft: semantic HTML, design tokens, and a healthy code-review culture.",
  },
  {
    period: "2020 — 2021",
    role: "Freelance Web Developer",
    company: "Self-employed",
    description:
      "Delivered 20+ projects for local businesses — landing pages, company profiles, and small online stores.",
  },
];

export const education = {
  degree: "B.Sc. in Informatics Engineering",
  school: "Universitas Nusantara",
  period: "2017 — 2021",
  description:
    "Focused on software engineering and human–computer interaction. Graduated with honors.",
};

export const certifications = [
  { name: "Meta Front-End Developer Professional", issuer: "Coursera · 2023" },
  { name: "Google UX Design", issuer: "Coursera · 2022" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon · 2024" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ferhen turned our messy spreadsheets into a dashboard our whole team actually enjoys opening every morning.",
    name: "Ratna Wijaya",
    role: "Operations Manager, retail client",
  },
  {
    quote:
      "A rare mix of design taste and engineering rigor. He sweats the 4px details and the 40ms ones.",
    name: "Daniel Hartono",
    role: "Engineering Lead, Kirana Digital",
  },
  {
    quote:
      "The most resourceful student I've mentored — he shipped a production app before graduation.",
    name: "Dr. Sinta Maharani",
    role: "Lecturer, Universitas Nusantara",
  },
];

export const achievements: Achievement[] = [
  {
    year: "2025",
    title: "Hackathon Winner",
    description:
      "1st place at the National Web Hackathon — built an offline-first inventory PWA in 48 hours.",
  },
  {
    year: "2024",
    title: "Open Source Contributor",
    description: "120+ merged pull requests across React ecosystem repositories.",
  },
  {
    year: "2023",
    title: "Conference Speaker",
    description:
      "Spoke on design systems at FrontendConf Asia to 400+ attendees.",
  },
  {
    year: "2022",
    title: "40k Monthly Readers",
    description: "My technical blog crossed 40,000 monthly readers.",
  },
];

export const posts: Post[] = [
  {
    date: "Mar 2026",
    readTime: "8 min read",
    title: "Design Tokens in Practice: From Figma to Tailwind v4",
    excerpt:
      "How I keep design and code in sync with a single source of truth — and why @theme changed my workflow.",
    tags: ["Design Systems", "Tailwind"],
  },
  {
    date: "Jan 2026",
    readTime: "6 min read",
    title: "Making React Dashboards Feel Instant",
    excerpt:
      "Skeletons, optimistic UI, and smart caching patterns I use to kill loading spinners for good.",
    tags: ["React", "Performance"],
  },
  {
    date: "Nov 2025",
    readTime: "5 min read",
    title: "Accessibility Is a Design Constraint, Not a Checklist",
    excerpt:
      "What building for keyboard and screen-reader users taught me about good defaults.",
    tags: ["Accessibility", "UX"],
  },
];

/* ------------------------------------------------------------------ */
/* Ways to work together + FAQ                                         */
/* ------------------------------------------------------------------ */

export interface ServiceTier {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  features: { label: string; included: boolean | string }[];
  cta: string;
  featured?: boolean;
}

export const services: ServiceTier[] = [
  {
    name: "Project",
    tagline: "Freelance engagement",
    price: "From $2k",
    priceNote: "per project",
    features: [
      { label: "Design + build, end to end", included: true },
      { label: "2–6 week timeline", included: true },
      { label: "Design system included", included: true },
      { label: "Ongoing maintenance", included: false },
    ],
    cta: "Start a project",
  },
  {
    name: "Full-time",
    tagline: "Join your team",
    price: "Let's talk",
    priceNote: "annual",
    features: [
      { label: "Embedded in your team", included: true },
      { label: "Own the frontend roadmap", included: true },
      { label: "Mentor engineers", included: true },
      { label: "Available from Q3 2026", included: "Q3 2026" },
    ],
    cta: "Hire me",
    featured: true,
  },
  {
    name: "Advisory",
    tagline: "Design engineering consult",
    price: "From $150",
    priceNote: "per hour",
    features: [
      { label: "Audits & code reviews", included: true },
      { label: "Performance tuning", included: true },
      { label: "Team workshops", included: true },
      { label: "Async, flexible hours", included: true },
    ],
    cta: "Book a call",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "Are you available for freelance work?",
    a: "Yes — I'm currently booking projects for Q3 2026. Tell me about your timeline and I'll let you know within 48 hours whether we're a fit.",
  },
  {
    q: "What's your typical project timeline?",
    a: "Most marketing sites take 2–3 weeks; full web apps take 4–6. I work in weekly milestones so you always see progress, never surprises.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes. I'm based in Pekanbaru (WIB, UTC+7) and work async-first — written updates, recorded walkthroughs, and overlap hours for calls with any timezone.",
  },
  {
    q: "What does your process look like?",
    a: "Four phases: Discover (goals, users, constraints), Design (wireframes to hi-fi in Figma), Build (React + TypeScript, reviewed weekly), and Ship (tested, documented, monitored).",
  },
  {
    q: "Can you work with our existing design system?",
    a: "Absolutely. I can extend yours, audit it for gaps, or build one from scratch — tokens, components, and docs included.",
  },
];
