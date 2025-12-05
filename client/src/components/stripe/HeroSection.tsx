import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play, 
  Phone,
  MessageSquare,
  Mail,
  Globe,
  Smartphone,
  Zap,
  CheckCircle,
  Clock,
  TrendingUp,
  Users
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

// Real notification data
const liveNotifications = [
  { text: "Sarah replied via WhatsApp", time: "Just now", color: "#25D366" },
  { text: "Call completed: 4m 32s", time: "2s ago", color: "#7CFD98" },
  { text: "Email opened by John", time: "5s ago", color: "#6B8CFF" },
  { text: "New lead from website", time: "8s ago", color: "#7E4EF2" },
  { text: "SMS delivered to +1 555...", time: "12s ago", color: "#FFB347" },
];

// Floating Notification Bubble
function NotificationBubble({ 
  text, 
  time, 
  color, 
  index 
}: { 
  text: string; 
  time: string; 
  color: string;
  index: number;
}) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  
  useEffect(() => {
    const showDelay = index * 2000;
    const positions = [
      { x: 65, y: 20 },
      { x: 80, y: 35 },
      { x: 85, y: 55 },
      { x: 75, y: 75 },
      { x: 55, y: 85 },
    ];
    
    const showNotification = () => {
      setPosition(positions[index % positions.length]);
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
    };
    
    const initialTimer = setTimeout(showNotification, showDelay);
    const interval = setInterval(showNotification, 10000);
    
    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div
      className="absolute z-30 transition-all duration-700 ease-out pointer-events-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        opacity: visible ? 1 : 0,
        transform: `translate(-50%, -50%) scale(${visible ? 1 : 0.8}) translateY(${visible ? 0 : 20}px)`,
      }}
    >
      <div 
        className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/90 backdrop-blur-xl border shadow-2xl"
        style={{
          borderColor: `${color}40`,
          boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 30px ${color}20`,
        }}
      >
        <div 
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
        />
        <div>
          <p className="text-sm font-medium text-white whitespace-nowrap">{text}</p>
          <p className="text-[10px] text-white/40">{time}</p>
        </div>
      </div>
    </div>
  );
}

// Holographic Data Panel
function HoloPanel({ 
  children, 
  rotation, 
  delay,
  size = 'md'
}: { 
  children: React.ReactNode;
  rotation: number;
  delay: number;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeClasses = {
    sm: 'w-28 h-20',
    md: 'w-36 h-28',
    lg: 'w-44 h-32',
  };
  
  return (
    <div
      className={`absolute ${sizeClasses[size]} rounded-xl overflow-hidden`}
      style={{
        animation: `floatPanel 8s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        transform: `perspective(1000px) rotateY(${rotation}deg) rotateX(5deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Panel glass effect */}
      <div 
        className="absolute inset-0 rounded-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.3)',
        }}
      />
      {/* Holographic scan line */}
      <div 
        className="absolute inset-0 overflow-hidden rounded-xl"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(124,253,152,0.05) 50%, transparent 100%)',
          animation: 'scanLine 3s ease-in-out infinite',
          animationDelay: `${delay}s`,
        }}
      />
      {/* Content */}
      <div className="relative z-10 p-3 h-full">
        {children}
      </div>
    </div>
  );
}

// Central Glass Pillar - The Nexus
function EngagementNexus() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      setMousePos({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px]"
      style={{
        transform: `perspective(1200px) rotateX(${mousePos.y * 0.3}deg) rotateY(${mousePos.x * 0.3}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out',
      }}
    >
      
      {/* Base platform shadow */}
      <div 
        className="absolute left-1/2 bottom-[5%] w-[60%] h-[8%] -translate-x-1/2 rounded-[50%] blur-2xl"
        style={{
          background: 'radial-gradient(ellipse, rgba(107, 140, 255, 0.3) 0%, transparent 70%)',
        }}
      />
      
      {/* Base platform */}
      <div 
        className="absolute left-1/2 bottom-[8%] w-[40%] h-[4%] -translate-x-1/2 rounded-[50%]"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)',
          boxShadow: '0 0 30px rgba(107, 140, 255, 0.2)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      />
      
      {/* Channel light beams converging to center */}
      <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="beamEmail" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B8CFF" stopOpacity="0" />
            <stop offset="80%" stopColor="#6B8CFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6B8CFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beamWhatsApp" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#25D366" stopOpacity="0" />
            <stop offset="80%" stopColor="#25D366" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#25D366" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beamCall" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7CFD98" stopOpacity="0" />
            <stop offset="80%" stopColor="#7CFD98" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7CFD98" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beamSMS" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FFB347" stopOpacity="0" />
            <stop offset="80%" stopColor="#FFB347" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFB347" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Light beams */}
        <line x1="5%" y1="20%" x2="50%" y2="50%" stroke="url(#beamEmail)" strokeWidth="2" className="animate-pulse-slow" />
        <line x1="95%" y1="25%" x2="50%" y2="50%" stroke="url(#beamWhatsApp)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        <line x1="10%" y1="80%" x2="50%" y2="50%" stroke="url(#beamCall)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <line x1="90%" y1="75%" x2="50%" y2="50%" stroke="url(#beamSMS)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </svg>
      
      {/* Central glass cylinder */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[55%]">
        {/* Outer glow */}
        <div 
          className="absolute inset-[-20%] rounded-full animate-pulse-slow"
          style={{
            background: 'radial-gradient(ellipse, rgba(124, 253, 152, 0.15) 0%, transparent 60%)',
          }}
        />
        
        {/* Glass cylinder body */}
        <div 
          className="absolute inset-0 rounded-[40%]"
          style={{
            background: `
              linear-gradient(180deg, 
                rgba(255,255,255,0.12) 0%, 
                rgba(107, 140, 255, 0.08) 30%,
                rgba(126, 78, 242, 0.1) 60%,
                rgba(124, 253, 152, 0.08) 100%
              )
            `,
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: `
              inset 0 0 60px rgba(124, 253, 152, 0.1),
              inset -20px 0 40px rgba(107, 140, 255, 0.1),
              0 0 80px rgba(107, 140, 255, 0.2),
              0 30px 60px rgba(0,0,0,0.3)
            `,
          }}
        />
        
        {/* Inner energy core */}
        <div 
          className="absolute inset-[25%] rounded-full animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(124, 253, 152, 0.5) 0%, rgba(107, 140, 255, 0.3) 50%, transparent 100%)',
            boxShadow: '0 0 40px rgba(124, 253, 152, 0.4)',
          }}
        />
        
        {/* Bright center point */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(124, 253, 152, 0.8) 50%, transparent 100%)',
            boxShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(124, 253, 152, 0.6)',
          }}
        />
        
        {/* Rotating ring */}
        <div 
          className="absolute inset-[-15%] rounded-full border border-white/10 animate-spin-very-slow"
          style={{
            borderStyle: 'dashed',
          }}
        />
      </div>
      
      {/* Floating holographic panels with real data */}
      
      {/* Panel 1 - Activity Log */}
      <div className="absolute left-[5%] top-[15%]" style={{ transform: 'perspective(800px) rotateY(15deg)' }}>
        <HoloPanel rotation={15} delay={0} size="lg">
          <div className="text-[10px] text-white/50 mb-2 uppercase tracking-wider">Live Activity</div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#7CFD98]" />
              <span className="text-[11px] text-white/80">Call ended 4:32</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
              <span className="text-[11px] text-white/80">WhatsApp sent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6B8CFF]" />
              <span className="text-[11px] text-white/80">Email opened</span>
            </div>
          </div>
        </HoloPanel>
      </div>
      
      {/* Panel 2 - Response Time */}
      <div className="absolute right-[8%] top-[20%]" style={{ transform: 'perspective(800px) rotateY(-20deg)' }}>
        <HoloPanel rotation={-20} delay={0.5} size="md">
          <div className="text-[10px] text-white/50 mb-1 uppercase tracking-wider">Response</div>
          <div className="text-2xl font-bold text-[#7CFD98]">1.8s</div>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-[#7CFD98]" />
            <span className="text-[10px] text-[#7CFD98]">-0.4s</span>
          </div>
        </HoloPanel>
      </div>
      
      {/* Panel 3 - Agents */}
      <div className="absolute right-[5%] bottom-[25%]" style={{ transform: 'perspective(800px) rotateY(-15deg)' }}>
        <HoloPanel rotation={-15} delay={1} size="md">
          <div className="text-[10px] text-white/50 mb-1 uppercase tracking-wider">Agents</div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#6B8CFF]" />
            <span className="text-xl font-bold text-white">12</span>
            <span className="text-[10px] text-white/40">online</span>
          </div>
          <div className="flex gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-[#6B8CFF]/30 to-[#7E4EF2]/30 border border-white/10" />
            ))}
          </div>
        </HoloPanel>
      </div>
      
      {/* Panel 4 - Conversion */}
      <div className="absolute left-[8%] bottom-[20%]" style={{ transform: 'perspective(800px) rotateY(20deg)' }}>
        <HoloPanel rotation={20} delay={1.5} size="md">
          <div className="text-[10px] text-white/50 mb-1 uppercase tracking-wider">Conversion</div>
          <div className="text-2xl font-bold text-white">32%</div>
          <div className="w-full h-1.5 rounded-full bg-white/10 mt-2 overflow-hidden">
            <div className="h-full w-[32%] rounded-full bg-gradient-to-r from-[#6B8CFF] to-[#7CFD98]" />
          </div>
        </HoloPanel>
      </div>
      
      {/* Channel source icons */}
      <div className="absolute left-[2%] top-[18%] w-10 h-10 rounded-xl bg-[#6B8CFF]/20 backdrop-blur-xl border border-[#6B8CFF]/30 flex items-center justify-center">
        <Mail className="w-5 h-5 text-[#6B8CFF]" />
      </div>
      <div className="absolute right-[2%] top-[22%] w-10 h-10 rounded-xl bg-[#25D366]/20 backdrop-blur-xl border border-[#25D366]/30 flex items-center justify-center">
        <SiWhatsapp className="w-5 h-5 text-[#25D366]" />
      </div>
      <div className="absolute left-[5%] bottom-[18%] w-10 h-10 rounded-xl bg-[#7CFD98]/20 backdrop-blur-xl border border-[#7CFD98]/30 flex items-center justify-center">
        <Phone className="w-5 h-5 text-[#7CFD98]" />
      </div>
      <div className="absolute right-[5%] bottom-[15%] w-10 h-10 rounded-xl bg-[#FFB347]/20 backdrop-blur-xl border border-[#FFB347]/30 flex items-center justify-center">
        <MessageSquare className="w-5 h-5 text-[#FFB347]" />
      </div>
      
      {/* Live notification bubbles */}
      {liveNotifications.map((notif, i) => (
        <NotificationBubble
          key={i}
          text={notif.text}
          time={notif.time}
          color={notif.color}
          index={i}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060a12] via-[#0a1020] to-[#0c0818]" />
      
      {/* Spotlight effects */}
      <div className="absolute top-[5%] left-[40%] w-[600px] h-[600px] bg-[#6B8CFF]/8 rounded-full blur-[200px]" />
      <div className="absolute bottom-[10%] right-[30%] w-[500px] h-[500px] bg-[#7E4EF2]/8 rounded-full blur-[180px]" />
      <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-[#7CFD98]/5 rounded-full blur-[150px]" />
      
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          
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
          
          {/* Right column - Engagement Nexus */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">
            <EngagementNexus />
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060a12] to-transparent" />
    </section>
  );
}
