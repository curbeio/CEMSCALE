import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { 
  ChevronDown, 
  Menu, 
  X,
  CreditCard,
  BarChart3,
  Users,
  Building2,
  Shield,
  Globe,
  Zap,
  FileText,
  Calculator,
  Wallet,
  Landmark,
  ArrowRight
} from "lucide-react";

const products = [
  { name: "Payments", desc: "Accept online & in-person payments", icon: CreditCard },
  { name: "Billing", desc: "Subscription & recurring billing", icon: BarChart3 },
  { name: "Connect", desc: "Payments for platforms", icon: Users },
  { name: "Issuing", desc: "Card creation", icon: Building2 },
  { name: "Radar", desc: "Fraud prevention", icon: Shield },
  { name: "Terminal", desc: "In-person payments", icon: Zap },
  { name: "Treasury", desc: "Banking-as-a-service", icon: Landmark },
  { name: "Tax", desc: "Sales tax & VAT automation", icon: Calculator },
  { name: "Invoicing", desc: "Online invoices", icon: FileText },
  { name: "Atlas", desc: "Startup incorporation", icon: Globe },
];

const solutions = [
  { name: "Enterprise", desc: "For large-scale businesses" },
  { name: "SaaS", desc: "For subscription businesses" },
  { name: "Marketplaces", desc: "For platforms & marketplaces" },
  { name: "E-commerce", desc: "For online stores" },
  { name: "Embedded Finance", desc: "For financial services" },
  { name: "Creator Economy", desc: "For creators & influencers" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2" data-testid="link-home">
              <svg viewBox="0 0 60 25" className="h-6 w-auto fill-primary" aria-label="Stripe">
                <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.02 1.04-.06 1.48zm-3.67-3.08c0-1.65-.88-2.76-2.3-2.76-1.36 0-2.5 1.02-2.73 2.76h5.03zM38.26 5.53v14.14h4.12V5.53h-4.12zm-5.22 0h-4.11v.64c0 .95-.02 2.56-.07 4.02l-.03.77c-.03.66-.05 1.27-.05 1.72 0 1.2.47 2.14 1.37 2.61a2.8 2.8 0 0 0 1.24.27c.9 0 1.7-.27 2.4-.75l.24-.17v4.54c-.66.38-1.57.62-2.72.62-3.72 0-6.58-2.44-6.58-6.9 0-.47.02-1.1.06-1.77l.03-.52c.05-.8.1-1.54.1-2.08 0-.77-.01-1.77-.03-2.36h-2.24V5.53h2.27c.02-1.16.02-2.15.02-2.44V.53h4.09v2.56c0 .29 0 1.28-.02 2.44h4.02v.64h.01zm-15.11 0h-4.37l-2.55 9.37-2.57-9.37h-4.53l4.74 14.14h4.87l4.41-14.14zM5.28 5.53c-.03.66-.18 3.31-.18 5.71 0 .77.01 1.47.04 2.05.06 1.44.19 2.32.5 2.94.52 1.03 1.48 1.7 2.89 1.7.69 0 1.42-.12 2.18-.37v-3.47c-.39.11-.76.16-1.1.16-.73 0-1.2-.35-1.36-1.06a7.43 7.43 0 0 1-.1-1.49c0-.35.02-.76.05-1.21l.02-.27c.03-.49.06-.99.08-1.41h2.41V5.53H8.3c.06-1.36.1-2.15.11-2.44V.53H4.32v2.56c0 .29-.04 1.08-.1 2.44H2.04v3.28h2.06c.09 1.71.17 4.78.17 4.78l.01 3.22c0 2.45 1.88 4.19 4.52 4.19 1.52 0 2.91-.42 3.9-1.01v-3.68c-.66.31-1.26.46-1.87.46-1.58 0-2.43-.96-2.52-2.9-.01-.23-.02-.48-.02-.76 0-.47.02-1.03.05-1.65l.02-.47c.03-.68.08-1.38.11-1.93h2.31V5.53h-2.3c.04-.81.08-1.74.11-2.44V.53H4.22v2.56c0 .3-.06 1.63-.13 2.44h-.81z"/>
              </svg>
            </a>
            
            <div className="hidden lg:flex items-center gap-1">
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  data-testid="button-products-dropdown"
                >
                  Products
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-0 pt-2 w-[480px]">
                    <div className="bg-card rounded-xl border border-border shadow-lg p-4">
                      <div className="grid grid-cols-2 gap-1">
                        {products.map((product) => (
                          <a
                            key={product.name}
                            href="#"
                            className="flex items-start gap-3 p-3 rounded-lg hover-elevate active-elevate-2"
                            data-testid={`link-product-${product.name.toLowerCase()}`}
                          >
                            <div className="p-2 rounded-md bg-primary/10 text-primary">
                              <product.icon className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">{product.name}</div>
                              <div className="text-xs text-muted-foreground">{product.desc}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  data-testid="button-solutions-dropdown"
                >
                  Solutions
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 pt-2 w-[320px]">
                    <div className="bg-card rounded-xl border border-border shadow-lg p-4">
                      <div className="space-y-1">
                        {solutions.map((solution) => (
                          <a
                            key={solution.name}
                            href="#"
                            className="flex items-center justify-between p-3 rounded-lg hover-elevate active-elevate-2"
                            data-testid={`link-solution-${solution.name.toLowerCase().replace(' ', '-')}`}
                          >
                            <div>
                              <div className="font-medium text-sm">{solution.name}</div>
                              <div className="text-xs text-muted-foreground">{solution.desc}</div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <a 
                href="#" 
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                data-testid="link-developers"
              >
                Developers
              </a>
              
              <a 
                href="#" 
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                data-testid="link-resources"
              >
                Resources
              </a>
              
              <a 
                href="#" 
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                data-testid="link-pricing"
              >
                Pricing
              </a>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <a 
              href="#" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              data-testid="link-contact-sales"
            >
              Contact sales
            </a>
            <a 
              href="#" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              data-testid="link-sign-in"
            >
              Sign in
            </a>
            <Button data-testid="button-start-now" className="rounded-full px-5">
              Start now <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-6 py-4 space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Products</p>
              {products.slice(0, 6).map((product) => (
                <a
                  key={product.name}
                  href="#"
                  className="flex items-center gap-3 py-2"
                  data-testid={`link-mobile-product-${product.name.toLowerCase()}`}
                >
                  <product.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{product.name}</span>
                </a>
              ))}
            </div>
            
            <div className="pt-4 border-t border-border space-y-2">
              <a href="#" className="block py-2 text-sm font-medium" data-testid="link-mobile-developers">Developers</a>
              <a href="#" className="block py-2 text-sm font-medium" data-testid="link-mobile-pricing">Pricing</a>
              <a href="#" className="block py-2 text-sm font-medium" data-testid="link-mobile-contact">Contact sales</a>
            </div>
            
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <Button variant="outline" className="w-full" data-testid="button-mobile-sign-in">Sign in</Button>
              <Button className="w-full" data-testid="button-mobile-start">Start now</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
