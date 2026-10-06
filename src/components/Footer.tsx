export default function Footer() {
  return (
    <footer className="bg-studio-mist">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-12">
        <div className="space-y-2 border-b border-hairline-silver pb-8 text-[12px] leading-[1.6] text-slate">
          <p>
            1. Statistics, testimonials, and project details on this page are placeholder
            content for demonstration purposes.
          </p>
          <p>2. Availability and pricing shown are illustrative.</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[12px] text-slate md:flex-row">
          <p>&copy; 2026 Ferhen. All rights reserved.</p>
          <p>Designed &amp; built with React + Tailwind CSS</p>
          <a href="#top" className="text-accent">
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
