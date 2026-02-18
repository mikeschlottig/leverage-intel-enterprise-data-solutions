import React from "react";
import { Check, X, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
export function Architecture() {
  return (
    <section id="architecture" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Architectural Sovereignty"
          subtitle="Stop paying the 'Cloud Tax'. We transition your enterprise from proprietary lock-in to open-source performance."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* The Trap */}
          <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <X className="w-24 h-24 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-red-500">The Proprietary Trap</h3>
            <ul className="space-y-6">
              {[
                "Exponential egress costs on Snowflake/BigQuery",
                "Vendor lock-in preventing infrastructure agility",
                "Proprietary formats creating data silos",
                "Opaque pricing models and surprise bills",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
              <p className="text-4xl font-bold text-slate-900 dark:text-white">$750k+</p>
              <p className="text-sm text-slate-500">Avg. annual unnecessary egress/platform fees</p>
            </div>
          </div>
          {/* The Leverage */}
          <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-glow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Check className="w-24 h-24 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6">The Leverage Solution</h3>
            <ul className="space-y-6">
              {[
                "Open Source Stack (DuckDB, ClickHouse, Apache Iceberg)",
                "Full ownership of your data formats and pipelines",
                "Cloud-agnostic edge processing via Cloudflare",
                "Predictable, performance-based flat costs",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-blue-100">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-8 border-t border-blue-500/50">
              <p className="text-4xl font-bold">$0</p>
              <p className="text-sm text-blue-100">Platform egress fees with our architecture</p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
                <span>90% Savings Possible</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}