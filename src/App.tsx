import { useState } from "react";
import LocalNav from "./components/LocalNav";
import Hero from "./components/Hero";
import WorkGallery from "./components/WorkGallery";
import ThinkVast from "./components/ThinkVast";
import PowerChapter from "./components/PowerChapter";
import CvSections from "./components/CvSections";
import TechSpecs from "./components/TechSpecs";
import Quote from "./components/Quote";
import Compare from "./components/Compare";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import CaseStudyModal from "./components/CaseStudyModal";
import type { Project } from "./data/portfolio";

export default function App() {
  const [activeCase, setActiveCase] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-gallery-white font-sf-pro-text text-ink">
      <LocalNav />
      <main>
        <Hero />
        <WorkGallery onCaseStudy={setActiveCase} />
        <ThinkVast />
        <PowerChapter />
        <CvSections />
        <TechSpecs />
        <Quote />
        <Compare />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <CaseStudyModal project={activeCase} onClose={() => setActiveCase(null)} />
    </div>
  );
}
