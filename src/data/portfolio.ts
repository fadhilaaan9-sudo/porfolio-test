

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  current?: boolean;
  type?: string;
}

/* ------------------------------------------------------------------ */
/* Dummy profile data — replace with your real information             */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Farhan Fadhila",
  role: "Frontend Developer & UI Engineer",
  location: "Pekanbaru, Indonesia",
  email: "farhanfd.112003@gmail.com",
  headline: "I design and build fast, thoughtful interfaces for the web.",
  github: "https://github.com/FARHANFADHILA",
  linkedin: "https://linkedin.com/in/ferhen",
  twitter: "https://x.com/ferhen",
  dribbble: "https://dribbble.com/ferhen",
};

export const experience: ExperienceItem[] = [
  {
    period: "2024 - Present",
    role: "Senior Frontend Developer",
    type: "Organization",
    company: "Kirana Digital",
    description:
      "Leading frontend for a SaaS analytics suite used by 2,000+ businesses. Own the design system, mentor 4 engineers, and guard the performance budget.",
    current: true,
  },
  {
    period: "2022 - 2024",
    role: "Frontend Developer",
    type: "Organization",
    company: "PixelForge Studio",
    description:
      "Shipped 12 client websites and web apps, from marketing pages to full e-commerce. Raised the studio's average Lighthouse score from 71 to 96.",
  },
  {
    period: "2021 - 2022",
    role: "UI Engineer Intern",
    type: "Internship",
    company: "BrightLab",
    description:
      "Built internal dashboards and learned the craft: semantic HTML, design tokens, and a healthy code-review culture.",
  },
  {
    period: "2020 - 2021",
    role: "Freelance Web Developer",
    type: "Freelance",
    company: "Self-employed",
    description:
      "Delivered 20+ projects for local businesses - landing pages, company profiles, and small online stores.",
  },
];

/* ------------------------------------------------------------------ */
/* Ways to work together + FAQ                                         */
/* ------------------------------------------------------------------ */

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
