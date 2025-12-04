import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cpu, Building, ShoppingBag, Store, Coins, Users } from "lucide-react";

const useCases = [
  {
    id: "ai",
    title: "AI",
    description: "Stripe supports businesses across the AI ecosystem—from usage-based billing for AI assistants to premium subscriptions for infrastructure providers.",
    icon: Cpu,
    color: "from-violet-500 to-purple-600",
    logos: ["OpenAI", "Anthropic", "Cursor"],
  },
  {
    id: "saas",
    title: "SaaS",
    description: "Quickly launch and grow recurring revenue with a unified platform for payments, subscriptions, invoicing, tax, accounting, and more.",
    icon: Building,
    color: "from-blue-500 to-cyan-600",
    logos: ["Slack", "Twilio", "Linear"],
  },
  {
    id: "marketplaces",
    title: "Marketplaces",
    description: "Get everything you need to onboard service providers, manage multiparty payments, and send payouts, all in one place.",
    icon: Store,
    color: "from-orange-500 to-amber-600",
    logos: ["Instacart", "Deliveroo", "BloomNation"],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Access an optimized suite of tools to accept payments online and in person from customers around the world.",
    icon: ShoppingBag,
    color: "from-pink-500 to-rose-600",
    logos: ["Glossier", "Dermalogica", "Indochino"],
  },
  {
    id: "embedded-finance",
    title: "Embedded Finance",
    description: "Distribute financial accounts, commercial cards, and lending to create tailored in-product experiences for your customers.",
    icon: Coins,
    color: "from-emerald-500 to-teal-600",
    logos: ["Shopify", "Karat", "Persona"],
  },
  {
    id: "creator-economy",
    title: "Creator Economy",
    description: "Quickly onboard and pay out creators globally with prebuilt UIs, or build your own custom solution.",
    icon: Users,
    color: "from-indigo-500 to-blue-600",
    logos: ["Twitter", "Spotify", "Substack"],
  },
];

export function UseCasesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Use Cases</Badge>
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">
            From global AI companies to category-defining marketplaces
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Successful businesses across industries grow and scale with Stripe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <Card 
              key={useCase.id}
              className="group p-6 hover-elevate cursor-pointer transition-all duration-300"
              data-testid={`card-usecase-${useCase.id}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4`}>
                <useCase.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {useCase.description}
              </p>
              
              <div className="flex items-center gap-2 mb-4">
                {useCase.logos.map((logo) => (
                  <Badge key={logo} variant="secondary" className="text-xs">
                    {logo}
                  </Badge>
                ))}
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
