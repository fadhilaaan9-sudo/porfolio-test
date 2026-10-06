import Reveal from "./Reveal";
import ProjectVisual from "./ProjectVisual";
import { projects, type Project } from "../data/portfolio";

interface WorkGalleryProps {
  onCaseStudy: (project: Project) => void;
}

export default function WorkGallery({ onCaseStudy }: WorkGalleryProps) {
  return (
    <section id="work" className="bg-gallery-white">
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-20 text-center md:pt-[90px]">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-slate">
            Selected work
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-sf-pro-display text-[32px] font-semibold text-ink md:text-feature-heading">
            Work. Hands down.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body text-slate">
            Four projects, four real problems. Open any of them for the full story —
            problem, process, solution, result.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:justify-center">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="w-[85%] shrink-0 snap-center rounded-[28px] bg-studio-mist p-6 sm:w-[70%] md:p-8 lg:w-[480px]"
            >
              <ProjectVisual accent={p.accent} variant={i} />
              <div className="px-1 pt-6 text-left md:px-2">
                <p className="text-[12px] font-medium tracking-[-0.12px] text-slate">
                  {p.year} &middot; {p.role}
                </p>
                <h3 className="mt-2 font-sf-pro-display text-[24px] font-semibold text-ink">
                  {p.name}
                </h3>
                <p className="mt-1 text-[15px]" style={{ color: p.accent }}>
                  {p.tagline}
                </p>
                <p className="mt-3 text-body-small text-slate">{p.description}</p>
                <button
                  type="button"
                  onClick={() => onCaseStudy(p)}
                  className="mt-5 rounded-full border border-steel px-4 py-2 text-compact-control text-ink transition-colors hover:border-ink"
                >
                  Read case study
                </button>
              </div>
            </article>
          ))}
        </div>
        <p className="pb-16 pt-2 text-center text-[12px] text-steel md:pb-24">
          Scroll sideways to explore &rarr;
        </p>
      </Reveal>
    </section>
  );
}
