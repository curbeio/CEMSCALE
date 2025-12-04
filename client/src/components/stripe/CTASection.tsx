import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 xl:py-40 relative overflow-hidden">
      <div className="absolute inset-0 stripe-hero-gradient" />
      
      <div className="relative max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight mb-4">
          Ready to get started?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Explore Stripe Payments, or create an account instantly and start accepting payments. 
          You can also contact us to design a custom package for your business.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="rounded-full px-8 text-base h-12"
            data-testid="button-cta-start"
          >
            Start now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-8 text-base h-12"
            data-testid="button-cta-contact"
          >
            Contact sales
          </Button>
        </div>
      </div>
    </section>
  );
}
