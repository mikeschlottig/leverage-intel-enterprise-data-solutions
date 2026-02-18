import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  ZAxis, 
  CartesianGrid,
  Legend
} from "recharts";
import { startupData, categoryCounts } from "@/lib/api-research-data";
import { Info, Cpu, Layers, Signal } from "lucide-react";
const COLORS = ["#3b82f6", "#6366f1", "#818cf8", "#4f46e5", "#3730a3", "#1e1b4b"];
export function DashboardTab() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* High-Level Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400">
              <Layers className="w-5 h-5" />
            </div>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">AsyncAPI Context</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">84% Adoption</p>
            <p className="text-xs text-muted-foreground mt-1">Growth in schema-first deployments since 2023.</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-600 dark:text-indigo-400">
              <Cpu className="w-5 h-5" />
            </div>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">LLM Readiness</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Grade: B+</p>
            <p className="text-xs text-muted-foreground mt-1">Average documentation quality for agent parsing.</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-50/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400">
              <Signal className="w-5 h-5" />
            </div>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Market Saturation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Moderate</p>
            <p className="text-xs text-muted-foreground mt-1">Increasing competition in the AI infrastructure layer.</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <Card className="border-slate-200 dark:border-slate-800 shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Category Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryCounts}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryCounts.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        {/* Scatter Plot */}
        <Card className="border-slate-200 dark:border-slate-800 shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Sentiment vs Documentation</CardTitle>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis 
                  type="number" 
                  dataKey="docsQuality" 
                  name="Docs Quality" 
                  unit="%" 
                  domain={[60, 100]}
                  fontSize={12}
                />
                <YAxis 
                  type="number" 
                  dataKey="llmSentiment" 
                  name="LLM Sentiment" 
                  unit="%" 
                  domain={[60, 100]}
                  fontSize={12}
                />
                <ZAxis type="number" range={[50, 400]} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Startups" data={startupData} fill="#3b82f6" />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}