import { Button } from "@/components/ui/button";
import cemscaleLogo from "@assets/cemscale_logo_1764870041879.png";
import { 
  Globe, 
  ChevronDown
} from "lucide-react";

const footerLinks = {
  products: {
    title: "Solutions",
    links: [
      "Dashboard", "Leads", "Marketing", "Offline Form",
      "Analytics", "Reporting", "Integrations", "API"
    ]
  },
  solutions: {
    title: "Industries",
    links: [
      "Gyms & Fitness", "Education", "Retail", "Healthcare",
      "Real Estate", "Events", "Hospitality", "Services"
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
      "Privacy Policy", "Terms of Service", "Contact"
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="/" className="inline-block mb-4">
              <img 
                src={cemscaleLogo} 
                alt="CemScale" 
                className="h-8 sm:h-9 w-auto"
              />
            </a>
          </div>
          
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold text-sm text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.slice(0, 8).map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-[#8b87a5] hover:text-[#d2d0df] transition-colors"
                      data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
                {section.links.length > 8 && (
                  <li>
                    <a 
                      href="#" 
                      className="text-sm text-[#8b87a5] hover:text-[#d2d0df] transition-colors"
                    >
                      See more...
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1f1f35]">
          <div className="flex items-center gap-4">
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
          </div>
          
          <p className="text-sm text-[#8b87a5] text-center md:text-right">
            © {new Date().getFullYear()} CemScale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
