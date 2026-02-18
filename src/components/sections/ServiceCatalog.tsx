import React from "react";
import { motion } from "framer-motion";
import { 
  Database, Eye, Globe, BarChart3, TrendingUp, FileText, 
  Link2, Zap, Target, SearchX, MousePointer2, Map 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
const services = [
  {
    title: "Knowledge Base Formation",
    desc: "Build authoritative internal knowledge graphs for LLMs and agentic RAG architectures.",
    icon: Database,
    color: "text-blue-500",
  },
  {
    title: "Programmatic Tracking",
    desc: "Automated real-time competitor intelligence gathering and precision alerting systems.",
    icon: Eye,
    color: "text-orange-500",
  },
  {
    title: "Digital Presence Optimization",
    desc: "SEO/SEM driven by proprietary data signals rather than broad market guesswork.",
    icon: Globe,
    color: "text-indigo-500",
  },
  {
    title: "Competitive KPI Comparison",
    desc: "Deep benchmarking dashboards comparing your efficiency against industry peers.",
    icon: BarChart3,
    color: "text-emerald-500",
  },
  {
    title: "Economic Industry Forecasts",
    desc: "Predictive modeling for sector-specific macro trends using custom data streams.",
    icon: TrendingUp,
    color: "text-rose-500",
  },
  {
    title: "Technical Whitepapers",
    desc: "Custom research deliverables positioning your enterprise as the definitive thought leader.",
    icon: FileText,
    color: "text-cyan-500",
  },
  {
    title: "Domain Authority Scaling",
    desc: "Strategic acceleration of DA through data-backed, high-integrity link acquisition.",
    icon: Link2,
    color: "text-violet-500",
  },
  {
    title: "Authoritative Content Flywheels",
    desc: "Content engines powered by entity extraction and deep topical authority mapping.",
    icon: Zap,
    color: "text-amber-500",
  },
  {
    title: "Precision Keyword Targeting",
    desc: "Intent-based keyword clusters that ignore vanity metrics in favor of conversion signals.",
    icon: Target,
    color: "text-blue-600",
  },
  {
    title: "Zero Search Conversions",
    desc: "Eliminate zero-click SERP traps and dominate featured snippets with data-rich entities.",
    icon: SearchX,
    color: "text-orange-600",
  },
  {
    title: "Behavioral Intent Mapping",
    desc: "Mapping user journeys from initial query to final conversion using behavioral telemetry.",
    icon: MousePointer2,
    color: "text-indigo-600",
  },
  {
    title: "GEO Service Architecture",
    desc: "Localized landing page architecture optimized for massive regional search dominance.",
    icon: Map,
    color: "text-emerald-600",
  }
];
const focusAreas = [
  {
    label: "Intelligence",
    title: "Data-Driven Awareness",
    text: "Our systems provide a 360-degree view of your market landscape, processing millions of signals into actionable insights."
  },
  {
    label: "Strategy",
    title: "Systemic Implementation",
    text: "We don't believe in one-off campaigns. We engineer self-sustaining loops that grow stronger as more data flows through them."
  },
  {
    label: "Growth",
    title: "Compounding Returns",
    text: "By focusing on authoritative signals and high-fidelity data, we create a defensive moat around your digital performance."
  }
];
export function ServiceCatalog() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="The Technical Suite"
          subtitle="Twelve specialized units engineered to provide absolute market leverage."
          align="left"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-32">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card className="h-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <CardHeader className="pb-2">
                  <div className={s.color}>
                    <s.icon className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-lg font-bold leading-tight">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-slate-100 dark:border-slate-800 pt-24">
          {focusAreas.map((area, idx) => (
            <div key={idx} className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {area.label}
              </span>
              <h3 className="text-2xl font-bold">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}