import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  kicker: string;
  title: string;
  description?: string;
  linkLabel?: string;
  linkHref?: string;
  band?: boolean;
  children: ReactNode;
}

export default function Section({
  id,
  kicker,
  title,
  description,
  linkLabel,
  linkHref,
  band = false,
  children,
}: SectionProps) {
  return (
    <section id={id} className={band ? "bg-studio-mist" : "bg-gallery-white"}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-[90px]">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-slate">
            {kicker}
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl font-sf-pro-display text-[32px] font-semibold text-ink md:text-feature-heading">
              {title}
            </h2>
            {linkLabel && linkHref && (
              <a href={linkHref} className="text-body-small text-apple-blue">
                {linkLabel} &rarr;
              </a>
            )}
          </div>
          {description && (
            <p className="mt-4 max-w-2xl text-body text-slate">{description}</p>
          )}
        </Reveal>
        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  );
}
