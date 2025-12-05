import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play, 
  Phone,
  MessageSquare,
  Mail,
  Users,
  TrendingUp,
  Zap,
  Bell
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

// MacBook-style device showing the dashboard
function LaptopDevice() {
  return (
    <div className="relative">
      {/* Screen bezel */}
      <div 
        className="relative rounded-t-xl overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)',
          padding: '8px 8px 0 8px',
          boxShadow: '0 -2px 20px rgba(0,0,0,0.5)',
        }}
      >
        {/* Camera notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#2a2a2a]" />
        
        {/* Screen */}
        <div 
          className="relative w-[420px] h-[260px] rounded-t-lg overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0a1628 0%, #0f1a2e 100%)',
            boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)',
          }}
        >
          {/* Dashboard UI */}
          <div className="p-3">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#7CFD98] to-[#6B8CFF] flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white" />
                </div>
                <span className="text-[10px] font-semibold text-white">CemScale</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                  <Bell className="w-2.5 h-2.5 text-white/60" />
                </div>
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#6B8CFF] to-[#7E4EF2]" />
              </div>
            </div>
            
            {/* Stats row */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              {[
                { label: 'Active', value: '847', color: '#7CFD98' },
                { label: 'Queue', value: '23', color: '#FFB347' },
                { label: 'Closed', value: '1.2K', color: '#6B8CFF' },
                { label: 'SLA', value: '94%', color: '#7CFD98' },
              ].map((stat, i) => (
                <div key={i} className="p-2 rounded-lg bg-white/5">
                  <p className="text-[8px] text-white/40 uppercase">{stat.label}</p>
                  <p className="text-sm font-bold" style={{ color: stat.color }}>{stat.value}</p>
                </div>
              ))}
            </div>
            
            {/* Activity feed */}
            <div className="rounded-lg bg-white/5 p-2">
              <p className="text-[8px] text-white/40 uppercase mb-2">Live Activity</p>
              <div className="space-y-1.5">
                {[
                  { icon: Phone, text: 'Call connected · Michael B.', color: '#7CFD98', time: 'Now' },
                  { icon: SiWhatsapp, text: 'Reply received · Sarah J.', color: '#25D366', time: '2m' },
                  { icon: Mail, text: 'Email opened · David W.', color: '#6B8CFF', time: '5m' },
                  { icon: MessageSquare, text: 'SMS delivered · Emily D.', color: '#FFB347', time: '8m' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-1 px-2 rounded-md bg-white/5">
                    <div className="flex items-center gap-2">
                      <item.icon className="w-3 h-3" style={{ color: item.color }} />
                      <span className="text-[9px] text-white/80">{item.text}</span>
                    </div>
                    <span className="text-[8px] text-white/30">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mini chart */}
            <div className="mt-2 flex items-end gap-0.5 h-8">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 rounded-sm bg-gradient-to-t from-[#6B8CFF] to-[#7CFD98]"
                  style={{ height: `${h}%`, opacity: 0.4 + (i / 12) * 0.6 }}
                />
              ))}
            </div>
          </div>
          
          {/* Screen reflection */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)',
            }}
          />
        </div>
      </div>
      
      {/* Keyboard base */}
      <div 
        className="relative h-3 rounded-b-lg"
        style={{
          background: 'linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        }}
      >
        {/* Trackpad hint */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-b bg-[#0d0d0d]" />
      </div>
      
      {/* Base shadow */}
      <div 
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 rounded-[50%] blur-xl"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.6) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}

// iPhone-style mobile device
function MobileDevice() {
  return (
    <div className="relative">
      {/* Phone frame */}
      <div 
        className="relative rounded-[24px] p-[3px]"
        style={{
          background: 'linear-gradient(135deg, #3a3a3a 0%, #1a1a1a 50%, #2a2a2a 100%)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        {/* Screen */}
        <div 
          className="relative w-[140px] h-[280px] rounded-[21px] overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #0a1628 0%, #0f1a2e 100%)',
          }}
        >
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 rounded-full bg-black" />
          
          {/* Notification cards */}
          <div className="pt-12 px-2 space-y-2">
            {/* Notification 1 */}
            <div 
              className="p-2.5 rounded-xl animate-slide-in-1"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-md bg-[#25D366] flex items-center justify-center">
                  <SiWhatsapp className="w-3 h-3 text-white" />
                </div>
                <span className="text-[9px] font-medium text-white">WhatsApp</span>
                <span className="text-[8px] text-white/40 ml-auto">now</span>
              </div>
              <p className="text-[10px] text-white/80">Sarah: "Yes, I'm interested in the premium plan"</p>
            </div>
            
            {/* Notification 2 */}
            <div 
              className="p-2.5 rounded-xl animate-slide-in-2"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-md bg-[#7CFD98] flex items-center justify-center">
                  <Phone className="w-3 h-3 text-slate-900" />
                </div>
                <span className="text-[9px] font-medium text-white">Incoming Call</span>
              </div>
              <p className="text-[10px] text-white/80">Michael Brown · Lead #4521</p>
              <div className="flex gap-2 mt-2">
                <div className="flex-1 py-1 rounded-full bg-[#ff3b30] text-center text-[8px] text-white font-medium">Decline</div>
                <div className="flex-1 py-1 rounded-full bg-[#34c759] text-center text-[8px] text-white font-medium">Accept</div>
              </div>
            </div>
            
            {/* Notification 3 */}
            <div 
              className="p-2.5 rounded-xl animate-slide-in-3"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-md bg-[#6B8CFF] flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 text-white" />
                </div>
                <span className="text-[9px] font-medium text-white">CemScale</span>
              </div>
              <p className="text-[10px] text-white/80">New hot lead: Emily Davis scored 92</p>
            </div>
          </div>
          
          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/20" />
          
          {/* Screen reflection */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 40%)',
            }}
          />
        </div>
      </div>
      
      {/* Phone shadow */}
      <div 
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 rounded-[50%] blur-xl"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}

// Device showcase
function DeviceShowcase() {
  return (
    <div className="relative flex items-end justify-center gap-6">
      {/* Ambient glow behind devices */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(107, 140, 255, 0.15) 0%, transparent 60%)',
        }}
      />
      
      {/* Laptop */}
      <div 
        className="relative z-10"
        style={{
          transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
        }}
      >
        <LaptopDevice />
      </div>
      
      {/* Mobile - positioned to overlap slightly */}
      <div 
        className="relative z-20 -ml-8 mb-4"
        style={{
          transform: 'perspective(1000px) rotateY(10deg) rotateX(2deg)',
        }}
      >
        <MobileDevice />
      </div>
      
      {/* Floating accent elements */}
      <div 
        className="absolute -top-8 right-20 w-16 h-16 rounded-2xl animate-float-slow"
        style={{
          background: 'linear-gradient(135deg, rgba(124, 253, 152, 0.1) 0%, rgba(107, 140, 255, 0.1) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <Users className="w-6 h-6 text-[#7CFD98]" />
        </div>
      </div>
      
      <div 
        className="absolute -bottom-4 left-10 w-14 h-14 rounded-xl animate-float-slow"
        style={{
          background: 'linear-gradient(135deg, rgba(107, 140, 255, 0.1) 0%, rgba(126, 78, 242, 0.1) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)',
          animationDelay: '1s',
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <Mail className="w-5 h-5 text-[#6B8CFF]" />
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#05080f] via-[#080d18] to-[#0a0a14]" />
      
      {/* Spotlight effects */}
      <div className="absolute top-[10%] left-[50%] w-[800px] h-[800px] -translate-x-1/2 bg-[#6B8CFF]/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-[#7E4EF2]/8 rounded-full blur-[150px]" />
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left column - Text */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.06] text-sm mb-8 animate-fade-up">
              <div className="w-2 h-2 rounded-full bg-[#7CFD98] animate-pulse" />
              <span className="text-white/60">Customer Engagement Management</span>
            </div>
            
            {/* Headline */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] mb-6 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
              data-testid="text-hero-headline"
            >
              <span className="text-white">Every customer signal.</span>
              <br />
              <span className="bg-gradient-to-r from-[#6B8CFF] via-[#7CFD98] to-[#7E4EF2] bg-clip-text text-transparent">
                One intelligent system.
              </span>
            </h1>
            
            <p 
              className="text-lg lg:text-xl text-white/40 max-w-xl mb-10 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.2s' }}
              data-testid="text-hero-subheadline"
            >
              CemScale unifies email, calls, SMS, WhatsApp, and in-app events into a single engagement brain, so your teams see context, act in real time, and never drop a conversation.
            </p>
            
            {/* CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Button 
                size="lg"
                className="rounded-full px-7 h-12 text-base gap-2 bg-[#7CFD98] hover:bg-[#6de889] text-slate-900 font-semibold border-0 shadow-xl shadow-[#7CFD98]/25"
                data-testid="button-hero-start"
              >
                Start orchestrating engagement
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost"
                size="lg"
                className="rounded-full px-7 h-12 text-base gap-2 text-white/60 hover:text-white hover:bg-white/5 border border-white/10"
                data-testid="button-hero-demo"
              >
                <Play className="h-4 w-4" />
                Watch 3-minute story
              </Button>
            </div>
            
            {/* Metrics */}
            <div 
              className="flex flex-wrap gap-8 lg:gap-10 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-white">+50M</p>
                <p className="text-xs text-white/30">Customer interactions tracked</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-[#7CFD98]">32%</p>
                <p className="text-xs text-white/30">Lift in conversion rate</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-white">2.1s</p>
                <p className="text-xs text-white/30">Median time-to-first-response</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Device Showcase */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center py-8">
            <DeviceShowcase />
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05080f] to-transparent" />
    </section>
  );
}
