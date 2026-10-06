import CountUp from "./CountUp";
import ProjectVisual from "./ProjectVisual";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

const specs = [
  { value: 48, suffix: "+", label: "Projects shipped" },
  { value: 99, suffix: "", label: "Avg. Lighthouse score" },
  { value: 6, suffix: "+", label: "Years of craft" },
];

export default function Hero() {
  return (
    <section id="top" className="bg-gallery-white">
      <div className="mx-auto max-w-6xl px-6 pb-14 pt-28 text-center md:pt-36">
        <p
          className="rise text-[12px] font-semibold tracking-[-0.12px] text-accent"
          style={{ animationDelay: "0ms" }}
        >
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" />
          Available for new projects
        </p>
        <p
          className="rise mt-5 font-sf-pro-display text-product-kicker font-semibold text-ink"
          style={{ animationDelay: "90ms" }}
        >
          {profile.name}
        </p>
        <h1
          className="rise mx-auto mt-4 max-w-4xl font-sf-pro-display text-[44px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink sm:text-[60px] lg:text-hero-display"
          style={{ animationDelay: "190ms" }}
        >
          Interfaces that feel inevitable.
        </h1>
        <p
          className="rise mx-auto mt-6 max-w-2xl text-[19px] leading-[1.4] tracking-[0.012em] text-slate md:text-[21px]"
          style={{ animationDelay: "300ms" }}
        >
          I&apos;m a {profile.role.toLowerCase()} — I design and build fast,
          thoughtful web experiences, from first sketch to production.
        </p>
        <div
          className="rise mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          style={{ animationDelay: "420ms" }}
        >
          <a
            href="#contact"
            className="rounded-full bg-accent px-7 py-3 text-[15px] font-medium text-white transition-all hover:scale-[1.03] hover:bg-accent-deep active:scale-[0.98]"
          >
            Hire me
          </a>
          <a href="#work" className="text-[17px] text-accent">
            See the work &rarr;
          </a>
        </div>

        <Reveal delay={150} className="mx-auto mt-14 max-w-5xl md:mt-20">
          <ProjectVisual accent="#b64400" variant={0} />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-6">
          {specs.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <p className="font-sf-pro-display text-[32px] font-semibold text-ink md:text-[40px]">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[12px] text-slate md:text-body-small">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
