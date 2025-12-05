import { useEffect, useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";

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

function NeuralNetwork() {
  const nodes = [
    // Central cluster
    { id: 1, x: 50, y: 50, size: 12, color: "#6B8CFF", delay: 0 },
    { id: 2, x: 45, y: 42, size: 8, color: "#7E4EF2", delay: 0.2 },
    { id: 3, x: 55, y: 43, size: 6, color: "#7CFD98", delay: 0.4 },
    { id: 4, x: 48, y: 58, size: 7, color: "#4974EA", delay: 0.6 },
    { id: 5, x: 56, y: 55, size: 5, color: "#FF805D", delay: 0.8 },
    // Outer nodes
    { id: 6, x: 25, y: 30, size: 6, color: "#6B8CFF", delay: 1 },
    { id: 7, x: 75, y: 25, size: 8, color: "#7E4EF2", delay: 1.2 },
    { id: 8, x: 20, y: 60, size: 5, color: "#7CFD98", delay: 1.4 },
    { id: 9, x: 80, y: 65, size: 7, color: "#4974EA", delay: 1.6 },
    { id: 10, x: 35, y: 75, size: 4, color: "#FF805D", delay: 1.8 },
    { id: 11, x: 70, y: 80, size: 6, color: "#6B8CFF", delay: 2 },
    { id: 12, x: 15, y: 45, size: 4, color: "#7E4EF2", delay: 2.2 },
    { id: 13, x: 85, y: 45, size: 5, color: "#7CFD98", delay: 2.4 },
    // Far outer nodes
    { id: 14, x: 10, y: 20, size: 3, color: "#6B8CFF", delay: 2.6 },
    { id: 15, x: 90, y: 15, size: 4, color: "#7E4EF2", delay: 2.8 },
    { id: 16, x: 8, y: 75, size: 3, color: "#7CFD98", delay: 3 },
    { id: 17, x: 92, y: 80, size: 4, color: "#4974EA", delay: 3.2 },
  ];

  const connections = [
    // Central connections
    { from: 1, to: 2 }, { from: 1, to: 3 }, { from: 1, to: 4 }, { from: 1, to: 5 },
    { from: 2, to: 3 }, { from: 3, to: 5 }, { from: 4, to: 5 }, { from: 2, to: 4 },
    // To outer nodes
    { from: 2, to: 6 }, { from: 3, to: 7 }, { from: 4, to: 8 }, { from: 5, to: 9 },
    { from: 1, to: 10 }, { from: 1, to: 11 }, { from: 2, to: 12 }, { from: 3, to: 13 },
    // Outer to far outer
    { from: 6, to: 14 }, { from: 7, to: 15 }, { from: 8, to: 16 }, { from: 9, to: 17 },
    // Cross connections
    { from: 6, to: 12 }, { from: 7, to: 13 }, { from: 8, to: 10 }, { from: 9, to: 11 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Gradient definitions for connections */}
          <linearGradient id="connectionGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6B8CFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#6B8CFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7E4EF2" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7E4EF2" stopOpacity="0" />
            <stop offset="50%" stopColor="#7CFD98" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6B8CFF" stopOpacity="0" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Animated gradient for data flow */}
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7CFD98" stopOpacity="0">
              <animate attributeName="offset" values="0;1" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="20%" stopColor="#7CFD98" stopOpacity="1">
              <animate attributeName="offset" values="0.2;1.2" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="40%" stopColor="#7CFD98" stopOpacity="0">
              <animate attributeName="offset" values="0.4;1.4" dur="2s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        
        {/* Connection lines */}
        {connections.map((conn, i) => {
          const fromNode = nodes.find(n => n.id === conn.from)!;
          const toNode = nodes.find(n => n.id === conn.to)!;
          return (
            <g key={`conn-${i}`}>
              {/* Base line */}
              <line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={i % 2 === 0 ? "url(#connectionGradient1)" : "url(#connectionGradient2)"}
                strokeWidth="0.15"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.1}s`, animationDuration: '3s' }}
              />
              {/* Data flow pulse */}
              <circle r="0.3" fill="#7CFD98" filter="url(#glow)">
                <animateMotion
                  dur={`${2 + (i % 3)}s`}
                  repeatCount="indefinite"
                  path={`M${fromNode.x},${fromNode.y} L${toNode.x},${toNode.y}`}
                  begin={`${i * 0.2}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur={`${2 + (i % 3)}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.2}s`}
                />
              </circle>
            </g>
          );
        })}
        
        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            {/* Outer glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size * 0.15}
              fill={node.color}
              opacity="0.3"
              className="animate-pulse"
              style={{ animationDelay: `${node.delay}s`, animationDuration: '2s' }}
            />
            {/* Core */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size * 0.08}
              fill={node.color}
              filter="url(#glow)"
            />
            {/* Inner highlight */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size * 0.04}
              fill="white"
              opacity="0.8"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Aurora waves */}
      <div 
        className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-aurora-1"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 50%, rgba(107, 140, 255, 0.15) 0%, transparent 50%)`,
        }}
      />
      <div 
        className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-aurora-2"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 60% 40%, rgba(126, 78, 242, 0.12) 0%, transparent 50%)`,
        }}
      />
      <div 
        className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-aurora-3"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 40% 60%, rgba(124, 253, 152, 0.08) 0%, transparent 50%)`,
        }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

function HolographicCard({ 
  children, 
  className = "",
  delay = 0
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  return (
    <div 
      className={`relative group animate-fade-up ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Holographic border effect */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#6B8CFF] via-[#7E4EF2] to-[#7CFD98] opacity-50 blur-sm group-hover:opacity-75 transition-opacity" />
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#6B8CFF] via-[#7E4EF2] to-[#7CFD98] opacity-20" />
      
      {/* Card content */}
      <div className="relative rounded-2xl bg-background/80 dark:bg-background/60 backdrop-blur-xl p-5 border border-white/10">
        {children}
      </div>
    </div>
  );
}

function MetricCard({ 
  label, 
  value, 
  suffix = "", 
  icon: Icon,
  delay = 0,
}: { 
  label: string; 
  value: number; 
  suffix?: string; 
  icon: React.ElementType;
  delay?: number;
}) {
  const count = useAnimatedCounter(value, 2000, delay * 1000);
  
  return (
    <HolographicCard delay={delay}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6B8CFF]/20 to-[#7E4EF2]/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#6B8CFF]" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
          <p className="text-xl font-bold text-foreground">
            {count.toLocaleString()}{suffix}
          </p>
        </div>
      </div>
    </HolographicCard>
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
          x: (e.clientX - rect.left - rect.width / 2) / 80,
          y: (e.clientY - rect.top - rect.height / 2) / 80,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Aurora background */}
      <AuroraBackground />
      
      {/* Neural network with parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-out opacity-60"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      >
        <NeuralNetwork />
      </div>
      
      {/* Depth layers - holographic effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left column - Text content */}
          <div>
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7CFD98]/10 border border-[#7CFD98]/20 text-sm font-medium mb-6 animate-fade-up"
            >
              <Zap className="h-4 w-4 text-[#7CFD98]" />
              <span className="text-[#7CFD98]">Neural CRM Intelligence</span>
            </div>
            
            {/* Headline */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
              data-testid="text-hero-headline"
            >
              <span className="text-foreground">Every connection</span>
              <br />
              <span className="bg-gradient-to-r from-[#6B8CFF] via-[#7E4EF2] to-[#7CFD98] bg-clip-text text-transparent animate-gradient-x">
                amplified.
              </span>
            </h1>
            
            <p 
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.2s' }}
              data-testid="text-hero-subheadline"
            >
              Our neural network analyzes every touchpoint, predicts behavior, 
              and reveals opportunities hidden in your customer data.
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
                Activate Intelligence
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-lg gap-2 border-[#6B8CFF]/30 hover:bg-[#6B8CFF]/10"
                data-testid="button-hero-demo"
              >
                <Play className="h-5 w-5" />
                See it work
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div 
              className="flex flex-wrap gap-6 text-sm text-muted-foreground animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7CFD98] animate-pulse" />
                <span>50M+ contacts analyzed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#6B8CFF] animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span>Real-time insights</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7E4EF2] animate-pulse" style={{ animationDelay: '1s' }} />
                <span>95% accuracy</span>
              </div>
            </div>
          </div>
          
          {/* Right column - Floating metric cards */}
          <div className="relative hidden lg:block">
            {/* Decorative glow behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#6B8CFF]/20 via-[#7E4EF2]/20 to-[#7CFD98]/20 rounded-full blur-3xl" />
            
            {/* Floating cards grid */}
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <MetricCard 
                  label="Active Leads" 
                  value={12847} 
                  icon={Sparkles}
                  delay={0.5}
                />
                <div className="h-8" /> {/* Spacer for stagger effect */}
                <MetricCard 
                  label="Predicted Deals" 
                  value={342} 
                  icon={Zap}
                  delay={0.9}
                />
              </div>
              <div className="space-y-4 pt-12">
                <MetricCard 
                  label="Conversion Rate" 
                  value={34} 
                  suffix="%" 
                  icon={ArrowRight}
                  delay={0.7}
                />
                <div className="h-8" />
                <MetricCard 
                  label="Revenue Forecast" 
                  value={2450} 
                  suffix="K" 
                  icon={Play}
                  delay={1.1}
                />
              </div>
            </div>
            
            {/* Connection lines between cards (decorative) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" style={{ zIndex: -1 }}>
              <defs>
                <linearGradient id="cardLine" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6B8CFF" stopOpacity="0" />
                  <stop offset="50%" stopColor="#7E4EF2" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#7CFD98" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path 
                d="M 80 60 Q 160 120 240 100 Q 320 80 280 180" 
                stroke="url(#cardLine)" 
                strokeWidth="1" 
                fill="none"
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
}
