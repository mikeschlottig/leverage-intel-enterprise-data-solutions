import React from "react";
import { motion } from "framer-motion";
import { Search, Target, FileText, Settings, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
const steps = [
  {
    title: "Analyze",
    desc: "Deep-dive audit of current data silos and bottlenecks.",
    icon: Search,
  },
  {
    title: "Identify",
    desc: "Pinpoint high-impact areas for optimization and saving.",
    icon: Target,
  },
  {
    title: "Document",
    desc: "Architect a transparent, systemic roadmap for scaling.",
    icon: FileText,
  },
  {
    title: "Optimize",
    desc: "Engineer the new stack and migrate with zero downtime.",
    icon: Settings,
  },
  {
    title: "Maintain",
    desc: "Continuous monitoring and proactive performance tuning.",
    icon: ShieldCheck,
  },
];
export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="The Engagement Pipeline"
          subtitle="A systematic approach to transforming your digital core."
        />
        <div className="relative">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 z-0" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-background border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center mb-6 group-hover:border-blue-500 transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}