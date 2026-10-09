import WalkingFigure from "./WalkingFigure";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gallery-white">
      <WalkingFigure />
      <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-28 text-center md:pt-36">
        <p
          className="rise inline-flex items-center gap-2 rounded-full border border-hairline-silver bg-white px-2.5 py-1 text-[12px] font-semibold tracking-[-0.12px] text-ink"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-20" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
          </span>
          Hire Me Please !
        </p>
        <h1
          className="rise mx-auto mt-4 max-w-4xl font-sf-pro-display text-[44px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink sm:text-[60px] lg:text-hero-display"
          style={{ animationDelay: "190ms" }}
        >
          Full-stack web developer.
        </h1>
        <p
          className="rise mx-auto mt-6 max-w-2xl text-[19px] leading-[1.4] tracking-[0.012em] text-slate md:text-[21px]"
          style={{ animationDelay: "300ms" }}
        >
          I design and build fast, thoughtful web experiences — including
          campus systems used by 1,250 students and lecturers.
        </p>
        <div
          className="rise mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          style={{ animationDelay: "420ms" }}
        >
          <a
            href="#contact"
            className="rounded-full bg-black px-7 py-3 text-[15px] font-medium text-white transition-all hover:scale-[1.03] hover:bg-neutral-800 active:scale-[0.98]"
          >
            Hire me
          </a>
          <a href="#work" className="text-[17px] text-ink">
            See the work &rarr;
          </a>
          <a
            href="/Farhan-Fadhila-CV.pdf"
            download="Farhan-Fadhila-CV.pdf"
            className="text-[17px] text-ink"
          >
            Download CV &darr;
          </a>
        </div>

      </div>
    </section>
  );
}
