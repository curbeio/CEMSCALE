import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play, 
  Users, 
  Mail, 
  Phone,
  BarChart3,
  Activity,
  Bell,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Circle,
  Zap,
  Globe
} from "lucide-react";

function useLiveCounter(baseValue: number, increment: number = 1, interval: number = 3000) {
  const [value, setValue] = useState(baseValue);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setValue(v => v + increment);
    }, interval);
    return () => clearInterval(timer);
  }, [increment, interval]);
  
  return value;
}

function MiniChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  return (
    <div className="flex items-end gap-0.5 h-8">
      {data.map((value, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm transition-all duration-300"
          style={{
            height: `${((value - min) / range) * 100}%`,
            minHeight: '4px',
            backgroundColor: color,
            opacity: 0.4 + (i / data.length) * 0.6,
          }}
        />
      ))}
    </div>
  );
}

function LiveActivityFeed({ onNewActivity }: { onNewActivity?: () => void }) {
  const [activities, setActivities] = useState([
    { id: 1, type: 'lead', text: 'New lead from LinkedIn', time: '2s ago', icon: Users },
    { id: 2, type: 'email', text: 'Email opened by John D.', time: '15s ago', icon: Mail },
    { id: 3, type: 'call', text: 'Call completed - 4:32', time: '1m ago', icon: Phone },
  ]);

  useEffect(() => {
    const newActivities = [
      { type: 'lead', text: 'New lead from Google Ads', icon: Users },
      { type: 'email', text: 'Campaign sent to 2.4K', icon: Mail },
      { type: 'deal', text: 'Deal closed - $12,500', icon: CheckCircle2 },
      { type: 'call', text: 'Inbound call received', icon: Phone },
    ];
    
    const interval = setInterval(() => {
      const newActivity = newActivities[Math.floor(Math.random() * newActivities.length)];
      setActivities(prev => [
        { ...newActivity, id: Date.now(), time: 'now' },
        ...prev.slice(0, 2).map(a => ({ ...a, time: a.time === 'now' ? '2s ago' : a.time === '2s ago' ? '15s ago' : '1m ago' }))
      ]);
      onNewActivity?.();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [onNewActivity]);

  return (
    <div className="space-y-2">
      {activities.map((activity, i) => (
        <div 
          key={activity.id}
          className={`flex items-center gap-3 p-2 rounded-lg bg-white/5 transition-all duration-500 ${
            i === 0 ? 'animate-fade-up' : ''
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6B8CFF]/20 to-[#7E4EF2]/20 flex items-center justify-center">
            <activity.icon className="w-4 h-4 text-[#6B8CFF]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate">{activity.text}</p>
            <p className="text-xs text-white/50">{activity.time}</p>
          </div>
          {activity.time === 'now' && (
            <span className="w-2 h-2 rounded-full bg-[#7CFD98] animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );
}

function CommandCenterPreview() {
  const leads = useLiveCounter(12847, 1, 5000);
  const calls = useLiveCounter(247, 1, 8000);
  const chartData = [35, 45, 38, 52, 48, 60, 55, 72, 68, 85, 78, 92];
  const [highlight, setHighlight] = useState(false);
  
  const handleNewActivity = () => {
    setHighlight(true);
    setTimeout(() => setHighlight(false), 600);
  };

  return (
    <div 
      className="relative w-full max-w-2xl animate-fade-up"
      style={{ 
        animationDelay: '0.3s',
        animation: 'fade-up 0.6s ease-out 0.3s both, float-gentle 10s ease-in-out infinite',
      }}
    >
      {/* Glow effect behind */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#6B8CFF]/20 via-[#7E4EF2]/20 to-[#7CFD98]/10 rounded-3xl blur-2xl" />
      
      {/* Main dashboard frame */}
      <div className="relative rounded-2xl bg-[#1a1a2e]/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
        
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-3">
            {/* Window controls */}
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
            </div>
            {/* Tabs */}
            <div className="flex items-center gap-1 ml-4">
              <div className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-medium">
                Dashboard
              </div>
              <div className="px-3 py-1.5 rounded-lg text-white/50 text-xs hover:text-white/70 transition-colors">
                Leads
              </div>
              <div className="px-3 py-1.5 rounded-lg text-white/50 text-xs hover:text-white/70 transition-colors">
                Analytics
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Status indicators */}
            <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-[#7CFD98]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7CFD98] animate-pulse" />
              <span className="text-xs text-[#7CFD98]">Synced</span>
            </div>
            {/* Avatar group */}
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6B8CFF] to-[#7E4EF2] border-2 border-[#1a1a2e] flex items-center justify-center text-[10px] text-white font-medium">J</div>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#7CFD98] to-[#4974EA] border-2 border-[#1a1a2e] flex items-center justify-center text-[10px] text-white font-medium">M</div>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF805D] to-[#7E4EF2] border-2 border-[#1a1a2e] flex items-center justify-center text-[10px] text-white font-medium">+3</div>
            </div>
          </div>
        </div>
        
        {/* Dashboard content */}
        <div className="p-4">
          {/* Stats row */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#6B8CFF]/20 flex items-center justify-center">
                  <Users className="w-4 h-4 text-[#6B8CFF]" />
                </div>
                <span className="text-xs text-white/50">Leads</span>
              </div>
              <p className="text-xl font-bold text-white">{leads.toLocaleString()}</p>
              <div className="flex items-center gap-1 text-xs text-[#7CFD98] mt-1">
                <ArrowUpRight className="w-3 h-3" />
                <span>+12%</span>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#7E4EF2]/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#7E4EF2]" />
                </div>
                <span className="text-xs text-white/50">Calls</span>
              </div>
              <p className="text-xl font-bold text-white">{calls}</p>
              <div className="flex items-center gap-1 text-xs text-[#7CFD98] mt-1">
                <ArrowUpRight className="w-3 h-3" />
                <span>+8%</span>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#7CFD98]/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-[#7CFD98]" />
                </div>
                <span className="text-xs text-white/50">Pipeline</span>
              </div>
              <p className="text-xl font-bold text-white">$2.4M</p>
              <div className="flex items-center gap-1 text-xs text-[#7CFD98] mt-1">
                <ArrowUpRight className="w-3 h-3" />
                <span>+24%</span>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#FF805D]/20 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#FF805D]" />
                </div>
                <span className="text-xs text-white/50">Countries</span>
              </div>
              <p className="text-xl font-bold text-white">150+</p>
              <div className="flex items-center gap-1 text-xs text-white/40 mt-1">
                <span>Global reach</span>
              </div>
            </div>
          </div>
          
          {/* Main content grid */}
          <div className="grid grid-cols-5 gap-4">
            {/* Chart section */}
            <div className="col-span-3 bg-white/5 rounded-xl p-4 border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-medium text-white">Conversion Trend</h3>
                  <p className="text-xs text-white/50">Last 30 days</p>
                </div>
                <Badge className="bg-[#7CFD98]/20 text-[#7CFD98] border-0 text-xs">+18.4%</Badge>
              </div>
              <MiniChart data={chartData} color="#6B8CFF" />
              
              {/* Mini bar chart */}
              <div className="flex items-end justify-between gap-1 mt-4 h-16">
                {[65, 45, 78, 52, 88, 62, 95, 70, 85, 58, 92, 75].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 rounded-t transition-all duration-300"
                    style={{ 
                      height: `${h}%`,
                      background: `linear-gradient(to top, #6B8CFF, #7E4EF2)`,
                      opacity: 0.6 + (i / 12) * 0.4,
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Activity feed */}
            <div className={`col-span-2 bg-white/5 rounded-xl p-4 border transition-all duration-300 ${
              highlight ? 'border-[#7CFD98]/30' : 'border-white/5'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#7E4EF2]" />
                  <span className="text-sm font-medium text-white">Live Activity</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#7CFD98] animate-pulse" />
                  <span className="text-xs text-white/50">3 active</span>
                </div>
              </div>
              <LiveActivityFeed onNewActivity={handleNewActivity} />
            </div>
          </div>
          
          {/* Bottom notification bar */}
          <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-[#FF805D]/10 to-[#7E4EF2]/10 border border-[#FF805D]/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FF805D]/20 flex items-center justify-center">
                <Bell className="w-4 h-4 text-[#FF805D]" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">High-value lead detected</p>
                <p className="text-xs text-white/50">Score: 92 - Needs immediate follow-up</p>
              </div>
            </div>
            <Button size="sm" className="bg-[#FF805D] hover:bg-[#FF805D]/90 text-white border-0 text-xs h-8">
              View Lead
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-background dark:via-background dark:to-background"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6B8CFF]/20 rounded-full blur-3xl animate-aurora-1" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7E4EF2]/15 rounded-full blur-3xl animate-aurora-2" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#7CFD98]/10 rounded-full blur-3xl animate-aurora-3" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left column - Text content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/10 shadow-lg shadow-black/5 border border-black/5 dark:border-white/10 text-sm font-medium mb-6 animate-fade-up"
            >
              <Sparkles className="h-4 w-4 text-[#6B8CFF]" />
              <span className="text-foreground">Your command center awaits</span>
            </div>
            
            {/* Headline */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
              data-testid="text-hero-headline"
            >
              <span className="text-foreground">See everything.</span>
              <br />
              <span className="bg-gradient-to-r from-[#6B8CFF] via-[#7E4EF2] to-[#7CFD98] bg-clip-text text-transparent">
                Miss nothing.
              </span>
            </h1>
            
            <p 
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.2s' }}
              data-testid="text-hero-subheadline"
            >
              A unified command center for your entire sales operation. 
              Real-time insights, live activity feeds, and intelligent alerts 
              — all in one beautiful interface.
            </p>
            
            {/* CTA buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Button 
                size="lg"
                className="rounded-full px-8 h-14 text-lg gap-2 bg-gradient-to-r from-[#6B8CFF] to-[#7E4EF2] hover:opacity-90 border-0 shadow-lg shadow-[#6B8CFF]/25"
                data-testid="button-hero-start"
              >
                Launch Dashboard
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-lg gap-2 bg-white dark:bg-white/5 border-black/10 dark:border-white/10 shadow-lg shadow-black/5"
                data-testid="button-hero-demo"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats row */}
            <div 
              className="flex flex-wrap gap-8 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div>
                <p className="text-3xl font-bold text-foreground">50M+</p>
                <p className="text-sm text-muted-foreground">Contacts</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">95%</p>
                <p className="text-sm text-muted-foreground">Accuracy</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">2.4s</p>
                <p className="text-sm text-muted-foreground">Avg Response</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Command Center Preview */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <CommandCenterPreview />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
