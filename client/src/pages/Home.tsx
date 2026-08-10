import React from "react";
import { Navbar } from "@/components/Navbar";
import { CryptoAnimationHero } from "@/components/CryptoAnimationHero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { StatsBar } from "@/components/StatsBar";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { AudienceSection } from "@/components/AudienceSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <main className="flex-1">
        <CryptoAnimationHero />
        <ProblemSection />
        <SolutionSection />
        <StatsBar />
        <TestimonialsSection />
        <DifferenceSection />
        <AudienceSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
