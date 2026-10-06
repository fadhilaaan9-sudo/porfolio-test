import Reveal from "./Reveal";
import Section from "./Section";
import ProjectVisual from "./ProjectVisual";
import { projects, profile, type Project } from "../data/portfolio";

interface ProjectsProps {
  onCaseStudy: (project: Project) => void;
}

export default function Projects({ onCaseStudy }: ProjectsProps) {
  return (
    <Section
      id="work"
      kicker="Selected Work"
      title="Featured projects"
      description="A few favorites — each one a story of a real problem, a thoughtful process, and a measurable outcome."
      linkLabel="View all on GitHub"
      linkHref={profile.github}
      band
    >
      <div className="grid gap-6 md:gap-8">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 80}>
            <article className="overflow-hidden rounded-3xl bg-gallery-white">
              <div className="grid items-center gap-8 p-6 md:p-10 lg:grid-cols-2">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <ProjectVisual accent={p.accent} variant={i} />
                </div>
                <div>
                  <p className="text-[12px] font-medium tracking-[-0.12px] text-slate">
                    {p.year} &middot; {p.role}
                  </p>
                  <h3 className="mt-3 font-sf-pro-display text-[24px] font-semibold text-ink md:text-[28px]">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-[15px] font-medium" style={{ color: p.accent }}>
                    {p.tagline}
                  </p>
                  <p className="mt-4 text-body-small text-slate">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-hairline-silver px-3 py-1 text-[12px] text-ink"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <a href={p.demoUrl} className="text-[14px] text-apple-blue">
                      Live demo &rarr;
                    </a>
                    <a href={p.sourceUrl} className="text-[14px] text-apple-blue">
                      Source code &rarr;
                    </a>
                    <button
                      type="button"
                      onClick={() => onCaseStudy(p)}
                      className="rounded-full border border-steel px-4 py-2 text-compact-control text-ink transition-colors hover:border-ink"
                    >
                      Read case study
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
