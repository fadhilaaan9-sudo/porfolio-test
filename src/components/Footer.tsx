export default function Footer() {
  return (
    <footer className="border-t border-hairline-silver bg-studio-mist">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-[12px] text-slate md:flex-row">
        <p>&copy; 2026 Ferhen. All rights reserved.</p>
        <p>Designed &amp; built with React + Tailwind CSS</p>
        <a href="#top" className="text-apple-blue">
          Back to top &uarr;
        </a>
      </div>
    </footer>
  );
}
