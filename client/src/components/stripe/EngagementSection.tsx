import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Heart,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Gauge,
  Clock,
  FileCheck,
  Gift,
  ArrowUpRight,
  Workflow,
  MessageSquare,
  ClipboardList,
  Phone,
  FileText,
  UserPlus,
  Coins,
  Layers
} from "lucide-react";
import { motion } from "framer-motion";

const engagementFeatures = [
  {
    icon: Gauge,
    title: "Lead Nurturing & Engagement Scores",
    description: "Automatically score and nurture leads based on behavior, intent signals, and engagement history. Prioritize the hottest opportunities.",
    stat: "Nurture Rate",
    statValue: "+47%",
  },
  {
    icon: Clock,
    title: "Follow-Up & Task Automation",
    description: "Never miss a follow-up. Automated task creation, reminders, and escalations keep your team on track with every prospect.",
    stat: "Tasks Automated",
    statValue: "85%",
  },
  {
    icon: FileCheck,
    title: "Unified CRM With Compliance Artifacts",
    description: "Notes, calls, consents, and documents—all in one place. Complete compliance history for every customer interaction.",
    stat: "Compliance",
    statValue: "100%",
  },
  {
    icon: Gift,
    title: "Referrals & Incentives Engine",
    description: "Partner and downline monetization built in. Track referrals, calculate commissions, and incentivize your network automatically.",
    stat: "Referral Revenue",
    statValue: "+38%",
  },
];

const crmArtifacts = [
  { icon: MessageSquare, label: "Notes & History" },
  { icon: Phone, label: "Call Recordings" },
  { icon: FileText, label: "Consent Forms" },
  { icon: ClipboardList, label: "Documents" },
];

const crossSellVerticals = [
  { name: "ACA / Health", active: true },
  { name: "Medicare", active: true },
  { name: "Dental", active: true },
  { name: "Vision", active: true },
  { name: "Legal", active: true },
  { name: "Tax", active: true },
  { name: "Final Expense", active: false },
  { name: "Auto", active: false },
];

const engagementMetrics = [
  { label: "Conversion Rate", value: "34%", change: "+12%", positive: true },
  { label: "Agent Productivity", value: "+45%", change: "+18%", positive: true },
  { label: "Customer Retention", value: "89%", change: "+7%", positive: true },
  { label: "LTV Increase", value: "+62%", change: "+24%", positive: true },
];

const journeySteps = [
  { phase: "Before Sale", activities: ["Lead Nurturing", "Engagement Scoring", "Automated Follow-ups"] },
  { phase: "During Sale", activities: ["Unified CRM", "Compliance Tracking", "Document Collection"] },
  { phase: "After Sale", activities: ["Cross-Sell Workflows", "Referral Programs", "Retention Campaigns"] },
];

const outcomes = [
  "Measurable increase in conversions",
  "Higher agent productivity",
  "Improved customer retention",
  "Complete compliance artifact management",
  "Automated partner/downline monetization",
  "Maximized lifetime customer value",
];

export function EngagementSection() {
  return (
    <section id="engagement" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden bg-[#030014]" data-testid="section-engagement">
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/3 w-[800px] h-[800px]"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(124, 255, 212, 0.1) 0%, transparent 60%)',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-0 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at right, rgba(167, 139, 250, 0.08) 0%, transparent 60%)',
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
          <Badge className="mb-4 bg-[#7cffd4]/20 text-[#7cffd4] border-[#7cffd4]/30" data-testid="badge-engagement">
            CEM Engine
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white" data-testid="text-engagement-title">
            Orchestrate Every Touchpoint
            <span className="block bg-gradient-to-r from-[#7cffd4] to-[#a78bfa] bg-clip-text text-transparent">
              Maximize Every Relationship
            </span>
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-3xl mx-auto" data-testid="text-engagement-description">
            CEMSCALE's Customer Engagement Management engine ensures every interaction—before, during, 
            and after the sale—is intelligent, intentional, and automated.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {engagementFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35] hover:border-[#7cffd4]/30 transition-colors"
              data-testid={`card-engagement-feature-${index}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#7cffd4]/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-[#7cffd4]" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#a59ecb]">{feature.stat}</p>
                  <p className="text-xl font-bold text-[#7cffd4]" data-testid={`text-feature-stat-${index}`}>{feature.statValue}</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
              <p className="text-[#a59ecb] text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35] hover:border-[#a78bfa]/30 transition-colors mb-16"
          data-testid="card-crosssell-feature"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/10 flex items-center justify-center">
                  <Layers className="h-6 w-6 text-[#a78bfa]" />
                </div>
                <div className="text-right lg:hidden">
                  <p className="text-xs text-[#a59ecb]">Cross-Sell Rate</p>
                  <p className="text-xl font-bold text-[#7cffd4]">+52%</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cross-Sell & Upsell Workflows</h3>
              <p className="text-[#a59ecb] text-sm leading-relaxed mb-4">
                Build your own ecosystem of cross-selling opportunities across ACA, Medicare, dental, vision, legal, tax, and more. Maximize lifetime customer value with intelligent workflow automation.
              </p>
              <div className="flex flex-wrap gap-2">
                {crossSellVerticals.map((vertical, index) => (
                  <span 
                    key={vertical.name}
                    className={`px-3 py-1.5 rounded-full text-xs ${
                      vertical.active 
                        ? 'bg-[#7cffd4]/10 text-[#7cffd4] border border-[#7cffd4]/30' 
                        : 'bg-[#1a1a2e] text-[#a59ecb] border border-[#2a2a45]'
                    }`}
                    data-testid={`badge-vertical-${index}`}
                  >
                    {vertical.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block text-right">
              <p className="text-xs text-[#a59ecb]">Cross-Sell Rate</p>
              <p className="text-2xl font-bold text-[#7cffd4]" data-testid="text-crosssell-stat">+52%</p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden"
            data-testid="card-customer-journey"
          >
            <div className="px-6 py-4 border-b border-[#1f1f35] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Workflow className="h-5 w-5 text-[#7cffd4]" />
                <span className="font-medium text-white">Complete Customer Journey</span>
              </div>
              <Badge className="bg-[#a78bfa]/10 text-[#a78bfa] border-[#a78bfa]/20">CEM Engine</Badge>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {journeySteps.map((step, index) => (
                  <motion.div
                    key={step.phase}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45]"
                    data-testid={`card-journey-step-${index}`}
                  >
                    <div className={`w-full h-1 rounded-full mb-4 ${
                      index === 0 ? 'bg-gradient-to-r from-[#6b4cff] to-[#a78bfa]' :
                      index === 1 ? 'bg-gradient-to-r from-[#a78bfa] to-[#7cffd4]' :
                      'bg-gradient-to-r from-[#7cffd4] to-[#6b4cff]'
                    }`} />
                    <p className="text-sm font-semibold text-white mb-3">{step.phase}</p>
                    <div className="space-y-2">
                      {step.activities.map((activity, actIndex) => (
                        <div key={activity} className="flex items-center gap-2" data-testid={`text-activity-${index}-${actIndex}`}>
                          <CheckCircle2 className="h-3 w-3 text-[#7cffd4] shrink-0" />
                          <span className="text-xs text-[#a59ecb]">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {engagementMetrics.map((metric, index) => (
                  <div key={metric.label} className="p-3 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]" data-testid={`card-engagement-metric-${index}`}>
                    <p className="text-xs text-[#a59ecb] mb-1">{metric.label}</p>
                    <div className="flex flex-wrap items-end justify-between gap-1">
                      <span className="text-lg font-semibold text-white" data-testid={`text-engagement-value-${index}`}>{metric.value}</span>
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
            className="space-y-4"
          >
            <div className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden" data-testid="card-crm-artifacts">
              <div className="px-6 py-4 border-b border-[#1f1f35]">
                <div className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-[#a78bfa]" />
                  <span className="font-medium text-white">Compliance Artifacts</span>
                </div>
              </div>
              <div className="p-4 space-y-3">
                {crmArtifacts.map((artifact, index) => (
                  <div 
                    key={artifact.label}
                    className="p-3 rounded-lg bg-[#1a1a2e] border border-[#2a2a45] flex items-center gap-3"
                    data-testid={`card-artifact-${index}`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#a78bfa]/10 flex items-center justify-center shrink-0">
                      <artifact.icon className="h-4 w-4 text-[#a78bfa]" />
                    </div>
                    <span className="text-sm text-white">{artifact.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#7cffd4]/10 to-[#a78bfa]/10 border border-[#7cffd4]/20 p-5" data-testid="card-referrals">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#7cffd4]/20 flex items-center justify-center">
                  <Coins className="h-5 w-5 text-[#7cffd4]" />
                </div>
                <div>
                  <p className="font-medium text-white text-sm">Referral Revenue</p>
                  <p className="text-2xl font-bold text-[#7cffd4]" data-testid="text-referral-revenue">+38%</p>
                </div>
              </div>
              <p className="text-xs text-[#a59ecb]">Partner & downline monetization built into every workflow.</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-[#7cffd4]/10 to-[#a78bfa]/10 border border-[#7cffd4]/20"
          data-testid="card-engagement-cta"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2" data-testid="text-engagement-cta-title">
                Measurable Results — Powered by CEM Engine
              </h3>
              <p className="text-[#a59ecb]">
                Increase conversions, boost agent productivity, and maximize retention with intelligent automation.
              </p>
            </div>
            <Button 
              className="bg-[#7cffd4] hover:bg-[#7cffd4]/90 text-[#030014] shrink-0"
              data-testid="button-engagement-demo"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((outcome, index) => (
              <div key={outcome} className="flex items-center gap-2" data-testid={`text-engagement-outcome-${index}`}>
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
