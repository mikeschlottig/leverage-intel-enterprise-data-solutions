import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Cpu, LineChart } from "lucide-react";
import { motion } from "framer-motion";
const insights = [
  {
    title: "Diverse Markets",
    description: "From Portland's enterprise tech ecosystem to Southern Oregon's robust small-business and tourism network, the state offers a wide spectrum of digital opportunities.",
    icon: Globe,
    color: "text-blue-500",
  },
  {
    title: "Technology Trends",
    description: "Agencies are rapidly shifting from monolithic CMS platforms to Headless architectures and Edge-integrated solutions to meet modern performance demands.",
    icon: Cpu,
    color: "text-indigo-500",
  },
  {
    title: "Economic Indicators",
    description: "Oregon's digital services sector shows a consistent 8.4% annual growth rate, outpacing many traditional service industries in the Pacific Northwest.",
    icon: LineChart,
    color: "text-emerald-500",
  },
];
export function MarketOverview() {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h3 className="text-2xl font-bold tracking-tight">The Oregon Digital Landscape</h3>
        <p className="text-muted-foreground leading-relaxed text-lg">
          The Web Design and SEO industry in Oregon is characterized by a high degree of specialization and regional variation. While Portland remains the primary hub for enterprise-level development and creative direction, emerging tech scenes in Bend and Southern Oregon are creating new centers of excellence focused on outdoor industry e-commerce and regional service dominance.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((insight, idx) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-800 ${insight.color}`}>
                  <insight.icon className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">{insight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {insight.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}