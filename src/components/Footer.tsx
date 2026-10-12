export default function Footer() {
  return (
    <footer className="border-t border-hairline-silver bg-studio-mist">
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

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[12px] text-slate md:flex-row">
          <p>&copy; 2026 Farhan Fadhila. All rights reserved.</p>
          <a href="#top" className="text-accent">
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
