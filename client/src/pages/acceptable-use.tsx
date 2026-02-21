import { useEffect } from "react";
import { Header } from "@/components/stripe/Header";
import { Footer } from "@/components/stripe/Footer";
import { Link } from "wouter";
import { ArrowLeft, ShieldCheck, Ban, Users, FileCheck, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function AcceptableUse() {
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

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2" data-testid="text-acceptable-use-title">
            Acceptable Use & Messaging Policy
          </h1>
          <p className="text-[#8b87a5] mb-10">Last Updated: February 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#6b4cff]/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-[#6b4cff]" />
                </div>
                <h2 className="text-xl font-semibold text-white">What CEMSCALE Is</h2>
              </div>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                CEMSCALE is a <strong className="text-white">B2B software-as-a-service (SaaS) platform</strong> that provides customer relationship management (CRM), 
                unified inbox, workflow automation, reporting, analytics, and business communication tools to professional services teams.
              </p>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                Our customers are businesses and organizations (Insurance agencies, Healthcare providers, Financial advisors, Legal firms, 
                Tax professionals, and Medicare advisors) who use our <strong className="text-white">software subscription</strong> to manage their own customer relationships 
                and communications.
              </p>
              <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                <p className="text-sm text-[#7cffd4] font-medium">
                  CEMSCALE is a software platform provider. We do not provide telemarketing services, lead resale, done-for-you calling, 
                  or any form of unsolicited outbound communication on behalf of customers.
                </p>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff805d]/10 flex items-center justify-center">
                  <Ban className="h-6 w-6 text-[#ff805d]" />
                </div>
                <h2 className="text-xl font-semibold text-white">Prohibited Uses</h2>
              </div>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                The following activities are strictly prohibited on the CEMSCALE platform. Violations will result in immediate account 
                suspension and potential termination:
              </p>
              <ul className="space-y-3">
                {[
                  "Sending unsolicited commercial messages (spam) to individuals who have not opted in",
                  "Telemarketing services or any form of unsolicited outbound calling",
                  "Purchasing, renting, or using third-party contact lists for mass outreach",
                  "Auto-dialing, robocalling, or predictive dialing to unsolicited contacts",
                  "Bulk messaging to contacts who have not given explicit prior consent",
                  "Reselling or redistributing customer data or contact information",
                  "Using the platform to send deceptive, misleading, or fraudulent communications",
                  "Violating any applicable local, state, federal, or international communication laws",
                  "Using the platform for any illegal activity or to facilitate illegal transactions",
                  "Impersonating another person, business, or entity in communications",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-[#ff805d] shrink-0 mt-1" />
                    <span className="text-sm text-[#a59ecb]">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#7cffd4]/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#7cffd4]" />
                </div>
                <h2 className="text-xl font-semibold text-white">Customer Responsibility</h2>
              </div>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                CEMSCALE customers are responsible for:
              </p>
              <ul className="space-y-3">
                {[
                  "Managing their own contacts — all contacts in the system must belong to or have a legitimate business relationship with the customer",
                  "Obtaining proper consent before sending any communications via the platform",
                  "Maintaining and honoring opt-out and unsubscribe requests promptly",
                  "Ensuring all communications comply with applicable laws and industry regulations",
                  "Using the platform only for legitimate business communications with their own customers and prospects",
                  "Keeping accurate and up-to-date records of consent for all contacts",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#7cffd4] shrink-0 mt-1" />
                    <span className="text-sm text-[#a59ecb]">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/10 flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-[#a78bfa]" />
                </div>
                <h2 className="text-xl font-semibold text-white">Consent & Opt-Out Requirements</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Consent</h3>
                  <p className="text-[#a59ecb] leading-relaxed">
                    All communications sent through CEMSCALE must be to recipients who have given explicit, informed consent. 
                    Customers must be able to demonstrate proof of consent for any contact in their system. The platform provides 
                    built-in consent tracking and audit logging to help customers maintain proper records.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Opt-Out Support</h3>
                  <p className="text-[#a59ecb] leading-relaxed">
                    CEMSCALE provides built-in opt-out mechanisms for all communication channels. Recipients can opt out at any time 
                    by replying STOP to SMS messages or clicking unsubscribe links in emails. Opt-out requests are processed 
                    automatically and immediately. Customers must honor all opt-out requests without exception.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Audit Trail</h3>
                  <p className="text-[#a59ecb] leading-relaxed">
                    The platform maintains comprehensive audit logs of all communications, consent records, and opt-out requests. 
                    These logs are available to customers and can be provided to regulators upon request. Audit data is retained 
                    in accordance with applicable legal requirements.
                  </p>
                </div>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#6b4cff]/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-[#6b4cff]" />
                </div>
                <h2 className="text-xl font-semibold text-white">Channel-Specific Policies</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                  <h3 className="text-sm font-medium text-white mb-1">Email</h3>
                  <p className="text-sm text-[#a59ecb]">
                    All emails must include a valid physical address and a clear unsubscribe mechanism. Deceptive subject lines 
                    and misleading header information are prohibited.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                  <h3 className="text-sm font-medium text-white mb-1">SMS / MMS</h3>
                  <p className="text-sm text-[#a59ecb]">
                    SMS messages may only be sent to contacts who have provided explicit written consent. All messages must 
                    include opt-out instructions. Message frequency must be disclosed at the time of opt-in.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                  <h3 className="text-sm font-medium text-white mb-1">WhatsApp</h3>
                  <p className="text-sm text-[#a59ecb]">
                    WhatsApp communications must comply with Meta's Business Messaging policies. Business-initiated messages 
                    must use approved templates. Spam and unauthorized bulk messaging are prohibited.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                  <h3 className="text-sm font-medium text-white mb-1">Voice / Telephony</h3>
                  <p className="text-sm text-[#a59ecb]">
                    Voice communications through CEMSCALE are intended for legitimate business purposes only — such as 
                    customer service, appointment confirmations, and follow-ups with existing contacts. Unsolicited cold calling 
                    and telemarketing are prohibited.
                  </p>
                </div>
              </div>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4">Enforcement</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                CEMSCALE actively monitors platform usage to ensure compliance with this policy. We reserve the right to:
              </p>
              <ul className="space-y-2">
                {[
                  "Suspend or terminate accounts that violate this policy",
                  "Remove or restrict access to specific features",
                  "Report violations to relevant authorities",
                  "Cooperate with law enforcement investigations",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#a78bfa] shrink-0 mt-1" />
                    <span className="text-sm text-[#a59ecb]">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                If you have questions about this Acceptable Use Policy or wish to report a violation, please contact us at:
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
