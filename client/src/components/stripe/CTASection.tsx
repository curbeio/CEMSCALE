import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 xl:py-40 relative overflow-hidden">
      <div className="absolute inset-0 stripe-hero-gradient" />
      
      <div className="relative max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7CFD98]/20 text-[#7CFD98] text-sm font-medium mb-6">
          <Zap className="h-4 w-4" />
          Start today
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight mb-4">
          Ready to get more leads?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Access millions of verified B2B contacts and start selling more. 
          Telephony, Marketing, CRM and Leads in one platform.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="rounded-full px-8 text-base h-12"
            data-testid="button-cta-start"
          >
            Get Leads Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-8 text-base h-12"
            data-testid="button-cta-contact"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
