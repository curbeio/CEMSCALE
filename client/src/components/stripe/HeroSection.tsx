import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play, 
  Phone,
  MessageSquare,
  Zap
} from "lucide-react";
import { SiWhatsapp, SiImessage } from "react-icons/si";

// Channel icons data for orbiting
const channelIcons = [
  { icon: Phone, label: "Calls", color: "#6B8CFF", angle: 0 },
  { icon: MessageSquare, label: "SMS", color: "#7CFD98", angle: 72 },
  { icon: SiWhatsapp, label: "WhatsApp", color: "#25D366", angle: 144 },
  { icon: SiImessage, label: "iMessage", color: "#0A84FF", angle: 216 },
  { icon: MessageSquare, label: "Chat", color: "#7E4EF2", angle: 288 },
];

// Orbiting Icon Component
function OrbitingIcon({ 
  icon: Icon, 
  color, 
  angle, 
  radius, 
  delay,
  orbitDuration 
}: { 
  icon: React.ElementType; 
  color: string; 
  angle: number;
  radius: number;
  delay: number;
  orbitDuration: number;
}) {
  return (
    <div 
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        animation: `orbit ${orbitDuration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <div 
        className="absolute"
        style={{
          transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
        }}
      >
        <div 
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 group"
          style={{
            boxShadow: `0 0 20px ${color}30, inset 0 0 15px ${color}15`,
          }}
        >
          <Icon 
            className="w-5 h-5 sm:w-6 sm:h-6 transition-all group-hover:scale-110" 
            style={{ color }} 
          />
        </div>
      </div>
    </div>
  );
}

// Central Orb Component
function CentralOrb() {
  const [pulsePhase, setPulsePhase] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePhase(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px]">
      
      {/* Outer glow rings */}
      <div className="absolute inset-0 rounded-full animate-pulse-slow opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(107, 140, 255, 0.3) 0%, transparent 70%)',
        }}
      />
      
      {/* Expanding waves */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-white/10"
          style={{
            animation: `expandWave 4s ease-out infinite`,
            animationDelay: `${i * 1.3}s`,
          }}
        />
      ))}
      
      {/* Connection lines to orbiting icons */}
      <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="lineGrad1" x1="50%" y1="50%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6B8CFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6B8CFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="50%" y1="50%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7CFD98" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7CFD98" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad3" x1="50%" y1="50%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#25D366" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#25D366" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad4" x1="50%" y1="50%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0A84FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad5" x1="50%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#7E4EF2" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7E4EF2" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Lines from center to each icon position */}
        {channelIcons.map((channel, i) => {
          const rad = (channel.angle * Math.PI) / 180;
          const lineLength = 160;
          const x2 = 50 + Math.cos(rad) * 45;
          const y2 = 50 + Math.sin(rad) * 45;
          return (
            <line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke={`url(#lineGrad${i + 1})`}
              strokeWidth="1"
              className="animate-pulse-slow"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          );
        })}
      </svg>
      
      {/* Main orb - outer layer */}
      <div 
        className="absolute inset-[15%] rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(107, 140, 255, 0.15) 0%, rgba(126, 78, 242, 0.1) 50%, rgba(124, 253, 152, 0.1) 100%)',
          boxShadow: '0 0 60px rgba(107, 140, 255, 0.2), inset 0 0 60px rgba(126, 78, 242, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
        }}
      />
      
      {/* Main orb - middle layer */}
      <div 
        className="absolute inset-[25%] rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(107, 140, 255, 0.2) 0%, rgba(124, 253, 152, 0.15) 100%)',
          boxShadow: '0 0 40px rgba(124, 253, 152, 0.15), inset 0 0 40px rgba(107, 140, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
        }}
      />
      
      {/* Main orb - core */}
      <div 
        className="absolute inset-[35%] rounded-full animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(124, 253, 152, 0.4) 0%, rgba(107, 140, 255, 0.3) 50%, rgba(126, 78, 242, 0.2) 100%)',
          boxShadow: '0 0 30px rgba(124, 253, 152, 0.4), 0 0 60px rgba(107, 140, 255, 0.3)',
        }}
      />
      
      {/* Inner glow center */}
      <div 
        className="absolute inset-[42%] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(124, 253, 152, 0.5) 50%, transparent 100%)',
        }}
      />
      
      {/* Orbiting icons */}
      {channelIcons.map((channel, i) => (
        <OrbitingIcon
          key={i}
          icon={channel.icon}
          color={channel.color}
          angle={channel.angle}
          radius={140}
          delay={i * 0.5}
          orbitDuration={30}
        />
      ))}
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-white/40"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
            animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#12203a] to-[#1a1a3e]" />
      
      {/* Soft blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#6B8CFF]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#7E4EF2]/12 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[#7CFD98]/8 rounded-full blur-[100px]" />
      
      {/* Subtle grain */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left column - Text */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm mb-8 animate-fade-up">
              <Zap className="h-3.5 w-3.5 text-[#7CFD98]" />
              <span className="text-white/70">Command Center for Sales</span>
            </div>
            
            {/* Headline */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
              data-testid="text-hero-headline"
            >
              <span className="text-white">Your entire call center</span>
              <br />
              <span className="bg-gradient-to-r from-[#6B8CFF] to-[#7CFD98] bg-clip-text text-transparent">
                in one signal.
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
          
          {/* Right column - Abstract Orb */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center py-8 lg:py-0">
            <CentralOrb />
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1628] to-transparent" />
    </section>
  );
}
