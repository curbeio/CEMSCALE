import { Header } from "@/components/stripe/Header";
import { HeroSection } from "@/components/stripe/HeroSection";
import { LogoCarousel } from "@/components/stripe/LogoCarousel";
import { ServicesSection } from "@/components/stripe/ServicesSection";
import { StatsSection } from "@/components/stripe/StatsSection";
import { UseCasesSection } from "@/components/stripe/UseCasesSection";
import { EnterpriseSection } from "@/components/stripe/EnterpriseSection";
import { StartupSection } from "@/components/stripe/StartupSection";
import { CodeSnippet } from "@/components/stripe/CodeSnippet";
import { CTASection } from "@/components/stripe/CTASection";
import { Footer } from "@/components/stripe/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <HeroSection />
        <LogoCarousel />
        <ServicesSection />
        <StatsSection />
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
