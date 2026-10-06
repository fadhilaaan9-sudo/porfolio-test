import Reveal from "./Reveal";
import { skillGroups } from "../data/portfolio";

const stats = [
  { value: "6+", label: "Years of experience" },
  { value: "40+", label: "Components shipped" },
  { value: "20+", label: "Happy clients" },
  { value: "120+", label: "Open-source PRs" },
];

export default function ThinkVast() {
  return (
    <section id="about" className="bg-studio-mist">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-[90px]">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-slate">
            About
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-sf-pro-display text-[32px] font-semibold text-ink md:text-feature-heading">
            Think vast.
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-5 text-left md:text-center">
            <p className="text-[19px] leading-[1.4] tracking-[0.012em] text-ink md:text-[21px]">
              I&apos;m Ferhen — a developer who thinks like a designer. Six years of
              turning product ideas into interfaces people genuinely enjoy using.
            </p>
            <p className="text-body text-slate">
              I believe the best interfaces are invisible: they get out of the way and
              let people do their best work. That means sweating the 4px details and
              the 40ms ones — typography, spacing, loading states, and the quiet
              micro-interactions in between.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-sf-pro-display text-[32px] font-semibold text-ink md:text-[40px]">
                  {s.value}
                </p>
                <p className="mt-1 text-[12px] text-slate md:text-body-small">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <div className="h-full rounded-[28px] bg-gallery-white p-6 md:p-7">
                <h3 className="text-[15px] font-semibold text-ink">{g.title}</h3>
                <p className="mt-3 text-body-small leading-[1.6] text-slate">
                  {g.items.join(" · ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
