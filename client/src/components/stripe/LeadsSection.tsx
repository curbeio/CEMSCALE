import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  BarChart3,
  Database,
  FileCheck,
  Workflow,
  RefreshCw,
  Users,
  Globe,
  Brain,
  Lock,
  Filter,
  Building2
} from "lucide-react";
import { motion } from "framer-motion";

const leadFeatures = [
  {
    icon: Target,
    title: "High-Intent Lead Sourcing",
    description: "Leads are generated through CEMSCALE's internal demand engine and routed instantly into the platform. No third-party dependencies.",
  },
  {
    icon: Zap,
    title: "Real-Time Delivery",
    description: "Leads flow directly to your agents and workflows without external systems. Instant availability for immediate engagement.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-First Framework",
    description: "Every lead is verified, opt-in certified, and DNC-scrubbed to meet regulatory requirements. Full TCPA compliance built-in.",
  },
  {
    icon: BarChart3,
    title: "Attribution & Tracking",
    description: "Each lead is tagged, scored, and tracked for conversion analytics and ROI insights. Complete visibility into your pipeline.",
  },
];

const complianceFeatures = [
  { label: "Opt-in Verified", icon: FileCheck },
  { label: "DNC Scrubbed", icon: ShieldCheck },
  { label: "TCPA Compliant", icon: CheckCircle2 },
  { label: "Real-Time Validation", icon: Clock },
];

const workflowSteps = [
  { step: 1, title: "Lead Generated", description: "High-intent consumer identified" },
  { step: 2, title: "Verified & Scored", description: "Compliance check + AI scoring" },
  { step: 3, title: "Routed to CRM", description: "Instant delivery to your agents" },
  { step: 4, title: "Engagement Ready", description: "Automated workflows triggered" },
];

const outcomes = [
  "Consistent stream of compliant, conversion-ready opportunities",
  "Direct integration with call-center and automation workflows",
  "Full attribution from first touch to closed deal",
  "Real-time analytics for continuous optimization",
  "Zero external dependencies or data silos",
  "Scalable lead volume based on your capacity",
];

const dataHighlights = [
  { icon: Building2, label: "Companies", value: "12M+" },
  { icon: Users, label: "Decision Makers / Consumers", value: "50M+" },
  { icon: CheckCircle2, label: "Verified Emails", value: "98% accuracy" },
  { icon: Zap, label: "Direct Phone Numbers", value: "45M+" },
];

const dataFeatures = [
  {
    icon: RefreshCw,
    title: "Constant Updates",
    description: "Our proprietary database is refreshed continuously with verified contacts, enriched profiles, and real-time corrections.",
  },
  {
    icon: Database,
    title: "Enriched Profiles",
    description: "Deep data points: job role, industry, company attributes, demographic & behavioral signals, technology indicators.",
  },
  {
    icon: Brain,
    title: "Intent Intelligence",
    description: "Identifies consumers and decision-makers actively seeking solutions in your market—improving targeting and conversion.",
  },
  {
    icon: Lock,
    title: "Privacy & Compliance",
    description: "All data adheres to strict privacy frameworks, including GDPR-aligned standards, ensuring secure and compliant usage.",
  },
];

const segmentationFilters = [
  "Industry / Vertical",
  "Job Title / Household Profile", 
  "Company Size / Demographics",
  "Technology Usage",
  "Geography (local to national)",
  "50+ Custom Attributes",
];

const verticals = [
  "Insurance", "Healthcare", "Medicare", "Financial Services", 
  "Legal", "Tax", "Real Estate", "Technology"
];

export function LeadsSection() {
  return (
    <section id="leads" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden bg-[#030014]" data-testid="section-leads">
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/3 right-0 w-[700px] h-[700px]"
          style={{
            background: 'radial-gradient(ellipse at right, rgba(255, 128, 93, 0.1) 0%, transparent 60%)',
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#ff805d]/20 text-[#ff805d] border-[#ff805d]/30" data-testid="badge-leads">
            Intelligent Lead Generation
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white" data-testid="text-leads-title">
            High-Quality, AI-Enriched Data
            <span className="block bg-gradient-to-r from-[#ff805d] to-[#a78bfa] bg-clip-text text-transparent">
              With 95%+ Verified Accuracy
            </span>
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-3xl mx-auto" data-testid="text-leads-description">
            CEMSCALE provides continuously updated, AI-enriched consumer and business data with advanced 
            segmentation—delivering verified leads directly into your CRM for automated workflows and real-time engagement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {leadFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35] hover:border-[#ff805d]/30 transition-colors"
              data-testid={`card-lead-feature-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#ff805d]/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-[#ff805d]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
              <p className="text-[#a59ecb] text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden"
            data-testid="card-lead-flow"
          >
            <div className="px-6 py-4 border-b border-[#1f1f35] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Workflow className="h-5 w-5 text-[#ff805d]" />
                <span className="font-medium text-white">Lead Flow Pipeline</span>
              </div>
              <Badge className="bg-[#7cffd4]/10 text-[#7cffd4] border-[#7cffd4]/20">Native Engine</Badge>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative"
                    data-testid={`card-workflow-step-${index}`}
                  >
                    <div className="p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45] text-center">
                      <div className="w-8 h-8 rounded-full bg-[#ff805d]/20 text-[#ff805d] flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                        {step.step}
                      </div>
                      <p className="text-sm font-medium text-white mb-1">{step.title}</p>
                      <p className="text-xs text-[#a59ecb]">{step.description}</p>
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                        <ArrowRight className="h-4 w-4 text-[#a59ecb]" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden"
            data-testid="card-compliance"
          >
            <div className="px-6 py-4 border-b border-[#1f1f35]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#7cffd4]" />
                <span className="font-medium text-white">Compliance Built-In</span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="space-y-3">
                {complianceFeatures.map((feature, index) => (
                  <div 
                    key={feature.label}
                    className="p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45] flex items-center gap-3"
                    data-testid={`card-compliance-feature-${index}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#7cffd4]/10 flex items-center justify-center shrink-0">
                      <feature.icon className="h-5 w-5 text-[#7cffd4]" />
                    </div>
                    <span className="text-sm font-medium text-white">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CEMSCALE Data Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
          data-testid="subsection-cemscale-data"
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#7cffd4]/20 text-[#7cffd4] border-[#7cffd4]/30" data-testid="badge-data">
              CEMSCALE Data
            </Badge>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white" data-testid="text-data-title">
              Why is CEMSCALE Data Different?
            </h3>
            <p className="text-lg text-[#a59ecb] max-w-2xl mx-auto">
              AI-enriched leads ready to convert. Our verification engine ensures 95%+ data accuracy guaranteed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {dataHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35] text-center"
                data-testid={`card-data-highlight-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#7cffd4]/10 flex items-center justify-center mx-auto mb-3">
                  <highlight.icon className="h-6 w-6 text-[#7cffd4]" />
                </div>
                <p className="text-2xl font-bold text-white mb-1" data-testid={`text-highlight-value-${index}`}>{highlight.value}</p>
                <p className="text-xs text-[#a59ecb]">{highlight.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            {dataFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35]"
                data-testid={`card-data-feature-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/10 flex items-center justify-center shrink-0">
                    <feature.icon className="h-6 w-6 text-[#a78bfa]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-sm text-[#a59ecb] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden"
              data-testid="card-segmentation"
            >
              <div className="px-6 py-4 border-b border-[#1f1f35]">
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-[#6b4cff]" />
                  <span className="font-medium text-white">Advanced Segmentation</span>
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-2">
                  {segmentationFilters.map((filter, index) => (
                    <div 
                      key={filter}
                      className="p-3 rounded-lg bg-[#1a1a2e] border border-[#2a2a45] flex items-center gap-2"
                      data-testid={`badge-filter-${index}`}
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#6b4cff] shrink-0" />
                      <span className="text-xs text-[#a59ecb]">{filter}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden"
              data-testid="card-verticals"
            >
              <div className="px-6 py-4 border-b border-[#1f1f35]">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-[#ff805d]" />
                  <span className="font-medium text-white">Available Verticals</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {verticals.map((vertical, index) => (
                    <span 
                      key={vertical}
                      className="px-3 py-1.5 rounded-full bg-[#1a1a2e] border border-[#2a2a45] text-xs text-[#a59ecb]"
                      data-testid={`badge-vertical-${index}`}
                    >
                      {vertical}
                    </span>
                  ))}
                </div>
                <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-[#ff805d]/10 to-transparent border border-[#ff805d]/20">
                  <p className="text-xs text-[#a59ecb]">
                    <span className="text-white font-medium">Perfect for:</span> Insurance, Health, Medicare, Financial Services & Regulated Markets
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-[#ff805d]/10 to-[#a78bfa]/10 border border-[#ff805d]/20"
          data-testid="card-leads-cta"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2" data-testid="text-leads-cta-title">
                Conversion-Ready Opportunities — Powered by CEMSCALE
              </h3>
              <p className="text-[#a59ecb]">
                Your organization receives a consistent stream of compliant, high-intent leads through our native engine.
              </p>
            </div>
            <Button 
              className="bg-[#ff805d] hover:bg-[#ff805d]/90 text-white shrink-0"
              data-testid="button-leads-start"
            >
              Request Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((outcome, index) => (
              <div key={outcome} className="flex items-center gap-2" data-testid={`text-leads-outcome-${index}`}>
                <CheckCircle2 className="h-4 w-4 text-[#7cffd4] shrink-0" />
                <span className="text-sm text-[#a59ecb]">{outcome}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
