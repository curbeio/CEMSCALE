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
  Zap,
  Headphones,
  BarChart3,
  Circle
} from "lucide-react";
import { SiWhatsapp, SiImessage } from "react-icons/si";

// Lead data for the dashboard
const leadsData = [
  { name: "Michael Brown", status: "Hot", channel: "phone", value: "$2,400", time: "2m" },
  { name: "Sarah Johnson", status: "Follow-up", channel: "whatsapp", value: "$1,850", time: "5m" },
  { name: "David Wilson", status: "New", channel: "sms", value: "$3,200", time: "8m" },
  { name: "Emily Davis", status: "Quoted", channel: "imessage", value: "$4,100", time: "12m" },
  { name: "James Miller", status: "Hot", channel: "phone", value: "$2,900", time: "15m" },
];

// Channel icon component
function ChannelIcon({ channel }: { channel: string }) {
  switch (channel) {
    case 'phone':
      return <Phone className="w-3.5 h-3.5 text-[#6B8CFF]" />;
    case 'whatsapp':
      return <SiWhatsapp className="w-3.5 h-3.5 text-[#25D366]" />;
    case 'sms':
      return <MessageSquare className="w-3.5 h-3.5 text-[#7CFD98]" />;
    case 'imessage':
      return <SiImessage className="w-3.5 h-3.5 text-[#0A84FF]" />;
    default:
      return <Mail className="w-3.5 h-3.5 text-white/50" />;
  }
}

// Mini activity chart
function ActivityChart() {
  const data = [35, 52, 48, 65, 58, 72, 68, 85, 78, 92, 88, 95];
  const max = Math.max(...data);
  
  return (
    <div className="flex items-end gap-1 h-12">
      {data.map((value, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-[#6B8CFF] to-[#7CFD98] transition-all"
          style={{ height: `${(value / max) * 100}%`, opacity: 0.4 + (i / data.length) * 0.6 }}
        />
      ))}
    </div>
  );
}

// Floating chip with connection line
function FloatingChip({ 
  text, 
  detail, 
  icon: Icon, 
  color, 
  position,
  connectionAnchor,
  delay 
}: { 
  text: string; 
  detail: string; 
  icon: React.ElementType; 
  color: string; 
  position: React.CSSProperties;
  connectionAnchor?: { x: string; y: string };
  delay: number;
}) {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 500);
    }, 5000 + delay * 800);
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <>
      <div 
        className="absolute z-30 transition-all duration-500 ease-out animate-float-chip"
        style={{ 
          ...position,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.95)',
          animationDelay: `${delay * 0.4}s`
        }}
      >
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl whitespace-nowrap">
          <div 
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon className="w-3.5 h-3.5" style={{ color }} />
          </div>
          <div>
            <p className="text-xs font-medium text-white">{text}</p>
            <p className="text-[10px] text-white/50">{detail}</p>
          </div>
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: color }} />
        </div>
      </div>
    </>
  );
}

// Real Dashboard Component
function RealDashboard() {
  const [callsInQueue, setCallsInQueue] = useState(12);
  const [agentsOnline, setAgentsOnline] = useState(8);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCallsInQueue(prev => Math.max(5, prev + Math.floor(Math.random() * 5) - 2));
      setAgentsOnline(prev => Math.max(4, Math.min(12, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[520px]">
      {/* Main dashboard card */}
      <div className="relative rounded-2xl bg-[#0d1520]/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
        
        {/* Browser header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 mx-4">
            <div className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-lg bg-white/5 max-w-[200px] mx-auto">
              <Circle className="w-2.5 h-2.5 text-[#7CFD98] fill-[#7CFD98]" />
              <span className="text-[11px] text-white/60">dashboard.cemscale.com</span>
            </div>
          </div>
          <div className="w-16" />
        </div>
        
        {/* Dashboard content */}
        <div className="p-4 space-y-4">
          
          {/* Top stats row */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Headphones className="w-4 h-4 text-[#6B8CFF]" />
                <span className="text-[10px] text-white/50 uppercase tracking-wider">Agents</span>
              </div>
              <p className="text-xl font-bold text-white">{agentsOnline}</p>
              <p className="text-[10px] text-[#7CFD98]">online</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Phone className="w-4 h-4 text-[#7E4EF2]" />
                <span className="text-[10px] text-white/50 uppercase tracking-wider">Queue</span>
              </div>
              <p className="text-xl font-bold text-white">{callsInQueue}</p>
              <p className="text-[10px] text-[#FFB347]">waiting</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <BarChart3 className="w-4 h-4 text-[#7CFD98]" />
                <span className="text-[10px] text-white/50 uppercase tracking-wider">SLA</span>
              </div>
              <p className="text-xl font-bold text-[#7CFD98]">94%</p>
              <p className="text-[10px] text-white/50">target: 90%</p>
            </div>
          </div>
          
          {/* Leads list */}
          <div className="rounded-xl bg-white/5 border border-white/5 overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/5">
              <span className="text-xs font-medium text-white/70">Recent Leads</span>
              <span className="text-[10px] text-[#7CFD98]">Live</span>
            </div>
            <div className="divide-y divide-white/5">
              {leadsData.slice(0, 4).map((lead, i) => (
                <div key={i} className="flex items-center justify-between px-3 py-2.5 hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6B8CFF]/30 to-[#7E4EF2]/30 flex items-center justify-center text-white text-xs font-medium">
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm text-white font-medium">{lead.name}</p>
                      <div className="flex items-center gap-2">
                        <ChannelIcon channel={lead.channel} />
                        <span className="text-[10px] text-white/40">{lead.time} ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                      lead.status === 'Hot' ? 'bg-[#FF805D]/20 text-[#FF805D]' :
                      lead.status === 'New' ? 'bg-[#6B8CFF]/20 text-[#6B8CFF]' :
                      lead.status === 'Quoted' ? 'bg-[#7CFD98]/20 text-[#7CFD98]' :
                      'bg-[#FFB347]/20 text-[#FFB347]'
                    }`}>
                      {lead.status}
                    </span>
                    <span className="text-sm font-semibold text-white">{lead.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Activity chart */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-white/70">Activity Today</span>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-[#7CFD98]" />
                <span className="text-[10px] text-[#7CFD98]">+24%</span>
              </div>
            </div>
            <ActivityChart />
          </div>
        </div>
      </div>
      
      {/* Floating notification chips */}
      <FloatingChip
        text="Call connected"
        detail="Juan Perez · Agent Ana"
        icon={Phone}
        color="#7CFD98"
        position={{ top: '-20px', right: '-60px' }}
        delay={0}
      />
      <FloatingChip
        text="WhatsApp sent"
        detail="Quote Plan Bronze"
        icon={SiWhatsapp}
        color="#25D366"
        position={{ top: '80px', right: '-80px' }}
        delay={1}
      />
      <FloatingChip
        text="Renewal reminder"
        detail="SMS sent"
        icon={MessageSquare}
        color="#6B8CFF"
        position={{ bottom: '100px', right: '-70px' }}
        delay={2}
      />
      <FloatingChip
        text="New lead"
        detail="Webform · High intent"
        icon={Users}
        color="#FF805D"
        position={{ top: '40px', left: '-80px' }}
        delay={3}
      />
      <FloatingChip
        text="Deal closed"
        detail="$4,500 · Auto policy"
        icon={CheckCircle2}
        color="#7CFD98"
        position={{ bottom: '60px', left: '-70px' }}
        delay={4}
      />
      
      {/* Subtle connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7CFD98" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7CFD98" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#6B8CFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6B8CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Right side connections */}
        <line x1="100%" y1="10%" x2="115%" y2="0%" stroke="url(#lineGradient1)" strokeWidth="1" />
        <line x1="100%" y1="30%" x2="120%" y2="25%" stroke="url(#lineGradient1)" strokeWidth="1" />
        <line x1="100%" y1="70%" x2="115%" y2="75%" stroke="url(#lineGradient1)" strokeWidth="1" />
        {/* Left side connections */}
        <line x1="0%" y1="20%" x2="-15%" y2="15%" stroke="url(#lineGradient2)" strokeWidth="1" />
        <line x1="0%" y1="80%" x2="-12%" y2="85%" stroke="url(#lineGradient2)" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#12203a] to-[#1a1a3e]" />
      
      {/* Soft blobs - subtle */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#6B8CFF]/15 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#7E4EF2]/15 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[#7CFD98]/8 rounded-full blur-[100px]" />
      
      {/* Subtle grain */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left column - Text */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm mb-8 animate-fade-up">
              <Zap className="h-3.5 w-3.5 text-[#7CFD98]" />
              <span className="text-white/70">Command Center for Sales</span>
            </div>
            
            {/* Headline - clean, no glow */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
              data-testid="text-hero-headline"
            >
              <span className="text-white">Your entire call center</span>
              <br />
              <span className="bg-gradient-to-r from-[#6B8CFF] to-[#7CFD98] bg-clip-text text-transparent">
                in one panel.
              </span>
            </h1>
            
            <p 
              className="text-lg text-white/50 max-w-lg mb-10 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.2s' }}
              data-testid="text-hero-subheadline"
            >
              Centralize CRM, calls, SMS, WhatsApp & iMessage in real-time. 
              Fewer open tabs, more closed deals, focused agents.
            </p>
            
            {/* CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Button 
                size="lg"
                className="rounded-full px-8 h-12 text-base gap-2 bg-[#7CFD98] hover:bg-[#6de889] text-slate-900 font-semibold border-0 shadow-lg shadow-[#7CFD98]/20"
                data-testid="button-hero-start"
              >
                Try Live Panel
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost"
                size="lg"
                className="rounded-full px-8 h-12 text-base gap-2 text-white/70 hover:text-white hover:bg-white/5"
                data-testid="button-hero-demo"
              >
                <Play className="h-4 w-4" />
                3-min Tour
              </Button>
            </div>
            
            {/* Stats */}
            <div 
              className="flex flex-wrap gap-8 lg:gap-12 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-white">+120K</p>
                <p className="text-xs text-white/40">Calls / month</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-[#7CFD98]">35%</p>
                <p className="text-xs text-white/40">More closes in 60 days</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-white">-48%</p>
                <p className="text-xs text-white/40">Agent idle time</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Dashboard */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">
            <RealDashboard />
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1628] to-transparent" />
    </section>
  );
}
