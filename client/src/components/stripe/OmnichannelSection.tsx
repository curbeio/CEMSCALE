import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare,
  Mail,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Inbox,
  Sparkles,
  Brain,
  Clock,
  FileText,
  Workflow,
  Bot,
  Heart,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";

const channels = [
  { icon: SiWhatsapp, name: "WhatsApp", color: "#25D366" },
  { icon: SiFacebook, name: "Facebook & Messenger", color: "#1877F2" },
  { icon: SiInstagram, name: "Instagram", color: "#E4405F" },
  { icon: Smartphone, name: "iMessage", color: "#34C759" },
  { icon: MessageSquare, name: "SMS", color: "#a78bfa" },
  { icon: Mail, name: "Email", color: "#6b4cff" },
];

const aiFeatures = [
  {
    icon: Bot,
    title: "Smart Replies & Suggested Responses",
    description: "AI-powered response suggestions help agents reply faster with contextually relevant messages.",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Trigger actions automatically based on customer behavior, message content, or engagement signals.",
  },
  {
    icon: Brain,
    title: "Sentiment & Intent Detection",
    description: "Understand customer emotions and intentions in real-time to prioritize and personalize responses.",
  },
  {
    icon: Clock,
    title: "Follow-Up Reminders",
    description: "Never miss a follow-up. Automated reminders ensure every conversation reaches resolution.",
  },
  {
    icon: FileText,
    title: "Conversation Summarization",
    description: "AI-generated summaries give agents instant context on customer history and key discussion points.",
  },
  {
    icon: Heart,
    title: "Client Nurturing Sequences",
    description: "Automated, personalized nurture workflows keep clients engaged throughout their journey.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Engage Faster",
    description: "Respond in seconds, not hours, with AI-assisted messaging.",
  },
  {
    icon: Users,
    title: "Personalize Communication",
    description: "Every message is tailored based on complete customer context.",
  },
  {
    icon: TrendingUp,
    title: "Increase Retention & Conversion",
    description: "Connected journeys drive higher engagement and loyalty.",
  },
  {
    icon: Workflow,
    title: "Scale Without Increasing Workload",
    description: "Automation handles volume so your team handles relationships.",
  },
];

export function OmnichannelSection() {
  return (
    <section id="omnichannel" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden bg-[#030014]" data-testid="section-omnichannel">
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 right-0 w-[800px] h-[800px]"
          style={{
            background: 'radial-gradient(ellipse at right, rgba(107, 76, 255, 0.12) 0%, transparent 60%)',
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at bottom left, rgba(124, 255, 212, 0.08) 0%, transparent 60%)',
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
          <Badge className="mb-4 bg-[#6b4cff]/20 text-[#a78bfa] border-[#6b4cff]/30" data-testid="badge-omnichannel">
            The All-In-One Engagement CRM
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white" data-testid="text-omnichannel-title">
            More Than a CRM—A Fully Connected
            <span className="block bg-gradient-to-r from-[#6b4cff] via-[#a78bfa] to-[#7cffd4] bg-clip-text text-transparent">
              Customer Engagement Platform
            </span>
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-4xl mx-auto leading-relaxed" data-testid="text-omnichannel-description">
            CEMSCALE helps businesses manage, communicate with, and nurture customers across every major channel. 
            With deep integrations, intelligent automation, and AI-enhanced interactions, no conversation is ever 
            lost and every customer feels supported.
          </p>
        </motion.div>

        {/* Unified Omnichannel Communication */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-white mb-3">Unified Omnichannel Communication</h3>
            <p className="text-[#a59ecb] max-w-2xl mx-auto">
              Connect with customers exactly where they are—without switching platforms. 
              CEMSCALE centralizes communication across:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-5 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35] hover:border-[#a78bfa]/30 transition-colors text-center"
                data-testid={`card-channel-${index}`}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${channel.color}15` }}
                >
                  <channel.icon className="h-6 w-6" style={{ color: channel.color }} />
                </div>
                <p className="text-sm font-medium text-white">{channel.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-[#6b4cff]/10 to-[#7cffd4]/10 border border-[#6b4cff]/20"
            data-testid="card-unified-inbox"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#6b4cff]/20 flex items-center justify-center shrink-0">
                <Inbox className="h-7 w-7 text-[#6b4cff]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">One Unified Inbox & Timeline</h4>
                <p className="text-[#a59ecb]">
                  Every interaction flows into one unified inbox and timeline, giving agents complete 
                  visibility into the customer journey—no scattered conversations, no missing context.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* AI-Powered Productivity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7cffd4]/10 border border-[#7cffd4]/30 text-[#7cffd4] text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              AI-Enhanced
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">AI-Powered Productivity & Engagement</h3>
            <p className="text-[#a59ecb] max-w-2xl mx-auto">
              Each channel is enhanced with AI, allowing your team to focus on meaningful interactions 
              while the system handles the heavy lifting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-5 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35]"
                data-testid={`card-ai-feature-${index}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#7cffd4]/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-[#7cffd4]" />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-[#a59ecb] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Never Lose Track */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35] mb-16 text-center"
          data-testid="card-never-lose-track"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a78bfa]/20 to-[#6b4cff]/20 flex items-center justify-center mx-auto mb-5">
            <Users className="h-8 w-8 text-[#a78bfa]" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3">Never Lose Track of a Customer</h3>
          <p className="text-[#a59ecb] max-w-3xl mx-auto leading-relaxed">
            Because all channels run through CEMSCALE, every message, touchpoint, and update is captured 
            automatically. No scattered conversations, no missing context—just a complete, connected customer history.
          </p>
        </motion.div>

        {/* Built for Retention, Engagement, and Growth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-white mb-3">Built for Retention, Engagement, and Growth</h3>
            <p className="text-[#a59ecb]">CEMSCALE helps you:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35] text-center"
                data-testid={`card-benefit-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#6b4cff]/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-[#6b4cff]" />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-sm text-[#a59ecb]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-[#6b4cff]/10 to-[#7cffd4]/10 border border-[#6b4cff]/20 text-center"
          data-testid="card-omnichannel-cta"
        >
          <h3 className="text-2xl font-semibold text-white mb-3" data-testid="text-omnichannel-cta-title">
            Automate Repetitive Tasks. Nurture Every Relationship.
          </h3>
          <p className="text-[#a59ecb] mb-6 max-w-2xl mx-auto">
            Scale your service without increasing workload. Let CEMSCALE handle the heavy lifting 
            while your team focuses on what matters most—building relationships.
          </p>
          <Button 
            className="bg-[#6b4cff] hover:bg-[#6b4cff]/90 text-white"
            data-testid="button-omnichannel-demo"
          >
            See It In Action
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
