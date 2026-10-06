import Reveal from "./Reveal";
import { experience } from "../data/portfolio";

export default function PowerChapter() {
  return (
    <section id="experience" className="bg-gallery-white">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-[90px]">
        <Reveal className="text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-slate">
            Experience
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-sf-pro-display text-[32px] font-semibold text-ink md:text-feature-heading">
            Power on full display.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body text-slate">
            Six years of shipping — from freelance gigs to leading frontend for a SaaS
            used by thousands.
          </p>
        </Reveal>

        <div className="mt-12">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 60}>
              <div className="grid gap-2 border-t border-hairline-silver py-8 md:grid-cols-[160px_1fr] md:gap-8">
                <p className="text-[12px] font-medium uppercase tracking-[0.06em] text-slate md:pt-1">
                  {e.period}
                  {e.current && (
                    <span className="ml-2 font-semibold normal-case tracking-[-0.12px] text-launch-orange">
                      Current
                    </span>
                  )}
                </p>
                <div>
                  <h3 className="font-sf-pro-display text-[21px] font-semibold text-ink md:text-[24px]">
                    {e.role}
                  </h3>
                  <p className="mt-1 text-[15px] text-apple-blue">{e.company}</p>
                  <p className="mt-3 max-w-2xl text-body-small text-slate">
                    {e.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-hairline-silver" />
        </div>
      </div>
    </section>
  );
}
