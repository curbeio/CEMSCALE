import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, LayoutDashboard } from "lucide-react";

export function StartupSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 xl:py-40">
      <div className="max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <Badge variant="secondary" className="mb-4">Get Started</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight mb-4">
            Start scaling with CemScale today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Build on CemScale to launch faster, adapt as you grow, and automate data workflows to do more with less.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <Card className="p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#7E4EF2]/20 to-[#6B8CFF]/20 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
            
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-[#7E4EF2]/10 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-[#7E4EF2]" />
              </div>
              
              <Badge variant="secondary" className="mb-4">Quick Setup</Badge>
              
              <h3 className="text-2xl font-semibold mb-4">
                Get started in minutes, not weeks
              </h3>
              
              <p className="text-muted-foreground mb-6">
                CemScale's guided onboarding helps you connect your data sources and start seeing unified insights within your first day.
              </p>

              <div className="bg-muted/50 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6B8CFF] to-[#7E4EF2] flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">CS</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Your Business</p>
                    <p className="text-xs text-muted-foreground">CemScale Platform</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Dashboard</Badge>
                  <Badge variant="secondary" className="text-xs">Leads</Badge>
                  <Badge variant="secondary" className="text-xs">Marketing</Badge>
                </div>
              </div>
              
              <Button className="rounded-full gap-2" data-testid="button-quick-start">
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          <Card className="p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#7CFD98]/20 to-[#6B8CFF]/20 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
            
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-[#7CFD98]/10 flex items-center justify-center mb-6">
                <LayoutDashboard className="h-6 w-6 text-[#7CFD98]" />
              </div>
              
              <Badge variant="secondary" className="mb-4">Live Demo</Badge>
              
              <h3 className="text-2xl font-semibold mb-4">
                See your data come together in real-time
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Schedule a personalized demo to see how CemScale can transform your scattered data into actionable insights.
              </p>

              <div className="bg-muted/50 rounded-xl p-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Dashboard views</span>
                    <span className="font-medium text-[#7CFD98]">Real-time</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Data sources</span>
                    <span className="font-medium text-[#6B8CFF]">Unified</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Insights</span>
                    <span className="font-medium text-[#7E4EF2]">Actionable</span>
                  </div>
                </div>
              </div>
              
              <Button className="rounded-full gap-2" variant="outline" data-testid="button-schedule-demo">
                Schedule Demo <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
