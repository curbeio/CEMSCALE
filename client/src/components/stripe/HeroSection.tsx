import { useEffect, useState, useMemo } from "react";
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

// Channel data
const channels = [
  { icon: Mail, label: "Email", color: "#6B8CFF" },
  { icon: Phone, label: "Calls", color: "#7CFD98" },
  { icon: MessageSquare, label: "SMS", color: "#FFB347" },
  { icon: SiWhatsapp, label: "WhatsApp", color: "#25D366" },
  { icon: Smartphone, label: "In-app", color: "#7E4EF2" },
  { icon: Globe, label: "Web", color: "#0EA5E9" },
];

// Hexagonal mesh node positions (creating a 3D-like network)
const meshNodes = [
  // Center cluster
  { x: 50, y: 50, size: 'lg', delay: 0 },
  // Inner ring
  { x: 35, y: 35, size: 'md', delay: 0.1 },
  { x: 65, y: 35, size: 'md', delay: 0.2 },
  { x: 75, y: 50, size: 'md', delay: 0.3 },
  { x: 65, y: 65, size: 'md', delay: 0.4 },
  { x: 35, y: 65, size: 'md', delay: 0.5 },
  { x: 25, y: 50, size: 'md', delay: 0.6 },
  // Outer ring
  { x: 20, y: 25, size: 'sm', delay: 0.7 },
  { x: 50, y: 18, size: 'sm', delay: 0.8 },
  { x: 80, y: 25, size: 'sm', delay: 0.9 },
  { x: 88, y: 50, size: 'sm', delay: 1.0 },
  { x: 80, y: 75, size: 'sm', delay: 1.1 },
  { x: 50, y: 82, size: 'sm', delay: 1.2 },
  { x: 20, y: 75, size: 'sm', delay: 1.3 },
  { x: 12, y: 50, size: 'sm', delay: 1.4 },
];

// Connection paths between nodes
const connections = [
  // Center to inner ring
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  // Inner ring connections
  [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1],
  // Inner to outer
  [1, 7], [1, 8], [2, 8], [2, 9], [3, 9], [3, 10],
  [4, 10], [4, 11], [5, 11], [5, 12], [6, 12], [6, 13], [1, 14], [6, 7],
  // Outer ring connections
  [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 7],
];

// Animated data particle along a path
function DataParticle({ 
  x1, y1, x2, y2, color, delay 
}: { 
  x1: number; y1: number; x2: number; y2: number; color: string; delay: number;
}) {
  return (
    <circle
      r="2"
      fill={color}
      style={{
        filter: `drop-shadow(0 0 4px ${color})`,
      }}
    >
      <animateMotion
        dur="2.5s"
        repeatCount="indefinite"
        begin={`${delay}s`}
        path={`M${x1},${y1} L${x2},${y2}`}
      />
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        dur="2.5s"
        repeatCount="indefinite"
        begin={`${delay}s`}
      />
    </circle>
  );
}

// Channel icon floating card
function ChannelCard({ 
  icon: Icon, 
  label, 
  color, 
  position,
  delay 
}: { 
  icon: React.ElementType;
  label: string;
  color: string;
  position: { x: number; y: number };
  delay: number;
}) {
  return (
    <div
      className="absolute transition-all duration-500 hover:scale-110 cursor-pointer group"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        animation: `floatCard 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <div 
        className="relative px-4 py-3 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl"
        style={{
          boxShadow: `0 8px 32px ${color}15, inset 0 0 0 1px ${color}10`,
        }}
      >
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ 
              background: `linear-gradient(135deg, ${color}20, ${color}05)`,
              boxShadow: `inset 0 0 20px ${color}10`,
            }}
          >
            <Icon className="w-5 h-5" style={{ color }} />
          </div>
          <div>
            <p className="text-sm font-medium text-white/90">{label}</p>
            <p className="text-[10px] text-white/40">Connected</p>
          </div>
          <div 
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
          />
        </div>
        {/* Connecting line to mesh */}
        <div 
          className="absolute top-1/2 -right-8 w-8 h-[2px] opacity-40"
          style={{
            background: `linear-gradient(90deg, ${color}, transparent)`,
          }}
        />
      </div>
    </div>
  );
}

// Neural Mesh Visualization
function NeuralMesh() {
  const [activeConnections, setActiveConnections] = useState<number[]>([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly activate some connections
      const active = connections
        .map((_, i) => i)
        .filter(() => Math.random() > 0.7);
      setActiveConnections(active);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const particleColors = ['#7CFD98', '#6B8CFF', '#7E4EF2', '#FFB347'];

  return (
    <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
      
      {/* Background glow */}
      <div 
        className="absolute inset-[-30%] opacity-50"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(107, 140, 255, 0.15) 0%, transparent 60%)',
        }}
      />
      
      {/* SVG Mesh Network */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 100 100"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Gradient for active connections */}
          <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7CFD98" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#6B8CFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7E4EF2" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {/* Connection lines */}
        {connections.map(([from, to], i) => {
          const isActive = activeConnections.includes(i);
          return (
            <line
              key={i}
              x1={meshNodes[from].x}
              y1={meshNodes[from].y}
              x2={meshNodes[to].x}
              y2={meshNodes[to].y}
              stroke={isActive ? "url(#activeGrad)" : "rgba(255,255,255,0.08)"}
              strokeWidth={isActive ? "0.8" : "0.3"}
              className="transition-all duration-500"
              style={{
                filter: isActive ? 'url(#glow)' : 'none',
              }}
            />
          );
        })}
        
        {/* Animated data particles */}
        {connections.slice(0, 12).map(([from, to], i) => (
          <DataParticle
            key={i}
            x1={meshNodes[from].x}
            y1={meshNodes[from].y}
            x2={meshNodes[to].x}
            y2={meshNodes[to].y}
            color={particleColors[i % particleColors.length]}
            delay={i * 0.4}
          />
        ))}
        
        {/* Mesh nodes */}
        {meshNodes.map((node, i) => {
          const size = node.size === 'lg' ? 4 : node.size === 'md' ? 2.5 : 1.5;
          const isCenter = i === 0;
          return (
            <g key={i}>
              {/* Outer glow for center */}
              {isCenter && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="8"
                  fill="url(#activeGrad)"
                  opacity="0.2"
                  className="animate-pulse-slow"
                />
              )}
              {/* Node */}
              <circle
                cx={node.x}
                cy={node.y}
                r={size}
                fill={isCenter ? "#7CFD98" : "rgba(255,255,255,0.6)"}
                style={{
                  filter: isCenter ? 'drop-shadow(0 0 8px #7CFD98)' : 'none',
                  animation: `pulse-node 3s ease-in-out infinite`,
                  animationDelay: `${node.delay}s`,
                }}
              />
            </g>
          );
        })}
      </svg>
      
      {/* Floating channel cards around the mesh */}
      <ChannelCard 
        icon={Mail} 
        label="Email" 
        color="#6B8CFF" 
        position={{ x: -5, y: 25 }}
        delay={0}
      />
      <ChannelCard 
        icon={Phone} 
        label="Calls" 
        color="#7CFD98" 
        position={{ x: 105, y: 20 }}
        delay={0.5}
      />
      <ChannelCard 
        icon={SiWhatsapp} 
        label="WhatsApp" 
        color="#25D366" 
        position={{ x: 110, y: 55 }}
        delay={1}
      />
      <ChannelCard 
        icon={MessageSquare} 
        label="SMS" 
        color="#FFB347" 
        position={{ x: 105, y: 85 }}
        delay={1.5}
      />
      <ChannelCard 
        icon={Smartphone} 
        label="In-app" 
        color="#7E4EF2" 
        position={{ x: -8, y: 80 }}
        delay={2}
      />
      <ChannelCard 
        icon={Globe} 
        label="Web" 
        color="#0EA5E9" 
        position={{ x: -10, y: 55 }}
        delay={2.5}
      />
      
      {/* Center label */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
      >
        <div className="text-xs text-white/30 uppercase tracking-widest mb-1">Engagement</div>
        <div className="text-lg font-bold bg-gradient-to-r from-[#7CFD98] to-[#6B8CFF] bg-clip-text text-transparent">
          Brain
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080d16] via-[#0a1424] to-[#0f0f24]" />
      
      {/* Mesh background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(107, 140, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(107, 140, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Ambient light sources */}
      <div className="absolute top-[10%] left-[30%] w-[500px] h-[500px] bg-[#6B8CFF]/8 rounded-full blur-[200px]" />
      <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-[#7E4EF2]/10 rounded-full blur-[180px]" />
      <div className="absolute top-[50%] right-[35%] w-[300px] h-[300px] bg-[#7CFD98]/5 rounded-full blur-[150px]" />
      
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
          
          {/* Right column - Neural Mesh */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">
            <NeuralMesh />
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080d16] to-transparent" />
    </section>
  );
}
