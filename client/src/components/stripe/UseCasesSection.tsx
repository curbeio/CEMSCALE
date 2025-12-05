import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, Target, Megaphone, Users, BarChart3, Zap } from "lucide-react";

const useCases = [
  {
    id: "call-center",
    title: "Integrated Call Center",
    description: "Centralize all your team's calls. Automatic recording, intelligent IVR and real-time metrics to optimize every conversation.",
    icon: Phone,
    color: "from-[#a78bfa] to-[#6b4cff]",
    logos: ["Recording", "IVR", "Analytics"],
  },
  {
    id: "lead-capture",
    title: "Lead Capture",
    description: "Capture leads from any source: web, WhatsApp, calls, social media. Everything unified in your CRM automatically.",
    icon: Target,
    color: "from-[#7cffd4] to-[#6b4cff]",
    logos: ["Multi-channel", "Auto-sync", "Scoring"],
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation",
    description: "Automated email, SMS and WhatsApp campaigns. Intelligent segmentation and nurturing that converts.",
    icon: Megaphone,
    color: "from-[#6b4cff] to-[#a78bfa]",
    logos: ["Email", "SMS", "WhatsApp"],
  },
  {
    id: "sales-pipeline",
    title: "Sales Pipeline",
    description: "Visualize and manage your sales funnel. Opportunity tracking and accurate revenue forecasting.",
    icon: Users,
    color: "from-[#7cffd4] to-[#6b4cff]",
    logos: ["Pipeline", "Forecast", "Deals"],
  },
  {
    id: "analytics",
    title: "Analytics & Reports",
    description: "Real-time dashboards with sales, marketing and support KPIs. Make data-driven decisions.",
    icon: BarChart3,
    color: "from-[#ff805d] to-[#a78bfa]",
    logos: ["Dashboards", "KPIs", "Reports"],
  },
  {
    id: "integrations",
    title: "Integrations",
    description: "Connect with your favorite tools: Google, Meta, WhatsApp Business, Zapier and 100+ integrations.",
    icon: Zap,
    color: "from-[#6b4cff] to-[#7cffd4]",
    logos: ["API", "Webhooks", "Zapier"],
  },
];

export function UseCasesSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#0a0a1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="mb-4 bg-[#6b4cff]/20 text-[#a78bfa] border-[#6b4cff]/30">Capabilities</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight mb-4 text-white">
            Everything to scale your business
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-2xl mx-auto">
            Powerful tools designed to capture more leads, sell more and grow faster.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {useCases.map((useCase) => (
            <div 
              key={useCase.id}
              className="group p-6 rounded-2xl bg-[#0a0a1a]/80 border border-[#1f1f35] hover:border-[#6b4cff]/50 transition-all duration-300"
              data-testid={`card-usecase-${useCase.id}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4`}>
                <useCase.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-white">{useCase.title}</h3>
              <p className="text-sm text-[#a59ecb] mb-4 line-clamp-3">
                {useCase.description}
              </p>
              
              <div className="flex items-center gap-2 mb-4">
                {useCase.logos.map((logo) => (
                  <Badge key={logo} className="text-xs bg-[#1a1a2e] text-[#a59ecb] border-[#2a2a45]">
                    {logo}
                  </Badge>
                ))}
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-1 text-sm font-medium text-[#6b4cff] group-hover:text-[#a78bfa] group-hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
