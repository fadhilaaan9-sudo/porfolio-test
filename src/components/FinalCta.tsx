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
  return (
    <section id="contact" className="relative bg-gallery-white">
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
          <div className="mt-10">
            <a
              href={`mailto:${profile.email}`}
              className="inline-block rounded-full bg-accent px-10 py-4 text-[17px] font-medium text-white transition-all hover:scale-[1.03] hover:bg-accent-deep"
            >
              {profile.email}
            </a>
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
