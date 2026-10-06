import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import Section from "./Section";

const stats = [
  { value: 6, suffix: "+", label: "Years of experience" },
  { value: 48, suffix: "+", label: "Projects shipped" },
  { value: 32, suffix: "", label: "Happy clients" },
  { value: 99, suffix: "", label: "Avg. Lighthouse score" },
];

const tabs = [
  {
    id: "design",
    label: "Design",
    title: "Interfaces that feel inevitable.",
    desc: "Every project starts in Figma with real content and real constraints. I design in systems — tokens, components, patterns — so the UI stays coherent as it grows, and so engineers never have to guess.",
  },
  {
    id: "code",
    label: "Code",
    title: "Performance as a feature.",
    desc: "React + TypeScript, built with Vite and shipped as small as possible. Code-splitting, smart caching, and skeleton states mean the interface feels instant — because perceived speed is a design decision.",
  },
  {
    id: "ship",
    label: "Ship",
    title: "From commit to production.",
    desc: "CI on every push, previews for every PR, and monitoring in production. Dockerized builds and performance budgets keep releases boring — in the best possible way.",
  },
];

function Counter({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  return (
    <>
      {n}
      {suffix}
    </>
  );
}

export default function Playground() {
  const [tab, setTab] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const active = tabs[tab];

  return (
    <Section
      id="playground"
      kicker="Playground"
      title="A little interactive"
      description="Numbers that count up, tabs that switch — small moments of delight, in service of the content."
    >
      <div ref={ref} className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        {stats.map((s) => (
          <Reveal key={s.label} className="rounded-3xl border border-hairline-silver p-7 text-center">
            <p className="font-sf-pro-display text-[40px] font-semibold text-ink">
              <Counter value={s.value} suffix={s.suffix} start={start} />
            </p>
            <p className="mt-2 text-body-small text-slate">{s.label}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <div className="flex flex-wrap gap-3" role="tablist" aria-label="How I work">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={i === tab}
              onClick={() => setTab(i)}
              className={`rounded-full px-5 py-2.5 text-[14px] font-medium transition-colors ${
                i === tab
                  ? "bg-ink text-white"
                  : "border border-hairline-silver text-ink hover:border-steel"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="mt-6 rounded-3xl bg-studio-mist p-8 md:p-10">
          <h3 className="font-sf-pro-display text-[24px] font-semibold text-ink">
            {active.title}
          </h3>
          <p className="mt-3 max-w-2xl text-body text-slate">{active.desc}</p>
        </div>
      </Reveal>
    </Section>
  );
}
