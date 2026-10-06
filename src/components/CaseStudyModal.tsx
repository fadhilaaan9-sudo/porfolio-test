import { useEffect } from "react";
import type { Project } from "../data/portfolio";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  if (!project) return null;
  const cs = project.caseStudy;

  const blocks: { label: string; body: string | string[] }[] = [
    { label: "Problem", body: cs.problem },
    { label: "Process", body: cs.process },
    { label: "Solution", body: cs.solution },
    { label: "Result", body: cs.result },
  ];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/40 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} case study`}
    >
      <div
        className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-t-[28px] bg-gallery-white p-6 sm:rounded-[28px] md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-[12px] font-medium tracking-[-0.12px] text-slate">
              Case study &middot; {project.year}
            </p>
            <h3 className="mt-2 font-sf-pro-display text-[28px] font-semibold text-ink">
              {project.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-studio-mist text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="mt-8 space-y-8">
          {blocks.map((b) => (
            <div key={b.label}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-slate">
                {b.label}
              </p>
              {typeof b.body === "string" ? (
                <p className="mt-3 text-body text-ink">{b.body}</p>
              ) : (
                <ul className="mt-3 divide-y divide-hairline-silver border-y border-hairline-silver">
                  {b.body.map((item, i) => (
                    <li key={i} className="flex gap-4 py-4">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: project.accent }}
                      />
                      <p className="text-body-small text-ink">{item}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
