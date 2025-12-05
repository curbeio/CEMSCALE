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
        
        {/* Moon horizon - Selflane style: ultra-thin rim only */}
        <div 
          className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
          style={{ height: '180px' }}
        >
          {/* Soft bloom/glow above the rim */}
          <div 
            className="absolute left-1/2"
            style={{
              width: '160vw',
              height: '160vw',
              bottom: 'calc(-160vw + 90px)',
              transform: 'translateX(-50%) scaleY(0.1)',
              background: 'radial-gradient(ellipse at 50% 55%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 35%, transparent 65%)',
              filter: 'blur(20px)',
            }}
          />
          
          {/* The planet sphere - pure black, only rim visible via mask */}
          <div 
            className="absolute left-1/2"
            style={{
              width: '220vw',
              height: '220vw',
              bottom: 'calc(-220vw + 70px)',
              transform: 'translateX(-50%) scaleY(0.15)',
              background: '#000000',
              maskImage: 'radial-gradient(ellipse at 50% 45%, transparent calc(50% - 14px), rgba(255,255,255,0.9) calc(50% - 8px), rgba(255,255,255,0.4) calc(50% - 2px), transparent 50%)',
              WebkitMaskImage: 'radial-gradient(ellipse at 50% 45%, transparent calc(50% - 14px), rgba(255,255,255,0.9) calc(50% - 8px), rgba(255,255,255,0.4) calc(50% - 2px), transparent 50%)',
            }}
          />
          
          {/* Bright rim line */}
          <div 
            className="absolute left-1/2"
            style={{
              width: '200vw',
              height: '200vw',
              bottom: 'calc(-200vw + 72px)',
              transform: 'translateX(-50%) scaleY(0.15)',
              background: 'transparent',
              borderRadius: '50%',
              boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.2), inset 0 4px 8px rgba(255,255,255,0.08)',
            }}
          />
        </div>
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
              <span className="text-white">Infinite </span>
              <span className="inline-flex items-center mx-3 align-middle">
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
