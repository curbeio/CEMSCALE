import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database,
  Phone,
  Mail,
  Users,
  Shield,
  CheckCircle2,
  ArrowRight,
  Building2,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";

const coreCapabilities = [
  {
    icon: Database,
    title: "Intelligent Client Acquisition",
    description: "High-quality, continuously updated, AI-enriched contact data with advanced segmentation and 95%+ verified accuracy.",
  },
  {
    icon: Phone,
    title: "Integrated Telephony",
    description: "Enterprise-grade voice, SMS, and WhatsApp communications directly inside the platform, including AI outbound calling and dynamic routing.",
  },
  {
    icon: Mail,
    title: "Multi-Channel Engagement Automation",
    description: "Email, SMS, social, landing pages, funnels, and AI-generated content synchronized into a cohesive engagement engine.",
  },
  {
    icon: Users,
    title: "Customer Engagement Management",
    description: "Unified CRM, automated workflows, referrals, activity tracking, and lifecycle intelligence purpose-built for insurance and professional services.",
  },
];

const industries = [
  "Insurance",
  "Healthcare",
  "Financial Services",
  "Legal",
  "Tax",
  "Medicare",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden bg-[#030014]" data-testid="section-about">
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(107, 76, 255, 0.08) 0%, transparent 60%)',
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
          <Badge className="mb-4 bg-[#6b4cff]/20 text-[#a78bfa] border-[#6b4cff]/30" data-testid="badge-about">
            About CEMSCALE
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white" data-testid="text-about-title">
            Intelligent Customer Engagement
            <span className="block bg-gradient-to-r from-[#6b4cff] via-[#a78bfa] to-[#7cffd4] bg-clip-text text-transparent">
              For Professional Services
            </span>
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-4xl mx-auto leading-relaxed" data-testid="text-about-description">
            CEMSCALE is an intelligent Customer Engagement Management software platform engineered for professional 
            services—unifying CRM, AI-powered communication, workflow automation, and customer 
            lifecycle management into a single, seamless software ecosystem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="p-8 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35]" data-testid="card-about-main">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#6b4cff]/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-[#6b4cff]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Built for Professional Services</h3>
            </div>
            <p className="text-[#a59ecb] leading-relaxed mb-6">
              Built from the ground up to support insurance, healthcare, financial services, legal, tax, and 
              client-focused organizations, CEMSCALE transforms how agencies acquire, engage, serve, and 
              retain customers. The platform integrates real-time data intelligence, predictive analytics, and 
              enterprise-level automation to deliver a faster, more efficient, and more productive operating model.
            </p>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry, index) => (
                <span 
                  key={industry}
                  className="px-3 py-1.5 rounded-full bg-[#1a1a2e] border border-[#2a2a45] text-sm text-[#a59ecb]"
                  data-testid={`badge-industry-${index}`}
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-[#a78bfa]/5 to-[#7cffd4]/5 border border-[#1f1f35] mb-16"
          data-testid="card-about-unified"
        >
          <p className="text-[#a59ecb] leading-relaxed text-lg">
            At its core, CEMSCALE eliminates the disconnect between engagement, communication, sales, and 
            back-office operations. The result is a unified software environment where every contact, interaction, and 
            workflow is tracked, optimized, and enriched by AI—from first contact to conversion and long-term retention.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-2">CEMSCALE Provides:</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {coreCapabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35]"
              data-testid={`card-capability-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#6b4cff]/10 flex items-center justify-center mb-4">
                <capability.icon className="h-6 w-6 text-[#6b4cff]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" data-testid={`text-capability-title-${index}`}>{capability.title}</h3>
              <p className="text-sm text-[#a59ecb] leading-relaxed">{capability.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35] mb-16"
          data-testid="card-compliance-design"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#7cffd4]/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-[#7cffd4]" />
                </div>
                <h3 className="text-xl font-semibold text-white">Security by Design</h3>
              </div>
              <p className="text-[#a59ecb] leading-relaxed">
                Privacy, data protection, auditability, and governance woven into every touchpoint. CEMSCALE 
                redefines operational efficiency by turning disparate processes into a measurable, automated, 
                and scalable customer engagement strategy.
              </p>
            </div>
            <div className="shrink-0">
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#7cffd4]/10 to-[#6b4cff]/10 border border-[#7cffd4]/20 text-center">
                <Globe className="h-8 w-8 text-[#7cffd4] mx-auto mb-2" />
                <p className="text-sm font-medium text-white">10 to 10,000+ Seats</p>
                <p className="text-xs text-[#a59ecb]">Scales with your business</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center p-8 rounded-2xl bg-gradient-to-r from-[#6b4cff]/10 to-[#7cffd4]/10 border border-[#6b4cff]/20"
          data-testid="card-about-cta"
        >
          <p className="text-2xl sm:text-3xl font-bold text-white mb-2" data-testid="text-about-tagline">
            CEMSCALE
          </p>
          <p className="text-lg text-[#a59ecb] mb-6">
            Where productivity meets intelligent automation.
          </p>
          <Button 
            className="bg-[#6b4cff] hover:bg-[#6b4cff]/90 text-white"
            data-testid="button-about-demo"
          >
            Schedule a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
