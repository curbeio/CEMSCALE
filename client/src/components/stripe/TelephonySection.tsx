import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  PhoneCall, 
  PhoneIncoming, 
  PhoneOutgoing,
  Headphones,
  Mic,
  Volume2,
  BarChart3,
  Clock,
  Users,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
  Pause,
  Radio
} from "lucide-react";
import { motion } from "framer-motion";

const telephonyFeatures = [
  {
    icon: PhoneCall,
    title: "Cloud PBX",
    description: "Enterprise-grade virtual phone system with unlimited extensions, auto-attendant, and intelligent call routing that adapts to your team's availability.",
  },
  {
    icon: Headphones,
    title: "Call Recording & Transcription",
    description: "AI-powered call recording with automatic transcription, sentiment analysis, and keyword extraction for quality assurance and training.",
  },
  {
    icon: Radio,
    title: "Interactive Voice Response",
    description: "Customizable IVR menus with natural language processing. Let customers navigate using voice commands or keypad inputs.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Live dashboards showing call volume, wait times, agent performance, and customer satisfaction scores updated every second.",
  },
];

const callMetrics = [
  { label: "Average Handle Time", value: "4:32", change: "-12%", positive: true },
  { label: "First Call Resolution", value: "87%", change: "+8%", positive: true },
  { label: "Customer Satisfaction", value: "4.8/5", change: "+0.3", positive: true },
  { label: "Calls per Hour", value: "24", change: "+15%", positive: true },
];

const callCapabilities = [
  "Unlimited domestic & international calls",
  "Number porting from any carrier",
  "Virtual numbers in 100+ countries",
  "SMS & MMS messaging included",
  "Voicemail-to-email transcription",
  "Call whisper & barge for training",
  "Power dialer for outbound campaigns",
  "Predictive dialer with AI pacing",
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
            Cloud Telephony
            <span className="block bg-gradient-to-r from-[#a78bfa] to-[#6b4cff] bg-clip-text text-transparent">
              Built for Scale
            </span>
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-3xl mx-auto" data-testid="text-telephony-description">
            Transform your business communications with enterprise-grade cloud telephony. 
            Crystal-clear calls, intelligent routing, and AI-powered insights—all in one platform.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {telephonyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-[#0a0a1a]/60 border border-[#1f1f35] hover:border-[#a78bfa]/30 transition-colors"
                  data-testid={`card-telephony-feature-${index}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/10 flex items-center justify-center shrink-0">
                    <feature.icon className="h-6 w-6 text-[#a78bfa]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
                    <p className="text-[#a59ecb] text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden" data-testid="card-call-dashboard">
              <div className="px-4 py-3 border-b border-[#1f1f35] flex flex-wrap items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-xs text-[#a59ecb] ml-2">Live Call Dashboard</span>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#6b4cff] flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Active Calls</p>
                      <p className="text-2xl font-bold text-[#7cffd4]" data-testid="text-active-calls">47</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="px-3 py-1.5 rounded-lg bg-[#7cffd4]/10 text-[#7cffd4] text-sm font-medium flex items-center gap-1.5" data-testid="text-incoming-calls">
                      <PhoneIncoming className="h-4 w-4" />
                      32
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-[#a78bfa]/10 text-[#a78bfa] text-sm font-medium flex items-center gap-1.5" data-testid="text-outgoing-calls">
                      <PhoneOutgoing className="h-4 w-4" />
                      15
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {callMetrics.map((metric, index) => (
                    <div key={metric.label} className="p-3 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]" data-testid={`card-metric-${index}`}>
                      <p className="text-xs text-[#a59ecb] mb-1">{metric.label}</p>
                      <div className="flex flex-wrap items-end justify-between gap-1">
                        <span className="text-lg font-semibold text-white" data-testid={`text-metric-value-${index}`}>{metric.value}</span>
                        <span className={`text-xs font-medium ${metric.positive ? 'text-[#7cffd4]' : 'text-[#ff805d]'}`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-[#a78bfa]/10 to-[#6b4cff]/10 border border-[#a78bfa]/20" data-testid="card-live-call">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Mic className="h-4 w-4 text-[#a78bfa]" />
                      <span className="text-sm font-medium text-white">Live Call - Sarah M.</span>
                    </div>
                    <span className="text-xs text-[#7cffd4] font-mono" data-testid="text-call-duration">03:24</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex-1 h-8 bg-[#1a1a2e] rounded-lg overflow-hidden flex items-center gap-0.5 px-2">
                      {[...Array(40)].map((_, i) => (
                        <div 
                          key={i} 
                          className="w-1 bg-[#a78bfa] rounded-full"
                          style={{ 
                            height: `${Math.random() * 100}%`,
                            opacity: 0.3 + Math.random() * 0.7
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button size="icon" variant="ghost" className="text-[#a59ecb]" data-testid="button-volume">
                      <Volume2 className="h-4 w-4" />
                    </Button>
                    <Button size="icon" className="bg-[#a78bfa] hover:bg-[#a78bfa]/90" data-testid="button-pause">
                      <Pause className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="ghost" className="text-[#a59ecb]" data-testid="button-headphones">
                      <Headphones className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35]" data-testid="card-global-coverage">
            <div className="w-12 h-12 rounded-xl bg-[#7cffd4]/10 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-[#7cffd4]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Global Coverage</h3>
            <p className="text-[#a59ecb] text-sm mb-4">
              Local phone numbers in 100+ countries. Establish local presence anywhere in the world instantly.
            </p>
            <div className="flex flex-wrap gap-2">
              {['US', 'UK', 'DE', 'FR', 'ES', 'MX', 'BR', '+93'].map((country) => (
                <span key={country} className="px-2 py-1 rounded bg-[#1a1a2e] text-xs text-[#a59ecb]">
                  {country}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35]" data-testid="card-instant-setup">
            <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-[#a78bfa]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Instant Setup</h3>
            <p className="text-[#a59ecb] text-sm mb-4">
              Get your phone system running in minutes. No hardware, no technicians, no waiting.
            </p>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-sm text-[#a59ecb]">
                <Clock className="h-4 w-4 text-[#7cffd4]" />
                <span>5 min average setup time</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-[#a59ecb]">
                <Users className="h-4 w-4 text-[#7cffd4]" />
                <span>Unlimited users & extensions</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35]" data-testid="card-enterprise-security">
            <div className="w-12 h-12 rounded-xl bg-[#6b4cff]/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-[#6b4cff]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
            <p className="text-[#a59ecb] text-sm mb-4">
              HIPAA, SOC 2, and GDPR compliant. End-to-end encryption for all calls and recordings.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded bg-[#6b4cff]/10 text-xs text-[#6b4cff] font-medium">HIPAA</span>
              <span className="px-2 py-1 rounded bg-[#6b4cff]/10 text-xs text-[#6b4cff] font-medium">SOC 2</span>
              <span className="px-2 py-1 rounded bg-[#6b4cff]/10 text-xs text-[#6b4cff] font-medium">GDPR</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-[#a78bfa]/10 to-[#6b4cff]/10 border border-[#a78bfa]/20"
          data-testid="card-telephony-cta"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2" data-testid="text-telephony-cta-title">Everything you need for modern telephony</h3>
              <p className="text-[#a59ecb]">Full-featured cloud phone system with AI-powered insights.</p>
            </div>
            <Button 
              className="bg-[#a78bfa] hover:bg-[#a78bfa]/90 text-white shrink-0"
              data-testid="button-telephony-demo"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {callCapabilities.map((capability, index) => (
              <div key={capability} className="flex items-center gap-2" data-testid={`text-capability-${index}`}>
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
