import React, { useState, useMemo } from "react";
import { startupData, Startup } from "@/lib/api-research-data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, MapPin, Building2, Calendar, Target } from "lucide-react";
import { cn } from "@/lib/utils";
export function RankingsTab() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const filtered = useMemo(() => {
    return startupData.filter(s => {
      const matchesSearch = s.company.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "all" || s.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search companies..." 
            className="pl-9 bg-slate-50 dark:bg-slate-900/50" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full md:w-[180px] bg-slate-50 dark:bg-slate-900/50">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="AI">AI</SelectItem>
            <SelectItem value="FinTech">FinTech</SelectItem>
            <SelectItem value="DevTools">DevTools</SelectItem>
            <SelectItem value="Cloud">Cloud</SelectItem>
            <SelectItem value="Security">Security</SelectItem>
            <SelectItem value="Data">Data</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-950 shadow-soft">
        <Table>
          <TableHeader className="bg-slate-50 dark:bg-slate-900/80">
            <TableRow>
              <TableHead className="w-16 font-bold">Rank</TableHead>
              <TableHead className="font-bold">Company</TableHead>
              <TableHead className="font-bold hidden sm:table-cell">Category</TableHead>
              <TableHead className="font-bold hidden md:table-cell">Founded</TableHead>
              <TableHead className="font-bold">Score</TableHead>
              <TableHead className="font-bold text-right">LLM Sentiment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((s) => (
              <TableRow key={s.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
                <TableCell className="font-mono text-sm text-muted-foreground">#{s.rank}</TableCell>
                <TableCell>
                  <StartupModal startup={s}>
                    <button className="font-bold hover:text-blue-600 transition-colors text-left">
                      {s.company}
                    </button>
                  </StartupModal>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge variant="outline" className="font-normal">{s.category}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell text-sm text-muted-foreground">{s.founded}</TableCell>
                <TableCell>
                  <Badge className={cn(
                    "font-bold",
                    s.score > 90 ? "bg-emerald-500 hover:bg-emerald-600" : "bg-blue-600 hover:bg-blue-700"
                  )}>
                    {s.score}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-3">
                    <span className="text-xs font-medium tabular-nums">{s.llmSentiment}%</span>
                    <Progress value={s.llmSentiment} className="w-20 h-1.5" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
function StartupModal({ startup, children }: { startup: Startup; children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-background/95 backdrop-blur-xl border-slate-200 dark:border-slate-800">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
              {startup.company.charAt(0)}
            </div>
            <div>
              <DialogTitle className="text-3xl font-bold">{startup.company}</DialogTitle>
              <DialogDescription className="text-lg">Rank #{startup.rank} in Global Agentic API Research</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">Intelligence Summary</h4>
              <p className="text-muted-foreground leading-relaxed">{startup.description}</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Building2 className="w-4 h-4 text-blue-500" />
                <span className="font-medium">{startup.category} Infrastructure</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="font-medium">{startup.headquarter}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span className="font-medium">Founded in {startup.founded}</span>
              </div>
            </div>
          </div>
          <div className="space-y-8 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span>Composite Score</span>
                <span className="text-blue-600">{startup.score}</span>
              </div>
              <Progress value={startup.score} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span>LLM Sentiment</span>
                <span className="text-indigo-600">{startup.llmSentiment}%</span>
              </div>
              <Progress value={startup.llmSentiment} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span>Documentation Quality</span>
                <span className="text-emerald-600">{startup.docsQuality}%</span>
              </div>
              <Progress value={startup.docsQuality} className="h-2" />
            </div>
            <div className="pt-4 flex items-center justify-center">
               <div className="flex flex-col items-center gap-2">
                 <div className="p-3 bg-blue-600/10 rounded-full">
                    <Target className="w-6 h-6 text-blue-600" />
                 </div>
                 <span className="text-xs font-bold uppercase tracking-tighter">Strategic Lead Target</span>
               </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}