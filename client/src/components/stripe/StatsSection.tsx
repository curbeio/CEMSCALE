import { useEffect, useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const stats = [
  { value: 50, label: "verified B2B contacts", suffix: "M+", prefix: "" },
  { value: 95, label: "data accuracy guaranteed", suffix: "%", prefix: "" },
  { value: 12, label: "companies in our database", suffix: "M+", prefix: "" },
  { value: 150, label: "countries with coverage", suffix: "+", prefix: "" },
];

function AnimatedCounter({ value, suffix, prefix, isVisible }: { value: number; suffix: string; prefix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [isVisible, value]);
  
  return (
    <span className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 bg-[#030014] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(107, 76, 255, 0.08) 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <Badge className="mb-4 bg-[#6b4cff]/20 text-[#a78bfa] border-[#6b4cff]/30">
            <TrendingUp className="w-3 h-3 mr-1" />
            Platform Metrics
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
            AI-powered data at scale
          </h2>
          <p className="text-base sm:text-lg text-[#a59ecb] max-w-2xl mx-auto px-2">
            Our AI processes millions of signals to deliver verified, enriched data. 
            Precision targeting powered by machine learning.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`relative p-4 sm:p-6 lg:p-8 rounded-xl bg-[#0a0a1a]/60 border border-[#1f1f35] text-center transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`stat-card-${index}`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#6b4cff]/0 to-[#6b4cff]/5 opacity-0 hover:opacity-100 transition-opacity" />
              
              <div 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#6b4cff] to-[#a78bfa] bg-clip-text text-transparent mb-2 relative" 
                data-testid={`stat-value-${index}`}
              >
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix}
                  isVisible={isVisible} 
                />
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-[#a59ecb] leading-snug relative" data-testid={`stat-label-${index}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
