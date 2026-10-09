import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Programming & Frameworks",
    items: ["PHP", "Python", "JavaScript", "Laravel", "React (Vite)", "FastAPI", "Hono JS"],
  },
  {
    title: "Data",
    items: ["SQL (Advanced)", "MySQL", "PostgreSQL"],
  },
  {
    title: "Infrastructure & Tools",
    items: ["Git", "GitHub", "Docker Compose", "Microservices", "RESTful APIs", "OpenAPI", "Swagger"],
  },
  {
    title: "Core Competencies",
    items: [
      "Full-Stack Web Development",
      "System Architecture",
      "Agile Project Management",
      "Strategic Tech Leadership",
    ],
  },
  {
    title: "Languages",
    items: ["Indonesian", "English"],
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
    <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-accent">
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
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-[90px]">
          <Reveal className="text-center">
            <Eyebrow>Education</Eyebrow>
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
      <section id="skills" className="bg-studio-mist">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-[90px]">
          <Reveal className="text-center">
            <Eyebrow>Skills</Eyebrow>
            <Heading>The toolkit.</Heading>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 80}>
                <div className="h-full rounded-[20px] border border-hairline-silver bg-white p-7 md:p-8">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate">
                    {g.title}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-hairline-silver bg-gallery-white px-4 py-1.5 text-[14px] text-ink"
                      >
                        {item}
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
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-[90px]">
          <Reveal className="text-center">
            <Eyebrow>Certifications</Eyebrow>
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
