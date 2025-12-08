import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  UserPlus,
  Zap,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  BarChart3,
  Users,
  Database,
  FileCheck,
  Bell,
  Workflow
} from "lucide-react";
import { motion } from "framer-motion";

const leadCapabilities = [
  {
    icon: Target,
    title: "High-Intent Lead Sourcing",
    description: "Leads are generated through CEMSCALE's internal demand engine and routed instantly into the platform. No third-party dependencies.",
    stat: "Quality Score",
    statValue: "94%",
  },
  {
    icon: Zap,
    title: "Real-Time Delivery",
    description: "Leads flow directly to your agents and workflows without external systems. Instant availability for immediate engagement.",
    stat: "Delivery Time",
    statValue: "<1s",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-First Framework",
    description: "Every lead is verified, opt-in certified, and DNC-scrubbed to meet regulatory requirements. Full TCPA compliance built-in.",
    stat: "Compliance Rate",
    statValue: "100%",
  },
  {
    icon: BarChart3,
    title: "Attribution & Tracking",
    description: "Each lead is tagged, scored, and tracked for conversion analytics and ROI insights. Complete visibility into your pipeline.",
    stat: "Tracked Metrics",
    statValue: "50+",
  },
];

const complianceFeatures = [
  { label: "Opt-in Verified", icon: FileCheck },
  { label: "DNC Scrubbed", icon: ShieldCheck },
  { label: "TCPA Compliant", icon: CheckCircle2 },
  { label: "Real-Time Validation", icon: Clock },
];

const leadMetrics = [
  { label: "Leads Delivered Today", value: "2,847", change: "+23%", positive: true },
  { label: "Average Lead Score", value: "87", change: "+5", positive: true },
  { label: "Conversion Rate", value: "34%", change: "+8%", positive: true },
  { label: "Cost per Lead", value: "$12", change: "-18%", positive: true },
];

const recentLeads = [
  { 
    name: "Enterprise Solutions Co.", 
    intent: "Demo Request",
    score: 96,
    status: "Hot",
    time: "Just now"
  },
  { 
    name: "TechStart Inc.", 
    intent: "Pricing Inquiry",
    score: 89,
    status: "Qualified",
    time: "2 min ago"
  },
  { 
    name: "Global Retail Group", 
    intent: "Product Interest",
    score: 82,
    status: "Qualified",
    time: "5 min ago"
  },
  { 
    name: "Healthcare Plus", 
    intent: "Consultation",
    score: 78,
    status: "New",
    time: "8 min ago"
  },
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
        <div 
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at bottom left, rgba(107, 76, 255, 0.08) 0%, transparent 60%)',
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
            Lead Generation
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white" data-testid="text-leads-title">
            Intelligent, Compliant Lead Generation
            <span className="block bg-gradient-to-r from-[#ff805d] to-[#a78bfa] bg-clip-text text-transparent">
              Built Into CEMSCALE
            </span>
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-3xl mx-auto" data-testid="text-leads-description">
            CEMSCALE provides a high-quality, high-intent lead engine that delivers verified consumers 
            directly into your CRM—ready for automated workflows, call-center outreach, and real-time engagement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {leadCapabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35] hover:border-[#ff805d]/30 transition-colors"
              data-testid={`card-lead-capability-${index}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff805d]/10 flex items-center justify-center">
                  <capability.icon className="h-6 w-6 text-[#ff805d]" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#a59ecb]">{capability.stat}</p>
                  <p className="text-xl font-bold text-[#7cffd4]" data-testid={`text-capability-stat-${index}`}>{capability.statValue}</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2" data-testid={`text-capability-title-${index}`}>{capability.title}</h3>
              <p className="text-[#a59ecb] text-sm leading-relaxed">{capability.description}</p>
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
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {leadMetrics.map((metric, index) => (
                  <div key={metric.label} className="p-3 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]" data-testid={`card-lead-metric-${index}`}>
                    <p className="text-xs text-[#a59ecb] mb-1">{metric.label}</p>
                    <div className="flex flex-wrap items-end justify-between gap-1">
                      <span className="text-lg font-semibold text-white" data-testid={`text-lead-metric-value-${index}`}>{metric.value}</span>
                      <span className={`text-xs font-medium ${metric.positive ? 'text-[#7cffd4]' : 'text-[#ff805d]'}`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden mb-16"
          data-testid="card-recent-leads"
        >
          <div className="px-6 py-4 border-b border-[#1f1f35] flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-[#a78bfa]" />
              <span className="font-medium text-white">Live Lead Feed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#7cffd4] animate-pulse" />
              <span className="text-xs text-[#7cffd4]">Real-time</span>
            </div>
          </div>
          
          <div className="p-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {recentLeads.map((lead, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45]"
                  data-testid={`card-recent-lead-${index}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      lead.status === 'Hot' ? 'bg-[#7cffd4]/20 text-[#7cffd4]' :
                      lead.status === 'Qualified' ? 'bg-[#a78bfa]/20 text-[#a78bfa]' :
                      'bg-[#ff805d]/20 text-[#ff805d]'
                    }`} data-testid={`badge-lead-status-${index}`}>
                      {lead.status}
                    </div>
                    <span className="text-xs text-[#a59ecb]">{lead.time}</span>
                  </div>
                  <p className="font-medium text-white text-sm mb-1 truncate" data-testid={`text-lead-name-${index}`}>{lead.name}</p>
                  <p className="text-xs text-[#a59ecb] mb-2">{lead.intent}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#a59ecb]">Score</span>
                    <span className="text-sm font-bold text-[#7cffd4]" data-testid={`text-lead-score-${index}`}>{lead.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Start Generating Leads
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
