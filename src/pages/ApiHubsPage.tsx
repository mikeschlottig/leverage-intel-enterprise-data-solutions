import React, { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardTab } from "@/components/sections/api-hubs/DashboardTab";
import { AnalysisTab } from "@/components/sections/api-hubs/AnalysisTab";
import { RankingsTab } from "@/components/sections/api-hubs/RankingsTab";
import { motion, AnimatePresence } from "framer-motion";
export function ApiHubsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background selection:bg-indigo-500/20">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 md:py-32">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-[0.2em]">
              Market Intelligence Report
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              Agentic <span className="text-indigo-600">API</span> Research
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Evaluating the top 50 developer platforms based on machine-readability, schema fidelity, and LLM-first consumption benchmarks.
            </p>
          </motion.div>
          <Tabs defaultValue="dashboard" className="w-full">
            <div className="sticky top-[70px] md:top-[80px] z-30 bg-background/80 backdrop-blur-md py-4 border-b border-border/50 mb-12">
              <TabsList className="bg-slate-100/50 dark:bg-slate-900/50 p-1.5 h-auto inline-flex overflow-x-auto max-w-full no-scrollbar rounded-xl">
                <TabsTrigger
                  value="dashboard"
                  className="rounded-lg px-8 py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-md transition-all text-sm font-black uppercase tracking-tighter"
                >
                  Executive Summary
                </TabsTrigger>
                <TabsTrigger
                  value="analysis"
                  className="rounded-lg px-8 py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-md transition-all text-sm font-black uppercase tracking-tighter"
                >
                  The Agentic Shift
                </TabsTrigger>
                <TabsTrigger
                  value="rankings"
                  className="rounded-lg px-8 py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-md transition-all text-sm font-black uppercase tracking-tighter"
                >
                  Top 50 Rankings
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="mt-6">
              <TabsContent value="dashboard" className="mt-0 outline-none">
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <DashboardTab />
                </motion.div>
              </TabsContent>
              <TabsContent value="analysis" className="mt-0 outline-none">
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnalysisTab />
                </motion.div>
              </TabsContent>
              <TabsContent value="rankings" className="mt-0 outline-none">
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <RankingsTab />
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}