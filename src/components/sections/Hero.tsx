import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLeadCapture } from "@/hooks/use-lead-capture";
import { AnimatedBackground } from "@/components/ui/animated-background";
export function Hero() {
  const location = useLocation();
  const navigate = useNavigate();
  const onOpenLeadCapture = useLeadCapture((s) => s.onOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const element = document.querySelector(href);
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
    }
  };
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Engineering Digital Supremacy
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-8 leading-[1.1]">
              Data Driven <span className="text-blue-600">Destiny</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              We engineer the systemic infrastructure required to turn raw data into your most powerful competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg gap-2 group shadow-lg shadow-blue-500/20" onClick={onOpenLeadCapture}>
                Get Leverage
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg gap-2 group">
                <a href="#architecture" onClick={(e) => handleNavClick(e, "#architecture")}>
                  Our Architecture
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}