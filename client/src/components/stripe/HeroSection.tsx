import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  // Particle configurations spread across entire hero
  const particles = [
    // Top area particles
    { left: '8%', top: '12%', size: 3, duration: 7, delay: 0 },
    { left: '15%', top: '25%', size: 4, duration: 8, delay: -2 },
    { left: '22%', top: '8%', size: 2, duration: 6, delay: -4 },
    { left: '85%', top: '15%', size: 3, duration: 9, delay: -1 },
    { left: '92%', top: '28%', size: 4, duration: 7, delay: -3 },
    { left: '78%', top: '10%', size: 2, duration: 8, delay: -5 },
    // Middle area particles
    { left: '5%', top: '45%', size: 3, duration: 8, delay: -1 },
    { left: '12%', top: '55%', size: 5, duration: 9, delay: -3 },
    { left: '95%', top: '42%', size: 4, duration: 7, delay: -2 },
    { left: '88%', top: '58%', size: 3, duration: 8, delay: -4 },
    // Lower-middle particles
    { left: '18%', top: '70%', size: 4, duration: 6, delay: -2 },
    { left: '25%', top: '78%', size: 3, duration: 7, delay: -4 },
    { left: '82%', top: '72%', size: 5, duration: 8, delay: -1 },
    { left: '75%', top: '80%', size: 3, duration: 9, delay: -3 },
    // Bottom area particles
    { left: '30%', top: '88%', size: 4, duration: 7, delay: -2 },
    { left: '45%', top: '85%', size: 3, duration: 8, delay: -1 },
    { left: '55%', top: '90%', size: 4, duration: 6, delay: -3 },
    { left: '70%', top: '86%', size: 3, duration: 7, delay: -4 },
  ];

  // Glowing orbs spread throughout
  const orbs = [
    { left: '10%', top: '20%', size: 8, duration: 4, delay: 0 },
    { left: '90%', top: '25%', size: 10, duration: 5, delay: -1 },
    { left: '8%', top: '60%', size: 6, duration: 4, delay: -2 },
    { left: '92%', top: '55%', size: 8, duration: 5, delay: -3 },
    { left: '15%', top: '85%', size: 10, duration: 4, delay: -1 },
    { left: '50%', top: '92%', size: 12, duration: 3, delay: 0 },
    { left: '85%', top: '88%', size: 10, duration: 4, delay: -2 },
  ];

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

      {/* Full-screen Nebula Effects Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Aurora mesh - distributed across entire hero */}
        <div className="absolute inset-0 opacity-50">
          {/* Top-left aurora */}
          <div 
            className="absolute animate-pulse"
            style={{
              left: '-10%',
              top: '5%',
              width: '50%',
              height: '40%',
              background: 'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
              animationDuration: '8s',
            }}
          />
          {/* Top-right aurora */}
          <div 
            className="absolute animate-pulse"
            style={{
              right: '-10%',
              top: '10%',
              width: '45%',
              height: '35%',
              background: 'radial-gradient(ellipse 70% 50% at 70% 30%, rgba(196, 181, 253, 0.15) 0%, transparent 70%)',
              animationDuration: '10s',
              animationDelay: '-4s',
            }}
          />
          {/* Center aurora */}
          <div 
            className="absolute animate-pulse"
            style={{
              left: '25%',
              top: '30%',
              width: '50%',
              height: '40%',
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(107, 76, 255, 0.12) 0%, transparent 70%)',
              animationDuration: '12s',
              animationDelay: '-6s',
            }}
          />
          {/* Left-middle aurora */}
          <div 
            className="absolute animate-pulse"
            style={{
              left: '-5%',
              top: '45%',
              width: '40%',
              height: '35%',
              background: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(139, 92, 246, 0.18) 0%, transparent 70%)',
              animationDuration: '9s',
              animationDelay: '-3s',
            }}
          />
          {/* Right-middle aurora */}
          <div 
            className="absolute animate-pulse"
            style={{
              right: '-5%',
              top: '50%',
              width: '40%',
              height: '35%',
              background: 'radial-gradient(ellipse 65% 55% at 70% 50%, rgba(196, 181, 253, 0.15) 0%, transparent 70%)',
              animationDuration: '11s',
              animationDelay: '-5s',
            }}
          />
          {/* Bottom-left aurora */}
          <div 
            className="absolute animate-pulse"
            style={{
              left: '0%',
              bottom: '5%',
              width: '50%',
              height: '40%',
              background: 'radial-gradient(ellipse 80% 60% at 25% 70%, rgba(139, 92, 246, 0.22) 0%, transparent 70%)',
              animationDuration: '8s',
              animationDelay: '-2s',
            }}
          />
          {/* Bottom-center aurora */}
          <div 
            className="absolute animate-pulse"
            style={{
              left: '25%',
              bottom: '-10%',
              width: '50%',
              height: '45%',
              background: 'radial-gradient(ellipse 70% 50% at 50% 80%, rgba(107, 76, 255, 0.2) 0%, transparent 70%)',
              animationDuration: '10s',
              animationDelay: '-4s',
            }}
          />
          {/* Bottom-right aurora */}
          <div 
            className="absolute animate-pulse"
            style={{
              right: '0%',
              bottom: '5%',
              width: '50%',
              height: '40%',
              background: 'radial-gradient(ellipse 75% 55% at 75% 70%, rgba(196, 181, 253, 0.18) 0%, transparent 70%)',
              animationDuration: '9s',
              animationDelay: '-6s',
            }}
          />
        </div>

        {/* Floating particles spread across entire hero */}
        {particles.map((p, i) => (
          <span
            key={`particle-${i}`}
            className="absolute rounded-full animate-float-particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: p.left,
              top: p.top,
              background: `radial-gradient(circle, rgba(196, 181, 253, 0.9) 0%, rgba(139, 92, 246, 0.6) 50%, transparent 100%)`,
              boxShadow: `0 0 ${p.size * 3}px rgba(139, 92, 246, 0.5)`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}

        {/* Glowing orbs distributed throughout */}
        {orbs.map((orb, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              left: orb.left,
              top: orb.top,
              background: `radial-gradient(circle, rgba(196, 181, 253, 0.8) 0%, rgba(139, 92, 246, 0.5) 40%, transparent 70%)`,
              boxShadow: `0 0 ${orb.size * 2}px rgba(139, 92, 246, 0.4), 0 0 ${orb.size * 4}px rgba(139, 92, 246, 0.2)`,
              animationDuration: `${orb.duration}s`,
              animationDelay: `${orb.delay}s`,
            }}
          />
        ))}

        {/* Connecting light beams */}
        <div 
          className="absolute left-[10%] top-[20%] w-[1px] h-[30%] opacity-20"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.6), transparent)',
          }}
        />
        <div 
          className="absolute right-[10%] top-[15%] w-[1px] h-[35%] opacity-20"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(196, 181, 253, 0.5), transparent)',
          }}
        />
        <div 
          className="absolute left-[15%] top-[60%] w-[1px] h-[25%] opacity-25"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.5), transparent)',
          }}
        />
        <div 
          className="absolute right-[15%] top-[55%] w-[1px] h-[30%] opacity-25"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(196, 181, 253, 0.5), transparent)',
          }}
        />

        {/* Horizontal connection lines */}
        <div 
          className="absolute left-0 top-[30%] w-[15%] h-[1px] opacity-15"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(139, 92, 246, 0.5), transparent)',
          }}
        />
        <div 
          className="absolute right-0 top-[35%] w-[15%] h-[1px] opacity-15"
          style={{
            background: 'linear-gradient(to left, transparent, rgba(196, 181, 253, 0.5), transparent)',
          }}
        />
        <div 
          className="absolute left-0 top-[65%] w-[12%] h-[1px] opacity-20"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(139, 92, 246, 0.6), transparent)',
          }}
        />
        <div 
          className="absolute right-0 top-[70%] w-[12%] h-[1px] opacity-20"
          style={{
            background: 'linear-gradient(to left, transparent, rgba(196, 181, 253, 0.6), transparent)',
          }}
        />
      </div>
      
      {/* Bottom wave effect */}
      <div className="absolute inset-x-0 bottom-0 h-[200px] pointer-events-none overflow-hidden">
        {/* Animated wave ribbons */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full"
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
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        
        {/* Hero Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered headline section */}
          <div className="text-center max-w-5xl mx-auto">
            
            {/* Main headline */}
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-8 animate-fade-up"
              data-testid="text-hero-headline"
            >
              <span className="text-white">We Bring </span>
              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#c4b5fd] to-[#8b5cf6] bg-clip-text text-transparent">Clarity</span>
              <br />
              <span className="text-white">to Scattered Data</span>
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
            
            {/* Email Signup Form */}
            <div 
              className="animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              <form 
                className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto mb-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const email = formData.get('email');
                  console.log('Starting registration with:', email);
                }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Work email address"
                  required
                  className="flex-1 h-12 px-5 rounded-full bg-white/10 backdrop-blur-sm border border-[#3d3a50] text-white placeholder:text-[#8b87a5] focus:outline-none focus:border-[#6b4cff] focus:ring-2 focus:ring-[#6b4cff]/20 transition-all"
                  data-testid="input-hero-email"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="rounded-full px-8 h-12 text-base gap-2 bg-[#6b4cff] hover:bg-[#7c5fff] text-white font-medium shadow-lg shadow-[#6b4cff]/25 whitespace-nowrap"
                  data-testid="button-hero-start"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
              
              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-[#a59ecb]">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#7cffd4]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#7cffd4]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  14-day free trial
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
