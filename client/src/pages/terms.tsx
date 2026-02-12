import { Header } from "@/components/stripe/Header";
import { Footer } from "@/components/stripe/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#030014] w-full overflow-x-hidden">
      <Header />
      <main className="w-full pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[#a78bfa] hover:text-white transition-colors mb-8" data-testid="link-back-home">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2" data-testid="text-terms-title">Terms & Conditions</h1>
          <p className="text-[#8b87a5] mb-10">Last Updated: February 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <p className="text-[#a59ecb] leading-relaxed">
                These Terms & Conditions ("Terms") govern your use of the CEMSCALE website 
                (https://cemscale.com) and services provided by CEMSCALE LLC ("CEMSCALE," "we," "us," or "our"). 
                By accessing or using our website and services, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                By accessing or using our website, submitting information through our forms, or using our 
                services, you acknowledge that you have read, understood, and agree to be bound by these Terms 
                and our <Link href="/privacy-policy" className="text-[#a78bfa] hover:text-white transition-colors">Privacy Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Services</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                CEMSCALE provides a customer engagement management platform designed for regulated industries, 
                including lead generation, telephony, multi-channel marketing, and customer lifecycle management 
                tools and services.
              </p>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4" data-testid="text-section-sms-terms">3. SMS & Email Communications</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                By submitting a form on our website and checking the opt-in checkbox, you expressly consent 
                to receive communications from CEMSCALE via SMS, MMS, and email at the phone number and/or 
                email address you provide.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                  <h3 className="font-medium text-white mb-2">Message Frequency</h3>
                  <p className="text-sm text-[#a59ecb]">Message frequency varies. You may receive up to 5 messages per month.</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                  <h3 className="font-medium text-white mb-2">Message & Data Rates</h3>
                  <p className="text-sm text-[#a59ecb]">Message and data rates may apply. Check with your carrier for details.</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                  <h3 className="font-medium text-white mb-2">Opt-Out</h3>
                  <p className="text-sm text-[#a59ecb]">You may opt out at any time by replying <span className="text-white font-medium">STOP</span> to any SMS message received from us. Upon opting out, you will receive one final confirmation message and will no longer receive SMS communications from us.</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                  <h3 className="font-medium text-white mb-2">Help</h3>
                  <p className="text-sm text-[#a59ecb]">For help, reply <span className="text-white font-medium">HELP</span> to any SMS message, or contact us at <a href="mailto:master@cemscale.com" className="text-[#a78bfa] hover:text-white transition-colors">master@cemscale.com</a>.</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                  <h3 className="font-medium text-white mb-2">Consent</h3>
                  <p className="text-sm text-[#a59ecb]">Your consent to receive SMS/email communications is not a condition of purchase of any goods or services.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Privacy</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                Your use of our services is also governed by our <Link href="/privacy-policy" className="text-[#a78bfa] hover:text-white transition-colors">Privacy Policy</Link>, 
                which describes how we collect, use, and protect your personal information. We do not sell, 
                rent, or share your personally identifiable information (PII) with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. User Responsibilities</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                When using our website and services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>Provide accurate and truthful information in all forms</li>
                <li>Not use the website for any unlawful or unauthorized purpose</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Intellectual Property</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the 
                property of CEMSCALE LLC and is protected by applicable copyright, trademark, and intellectual 
                property laws. You may not reproduce, distribute, or create derivative works from our content 
                without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                CEMSCALE LLC shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages arising out of or related to your use of our website or services. Our total 
                liability shall not exceed the amount paid by you for the services in the twelve months 
                preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">8. Governing Law</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of 
                Florida, without regard to its conflict of law provisions. Any disputes arising under these 
                Terms shall be resolved in the courts of Miami-Dade County, Florida.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">9. Changes to Terms</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                upon posting to this page. Your continued use of our website after changes constitutes 
                acceptance of the updated Terms.
              </p>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4" data-testid="text-terms-contact">Contact Us</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="space-y-2 text-[#a59ecb]">
                <p><span className="text-white font-medium">CEMSCALE LLC</span></p>
                <p>20801 Biscayne Blvd Suite 340, Aventura, FL 33180</p>
                <p>Email: <a href="mailto:master@cemscale.com" className="text-[#a78bfa] hover:text-white transition-colors">master@cemscale.com</a></p>
                <p>Website: <a href="https://cemscale.com" className="text-[#a78bfa] hover:text-white transition-colors">https://cemscale.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
