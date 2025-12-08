import { Header } from "@/components/stripe/Header";
import { HeroSection } from "@/components/stripe/HeroSection";
import { TelephonySection } from "@/components/stripe/TelephonySection";
import { MarketingSection } from "@/components/stripe/MarketingSection";
import { EngagementSection } from "@/components/stripe/EngagementSection";
import { LeadsSection } from "@/components/stripe/LeadsSection";
import { DataSection } from "@/components/stripe/DataSection";
import { ServicesSection } from "@/components/stripe/ServicesSection";
import { StatsSection } from "@/components/stripe/StatsSection";
import { PricingSection } from "@/components/stripe/PricingSection";
import { UseCasesSection } from "@/components/stripe/UseCasesSection";
import { EnterpriseSection } from "@/components/stripe/EnterpriseSection";
import { StartupSection } from "@/components/stripe/StartupSection";
import { CodeSnippet } from "@/components/stripe/CodeSnippet";
import { CTASection } from "@/components/stripe/CTASection";
import { Footer } from "@/components/stripe/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030014] w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <HeroSection />
        <TelephonySection />
        <MarketingSection />
        <EngagementSection />
        <LeadsSection />
        <DataSection />
        <ServicesSection />
        <StatsSection />
        <PricingSection />
        <UseCasesSection />
        <EnterpriseSection />
        <StartupSection />
        <CodeSnippet />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
