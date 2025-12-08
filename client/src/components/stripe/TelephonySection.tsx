import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  PhoneCall, 
  Headphones,
  MessageSquare,
  Mic,
  BarChart3,
  Users,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
  Bot,
  Radio,
  FileAudio,
  Languages
} from "lucide-react";
import { motion } from "framer-motion";

const telephonyCapabilities = [
  {
    icon: Phone,
    title: "In-Browser Dialer",
    description: "Streamlined agent operations with a powerful softphone built directly into the platform. No external apps needed.",
    stat: "Agent Efficiency",
    statValue: "+40%",
  },
  {
    icon: Bot,
    title: "AI Outbound Agent",
    description: "Automated follow-up and outreach powered by AI. Scale your outbound campaigns without scaling headcount.",
    stat: "Call Volume",
    statValue: "10x",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Sequences",
    description: "SMS, Voice, and WhatsApp messaging sequences—all orchestrated from a single platform for consistent engagement.",
    stat: "Response Rate",
    statValue: "85%",
  },
  {
    icon: Radio,
    title: "Real-Time Routing",
    description: "Intelligent call routing based on licenses, skill sets, and language. Every call reaches the right agent instantly.",
    stat: "Route Accuracy",
    statValue: "99%",
  },
];

const additionalFeatures = [
  { icon: FileAudio, label: "Call Recording" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Shield, label: "Compliance Tracking" },
  { icon: Languages, label: "Multi-Language" },
];

const integrationPartners = [
  { name: "Twilio", description: "Enterprise voice & SMS" },
  { name: "Telnyx", description: "Global SIP trunking" },
];

const outcomes = [
  "Improved speed-to-lead response times",
  "Higher call quality and consistency",
  "Built-in compliance tracking",
  "Zero technical overhead for your team",
  "Seamless CRM integration",
  "Real-time performance analytics",
];

const metrics = [
  { label: "Active Calls", value: "127", change: "+18%", positive: true },
  { label: "Avg Handle Time", value: "3:42", change: "-15%", positive: true },
  { label: "First Call Resolution", value: "89%", change: "+7%", positive: true },
  { label: "CSAT Score", value: "4.8", change: "+0.3", positive: true },
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
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at bottom left, rgba(107, 76, 255, 0.1) 0%, transparent 60%)',
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
            Telephony
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white" data-testid="text-telephony-title">
            AI-Enabled Telephony
            <span className="block bg-gradient-to-r from-[#a78bfa] to-[#6b4cff] bg-clip-text text-transparent">
              Integrated Directly Into the Platform
            </span>
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-3xl mx-auto" data-testid="text-telephony-description">
            CEMSCALE seamlessly connects with Twilio or Telnyx to give your team an enterprise-grade 
            communications stack—without any technical overhead.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {telephonyCapabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35] hover:border-[#a78bfa]/30 transition-colors"
              data-testid={`card-telephony-capability-${index}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/10 flex items-center justify-center">
                  <capability.icon className="h-6 w-6 text-[#a78bfa]" />
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
            data-testid="card-live-dashboard"
          >
            <div className="px-6 py-4 border-b border-[#1f1f35] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Headphones className="h-5 w-5 text-[#a78bfa]" />
                <span className="font-medium text-white">Live Communications Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7cffd4] animate-pulse" />
                <span className="text-xs text-[#7cffd4]">Real-time</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {metrics.map((metric, index) => (
                  <div key={metric.label} className="p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45]" data-testid={`card-metric-${index}`}>
                    <p className="text-xs text-[#a59ecb] mb-1">{metric.label}</p>
                    <div className="flex flex-wrap items-end justify-between gap-1">
                      <span className="text-xl font-bold text-white" data-testid={`text-metric-value-${index}`}>{metric.value}</span>
                      <span className={`text-xs font-medium ${metric.positive ? 'text-[#7cffd4]' : 'text-[#ff805d]'}`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-[#a78bfa]/10 to-[#6b4cff]/10 border border-[#a78bfa]/20">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#a78bfa]/20 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-[#a78bfa]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Speed-to-Lead</p>
                      <p className="text-sm text-[#a59ecb]">Average response time</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white" data-testid="text-speed-to-lead">8 seconds</p>
                    <p className="text-sm text-[#7cffd4]">Industry avg: 47 min</p>
                  </div>
                </div>
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
            <div className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden" data-testid="card-integrations">
              <div className="px-6 py-4 border-b border-[#1f1f35]">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-[#6b4cff]" />
                  <span className="font-medium text-white">Integrations</span>
                </div>
              </div>
              <div className="p-4 space-y-3">
                {integrationPartners.map((partner, index) => (
                  <div 
                    key={partner.name}
                    className="p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45] flex flex-wrap items-center justify-between gap-2"
                    data-testid={`card-integration-${index}`}
                  >
                    <div>
                      <p className="font-medium text-white text-sm">{partner.name}</p>
                      <p className="text-xs text-[#a59ecb]">{partner.description}</p>
                    </div>
                    <Badge className="bg-[#7cffd4]/10 text-[#7cffd4] border-[#7cffd4]/20 text-xs">Connected</Badge>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] p-4" data-testid="card-features">
              <p className="text-sm font-medium text-white mb-3">Additional Features</p>
              <div className="grid grid-cols-2 gap-2">
                {additionalFeatures.map((feature, index) => (
                  <div 
                    key={feature.label}
                    className="p-3 rounded-lg bg-[#1a1a2e] border border-[#2a2a45] flex items-center gap-2"
                    data-testid={`card-feature-${index}`}
                  >
                    <feature.icon className="h-4 w-4 text-[#a78bfa]" />
                    <span className="text-xs text-[#a59ecb]">{feature.label}</span>
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
                Improve speed-to-lead, call quality, and compliance—all from a single platform.
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
