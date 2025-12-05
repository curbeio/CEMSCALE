import { useEffect, useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

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

function OrbitingNodes() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Central glowing core */}
      <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-[#6B8CFF] via-[#7E4EF2] to-[#7CFD98] opacity-20 blur-3xl animate-pulse" />
      <div className="absolute w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-[#6B8CFF] to-[#7E4EF2] opacity-40 blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute w-8 h-8 md:w-16 md:h-16 rounded-full bg-white opacity-60 blur-md" />
      
      {/* Orbit rings */}
      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-[#6B8CFF]/20" />
      <div className="absolute w-[450px] h-[450px] md:w-[700px] md:h-[700px] rounded-full border border-[#7E4EF2]/15" />
      <div className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full border border-[#7CFD98]/10" />
      
      {/* Orbiting nodes - Ring 1 */}
      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] animate-spin" style={{ animationDuration: '20s' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#6B8CFF] shadow-lg shadow-[#6B8CFF]/50" />
            <div className="absolute inset-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#6B8CFF] animate-ping opacity-50" />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="relative">
            <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#7CFD98] shadow-lg shadow-[#7CFD98]/50" />
            <div className="absolute inset-0 w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#7CFD98] animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-[#FF805D] shadow-lg shadow-[#FF805D]/50" />
        </div>
      </div>
      
      {/* Orbiting nodes - Ring 2 */}
      <div className="absolute w-[450px] h-[450px] md:w-[700px] md:h-[700px] animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}>
        <div className="absolute top-1/4 right-0 translate-x-1/2">
          <div className="relative">
            <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#7E4EF2] shadow-lg shadow-[#7E4EF2]/50" />
            <div className="absolute inset-0 rounded-full bg-[#7E4EF2] animate-ping opacity-30" />
          </div>
        </div>
        <div className="absolute bottom-1/4 left-0 -translate-x-1/2">
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#4974EA] shadow-lg shadow-[#4974EA]/50" />
        </div>
        <div className="absolute top-0 right-1/4">
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#7CFD98] shadow-lg shadow-[#7CFD98]/50" />
        </div>
      </div>
      
      {/* Orbiting nodes - Ring 3 */}
      <div className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] animate-spin" style={{ animationDuration: '50s' }}>
        <div className="absolute top-1/3 right-0 translate-x-1/2">
          <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-[#6B8CFF] shadow-lg shadow-[#6B8CFF]/50 opacity-70" />
        </div>
        <div className="absolute bottom-0 right-1/3">
          <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#FF805D] shadow-lg shadow-[#FF805D]/50 opacity-60" />
        </div>
        <div className="absolute top-1/4 left-1/4">
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#7E4EF2] shadow-lg shadow-[#7E4EF2]/50 opacity-50" />
        </div>
      </div>
      
      {/* Connection lines (decorative) */}
      <svg className="absolute w-full h-full opacity-20" viewBox="0 0 800 800">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B8CFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#6B8CFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7CFD98" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7E4EF2" stopOpacity="0" />
            <stop offset="50%" stopColor="#7E4EF2" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6B8CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="400" y1="400" x2="400" y2="150" stroke="url(#lineGradient1)" strokeWidth="1" className="animate-pulse" />
        <line x1="400" y1="400" x2="600" y2="300" stroke="url(#lineGradient2)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
        <line x1="400" y1="400" x2="200" y2="500" stroke="url(#lineGradient1)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      </svg>
    </div>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white animate-float-particle"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function MetricCard({ 
  label, 
  value, 
  suffix = "", 
  delay = 0,
  color = "#6B8CFF"
}: { 
  label: string; 
  value: number; 
  suffix?: string; 
  delay?: number;
  color?: string;
}) {
  const count = useAnimatedCounter(value, 2000, delay);
  
  return (
    <div className="glass-card rounded-xl p-4 md:p-5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group">
      <div className="flex items-center gap-2 mb-2">
        <div 
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
        />
        <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
      </div>
      <div 
        className="text-2xl md:text-3xl font-bold"
        style={{ color }}
      >
        {count.toLocaleString()}{suffix}
      </div>
    </div>
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
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-background"
    >
      {/* Deep space background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6B8CFF]/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#7E4EF2]/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#7CFD98]/5 via-transparent to-transparent" />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      <FloatingParticles />
      
      {/* Orbiting system with parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      >
        <OrbitingNodes />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 text-sm font-medium mb-8 animate-fade-up">
            <Sparkles className="h-4 w-4 text-[#7CFD98]" />
            <span className="text-foreground">The Future of Customer Intelligence</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7CFD98] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7CFD98]"></span>
            </span>
          </div>
          
          {/* Main headline */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9] mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
            data-testid="text-hero-headline"
          >
            <span className="text-foreground">Your customers.</span>
            <br />
            <span className="bg-gradient-to-r from-[#6B8CFF] via-[#7E4EF2] to-[#7CFD98] bg-clip-text text-transparent">
              Connected.
            </span>
          </h1>
          
          <p 
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.2s' }}
            data-testid="text-hero-subheadline"
          >
            Unify every touchpoint. Predict every need. 
            Transform data into relationships that grow.
          </p>
          
          {/* CTA buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Button 
              size="lg"
              className="rounded-full px-8 h-14 text-lg gap-2 bg-gradient-to-r from-[#6B8CFF] to-[#7E4EF2] hover:opacity-90 border-0 shadow-lg shadow-[#6B8CFF]/25"
              data-testid="button-hero-start"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 text-lg gap-2 glass-card border-white/20 hover:bg-white/10"
              data-testid="button-hero-demo"
            >
              <Play className="h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Floating metric cards */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <MetricCard label="Active Leads" value={12847} delay={500} color="#6B8CFF" />
            <MetricCard label="Conversion Rate" value={34} suffix="%" delay={700} color="#7CFD98" />
            <MetricCard label="Revenue" value={2450000} suffix="" delay={900} color="#7E4EF2" />
            <MetricCard label="Customers" value={8924} delay={1100} color="#FF805D" />
          </div>
          
          {/* Trust badges */}
          <div 
            className="flex flex-wrap items-center justify-center gap-6 mt-12 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            <Badge variant="secondary" className="gap-2 px-4 py-2 glass-card border border-white/10">
              <div className="w-2 h-2 rounded-full bg-[#7CFD98]" />
              50M+ B2B Contacts
            </Badge>
            <Badge variant="secondary" className="gap-2 px-4 py-2 glass-card border border-white/10">
              <div className="w-2 h-2 rounded-full bg-[#6B8CFF]" />
              95% Data Accuracy
            </Badge>
            <Badge variant="secondary" className="gap-2 px-4 py-2 glass-card border border-white/10">
              <div className="w-2 h-2 rounded-full bg-[#7E4EF2]" />
              Real-time Sync
            </Badge>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
