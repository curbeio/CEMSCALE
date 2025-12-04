import { DashboardPreview } from "./DashboardPreview";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-32 xl:pt-48 xl:pb-40 overflow-hidden">
      <div className="absolute inset-0 stripe-hero-gradient" />
      
      <div className="relative max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl xl:max-w-5xl mx-auto mb-16 sm:mb-20">
          
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card shadow-sm text-sm font-medium text-primary mb-8 animate-float"
            data-testid="badge-hero-new"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Access to Millions of Verified Leads
          </div>
          
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[6.5rem] font-bold tracking-tight leading-[0.95] mb-6 animate-fade-up"
            data-testid="text-hero-headline"
          >
            Premium Data to <br className="hidden sm:block" />
            <span className="stripe-text-gradient">sell more.</span>
          </h1>
          
          <p 
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl xl:max-w-3xl mx-auto mb-8 leading-relaxed font-light animate-fade-up px-2"
            style={{ animationDelay: "0.1s" }}
            data-testid="text-hero-subheadline"
          >
            Access the most complete leads database on the market. 
            Verified contacts, segmented and ready to convert.
          </p>

          <div 
            className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <Badge variant="secondary" className="gap-2 px-4 py-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-[#7CFD98]" />
              +50M B2B Contacts
            </Badge>
            <Badge variant="secondary" className="gap-2 px-4 py-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-[#7CFD98]" />
              Real-time Verification
            </Badge>
            <Badge variant="secondary" className="gap-2 px-4 py-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-[#7CFD98]" />
              Advanced Segmentation
            </Badge>
          </div>
          
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all hero-button-shadow transform hover:-translate-y-0.5"
              data-testid="button-hero-start"
            >
              Get Leads Now
            </button>
            <button 
              className="glass-card px-8 py-4 rounded-full font-semibold text-foreground hover:bg-background/80 dark:hover:bg-white/20 transition-all"
              data-testid="button-hero-contact"
            >
              View Demo
            </button>
          </div>
        </div>
        
        <div 
          className="animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
