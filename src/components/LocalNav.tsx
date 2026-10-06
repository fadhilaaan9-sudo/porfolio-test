import { profile } from "../data/portfolio";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
];

export default function LocalNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline-silver bg-gallery-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-sf-pro-display text-product-nav-title font-semibold text-ink"
        >
          {profile.name}
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-global-nav text-ink/80 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-accent px-4 py-1.5 text-compact-control text-white transition-colors hover:bg-accent-deep"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
