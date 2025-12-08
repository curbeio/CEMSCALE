import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-[#030014]">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[500px] sm:h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(107, 76, 255, 0.15) 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#7cffd4]/20 text-[#7cffd4] text-xs sm:text-sm font-medium mb-5 sm:mb-6">
          <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          AI-Powered Platform
        </div>
        
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white px-2">
          Let AI work for your business
        </h2>
        
        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#a59ecb] max-w-2xl mx-auto mb-8 px-2">
          AI that predicts, automates and converts. Access millions of verified contacts 
          and let artificial intelligence do the heavy lifting.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Button 
            size="lg" 
            className="rounded-full px-6 sm:px-8 text-sm sm:text-base h-11 sm:h-12 bg-[#6b4cff] hover:bg-[#7c5fff] text-white shadow-lg shadow-[#6b4cff]/25 w-full sm:w-auto"
            data-testid="button-cta-start"
          >
            Get Leads Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-6 sm:px-8 text-sm sm:text-base h-11 sm:h-12 bg-transparent border-[#3d3a50] text-white hover:bg-[#1a1a2e] hover:border-[#4d4a60] w-full sm:w-auto"
            data-testid="button-cta-contact"
          >
            Schedule a Demo
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-[#8b87a5]">
          <span>No credit card required</span>
          <span className="hidden sm:inline">|</span>
          <span>14-day free trial</span>
          <span className="hidden sm:inline">|</span>
          <span>Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}
