import Reveal from "./Reveal";
import Section from "./Section";
import { posts } from "../data/portfolio";

export default function Blog() {
  return (
    <Section
      id="blog"
      kicker="Writing"
      title="Blog & notes"
      description="Essays and field notes on design engineering, performance, and the craft of building for the web."
      linkLabel="View all articles"
      linkHref="#blog"
      band
    >
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <article className="flex h-full flex-col rounded-3xl bg-gallery-white p-7 md:p-8">
              <p className="text-[12px] text-slate">
                {p.date} &middot; {p.readTime}
              </p>
              <h3 className="mt-3 font-sf-pro-display text-[19px] font-semibold leading-[1.25] text-ink">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-body-small text-slate">{p.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-studio-mist px-3 py-1 text-[12px] text-ink"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a href="#blog" className="mt-6 text-[14px] text-apple-blue">
                Read article &rarr;
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
