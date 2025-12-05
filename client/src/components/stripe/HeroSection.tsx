import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030014]">
      
      {/* Background gradient layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, #1a0a4a 0%, #0a0520 50%, #030014 100%)',
          }}
        />
        
        {/* Top spotlight/glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px]"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(100, 60, 255, 0.2) 0%, transparent 60%)',
          }}
        />
        
        {/* Subtle light beam */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[200px] opacity-30"
          style={{
            background: 'linear-gradient(to bottom, rgba(140, 100, 255, 0.8), transparent)',
          }}
        />
        
      </div>
      
      {/* Bottom effect - Nebula Circuit Wave */}
      <div className="absolute inset-x-0 bottom-0 h-[380px] pointer-events-none overflow-hidden">
        
        {/* Aurora mesh backdrop */}
        <div className="absolute inset-x-[-20%] bottom-[-60%] h-[600px] opacity-60">
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 30% 80%, rgba(139, 92, 246, 0.25) 0%, transparent 70%)',
              animationDuration: '8s',
            }}
          />
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              background: 'radial-gradient(ellipse 50% 35% at 70% 75%, rgba(196, 181, 253, 0.2) 0%, transparent 70%)',
              animationDuration: '6s',
              animationDelay: '-3s',
            }}
          />
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              background: 'radial-gradient(ellipse 70% 50% at 50% 90%, rgba(107, 76, 255, 0.18) 0%, transparent 60%)',
              animationDuration: '10s',
              animationDelay: '-5s',
            }}
          />
        </div>
        
        {/* Animated wave ribbons */}
        <svg
          className="absolute inset-x-0 bottom-8 w-full"
          height="180"
          viewBox="0 0 100 18"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
              <stop offset="30%" stopColor="rgba(139, 92, 246, 0.5)" />
              <stop offset="50%" stopColor="rgba(196, 181, 253, 0.7)" />
              <stop offset="70%" stopColor="rgba(139, 92, 246, 0.5)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(196, 181, 253, 0)" />
              <stop offset="40%" stopColor="rgba(196, 181, 253, 0.3)" />
              <stop offset="60%" stopColor="rgba(196, 181, 253, 0.3)" />
              <stop offset="100%" stopColor="rgba(196, 181, 253, 0)" />
            </linearGradient>
            <filter id="waveGlow" x="-20%" y="-100%" width="140%" height="300%">
              <feGaussianBlur stdDeviation="0.2" />
            </filter>
          </defs>
          
          {/* Main flowing wave */}
          <path
            d="M0 14 C15 12, 30 8, 50 10 C70 12, 85 16, 100 14"
            fill="none"
            stroke="url(#waveGrad1)"
            strokeWidth="0.12"
            strokeLinecap="round"
            filter="url(#waveGlow)"
            style={{
              strokeDasharray: 24,
              animation: 'wave-flow 8s ease-in-out infinite',
            }}
          />
          
          {/* Secondary wave - offset */}
          <path
            d="M0 16 C20 14, 35 10, 50 12 C65 14, 80 17, 100 16"
            fill="none"
            stroke="url(#waveGrad2)"
            strokeWidth="0.08"
            filter="url(#waveGlow)"
            style={{
              strokeDasharray: 32,
              animation: 'wave-flow 12s linear infinite reverse',
            }}
          />
          
          {/* Tertiary subtle wave */}
          <path
            d="M0 12 C25 11, 40 7, 50 9 C60 11, 75 13, 100 12"
            fill="none"
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="0.06"
            filter="url(#waveGlow)"
            style={{
              strokeDasharray: 16,
              animation: 'wave-flow 6s ease-in-out infinite',
              animationDelay: '-2s',
            }}
          />
        </svg>
        
        {/* Central beam connector */}
        <div 
          className="absolute left-1/2 bottom-16 -translate-x-1/2 w-[2px] h-36"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(139, 92, 246, 0.4) 30%, rgba(196, 181, 253, 0.6) 70%, rgba(139, 92, 246, 0.3) 100%)',
          }}
        />
        
        {/* Floating particles */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <span
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              width: `${3 + (i % 3)}px`,
              height: `${3 + (i % 3)}px`,
              left: `${15 + i * 12}%`,
              bottom: `${12 + (i % 3) * 8}%`,
              background: `radial-gradient(circle, rgba(196, 181, 253, 0.9) 0%, rgba(139, 92, 246, 0.6) 50%, transparent 100%)`,
              boxShadow: '0 0 8px rgba(139, 92, 246, 0.5)',
              animationDuration: `${5 + i}s`,
              animationDelay: `${-i * 0.7}s`,
            }}
          />
        ))}
        
        {/* Glowing orbs at wave intersections */}
        <div 
          className="absolute left-1/2 bottom-24 -translate-x-1/2 w-3 h-3 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(196, 181, 253, 1) 0%, rgba(139, 92, 246, 0.8) 40%, transparent 70%)',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.3)',
            animationDuration: '3s',
          }}
        />
        <div 
          className="absolute left-[30%] bottom-28 w-2 h-2 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(196, 181, 253, 0.8) 0%, transparent 70%)',
            boxShadow: '0 0 12px rgba(139, 92, 246, 0.4)',
            animationDuration: '4s',
            animationDelay: '-1s',
          }}
        />
        <div 
          className="absolute left-[70%] bottom-28 w-2 h-2 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(196, 181, 253, 0.8) 0%, transparent 70%)',
            boxShadow: '0 0 12px rgba(139, 92, 246, 0.4)',
            animationDuration: '4s',
            animationDelay: '-2s',
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        
        {/* Hero Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered headline section */}
          <div className="text-center max-w-5xl mx-auto">
            
            {/* Main headline */}
            <h1 
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[1.1] mb-8 animate-fade-up"
              data-testid="text-hero-headline"
            >
              <span className="text-white">One platform.</span>
              <br />
              <span className="inline-flex items-center align-middle">
                <svg viewBox="0 0 100 50" className="w-20 h-10 sm:w-28 sm:h-14 lg:w-36 lg:h-18 xl:w-44 xl:h-22" fill="none">
                  <defs>
                    <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="50%" stopColor="#c4b5fd" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M50 25 C50 25, 35 8, 22 8 C9 8, 2 17, 2 25 C2 33, 9 42, 22 42 C35 42, 50 25, 50 25 C50 25, 65 8, 78 8 C91 8, 98 17, 98 25 C98 33, 91 42, 78 42 C65 42, 50 25, 50 25" 
                    stroke="url(#infinityGradient)" 
                    strokeWidth="5" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </span>
              <span className="text-white"> growth.</span>
            </h1>
            
            {/* Subtitle */}
            <p 
              className="text-lg sm:text-xl text-[#a59ecb] max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.1s' }}
              data-testid="text-hero-subheadline"
            >
              To empower businesses of all sizes with an intuitive, all-in-one CRM
              platform that drives growth and enhances customer relationships.
            </p>
            
            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap gap-4 justify-center animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              <Button 
                size="lg"
                className="rounded-full px-8 h-12 text-base gap-2 bg-[#6b4cff] hover:bg-[#7c5fff] text-white font-medium shadow-lg shadow-[#6b4cff]/25"
                data-testid="button-hero-start"
              >
                Get Started Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 text-base gap-2 bg-transparent border-[#3d3a50] text-white hover:bg-[#1a1a2e] hover:border-[#4d4a60]"
                data-testid="button-hero-demo"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
