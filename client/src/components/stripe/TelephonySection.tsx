import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Bot,
  MessageSquare,
  Radio,
  ArrowRight,
  CheckCircle2,
  FileAudio,
  BarChart3,
  Shield,
  Languages,
  Globe,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

const telephonyFeatures = [
  {
    icon: Bot,
    title: "AI Outbound Agent",
    description: "Automated follow-up and engagement powered by AI. Scale your outbound workflows without scaling headcount.",
  },
  {
    icon: Phone,
    title: "In-Browser Dialer",
    description: "Streamlined agent operations with a powerful softphone built directly into the platform. No external apps needed.",
  },
  {
    icon: MessageSquare,
    title: "SMS, Voice & WhatsApp",
    description: "Multi-channel messaging sequences—all orchestrated from a single platform for consistent engagement.",
  },
  {
    icon: Radio,
    title: "Real-Time Routing",
    description: "Intelligent call routing based on licenses, skill sets, and language. Every call reaches the right agent instantly.",
  },
];

const additionalCapabilities = [
  { icon: FileAudio, label: "Call Recording" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Shield, label: "Activity Tracking" },
  { icon: Languages, label: "Multi-Language Support" },
];

const platformHighlights = [
  { icon: Globe, label: "Global Coverage", description: "Enterprise-grade infrastructure" },
  { icon: Zap, label: "Instant Setup", description: "Deploy in minutes, not months" },
  { icon: Shield, label: "Enterprise Security", description: "Secure by design" },
];

const outcomes = [
  "Improved response times",
  "Higher call quality and consistency",
  "Built-in activity tracking",
  "Zero technical overhead for your team",
  "Seamless CRM integration",
  "Real-time performance analytics",
];

export function TelephonySection() {
  return (
    <section id="telephony" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden bg-[#030014]" data-testid="section-telephony">
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px]"
          style={{
            background: 'radial-gradient(ellipse at top right, rgba(167, 139, 250, 0.15) 0%, transparent 60%)',
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
          <Badge className="mb-4 bg-[#a78bfa]/20 text-[#a78bfa] border-[#a78bfa]/30" data-testid="badge-telephony">
            Integrated Telephony
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white" data-testid="text-telephony-title">
            Enterprise-Grade Voice, SMS
            <span className="block bg-gradient-to-r from-[#a78bfa] to-[#6b4cff] bg-clip-text text-transparent">
              and WhatsApp Communications
            </span>
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-3xl mx-auto" data-testid="text-telephony-description">
            CEMSCALE provides your team with an enterprise-grade communications stack—including 
            AI outbound calling and dynamic routing—directly inside the platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {telephonyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35] hover:border-[#a78bfa]/30 transition-colors"
              data-testid={`card-telephony-feature-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-[#a78bfa]" />
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
            data-testid="card-platform-highlights"
          >
            <div className="px-6 py-4 border-b border-[#1f1f35]">
              <span className="font-medium text-white">Platform Highlights</span>
            </div>
            <div className="p-4 space-y-3">
              {platformHighlights.map((highlight, index) => (
                <div 
                  key={highlight.label}
                  className="p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45] flex flex-wrap items-center justify-between gap-2"
                  data-testid={`card-highlight-${index}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#7cffd4]/10 flex items-center justify-center shrink-0">
                      <highlight.icon className="h-5 w-5 text-[#7cffd4]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{highlight.label}</p>
                      <p className="text-sm text-[#a59ecb]">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden"
            data-testid="card-capabilities"
          >
            <div className="px-6 py-4 border-b border-[#1f1f35]">
              <span className="font-medium text-white">Additional Capabilities</span>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                {additionalCapabilities.map((capability, index) => (
                  <div 
                    key={capability.label}
                    className="p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45] flex items-center gap-3"
                    data-testid={`card-capability-${index}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#a78bfa]/10 flex items-center justify-center shrink-0">
                      <capability.icon className="h-5 w-5 text-[#a78bfa]" />
                    </div>
                    <span className="text-sm text-white">{capability.label}</span>
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
          className="p-8 rounded-2xl bg-gradient-to-r from-[#a78bfa]/10 to-[#6b4cff]/10 border border-[#a78bfa]/20"
          data-testid="card-telephony-cta"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2" data-testid="text-telephony-cta-title">
                A Fully Integrated Communication Engine
              </h3>
              <p className="text-[#a59ecb]">
                Improve response times, call quality, and team productivity—all from a single platform.
              </p>
            </div>
            <Button 
              className="bg-[#a78bfa] hover:bg-[#a78bfa]/90 text-white shrink-0"
              data-testid="button-telephony-demo"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((outcome, index) => (
              <div key={outcome} className="flex items-center gap-2" data-testid={`text-outcome-${index}`}>
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
