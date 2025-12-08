import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Clock, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030014]">
      
      {/* Background gradients - positioned behind content */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, #1a0a4a 0%, #0a0520 50%, #030014 100%)',
          }}
        />
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[400px] sm:h-[700px]"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(100, 60, 255, 0.2) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Subtle aurora effects - hidden on small screens for performance */}
      <div className="absolute inset-0 pointer-events-none hidden md:block opacity-40" style={{ zIndex: 0 }}>
        <div 
          className="absolute animate-pulse"
          style={{
            left: '-10%',
            top: '10%',
            width: '40%',
            height: '30%',
            background: 'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
            animationDuration: '8s',
          }}
        />
        <div 
          className="absolute animate-pulse"
          style={{
            right: '-10%',
            top: '15%',
            width: '35%',
            height: '25%',
            background: 'radial-gradient(ellipse 70% 50% at 70% 30%, rgba(196, 181, 253, 0.15) 0%, transparent 70%)',
            animationDuration: '10s',
          }}
        />
      </div>
      
      {/* Content - relative z-index ensures it's above backgrounds */}
      <div className="relative flex items-center justify-center py-24 sm:py-28 md:py-32 lg:py-40" style={{ zIndex: 10, minHeight: '100vh' }}>
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            
            {/* AI Badge */}
            <div 
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-[#7cffd4]/10 border border-[#7cffd4]/30 text-[#7cffd4] text-xs font-medium mb-4 sm:mb-6"
            >
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              Powered by Artificial Intelligence
            </div>
            
            {/* Main headline */}
            <h1 
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-4 sm:mb-6"
              data-testid="text-hero-headline"
            >
              <span className="text-white">We Bring </span>
              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#c4b5fd] to-[#8b5cf6] bg-clip-text text-transparent">Clarity</span>
              <br className="hidden xs:block" />
              <span className="text-white"> to Scattered Data</span>
            </h1>
            
            {/* Subtitle */}
            <p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-[#a59ecb] max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed"
              data-testid="text-hero-subheadline"
            >
              The AI-first Customer Engagement platform. Automate conversations, 
              predict behaviors, and turn every interaction into growth.
            </p>
            
            {/* Email Signup Form */}
            <div className="mb-4 sm:mb-6">
              <form 
                className="flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-lg mx-auto"
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
                  placeholder="Enter your work email"
                  required
                  className="flex-1 min-w-0 h-11 sm:h-12 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-[#3d3a50] text-white placeholder:text-[#8b87a5] focus:outline-none focus:border-[#6b4cff] focus:ring-2 focus:ring-[#6b4cff]/20 transition-all text-sm"
                  data-testid="input-hero-email"
                />
                <Button 
                  type="submit"
                  className="rounded-full px-5 h-11 sm:h-12 text-sm gap-2 bg-[#6b4cff] hover:bg-[#7c5fff] text-white font-semibold shadow-lg shadow-[#6b4cff]/25 whitespace-nowrap shrink-0"
                  data-testid="button-hero-start"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
              
              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4 text-xs sm:text-sm text-[#a59ecb]">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#7cffd4]" />
                  No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#7cffd4]" />
                  14-day free trial
                </span>
              </div>
            </div>

            {/* Watch Demo Button */}
            <div className="mt-4 sm:mt-6">
              <Button
                variant="ghost"
                className="text-[#a59ecb] hover:text-white gap-2 text-sm"
                data-testid="button-watch-demo"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white ml-0.5" />
                </div>
                Watch Demo
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
