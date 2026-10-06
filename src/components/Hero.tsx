import Reveal from "./Reveal";
import ProjectVisual from "./ProjectVisual";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="bg-gallery-white">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-28 text-center md:pb-20 md:pt-36">
        <Reveal>
          <p className="text-[12px] font-semibold tracking-[-0.12px] text-launch-orange">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-launch-orange align-middle" />
            Available for new projects
          </p>
          <p className="mt-6 font-sf-pro-display text-product-kicker font-semibold text-ink">
            {profile.name}
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl font-sf-pro-display text-[44px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink sm:text-[60px] lg:text-hero-display">
            {profile.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body text-slate">
            I&apos;m a {profile.role.toLowerCase()} based in {profile.location}. I turn
            ambiguous ideas into accessible, performant products — from design system to
            deployment.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-pricing-blue px-7 py-3 text-[15px] font-medium text-white transition-transform hover:scale-[1.03]"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-steel px-7 py-3 text-[15px] font-medium text-ink"
            >
              Contact Me
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto mt-16 max-w-5xl text-left">
          <ProjectVisual accent="#0071e3" variant={0} />
          <div className="absolute bottom-5 right-5 flex items-center gap-4 rounded-[28px] border border-hairline-silver bg-gallery-white px-5 py-4 md:bottom-8 md:right-8">
            <div>
              <p className="text-[14px] font-semibold leading-[1.2] text-ink">
                48+ projects shipped
              </p>
              <p className="mt-1 text-[12px] text-slate">across 6 years of practice</p>
            </div>
            <a
              href="#work"
              className="rounded-full bg-pricing-blue px-4 py-2 text-compact-control text-white"
            >
              View work
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
