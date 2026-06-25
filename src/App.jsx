import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/HowItWorks";
import UseCases from "./components/UseCases";
import ProvenBand from "./components/ProvenBand";
import OriginCard from "./components/OriginCard";
import ValueGrid from "./components/ValueGrid";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";
import DemoRequest from "./components/DemoRequest";
import Reveal from "./components/ui/Reveal";
import FloatingParticles from "./components/ui/FloatingParticles";
import Explainability from "./components/Explainability";
import IntegratesWith from "./components/IntegratesWith";


export default function App() {
  const [page, setPage] = useState("home");

  const goToSection = (id) => {
    setPage("home");
    setTimeout(() => document.getElementById(id)?.scrollIntoView(), 50);
  };

  if (page === "demo") {
    return <DemoRequest onBack={() => setPage("home")} onNavClick={goToSection} />;
  }

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <FloatingParticles />
      <Navbar onDemoClick={() => setPage("demo")} onNavClick={goToSection} />
      <Hero onDemoClick={() => setPage("demo")} />

      <Reveal>
        <Products />
      </Reveal>
      
      
      <Reveal>
        <ProblemSection />
      </Reveal>

      <Reveal delay={0.1}>
        <HowItWorks />
      </Reveal>

      <Reveal>
        <UseCases />
      </Reveal>

      <Reveal>
        <IntegratesWith />
      </Reveal>

      <Reveal>
        <ProvenBand />
      </Reveal>

      <Reveal delay={0.1}>
        <OriginCard />
      </Reveal>

      <Reveal>
        <Explainability />
      </Reveal>

      <Reveal>
        <ValueGrid />
      </Reveal>

      <Reveal>
        <CtaBand onDemoClick={() => setPage("demo")} />
      </Reveal>

      <Footer />
    </div>
  );
}