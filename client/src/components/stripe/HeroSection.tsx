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
        
        {/* Planet horizon effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[400px] overflow-hidden">
          {/* Horizon glow - the bright line */}
          <div 
            className="absolute bottom-[80px] left-1/2 -translate-x-1/2 w-[200%] h-[600px]"
            style={{
              background: 'radial-gradient(ellipse 50% 20% at 50% 100%, rgba(255, 255, 255, 0.15) 0%, rgba(180, 160, 255, 0.08) 30%, transparent 70%)',
            }}
          />
          
          {/* The curved planet surface */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[300px]"
            style={{
              background: 'radial-gradient(ellipse 50% 100% at 50% 100%, #0a0a15 0%, #050510 50%, transparent 100%)',
              borderRadius: '50% 50% 0 0',
            }}
          />
          
          {/* Horizon bright edge line */}
          <div 
            className="absolute bottom-[75px] left-1/2 -translate-x-1/2 w-[120%] h-[2px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, rgba(200, 180, 255, 0.2) 40%, transparent 70%)',
              filter: 'blur(1px)',
            }}
          />
          
          {/* Atmospheric glow above horizon */}
          <div 
            className="absolute bottom-[80px] left-1/2 -translate-x-1/2 w-[100%] h-[120px]"
            style={{
              background: 'radial-gradient(ellipse 60% 100% at 50% 100%, rgba(140, 120, 255, 0.12) 0%, transparent 60%)',
            }}
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        
        {/* Hero Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          
          {/* Centered headline section */}
          <div className="text-center max-w-4xl mx-auto mb-32">
            
            {/* Main headline */}
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-up"
              data-testid="text-hero-headline"
            >
              <span className="text-white">One platform.</span>
              <br />
              <span className="text-white">Infinite </span>
              <span className="inline-flex items-center mx-2 align-middle">
                <svg viewBox="0 0 100 50" className="w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12" fill="none">
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
              className="text-lg text-[#a59ecb] max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
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
