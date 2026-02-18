import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigationHandler } from "@/hooks/use-navigation-handler";
import { ThemeToggle } from "@/components/ThemeToggle";
const navLinks = [
  { name: "Services", href: "/services", isPage: true },
  { name: "Process", href: "#process", isPage: false },
  { name: "Architecture", href: "#architecture", isPage: false },
  { name: "Digital Agency", href: "/digital-agency", isPage: true },
];
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { handleNavClick } = useNavigationHandler();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const NavItem = ({ link }: { link: typeof navLinks[0] }) => (
    link.isPage ? (
      <Link
        to={link.href}
        className={cn(
          "text-sm font-semibold tracking-tight transition-all hover:opacity-80",
          location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
        )}
      >
        {link.name}
      </Link>
    ) : (
      <a
        href={link.href}
        onClick={(e) => handleNavClick(e, link.href, link.isPage)}
        className="text-sm font-semibold tracking-tight text-muted-foreground hover:text-foreground transition-all hover:opacity-80"
      >
        {link.name}
      </a>
    )
  );
  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b py-3 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Combined Primary Nav & Logo */}
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="bg-primary p-1.5 rounded-lg transition-transform group-hover:scale-110">
              <Database className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-extrabold tracking-tighter">Leverage Intel</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 border-l pl-10 border-border/50 h-6">
            {navLinks.map((link) => (
              <NavItem key={link.name} link={link} />
            ))}
          </nav>
        </div>
        {/* Right: Tools & CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 mr-2">
            <Link
              to="/api-hubs"
              className={cn(
                "text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full transition-all border",
                location.pathname === "/api-hubs"
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-glow"
                  : "text-muted-foreground hover:text-foreground border-transparent hover:bg-accent"
              )}
            >
              API Hubs
            </Link>
            <ThemeToggle className="relative top-0 right-0 h-9 w-9 bg-accent/50" />
          </div>
          <Button 
            size="sm" 
            className="hidden sm:flex font-bold px-6 shadow-primary/20 shadow-lg" 
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Get Leverage
          </Button>
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle className="relative top-0 right-0 h-9 w-9" />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col gap-6 pt-16">
                <Link to="/" className="flex items-center gap-2 mb-4">
                   <Database className="w-6 h-6 text-primary" />
                   <span className="text-xl font-bold">Leverage Intel</span>
                </Link>
                {navLinks.map((link) => (
                  <NavItem key={link.name} link={link} />
                ))}
                <Link
                  to="/api-hubs"
                  className={cn(
                    "text-sm font-bold uppercase tracking-widest py-2 px-4 rounded-lg",
                    location.pathname === "/api-hubs" ? "bg-indigo-600 text-white" : "text-foreground"
                  )}
                >
                  API Hubs
                </Link>
                <Button className="mt-4 font-bold" onClick={(e) => handleNavClick(e, "#contact")}>
                  Get Leverage
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}