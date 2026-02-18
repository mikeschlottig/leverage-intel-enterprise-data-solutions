import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Services } from "@/components/sections/Services";
import { Architecture } from "@/components/sections/Architecture";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
export function HomePage() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Use requestAnimationFrame to ensure DOM is fully ready and heights are calculated
      const scrollTimer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 50); // Small delay to allow hydration/render stable state
      return () => clearTimeout(scrollTimer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);
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
    </div>
  );
}