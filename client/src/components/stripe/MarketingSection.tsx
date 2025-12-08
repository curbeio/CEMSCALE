import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MessageSquare, 
  Sparkles,
  Target,
  Zap,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  FileText,
  BarChart3,
  Globe,
  Megaphone,
  Phone,
  Split,
  Layers
} from "lucide-react";
import { motion } from "framer-motion";

const marketingCapabilities = [
  {
    icon: Sparkles,
    title: "AI-Powered Content Creation",
    description: "Generate compelling marketing content with AI. From email copy to landing pages—create high-converting assets in seconds.",
    stat: "Time Saved",
    statValue: "80%",
  },
  {
    icon: FileText,
    title: "Pre-Configured Campaign Templates",
    description: "Ready-to-launch templates for ACA, Medicare, Final Expense, Legal, Tax, and beyond. Proven frameworks that convert.",
    stat: "Templates",
    statValue: "50+",
  },
  {
    icon: Layers,
    title: "Multi-Channel Funnels",
    description: "Email, SMS, Social, Web, and Voice funnels—all orchestrated from a single platform for seamless customer journeys.",
    stat: "Channels",
    statValue: "5+",
  },
  {
    icon: Split,
    title: "A/B Testing & Optimization",
    description: "Test everything. Subject lines, content, timing, channels. Data-driven optimization built into every campaign.",
    stat: "Avg Lift",
    statValue: "+34%",
  },
];

const channels = [
  { icon: Mail, name: "Email", active: true },
  { icon: MessageSquare, name: "SMS", active: true },
  { icon: Globe, name: "Social", active: true },
  { icon: Megaphone, name: "Web", active: true },
  { icon: Phone, name: "Voice", active: true },
];

const industryTemplates = [
  { name: "ACA / Health Insurance", campaigns: 12 },
  { name: "Medicare", campaigns: 8 },
  { name: "Final Expense", campaigns: 6 },
  { name: "Legal Services", campaigns: 5 },
  { name: "Tax Services", campaigns: 4 },
  { name: "Financial Services", campaigns: 7 },
];

const campaignMetrics = [
  { label: "Active Campaigns", value: "24", change: "+6", positive: true },
  { label: "Messages Sent", value: "1.2M", change: "+23%", positive: true },
  { label: "Conversion Rate", value: "12%", change: "+4%", positive: true },
  { label: "ROI", value: "340%", change: "+45%", positive: true },
];

const outcomes = [
  "Launch campaigns directly from CEMSCALE",
  "No external marketing software required",
  "Connected to your telephony and CRM",
  "Full lead flow integration",
  "Real-time performance analytics",
  "Compliance-ready messaging",
];

export function MarketingSection() {
  return (
    <section id="marketing" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden bg-[#030014]" data-testid="section-marketing">
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-0 w-[700px] h-[700px]"
          style={{
            background: 'radial-gradient(ellipse at left, rgba(107, 76, 255, 0.12) 0%, transparent 60%)',
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(ellipse at bottom right, rgba(124, 255, 212, 0.08) 0%, transparent 60%)',
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
          <Badge className="mb-4 bg-[#6b4cff]/20 text-[#a78bfa] border-[#6b4cff]/30" data-testid="badge-marketing">
            Multi-Channel Marketing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white" data-testid="text-marketing-title">
            Activate and Convert
            <span className="block bg-gradient-to-r from-[#6b4cff] to-[#7cffd4] bg-clip-text text-transparent">
              With Precision Marketing
            </span>
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-3xl mx-auto" data-testid="text-marketing-description">
            CEMSCALE empowers your organization with multi-channel marketing tools that connect your brand 
            to consumers at the right time, on the right channel.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {marketingCapabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35] hover:border-[#6b4cff]/30 transition-colors"
              data-testid={`card-marketing-capability-${index}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#6b4cff]/10 flex items-center justify-center">
                  <capability.icon className="h-6 w-6 text-[#6b4cff]" />
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
            data-testid="card-campaign-dashboard"
          >
            <div className="px-6 py-4 border-b border-[#1f1f35] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-[#6b4cff]" />
                <span className="font-medium text-white">Campaign Performance</span>
              </div>
              <Badge className="bg-[#7cffd4]/10 text-[#7cffd4] border-[#7cffd4]/20">All Channels</Badge>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {campaignMetrics.map((metric, index) => (
                  <div key={metric.label} className="p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45]" data-testid={`card-campaign-metric-${index}`}>
                    <p className="text-xs text-[#a59ecb] mb-1">{metric.label}</p>
                    <div className="flex flex-wrap items-end justify-between gap-1">
                      <span className="text-xl font-bold text-white" data-testid={`text-campaign-value-${index}`}>{metric.value}</span>
                      <span className={`text-xs font-medium ${metric.positive ? 'text-[#7cffd4]' : 'text-[#ff805d]'}`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45]">
                <p className="text-sm font-medium text-white mb-3">Active Channels</p>
                <div className="flex flex-wrap gap-3">
                  {channels.map((channel, index) => (
                    <div 
                      key={channel.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0a0a1a] border border-[#2a2a45]"
                      data-testid={`badge-channel-${index}`}
                    >
                      <channel.icon className="h-4 w-4 text-[#6b4cff]" />
                      <span className="text-sm text-white">{channel.name}</span>
                      {channel.active && (
                        <div className="w-2 h-2 rounded-full bg-[#7cffd4]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden"
            data-testid="card-templates"
          >
            <div className="px-6 py-4 border-b border-[#1f1f35]">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#a78bfa]" />
                <span className="font-medium text-white">Industry Templates</span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="space-y-2">
                {industryTemplates.map((template, index) => (
                  <div 
                    key={template.name}
                    className="p-3 rounded-lg bg-[#1a1a2e] border border-[#2a2a45] flex flex-wrap items-center justify-between gap-2"
                    data-testid={`card-template-${index}`}
                  >
                    <span className="text-sm text-white">{template.name}</span>
                    <Badge className="bg-[#6b4cff]/10 text-[#6b4cff] border-[#6b4cff]/20 text-xs">
                      {template.campaigns} campaigns
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-[#6b4cff]/10 to-[#7cffd4]/10 border border-[#6b4cff]/20"
          data-testid="card-marketing-cta"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2" data-testid="text-marketing-cta-title">
                A Powerful Marketing Ecosystem
              </h3>
              <p className="text-[#a59ecb]">
                Tied directly to your telephony, CRM, and lead flow—no external software required.
              </p>
            </div>
            <Button 
              className="bg-[#6b4cff] hover:bg-[#6b4cff]/90 text-white shrink-0"
              data-testid="button-marketing-start"
            >
              Start Campaign
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((outcome, index) => (
              <div key={outcome} className="flex items-center gap-2" data-testid={`text-marketing-outcome-${index}`}>
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
