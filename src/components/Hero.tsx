import Reveal from "./Reveal";
import ProjectVisual from "./ProjectVisual";
import { profile } from "../data/portfolio";

const specs = [
  { value: "48+", label: "Projects shipped" },
  { value: "99", label: "Avg. Lighthouse score" },
  { value: "6+", label: "Years of craft" },
];

export default function Hero() {
  return (
    <section id="top" className="bg-gallery-white">
      <div className="mx-auto max-w-6xl px-6 pb-14 pt-16 text-center md:pt-24">
        <Reveal>
          <p className="font-sf-pro-display text-product-kicker font-semibold text-ink">
            {profile.name}
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl font-sf-pro-display text-[44px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink sm:text-[60px] lg:text-hero-display">
            Interfaces that feel inevitable.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[19px] leading-[1.4] tracking-[0.012em] text-slate md:text-[21px]">
            I&apos;m a {profile.role.toLowerCase()} — I design and build fast,
            thoughtful web experiences, from first sketch to production.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <a
              href="#contact"
              className="rounded-full bg-pricing-blue px-7 py-3 text-[15px] font-medium text-white transition-transform hover:scale-[1.03]"
            >
              Hire me
            </a>
            <a href="#work" className="text-[17px] text-apple-blue">
              See the work &rarr;
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-14 max-w-5xl md:mt-20">
          <ProjectVisual accent="#0071e3" variant={0} />
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-6">
            {specs.map((s) => (
              <div key={s.label}>
                <p className="font-sf-pro-display text-[32px] font-semibold text-ink md:text-[40px]">
                  {s.value}
                </p>
                <p className="mt-1 text-[12px] text-slate md:text-body-small">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
