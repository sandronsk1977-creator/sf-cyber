import React from "react";
import { Navbar } from "@/components/Navbar";
import { CryptoAnimationHero } from "@/components/CryptoAnimationHero";
import { AudienceSection } from "@/components/AudienceSection";
import { PricingSection } from "@/components/PricingSection";
import { SponsorSection } from "@/components/SponsorSection";
import { PortalCardsSection } from "@/components/PortalCardsSection";
import { ContactRail } from "@/components/ContactRail";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <main className="flex-1">
        <CryptoAnimationHero />
        <PortalCardsSection />
        <AudienceSection />
        <SponsorSection />
        <PricingSection />
      </main>
      <ContactRail />
    </div>
  );
}
