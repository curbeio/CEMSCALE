import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DashboardPreview } from "./DashboardPreview";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 stripe-hero-gradient" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 animate-fade-up"
            data-testid="text-hero-headline"
          >
            Financial infrastructure to{" "}
            <span className="stripe-text-gradient">grow your revenue</span>
          </h1>
          
          <p 
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up"
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
