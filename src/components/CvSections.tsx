import type { ReactNode } from "react";
import Reveal from "./Reveal";
import WalkingFigure from "./WalkingFigure";

const ICON_PATHS: Record<string, ReactNode> = {
  code: (
    <>
      <path d="m8 8-5 4 5 4" />
      <path d="m16 8 5 4-5 4" />
    </>
  ),
  layers: (
    <>
      <path d="m12 2 9 4.9-9 4.9-9-4.9L12 2Z" />
      <path d="m3 11.9 9 4.9 9-4.9" />
    </>
  ),
  atom: (
    <>
      <circle cx="12" cy="12" r="1.6" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </>
  ),
  bolt: <path d="M13 2 3 14h8l-1 8 11-14h-8l1-8Z" />,
  terminal: (
    <>
      <path d="m5 7 5 5-5 5" />
      <path d="M12 17h7" />
    </>
  ),
  db: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  branch: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="8" r="2.5" />
      <path d="M6 8.5v7" />
      <path d="M18 10.5c0 4-5 4-9.5 4" />
    </>
  ),
  box: (
    <>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
      <path d="m3 8 9 5 9-5" />
      <path d="M12 13v8" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.9 5.7 3.9 9s-1.4 6.4-3.9 9c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3Z" />
    </>
  ),
  doc: (
    <>
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z" />
      <path d="M14 2v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </>
  ),
  check: <path d="m4 12.5 5 5L20 6.5" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" />
      <circle cx="17.5" cy="9" r="2.5" />
      <path d="M16 15.2c2.9.3 5.2 1.9 5.9 4.8" />
    </>
  ),
  chat: (
    <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1L3 20l1.1-4.3A8.5 8.5 0 1 1 21 11.5Z" />
  ),
};

function SkillPillIcon({ icon }: { icon: string }) {
  if (icon === "dot") {
    return (
      <svg width="7" height="7" viewBox="0 0 8 8" aria-hidden="true" className="shrink-0 text-slate">
        <circle cx="4" cy="4" r="4" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-slate"
    >
      {ICON_PATHS[icon]}
    </svg>
  );
}


const skillGroups = [
  {
    title: "Programming & Frameworks",
    description: "Core languages and frameworks I use to build fast, reliable web applications.",
    items: [
      { name: "PHP", icon: "code" },
      { name: "Python", icon: "dot" },
      { name: "JavaScript", icon: "dot" },
      { name: "Laravel", icon: "layers" },
      { name: "React (Vite)", icon: "atom" },
      { name: "FastAPI", icon: "bolt" },
      { name: "Hono JS", icon: "terminal" },
    ],
  },
  {
    title: "Data",
    description: "Databases and query tools for designing, storing, and optimizing data.",
    items: [
      { name: "SQL (Advanced)", icon: "db" },
      { name: "MySQL", icon: "db" },
      { name: "PostgreSQL", icon: "db" },
    ],
  },
  {
    title: "Infrastructure & Tools",
    description: "Tooling and practices for shipping, deploying, and running software in production.",
    items: [
      { name: "Git", icon: "branch" },
      { name: "GitHub", icon: "dot" },
      { name: "Docker Compose", icon: "box" },
      { name: "Microservices", icon: "grid" },
      { name: "RESTful APIs", icon: "globe" },
      { name: "OpenAPI", icon: "doc" },
      { name: "Swagger", icon: "doc" },
    ],
  },
  {
    title: "Core Competencies",
    description: "How I work — from system design decisions to leading technical teams.",
    items: [
      { name: "Full-Stack Web Development", icon: "layers" },
      { name: "System Architecture", icon: "box" },
      { name: "Agile Project Management", icon: "check" },
      { name: "Strategic Tech Leadership", icon: "users" },
    ],
  },
  {
    title: "Languages",
    description: "Languages I use to communicate, document, and collaborate.",
    items: [
      { name: "Indonesian", icon: "chat" },
      { name: "English", icon: "chat" },
    ],
  },
];

const certifications = [
  {
    title: "Intermediate Assistant Web Developer — Nasional",
    issuer: "KOMDIGI Digital Talent Academy",
  },
  {
    title: "Intermediate Associate Network Administrator — Nasional",
    issuer: "KOMDIGI Digital Talent Academy",
  },
  {
    title: "HCIA-Cloud Service",
    issuer: "Huawei ICT Academy",
  },
  {
    title: "Health — AI Agent for Healthcare",
    issuer: "HACKTIV8 x IBM SkillsBuild",
  },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-ink">
      {children}
    </p>
  );
}

function Heading({ children }: { children: string }) {
  return (
    <h2 className="mt-3 font-sf-pro-display text-[32px] font-semibold text-ink md:text-feature-heading">
      {children}
    </h2>
  );
}

export default function CvSections() {
  return (
    <>
      {/* Education */}
      <section id="education" className="bg-gallery-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <Reveal className="text-center">
            <Eyebrow>✨ Education</Eyebrow>
            <Heading>Strong foundations.</Heading>
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto mt-10 max-w-3xl rounded-[20px] border border-hairline-silver bg-white p-8 md:p-10">
              <p className="font-sf-pro-display text-[20px] font-semibold leading-snug text-ink md:text-[24px]">
                State Islamic University Sultan Syarif Kasim Riau
              </p>
              <p className="mt-2 text-[15px] text-slate md:text-[17px]">
                Bachelor of Informatics Engineering
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-studio-mist px-4 py-1.5 text-[13px] font-medium text-ink">
                  GPA 3.71 / 4.00
                </span>
                <span className="rounded-full bg-studio-mist px-4 py-1.5 text-[13px] font-medium text-ink">
                  Pekanbaru, Indonesia
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative bg-studio-mist">
      <WalkingFigure
        variant="sit"
        className="bottom-4 right-4 hidden w-[100px] opacity-25 md:block md:w-[130px] lg:right-12"
      />
        <div className="mx-auto max-w-6xl px-6 py-10">
          <Reveal className="text-center">
            <Eyebrow>💎 Skills</Eyebrow>
            <Heading>The toolkit.</Heading>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 80}>
                <div className="h-full rounded-[24px] border border-hairline-silver bg-white p-8 md:p-10">
                  <p className="font-sf-pro-display text-[20px] font-semibold text-ink">
                    {g.title}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate">
                    {g.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item.name}
                        className="inline-flex items-center gap-2 rounded-full border border-hairline-silver bg-gallery-white px-4 py-1.5 text-[14px] text-ink"
                      >
                        <SkillPillIcon icon={item.icon} />
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="bg-gallery-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <Reveal className="text-center">
            <Eyebrow>🎯 Certifications</Eyebrow>
            <Heading>Certified proof.</Heading>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4">
            {certifications.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="flex items-center gap-4 rounded-[20px] border border-hairline-silver bg-white p-5 md:p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M9 1.5l2.47 5 5.53.8-4 3.9.94 5.53L9 14.1l-4.94 2.63.94-5.53-4-3.9 5.53-.8L9 1.5z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-sf-pro-display text-[16px] font-semibold text-ink md:text-[18px]">
                      {c.title}
                    </p>
                    <p className="mt-0.5 text-[14px] text-slate">{c.issuer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
