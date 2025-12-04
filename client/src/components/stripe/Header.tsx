import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import cemscaleLogo from "@assets/cemscale_logo_1764870041879.png";
import { 
  ChevronDown, 
  Menu, 
  X,
  LayoutDashboard,
  Target,
  Megaphone,
  FileText,
  BarChart3,
  Zap,
  Link2,
  Settings,
  ArrowRight
} from "lucide-react";

const products = [
  { name: "Dashboard", desc: "Centralized data visualization", icon: LayoutDashboard },
  { name: "Leads", desc: "Intelligent lead management", icon: Target },
  { name: "Marketing", desc: "Automated campaign tools", icon: Megaphone },
  { name: "Offline Form", desc: "Physical data capture", icon: FileText },
  { name: "Analytics", desc: "Advanced reporting & insights", icon: BarChart3 },
  { name: "Integrations", desc: "Connect your existing tools", icon: Link2 },
  { name: "Real-time Sync", desc: "Instant data synchronization", icon: Zap },
  { name: "API", desc: "Developer-friendly interface", icon: Settings },
];

const solutions = [
  { name: "Gyms & Fitness", desc: "Member management & engagement" },
  { name: "Education", desc: "Student data & enrollment" },
  { name: "Retail", desc: "Omnichannel customer insights" },
  { name: "Healthcare", desc: "Patient data unification" },
  { name: "Real Estate", desc: "Lead tracking & property data" },
  { name: "Events", desc: "Attendee management & analytics" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2" data-testid="link-home">
              <img 
                src={cemscaleLogo} 
                alt="CemScale" 
                className="h-8 sm:h-9 w-auto"
              />
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
                  Industries
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
