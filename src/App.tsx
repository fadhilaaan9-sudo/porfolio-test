import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CaseStudyModal from "./components/CaseStudyModal";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import Playground from "./components/Playground";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import type { Project } from "./data/portfolio";

export default function App() {
  const [activeCase, setActiveCase] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-gallery-white font-sf-pro-text text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects onCaseStudy={setActiveCase} />
        <Skills />
        <Experience />
        <Education />
        <Testimonials />
        <Achievements />
        <Blog />
        <Playground />
        <Contact />
      </main>
      <Footer />
      <CaseStudyModal project={activeCase} onClose={() => setActiveCase(null)} />
    </div>
  );
}
