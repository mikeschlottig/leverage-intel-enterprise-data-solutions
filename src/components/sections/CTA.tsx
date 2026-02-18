import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
export function CTA() {
  const location = useLocation();
  const navigate = useNavigate();
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
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center text-white shadow-glow relative overflow-hidden"
        >
          {/* Background shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Ready for Leverage?
            </h2>
            <p className="text-xl text-blue-100/80 leading-relaxed">
              Book a strategic data audit today. No fluff, no sales pitch. Just a deep technical review of your existing architecture.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold gap-2 group hover:scale-105 transition-transform text-blue-600">
                <a href="#process" onClick={(e) => handleNavClick(e, "#process")}>
                  Start the Process
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="h-14 px-8 text-lg font-medium gap-2 hover:bg-white/10 text-white">
                <a href="mailto:hello@leverage-intel.com">
                  <Mail className="w-5 h-5" />
                  Speak with an Engineer
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}