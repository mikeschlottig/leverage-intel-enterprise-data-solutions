import React, { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceCatalog } from "@/components/sections/ServiceCatalog";
import { Architecture } from "@/components/sections/Architecture";
import { CTA } from "@/components/sections/CTA";
export function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background selection:bg-blue-500/30">
      <Header />
      <main>
        <ServiceHero />
        <ServiceCatalog />
        <div className="bg-slate-50 dark:bg-slate-900/10">
          <Architecture />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}