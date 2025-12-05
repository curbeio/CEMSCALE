import { useEffect, useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play, 
  TrendingUp, 
  Users, 
  Mail, 
  Phone,
  BarChart3,
  Activity,
  Bell,
  CheckCircle2,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

function useAnimatedCounter(end: number, duration: number = 2000, startDelay: number = 0) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [end, duration, startDelay]);
  
  return count;
}

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

function LiveActivityFeed() {
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
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2">
      {activities.map((activity, i) => (
        <div 
          key={activity.id}
          className={`flex items-center gap-3 p-2 rounded-lg bg-white/5 dark:bg-white/5 transition-all duration-500 ${
            i === 0 ? 'animate-fade-up' : ''
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6B8CFF]/20 to-[#7E4EF2]/20 flex items-center justify-center">
            <activity.icon className="w-4 h-4 text-[#6B8CFF]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-foreground truncate">{activity.text}</p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
          {activity.time === 'now' && (
            <span className="w-2 h-2 rounded-full bg-[#7CFD98] animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );
}

function FloatingPanel({ 
  children, 
  className = "",
  delay = 0,
  depth = 0,
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  depth?: number;
}) {
  const scale = 1 - (depth * 0.05);
  const opacity = 1 - (depth * 0.15);
  const blur = depth * 2;
  
  return (
    <div 
      className={`relative animate-fade-up ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        transform: `scale(${scale})`,
        opacity,
        filter: blur > 0 ? `blur(${blur}px)` : undefined,
      }}
    >
      {/* Glass panel */}
      <div className="relative rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-black/20 overflow-hidden">
        {/* Top highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        {children}
      </div>
    </div>
  );
}

function DashboardPreviewPanel() {
  const leads = useLiveCounter(12847, 1, 5000);
  const chartData = [35, 45, 38, 52, 48, 60, 55, 72, 68, 85, 78, 92];
  
  return (
    <FloatingPanel delay={0.3} className="w-full max-w-md">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6B8CFF] to-[#7E4EF2] flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-foreground">Overview</span>
          </div>
          <Badge className="bg-[#7CFD98]/20 text-[#7CFD98] border-0">Live</Badge>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-muted/50 rounded-xl p-3">
            <p className="text-xs text-muted-foreground mb-1">Leads</p>
            <p className="text-xl font-bold text-foreground">{leads.toLocaleString()}</p>
            <div className="flex items-center gap-1 text-xs text-[#7CFD98]">
              <ArrowUpRight className="w-3 h-3" />
              <span>+12%</span>
            </div>
          </div>
          <div className="bg-muted/50 rounded-xl p-3">
            <p className="text-xs text-muted-foreground mb-1">Pipeline</p>
            <p className="text-xl font-bold text-foreground">$2.4M</p>
            <div className="flex items-center gap-1 text-xs text-[#7CFD98]">
              <ArrowUpRight className="w-3 h-3" />
              <span>+8%</span>
            </div>
          </div>
          <div className="bg-muted/50 rounded-xl p-3">
            <p className="text-xs text-muted-foreground mb-1">Won</p>
            <p className="text-xl font-bold text-foreground">$847K</p>
            <div className="flex items-center gap-1 text-xs text-[#7CFD98]">
              <ArrowUpRight className="w-3 h-3" />
              <span>+24%</span>
            </div>
          </div>
        </div>
        
        {/* Chart */}
        <div className="bg-muted/30 rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">Conversion trend</span>
            <span className="text-xs font-medium text-[#7CFD98]">+18.4%</span>
          </div>
          <MiniChart data={chartData} color="#6B8CFF" />
        </div>
      </div>
    </FloatingPanel>
  );
}

function ActivityPanel() {
  return (
    <FloatingPanel delay={0.5} className="w-72">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Activity className="w-4 h-4 text-[#7E4EF2]" />
          <span className="text-sm font-medium text-foreground">Live Activity</span>
          <span className="ml-auto flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#7CFD98] animate-pulse" />
            <span className="text-xs text-muted-foreground">3 active</span>
          </span>
        </div>
        <LiveActivityFeed />
      </div>
    </FloatingPanel>
  );
}

function NotificationPanel() {
  return (
    <FloatingPanel delay={0.7} depth={1} className="w-64">
      <div className="p-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#FF805D]/20 flex items-center justify-center">
            <Bell className="w-4 h-4 text-[#FF805D]" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">High-value lead</p>
            <p className="text-xs text-muted-foreground">Score: 92 - Needs follow-up</p>
          </div>
        </div>
      </div>
    </FloatingPanel>
  );
}

function QuickStatPanel({ label, value, icon: Icon, color, delay }: { 
  label: string; 
  value: string; 
  icon: React.ElementType;
  color: string;
  delay: number;
}) {
  return (
    <FloatingPanel delay={delay} depth={2} className="w-36">
      <div className="p-3 flex items-center gap-3">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <div>
          <p className="text-lg font-bold text-foreground">{value}</p>
          <p className="text-xs text-muted-foreground">{label}</p>
        </div>
      </div>
    </FloatingPanel>
  );
}

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 100,
          y: (e.clientY - rect.top - rect.height / 2) / 100,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
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
          
          {/* Right column - Floating panels */}
          <div 
            className="order-1 lg:order-2 relative h-[500px] lg:h-[600px]"
            style={{ 
              transform: `perspective(1000px) rotateY(${mousePosition.x * 2}deg) rotateX(${-mousePosition.y * 2}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            {/* Main dashboard panel */}
            <div className="absolute top-0 left-0 lg:left-8 z-30">
              <DashboardPreviewPanel />
            </div>
            
            {/* Activity panel */}
            <div className="absolute top-32 right-0 lg:right-0 z-20">
              <ActivityPanel />
            </div>
            
            {/* Notification panel */}
            <div className="absolute bottom-24 left-4 lg:left-0 z-10">
              <NotificationPanel />
            </div>
            
            {/* Quick stat panels */}
            <div className="absolute bottom-0 right-8 z-10 hidden lg:block">
              <QuickStatPanel 
                label="Calls" 
                value="247" 
                icon={Phone} 
                color="#7E4EF2" 
                delay={0.9}
              />
            </div>
            <div className="absolute top-48 left-0 z-5 hidden lg:block">
              <QuickStatPanel 
                label="Emails" 
                value="1.2K" 
                icon={Mail} 
                color="#6B8CFF" 
                delay={1.1}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
