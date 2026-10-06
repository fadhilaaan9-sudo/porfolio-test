import Reveal from "./Reveal";

const specs = [
  {
    label: "Model",
    value: "Ferhen — 2026 Edition. One careful owner, regularly updated.",
  },
  {
    label: "Chip",
    value: "FE-26: React 19 and TypeScript, with a 6-year Neural Engine for UI intuition.",
  },
  {
    label: "Display",
    value: "80px headlines at −1.2px tracking. Pixel-perfect on every viewport, from 320px to 5K.",
  },
  {
    label: "Camera",
    value: "48MP eye for detail — spots a 1px misalignment from across the room.",
  },
  {
    label: "Battery",
    value: "Up to 40 hours per week. Fast-charges on good coffee.",
  },
  {
    label: "Storage",
    value: "48+ projects shipped, 120+ open-source contributions, zero unfinished side projects*.",
  },
  {
    label: "Connectivity",
    value: "WIB (UTC+7). Async-first. Fluent in Indonesian and English, plus JavaScript.",
  },
  {
    label: "Operating System",
    value: "DesignOS 26 — runs on curiosity, ships on schedule.",
  },
  {
    label: "In the Box",
    value: "Ferhen, a component library, full documentation, and a 30-day bug-fix warranty.",
  },
];

export default function TechSpecs() {
  return (
    <section id="specs" className="bg-gallery-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-[90px]">
        <Reveal className="text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-slate">
            Under the hood
          </p>
          <h2 className="mx-auto mt-3 font-sf-pro-display text-[32px] font-semibold text-ink md:text-feature-heading">
            Tech Specs.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body text-slate">
            Everything you need to know, in the format you already know how to read.
          </p>
        </Reveal>

        <div className="mt-12 border-b border-hairline-silver">
          {specs.map((s, i) => (
            <Reveal key={s.label} delay={Math.min(i * 40, 200)}>
              <div className="grid gap-1 border-t border-hairline-silver py-6 md:grid-cols-[180px_1fr] md:gap-8">
                <p className="text-[15px] font-semibold text-ink">{s.label}</p>
                <p className="text-body-small text-slate">{s.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 text-[12px] leading-[1.6] text-steel">
            * Okay, maybe two unfinished side projects. They&apos;re &ldquo;resting&rdquo;.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
