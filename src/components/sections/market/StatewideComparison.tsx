import React, { useState, useMemo } from "react";
import { cityData, CityStats } from "@/lib/market-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Building2, DollarSign, Users, LucideIcon, AlertCircle } from "lucide-react";
const COLORS = ["#3b82f6", "#6366f1", "#10b981", "#f59e0b", "#f43f5e", "#8b5cf6"];
interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
}
function StatCard({ title, value, icon: Icon, color }: StatCardProps) {
  return (
    <Card className="border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{title}</p>
          <Icon className={`h-4 w-4 ${color}`} />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}
export function StatewideComparison() {
  const [selectedCityId, setSelectedCityId] = useState<string>("southern-oregon");
  const currentCity = useMemo(() => cityData[selectedCityId], [selectedCityId]);
  if (!currentCity) {
    return (
      <div className="p-12 text-center bg-accent rounded-3xl flex flex-col items-center gap-4">
        <AlertCircle className="w-12 h-12 text-destructive" />
        <p className="text-muted-foreground">Regional data could not be retrieved. Please select another city.</p>
      </div>
    );
  }
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex flex-wrap gap-2">
        {Object.values(cityData).map((city) => (
          <Button
            key={city.id}
            variant={selectedCityId === city.id ? "default" : "outline"}
            onClick={() => setSelectedCityId(city.id)}
            size="sm"
            className="rounded-full px-6 transition-all"
          >
            {city.name}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Est. Agency Count"
          value={currentCity.agencyCount}
          icon={Building2}
          color="text-blue-500"
        />
        <StatCard
          title="Avg. Project Cost"
          value={currentCity.avgCost}
          icon={DollarSign}
          color="text-emerald-500"
        />
        <StatCard
          title="Primary Clientele"
          value={currentCity.primaryClientele}
          icon={Users}
          color="text-indigo-500"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-lg">Common Frameworks (%)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%" key={`frameworks-${selectedCityId}`}>
              <BarChart data={currentCity.frameworks} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.1} />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={100}
                  tick={{ fontSize: 12, fill: 'currentColor' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ fill: "hsl(var(--primary) / 0.05)" }}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  }}
                  itemStyle={{ color: '#000' }}
                />
                <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-lg">Service Focus Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%" key={`focus-${selectedCityId}`}>
              <PieChart>
                <Pie
                  data={currentCity.serviceFocus}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {currentCity.serviceFocus.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" align="center" iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}