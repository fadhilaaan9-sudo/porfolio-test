import { useState } from "react";
import Reveal from "./Reveal";
import { faqs } from "../data/portfolio";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-studio-mist">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-[90px]">
        <Reveal className="text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-slate">
            FAQ
          </p>
          <h2 className="mx-auto mt-3 font-sf-pro-display text-[32px] font-semibold text-ink md:text-feature-heading">
            Questions. Answered.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 border-t border-hairline-silver">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-hairline-silver">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-[17px] font-medium text-ink">{f.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-control-gray text-ink transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden text-body-small text-slate">{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
