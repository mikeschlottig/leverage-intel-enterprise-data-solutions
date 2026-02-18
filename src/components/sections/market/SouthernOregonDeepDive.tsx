import React, { useState, useMemo } from "react";
import { southernOregonAgencies } from "@/lib/market-data";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, MapPin, ExternalLink, Phone } from "lucide-react";
export function SouthernOregonDeepDive() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredAgencies = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return southernOregonAgencies.filter(
      (a) =>
        a.name.toLowerCase().includes(term) ||
        a.location.toLowerCase().includes(term)
    );
  }, [searchTerm]);
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h3 className="text-2xl font-bold tracking-tight">Regional Hub: Southern Oregon</h3>
        <p className="text-muted-foreground leading-relaxed">
          Southern Oregon's digital economy is anchored by the Medford-Ashland metropolitan area. The region hosts a surprising number of specialized agencies catering to the Rogue Valley's diverse agricultural, tourism, and healthcare sectors. Our research identifies over 25 active agencies providing professional digital services in this corridor.
        </p>
      </div>
      <div className="space-y-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search agencies or cities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 bg-slate-50 dark:bg-slate-900/50"
          />
        </div>
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-950">
          <Table>
            <TableHeader className="bg-slate-50 dark:bg-slate-900/80">
              <TableRow>
                <TableHead className="font-bold">Agency Name</TableHead>
                <TableHead className="font-bold">Location</TableHead>
                <TableHead className="font-bold hidden md:table-cell">Website</TableHead>
                <TableHead className="font-bold text-right">Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAgencies.length > 0 ? (
                filteredAgencies.map((agency) => (
                  <TableRow key={agency.name} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
                    <TableCell className="font-medium">{agency.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {agency.location}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <a
                        href={`https://${agency.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
                      >
                        {agency.website}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1.5 text-sm">
                        <Phone className="h-3 w-3 text-muted-foreground" />
                        {agency.phone}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                    No agencies found matching your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}