import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Users, 
  Megaphone,
  Target,
  ArrowRight
} from "lucide-react";

const productCategories = [
  { 
    id: "telephony",
    name: "Telephony", 
    icon: Phone,
    description: "Integrated telephony system to manage all your calls. Recording, IVR, and real-time analytics for your sales team.",
    products: [
      { name: "Calls", href: "#" },
      { name: "IVR", href: "#" },
      { name: "Recording", href: "#" },
      { name: "Analytics", href: "#" },
    ]
  },
  { 
    id: "marketing",
    name: "Marketing", 
    icon: Megaphone,
    description: "Automate and scale your marketing campaigns. Email, SMS, WhatsApp and social media in a single unified platform.",
    products: [
      { name: "Campaigns", href: "#" },
      { name: "Email", href: "#" },
      { name: "SMS", href: "#" },
      { name: "WhatsApp", href: "#" },
    ]
  },
  { 
    id: "crm",
    name: "Engagement", 
    icon: Users,
    description: "Manage all your customer relationships. Complete history, interaction tracking and visual sales pipeline.",
    products: [
      { name: "Contacts", href: "#" },
      { name: "Pipeline", href: "#" },
      { name: "Activities", href: "#" },
      { name: "Reports", href: "#" },
    ]
  },
  { 
    id: "leads",
    name: "Leads", 
    icon: Target,
    description: "Capture, qualify and convert leads automatically. Intelligent scoring and automated nurturing to maximize conversions.",
    products: [
      { name: "Capture", href: "#" },
      { name: "Scoring", href: "#" },
      { name: "Nurturing", href: "#" },
      { name: "Conversion", href: "#" },
    ]
  },
];

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("telephony");
  const category = productCategories.find(c => c.id === activeCategory)!;

  return (
    <section className="py-16 sm:py-24 lg:py-32 xl:py-40">
      <div className="max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Products</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight mb-4">
            A complete suite for your business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Telephony, Marketing, Engagement and Leads integrated in a unified platform to scale your company.
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
            {activeCategory === "telephony" && <TelephonyPreview />}
            {activeCategory === "marketing" && <MarketingPreview />}
            {activeCategory === "crm" && <CRMPreview />}
            {activeCategory === "leads" && <LeadsPreview />}
          </div>
        </div>
      </div>
    </section>
  );
}

function TelephonyPreview() {
  const calls = [
    { id: 1, name: "Sarah Johnson", duration: "4:32", status: "completed", type: "inbound" },
    { id: 2, name: "Michael Chen", duration: "2:15", status: "completed", type: "outbound" },
    { id: 3, name: "Emma Wilson", duration: "0:00", status: "missed", type: "inbound" },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-[#6B8CFF]/20 via-[#7E4EF2]/20 to-[#7CFD98]/20 rounded-3xl blur-2xl opacity-50" />
      
      <Card className="relative p-6 stripe-card-shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Today</p>
            <h4 className="text-2xl font-semibold">247 calls</h4>
          </div>
          <Badge className="bg-[#7CFD98]/20 text-[#7CFD98]">+18.4%</Badge>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-muted/50 rounded-lg p-3 text-center">
            <p className="text-xs text-muted-foreground">Inbound</p>
            <p className="text-lg font-semibold text-[#7CFD98]">156</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-3 text-center">
            <p className="text-xs text-muted-foreground">Outbound</p>
            <p className="text-lg font-semibold text-[#6B8CFF]">78</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-3 text-center">
            <p className="text-xs text-muted-foreground">Missed</p>
            <p className="text-lg font-semibold text-[#FF805D]">13</p>
          </div>
        </div>
        
        <div className="space-y-2">
          {calls.map((call) => (
            <div key={call.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  call.status === 'missed' ? 'bg-[#FF805D]/20' : 'bg-[#7CFD98]/20'
                }`}>
                  <Phone className={`h-4 w-4 ${
                    call.status === 'missed' ? 'text-[#FF805D]' : 'text-[#7CFD98]'
                  }`} />
                </div>
                <div>
                  <p className="text-sm font-medium">{call.name}</p>
                  <p className="text-xs text-muted-foreground">{call.type}</p>
                </div>
              </div>
              <span className="text-sm text-muted-foreground">{call.duration}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function MarketingPreview() {
  const campaigns = [
    { name: "Summer Campaign", channel: "Email", sent: 12450, opens: "34%", clicks: "12%" },
    { name: "WhatsApp Promo", channel: "WhatsApp", sent: 8920, opens: "89%", clicks: "45%" },
    { name: "SMS Flash Sale", channel: "SMS", sent: 5600, opens: "92%", clicks: "28%" },
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
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="font-semibold">{campaign.name}</h4>
                <p className="text-sm text-muted-foreground">{campaign.channel}</p>
              </div>
              <Badge variant="secondary">{campaign.sent.toLocaleString()} sent</Badge>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 bg-muted/30 rounded-lg p-2 text-center">
                <p className="text-xs text-muted-foreground">Open Rate</p>
                <p className="text-lg font-semibold text-[#7CFD98]">{campaign.opens}</p>
              </div>
              <div className="flex-1 bg-muted/30 rounded-lg p-2 text-center">
                <p className="text-xs text-muted-foreground">Clicks</p>
                <p className="text-lg font-semibold text-[#6B8CFF]">{campaign.clicks}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function CRMPreview() {
  const contacts = [
    { name: "ABC Company", value: "$45,000", stage: "Negotiation", probability: 75 },
    { name: "Tech Solutions", value: "$28,500", stage: "Proposal", probability: 50 },
    { name: "Global Corp", value: "$120,000", stage: "Closing", probability: 90 },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-[#7E4EF2]/20 via-[#6B8CFF]/20 to-[#4974EA]/20 rounded-3xl blur-2xl opacity-50" />
      
      <Card className="relative p-6 stripe-card-shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-semibold">Sales Pipeline</h4>
          <Badge className="bg-[#7CFD98]/20 text-[#7CFD98]">$193,500</Badge>
        </div>
        
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div key={contact.name} className="p-3 rounded-lg bg-muted/50">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-medium">{contact.name}</p>
                  <p className="text-sm text-muted-foreground">{contact.stage}</p>
                </div>
                <p className="text-lg font-semibold text-[#6B8CFF]">{contact.value}</p>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-[#6B8CFF] to-[#7CFD98] h-2 rounded-full transition-all"
                  style={{ width: `${contact.probability}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">{contact.probability}% probability</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function LeadsPreview() {
  const leads = [
    { id: "L-001", name: "Laura Smith", source: "Web", score: 92, status: "Hot" },
    { id: "L-002", name: "Peter Johnson", source: "WhatsApp", score: 78, status: "Warm" },
    { id: "L-003", name: "Sofia Davis", source: "Call", score: 65, status: "New" },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-[#7CFD98]/20 via-[#6B8CFF]/20 to-[#7E4EF2]/20 rounded-3xl blur-2xl opacity-50" />
      
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
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6B8CFF] to-[#7E4EF2] flex items-center justify-center text-sm font-medium text-white">
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
                    lead.status === 'Hot' ? 'bg-[#FF805D]/20 text-[#FF805D]' :
                    lead.status === 'Warm' ? 'bg-amber-50 dark:bg-amber-950 text-amber-600' :
                    'bg-[#6B8CFF]/20 text-[#6B8CFF]'
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
