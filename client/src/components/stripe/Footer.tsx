import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import cemscaleLogo from "@assets/cemscale_logo_1764870041879.png";
import { 
  Globe, 
  ChevronDown
} from "lucide-react";

const footerLinks = {
  products: {
    title: "Solutions",
    links: [
      { label: "Lead Generation", href: "#leads" },
      { label: "Telephony", href: "#telephony" },
      { label: "Marketing Automation", href: "#marketing" },
      { label: "Engagement CRM", href: "#engagement" },
      { label: "Omnichannel Inbox", href: "#omnichannel" },
    ]
  },
  industries: {
    title: "Industries",
    links: [
      { label: "Insurance", href: "#about" },
      { label: "Healthcare", href: "#about" },
      { label: "Medicare", href: "#about" },
      { label: "Financial Services", href: "#about" },
      { label: "Legal", href: "#about" },
      { label: "Tax", href: "#about" },
    ]
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Getting Started", href: "#" },
      { label: "API Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "mailto:master@cemscale.com" },
    ]
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy", isRoute: true },
      { label: "Terms & Conditions", href: "/terms", isRoute: true },
      { label: "SMS Policy", href: "/sms-policy", isRoute: true },
    ]
  }
};

export function Footer() {
  return (
    <footer className="bg-[#030014] border-t border-[#1f1f35]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="/" className="inline-block mb-4">
              <img 
                src={cemscaleLogo} 
                alt="CemScale" 
                className="h-8 sm:h-9 w-auto"
              />
            </a>
            <p className="text-sm text-[#8b87a5] leading-relaxed">
              Intelligent Customer Engagement Management for regulated industries.
            </p>
          </div>
          
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold text-sm text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {(link as any).isRoute ? (
                      <Link
                        href={link.href}
                        className="text-sm text-[#8b87a5] hover:text-[#d2d0df] transition-colors"
                        data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-sm text-[#8b87a5] hover:text-[#d2d0df] transition-colors"
                        data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.label}
                      </a>
                    )}
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
