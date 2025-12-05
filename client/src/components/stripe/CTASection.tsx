import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-[#030014]">
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(107, 76, 255, 0.15) 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7cffd4]/20 text-[#7cffd4] text-sm font-medium mb-6">
          <Zap className="h-4 w-4" />
          Start today
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight mb-4 text-white">
          Ready to get more leads?
        </h2>
        <p className="text-lg text-[#a59ecb] max-w-2xl mx-auto mb-8">
          Access millions of verified B2B contacts and start selling more. 
          Telephony, Marketing, CRM and Leads in one platform.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="rounded-full px-8 text-base h-12 bg-[#6b4cff] hover:bg-[#7c5fff] text-white shadow-lg shadow-[#6b4cff]/25"
            data-testid="button-cta-start"
          >
            Get Leads Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-8 text-base h-12 bg-transparent border-[#3d3a50] text-white hover:bg-[#1a1a2e] hover:border-[#4d4a60]"
            data-testid="button-cta-contact"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
