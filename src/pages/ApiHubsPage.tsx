import React, { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardTab } from "@/components/sections/api-hubs/DashboardTab";
import { AnalysisTab } from "@/components/sections/api-hubs/AnalysisTab";
import { RankingsTab } from "@/components/sections/api-hubs/RankingsTab";
import { motion } from "framer-motion";
export function ApiHubsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 md:py-32">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
              Market Intelligence Report
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Agentic <span className="text-indigo-600">API</span> Research
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Evaluating the top 50 developer platforms based on machine-readability, schema fidelity, and LLM-first consumption benchmarks.
            </p>
          </motion.div>
          <Tabs defaultValue="dashboard" className="w-full">
            <div className="sticky top-[72px] z-30 bg-background/80 backdrop-blur-md py-4 border-b mb-12">
              <TabsList className="bg-slate-100 dark:bg-slate-900 p-1 h-auto inline-flex overflow-x-auto max-w-full">
                <TabsTrigger
                  value="dashboard"
                  className="rounded-lg px-8 py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 shadow-sm transition-all text-sm font-bold"
                >
                  Executive Summary
                </TabsTrigger>
                <TabsTrigger
                  value="analysis"
                  className="rounded-lg px-8 py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 shadow-sm transition-all text-sm font-bold"
                >
                  The Agentic Shift
                </TabsTrigger>
                <TabsTrigger
                  value="rankings"
                  className="rounded-lg px-8 py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 shadow-sm transition-all text-sm font-bold"
                >
                  Top 50 Rankings
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="dashboard">
              <DashboardTab />
            </TabsContent>
            <TabsContent value="analysis">
              <AnalysisTab />
            </TabsContent>
            <TabsContent value="rankings">
              <RankingsTab />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}