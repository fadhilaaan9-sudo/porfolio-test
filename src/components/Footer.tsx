export default function Footer() {
  return (
    <footer className="bg-studio-mist">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-12">
        <p className="border-b border-hairline-silver pb-8 text-[13px] leading-[1.6] text-slate">
          P.S. This site practices what it preaches — semantic HTML, structured
          data, meta tags, sitemap, and a 100-point Lighthouse target.{" "}
          <a
            href="https://pagespeed.web.dev/analysis?url=https://porfolio-test-neon.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-accent"
          >
            Run the test &rarr;
          </a>
        </p>
        <div className="space-y-2 border-b border-hairline-silver py-8 text-[12px] leading-[1.6] text-slate">
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
