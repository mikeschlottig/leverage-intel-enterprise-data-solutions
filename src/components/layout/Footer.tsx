import React from "react";
import { Link } from "react-router-dom";
import { Database, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { useNavigationHandler } from "@/hooks/use-navigation-handler";
export function Footer() {
  const { handleNavClick } = useNavigationHandler();
  return (
    <footer className="bg-slate-950 text-slate-200 py-16 md:py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Database className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Leverage Intel</span>
            </Link>
            <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
              Engineering systemic data solutions for the next generation of digital-first enterprises.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Solutions</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Data Engineering</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">AI Infrastructure</Link></li>
              <li><a href="#architecture" onClick={(e) => handleNavClick(e, "#architecture")} className="text-slate-400 hover:text-white transition-colors">Cloud Migration</a></li>
              <li><Link to="/digital-agency" className="text-slate-400 hover:text-white transition-colors">Market Analysis</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Predictive Intel</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#process" onClick={(e) => handleNavClick(e, "#process")} className="text-slate-400 hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#philosophy" onClick={(e) => handleNavClick(e, "#philosophy")} className="text-slate-400 hover:text-white transition-colors">Philosophy</a></li>
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Connect</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-blue-500" />
                hello@leverage-intel.com
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-500" />
                Silicon Valley, CA
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Leverage Intel. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for performance <span className="text-blue-500">◆</span> Cloudflare Native
          </p>
        </div>
      </div>
    </footer>
  );
}