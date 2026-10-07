import Reveal from "./Reveal";
import { testimonials } from "../data/portfolio";

export default function Quote() {
  const t = testimonials[1];
  return (
    <section className="bg-studio-mist">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-[90px]">
        <Reveal>
          <p className="font-sf-pro-display text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink md:text-[36px]">
            &ldquo;{t.quote}&rdquo;
          </p>
          <p className="mt-6 text-[15px] font-semibold text-ink">{t.name}</p>
          <p className="mt-1 text-body-small text-slate">{t.role}</p>
        </Reveal>
      </div>
    </section>
  );
}
