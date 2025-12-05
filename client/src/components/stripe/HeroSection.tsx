import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#f5f5f7] dark:bg-[#0a0a0c]">
      
      {/* Header spacing */}
      <div className="h-20" />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pb-8">
        
        {/* Text content - centered */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8e8ed] dark:bg-white/10 text-sm mb-8 animate-fade-up"
          >
            <div className="w-2 h-2 rounded-full bg-[#7CFD98] animate-pulse" />
            <span className="text-[#1d1d1f]/70 dark:text-white/70 font-medium">Customer Engagement Management</span>
          </div>
          
          {/* Headline */}
          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
            data-testid="text-hero-headline"
          >
            <span className="text-[#1d1d1f] dark:text-white">Every customer signal.</span>
            <br />
            <span className="bg-gradient-to-r from-[#6B8CFF] via-[#7CFD98] to-[#7E4EF2] bg-clip-text text-transparent">
              One intelligent system.
            </span>
          </h1>
          
          <p 
            className="text-lg lg:text-xl text-[#1d1d1f]/60 dark:text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.2s' }}
            data-testid="text-hero-subheadline"
          >
            CemScale unifies email, calls, SMS, WhatsApp, and in-app events into a single engagement brain, so your teams see context, act in real time, and never drop a conversation.
          </p>
          
          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Button 
              size="lg"
              className="rounded-full px-8 h-14 text-base gap-2 bg-[#1d1d1f] hover:bg-[#333] dark:bg-white dark:hover:bg-white/90 text-white dark:text-[#1d1d1f] font-semibold shadow-lg"
              data-testid="button-hero-start"
            >
              Start orchestrating engagement
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 text-base gap-2 bg-transparent border-[#1d1d1f]/20 dark:border-white/20 text-[#1d1d1f] dark:text-white hover:bg-[#1d1d1f]/5 dark:hover:bg-white/5"
              data-testid="button-hero-demo"
            >
              <Play className="h-4 w-4" />
              Watch 3-minute story
            </Button>
          </div>
          
          {/* Trust badges */}
          <p 
            className="text-sm text-[#1d1d1f]/40 dark:text-white/30 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            Trusted by 1,000+ customer service teams worldwide
          </p>
        </div>
        
        {/* Product screenshots */}
        <div 
          className="relative w-full max-w-6xl mx-auto animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          {/* Main dashboard screenshot */}
          <div 
            className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl"
            style={{
              transform: 'perspective(2000px) rotateX(8deg)',
              transformOrigin: 'center top',
              maxWidth: '1000px',
            }}
          >
            {/* Browser chrome */}
            <div className="bg-[#f5f5f7] dark:bg-[#2a2a2c] px-4 py-3 flex items-center gap-2 border-b border-black/5 dark:border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1.5 rounded-lg bg-white dark:bg-[#1a1a1c] text-xs text-[#1d1d1f]/50 dark:text-white/50 flex items-center gap-2">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  app.cemscale.com
                </div>
              </div>
              <div className="w-16" />
            </div>
            
            {/* Dashboard content */}
            <div className="bg-white dark:bg-[#1a1a1c] p-6">
              {/* Top nav */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6B8CFF] to-[#7E4EF2] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-[#1d1d1f] dark:text-white">CemScale</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7CFD98]/10 text-[#059669] text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-[#7CFD98] animate-pulse" />
                    All systems operational
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6B8CFF] to-[#7E4EF2]" />
                </div>
              </div>
              
              {/* Stats row */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Active Conversations', value: '847', change: '+12%', color: '#7CFD98' },
                  { label: 'Avg Response Time', value: '1.8s', change: '-24%', color: '#6B8CFF' },
                  { label: 'Resolution Rate', value: '94%', change: '+8%', color: '#7E4EF2' },
                  { label: 'Customer Satisfaction', value: '4.9', change: '+0.3', color: '#FFB347' },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#f5f5f7] dark:bg-[#2a2a2c]">
                    <p className="text-xs text-[#1d1d1f]/50 dark:text-white/50 mb-1">{stat.label}</p>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-[#1d1d1f] dark:text-white">{stat.value}</span>
                      <span className="text-xs font-medium mb-1" style={{ color: stat.color }}>{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Two columns */}
              <div className="grid grid-cols-3 gap-4">
                {/* Activity feed */}
                <div className="col-span-2 rounded-xl bg-[#f5f5f7] dark:bg-[#2a2a2c] p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-[#1d1d1f] dark:text-white">Live Activity</h3>
                    <span className="text-xs text-[#7CFD98] font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7CFD98] animate-pulse" />
                      Live
                    </span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { channel: 'WhatsApp', name: 'Sarah Johnson', msg: 'Interested in the premium plan...', time: 'Just now', color: '#25D366' },
                      { channel: 'Call', name: 'Michael Brown', msg: 'Incoming call - Lead #4521', time: '2m ago', color: '#7CFD98' },
                      { channel: 'Email', name: 'David Wilson', msg: 'Re: Quote request for enterprise', time: '5m ago', color: '#6B8CFF' },
                      { channel: 'SMS', name: 'Emily Davis', msg: 'Confirmation received, thank you!', time: '8m ago', color: '#FFB347' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-[#1a1a1c]">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.channel[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm text-[#1d1d1f] dark:text-white">{item.name}</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[#f5f5f7] dark:bg-[#2a2a2c] text-[#1d1d1f]/50 dark:text-white/50">{item.channel}</span>
                          </div>
                          <p className="text-xs text-[#1d1d1f]/50 dark:text-white/50 truncate">{item.msg}</p>
                        </div>
                        <span className="text-xs text-[#1d1d1f]/30 dark:text-white/30 whitespace-nowrap">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Channels */}
                <div className="rounded-xl bg-[#f5f5f7] dark:bg-[#2a2a2c] p-4">
                  <h3 className="font-semibold text-[#1d1d1f] dark:text-white mb-4">Channels</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'WhatsApp', active: 234, color: '#25D366' },
                      { name: 'Phone', active: 156, color: '#7CFD98' },
                      { name: 'Email', active: 312, color: '#6B8CFF' },
                      { name: 'SMS', active: 89, color: '#FFB347' },
                      { name: 'Web Chat', active: 56, color: '#7E4EF2' },
                    ].map((channel, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: channel.color }} />
                          <span className="text-sm text-[#1d1d1f] dark:text-white">{channel.name}</span>
                        </div>
                        <span className="text-sm font-medium text-[#1d1d1f]/70 dark:text-white/70">{channel.active}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Mini chart */}
                  <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5">
                    <p className="text-xs text-[#1d1d1f]/50 dark:text-white/50 mb-2">Today's volume</p>
                    <div className="flex items-end gap-1 h-12">
                      {[35, 52, 48, 65, 58, 72, 68, 85, 78, 92, 88, 95].map((h, i) => (
                        <div 
                          key={i}
                          className="flex-1 rounded-sm bg-gradient-to-t from-[#6B8CFF] to-[#7CFD98]"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Reflection/shadow effect */}
          <div 
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-32 blur-3xl opacity-20"
            style={{
              background: 'linear-gradient(to bottom, rgba(107, 140, 255, 0.3), transparent)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
