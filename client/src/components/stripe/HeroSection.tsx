import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ContactFormModal } from "./ContactFormModal";

export function HeroSection() {
  const [showForm, setShowForm] = useState(false);
  const [formTitle, setFormTitle] = useState("Get Started");
  const particles = [
    { left: '8%', top: '12%', size: 3, duration: 7, delay: 0 },
    { left: '15%', top: '25%', size: 4, duration: 8, delay: -2 },
    { left: '22%', top: '8%', size: 2, duration: 6, delay: -4 },
    { left: '85%', top: '15%', size: 3, duration: 9, delay: -1 },
    { left: '92%', top: '28%', size: 4, duration: 7, delay: -3 },
    { left: '78%', top: '10%', size: 2, duration: 8, delay: -5 },
    { left: '5%', top: '45%', size: 3, duration: 8, delay: -1 },
    { left: '12%', top: '55%', size: 5, duration: 9, delay: -3 },
    { left: '95%', top: '42%', size: 4, duration: 7, delay: -2 },
    { left: '88%', top: '58%', size: 3, duration: 8, delay: -4 },
    { left: '18%', top: '70%', size: 4, duration: 6, delay: -2 },
    { left: '82%', top: '72%', size: 5, duration: 8, delay: -1 },
  ];

  const orbs = [
    { left: '10%', top: '20%', size: 8, duration: 4, delay: 0 },
    { left: '90%', top: '25%', size: 10, duration: 5, delay: -1 },
    { left: '8%', top: '60%', size: 6, duration: 4, delay: -2 },
    { left: '92%', top: '55%', size: 8, duration: 5, delay: -3 },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030014]">
      
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, #1a0a4a 0%, #0a0520 50%, #030014 100%)',
          }}
        />
        
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px]"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(100, 60, 255, 0.2) 0%, transparent 60%)',
          }}
        />
        
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[200px] opacity-30"
          style={{
            background: 'linear-gradient(to bottom, rgba(140, 100, 255, 0.8), transparent)',
          }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        <div className="absolute inset-0 opacity-50">
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
        </div>

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
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-5xl mx-auto">
            
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-8 animate-fade-up"
              data-testid="text-hero-headline"
            >
              <span className="text-white">One Platform.</span>
              <br />
              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#c4b5fd] to-[#7cffd4] bg-clip-text text-transparent">Infinite </span>
              <span className="bg-gradient-to-r from-[#7cffd4] to-[#8b5cf6] bg-clip-text text-transparent">Growth.</span>
            </h1>
            
            <p 
              className="text-lg sm:text-xl text-[#a59ecb] max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.1s' }}
              data-testid="text-hero-subheadline"
            >
              CEMSCALE is an intelligent Customer Engagement Management platform for regulated industries—
              uniting lead generation, AI-powered telephony, multi-channel marketing, and customer lifecycle 
              management into a single, seamless ecosystem.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              <Button 
                size="lg"
                className="rounded-full px-8 h-12 text-base gap-2 bg-[#6b4cff] hover:bg-[#7c5fff] text-white font-medium shadow-lg shadow-[#6b4cff]/25"
                data-testid="button-hero-start"
                onClick={() => { setFormTitle("Get Started"); setShowForm(true); }}
              >
                Get Started Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 text-base gap-2 border-[#3d3a50] text-white hover:bg-white/10"
                data-testid="button-hero-demo"
                onClick={() => { setFormTitle("Schedule a Demo"); setShowForm(true); }}
              >
                <Play className="h-4 w-4" />
                Schedule a Demo
              </Button>
            </div>
            
            <div 
              className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-[#a59ecb] animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#7cffd4]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Compliance by Design
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#7cffd4]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                10 to 10,000+ Seats
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#7cffd4]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                AI-Powered Automation
              </span>
            </div>
          </div>
          
        </div>
      </div>

      <ContactFormModal 
        isOpen={showForm} 
        onClose={() => setShowForm(false)} 
        title={formTitle}
        source="hero"
      />
    </section>
  );
}
