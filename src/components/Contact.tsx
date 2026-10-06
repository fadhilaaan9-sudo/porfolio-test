import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "X", href: profile.twitter },
  { label: "Dribbble", href: profile.dribbble },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-gallery-white">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-[120px]">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-slate">
            Contact
          </p>
          <h2 className="mt-4 font-sf-pro-display text-[32px] font-semibold text-ink md:text-feature-heading">
            Let&apos;s build something great together.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-body text-slate">
            Have a project in mind, a role to fill, or just want to say hi? My inbox is
            always open.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-pricing-blue px-8 py-3.5 text-[15px] font-medium text-white transition-transform hover:scale-[1.03]"
            >
              {profile.email}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-steel px-8 py-3.5 text-[15px] font-medium text-ink"
            >
              Download CV
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[15px] text-apple-blue"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
