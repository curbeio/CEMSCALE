import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Brain, 
  Target, 
  Database,
  Mail,
  Phone,
  MessageSquare,
  Zap
} from "lucide-react";

const dataFeatures = [
  {
    icon: Database,
    title: "50M+ B2B Leads",
    description: "Access a premium database of AI-verified and enriched leads.",
    color: "#6b4cff",
  },
  {
    icon: Mail,
    title: "95% Email Accuracy",
    description: "AI-validated emails for maximum deliverability.",
    color: "#a78bfa",
  },
  {
    icon: Phone,
    title: "Direct Dials",
    description: "Verified phone numbers directly to decision makers.",
    color: "#7cffd4",
  },
  {
    icon: Target,
    title: "AI Scoring",
    description: "Predictive scoring to identify high-value opportunities.",
    color: "#ff805d",
  },
];

const dataStats = [
  { label: "Companies", value: "5M+", icon: Users },
  { label: "Data Points", value: "200M+", icon: Database },
  { label: "AI Accuracy", value: "99.2%", icon: Brain },
  { label: "Daily Updates", value: "10K+", icon: Zap },
];

export function DataSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-[#030014]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#6b4cff]/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <Badge 
            className="mb-4 bg-[#7cffd4]/20 text-[#7cffd4] border-[#7cffd4]/30"
          >
            <Brain className="w-3 h-3 mr-1" />
            AI-Powered Data
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
            AI-enriched leads
            <span className="block sm:inline bg-gradient-to-r from-[#6b4cff] to-[#7cffd4] bg-clip-text text-transparent"> ready to convert</span>
          </h2>
          <p className="text-base sm:text-lg text-[#a59ecb] max-w-2xl mx-auto">
            Our artificial intelligence analyzes millions of data points to find and qualify the best prospects for your business.
          </p>
        </div>

        {/* Features Grid + Data Card */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start mb-12 lg:mb-16">
          {/* Features - Single column on mobile, 2 columns on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {dataFeatures.map((feature) => (
              <div 
                key={feature.title}
                className="p-4 sm:p-5 rounded-xl bg-[#0a0a1a]/80 border border-[#1f1f35] backdrop-blur-sm hover:border-[#6b4cff]/50 transition-all duration-300"
                data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div 
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon className="h-5 w-5 sm:h-5.5 sm:w-5.5" style={{ color: feature.color }} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-[#a59ecb] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Live Data Card */}
          <div className="bg-gradient-to-br from-[#0a0a1a] to-[#1a1a2e] rounded-xl p-5 sm:p-6 lg:p-8 border border-[#1f1f35]">
            <div className="flex items-center gap-2 mb-5 sm:mb-6">
              <div className="w-2 h-2 rounded-full bg-[#7cffd4] animate-pulse" />
              <span className="text-[#7cffd4] text-xs sm:text-sm font-medium">Live Data Insights</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {dataStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#a78bfa]" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-[#8b87a5]">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-[#1f1f35]">
              <div className="flex items-center gap-2 text-[#a59ecb]">
                <MessageSquare className="h-4 w-4" />
                <span className="text-xs sm:text-sm">AI processes 1M+ interactions daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
