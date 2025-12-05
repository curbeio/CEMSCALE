import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play, 
  Phone,
  MessageSquare,
  Mail,
  Globe,
  Smartphone,
  Zap
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

// Channel icons data for orbiting - 6 channels
const channelIcons = [
  { icon: Mail, label: "Email", color: "#6B8CFF" },
  { icon: Phone, label: "Phone", color: "#7CFD98" },
  { icon: MessageSquare, label: "SMS", color: "#FFB347" },
  { icon: SiWhatsapp, label: "WhatsApp", color: "#25D366" },
  { icon: Smartphone, label: "In-app", color: "#7E4EF2" },
  { icon: Globe, label: "Web", color: "#0EA5E9" },
];

// Orbiting Icon Component
function OrbitingIcon({ 
  icon: Icon, 
  label,
  color, 
  angle, 
  radius,
  orbitDuration 
}: { 
  icon: React.ElementType; 
  label: string;
  color: string; 
  angle: number;
  radius: number;
  orbitDuration: number;
}) {
  return (
    <div 
      className="absolute left-1/2 top-1/2"
      style={{
        animation: `orbit ${orbitDuration}s linear infinite`,
        transformOrigin: '0 0',
      }}
    >
      <div 
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `rotate(${angle}deg) translateX(${radius}px)`,
        }}
      >
        <div 
          className="relative"
          style={{
            transform: `rotate(-${angle}deg)`,
            animation: `counterOrbit ${orbitDuration}s linear infinite`,
          }}
        >
          <div 
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/15 group cursor-pointer"
            style={{
              boxShadow: `0 0 25px ${color}25, inset 0 0 20px ${color}10`,
            }}
          >
            <Icon 
              className="w-5 h-5 sm:w-6 sm:h-6 transition-all group-hover:scale-110" 
              style={{ color }} 
            />
          </div>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

// Central Orb Component - The "Engagement Brain"
function EngagementBrain() {
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px]">
      
      {/* Outer ambient glow */}
      <div 
        className="absolute inset-[-20%] rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(107, 140, 255, 0.25) 0%, transparent 60%)',
        }}
      />
      
      {/* Expanding signal waves */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-white/5"
          style={{
            animation: `expandWave 5s ease-out infinite`,
            animationDelay: `${i * 1.25}s`,
          }}
        />
      ))}
      
      {/* Connection lines to orbiting icons */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
        <defs>
          {channelIcons.map((channel, i) => (
            <linearGradient key={i} id={`lineGrad${i}`} x1="50%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor={channel.color} stopOpacity="0.4" />
              <stop offset="100%" stopColor={channel.color} stopOpacity="0.05" />
            </linearGradient>
          ))}
        </defs>
        {channelIcons.map((channel, i) => {
          const angle = (i * 60) * (Math.PI / 180);
          const x2 = 50 + Math.cos(angle) * 42;
          const y2 = 50 + Math.sin(angle) * 42;
          return (
            <line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke={`url(#lineGrad${i})`}
              strokeWidth="1.5"
              className="animate-pulse-slow"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          );
        })}
      </svg>
      
      {/* Outer ring - data flow */}
      <div 
        className="absolute inset-[8%] rounded-full animate-spin-very-slow"
        style={{
          border: '1px dashed rgba(255, 255, 255, 0.08)',
        }}
      />
      
      {/* Main orb - outer layer (glass) */}
      <div 
        className="absolute inset-[18%] rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(107, 140, 255, 0.12) 0%, rgba(126, 78, 242, 0.08) 50%, rgba(124, 253, 152, 0.08) 100%)',
          boxShadow: '0 0 80px rgba(107, 140, 255, 0.15), inset 0 0 60px rgba(126, 78, 242, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
        }}
      />
      
      {/* Main orb - middle layer */}
      <div 
        className="absolute inset-[28%] rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(107, 140, 255, 0.18) 0%, rgba(124, 253, 152, 0.12) 100%)',
          boxShadow: '0 0 50px rgba(124, 253, 152, 0.12), inset 0 0 40px rgba(107, 140, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(15px)',
        }}
      />
      
      {/* Main orb - inner core */}
      <div 
        className="absolute inset-[38%] rounded-full animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, rgba(124, 253, 152, 0.35) 0%, rgba(107, 140, 255, 0.25) 50%, rgba(126, 78, 242, 0.15) 100%)',
          boxShadow: '0 0 40px rgba(124, 253, 152, 0.35), 0 0 80px rgba(107, 140, 255, 0.2)',
        }}
      />
      
      {/* Core center - bright point */}
      <div 
        className="absolute inset-[44%] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(124, 253, 152, 0.6) 40%, transparent 100%)',
        }}
      />
      
      {/* Orbiting channel icons */}
      {channelIcons.map((channel, i) => (
        <OrbitingIcon
          key={i}
          icon={channel.icon}
          label={channel.label}
          color={channel.color}
          angle={i * 60}
          radius={170}
          orbitDuration={40}
        />
      ))}
      
      {/* Floating light particles */}
      {[...Array(12)].map((_, i) => {
        const size = 2 + Math.random() * 3;
        const top = 15 + Math.random() * 70;
        const left = 15 + Math.random() * 70;
        return (
          <div
            key={i}
            className="absolute rounded-full bg-white/50"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.25}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Deep gradient background - blue to indigo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1a30] to-[#1a1a3e]" />
      
      {/* Soft ambient blobs */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-[#6B8CFF]/10 rounded-full blur-[180px]" />
      <div className="absolute bottom-[-10%] right-[15%] w-[500px] h-[500px] bg-[#7E4EF2]/12 rounded-full blur-[150px]" />
      <div className="absolute top-[40%] right-[40%] w-[400px] h-[400px] bg-[#7CFD98]/6 rounded-full blur-[120px]" />
      
      {/* Subtle grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.012]"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm mb-8 animate-fade-up">
              <Zap className="h-4 w-4 text-[#7CFD98]" />
              <span className="text-white/80">Customer Engagement Management</span>
            </div>
            
            {/* Headline */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] mb-6 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
              data-testid="text-hero-headline"
            >
              <span className="text-white">Every customer signal.</span>
              <br />
              <span className="bg-gradient-to-r from-[#6B8CFF] to-[#7CFD98] bg-clip-text text-transparent">
                One intelligent system.
              </span>
            </h1>
            
            <p 
              className="text-lg lg:text-xl text-white/50 max-w-xl mb-10 leading-relaxed animate-fade-up"
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
                className="rounded-full px-7 h-12 text-base gap-2 bg-[#7CFD98] hover:bg-[#6de889] text-slate-900 font-semibold border-0 shadow-lg shadow-[#7CFD98]/20"
                data-testid="button-hero-start"
              >
                Start orchestrating engagement
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost"
                size="lg"
                className="rounded-full px-7 h-12 text-base gap-2 text-white/70 hover:text-white hover:bg-white/5"
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
                <p className="text-xs text-white/40">Customer interactions tracked</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-[#7CFD98]">32%</p>
                <p className="text-xs text-white/40">Lift in conversion rate</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-white">2.1s</p>
                <p className="text-xs text-white/40">Median time-to-first-response</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Abstract Engagement Brain */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center py-8 lg:py-0">
            <EngagementBrain />
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1628] to-transparent" />
    </section>
  );
}
