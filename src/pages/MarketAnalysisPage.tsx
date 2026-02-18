import React, { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MarketOverview } from "@/components/sections/market/MarketOverview";
import { SouthernOregonDeepDive } from "@/components/sections/market/SouthernOregonDeepDive";
import { StatewideComparison } from "@/components/sections/market/StatewideComparison";
import { motion } from "framer-motion";
export function MarketAnalysisPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Oregon Web Design & SEO Industry
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Interactive market analysis and regional intelligence dashboard.
            </p>
          </motion.div>
          <Tabs defaultValue="overview" className="w-full space-y-12">
            <TabsList className="bg-slate-100 dark:bg-slate-900 p-1 h-auto flex-wrap sm:flex-nowrap">
              <TabsTrigger
                value="overview"
                className="rounded-lg px-6 py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 shadow-sm transition-all"
              >
                Market Overview
              </TabsTrigger>
              <TabsTrigger
                value="regional"
                className="rounded-lg px-6 py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 shadow-sm transition-all"
              >
                Southern Oregon Deep Dive
              </TabsTrigger>
              <TabsTrigger
                value="comparison"
                className="rounded-lg px-6 py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 shadow-sm transition-all"
              >
                Statewide Comparison
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <MarketOverview />
            </TabsContent>
            <TabsContent value="regional">
              <SouthernOregonDeepDive />
            </TabsContent>
            <TabsContent value="comparison">
              <StatewideComparison />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}