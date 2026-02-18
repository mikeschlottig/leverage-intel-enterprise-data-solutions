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
  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg">
            <Database className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">Leverage Intel</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            link.isPage ? (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  location.pathname === link.href ? "text-blue-600 dark:text-blue-400" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isPage)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
          <div className="h-6 w-px bg-border mx-2" />
          <ThemeToggle className="relative top-0 right-0 h-9 w-9" />
          <Button size="sm" className="ml-2" onClick={(e) => handleNavClick(e, "#contact")}>
            Get Leverage
          </Button>
        </nav>
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
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "text-lg font-medium transition-colors",
                      location.pathname === link.href ? "text-blue-600 dark:text-blue-400" : "text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.isPage)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <Button className="mt-4" onClick={(e) => handleNavClick(e, "#contact")}>
                Get Leverage
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}