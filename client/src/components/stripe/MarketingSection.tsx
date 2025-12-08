import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MessageSquare, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe,
  Megaphone,
  Phone,
  Split,
  Layers
} from "lucide-react";
import { motion } from "framer-motion";

const marketingFeatures = [
  {
    icon: Sparkles,
    title: "AI-Powered Content Creation",
    description: "Generate compelling marketing content with AI. From email copy to landing pages—create high-converting assets in seconds.",
  },
  {
    icon: FileText,
    title: "Pre-Configured Campaign Templates",
    description: "Ready-to-launch templates for ACA, Medicare, Final Expense, Legal, Tax, and beyond. Proven frameworks that convert.",
  },
  {
    icon: Layers,
    title: "Multi-Channel Funnels",
    description: "Email, SMS, Social, Web, and Voice funnels—all orchestrated from a single platform for seamless customer journeys.",
  },
  {
    icon: Split,
    title: "A/B Testing & Optimization",
    description: "Test everything. Subject lines, content, timing, channels. Data-driven optimization built into every campaign.",
  },
];

const channels = [
  { icon: Mail, name: "Email" },
  { icon: MessageSquare, name: "SMS" },
  { icon: Globe, name: "Social" },
  { icon: Megaphone, name: "Web" },
  { icon: Phone, name: "Voice" },
];

const industryTemplates = [
  "ACA / Health Insurance",
  "Medicare",
  "Final Expense",
  "Legal Services",
  "Tax Services",
  "Financial Services",
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
            Multi-Channel Marketing Automation
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white" data-testid="text-marketing-title">
            Email, SMS, Social, Landing Pages
            <span className="block bg-gradient-to-r from-[#6b4cff] to-[#7cffd4] bg-clip-text text-transparent">
              and AI-Generated Content
            </span>
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-3xl mx-auto" data-testid="text-marketing-description">
            CEMSCALE empowers your organization with multi-channel marketing tools synchronized into 
            a cohesive engagement engine—connecting your brand to consumers at the right time, on the right channel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {marketingFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35] hover:border-[#6b4cff]/30 transition-colors"
              data-testid={`card-marketing-feature-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#6b4cff]/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-[#6b4cff]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
              <p className="text-[#a59ecb] text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden"
            data-testid="card-channels"
          >
            <div className="px-6 py-4 border-b border-[#1f1f35]">
              <span className="font-medium text-white">Available Channels</span>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-3">
                {channels.map((channel, index) => (
                  <div 
                    key={channel.name}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#1a1a2e] border border-[#2a2a45]"
                    data-testid={`badge-channel-${index}`}
                  >
                    <channel.icon className="h-5 w-5 text-[#6b4cff]" />
                    <span className="text-white">{channel.name}</span>
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
            data-testid="card-templates"
          >
            <div className="px-6 py-4 border-b border-[#1f1f35]">
              <span className="font-medium text-white">Industry Templates</span>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {industryTemplates.map((template, index) => (
                  <span 
                    key={template}
                    className="px-3 py-2 rounded-lg bg-[#1a1a2e] border border-[#2a2a45] text-sm text-[#a59ecb]"
                    data-testid={`badge-template-${index}`}
                  >
                    {template}
                  </span>
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
              Get Started
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
