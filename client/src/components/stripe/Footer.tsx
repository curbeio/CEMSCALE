import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import cemscaleLogo from "@assets/cemscale_logo_1764870041879.png";
import { 
  Globe, 
  ChevronDown
} from "lucide-react";

const footerLinks = {
  products: {
    title: "Software Solutions",
    links: [
      { label: "Client Acquisition", href: "/#about" },
      { label: "Telephony", href: "/#telephony" },
      { label: "Engagement Automation", href: "/#marketing" },
      { label: "CRM Platform", href: "/#engagement" },
      { label: "Unified Inbox", href: "/#omnichannel" },
    ]
  },
  industries: {
    title: "Industries",
    links: [
      { label: "Insurance", href: "/#about" },
      { label: "Healthcare", href: "/#about" },
      { label: "Medicare", href: "/#about" },
      { label: "Financial Services", href: "/#about" },
      { label: "Legal", href: "/#about" },
      { label: "Tax", href: "/#about" },
    ]
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog", isRoute: true },
      { label: "Resources", href: "/resources", isRoute: true },
      { label: "Contact Us", href: "mailto:master@cemscale.com" },
    ]
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy", isRoute: true },
      { label: "Terms & Conditions", href: "/terms", isRoute: true },
      { label: "SMS Policy", href: "/sms-policy", isRoute: true },
      { label: "Acceptable Use", href: "/acceptable-use", isRoute: true },
      { label: "Refund Policy", href: "/refund-policy", isRoute: true },
    ]
  }
};

function FooterLink({ href, label, isRoute }: { href: string; label: string; isRoute?: boolean }) {
  const [location, setLocation] = useLocation();

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (href.startsWith("mailto:")) return;

    e.preventDefault();

    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);
      if (location === "/") {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        setLocation("/");
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else if (isRoute) {
      setLocation(href);
      window.scrollTo(0, 0);
    }
  }, [href, isRoute, location, setLocation]);

  if (isRoute) {
    return (
      <a
        href={href}
        className="text-sm text-[#8b87a5] hover:text-[#d2d0df] transition-colors"
        data-testid={`link-footer-${label.toLowerCase().replace(/\s+/g, '-')}`}
        onClick={handleClick}
      >
        {label}
      </a>
    );
  }

  return (
    <a 
      href={href} 
      className="text-sm text-[#8b87a5] hover:text-[#d2d0df] transition-colors"
      data-testid={`link-footer-${label.toLowerCase().replace(/\s+/g, '-')}`}
      onClick={handleClick}
    >
      {label}
    </a>
  );
}

export function Footer() {
  const [, setLocation] = useLocation();

  return (
    <footer className="bg-[#030014] border-t border-[#1f1f35]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a
              href="/"
              className="inline-block mb-4"
              onClick={(e) => { e.preventDefault(); setLocation("/"); window.scrollTo(0, 0); }}
            >
              <img 
                src={cemscaleLogo} 
                alt="CemScale" 
                className="h-8 sm:h-9 w-auto"
              />
            </a>
            <p className="text-sm text-[#8b87a5] leading-relaxed mb-3">
              B2B SaaS customer engagement software for professional services teams.
            </p>
            <div className="text-xs text-[#8b87a5] space-y-0.5">
              <p>CEMSCALE LLC</p>
              <p>20801 Biscayne Blvd, Suite 340</p>
              <p>Aventura, FL 33180</p>
              <p className="mt-1">master@cemscale.com</p>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold text-sm text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} label={link.label} isRoute={(link as any).isRoute} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1f1f35]">
          <div className="flex flex-wrap items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2 bg-transparent border-[#1f1f35] text-[#a59ecb] hover:bg-[#1a1a2e] hover:text-white"
              data-testid="button-language"
            >
              <Globe className="h-4 w-4" />
              United States (English)
              <ChevronDown className="h-4 w-4" />
            </Button>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#8b87a5]">
              <Link href="/privacy-policy" className="hover:text-[#d2d0df] transition-colors" data-testid="link-bottom-privacy">Privacy</Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-[#d2d0df] transition-colors" data-testid="link-bottom-terms">Terms</Link>
              <span>|</span>
              <Link href="/sms-policy" className="hover:text-[#d2d0df] transition-colors" data-testid="link-bottom-sms">SMS Policy</Link>
              <span>|</span>
              <Link href="/acceptable-use" className="hover:text-[#d2d0df] transition-colors" data-testid="link-bottom-acceptable-use">Acceptable Use</Link>
              <span>|</span>
              <Link href="/refund-policy" className="hover:text-[#d2d0df] transition-colors" data-testid="link-bottom-refund">Refund Policy</Link>
            </div>
          </div>
          
          <p className="text-sm text-[#8b87a5] text-center md:text-right">
            &copy; {new Date().getFullYear()} CEMSCALE LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
