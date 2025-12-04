import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, Target, Megaphone, Users, BarChart3, Zap } from "lucide-react";

const useCases = [
  {
    id: "call-center",
    title: "Integrated Call Center",
    description: "Centralize all your team's calls. Automatic recording, intelligent IVR and real-time metrics to optimize every conversation.",
    icon: Phone,
    color: "from-[#7E4EF2] to-[#6B8CFF]",
    logos: ["Recording", "IVR", "Analytics"],
  },
  {
    id: "lead-capture",
    title: "Lead Capture",
    description: "Capture leads from any source: web, WhatsApp, calls, social media. Everything unified in your CRM automatically.",
    icon: Target,
    color: "from-[#7CFD98] to-[#4974EA]",
    logos: ["Multi-channel", "Auto-sync", "Scoring"],
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation",
    description: "Automated email, SMS and WhatsApp campaigns. Intelligent segmentation and nurturing that converts.",
    icon: Megaphone,
    color: "from-[#6B8CFF] to-[#7E4EF2]",
    logos: ["Email", "SMS", "WhatsApp"],
  },
  {
    id: "sales-pipeline",
    title: "Sales Pipeline",
    description: "Visualize and manage your sales funnel. Opportunity tracking and accurate revenue forecasting.",
    icon: Users,
    color: "from-[#7CFD98] to-[#6B8CFF]",
    logos: ["Pipeline", "Forecast", "Deals"],
  },
  {
    id: "analytics",
    title: "Analytics & Reports",
    description: "Real-time dashboards with sales, marketing and support KPIs. Make data-driven decisions.",
    icon: BarChart3,
    color: "from-[#FF805D] to-[#7E4EF2]",
    logos: ["Dashboards", "KPIs", "Reports"],
  },
  {
    id: "integrations",
    title: "Integrations",
    description: "Connect with your favorite tools: Google, Meta, WhatsApp Business, Zapier and 100+ integrations.",
    icon: Zap,
    color: "from-[#4974EA] to-[#7CFD98]",
    logos: ["API", "Webhooks", "Zapier"],
  },
];

export function UseCasesSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 xl:py-40">
      <div className="max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="secondary" className="mb-4">Capabilities</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight mb-4">
            Everything to scale your business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed to capture more leads, sell more and grow faster.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
