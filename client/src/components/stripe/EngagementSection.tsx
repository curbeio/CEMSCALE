import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle,
  Star,
  TrendingUp,
  Calendar,
  Activity,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  UserCheck,
  Repeat,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

const engagementMetrics = [
  { 
    icon: UserCheck, 
    label: "Active Users", 
    value: "24,847", 
    change: "+12%",
    color: "#7cffd4" 
  },
  { 
    icon: MessageCircle, 
    label: "Conversations", 
    value: "8,293", 
    change: "+34%",
    color: "#a78bfa" 
  },
  { 
    icon: Star, 
    label: "NPS Score", 
    value: "72", 
    change: "+8",
    color: "#6b4cff" 
  },
  { 
    icon: Repeat, 
    label: "Retention Rate", 
    value: "89%", 
    change: "+5%",
    color: "#ff805d" 
  },
];

const customerJourney = [
  { stage: "Awareness", count: 45000, percentage: 100, color: "#a78bfa" },
  { stage: "Consideration", count: 28000, percentage: 62, color: "#6b4cff" },
  { stage: "Decision", count: 12000, percentage: 27, color: "#7cffd4" },
  { stage: "Purchase", count: 8500, percentage: 19, color: "#ff805d" },
  { stage: "Loyalty", count: 6200, percentage: 14, color: "#f0abfc" },
];

const recentInteractions = [
  { 
    name: "Maria Garcia",
    action: "Opened support ticket",
    time: "2 min ago",
    avatar: "MG",
    sentiment: "neutral"
  },
  { 
    name: "James Wilson",
    action: "Left 5-star review",
    time: "15 min ago",
    avatar: "JW",
    sentiment: "positive"
  },
  { 
    name: "Sarah Chen",
    action: "Upgraded to Pro plan",
    time: "32 min ago",
    avatar: "SC",
    sentiment: "positive"
  },
  { 
    name: "Michael Brown",
    action: "Requested refund",
    time: "1 hour ago",
    avatar: "MB",
    sentiment: "negative"
  },
];

const engagementFeatures = [
  {
    icon: MessageCircle,
    title: "Unified Inbox",
    description: "All customer conversations from email, chat, social media, and phone in one place. Never miss a message again.",
  },
  {
    icon: Activity,
    title: "Customer Health Scores",
    description: "AI-powered scoring based on engagement, usage patterns, and sentiment. Identify at-risk customers before they churn.",
  },
  {
    icon: Calendar,
    title: "Lifecycle Automation",
    description: "Trigger personalized touchpoints at every stage of the customer journey. Onboarding, milestones, and renewals.",
  },
  {
    icon: Award,
    title: "Loyalty Programs",
    description: "Build and manage reward programs with points, tiers, and exclusive benefits. Increase repeat purchases by 40%.",
  },
];

const capabilities = [
  "360° customer profiles with full history",
  "Real-time activity feeds and notifications",
  "Automated customer satisfaction surveys",
  "Sentiment analysis on all interactions",
  "Custom fields and tags for segmentation",
  "Team collaboration with @mentions",
  "SLA tracking and escalation rules",
  "Integration with 100+ tools",
];

export function EngagementSection() {
  return (
    <section id="engagement" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden bg-[#030014]" data-testid="section-engagement">
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/3 w-[800px] h-[800px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(124, 255, 212, 0.08) 0%, transparent 60%)',
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
            Engagement
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white" data-testid="text-engagement-title">
            Customer Engagement
            <span className="block bg-gradient-to-r from-[#7cffd4] to-[#6b4cff] bg-clip-text text-transparent">
              That Drives Loyalty
            </span>
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-3xl mx-auto" data-testid="text-engagement-description">
            Build lasting relationships with every customer. Track interactions, measure satisfaction, 
            and create personalized experiences that turn buyers into advocates.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {engagementMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-5 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35] text-center"
              data-testid={`card-engagement-metric-${index}`}
            >
              <div 
                className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                style={{ backgroundColor: `${metric.color}15` }}
              >
                <metric.icon className="h-6 w-6" style={{ color: metric.color }} />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1" data-testid={`text-engagement-value-${index}`}>{metric.value}</p>
              <p className="text-xs text-[#a59ecb] mb-2">{metric.label}</p>
              <span 
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${metric.color}15`, color: metric.color }}
              >
                {metric.change}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden"
            data-testid="card-customer-journey"
          >
            <div className="px-6 py-4 border-b border-[#1f1f35] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[#7cffd4]" />
                <span className="font-medium text-white">Customer Journey Funnel</span>
              </div>
              <Badge className="bg-[#1a1a2e] text-[#a59ecb] border-[#2a2a45]">Last 30 days</Badge>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {customerJourney.map((stage, index) => (
                  <div key={stage.stage} data-testid={`row-journey-stage-${index}`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-sm font-medium text-white">{stage.stage}</span>
                      <span className="text-sm text-[#a59ecb]">{stage.count.toLocaleString()}</span>
                    </div>
                    <div className="h-3 bg-[#1a1a2e] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stage.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: stage.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45]" data-testid="card-ai-insight">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-[#a78bfa]" />
                  <span className="text-sm font-medium text-white">AI Insight</span>
                </div>
                <p className="text-sm text-[#a59ecb]">
                  Your consideration-to-decision rate is 12% below industry average. 
                  Consider adding product demos or case studies to improve conversion.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden"
            data-testid="card-recent-interactions"
          >
            <div className="px-6 py-4 border-b border-[#1f1f35] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-[#a78bfa]" />
                <span className="font-medium text-white">Recent Interactions</span>
              </div>
              <span className="text-xs text-[#7cffd4]">Live</span>
            </div>
            
            <div className="p-4">
              <div className="space-y-3">
                {recentInteractions.map((interaction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45] flex flex-wrap items-center gap-4"
                    data-testid={`card-interaction-${index}`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${
                      interaction.sentiment === 'positive' ? 'bg-[#7cffd4]/20 text-[#7cffd4]' :
                      interaction.sentiment === 'negative' ? 'bg-[#ff805d]/20 text-[#ff805d]' :
                      'bg-[#a78bfa]/20 text-[#a78bfa]'
                    }`}>
                      {interaction.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white text-sm truncate" data-testid={`text-interaction-name-${index}`}>{interaction.name}</p>
                      <p className="text-xs text-[#a59ecb] truncate">{interaction.action}</p>
                    </div>
                    <span className="text-xs text-[#a59ecb] shrink-0">{interaction.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
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
              <h3 className="text-lg font-semibold text-white mb-2" data-testid={`text-engagement-feature-title-${index}`}>{feature.title}</h3>
              <p className="text-sm text-[#a59ecb] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-[#7cffd4]/10 to-[#6b4cff]/10 border border-[#7cffd4]/20"
          data-testid="card-engagement-cta"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2" data-testid="text-engagement-cta-title">Turn customers into advocates</h3>
              <p className="text-[#a59ecb]">Complete engagement platform to build lasting customer relationships.</p>
            </div>
            <Button 
              className="bg-[#7cffd4] hover:bg-[#7cffd4]/90 text-[#030014] shrink-0"
              data-testid="button-engagement-demo"
            >
              See It In Action
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {capabilities.map((capability, index) => (
              <div key={capability} className="flex items-center gap-2" data-testid={`text-engagement-capability-${index}`}>
                <CheckCircle2 className="h-4 w-4 text-[#7cffd4] shrink-0" />
                <span className="text-sm text-[#a59ecb]">{capability}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
