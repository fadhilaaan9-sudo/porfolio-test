import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-gallery-white/85 backdrop-blur-xl ${
        scrolled ? "shadow-subtle" : ""
      }`}
    >
      <nav className="mx-auto flex h-11 max-w-6xl items-center justify-between px-6">
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
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-pricing-blue px-4 py-1.5 text-compact-control text-white md:inline-block"
          >
            Contact
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="#1d1d1f" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="#1d1d1f" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-hairline-silver bg-gallery-white px-6 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-hairline-silver py-3 text-[15px] text-ink last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-block rounded-full bg-pricing-blue px-5 py-2.5 text-[15px] text-white"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
