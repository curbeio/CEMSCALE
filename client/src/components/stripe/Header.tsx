import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import cemscaleLogo from "@assets/cemscale_logo_1764870041879.png";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Platform", href: "#platform" },
  { name: "Solutions", href: "#solutions" },
  { name: "Pricing", href: "#pricing" },
  { name: "Resources", href: "#resources" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#030014]/90 backdrop-blur-xl border-b border-[#1f1f35]/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0" data-testid="link-home">
            <img 
              src={cemscaleLogo} 
              alt="CemScale" 
              className="h-8 sm:h-10 lg:h-11 w-auto"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="px-4 py-2 text-sm font-medium text-[#a59ecb] hover:text-white transition-colors rounded-lg hover:bg-white/5"
                data-testid={`link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="ghost"
              className="text-sm text-[#a59ecb] hover:text-white hover:bg-white/5"
              data-testid="button-login"
            >
              Log in
            </Button>
            <Button 
              className="rounded-full px-6 h-10 text-sm bg-[#6b4cff] hover:bg-[#7c5fff] text-white font-medium shadow-lg shadow-[#6b4cff]/20"
              data-testid="button-start-free-trial"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2.5 text-[#a59ecb] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      
      {/* Mobile menu backdrop - click to close */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-16 bg-black/50 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
      
      {/* Mobile menu panel */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-[#030014] transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col overflow-y-auto overscroll-contain">
          {/* Navigation links */}
          <div className="flex-1 px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-4 text-lg font-medium text-white border-b border-[#1f1f35]/50 active:bg-white/5"
                data-testid={`link-mobile-${link.name.toLowerCase()}`}
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile CTAs - fixed at bottom with safe area */}
          <div className="px-5 pb-8 pt-4 space-y-3 border-t border-[#1f1f35]" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
            <Button 
              variant="outline"
              className="w-full h-12 rounded-full border-[#1f1f35] text-white hover:bg-white/5"
              data-testid="button-mobile-login"
              onClick={closeMenu}
            >
              Log in
            </Button>
            <Button 
              className="w-full h-12 rounded-full bg-[#6b4cff] hover:bg-[#7c5fff] text-white font-medium"
              data-testid="button-mobile-start-trial"
              onClick={closeMenu}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm text-[#8b87a5] text-center pt-2">
              Trusted by 10,000+ companies
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
