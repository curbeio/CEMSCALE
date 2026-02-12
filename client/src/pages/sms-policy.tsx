import { Header } from "@/components/stripe/Header";
import { Footer } from "@/components/stripe/Footer";
import { Link } from "wouter";
import { ArrowLeft, MessageSquare, StopCircle, HelpCircle, Clock, DollarSign, Shield } from "lucide-react";

export default function SmsPolicy() {
  return (
    <div className="min-h-screen bg-[#030014] w-full overflow-x-hidden">
      <Header />
      <main className="w-full pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[#a78bfa] hover:text-white transition-colors mb-8" data-testid="link-back-home">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2" data-testid="text-sms-policy-title">SMS Policy</h1>
          <p className="text-[#8b87a5] mb-10">Last Updated: February 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <p className="text-[#a59ecb] leading-relaxed">
                This SMS Policy describes how CEMSCALE LLC ("CEMSCALE") handles SMS/MMS messaging 
                communications. By opting in to receive text messages from CEMSCALE, you agree to the 
                terms outlined below.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]" data-testid="card-opt-in">
                <div className="w-12 h-12 rounded-xl bg-[#6b4cff]/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-[#6b4cff]" />
                </div>
                <h2 className="text-lg font-semibold text-white mb-3">Opt-In</h2>
                <p className="text-sm text-[#a59ecb] leading-relaxed">
                  You may opt in to receive SMS communications from CEMSCALE by submitting a form on our 
                  website (https://cemscale.com) and explicitly checking the consent checkbox. Opt-in is 
                  voluntary and is not a condition of any purchase.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]" data-testid="card-opt-out">
                <div className="w-12 h-12 rounded-xl bg-[#ff805d]/10 flex items-center justify-center mb-4">
                  <StopCircle className="h-6 w-6 text-[#ff805d]" />
                </div>
                <h2 className="text-lg font-semibold text-white mb-3">Opt-Out</h2>
                <p className="text-sm text-[#a59ecb] leading-relaxed">
                  You can opt out of receiving SMS messages at any time by replying <span className="text-white font-medium">STOP</span> to 
                  any message you receive from us. You will receive one final confirmation message and will 
                  no longer receive SMS communications from CEMSCALE.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]" data-testid="card-help">
                <div className="w-12 h-12 rounded-xl bg-[#7cffd4]/10 flex items-center justify-center mb-4">
                  <HelpCircle className="h-6 w-6 text-[#7cffd4]" />
                </div>
                <h2 className="text-lg font-semibold text-white mb-3">Help</h2>
                <p className="text-sm text-[#a59ecb] leading-relaxed">
                  For assistance, reply <span className="text-white font-medium">HELP</span> to any SMS message, 
                  or contact us directly at <a href="mailto:master@cemscale.com" className="text-[#a78bfa] hover:text-white transition-colors">master@cemscale.com</a>.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]" data-testid="card-frequency">
                <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#a78bfa]" />
                </div>
                <h2 className="text-lg font-semibold text-white mb-3">Message Frequency</h2>
                <p className="text-sm text-[#a59ecb] leading-relaxed">
                  Message frequency varies. You may receive up to 5 messages per month from CEMSCALE. 
                  Frequency depends on your interactions, account activity, and communication preferences.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]" data-testid="card-rates">
                <div className="w-12 h-12 rounded-xl bg-[#6b4cff]/10 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-[#6b4cff]" />
                </div>
                <h2 className="text-lg font-semibold text-white mb-3">Message & Data Rates</h2>
                <p className="text-sm text-[#a59ecb] leading-relaxed">
                  Message and data rates may apply. Please check with your wireless carrier for details 
                  about your messaging plan and any applicable charges.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]" data-testid="card-privacy">
                <div className="w-12 h-12 rounded-xl bg-[#7cffd4]/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#7cffd4]" />
                </div>
                <h2 className="text-lg font-semibold text-white mb-3">Privacy & No Third-Party Sharing</h2>
                <p className="text-sm text-[#a59ecb] leading-relaxed">
                  We do not sell, rent, or share your phone number or personal information with third parties 
                  for marketing purposes. See our <Link href="/privacy-policy" className="text-[#a78bfa] hover:text-white transition-colors">Privacy Policy</Link> for 
                  full details.
                </p>
              </div>
            </div>

            <section className="p-6 rounded-xl bg-gradient-to-r from-[#6b4cff]/10 to-[#7cffd4]/10 border border-[#6b4cff]/20">
              <h2 className="text-xl font-semibold text-white mb-4">Supported Carriers</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                Our SMS service is compatible with all major U.S. wireless carriers. Service availability 
                may vary. CEMSCALE is not liable for delayed or undelivered messages due to carrier issues.
              </p>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4" data-testid="text-sms-contact">Contact Us</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                If you have any questions about this SMS Policy, please contact us:
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
