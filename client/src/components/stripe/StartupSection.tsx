import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, LayoutDashboard } from "lucide-react";

export function StartupSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#0a0a1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="mb-4 bg-[#6b4cff]/20 text-[#a78bfa] border-[#6b4cff]/30">Get Started</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight mb-4 text-white">
            Start scaling with CemScale today
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-2xl mx-auto">
            Build on CemScale to launch faster, adapt as you grow, and automate data workflows to do more with less.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="p-8 rounded-2xl bg-[#0a0a1a]/80 border border-[#1f1f35] relative overflow-hidden group hover:border-[#6b4cff]/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#a78bfa]/20 to-[#6b4cff]/20 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
            
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/10 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-[#a78bfa]" />
              </div>
              
              <Badge className="mb-4 bg-[#1a1a2e] text-[#a59ecb] border-[#2a2a45]">Quick Setup</Badge>
              
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Get started in minutes, not weeks
              </h3>
              
              <p className="text-[#a59ecb] mb-6">
                CemScale's guided onboarding helps you connect your data sources and start seeing unified insights within your first day.
              </p>

              <div className="bg-[#1a1a2e] rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6b4cff] to-[#a78bfa] flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">CS</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-white">Your Business</p>
                    <p className="text-xs text-[#a59ecb]">CemScale Platform</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-xs bg-[#2a2a45] text-[#a59ecb] border-[#3a3a55]">Dashboard</Badge>
                  <Badge className="text-xs bg-[#2a2a45] text-[#a59ecb] border-[#3a3a55]">Leads</Badge>
                  <Badge className="text-xs bg-[#2a2a45] text-[#a59ecb] border-[#3a3a55]">Marketing</Badge>
                </div>
              </div>
              
              <Button 
                className="rounded-full gap-2 bg-[#6b4cff] hover:bg-[#7c5fff] text-white"
                data-testid="button-quick-start"
              >
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0a0a1a]/80 border border-[#1f1f35] relative overflow-hidden group hover:border-[#7cffd4]/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#7cffd4]/20 to-[#6b4cff]/20 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
            
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-[#7cffd4]/10 flex items-center justify-center mb-6">
                <LayoutDashboard className="h-6 w-6 text-[#7cffd4]" />
              </div>
              
              <Badge className="mb-4 bg-[#1a1a2e] text-[#a59ecb] border-[#2a2a45]">Live Demo</Badge>
              
              <h3 className="text-2xl font-semibold mb-4 text-white">
                See your data come together in real-time
              </h3>
              
              <p className="text-[#a59ecb] mb-6">
                Schedule a personalized demo to see how CemScale can transform your scattered data into actionable insights.
              </p>

              <div className="bg-[#1a1a2e] rounded-xl p-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#a59ecb]">Dashboard views</span>
                    <span className="font-medium text-[#7cffd4]">Real-time</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#a59ecb]">Data sources</span>
                    <span className="font-medium text-[#6b4cff]">Unified</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#a59ecb]">Insights</span>
                    <span className="font-medium text-[#a78bfa]">Actionable</span>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="rounded-full gap-2 bg-transparent border-[#3d3a50] text-white hover:bg-[#1a1a2e] hover:border-[#4d4a60]"
                data-testid="button-schedule-demo"
              >
                Schedule Demo <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
