import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MessageSquare, 
  Send,
  Target,
  BarChart3,
  Zap,
  Users,
  Calendar,
  TrendingUp,
  MousePointer,
  Eye,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Clock,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

const marketingChannels = [
  {
    icon: Mail,
    name: "Email Marketing",
    description: "AI-optimized email campaigns with dynamic content, A/B testing, and predictive send times.",
    stats: { label: "Avg Open Rate", value: "42%" },
    color: "#a78bfa",
  },
  {
    icon: MessageSquare,
    name: "SMS Campaigns",
    description: "Direct SMS marketing with personalization, scheduling, and two-way conversations.",
    stats: { label: "Delivery Rate", value: "99%" },
    color: "#7cffd4",
  },
  {
    icon: SiWhatsapp,
    name: "WhatsApp Business",
    description: "Official WhatsApp API integration for broadcast messages, chatbots, and customer support.",
    stats: { label: "Response Rate", value: "85%" },
    color: "#25D366",
  },
  {
    icon: Globe,
    name: "Social Media",
    description: "Unified inbox for Facebook, Instagram, and Twitter. Schedule posts and track engagement.",
    stats: { label: "Engagement", value: "+156%" },
    color: "#6b4cff",
  },
];

const automationWorkflows = [
  { name: "Welcome Series", status: "active", contacts: "12,847", conversion: "34%" },
  { name: "Cart Abandonment", status: "active", contacts: "8,293", conversion: "28%" },
  { name: "Re-engagement", status: "active", contacts: "45,102", conversion: "19%" },
  { name: "Upsell Campaign", status: "paused", contacts: "23,456", conversion: "41%" },
];

const campaignMetrics = [
  { icon: Send, label: "Emails Sent", value: "2.4M", period: "This month" },
  { icon: Eye, label: "Total Opens", value: "987K", period: "41% rate" },
  { icon: MousePointer, label: "Clicks", value: "234K", period: "24% CTR" },
  { icon: TrendingUp, label: "Conversions", value: "18.2K", period: "$2.4M revenue" },
];

const features = [
  "Drag-and-drop email builder with 100+ templates",
  "AI-powered subject line optimization",
  "Advanced segmentation with 50+ filters",
  "Behavioral triggers and automation",
  "Real-time analytics and reporting",
  "A/B testing for all campaign elements",
  "Lead scoring and nurturing workflows",
  "CRM and sales integration",
];

export function MarketingSection() {
  return (
    <section id="marketing" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden bg-[#030014]">
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
          <Badge className="mb-4 bg-[#6b4cff]/20 text-[#a78bfa] border-[#6b4cff]/30">
            Marketing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
            Multi-Channel Marketing
            <span className="block bg-gradient-to-r from-[#6b4cff] to-[#7cffd4] bg-clip-text text-transparent">
              Automation Platform
            </span>
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-3xl mx-auto">
            Reach your audience on every channel with AI-powered campaigns that convert. 
            Email, SMS, WhatsApp, and social media—all from one intelligent platform.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {marketingChannels.map((channel, index) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35] hover:border-[#6b4cff]/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${channel.color}15` }}
                >
                  <channel.icon className="h-6 w-6" style={{ color: channel.color }} />
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#a59ecb]">{channel.stats.label}</p>
                  <p className="text-xl font-bold" style={{ color: channel.color }}>{channel.stats.value}</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{channel.name}</h3>
              <p className="text-[#a59ecb] text-sm leading-relaxed">{channel.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-[#1f1f35] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-[#7cffd4]" />
                <span className="font-medium text-white">Automation Workflows</span>
              </div>
              <Badge className="bg-[#7cffd4]/10 text-[#7cffd4] border-[#7cffd4]/20">4 Active</Badge>
            </div>
            
            <div className="p-4">
              <div className="space-y-3">
                {automationWorkflows.map((workflow) => (
                  <div 
                    key={workflow.name}
                    className="p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45] flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${workflow.status === 'active' ? 'bg-[#7cffd4]' : 'bg-[#a59ecb]'}`} />
                      <div>
                        <p className="font-medium text-white text-sm">{workflow.name}</p>
                        <p className="text-xs text-[#a59ecb]">{workflow.contacts} contacts</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-[#7cffd4]">{workflow.conversion}</p>
                      <p className="text-xs text-[#a59ecb]">conversion</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {campaignMetrics.map((metric, index) => (
              <div 
                key={metric.label}
                className="p-4 rounded-xl bg-[#0a0a1a]/60 border border-[#1f1f35] flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#6b4cff]/10 flex items-center justify-center">
                  <metric.icon className="h-5 w-5 text-[#6b4cff]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#a59ecb]">{metric.label}</p>
                  <p className="text-xl font-bold text-white">{metric.value}</p>
                </div>
                <span className="text-xs text-[#a59ecb] bg-[#1a1a2e] px-2 py-1 rounded">{metric.period}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden mb-16"
        >
          <div className="px-6 py-4 border-b border-[#1f1f35]">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#a78bfa]" />
              <span className="font-medium text-white">AI-Powered Email Builder</span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#7cffd4] animate-pulse" />
                    <span className="text-sm font-medium text-white">AI Subject Line Generator</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-3 rounded-lg bg-[#0a0a1a] border border-[#2a2a45] flex items-center justify-between">
                      <span className="text-sm text-[#a59ecb]">"Unlock 40% off - Today only"</span>
                      <Badge className="bg-[#7cffd4]/10 text-[#7cffd4] text-xs">92% score</Badge>
                    </div>
                    <div className="p-3 rounded-lg bg-[#0a0a1a] border border-[#2a2a45] flex items-center justify-between">
                      <span className="text-sm text-[#a59ecb]">"Your exclusive deal awaits"</span>
                      <Badge className="bg-[#a78bfa]/10 text-[#a78bfa] text-xs">87% score</Badge>
                    </div>
                    <div className="p-3 rounded-lg bg-[#0a0a1a] border border-[#2a2a45] flex items-center justify-between">
                      <span className="text-sm text-[#a59ecb]">"Don't miss this limited offer"</span>
                      <Badge className="bg-[#6b4cff]/10 text-[#6b4cff] text-xs">81% score</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45]">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-4 w-4 text-[#a78bfa]" />
                    <span className="text-sm font-medium text-white">Optimal Send Time</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-white">Tuesday, 10:34 AM</p>
                      <p className="text-xs text-[#a59ecb]">Based on recipient engagement patterns</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-[#7cffd4]">+23%</p>
                      <p className="text-xs text-[#a59ecb]">higher opens</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45]">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="h-4 w-4 text-[#6b4cff]" />
                  <span className="text-sm font-medium text-white">Audience Segments</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "High-Value Customers", count: "12,847", color: "#7cffd4" },
                    { name: "Recent Purchasers", count: "8,293", color: "#a78bfa" },
                    { name: "Cart Abandoners", count: "3,456", color: "#ff805d" },
                    { name: "Newsletter Subscribers", count: "45,102", color: "#6b4cff" },
                    { name: "Inactive (30+ days)", count: "7,891", color: "#a59ecb" },
                  ].map((segment) => (
                    <div key={segment.name} className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a1a]">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: segment.color }} />
                        <span className="text-sm text-white">{segment.name}</span>
                      </div>
                      <span className="text-sm text-[#a59ecb]">{segment.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-[#6b4cff]/10 to-[#7cffd4]/10 border border-[#6b4cff]/20"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Scale your marketing with AI</h3>
              <p className="text-[#a59ecb]">Everything you need to create, automate, and optimize multi-channel campaigns.</p>
            </div>
            <Button 
              className="bg-[#6b4cff] hover:bg-[#6b4cff]/90 text-white shrink-0"
              data-testid="button-marketing-start"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#7cffd4] shrink-0" />
                <span className="text-sm text-[#a59ecb]">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
