import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
export function CTA() {
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
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold gap-2 group hover:scale-105 transition-transform">
                Start the Process
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="ghost" className="h-14 px-8 text-lg font-medium gap-2 hover:bg-white/10">
                <Mail className="w-5 h-5" />
                Speak with an Engineer
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}