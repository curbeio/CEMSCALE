import { Button } from "@/components/ui/button";
import { 
  Globe, 
  ChevronDown
} from "lucide-react";

const footerLinks = {
  products: {
    title: "Products",
    links: [
      "Atlas", "Billing", "Capital", "Checkout", "Climate", "Connect",
      "Elements", "Identity", "Invoicing", "Issuing", "Payments",
      "Radar", "Sigma", "Tax", "Terminal", "Treasury"
    ]
  },
  solutions: {
    title: "Solutions",
    links: [
      "Enterprises", "SaaS", "Marketplaces", "Platforms", "E-commerce",
      "Embedded Finance", "Crypto", "Creator Economy", "Global Businesses"
    ]
  },
  developers: {
    title: "Developers",
    links: [
      "Documentation", "API Reference", "API Status", "API Changelog",
      "Stripe Apps", "Open Source"
    ]
  },
  resources: {
    title: "Resources",
    links: [
      "Guides", "Customer Stories", "Blog", "Annual Conference",
      "Privacy & Terms", "Licenses", "Contact"
    ]
  },
  company: {
    title: "Company",
    links: [
      "About", "Customers", "Enterprise", "Partners", "Jobs",
      "Newsroom", "Stripe Press"
    ]
  }
};

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="/" className="inline-block mb-4">
              <svg viewBox="0 0 60 25" className="h-6 w-auto fill-foreground" aria-label="Stripe">
                <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.02 1.04-.06 1.48zm-3.67-3.08c0-1.65-.88-2.76-2.3-2.76-1.36 0-2.5 1.02-2.73 2.76h5.03zM38.26 5.53v14.14h4.12V5.53h-4.12zm-5.22 0h-4.11v.64c0 .95-.02 2.56-.07 4.02l-.03.77c-.03.66-.05 1.27-.05 1.72 0 1.2.47 2.14 1.37 2.61a2.8 2.8 0 0 0 1.24.27c.9 0 1.7-.27 2.4-.75l.24-.17v4.54c-.66.38-1.57.62-2.72.62-3.72 0-6.58-2.44-6.58-6.9 0-.47.02-1.1.06-1.77l.03-.52c.05-.8.1-1.54.1-2.08 0-.77-.01-1.77-.03-2.36h-2.24V5.53h2.27c.02-1.16.02-2.15.02-2.44V.53h4.09v2.56c0 .29 0 1.28-.02 2.44h4.02v.64h.01zm-15.11 0h-4.37l-2.55 9.37-2.57-9.37h-4.53l4.74 14.14h4.87l4.41-14.14zM5.28 5.53c-.03.66-.18 3.31-.18 5.71 0 .77.01 1.47.04 2.05.06 1.44.19 2.32.5 2.94.52 1.03 1.48 1.7 2.89 1.7.69 0 1.42-.12 2.18-.37v-3.47c-.39.11-.76.16-1.1.16-.73 0-1.2-.35-1.36-1.06a7.43 7.43 0 0 1-.1-1.49c0-.35.02-.76.05-1.21l.02-.27c.03-.49.06-.99.08-1.41h2.41V5.53H8.3c.06-1.36.1-2.15.11-2.44V.53H4.32v2.56c0 .29-.04 1.08-.1 2.44H2.04v3.28h2.06c.09 1.71.17 4.78.17 4.78l.01 3.22c0 2.45 1.88 4.19 4.52 4.19 1.52 0 2.91-.42 3.9-1.01v-3.68c-.66.31-1.26.46-1.87.46-1.58 0-2.43-.96-2.52-2.9-.01-.23-.02-.48-.02-.76 0-.47.02-1.03.05-1.65l.02-.47c.03-.68.08-1.38.11-1.93h2.31V5.53h-2.3c.04-.81.08-1.74.11-2.44V.53H4.22v2.56c0 .3-.06 1.63-.13 2.44h-.81z"/>
              </svg>
            </a>
          </div>
          
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold text-sm mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.slice(0, 8).map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      See more...
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2" data-testid="button-language">
              <Globe className="h-4 w-4" />
              United States (English)
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Stripe, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
