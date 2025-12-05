import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Sparkles, MessageSquare, Zap } from "lucide-react";
import { SiWhatsapp, SiGmail, SiSlack, SiHubspot } from "react-icons/si";

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
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(100, 60, 255, 0.15) 0%, transparent 70%)',
          }}
        />
        
        {/* Subtle light beam */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[300px] opacity-20"
          style={{
            background: 'linear-gradient(to bottom, rgba(140, 100, 255, 0.8), transparent)',
          }}
        />
        
        {/* Grid lines - decorative */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#a78bfa" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        
        {/* Hero Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          
          {/* Centered headline section */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            
            {/* Main headline */}
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-up"
              data-testid="text-hero-headline"
            >
              <span className="text-white">One platform.</span>
              <br />
              <span className="text-white">Infinite </span>
              <span className="inline-flex items-center mx-2">
                <svg viewBox="0 0 60 30" className="w-16 h-8 text-[#8b5cf6]" fill="currentColor">
                  <path d="M15 15c0 5.5-4.5 10-10 10S0 20.5 0 15 4.5 5 10 5c3 0 5.7 1.3 7.5 3.5L30 21.5c1.8 2.2 4.5 3.5 7.5 3.5 5.5 0 10-4.5 10-10s-4.5-10-10-10c-3 0-5.7 1.3-7.5 3.5L17.5 21.5C15.7 23.7 13 25 10 25c-5.5 0-10-4.5-10-10s4.5-10 10-10c3 0 5.7 1.3 7.5 3.5" />
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
          
          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            
            {/* Left Card - Chatbot Assistance */}
            <div className="md:row-span-2 rounded-2xl bg-[#0a0a1a]/80 border border-[#1f1f35] p-6 backdrop-blur-sm">
              {/* Chat mockup */}
              <div className="space-y-3 mb-6">
                {/* User message */}
                <div className="flex items-start gap-2 justify-end">
                  <div className="px-4 py-2 rounded-2xl rounded-tr-md bg-[#1a1a2e] text-white text-sm max-w-[80%]">
                    Hi, I want to check the status of my order
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6b4cff] to-[#8b5cf6] flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-white font-medium">JD</span>
                  </div>
                </div>
                
                {/* Bot response */}
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#7cffd4]/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-[#7cffd4]" />
                  </div>
                  <div className="px-4 py-2 rounded-2xl rounded-tl-md bg-[#6b4cff] text-white text-sm max-w-[80%]">
                    Sure! Can you provide your order number?
                  </div>
                </div>
                
                {/* User message */}
                <div className="flex items-start gap-2 justify-end">
                  <div className="px-4 py-2 rounded-2xl rounded-tr-md bg-[#1a1a2e] text-white text-sm max-w-[80%]">
                    Yes, It's #88294710.
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6b4cff] to-[#8b5cf6] flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-white font-medium">JD</span>
                  </div>
                </div>
                
                {/* Bot response */}
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#7cffd4]/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-[#7cffd4]" />
                  </div>
                  <div className="px-4 py-2 rounded-2xl rounded-tl-md bg-[#6b4cff] text-white text-sm max-w-[85%]">
                    Thanks! Your order #88294710 is currently out of delivery and should arrive by 5 PM.
                  </div>
                </div>
              </div>
              
              {/* Card title */}
              <h3 className="text-xl font-semibold text-white mb-2">Seamless Chatbot Assistance</h3>
              <p className="text-sm text-[#a59ecb]">
                Empower your customer interactions with intelligent chatbots that provide 24/7 support.
              </p>
            </div>
            
            {/* Middle Top Card - App Integrations */}
            <div className="rounded-2xl bg-[#0a0a1a]/80 border border-[#1f1f35] p-6 backdrop-blur-sm text-center">
              <div className="flex justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a2e] flex items-center justify-center border border-[#2a2a45]">
                  <SiSlack className="w-6 h-6 text-[#E01E5A]" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#1a1a2e] flex items-center justify-center border border-[#2a2a45]">
                  <SiHubspot className="w-6 h-6 text-[#ff7a59]" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#1a1a2e] flex items-center justify-center border border-[#2a2a45]">
                  <SiGmail className="w-6 h-6 text-[#EA4335]" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#1a1a2e] flex items-center justify-center border border-[#2a2a45]">
                  <SiWhatsapp className="w-6 h-6 text-[#25D366]" />
                </div>
              </div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#6b4cff]/20 text-[#a78bfa] text-xs font-medium mb-3">
                You
              </div>
              <h3 className="text-lg font-semibold text-white">App Integrations</h3>
            </div>
            
            {/* Right Card - AI-Driven Drafting */}
            <div className="md:row-span-2 rounded-2xl bg-[#0a0a1a]/80 border border-[#1f1f35] p-6 backdrop-blur-sm relative overflow-hidden">
              {/* Blurred text effect */}
              <div className="space-y-2 mb-4 opacity-60">
                <p className="text-sm text-[#a59ecb] blur-[1px]">productivity with AI tools that create professional proposals, and reports in sec...</p>
                <p className="text-sm text-[#a59ecb] blur-[2px]">nt re... ay min... and ensures clear and effect...</p>
              </div>
              
              {/* AI Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a2e] border border-[#2a2a45] mb-4">
                <Sparkles className="w-4 h-4 text-[#a78bfa]" />
                <span className="text-white font-semibold">CEM AI</span>
              </div>
              
              <div className="space-y-1 opacity-50 blur-[1px] mb-6">
                <p className="text-sm text-[#a59ecb]">ation. Spend less time...</p>
                <p className="text-sm text-[#a59ecb]">focusing on gr...</p>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">AI-Driven Drafting</h3>
              <p className="text-sm text-[#a59ecb]">
                Streamline your communications with an AI assistant that drafts emails, and proposals.
              </p>
            </div>
            
            {/* Middle Bottom Card - Security */}
            <div className="rounded-2xl bg-[#0a0a1a]/80 border border-[#1f1f35] p-6 backdrop-blur-sm text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#0a0a1a] border border-[#2a2a45] flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#7cffd4]" />
              </div>
              <h3 className="text-lg font-semibold text-white">Advance Security</h3>
            </div>
          </div>
          
          {/* Decorative connecting lines */}
          <div className="absolute left-0 bottom-0 w-full h-[400px] pointer-events-none opacity-30">
            <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 200 L100 200 L150 300 L200 300" stroke="#3d3a50" strokeWidth="1" />
              <path d="M1200 200 L1100 200 L1050 300 L1000 300" stroke="#3d3a50" strokeWidth="1" />
              <circle cx="100" cy="200" r="3" fill="#6b4cff" />
              <circle cx="1100" cy="200" r="3" fill="#6b4cff" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
