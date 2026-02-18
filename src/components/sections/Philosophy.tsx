import React from "react";
import { motion } from "framer-motion";
export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <span className="text-blue-500 uppercase tracking-widest text-sm font-semibold">Brand Ethos</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              We Don't Fix Problems; We Engineer <span className="italic text-slate-500 font-normal">Systemic</span> Solutions.
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto" />
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Patchwork fixes create technical debt. Leverage Intel builds high-performance pipelines that eliminate the source of data friction entirely.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}