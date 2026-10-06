import Reveal from "./Reveal";
import Section from "./Section";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <Section
      id="experience"
      kicker="Journey"
      title="Experience"
      description="Six years of shipping — from freelance gigs to leading frontend for a SaaS used by thousands."
    >
      <ol className="ml-2 space-y-10 border-l border-hairline-silver">
        {experience.map((e, i) => (
          <li key={e.role} className="relative pl-8">
            <span
              className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${
                e.current ? "bg-pricing-blue" : "bg-ink"
              }`}
            />
            <Reveal delay={i * 60}>
              <p className="flex flex-wrap items-center gap-3 text-[12px] font-medium uppercase tracking-[0.06em] text-slate">
                {e.period}
                {e.current && (
                  <span className="font-semibold normal-case tracking-[-0.12px] text-launch-orange">
                    Current
                  </span>
                )}
              </p>
              <h3 className="mt-2 font-sf-pro-display text-[19px] font-semibold text-ink">
                {e.role}
              </h3>
              <p className="mt-0.5 text-[15px] text-apple-blue">{e.company}</p>
              <p className="mt-3 max-w-2xl text-body-small text-slate">{e.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
