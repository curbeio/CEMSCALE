import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Building2, ArrowRight, Crown } from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small teams getting started with AI-powered engagement.",
    price: 49,
    period: "per user/month",
    highlight: false,
    icon: Zap,
    color: "#a78bfa",
    features: [
      "Up to 5 team members",
      "1,000 AI-enriched contacts/month",
      "Basic email & SMS campaigns",
      "AI chatbot (100 conversations)",
      "Standard analytics dashboard",
      "Email support",
      "CemScale branding",
    ],
    cta: "Start Free Trial",
  },
  {
    id: "professional",
    name: "Professional",
    description: "For growing teams that need advanced AI automation and insights.",
    price: 149,
    period: "per user/month",
    highlight: true,
    popular: true,
    icon: Sparkles,
    color: "#7cffd4",
    features: [
      "Up to 25 team members",
      "10,000 AI-enriched contacts/month",
      "Advanced multi-channel campaigns",
      "AI chatbot (unlimited)",
      "Predictive lead scoring",
      "AI-powered recommendations",
      "Custom workflows & automation",
      "Priority support 24/7",
      "Remove CemScale branding",
      "API access",
    ],
    cta: "Start Free Trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Custom AI solutions for large organizations with complex needs.",
    price: null,
    priceLabel: "Custom",
    period: "tailored pricing",
    highlight: false,
    icon: Building2,
    color: "#6b4cff",
    features: [
      "Unlimited team members",
      "Unlimited AI-enriched contacts",
      "White-label solution",
      "Custom AI model training",
      "Dedicated success manager",
      "On-premise deployment option",
      "Custom integrations",
      "SLA guarantee 99.99%",
      "Advanced security & compliance",
      "Phone & video support",
    ],
    cta: "Contact Sales",
  },
];

export function PricingSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#030014] relative overflow-hidden" id="pricing">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(107, 76, 255, 0.08) 0%, transparent 60%)',
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <Badge className="mb-4 bg-[#6b4cff]/20 text-[#a78bfa] border-[#6b4cff]/30">
            <Crown className="w-3 h-3 mr-1" />
            Pricing
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
            Simple pricing,
            <span className="block sm:inline bg-gradient-to-r from-[#6b4cff] to-[#7cffd4] bg-clip-text text-transparent"> powerful AI</span>
          </h2>
          <p className="text-base sm:text-lg text-[#a59ecb] max-w-2xl mx-auto px-2">
            Choose the plan that fits your business. All plans include our core AI features. 
            Scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-xl p-5 sm:p-6 lg:p-8 transition-all duration-300 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-[#1a1a2e] to-[#0a0a1a] border-2 border-[#7cffd4]/50 shadow-xl shadow-[#7cffd4]/10 md:scale-[1.02]'
                  : 'bg-[#0a0a1a]/80 border border-[#1f1f35] hover:border-[#6b4cff]/50'
              }`}
              data-testid={`card-pricing-${plan.id}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[#7cffd4] text-[#030014] font-semibold px-3 sm:px-4 py-0.5 sm:py-1 text-xs">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              {/* Plan Header */}
              <div className="mb-5 sm:mb-6">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${plan.color}20` }}
                >
                  <plan.icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: plan.color }} />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs sm:text-sm text-[#a59ecb] min-h-[36px] sm:min-h-[40px]">{plan.description}</p>
              </div>
              
              {/* Price */}
              <div className="mb-5 sm:mb-6">
                <div className="flex items-baseline gap-1">
                  {plan.price !== null ? (
                    <>
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-[#a59ecb] text-sm">USD</span>
                    </>
                  ) : (
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{plan.priceLabel}</span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-[#8b87a5] mt-1">{plan.period}</p>
              </div>
              
              {/* CTA Button */}
              <Button
                className={`w-full rounded-full h-10 sm:h-12 text-sm sm:text-base font-medium gap-2 mb-6 sm:mb-8 ${
                  plan.highlight
                    ? 'bg-[#7cffd4] hover:bg-[#6eefc4] text-[#030014]'
                    : 'bg-[#6b4cff] hover:bg-[#7c5fff] text-white'
                }`}
                data-testid={`button-pricing-${plan.id}`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
              
              {/* Features */}
              <div className="space-y-2.5 sm:space-y-3">
                <p className="text-xs sm:text-sm font-medium text-white mb-3 sm:mb-4">What's included:</p>
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2.5 sm:gap-3">
                    <div 
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${plan.color}20` }}
                    >
                      <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" style={{ color: plan.color }} />
                    </div>
                    <span className="text-xs sm:text-sm text-[#a59ecb]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-[#8b87a5] text-sm mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#a59ecb]">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#7cffd4]" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#7cffd4]" />
              No setup fees
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#7cffd4]" />
              Free onboarding
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
