import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, CreditCard, Zap } from "lucide-react";

export function StartupSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">For Startups</Badge>
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">
            Startups build on Stripe to launch faster
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Build on Stripe to launch faster, adapt as you grow, and automate workflows to do more with less.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
            
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              
              <Badge variant="secondary" className="mb-4">Atlas</Badge>
              
              <h3 className="text-2xl font-semibold mb-4">
                Form a legal entity, issue stock, and start accepting payments
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Stripe Atlas helps you incorporate your startup as a Delaware C-Corp with all the legal, tax, and banking infrastructure you need.
              </p>

              <div className="bg-muted/50 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">RR</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Rocket Rides, Inc.</p>
                    <p className="text-xs text-muted-foreground">Delaware C-Corporation</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-xs">Incorporated</Badge>
                  <Badge variant="secondary" className="text-xs">Bank Account</Badge>
                  <Badge variant="secondary" className="text-xs">Tax ID</Badge>
                </div>
              </div>
              
              <Button className="rounded-full gap-2" data-testid="button-learn-atlas">
                Learn about Atlas <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          <Card className="p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
            
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <CreditCard className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              
              <Badge variant="secondary" className="mb-4">Checkout</Badge>
              
              <h3 className="text-2xl font-semibold mb-4">
                Launch a business with a prebuilt payment page
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Start with Checkout—our hosted payment form that's optimized for conversion and supports 100+ payment methods.
              </p>

              <div className="bg-muted/50 rounded-xl p-4 mb-6">
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Email</label>
                    <div className="h-9 rounded-md border border-border bg-background mt-1 flex items-center px-3 text-sm text-muted-foreground">
                      jane.diaz@example.com
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Card information</label>
                    <div className="h-9 rounded-md border border-border bg-background mt-1 flex items-center px-3 text-sm font-mono text-muted-foreground">
                      4242 4242 4242 4242
                    </div>
                  </div>
                  <Button className="w-full" size="sm">
                    Pay $99.00
                  </Button>
                </div>
              </div>
              
              <Button className="rounded-full gap-2" variant="outline" data-testid="button-start-checkout">
                Start with Checkout <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
