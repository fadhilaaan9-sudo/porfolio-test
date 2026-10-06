import Reveal from "./Reveal";
import { services } from "../data/portfolio";

export default function Compare() {
  return (
    <section id="services" className="bg-gallery-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-[90px]">
        <Reveal className="text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-slate">
            Services
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-sf-pro-display text-[32px] font-semibold text-ink md:text-feature-heading">
            Which Ferhen is right for you?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body text-slate">
            Three ways to work together. Same obsession with craft.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <div
                className={`flex h-full flex-col rounded-[28px] p-8 ${
                  s.featured
                    ? "bg-ink text-white"
                    : "border border-hairline-silver bg-gallery-white"
                }`}
              >
                <h3
                  className={`font-sf-pro-display text-[21px] font-semibold ${
                    s.featured ? "text-white" : "text-ink"
                  }`}
                >
                  {s.name}
                </h3>
                <p
                  className={`mt-1 text-body-small ${
                    s.featured ? "text-white/70" : "text-slate"
                  }`}
                >
                  {s.tagline}
                </p>
                <p
                  className={`mt-6 font-sf-pro-display text-[40px] font-semibold ${
                    s.featured ? "text-white" : "text-ink"
                  }`}
                >
                  {s.price}
                </p>
                <p
                  className={`text-[12px] ${s.featured ? "text-white/70" : "text-slate"}`}
                >
                  {s.priceNote}
                </p>
                <ul
                  className={`mt-6 flex-1 space-y-3 border-t pt-6 ${
                    s.featured ? "border-white/20" : "border-hairline-silver"
                  }`}
                >
                  {s.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-3">
                      <span
                        className={`mt-1 text-[14px] font-semibold ${
                          f.included ? "text-pricing-blue" : s.featured ? "text-white/40" : "text-steel"
                        }`}
                      >
                        {f.included ? "✓" : "—"}
                      </span>
                      <span
                        className={`text-[14px] ${
                          f.included
                            ? s.featured
                              ? "text-white"
                              : "text-ink"
                            : s.featured
                              ? "text-white/40"
                              : "text-steel"
                        }`}
                      >
                        {f.label}
                        {typeof f.included === "string" && (
                          <span className="ml-2 text-[12px] text-launch-orange">
                            {f.included}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 rounded-full py-3 text-center text-[15px] font-medium ${
                    s.featured
                      ? "bg-pricing-blue text-white"
                      : "border border-steel text-ink"
                  }`}
                >
                  {s.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
