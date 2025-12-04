import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, LayoutDashboard, Target, Megaphone, FileText, BarChart3, Zap } from "lucide-react";

const useCases = [
  {
    id: "centralized-dashboard",
    title: "Centralized Analytics",
    description: "Bring all your data sources into one powerful dashboard. Visualize trends, monitor KPIs, and make informed decisions with real-time insights.",
    icon: LayoutDashboard,
    color: "from-[#7E4EF2] to-[#6B8CFF]",
    logos: ["Real-time", "Multi-source", "Custom Views"],
  },
  {
    id: "lead-management",
    title: "Lead Intelligence",
    description: "Transform raw leads into qualified opportunities. Track every touchpoint, score leads automatically, and prioritize high-value prospects.",
    icon: Target,
    color: "from-[#7CFD98] to-[#4974EA]",
    logos: ["AI Scoring", "Auto-qualify", "Pipeline"],
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation",
    description: "Scale your marketing efforts intelligently. Automate campaigns across channels while maintaining personalized customer experiences.",
    icon: Megaphone,
    color: "from-[#6B8CFF] to-[#7E4EF2]",
    logos: ["Multi-channel", "A/B Testing", "ROI Track"],
  },
  {
    id: "offline-integration",
    title: "Offline Data Capture",
    description: "Bridge the gap between physical and digital. Capture offline interactions, events, and forms seamlessly into your unified data ecosystem.",
    icon: FileText,
    color: "from-[#7CFD98] to-[#6B8CFF]",
    logos: ["Forms", "Events", "Sync"],
  },
  {
    id: "advanced-reporting",
    title: "Advanced Reporting",
    description: "Generate comprehensive reports that tell your business story. Custom metrics, automated scheduling, and stakeholder-ready presentations.",
    icon: BarChart3,
    color: "from-[#FF805D] to-[#7E4EF2]",
    logos: ["Custom", "Scheduled", "Export"],
  },
  {
    id: "real-time-sync",
    title: "Real-time Sync",
    description: "Keep all your systems in perfect harmony. Bidirectional sync ensures your data is always current across every platform.",
    icon: Zap,
    color: "from-[#4974EA] to-[#7CFD98]",
    logos: ["Instant", "Bi-directional", "API"],
  },
];

export function UseCasesSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 xl:py-40">
      <div className="max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="secondary" className="mb-4">Capabilities</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight mb-4">
            Everything you need to scale intelligently
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to transform how you collect, analyze, and act on your business data.
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
