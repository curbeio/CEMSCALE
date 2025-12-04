import { DashboardPreview } from "./DashboardPreview";

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
            New: Offline Integration 2.0
          </div>
          
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[6.5rem] font-bold tracking-tight leading-[0.95] mb-6 animate-fade-up"
            data-testid="text-hero-headline"
          >
            We bring clarity to <br className="hidden sm:block" />
            <span className="stripe-text-gradient">scattered data.</span>
          </h1>
          
          <p 
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl xl:max-w-3xl mx-auto mb-10 leading-relaxed font-light animate-fade-up px-2"
            style={{ animationDelay: "0.1s" }}
            data-testid="text-hero-subheadline"
          >
            Unify your Leads, Marketing, and Offline interactions into one scalable ecosystem. 
            Stop guessing, start growing.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all hero-button-shadow transform hover:-translate-y-0.5"
              data-testid="button-hero-start"
            >
              Start Scaling Now
            </button>
            <button 
              className="glass-card px-8 py-4 rounded-full font-semibold text-foreground hover:bg-background/80 dark:hover:bg-white/20 transition-all"
              data-testid="button-hero-contact"
            >
              Explore the System
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
