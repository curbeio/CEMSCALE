import { Header } from "@/components/stripe/Header";
import { Footer } from "@/components/stripe/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#030014] w-full overflow-x-hidden">
      <Header />
      <main className="w-full pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[#a78bfa] hover:text-white transition-colors mb-8" data-testid="link-back-home">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2" data-testid="text-privacy-title">Privacy Policy</h1>
          <p className="text-[#8b87a5] mb-10">Last Updated: February 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <p className="text-[#a59ecb] leading-relaxed">
                CEMSCALE LLC ("CEMSCALE," "we," "us," or "our") respects your privacy and is committed to 
                protecting the personal information you share with us. This Privacy Policy describes how we 
                collect, use, disclose, and safeguard your information when you visit our website 
                https://cemscale.com and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4" data-testid="text-section-data-collect">Personal Data We Collect</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                We may collect the following types of personal information when you interact with our website, 
                fill out forms, or use our services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company or organization name</li>
                <li>IP address</li>
                <li>Browser type and user agent</li>
                <li>Pages visited and interactions on our website</li>
                <li>Any other information you voluntarily provide through our forms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4" data-testid="text-section-how-use">How We Use Your Data</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send SMS and email communications you have opted into</li>
                <li>To improve our website, products, and services</li>
                <li>To comply with legal obligations and enforce our terms</li>
                <li>To maintain records of consent for regulatory compliance</li>
                <li>To personalize your experience with our platform</li>
              </ul>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4" data-testid="text-section-no-share">No Third-Party Sharing</h2>
              <p className="text-[#a59ecb] leading-relaxed font-medium">
                Any personal information that we collect (as identified in the "Personal Data We Collect" section) 
                will not be shared with third parties. We do not sell, rent, or trade your personal data to any 
                external organizations or individuals.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">SMS & Email Communications</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                If you opt in to receive SMS or email communications from us:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>Message and data rates may apply</li>
                <li>Message frequency varies (up to 5 messages per month)</li>
                <li>You may opt out at any time by replying STOP to any SMS message</li>
                <li>For help, reply HELP or contact us at master@cemscale.com</li>
                <li>Your consent is not a condition of purchase</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Data Retention</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                We retain your personal data only for as long as necessary to fulfill the purposes for which 
                it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. 
                Consent records are maintained in accordance with applicable telecommunications regulations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Data Security</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. All data 
                transmission is encrypted via HTTPS/TLS.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal data</li>
                <li>Opt out of SMS or email communications at any time</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Changes to This Policy</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                with an updated "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4" data-testid="text-section-contact">Contact Us</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
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
