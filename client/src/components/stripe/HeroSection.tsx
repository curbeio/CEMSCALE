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
      
      {/* Bottom effect - tech horizon with layered ribbons */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        
        {/* Inverted purple spotlight at bottom - softer */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1400px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at center bottom, rgba(100, 60, 255, 0.15) 0%, transparent 70%)',
          }}
        />
        
        {/* Tech horizon - multiple layered lines with circuit nodes */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          height="160"
          viewBox="0 0 100 16"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="softLine" x="-10%" y="-50%" width="120%" height="200%">
              <feGaussianBlur stdDeviation="0.15" />
            </filter>
            <linearGradient id="horizonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(140, 100, 255, 0)" />
              <stop offset="20%" stopColor="rgba(140, 100, 255, 0.4)" />
              <stop offset="50%" stopColor="rgba(140, 100, 255, 0.6)" />
              <stop offset="80%" stopColor="rgba(140, 100, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(140, 100, 255, 0)" />
            </linearGradient>
          </defs>
          
          {/* Main horizontal tech line */}
          <path
            d="M0 14 L100 14"
            fill="none"
            stroke="url(#horizonGrad)"
            strokeWidth="0.08"
            filter="url(#softLine)"
          />
          
          {/* Secondary line - slightly above */}
          <path
            d="M10 12 L90 12"
            fill="none"
            stroke="rgba(140, 100, 255, 0.25)"
            strokeWidth="0.06"
            filter="url(#softLine)"
          />
          
          {/* Tertiary line - even higher */}
          <path
            d="M20 10 L80 10"
            fill="none"
            stroke="rgba(140, 100, 255, 0.15)"
            strokeWidth="0.04"
            filter="url(#softLine)"
          />
          
          {/* Central vertical connector from beam */}
          <path
            d="M50 0 L50 14"
            fill="none"
            stroke="rgba(140, 100, 255, 0.3)"
            strokeWidth="0.08"
            filter="url(#softLine)"
          />
          
          {/* Left diagonal connectors */}
          <path
            d="M50 14 L30 12"
            fill="none"
            stroke="rgba(140, 100, 255, 0.2)"
            strokeWidth="0.05"
            filter="url(#softLine)"
          />
          <path
            d="M30 12 L15 10"
            fill="none"
            stroke="rgba(140, 100, 255, 0.15)"
            strokeWidth="0.04"
            filter="url(#softLine)"
          />
          
          {/* Right diagonal connectors */}
          <path
            d="M50 14 L70 12"
            fill="none"
            stroke="rgba(140, 100, 255, 0.2)"
            strokeWidth="0.05"
            filter="url(#softLine)"
          />
          <path
            d="M70 12 L85 10"
            fill="none"
            stroke="rgba(140, 100, 255, 0.15)"
            strokeWidth="0.04"
            filter="url(#softLine)"
          />
          
          {/* Circuit nodes - small glowing dots */}
          <circle cx="50" cy="14" r="0.3" fill="rgba(140, 100, 255, 0.8)" filter="url(#softLine)" />
          <circle cx="30" cy="12" r="0.2" fill="rgba(140, 100, 255, 0.5)" filter="url(#softLine)" />
          <circle cx="70" cy="12" r="0.2" fill="rgba(140, 100, 255, 0.5)" filter="url(#softLine)" />
          <circle cx="15" cy="10" r="0.15" fill="rgba(140, 100, 255, 0.3)" filter="url(#softLine)" />
          <circle cx="85" cy="10" r="0.15" fill="rgba(140, 100, 255, 0.3)" filter="url(#softLine)" />
        </svg>
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
