import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DashboardPreview } from "./DashboardPreview";

export function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-32 xl:pt-48 xl:pb-40 overflow-hidden">
      <div className="absolute inset-0 stripe-hero-gradient" />
      
      <div className="relative max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl xl:max-w-5xl mx-auto mb-10 sm:mb-16">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold tracking-tight leading-[1.1] mb-4 sm:mb-6 animate-fade-up"
            data-testid="text-hero-headline"
          >
            Financial infrastructure to{" "}
            <span className="stripe-text-gradient">grow your revenue</span>
          </h1>
          
          <p 
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-2xl xl:max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-up px-2"
            style={{ animationDelay: "0.1s" }}
            data-testid="text-hero-subheadline"
          >
            Join the millions of companies of all sizes that use Stripe to accept payments 
            online and in person, embed financial services, power custom revenue models, 
            and build a more profitable business.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 text-base h-12"
              data-testid="button-hero-start"
            >
              Start now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 text-base h-12"
              data-testid="button-hero-contact"
            >
              Contact sales
            </Button>
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
