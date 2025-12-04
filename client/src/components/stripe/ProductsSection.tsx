import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Users, 
  Globe,
  FileText,
  ArrowRight
} from "lucide-react";

const productCategories = [
  { 
    id: "dashboard",
    name: "Dashboard", 
    icon: BarChart3,
    description: "See all your key metrics in one unified view. Real-time insights from every data source, beautifully visualized.",
    products: [
      { name: "Analytics", href: "#" },
      { name: "Reports", href: "#" },
      { name: "Metrics", href: "#" },
      { name: "Alerts", href: "#" },
    ]
  },
  { 
    id: "leads",
    name: "Leads", 
    icon: Users,
    description: "Track, score, and nurture leads from any source. Unify your lead data for complete visibility into your pipeline.",
    products: [
      { name: "Lead Capture", href: "#" },
      { name: "Scoring", href: "#" },
      { name: "Pipeline", href: "#" },
      { name: "Tracking", href: "#" },
    ]
  },
  { 
    id: "marketing",
    name: "Marketing", 
    icon: Globe,
    description: "Consolidate campaign data from all channels. Measure ROI accurately and optimize spend across platforms.",
    products: [
      { name: "Campaigns", href: "#" },
      { name: "Attribution", href: "#" },
      { name: "Automation", href: "#" },
      { name: "Insights", href: "#" },
    ]
  },
  { 
    id: "forms",
    name: "Forms", 
    icon: FileText,
    description: "Capture data from anywhere, even offline. All form submissions flow into your unified data ecosystem.",
    products: [
      { name: "Form Builder", href: "#" },
      { name: "Offline Sync", href: "#" },
      { name: "Submissions", href: "#" },
      { name: "Integrations", href: "#" },
    ]
  },
];

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("dashboard");
  const category = productCategories.find(c => c.id === activeCategory)!;

  return (
    <section className="py-16 sm:py-24 lg:py-32 xl:py-40">
      <div className="max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Products</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight mb-4">
            A fully integrated suite of data unification products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reduce complexity, grow faster, and run your business more efficiently on a unified platform.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {productCategories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              className="rounded-full gap-2"
              onClick={() => setActiveCategory(cat.id)}
              data-testid={`button-category-${cat.id}`}
            >
              <cat.icon className="h-4 w-4" />
              {cat.name}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <category.icon className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">{category.name}</h3>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-product-description">
              {category.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {category.products.map((product) => (
                <a
                  key={product.name}
                  href={product.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                  data-testid={`link-product-${product.name.toLowerCase()}`}
                >
                  {product.name}
                  <ArrowRight className="h-3 w-3" />
                </a>
              ))}
            </div>

            <Button className="rounded-full gap-2" data-testid="button-learn-more">
              Learn more <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            {activeCategory === "dashboard" && <DashboardProductPreview />}
            {activeCategory === "leads" && <LeadsPreview />}
            {activeCategory === "marketing" && <MarketingPreview />}
            {activeCategory === "forms" && <FormsPreview />}
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardProductPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-[#6B8CFF]/20 via-[#7E4EF2]/20 to-[#7CFD98]/20 rounded-3xl blur-2xl opacity-50" />
      
      <Card className="relative p-6 stripe-card-shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-muted-foreground">This Month</p>
            <h4 className="text-2xl font-semibold">$847,234</h4>
          </div>
          <Badge className="bg-[#7CFD98]/20 text-[#7CFD98]">+28.4%</Badge>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-muted/50 rounded-lg p-3">
            <p className="text-xs text-muted-foreground">Active Users</p>
            <p className="text-lg font-semibold">12,847</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <p className="text-xs text-muted-foreground">Data Sources</p>
            <p className="text-lg font-semibold">24</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <p className="text-xs text-muted-foreground">Leads</p>
            <p className="text-lg font-semibold">3,421</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <p className="text-xs text-muted-foreground">Conversion</p>
            <p className="text-lg font-semibold">4.2%</p>
          </div>
        </div>
        
        <div className="h-24 flex items-end gap-1">
          {Array.from({ length: 20 }).map((_, i) => {
            const height = Math.random() * 60 + 20;
            return (
              <div 
                key={i}
                className="flex-1 rounded-t bg-[#6B8CFF]"
                style={{ height: `${height}%`, opacity: 0.3 + (i / 30) }}
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
}

function LeadsPreview() {
  const leads = [
    { id: "L-001", name: "Sarah Johnson", source: "Website", score: 92, status: "Hot" },
    { id: "L-002", name: "Michael Chen", source: "Campaign", score: 78, status: "Warm" },
    { id: "L-003", name: "Emma Wilson", source: "Form", score: 65, status: "New" },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-[#7E4EF2]/20 via-[#6B8CFF]/20 to-[#4974EA]/20 rounded-3xl blur-2xl opacity-50" />
      
      <Card className="relative p-4 stripe-card-shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold">Recent Leads</h4>
          <Badge variant="secondary">Today</Badge>
        </div>
        
        <div className="space-y-3">
          {leads.map((lead) => (
            <div 
              key={lead.id}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7E4EF2]/10 flex items-center justify-center text-xs font-medium text-[#7E4EF2]">
                  {lead.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium">{lead.name}</p>
                  <p className="text-xs text-muted-foreground">{lead.source}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Score: {lead.score}</p>
                <Badge 
                  variant="secondary" 
                  className={`text-xs ${
                    lead.status === 'Hot' ? 'bg-red-50 dark:bg-red-950 text-red-600' :
                    lead.status === 'Warm' ? 'bg-amber-50 dark:bg-amber-950 text-amber-600' :
                    'bg-blue-50 dark:bg-blue-950 text-blue-600'
                  }`}
                >
                  {lead.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function MarketingPreview() {
  const campaigns = [
    { name: "Summer Campaign", channel: "Email", leads: 245, roi: "+156%" },
    { name: "Social Ads Q4", channel: "Facebook", leads: 189, roi: "+92%" },
    { name: "Search Campaign", channel: "Google", leads: 312, roi: "+234%" },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-[#FF805D]/20 via-[#7E4EF2]/20 to-[#6B8CFF]/20 rounded-3xl blur-2xl opacity-50" />
      
      <div className="relative grid gap-4">
        {campaigns.map((campaign) => (
          <Card 
            key={campaign.name}
            className="p-4 stripe-card-shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{campaign.name}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{campaign.channel}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-[#7CFD98]">{campaign.roi}</p>
                <p className="text-xs text-muted-foreground">{campaign.leads} leads</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function FormsPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-[#7CFD98]/20 via-[#6B8CFF]/20 to-[#7E4EF2]/20 rounded-3xl blur-2xl opacity-50" />
      
      <div className="relative space-y-4">
        <Card className="p-6 stripe-card-shadow-sm">
          <h4 className="font-semibold mb-4">Contact Form</h4>
          
          <div className="space-y-3">
            <div>
              <label className="text-xs text-muted-foreground">Full Name</label>
              <div className="h-9 rounded-md border border-border bg-muted/30 mt-1 flex items-center px-3 text-sm">
                John Smith
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email</label>
              <div className="h-9 rounded-md border border-border bg-muted/30 mt-1 flex items-center px-3 text-sm">
                john@company.com
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Message</label>
              <div className="h-16 rounded-md border border-border bg-muted/30 mt-1 flex items-start p-3 text-sm text-muted-foreground">
                I'd like to learn more about...
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mt-4">
            <Badge className="bg-[#7CFD98]/20 text-[#7CFD98]">Synced</Badge>
            <span className="text-xs text-muted-foreground">Works offline</span>
          </div>
        </Card>
      </div>
    </div>
  );
}
