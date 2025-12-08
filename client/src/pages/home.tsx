import { Header } from "@/components/stripe/Header";
import { HeroSection } from "@/components/stripe/HeroSection";
import { AboutSection } from "@/components/stripe/AboutSection";
import { TelephonySection } from "@/components/stripe/TelephonySection";
import { MarketingSection } from "@/components/stripe/MarketingSection";
import { EngagementSection } from "@/components/stripe/EngagementSection";
import { LeadsSection } from "@/components/stripe/LeadsSection";
import { ServicesSection } from "@/components/stripe/ServicesSection";
import { CTASection } from "@/components/stripe/CTASection";
import { Footer } from "@/components/stripe/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030014] w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <TelephonySection />
        <MarketingSection />
        <EngagementSection />
        <LeadsSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
