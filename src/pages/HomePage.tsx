import React, { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Services } from "@/components/sections/Services";
import { Architecture } from "@/components/sections/Architecture";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { Toaster } from "@/components/ui/sonner";
export function HomePage() {
  useEffect(() => {
    // Initial scroll to top on load
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background selection:bg-blue-500/30">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Architecture />
        <Process />
        <CTA />
      </main>
      <Footer />
      <Toaster richColors closeButton position="bottom-right" />
    </div>
  );
}