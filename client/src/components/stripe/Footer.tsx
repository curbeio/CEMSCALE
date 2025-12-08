import { Button } from "@/components/ui/button";
import cemscaleLogo from "@assets/cemscale_logo_1764870041879.png";
import { 
  Globe, 
  ChevronDown,
  Mail,
  Linkedin,
  Twitter
} from "lucide-react";

const footerLinks = {
  products: {
    title: "Solutions",
    links: [
      "Dashboard", "Leads", "Marketing", "Analytics",
      "Reporting", "Integrations", "API"
    ]
  },
  solutions: {
    title: "Industries",
    links: [
      "Gyms & Fitness", "Education", "Retail", "Healthcare",
      "Real Estate", "Events", "Hospitality"
    ]
  },
  developers: {
    title: "Developers",
    links: [
      "Documentation", "API Reference", "Webhooks", "SDK",
      "Changelog", "Status Page"
    ]
  },
  resources: {
    title: "Resources",
    links: [
      "Getting Started", "Case Studies", "Blog", "Help Center",
      "Privacy Policy", "Terms of Service"
    ]
  },
  company: {
    title: "Company",
    links: [
      "About Us", "Our Team", "Careers", "Partners",
      "News", "Contact Us"
    ]
  }
};

export function Footer() {
  return (
    <footer className="bg-[#030014] border-t border-[#1f1f35]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Logo Column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
            <a href="/" className="inline-block mb-4" data-testid="link-footer-home">
              <img 
                src={cemscaleLogo} 
                alt="CemScale" 
                className="h-8 sm:h-9 w-auto"
              />
            </a>
            <p className="text-xs sm:text-sm text-[#8b87a5] mb-4 max-w-xs">
              The AI-first Customer Engagement Management platform.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-[#1a1a2e] flex items-center justify-center text-[#a59ecb] hover:text-white hover:bg-[#2a2a45] transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-[#1a1a2e] flex items-center justify-center text-[#a59ecb] hover:text-white hover:bg-[#2a2a45] transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-[#1a1a2e] flex items-center justify-center text-[#a59ecb] hover:text-white hover:bg-[#2a2a45] transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold text-xs sm:text-sm text-white mb-3 sm:mb-4">{section.title}</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {section.links.slice(0, 7).map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-xs sm:text-sm text-[#8b87a5] hover:text-[#d2d0df] transition-colors"
                      data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 sm:pt-8 border-t border-[#1f1f35]">
          <div className="flex items-center gap-3 sm:gap-4 order-2 sm:order-1">
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2 bg-transparent border-[#1f1f35] text-[#a59ecb] hover:bg-[#1a1a2e] hover:text-white text-xs h-8"
              data-testid="button-language"
            >
              <Globe className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">United States</span>
              <span className="sm:hidden">EN</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </Button>
          </div>
          
          <p className="text-xs sm:text-sm text-[#8b87a5] text-center order-1 sm:order-2">
            © {new Date().getFullYear()} CemScale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
