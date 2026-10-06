import Reveal from "./Reveal";
import Section from "./Section";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <Section
      id="skills"
      kicker="Expertise"
      title="Skills & tools"
      description="No arbitrary percentage bars — just the tools I reach for every day, proven in production."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 2) * 80}>
            <div className="h-full rounded-3xl border border-hairline-silver p-7 md:p-8">
              <h3 className="text-[17px] font-semibold text-ink">{g.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-studio-mist px-4 py-2 text-[14px] text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
