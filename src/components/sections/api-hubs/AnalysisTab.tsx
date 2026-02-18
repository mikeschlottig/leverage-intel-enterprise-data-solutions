import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Bot, FileText, Zap, Clock, MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";
export function AnalysisTab() {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Human Perspective */}
        <Card className="bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" />
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500 rounded-2xl text-white group-hover:scale-110 transition-transform">
                <User className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl font-bold">The Human DX</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              For human developers, the primary metrics for API success are discoverability, aesthetic documentation, and visual feedback loops.
            </p>
            <ul className="space-y-4">
              {[
                "Ease of onboarding (Quickstart guides)",
                "Visual API Explorers and Playgrounds",
                "Community support and stackoverflow presence",
                "Clear error messaging with human-readable hints"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">•</div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        {/* AI Perspective */}
        <Card className="bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600" />
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-indigo-600 rounded-2xl text-white group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl font-bold">The Agentic Protocol</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              AI agents (LLMs) ignore the UI. They prioritize strict schema adherence, deterministic outputs, and high semantic density in documentation.
            </p>
            <ul className="space-y-4">
              {[
                "Strict OpenAPI/Swagger compliance",
                "Tool-call optimized parameter descriptions",
                "Low-latency response times for chain-of-thought",
                "Machine-readable markdown documentation"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">•</div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      {/* Methodology Section */}
      <div className="bg-slate-50 dark:bg-slate-900/30 rounded-3xl p-12 border border-slate-200 dark:border-slate-800">
        <h3 className="text-3xl font-bold mb-8 text-center">Rankings Methodology</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: FileText, title: "Docs Clarity", weight: "35%", desc: "Evaluates how easily an LLM can parse and map the API architecture." },
            { icon: Zap, title: "SDK Fidelity", weight: "25%", desc: "Quality of generated client libraries and type-safety features." },
            { icon: Clock, title: "LLM Latency", weight: "20%", desc: "Performance benchmarks under high-concurrency agentic calls." },
            { icon: MessageSquareText, title: "Sentiment", weight: "20%", desc: "Contextual feedback from top-tier AI engineering communities." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-white dark:bg-slate-950 rounded-full shadow-sm">
                <item.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-indigo-600 mb-1">{item.weight} Weight</p>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}