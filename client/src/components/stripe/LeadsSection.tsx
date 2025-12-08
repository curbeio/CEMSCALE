import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  UserPlus,
  Zap,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Star,
  Globe,
  Layers
} from "lucide-react";
import { motion } from "framer-motion";

const leadSources = [
  { name: "Website Forms", leads: 4823, percentage: 38, color: "#7cffd4" },
  { name: "LinkedIn Ads", leads: 2847, percentage: 22, color: "#6b4cff" },
  { name: "Google Ads", leads: 2156, percentage: 17, color: "#a78bfa" },
  { name: "Referrals", leads: 1534, percentage: 12, color: "#ff805d" },
  { name: "Cold Outreach", leads: 1423, percentage: 11, color: "#f0abfc" },
];

const leadScoring = [
  { range: "90-100", label: "Hot", count: 847, color: "#7cffd4", description: "Ready to buy" },
  { range: "70-89", label: "Warm", count: 2341, color: "#a78bfa", description: "High interest" },
  { range: "50-69", label: "Nurture", count: 4562, color: "#6b4cff", description: "Needs education" },
  { range: "0-49", label: "Cold", count: 5033, color: "#a59ecb", description: "Early stage" },
];

const recentLeads = [
  { 
    name: "TechCorp Inc.", 
    contact: "John Smith",
    title: "VP of Sales",
    score: 94,
    value: "$125,000",
    source: "Demo Request",
    time: "5 min ago"
  },
  { 
    name: "Global Solutions", 
    contact: "Emily Davis",
    title: "Marketing Director",
    score: 87,
    value: "$85,000",
    source: "Webinar",
    time: "23 min ago"
  },
  { 
    name: "StartupXYZ", 
    contact: "Mike Johnson",
    title: "CEO",
    score: 76,
    value: "$45,000",
    source: "Content Download",
    time: "1 hour ago"
  },
];

const leadFeatures = [
  {
    icon: Target,
    title: "Smart Lead Capture",
    description: "Capture leads from any source—web forms, landing pages, chatbots, social media, and offline events. All unified in one system.",
  },
  {
    icon: Sparkles,
    title: "AI Lead Scoring",
    description: "Machine learning algorithms analyze 50+ signals to score leads automatically. Focus on opportunities most likely to convert.",
  },
  {
    icon: Zap,
    title: "Instant Lead Routing",
    description: "Route leads to the right sales rep instantly based on territory, expertise, or round-robin. No lead left waiting.",
  },
  {
    icon: TrendingUp,
    title: "Lead Nurturing",
    description: "Automated drip campaigns that educate and engage leads until they're ready to buy. Personalized at scale.",
  },
];

const pipelineStages = [
  { name: "New", count: 234, value: "$2.3M" },
  { name: "Contacted", count: 187, value: "$1.8M" },
  { name: "Qualified", count: 124, value: "$1.4M" },
  { name: "Proposal", count: 67, value: "$890K" },
  { name: "Negotiation", count: 34, value: "$520K" },
  { name: "Closed Won", count: 28, value: "$445K" },
];

const capabilities = [
  "Unlimited custom fields and properties",
  "Duplicate detection and merging",
  "Lead enrichment from 50+ data sources",
  "Custom scoring models and rules",
  "Automated follow-up sequences",
  "Real-time Slack/Teams notifications",
  "Territory and assignment rules",
  "Advanced filtering and saved views",
];

export function LeadsSection() {
  return (
    <section id="leads" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden bg-[#030014]" data-testid="section-leads">
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/3 right-0 w-[700px] h-[700px]"
          style={{
            background: 'radial-gradient(ellipse at right, rgba(255, 128, 93, 0.1) 0%, transparent 60%)',
          }}
        />
        <div 
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at bottom left, rgba(107, 76, 255, 0.08) 0%, transparent 60%)',
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
          <Badge className="mb-4 bg-[#ff805d]/20 text-[#ff805d] border-[#ff805d]/30" data-testid="badge-leads">
            Leads
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white" data-testid="text-leads-title">
            Lead Management
            <span className="block bg-gradient-to-r from-[#ff805d] to-[#a78bfa] bg-clip-text text-transparent">
              That Converts
            </span>
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-3xl mx-auto" data-testid="text-leads-description">
            Capture, score, and nurture leads with AI-powered intelligence. 
            From first touch to closed deal, never lose track of an opportunity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden"
            data-testid="card-sales-pipeline"
          >
            <div className="px-6 py-4 border-b border-[#1f1f35] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-[#ff805d]" />
                <span className="font-medium text-white">Sales Pipeline</span>
              </div>
              <Badge className="bg-[#7cffd4]/10 text-[#7cffd4] border-[#7cffd4]/20" data-testid="badge-pipeline-total">$7.4M Total</Badge>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 pb-4">
                {pipelineStages.map((stage, index) => (
                  <motion.div
                    key={stage.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex-1 min-w-[100px] p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45]"
                    data-testid={`card-pipeline-stage-${index}`}
                  >
                    <p className="text-xs text-[#a59ecb] mb-1">{stage.name}</p>
                    <p className="text-xl font-bold text-white" data-testid={`text-stage-count-${index}`}>{stage.count}</p>
                    <p className="text-sm text-[#7cffd4]">{stage.value}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-[#ff805d]/10 to-transparent border border-[#ff805d]/20" data-testid="card-pipeline-velocity">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ff805d]/20 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-[#ff805d]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Pipeline Velocity</p>
                      <p className="text-sm text-[#a59ecb]">Average days to close</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white" data-testid="text-velocity-days">23 days</p>
                    <p className="text-sm text-[#7cffd4]">-5 days vs last month</p>
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
            className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden"
            data-testid="card-lead-scoring"
          >
            <div className="px-6 py-4 border-b border-[#1f1f35]">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-[#a78bfa]" />
                <span className="font-medium text-white">Lead Scoring</span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="space-y-3">
                {leadScoring.map((tier, index) => (
                  <div 
                    key={tier.label}
                    className="p-3 rounded-xl bg-[#1a1a2e] border border-[#2a2a45]"
                    data-testid={`card-scoring-tier-${index}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: tier.color }}
                        />
                        <span className="font-medium text-white text-sm">{tier.label}</span>
                      </div>
                      <span className="text-xs text-[#a59ecb]">{tier.range}</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs text-[#a59ecb]">{tier.description}</span>
                      <span className="text-sm font-semibold" style={{ color: tier.color }} data-testid={`text-tier-count-${index}`}>
                        {tier.count.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden"
            data-testid="card-lead-sources"
          >
            <div className="px-6 py-4 border-b border-[#1f1f35] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-[#6b4cff]" />
                <span className="font-medium text-white">Lead Sources</span>
              </div>
              <span className="text-sm text-[#a59ecb]">12,783 total</span>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {leadSources.map((source, index) => (
                  <div key={source.name} data-testid={`row-lead-source-${index}`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-sm text-white">{source.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">{source.leads.toLocaleString()}</span>
                        <span className="text-xs text-[#a59ecb]">{source.percentage}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-[#1a1a2e] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${source.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: source.color }}
                      />
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
            className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden"
            data-testid="card-recent-leads"
          >
            <div className="px-6 py-4 border-b border-[#1f1f35] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <UserPlus className="h-5 w-5 text-[#7cffd4]" />
                <span className="font-medium text-white">Recent Leads</span>
              </div>
              <Badge className="bg-[#7cffd4]/10 text-[#7cffd4] border-[#7cffd4]/20">Live</Badge>
            </div>
            
            <div className="p-4">
              <div className="space-y-3">
                {recentLeads.map((lead, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-[#1a1a2e] border border-[#2a2a45] hover:border-[#ff805d]/30 transition-colors cursor-pointer"
                    data-testid={`card-lead-${index}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <p className="font-medium text-white text-sm" data-testid={`text-lead-company-${index}`}>{lead.name}</p>
                        <p className="text-xs text-[#a59ecb]">{lead.contact} • {lead.title}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        lead.score >= 90 ? 'bg-[#7cffd4]/20 text-[#7cffd4]' :
                        lead.score >= 70 ? 'bg-[#a78bfa]/20 text-[#a78bfa]' :
                        'bg-[#6b4cff]/20 text-[#6b4cff]'
                      }`} data-testid={`badge-lead-score-${index}`}>
                        {lead.score}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm font-semibold text-[#7cffd4]" data-testid={`text-lead-value-${index}`}>{lead.value}</span>
                        <span className="text-xs text-[#a59ecb] bg-[#0a0a1a] px-2 py-0.5 rounded">{lead.source}</span>
                      </div>
                      <span className="text-xs text-[#a59ecb]">{lead.time}</span>
                    </div>
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
          {leadFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#0a0a1a]/60 border border-[#1f1f35] hover:border-[#ff805d]/30 transition-colors"
              data-testid={`card-lead-feature-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#ff805d]/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-[#ff805d]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" data-testid={`text-lead-feature-title-${index}`}>{feature.title}</h3>
              <p className="text-sm text-[#a59ecb] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-[#ff805d]/10 to-[#a78bfa]/10 border border-[#ff805d]/20"
          data-testid="card-leads-cta"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2" data-testid="text-leads-cta-title">Never miss another opportunity</h3>
              <p className="text-[#a59ecb]">Complete lead management from capture to conversion.</p>
            </div>
            <Button 
              className="bg-[#ff805d] hover:bg-[#ff805d]/90 text-white shrink-0"
              data-testid="button-leads-start"
            >
              Start Capturing Leads
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {capabilities.map((capability, index) => (
              <div key={capability} className="flex items-center gap-2" data-testid={`text-leads-capability-${index}`}>
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
