import Reveal from "./Reveal";
import Section from "./Section";
import { testimonials } from "../data/portfolio";

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      kicker="Kind words"
      title="Testimonials"
      description="What it's like to work with me — in the words of clients, leads, and mentors."
      band
    >
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <figure className="flex h-full flex-col rounded-3xl bg-gallery-white p-7 md:p-8">
              <span className="font-sf-pro-display text-[40px] font-semibold leading-none text-steel">
                &ldquo;
              </span>
              <blockquote className="-mt-2 flex-1 text-[17px] leading-[1.47] tracking-[-0.374px] text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-hairline-silver pt-5">
                <p className="text-[15px] font-semibold text-ink">{t.name}</p>
                <p className="mt-0.5 text-body-small text-slate">{t.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
