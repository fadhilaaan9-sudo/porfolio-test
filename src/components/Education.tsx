import Reveal from "./Reveal";
import Section from "./Section";
import { education, certifications } from "../data/portfolio";

export default function Education() {
  return (
    <Section id="education" kicker="Background" title="Education & certifications">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-hairline-silver p-7 md:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-slate">
              Education
            </p>
            <h3 className="mt-3 font-sf-pro-display text-[19px] font-semibold text-ink">
              {education.degree}
            </h3>
            <p className="mt-1 text-[15px] text-ink">{education.school}</p>
            <p className="mt-1 text-body-small text-slate">{education.period}</p>
            <p className="mt-4 text-body-small text-slate">{education.description}</p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="h-full rounded-3xl border border-hairline-silver p-7 md:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-slate">
              Certifications
            </p>
            <ul className="mt-4 divide-y divide-hairline-silver border-y border-hairline-silver">
              {certifications.map((c) => (
                <li key={c.name} className="py-4">
                  <p className="text-[15px] font-semibold text-ink">{c.name}</p>
                  <p className="mt-0.5 text-body-small text-slate">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
