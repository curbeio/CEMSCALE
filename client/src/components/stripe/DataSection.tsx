import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  Shield, 
  Target, 
  Globe2, 
  Users,
  Building2,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const dataFeatures = [
  {
    icon: Database,
    title: "+50 Million Contacts",
    description: "B2B database updated daily with verified decision-makers.",
  },
  {
    icon: Shield,
    title: "Real-Time Verification",
    description: "Emails, phones and data validated before each delivery. 95%+ accuracy guaranteed.",
  },
  {
    icon: Target,
    title: "Advanced Segmentation",
    description: "Filter by industry, job title, company size, location, technologies and 50+ criteria.",
  },
  {
    icon: Globe2,
    title: "Global Coverage",
    description: "Leads from LATAM, USA, Europe and Asia. Expand your market without geographic limits.",
  },
];

const dataPoints = [
  { icon: Building2, label: "Companies", value: "12M+" },
  { icon: Users, label: "Decision Makers", value: "50M+" },
  { icon: Mail, label: "Verified Emails", value: "98%" },
  { icon: Phone, label: "Direct Phones", value: "45M+" },
];

const industries = [
  "Technology", "Finance", "Healthcare", "Manufacturing", "Retail", 
  "Education", "Real Estate", "Consulting", "Marketing", "Legal"
];

export function DataSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-[#030014]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#6b4cff]/5 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 lg:mb-16">
          <Badge 
            className="mb-4 bg-[#7cffd4]/20 text-[#7cffd4] border-[#7cffd4]/30"
          >
            Premium Data
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
            The most powerful leads
            <span className="block bg-gradient-to-r from-[#6b4cff] to-[#a78bfa] bg-clip-text text-transparent"> database on the market</span>
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-3xl mx-auto">
            Access millions of verified and updated B2B contacts. 
            Find your ideal customers with surgical precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div>
            <div className="grid sm:grid-cols-2 gap-4">
              {dataFeatures.map((feature) => (
                <div 
                  key={feature.title}
                  className="p-5 rounded-2xl bg-[#0a0a1a]/80 border border-[#1f1f35] backdrop-blur-sm hover:border-[#6b4cff]/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6b4cff] to-[#a78bfa] flex items-center justify-center mb-3">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-sm text-[#a59ecb]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#6b4cff]/20 via-[#a78bfa]/20 to-[#7cffd4]/20 rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative p-6 lg:p-8 rounded-2xl bg-[#0a0a1a]/80 border border-[#1f1f35]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Our Data in Numbers</h3>
                <Badge className="bg-[#7cffd4]/20 text-[#7cffd4]">Live</Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {dataPoints.map((point) => (
                  <div key={point.label} className="bg-[#1a1a2e] rounded-xl p-4 text-center">
                    <point.icon className="h-6 w-6 mx-auto mb-2 text-[#6b4cff]" />
                    <p className="text-2xl font-bold text-white">{point.value}</p>
                    <p className="text-xs text-[#a59ecb]">{point.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#1f1f35] pt-6">
                <p className="text-sm text-[#a59ecb] mb-3">Available industries:</p>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <Badge key={industry} className="text-xs bg-[#1a1a2e] text-[#a59ecb] border-[#2a2a45]">
                      {industry}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-10 rounded-2xl bg-gradient-to-r from-[#6b4cff]/10 via-[#a78bfa]/10 to-[#7cffd4]/10 border border-[#6b4cff]/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                Why is our data different?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#7cffd4] mt-0.5 flex-shrink-0" />
                  <p className="text-[#a59ecb]">
                    <strong className="text-white">Constant updates:</strong> Our database is updated daily with new contacts and verifications.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#7cffd4] mt-0.5 flex-shrink-0" />
                  <p className="text-[#a59ecb]">
                    <strong className="text-white">Enriched data:</strong> Job title, company, industry, technologies, social networks and more on each contact.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#7cffd4] mt-0.5 flex-shrink-0" />
                  <p className="text-[#a59ecb]">
                    <strong className="text-white">Intent data:</strong> We identify leads who are actively looking for solutions like yours.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#7cffd4] mt-0.5 flex-shrink-0" />
                  <p className="text-[#a59ecb]">
                    <strong className="text-white">GDPR Compliant:</strong> All our data complies with international privacy regulations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-4xl lg:text-5xl font-bold text-[#7cffd4] mb-2">95%+</p>
              <p className="text-lg text-[#a59ecb] mb-6">Data accuracy guaranteed</p>
              <Button 
                size="lg" 
                className="rounded-full gap-2 bg-[#6b4cff] hover:bg-[#7c5fff] text-white"
              >
                Request Access <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
