import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Gauge,
  Clock,
  FileCheck,
  Gift,
  ArrowRight,
  CheckCircle2,
  Layers,
  MessageSquare,
  Phone,
  FileText,
  ClipboardList,
  Coins,
  Workflow
} from "lucide-react";
import { motion } from "framer-motion";

const engagementFeatures = [
  {
    icon: Gauge,
    title: "Lead Nurturing & Engagement Scores",
    description: "Automatically score and nurture leads based on behavior, intent signals, and engagement history. Prioritize the hottest opportunities.",
  },
  {
    icon: Clock,
    title: "Follow-Up & Task Automation",
    description: "Never miss a follow-up. Automated task creation, reminders, and escalations keep your team on track with every prospect.",
  },
  {
    icon: FileCheck,
    title: "Unified CRM With Compliance Artifacts",
    description: "Notes, calls, consents, and documents—all in one place. Complete compliance history for every customer interaction.",
  },
  {
    icon: Gift,
    title: "Referrals & Incentives Engine",
    description: "Partner and downline monetization built in. Track referrals, calculate commissions, and incentivize your network automatically.",
  },
];

const crmArtifacts = [
  { icon: MessageSquare, label: "Notes & History" },
  { icon: Phone, label: "Call Recordings" },
  { icon: FileText, label: "Consent Forms" },
  { icon: ClipboardList, label: "Documents" },
];

const crossSellVerticals = [
  "ACA / Health",
  "Medicare",
  "Dental",
  "Vision",
  "Legal",
  "Tax",
  "Final Expense",
  "Auto",
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
            Customer Engagement Management
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white" data-testid="text-engagement-title">
            Unified CRM, Automated Workflows
            <span className="block bg-gradient-to-r from-[#7cffd4] to-[#a78bfa] bg-clip-text text-transparent">
              Referrals & Lifecycle Intelligence
            </span>
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-3xl mx-auto" data-testid="text-engagement-description">
            CEMSCALE's Customer Engagement Management engine ensures every interaction—before, during, 
            and after the sale—is intelligent, intentional, and automated. Purpose-built for insurance and regulated markets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
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
              <div className="w-12 h-12 rounded-xl bg-[#7cffd4]/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-[#7cffd4]" />
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
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35] mb-16"
          data-testid="card-crosssell"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/10 flex items-center justify-center">
              <Layers className="h-6 w-6 text-[#a78bfa]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Cross-Sell & Upsell Workflows</h3>
              <p className="text-sm text-[#a59ecb]">Build your own ecosystem of cross-selling opportunities</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {crossSellVerticals.map((vertical, index) => (
              <span 
                key={vertical}
                className="px-3 py-2 rounded-lg bg-[#1a1a2e] border border-[#2a2a45] text-sm text-[#a59ecb]"
                data-testid={`badge-vertical-${index}`}
              >
                {vertical}
              </span>
            ))}
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
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
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
                  <p className="font-medium text-white text-sm">Referrals Engine</p>
                  <p className="text-xs text-[#a59ecb]">Built-in monetization</p>
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
                Measurable Results — Purpose-Built for Regulated Markets
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
