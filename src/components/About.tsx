import Reveal from "./Reveal";
import Section from "./Section";
import { profile } from "../data/portfolio";

const focus = [
  {
    title: "Design engineering",
    desc: "Bridging Figma and code with token-driven design systems.",
  },
  {
    title: "Web performance",
    desc: "Obsessed with Core Web Vitals — every kilobyte earns its place.",
  },
  {
    title: "Accessible UX",
    desc: "Interfaces that work for everyone, from keyboard to screen reader.",
  },
];

export default function About() {
  return (
    <Section id="about" kicker="About" title="A developer who thinks like a designer">
      <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
        <Reveal>
          <div className="flex aspect-[4/5] items-center justify-center rounded-3xl bg-studio-mist">
            <span className="font-sf-pro-display text-[120px] font-semibold text-ink/10">
              {profile.name.charAt(0)}
            </span>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="text-body text-ink">
              I&apos;m {profile.name}, a {profile.role.toLowerCase()} with 6 years of
              experience turning product ideas into interfaces people enjoy using. My
              background in informatics engineering gave me the systems thinking; years
              of client work gave me the taste.
            </p>
            <p className="mt-5 text-body text-slate">
              I believe the best interfaces are invisible — they get out of the way and
              let people do their best work. That means sweating the 4px details and
              the 40ms ones: typography, spacing, loading states, and the quiet
              micro-interactions in between.
            </p>
            <p className="mt-5 text-body text-slate">
              When I&apos;m not shipping, I&apos;m writing about design engineering,
              contributing to open source, or exploring Pekanbaru&apos;s coffee scene —
              usually with a notebook full of UI sketches.
            </p>
          </Reveal>
          <div className="mt-10">
            {focus.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="border-t border-hairline-silver py-5">
                  <p className="text-[17px] font-semibold text-ink">{f.title}</p>
                  <p className="mt-1 text-body-small text-slate">{f.desc}</p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-hairline-silver" />
          </div>
        </div>
      </div>
    </Section>
  );
}
