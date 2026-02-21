import { useEffect } from "react";
import { Header } from "@/components/stripe/Header";
import { Footer } from "@/components/stripe/Footer";
import { Link } from "wouter";
import { ArrowLeft, CreditCard, Clock, RefreshCcw, HelpCircle } from "lucide-react";

export default function RefundPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-[#030014] w-full overflow-x-hidden">
      <Header />
      <main className="w-full pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[#a78bfa] hover:text-white transition-colors mb-8" data-testid="link-back-home">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2" data-testid="text-refund-policy-title">
            Refund Policy
          </h1>
          <p className="text-[#8b87a5] mb-10">Last Updated: February 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#6b4cff]/10 flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-[#6b4cff]" />
                </div>
                <h2 className="text-xl font-semibold text-white">Subscription & Billing</h2>
              </div>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                CEMSCALE operates on a <strong className="text-white">monthly or annual software subscription</strong> model. 
                All charges are for access to the CEMSCALE SaaS platform, including CRM tools, workflow automation, 
                unified inbox, analytics, and communication features.
              </p>
              <p className="text-[#a59ecb] leading-relaxed">
                Subscriptions are billed in advance on a recurring basis (monthly or annually, depending on your plan). 
                Your subscription will automatically renew unless cancelled before the end of the current billing period.
              </p>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#7cffd4]/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-[#7cffd4]" />
                </div>
                <h2 className="text-xl font-semibold text-white">Free Trial</h2>
              </div>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                CEMSCALE offers a <strong className="text-white">14-day free trial</strong> for new customers. During the trial period, 
                you have full access to the platform features included in your selected plan. No credit card is required to start 
                the free trial.
              </p>
              <p className="text-[#a59ecb] leading-relaxed">
                At the end of the trial period, you may choose to subscribe to a paid plan. If you do not subscribe, your 
                trial account will be deactivated and no charges will be made.
              </p>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/10 flex items-center justify-center">
                  <RefreshCcw className="h-6 w-6 text-[#a78bfa]" />
                </div>
                <h2 className="text-xl font-semibold text-white">Cancellation & Refunds</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Cancellation</h3>
                  <p className="text-[#a59ecb] leading-relaxed">
                    You may cancel your subscription at any time through your account settings or by contacting our support 
                    team. Cancellation will take effect at the end of the current billing period. You will continue to have 
                    access to the platform until your current billing period expires.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Monthly Subscriptions</h3>
                  <p className="text-[#a59ecb] leading-relaxed">
                    Monthly subscriptions are non-refundable for the current billing period. Upon cancellation, your access 
                    continues until the end of the current month, and no further charges will be made.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Annual Subscriptions</h3>
                  <p className="text-[#a59ecb] leading-relaxed">
                    If you cancel an annual subscription within the first 30 days, you are eligible for a pro-rated refund 
                    for the unused portion of your subscription. After 30 days, annual subscriptions are non-refundable, 
                    but you will retain access until the end of the annual billing period.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Setup & Onboarding Fees</h3>
                  <p className="text-[#a59ecb] leading-relaxed">
                    One-time setup and onboarding fees are non-refundable once the onboarding process has begun, as these 
                    cover dedicated time and resources provided to configure your account.
                  </p>
                </div>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff805d]/10 flex items-center justify-center">
                  <HelpCircle className="h-6 w-6 text-[#ff805d]" />
                </div>
                <h2 className="text-xl font-semibold text-white">Requesting a Refund</h2>
              </div>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                To request a refund, please contact our support team with the following information:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Your account email address",
                  "The billing period in question",
                  "Reason for the refund request",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#6b4cff]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs text-[#6b4cff] font-medium">{i + 1}</span>
                    </span>
                    <span className="text-sm text-[#a59ecb]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#a59ecb] leading-relaxed">
                Refund requests are reviewed within 5 business days. Approved refunds are processed to the original 
                payment method within 5-10 business days.
              </p>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4">Invoice Descriptions</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                All invoices and charges from CEMSCALE will appear as one of the following:
              </p>
              <div className="space-y-2">
                {[
                  "\"CEMSCALE - CRM Software Subscription\"",
                  "\"CEMSCALE - Platform Setup / Onboarding\"",
                  "\"CEMSCALE - Annual Software License\"",
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                    <p className="text-sm text-white font-mono">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                For billing questions or refund requests, please contact us at:
              </p>
              <div className="mt-4 p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                <p className="text-sm text-white font-medium">CEMSCALE LLC</p>
                <p className="text-sm text-[#a59ecb]">20801 Biscayne Blvd, Suite 340</p>
                <p className="text-sm text-[#a59ecb]">Aventura, FL 33180</p>
                <p className="text-sm text-[#a59ecb] mt-2">Email: master@cemscale.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
