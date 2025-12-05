import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play, 
  Phone,
  MessageSquare,
  Mail,
  Users,
  Clock,
  TrendingUp,
  CheckCircle2,
  Bell,
  Zap
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

// Floating notification chips data
const floatingChips = [
  { 
    text: "Call connected", 
    detail: "John Smith", 
    icon: Phone, 
    color: "#7CFD98",
    position: { top: "8%", right: "5%" }
  },
  { 
    text: "WhatsApp sent", 
    detail: "Quote Bronze Plus", 
    icon: SiWhatsapp, 
    color: "#25D366",
    position: { top: "25%", right: "-8%" }
  },
  { 
    text: "Renewal reminder", 
    detail: "SMS sent", 
    icon: MessageSquare, 
    color: "#6B8CFF",
    position: { bottom: "30%", right: "-5%" }
  },
  { 
    text: "Agent Sarah", 
    detail: "Available", 
    icon: Users, 
    color: "#7CFD98",
    position: { bottom: "10%", right: "10%" }
  },
  { 
    text: "New lead", 
    detail: "High priority", 
    icon: Bell, 
    color: "#FF805D",
    position: { top: "45%", left: "-12%" }
  },
  { 
    text: "Deal closed", 
    detail: "$4,500", 
    icon: CheckCircle2, 
    color: "#7CFD98",
    position: { bottom: "20%", left: "-8%" }
  },
];

// Dashboard mock data
const dashboardLeads = [
  { name: "Michael Brown", status: "Hot", value: "$2,400", time: "2m ago" },
  { name: "Sarah Johnson", status: "Warm", value: "$1,850", time: "5m ago" },
  { name: "David Wilson", status: "New", value: "$3,200", time: "8m ago" },
  { name: "Emily Davis", status: "Hot", value: "$4,100", time: "12m ago" },
];

// Floating chip component with animation
function FloatingChip({ 
  text, 
  detail, 
  icon: Icon, 
  color, 
  position, 
  delay 
}: { 
  text: string; 
  detail: string; 
  icon: React.ElementType; 
  color: string; 
  position: { top?: string; bottom?: string; left?: string; right?: string };
  delay: number;
}) {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 400);
    }, 4000 + delay * 1000);
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div 
      className="absolute z-20 transition-all duration-500 ease-out animate-float-chip"
      style={{ 
        ...position,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(10px)',
        animationDelay: `${delay * 0.3}s`
      }}
    >
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl whitespace-nowrap">
        <div 
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="w-4 h-4" style={{ color }} />
        </div>
        <div>
          <p className="text-sm font-medium text-white">{text}</p>
          <p className="text-xs text-white/60">{detail}</p>
        </div>
        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }} />
      </div>
    </div>
  );
}

// Glass Dashboard Card
function GlassDashboard() {
  const [activeTab, setActiveTab] = useState<'leads' | 'calls' | 'messages'>('leads');
  
  return (
    <div className="relative w-full max-w-lg">
      {/* Main dashboard card */}
      <div className="relative rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-[#7CFD98] animate-pulse" />
            <span className="text-xs text-white/70">Live</span>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-1 px-4 py-3 border-b border-white/5">
          {(['leads', 'calls', 'messages'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab 
                  ? 'bg-[#6B8CFF]/20 text-[#6B8CFF]' 
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className="p-4 space-y-2">
          {dashboardLeads.map((lead, i) => (
            <div 
              key={i}
              className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6B8CFF] to-[#7E4EF2] flex items-center justify-center text-white font-medium text-sm">
                  {lead.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{lead.name}</p>
                  <p className="text-xs text-white/50">{lead.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  lead.status === 'Hot' ? 'bg-[#FF805D]/20 text-[#FF805D]' :
                  lead.status === 'Warm' ? 'bg-[#FFB347]/20 text-[#FFB347]' :
                  'bg-[#6B8CFF]/20 text-[#6B8CFF]'
                }`}>
                  {lead.status}
                </span>
                <span className="text-sm font-semibold text-[#7CFD98]">{lead.value}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer stats */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-white/5 bg-white/5">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#7CFD98]" />
            <span className="text-sm text-white/70">+24% this week</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-white/50" />
            <span className="text-sm text-white/50">Updated just now</span>
          </div>
        </div>
      </div>
      
      {/* Floating chips around the dashboard */}
      {floatingChips.map((chip, i) => (
        <FloatingChip key={i} {...chip} delay={i} />
      ))}
      
      {/* Connection lines (subtle) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7CFD98" stopOpacity="0" />
            <stop offset="50%" stopColor="#7CFD98" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7CFD98" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Deep gradient background - petrol blue to purple */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1a1a3e] to-[#2d1b4e]" />
      
      {/* Soft blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#6B8CFF]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#7E4EF2]/25 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#7CFD98]/10 rounded-full blur-[80px]" />
      
      {/* Subtle grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left column - Text content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-8 animate-fade-up"
            >
              <Zap className="h-4 w-4 text-[#7CFD98]" />
              <span className="text-white/90">Command Center for Sales Teams</span>
            </div>
            
            {/* Headline */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
              data-testid="text-hero-headline"
            >
              <span className="text-white">Your entire sales operation,</span>
              <br />
              <span className="bg-gradient-to-r from-[#7CFD98] via-[#6B8CFF] to-[#7E4EF2] bg-clip-text text-transparent">
                in one panel.
              </span>
            </h1>
            
            <p 
              className="text-lg sm:text-xl text-white/60 max-w-xl mb-10 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.2s' }}
              data-testid="text-hero-subheadline"
            >
              CRM, calls, SMS, WhatsApp & email in real-time. 
              Fewer tabs, more deals closed.
            </p>
            
            {/* CTA buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Button 
                size="lg"
                className="rounded-full px-8 h-14 text-lg gap-2 bg-[#7CFD98] hover:bg-[#6de889] text-slate-900 font-semibold border-0 shadow-lg shadow-[#7CFD98]/25"
                data-testid="button-hero-start"
              >
                Try Live Panel
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-lg gap-2 bg-white/5 hover:bg-white/10 border-white/20 text-white"
                data-testid="button-hero-demo"
              >
                <Play className="h-5 w-5" />
                3-min Tour
              </Button>
            </div>
            
            {/* Stats row */}
            <div 
              className="flex flex-wrap gap-10 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-white">+120K</p>
                <p className="text-sm text-white/50">Calls / month</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-[#7CFD98]">35%</p>
                <p className="text-sm text-white/50">More closes in 60 days</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-white">-48%</p>
                <p className="text-sm text-white/50">Agent idle time</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Glass Dashboard */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center py-8 lg:py-0">
            <GlassDashboard />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent" />
    </section>
  );
}
