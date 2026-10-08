import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { CryptoAnimationHero } from "@/components/CryptoAnimationHero";
import { PortalCardsSection } from "@/components/PortalCardsSection";
import { SFBotSection } from "@/components/SFBotSection";
import { AudienceSection } from "@/components/AudienceSection";
import { ReportagensSection } from "@/components/ReportagensSection";
import { SponsorSection } from "@/components/SponsorSection";
import { PricingSection } from "@/components/PricingSection";
import { PreLaunchCtaSection } from "@/components/PreLaunchCtaSection";
import { ContactRail } from "@/components/ContactRail";
import { Footer } from "@/components/Footer";
import { PreLaunchModal } from "@/components/PreLaunchModal";

export default function Home() {
  const [preLaunchOpen, setPreLaunchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      <Navbar onOpenPreLaunch={() => setPreLaunchOpen(true)} />
      <main className="flex-1">
        <CryptoAnimationHero />
        <PortalCardsSection />
        <SFBotSection />
        <AudienceSection />
        <ReportagensSection />
        <SponsorSection />
        <PricingSection />
        <PreLaunchCtaSection onOpenPreLaunch={() => setPreLaunchOpen(true)} />
      </main>
      <ContactRail />
      <Footer />
      <PreLaunchModal isOpen={preLaunchOpen} onClose={() => setPreLaunchOpen(false)} />
    </div>
  );
}
