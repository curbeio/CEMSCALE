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
  TrendingUp,
  DollarSign,
  Target,
  Zap,
  Globe,
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

function useLiveValue(baseValue: number, maxIncrement: number = 5, interval: number = 2000) {
  const [value, setValue] = useState(baseValue);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setValue(v => v + Math.floor(Math.random() * maxIncrement) + 1);
    }, interval);
    return () => clearInterval(timer);
  }, [maxIncrement, interval]);
  
  return value;
}

const cardData = [
  {
    id: 1,
    title: "Active Leads",
    value: 12847,
    change: "+12.5%",
    changeType: "positive",
    icon: Users,
    color: "#6B8CFF",
    liveIncrement: true,
  },
  {
    id: 2,
    title: "Conversion Rate",
    value: 34,
    suffix: "%",
    change: "+4.2%",
    changeType: "positive",
    icon: Target,
    color: "#7CFD98",
  },
  {
    id: 3,
    title: "Revenue",
    value: 2450000,
    prefix: "$",
    change: "+18.7%",
    changeType: "positive",
    icon: DollarSign,
    color: "#7E4EF2",
  },
  {
    id: 4,
    title: "Calls Today",
    value: 247,
    change: "+32",
    changeType: "positive",
    icon: Phone,
    color: "#FF805D",
    liveIncrement: true,
  },
  {
    id: 5,
    title: "Emails Sent",
    value: 8420,
    change: "92% delivered",
    changeType: "neutral",
    icon: Mail,
    color: "#4974EA",
    liveIncrement: true,
  },
  {
    id: 6,
    title: "Global Reach",
    value: 150,
    suffix: "+",
    change: "countries",
    changeType: "neutral",
    icon: Globe,
    color: "#7CFD98",
  },
];

function AnimatedCard({ 
  card, 
  position, 
  totalCards 
}: { 
  card: typeof cardData[0]; 
  position: number;
  totalCards: number;
}) {
  const liveValue = useLiveValue(card.value, card.liveIncrement ? 3 : 0, 3000);
  const displayValue = card.liveIncrement ? liveValue : card.value;
  
  // Calculate position in the carousel
  const angle = (position / totalCards) * 360;
  const radius = 180; // Distance from center
  const centerOffset = 50; // Percentage offset for centering
  
  // Calculate 3D position
  const x = Math.sin((angle * Math.PI) / 180) * radius;
  const z = Math.cos((angle * Math.PI) / 180) * radius;
  const scale = (z + radius) / (radius * 2) * 0.4 + 0.6; // Scale based on z position
  const opacity = (z + radius) / (radius * 2) * 0.6 + 0.4; // Opacity based on z position
  const zIndex = Math.round((z + radius) / 10);
  
  const formatValue = (val: number) => {
    if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `${(val / 1000).toFixed(1)}K`;
    return val.toLocaleString();
  };

  return (
    <div
      className="absolute transition-all duration-1000 ease-in-out"
      style={{
        transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
        opacity,
        zIndex,
        left: '50%',
        top: '50%',
        marginLeft: '-140px',
        marginTop: '-80px',
      }}
    >
      <div className="w-[280px] rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden">
        {/* Top highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        
        <div className="p-5">
          <div className="flex items-start justify-between mb-4">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${card.color}20` }}
            >
              <card.icon className="w-6 h-6" style={{ color: card.color }} />
            </div>
            <Badge 
              className={`text-xs ${
                card.changeType === 'positive' 
                  ? 'bg-[#7CFD98]/20 text-[#7CFD98]' 
                  : 'bg-muted text-muted-foreground'
              } border-0`}
            >
              {card.change}
            </Badge>
          </div>
          
          <p className="text-sm text-muted-foreground mb-1">{card.title}</p>
          <p className="text-3xl font-bold text-foreground">
            {card.prefix}{formatValue(displayValue)}{card.suffix}
          </p>
          
          {/* Mini progress bar */}
          <div className="mt-4 h-1 bg-muted/50 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-1000"
              style={{ 
                width: `${Math.min((displayValue % 100) + 30, 100)}%`,
                backgroundColor: card.color 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingCardsCarousel() {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(r => (r + 1) % cardData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] lg:h-[500px]" style={{ perspective: '1000px' }}>
      {/* Glow effect behind cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#6B8CFF]/30 via-[#7E4EF2]/30 to-[#7CFD98]/30 rounded-full blur-3xl animate-pulse" />
      
      {/* Cards container with 3D transform */}
      <div 
        className="relative w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: `rotateY(${-rotation * (360 / cardData.length)}deg)`
        }}
      >
        {cardData.map((card, index) => (
          <AnimatedCard
            key={card.id}
            card={card}
            position={index}
            totalCards={cardData.length}
          />
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        {cardData.map((_, index) => (
          <button
            key={index}
            onClick={() => setRotation(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              rotation === index 
                ? 'bg-[#6B8CFF] w-6' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function FloatingStatsGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(i => (i + 1) % cardData.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[450px] lg:h-[550px]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-[#6B8CFF]/20 via-[#7E4EF2]/20 to-[#7CFD98]/20 rounded-full blur-3xl" />
      
      {/* Center featured card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <FeaturedCard card={cardData[activeIndex]} />
      </div>
      
      {/* Orbiting smaller cards */}
      {cardData.map((card, index) => {
        if (index === activeIndex) return null;
        
        const orbitIndex = index < activeIndex ? index : index - 1;
        const totalOrbiting = cardData.length - 1;
        const angle = (orbitIndex / totalOrbiting) * 360 + (Date.now() / 50 % 360);
        const radius = 200;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius * 0.4; // Flatten the orbit
        
        return (
          <div
            key={card.id}
            className="absolute top-1/2 left-1/2 transition-all duration-500 cursor-pointer hover:scale-110"
            style={{
              transform: `translate(${x - 60}px, ${y - 40}px)`,
              zIndex: y > 0 ? 10 : 5,
              opacity: 0.8,
            }}
            onClick={() => setActiveIndex(index)}
          >
            <MiniCard card={card} />
          </div>
        );
      })}
    </div>
  );
}

function FeaturedCard({ card }: { card: typeof cardData[0] }) {
  const liveValue = useLiveValue(card.value, card.liveIncrement ? 5 : 0, 2000);
  const displayValue = card.liveIncrement ? liveValue : card.value;
  
  const formatValue = (val: number) => {
    if (val >= 1000000) return `${(val / 1000000).toFixed(2)}M`;
    if (val >= 1000) return `${(val / 1000).toFixed(1)}K`;
    return val.toLocaleString();
  };

  return (
    <div className="animate-scale-in">
      <div className="relative w-[320px] rounded-3xl bg-white/90 dark:bg-white/10 backdrop-blur-2xl border border-white/30 dark:border-white/10 shadow-2xl shadow-black/20 overflow-hidden">
        {/* Animated gradient border */}
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#6B8CFF] via-[#7E4EF2] to-[#7CFD98] opacity-50 animate-gradient-x" style={{ backgroundSize: '200% 200%' }} />
        
        <div className="relative bg-white/90 dark:bg-background/90 rounded-3xl p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ 
                backgroundColor: card.color,
                boxShadow: `0 10px 30px -5px ${card.color}50`
              }}
            >
              <card.icon className="w-7 h-7 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7CFD98] animate-pulse" />
              <span className="text-xs text-muted-foreground">Live</span>
            </div>
          </div>
          
          {/* Value */}
          <p className="text-sm text-muted-foreground mb-2">{card.title}</p>
          <div className="flex items-end gap-3 mb-4">
            <p className="text-5xl font-bold text-foreground tracking-tight">
              {card.prefix}{formatValue(displayValue)}{card.suffix}
            </p>
          </div>
          
          {/* Change indicator */}
          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
              card.changeType === 'positive' 
                ? 'bg-[#7CFD98]/20 text-[#7CFD98]' 
                : 'bg-muted text-muted-foreground'
            }`}>
              {card.changeType === 'positive' && <TrendingUp className="w-4 h-4" />}
              {card.change}
            </div>
          </div>
          
          {/* Animated bar */}
          <div className="mt-6 h-2 bg-muted/50 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full animate-pulse"
              style={{ 
                width: '75%',
                background: `linear-gradient(90deg, ${card.color}, ${card.color}80)`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniCard({ card }: { card: typeof cardData[0] }) {
  const formatValue = (val: number) => {
    if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `${Math.round(val / 1000)}K`;
    return val.toString();
  };

  return (
    <div className="w-[120px] rounded-xl bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl p-3 hover:shadow-2xl transition-shadow">
      <div 
        className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
        style={{ backgroundColor: `${card.color}20` }}
      >
        <card.icon className="w-4 h-4" style={{ color: card.color }} />
      </div>
      <p className="text-lg font-bold text-foreground">
        {card.prefix}{formatValue(card.value)}{card.suffix}
      </p>
      <p className="text-xs text-muted-foreground truncate">{card.title}</p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-background dark:via-background dark:to-background"
    >
      {/* Animated gradient orbs */}
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
              <span className="text-foreground">Real-time intelligence</span>
            </div>
            
            {/* Headline */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
              data-testid="text-hero-headline"
            >
              <span className="text-foreground">Your data,</span>
              <br />
              <span className="bg-gradient-to-r from-[#6B8CFF] via-[#7E4EF2] to-[#7CFD98] bg-clip-text text-transparent animate-gradient-x" style={{ backgroundSize: '200% 200%' }}>
                always alive.
              </span>
            </h1>
            
            <p 
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.2s' }}
              data-testid="text-hero-subheadline"
            >
              Watch your business metrics update in real-time. 
              Leads, conversions, revenue — everything flowing 
              through one intelligent platform.
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
                Get Started Free
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
            
            {/* Trust indicators */}
            <div 
              className="flex flex-wrap gap-6 text-sm text-muted-foreground animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7CFD98] animate-pulse" />
                <span>50M+ verified contacts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#6B8CFF] animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span>95% accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7E4EF2] animate-pulse" style={{ animationDelay: '1s' }} />
                <span>Real-time sync</span>
              </div>
            </div>
          </div>
          
          {/* Right column - Animated cards */}
          <div className="order-1 lg:order-2">
            <FloatingStatsGrid />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
