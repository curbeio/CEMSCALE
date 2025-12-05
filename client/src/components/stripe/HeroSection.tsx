import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

// Illustrated Background Component
function IllustratedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sky gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, 
              #e8f0f8 0%, 
              #d4e4f7 15%,
              #c8daf5 30%,
              #f0e6d3 60%,
              #f5e8d0 80%,
              #e8d5b8 100%
            )
          `,
        }}
      />
      
      {/* Sun glow */}
      <div 
        className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(255, 245, 220, 0.8) 0%, rgba(255, 240, 200, 0.4) 40%, transparent 70%)',
        }}
      />
      
      {/* Distant hills - Layer 1 */}
      <svg 
        className="absolute bottom-0 left-0 right-0 h-[70%] w-full"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <defs>
          <linearGradient id="hill1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7ba3c9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6b93b9" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="hill2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5a8bb5" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4a7ba5" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="hill3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4a855a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3a7550" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="hill4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5a9968" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4a8958" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="foreground" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6aab72" />
            <stop offset="50%" stopColor="#5a9b62" />
            <stop offset="100%" stopColor="#4a8b52" />
          </linearGradient>
        </defs>
        
        {/* Distant mountains */}
        <path 
          d="M0 450 Q200 380, 400 420 T800 400 T1200 430 T1440 410 L1440 700 L0 700 Z" 
          fill="url(#hill1)"
        />
        
        {/* Mid hills */}
        <path 
          d="M0 500 Q150 450, 300 480 T600 460 T900 490 T1200 470 T1440 500 L1440 700 L0 700 Z" 
          fill="url(#hill2)"
        />
        
        {/* Trees silhouettes - left side */}
        <g fill="url(#hill3)">
          <ellipse cx="100" cy="520" rx="60" ry="80" />
          <ellipse cx="180" cy="530" rx="50" ry="70" />
          <ellipse cx="50" cy="540" rx="40" ry="60" />
          <ellipse cx="250" cy="550" rx="45" ry="65" />
        </g>
        
        {/* Trees silhouettes - right side */}
        <g fill="url(#hill3)">
          <ellipse cx="1340" cy="520" rx="60" ry="80" />
          <ellipse cx="1260" cy="530" rx="50" ry="70" />
          <ellipse cx="1390" cy="540" rx="40" ry="60" />
          <ellipse cx="1190" cy="550" rx="45" ry="65" />
        </g>
        
        {/* Closer hills with trees */}
        <path 
          d="M0 580 Q100 540, 250 560 T500 550 L500 700 L0 700 Z" 
          fill="url(#hill4)"
        />
        <path 
          d="M940 550 Q1100 530, 1250 560 T1440 540 L1440 700 L940 700 Z" 
          fill="url(#hill4)"
        />
        
        {/* Foreground grass */}
        <path 
          d="M0 650 Q200 630, 400 660 T800 640 T1200 660 T1440 650 L1440 700 L0 700 Z" 
          fill="url(#foreground)"
        />
      </svg>
      
      {/* Light rays */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60%] opacity-30"
        style={{
          background: 'conic-gradient(from 180deg at 50% 0%, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%, rgba(255,255,255,0.1) 55%, transparent 60%)',
        }}
      />
      
      {/* Subtle grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

// Floating UI Card Component
function FloatingCard({ 
  children, 
  className = "",
  style = {}
}: { 
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div 
      className={`rounded-2xl overflow-hidden shadow-2xl ${className}`}
      style={{
        boxShadow: '0 25px 80px rgba(0,0,0,0.15), 0 10px 30px rgba(0,0,0,0.1)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      
      {/* Illustrated Background */}
      <IllustratedBackground />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        
        {/* Text content */}
        <div className="max-w-2xl mb-8">
          
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm mb-6 shadow-sm animate-fade-up"
          >
            <span className="text-[#1d1d1f]/70 font-medium">Customer Engagement Management</span>
          </div>
          
          {/* Headline */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
            data-testid="text-hero-headline"
          >
            <span className="text-[#1d1d1f]">The #1 Engagement Platform.</span>
            <br />
            <span className="text-[#1d1d1f]">The next generation CRM.</span>
            <br />
            <span className="text-[#1d1d1f]">One seamless suite.</span>
          </h1>
          
          <p 
            className="text-base lg:text-lg text-[#1d1d1f]/70 max-w-lg mb-6 leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.2s' }}
            data-testid="text-hero-subheadline"
          >
            CemScale unifies email, calls, SMS, WhatsApp, and in-app events into a single engagement brain—built on a platform that maximizes efficiency and delivers superior service.
          </p>
          
          {/* CTAs */}
          <div 
            className="flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Button 
              className="rounded-full px-6 h-11 text-sm gap-2 bg-[#6B8CFF] hover:bg-[#5a7be8] text-white font-medium shadow-lg"
              data-testid="button-hero-start"
            >
              View demo
            </Button>
            <Button 
              variant="outline"
              className="rounded-full px-6 h-11 text-sm gap-2 bg-white/80 backdrop-blur-sm border-[#1d1d1f]/10 text-[#1d1d1f] hover:bg-white"
              data-testid="button-hero-demo"
            >
              Start free trial
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Floating Product Screenshots */}
        <div className="relative mt-4">
          
          {/* Main dashboard card - center left */}
          <FloatingCard 
            className="absolute left-[5%] top-0 w-[320px] animate-float-card-1"
            style={{
              transform: 'perspective(1000px) rotateY(5deg) rotateX(-2deg)',
            }}
          >
            <div className="bg-white p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#6B8CFF] to-[#7E4EF2]" />
                <span className="text-xs font-semibold text-[#1d1d1f]">CemScale</span>
              </div>
              <div className="space-y-2">
                {['Sarah replied via WhatsApp', 'Call ended - 4m 32s', 'New lead: Emily Davis'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-[#f5f5f7]">
                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#25D366]' : i === 1 ? 'bg-[#7CFD98]' : 'bg-[#6B8CFF]'}`} />
                    <span className="text-xs text-[#1d1d1f]/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FloatingCard>
          
          {/* Center main card */}
          <FloatingCard 
            className="mx-auto w-[400px] animate-float-card-2"
            style={{
              transform: 'perspective(1000px) rotateX(-3deg)',
            }}
          >
            <div className="bg-white">
              {/* Header */}
              <div className="px-4 py-3 border-b border-[#f0f0f0] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6B8CFF] to-[#7E4EF2]" />
                  <div>
                    <p className="text-sm font-medium text-[#1d1d1f]">Michael Brown</p>
                    <p className="text-xs text-[#1d1d1f]/50">Lead #4521 · Premium</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#7CFD98] animate-pulse" />
                  <span className="text-xs text-[#7CFD98]">Active</span>
                </div>
              </div>
              
              {/* Chat messages */}
              <div className="p-4 space-y-3 bg-[#fafafa]">
                <div className="flex justify-start">
                  <div className="max-w-[80%] px-4 py-2 rounded-2xl rounded-bl-md bg-white shadow-sm">
                    <p className="text-sm text-[#1d1d1f]">Hi, I'm interested in the enterprise plan. Can you tell me more about pricing?</p>
                    <p className="text-[10px] text-[#1d1d1f]/40 mt-1">10:32 AM</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[80%] px-4 py-2 rounded-2xl rounded-br-md bg-[#6B8CFF] text-white shadow-sm">
                    <p className="text-sm">Of course! Our enterprise plan starts at $299/month and includes unlimited seats...</p>
                    <p className="text-[10px] text-white/60 mt-1">10:33 AM</p>
                  </div>
                </div>
              </div>
              
              {/* Input */}
              <div className="px-4 py-3 border-t border-[#f0f0f0] flex items-center gap-2">
                <input 
                  type="text" 
                  placeholder="Type a message..." 
                  className="flex-1 text-sm bg-[#f5f5f7] rounded-full px-4 py-2 outline-none"
                />
                <div className="w-8 h-8 rounded-full bg-[#6B8CFF] flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </FloatingCard>
          
          {/* Right stats card */}
          <FloatingCard 
            className="absolute right-[5%] top-8 w-[280px] animate-float-card-3"
            style={{
              transform: 'perspective(1000px) rotateY(-8deg) rotateX(-2deg)',
            }}
          >
            <div className="bg-white p-4">
              <p className="text-xs text-[#1d1d1f]/50 uppercase tracking-wider mb-3">Performance</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Response', value: '1.8s', color: '#7CFD98' },
                  { label: 'Resolution', value: '94%', color: '#6B8CFF' },
                  { label: 'CSAT', value: '4.9', color: '#FFB347' },
                  { label: 'Active', value: '847', color: '#7E4EF2' },
                ].map((stat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#f5f5f7]">
                    <p className="text-[10px] text-[#1d1d1f]/50 mb-1">{stat.label}</p>
                    <p className="text-lg font-bold" style={{ color: stat.color }}>{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </FloatingCard>
        </div>
        
        {/* Trust line */}
        <p 
          className="text-center text-sm text-[#1d1d1f]/50 mt-48 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          Trusted by over 1,000 customer service leaders
        </p>
      </div>
    </section>
  );
}
