import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import cemscaleLogo from "@assets/cemscale_logo_1764870041879.png";
import { 
  Menu, 
  X,
  ArrowRight
} from "lucide-react";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resources" },
  { name: "Contact Us", href: "/#contact" },
];

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string, currentPath: string, closeMobile?: () => void) {
  if (closeMobile) closeMobile();

  if (href.startsWith("/#")) {
    const sectionId = href.substring(2);
    if (currentPath === "/") {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-2" data-testid="link-home">
            <img 
              src={cemscaleLogo} 
              alt="CemScale" 
              className="h-10 sm:h-12 w-auto"
            />
          </a>
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-medium text-[#a59ecb] hover:text-white transition-colors"
                data-testid={`link-${link.name.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => handleNavClick(e, link.href, location)}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="hidden lg:flex items-center">
            <a href="/#contact" onClick={(e) => handleNavClick(e, "/#contact", location)}>
              <Button 
                className="rounded-full px-6 h-10 text-sm bg-[#6b4cff] hover:bg-[#7c5fff] text-white font-medium"
                data-testid="button-start-free-trial"
              >
                Start Free Trial
              </Button>
            </a>
          </div>
          
          <button 
            className="lg:hidden p-2 text-[#a59ecb]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a1a] border-t border-[#1f1f35]">
          <div className="px-6 py-4 space-y-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-sm font-medium text-[#a59ecb] hover:text-white transition-colors"
                  data-testid={`link-mobile-${link.name.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => handleNavClick(e, link.href, location, () => setMobileMenuOpen(false))}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="pt-4 border-t border-[#1f1f35]">
              <a href="/#contact" onClick={(e) => handleNavClick(e, "/#contact", location, () => setMobileMenuOpen(false))}>
                <Button 
                  className="w-full rounded-full bg-[#6b4cff] hover:bg-[#7c5fff] text-white"
                  data-testid="button-mobile-start-trial"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
