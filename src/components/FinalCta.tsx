import { useState } from "react";
import Reveal from "./Reveal";
import WalkingFigure from "./WalkingFigure";
import { profile } from "../data/portfolio";

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "X", href: profile.twitter },
  { label: "Dribbble", href: profile.dribbble },
];

export default function FinalCta() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard tidak tersedia */
    }
  };

  return (
    <section id="contact" className="relative border-t border-hairline-silver bg-gallery-white">
      <WalkingFigure
        variant="wave"
        className="bottom-6 left-4 hidden w-[95px] sm:block md:bottom-10 md:left-12 md:w-[135px]"
      />
      <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-[140px]">
        <Reveal>
          <h2 className="font-sf-pro-display text-[56px] font-semibold leading-[1.02] tracking-[-0.02em] text-ink md:text-[80px]">
            Let&apos;s build.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[19px] leading-[1.4] text-slate md:text-[21px]">
            Have a project, a role, or just an idea? My inbox is always open.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="text-[19px] font-bold italic text-ink underline underline-offset-4 md:text-[21px]"
            >
              {profile.email}
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="rounded-full border border-hairline-silver bg-white px-4 py-1.5 text-[13px] font-medium text-ink transition-colors hover:bg-studio-mist active:scale-[0.97]"
            >
              {copied ? "Tersalin!" : "Salin"}
            </button>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[15px] text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
