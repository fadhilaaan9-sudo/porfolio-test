import Reveal from "./Reveal";
import Section from "./Section";
import { achievements } from "../data/portfolio";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      kicker="Milestones"
      title="Achievements"
      description="A few moments I'm proud of along the way."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={(i % 4) * 60}>
            <div className="h-full rounded-3xl border border-hairline-silver p-7">
              <p className="text-[12px] font-semibold tracking-[-0.12px] text-launch-orange">
                {a.year}
              </p>
              <h3 className="mt-3 text-[17px] font-semibold text-ink">{a.title}</h3>
              <p className="mt-2 text-body-small text-slate">{a.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
