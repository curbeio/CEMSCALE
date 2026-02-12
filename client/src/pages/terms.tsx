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
          <p className="text-[#8b87a5] mb-10">Last Updated: February 12, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">

            <section>
              <p className="text-[#a59ecb] leading-relaxed">
                These Terms & Conditions ("Terms," "Agreement") constitute a legally binding agreement between you 
                ("Client," "you," "your") and CEMSCALE LLC ("CEMSCALE," "Company," "we," "us," "our"), a Florida 
                limited liability company. These Terms govern your access to and use of the CEMSCALE website 
                (https://cemscale.com), the CEMSCALE platform, and all related software, tools, APIs, documentation, 
                and services (collectively, the "Service" or "Platform").
              </p>
              <p className="text-[#a59ecb] leading-relaxed mt-4">
                CEMSCALE is a software-as-a-service (SaaS) provider that offers a customer engagement management 
                platform designed for businesses operating in regulated industries, including but not limited to 
                Insurance, Healthcare, Financial Services, Legal, Tax, and Medicare. Our Platform enables Clients 
                to manage omnichannel communications, lead generation, CRM, telephony, marketing automation, 
                and analytics.
              </p>
              <p className="text-[#a59ecb] leading-relaxed mt-4 font-medium text-white">
                BY ACCESSING OR USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO 
                BE BOUND BY THESE TERMS AND OUR <Link href="/privacy-policy" className="text-[#a78bfa] hover:text-white transition-colors">PRIVACY POLICY</Link>. 
                IF YOU DO NOT AGREE, DO NOT USE THE SERVICE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Definitions</h2>
              <ul className="space-y-3 text-[#a59ecb]">
                <li><span className="text-white font-medium">"Authorized Users"</span> means individuals who are authorized by the Client to access and use the Platform under the Client's subscription.</li>
                <li><span className="text-white font-medium">"Client Data"</span> means all data, content, files, and information uploaded, transmitted, stored, or processed by the Client or its Authorized Users through the Platform, including personal data of the Client's customers or contacts.</li>
                <li><span className="text-white font-medium">"Documentation"</span> means the technical documentation, user guides, API references, and other materials provided by CEMSCALE describing the features and functionality of the Platform.</li>
                <li><span className="text-white font-medium">"End Users"</span> means individuals whose personal data is processed through the Platform by the Client (the Client's customers, contacts, or leads).</li>
                <li><span className="text-white font-medium">"Platform"</span> means the CEMSCALE cloud-based software-as-a-service application, including all updates, upgrades, and modifications thereto.</li>
                <li><span className="text-white font-medium">"Subscription"</span> means the Client's paid access to the Platform for a defined term, as specified in the applicable Order Form or subscription agreement.</li>
                <li><span className="text-white font-medium">"Order Form"</span> means any ordering document, online sign-up, or written agreement referencing these Terms that specifies the Services, pricing, and subscription details.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Account Registration and Access</h2>
              
              <h3 className="text-lg font-medium text-white mb-3 mt-6">2.1 Account Creation</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                To access the Platform, you must create an account by providing accurate, current, and complete 
                information. You agree to maintain the accuracy of this information and promptly update it if 
                it changes. You are responsible for maintaining the security of your account credentials 
                (username, password, API keys) and for all activities that occur under your account.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">2.2 Authorized Users</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                You may grant access to Authorized Users within your organization, subject to the user limits 
                defined in your Subscription. You are responsible for ensuring that all Authorized Users comply 
                with these Terms. You must promptly revoke access for any individual who is no longer authorized.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">2.3 Account Security</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                You must immediately notify CEMSCALE of any unauthorized access to your account or any 
                suspected security breach. CEMSCALE is not liable for any loss or damage arising from your 
                failure to protect your account credentials. We strongly recommend enabling multi-factor 
                authentication (MFA) on all accounts.
              </p>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4">3. SaaS Subscription and Service Terms</h2>
              
              <h3 className="text-lg font-medium text-white mb-3 mt-6">3.1 License Grant</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                Subject to your compliance with these Terms and payment of applicable fees, CEMSCALE grants you a 
                limited, non-exclusive, non-transferable, revocable license to access and use the Platform during 
                the Subscription term solely for your internal business operations.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">3.2 Service Availability</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                CEMSCALE will use commercially reasonable efforts to maintain Platform availability. The Platform 
                may be temporarily unavailable for scheduled maintenance (with reasonable advance notice) or 
                unscheduled emergency maintenance. Service Level Agreements (SLAs), where applicable, are 
                defined in the applicable Order Form or SLA addendum.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">3.3 Updates and Modifications</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                CEMSCALE may update, modify, or enhance the Platform from time to time. We will use commercially 
                reasonable efforts to ensure that updates do not materially reduce the functionality available 
                to you during your Subscription term. Major changes will be communicated via email or 
                in-platform notifications.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">3.4 Support</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                CEMSCALE provides technical support to Clients with active Subscriptions. The scope, channels, 
                and response times for support are defined in your Order Form or applicable support plan. 
                Standard support is available via email at master@cemscale.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Fees and Payment</h2>
              
              <h3 className="text-lg font-medium text-white mb-3 mt-6">4.1 Subscription Fees</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                Fees for the Platform are set forth in the applicable Order Form. Unless otherwise stated, 
                fees are quoted in U.S. dollars and are due in advance of each billing period (monthly or annual). 
                All fees are non-refundable except as expressly provided in these Terms or required by law.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">4.2 Usage-Based Charges</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                Certain Platform features (such as SMS/MMS messaging, telephony minutes, email delivery, and 
                API calls) may incur usage-based charges beyond what is included in your Subscription plan. 
                Usage rates are specified in the Order Form or published pricing schedule. Overages are billed 
                in arrears.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">4.3 Taxes</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                All fees are exclusive of applicable taxes, duties, and levies. You are responsible for paying 
                all applicable taxes, excluding taxes based on CEMSCALE's net income. If CEMSCALE is required 
                to collect or remit taxes, such taxes will be added to your invoice.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">4.4 Late Payment</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                Unpaid amounts are subject to a late fee of 1.5% per month (or the maximum rate permitted by 
                law, whichever is lower). CEMSCALE reserves the right to suspend access to the Platform for 
                accounts with balances overdue by more than 30 days, with 10 days' written notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Client Data and Data Processing</h2>
              
              <h3 className="text-lg font-medium text-white mb-3 mt-6">5.1 Ownership of Client Data</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                You retain all rights, title, and interest in and to your Client Data. CEMSCALE does not claim 
                ownership of any Client Data. By uploading Client Data to the Platform, you grant CEMSCALE a 
                limited license to process, store, and transmit Client Data solely for the purpose of providing 
                the Service.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">5.2 Data Processing</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                When processing Client Data on your behalf, CEMSCALE acts as a data processor and you as the 
                data controller. We will process Client Data only in accordance with your documented instructions, 
                these Terms, and the applicable Data Processing Agreement (DPA). You are responsible for ensuring 
                that you have all necessary rights, consents, and legal bases to collect and share Client Data 
                with CEMSCALE.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">5.3 Data Security</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                CEMSCALE implements and maintains appropriate technical and organizational measures to protect 
                Client Data against unauthorized access, alteration, disclosure, or destruction. These measures 
                include encryption in transit (TLS 1.2+), encryption at rest (AES-256), access controls, 
                monitoring, and regular security assessments. Details are described in our{" "}
                <Link href="/privacy-policy" className="text-[#a78bfa] hover:text-white transition-colors">Privacy Policy</Link>.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">5.4 Data Return and Deletion</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                Upon termination or expiration of your Subscription, you may export your Client Data for up 
                to 30 days following termination. After this period, CEMSCALE will delete all Client Data 
                within 90 days, unless retention is required by law or agreed upon in the DPA. CEMSCALE will 
                confirm deletion in writing upon your request.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">5.5 Aggregated and De-Identified Data</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                CEMSCALE may use aggregated, anonymized, or de-identified data derived from the Platform 
                (which cannot be used to identify you, your Authorized Users, or your End Users) for purposes 
                including product improvement, benchmarking, and analytics. Such data will not include any 
                personally identifiable information.
              </p>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4">6. Acceptable Use Policy</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                You agree not to, and will not permit your Authorized Users to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>Use the Platform for any unlawful purpose or in violation of any applicable law or regulation</li>
                <li>Send unsolicited communications (spam), including SMS, emails, or calls, in violation of applicable anti-spam laws (CAN-SPAM, TCPA, A2P 10DLC regulations)</li>
                <li>Upload or transmit any malicious code, viruses, or harmful content</li>
                <li>Attempt to gain unauthorized access to the Platform, other accounts, or CEMSCALE systems</li>
                <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Platform</li>
                <li>Resell, sublicense, or make the Platform available to third parties without CEMSCALE's prior written consent</li>
                <li>Use the Platform to store or transmit data in violation of any third party's privacy rights or intellectual property</li>
                <li>Interfere with or disrupt the integrity or performance of the Platform or its infrastructure</li>
                <li>Use the Platform to engage in deceptive, fraudulent, or misleading practices</li>
                <li>Exceed the usage limits, rate limits, or quotas specified in your Subscription without authorization</li>
                <li>Share account credentials with unauthorized individuals or use automated means to create accounts</li>
              </ul>
              <p className="text-[#a59ecb] leading-relaxed mt-4">
                CEMSCALE reserves the right to suspend or terminate your access immediately if we reasonably 
                believe you are in violation of this Acceptable Use Policy, with notice as soon as practicable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Compliance with Laws</h2>
              
              <h3 className="text-lg font-medium text-white mb-3 mt-6">7.1 General Compliance</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                You are responsible for ensuring that your use of the Platform complies with all applicable 
                federal, state, local, and international laws and regulations, including but not limited to 
                data protection laws (GDPR, CCPA/CPRA), telecommunications regulations (TCPA, A2P 10DLC), 
                anti-spam laws (CAN-SPAM), and industry-specific regulations (HIPAA, GLBA, SOX) applicable 
                to your business.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">7.2 Regulated Industries</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                If you operate in a regulated industry, you are solely responsible for ensuring that your use 
                of the Platform and the Client Data processed through it comply with all applicable regulatory 
                requirements. While CEMSCALE provides tools and features designed to support compliance (such 
                as consent management, audit logs, and data encryption), the ultimate responsibility for 
                regulatory compliance rests with you as the data controller.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">7.3 A2P 10DLC and Telecommunications</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                You acknowledge that sending SMS/MMS messages through the Platform requires compliance with 
                A2P 10DLC regulations, including proper campaign registration, obtaining verifiable consumer 
                consent, and providing opt-out mechanisms. CEMSCALE provides tools to assist with compliance 
                but does not guarantee regulatory approval. You are responsible for registering your campaigns 
                and maintaining consent records. See our <Link href="/sms-policy" className="text-[#a78bfa] hover:text-white transition-colors">SMS Policy</Link> for details.
              </p>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4" data-testid="text-section-sms-terms">8. SMS & Email Communications</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                By submitting a form on our Website and checking the opt-in checkbox, you expressly consent 
                to receive communications from CEMSCALE via SMS, MMS, and email at the phone number and/or 
                email address you provide. These communications may include product updates, promotional 
                content, and service-related information.
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
              <h2 className="text-xl font-semibold text-white mb-4">9. Intellectual Property</h2>
              
              <h3 className="text-lg font-medium text-white mb-3 mt-6">9.1 CEMSCALE Property</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                The Platform, including all software, algorithms, interfaces, designs, documentation, APIs, 
                trade secrets, trademarks, logos, and all other intellectual property related to the Service, 
                are and remain the exclusive property of CEMSCALE LLC. Nothing in these Terms grants you any 
                right, title, or interest in our intellectual property except for the limited license to use 
                the Platform as described herein.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">9.2 Feedback</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                If you provide suggestions, ideas, improvements, or feedback about the Platform ("Feedback"), 
                you grant CEMSCALE a worldwide, perpetual, irrevocable, royalty-free license to use, modify, 
                and incorporate such Feedback into the Platform without obligation to you.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">9.3 Client Content</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                All content, data, and materials that you upload or transmit through the Platform ("Client Content") 
                remain your property. You represent and warrant that you have all necessary rights and permissions 
                to use and share Client Content through the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">10. Confidentiality</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                Each party acknowledges that it may receive confidential information of the other party. 
                "Confidential Information" includes all non-public business, technical, financial, and 
                operational information disclosed by either party.
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>Each party agrees to use the other's Confidential Information only for the purpose of performing its obligations under these Terms</li>
                <li>Each party will protect the other's Confidential Information with at least the same degree of care it uses to protect its own confidential information, and no less than reasonable care</li>
                <li>Confidential Information may be disclosed to employees, contractors, and advisors on a need-to-know basis, provided they are bound by confidentiality obligations at least as protective as these Terms</li>
                <li>These obligations do not apply to information that is publicly known, independently developed, lawfully received from a third party, or required to be disclosed by law</li>
              </ul>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4">11. Warranties and Disclaimers</h2>
              
              <h3 className="text-lg font-medium text-white mb-3 mt-6">11.1 CEMSCALE Warranties</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                CEMSCALE warrants that: (a) the Platform will perform materially in accordance with the 
                Documentation during your Subscription term; (b) CEMSCALE will provide the Service using 
                commercially reasonable care and skill; and (c) CEMSCALE will comply with all laws applicable 
                to its provision of the Service.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">11.2 Disclaimer</h3>
              <p className="text-[#a59ecb] leading-relaxed font-medium">
                EXCEPT AS EXPRESSLY PROVIDED IN SECTION 11.1, THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" 
                WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. CEMSCALE 
                DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
                PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. CEMSCALE DOES NOT WARRANT THAT THE PLATFORM 
                WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">11.3 Client Warranties</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                You warrant that: (a) you have the legal authority to enter into these Terms; (b) you will 
                comply with all applicable laws in your use of the Platform; (c) you have obtained all necessary 
                consents and authorizations for the Client Data you process through the Platform; and (d) your 
                use of the Platform will not violate any third party's rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">12. Limitation of Liability</h2>
              
              <h3 className="text-lg font-medium text-white mb-3 mt-6">12.1 Exclusion of Damages</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY SHALL BE LIABLE FOR ANY INDIRECT, 
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS 
                OF PROFITS, REVENUE, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL, ARISING OUT OF OR RELATED 
                TO THESE TERMS OR THE USE OF THE PLATFORM, REGARDLESS OF THE THEORY OF LIABILITY.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">12.2 Cap on Liability</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                EXCEPT FOR OBLIGATIONS ARISING FROM BREACH OF CONFIDENTIALITY, DATA PROTECTION OBLIGATIONS, 
                OR INDEMNIFICATION, EACH PARTY'S TOTAL AGGREGATE LIABILITY UNDER THESE TERMS SHALL NOT EXCEED 
                THE GREATER OF (A) THE TOTAL FEES PAID BY CLIENT TO CEMSCALE IN THE TWELVE (12) MONTHS 
                PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE THOUSAND U.S. DOLLARS ($1,000).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">13. Indemnification</h2>
              
              <h3 className="text-lg font-medium text-white mb-3 mt-6">13.1 Client Indemnification</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                You agree to indemnify, defend, and hold harmless CEMSCALE and its officers, directors, 
                employees, and agents from and against any claims, liabilities, damages, losses, costs, 
                and expenses (including reasonable attorneys' fees) arising out of or related to: (a) your 
                breach of these Terms; (b) your violation of applicable laws; (c) your Client Data or Client 
                Content; (d) your use of the Platform in a manner not authorized by these Terms; or (e) any 
                dispute between you and your End Users.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">13.2 CEMSCALE Indemnification</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                CEMSCALE will defend you against any third-party claim alleging that your authorized use of 
                the Platform infringes that third party's intellectual property rights, and will indemnify you 
                against damages finally awarded or settlement amounts approved by CEMSCALE, provided you 
                promptly notify CEMSCALE of the claim and cooperate in its defense.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">14. Term and Termination</h2>
              
              <h3 className="text-lg font-medium text-white mb-3 mt-6">14.1 Subscription Term</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                The initial term of your Subscription begins on the date specified in your Order Form and 
                continues for the duration specified therein. Unless otherwise stated, Subscriptions 
                automatically renew for successive periods equal to the initial term, unless either party 
                provides written notice of non-renewal at least 30 days before the end of the current term.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">14.2 Termination for Cause</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                Either party may terminate these Terms immediately upon written notice if the other party 
                materially breaches these Terms and fails to cure such breach within 30 days of receiving 
                written notice. CEMSCALE may also terminate or suspend your access immediately without prior 
                notice if you violate the Acceptable Use Policy or pose a security risk to the Platform.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">14.3 Termination for Convenience</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                Either party may terminate these Terms for convenience by providing at least 30 days' written 
                notice to the other party. If you terminate for convenience during a prepaid Subscription term, 
                no refund will be issued for the unused portion of the term unless otherwise specified in 
                your Order Form.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">14.4 Effect of Termination</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                Upon termination: (a) your access to the Platform will cease; (b) you may export your Client 
                Data for up to 30 days post-termination; (c) all outstanding fees become immediately due; 
                (d) each party must return or destroy the other's Confidential Information; (e) sections 
                relating to intellectual property, confidentiality, limitation of liability, indemnification, 
                and governing law survive termination.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">15. Force Majeure</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                Neither party shall be liable for any failure or delay in performing its obligations under these 
                Terms to the extent caused by circumstances beyond its reasonable control, including but not 
                limited to acts of God, natural disasters, pandemics, war, terrorism, government actions, power 
                failures, internet or telecommunications outages, or cyberattacks. The affected party must 
                promptly notify the other party and use reasonable efforts to mitigate the impact.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">16. Dispute Resolution</h2>
              
              <h3 className="text-lg font-medium text-white mb-3 mt-6">16.1 Informal Resolution</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                Before initiating formal dispute resolution, the parties agree to attempt to resolve any 
                dispute informally by contacting each other. You may reach us at master@cemscale.com. 
                The parties will negotiate in good faith for at least 30 days before pursuing arbitration 
                or litigation.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">16.2 Governing Law</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of 
                Florida, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">16.3 Jurisdiction</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                Any disputes arising under or in connection with these Terms that cannot be resolved informally 
                shall be submitted to the exclusive jurisdiction of the state and federal courts located in 
                Miami-Dade County, Florida. Each party consents to the personal jurisdiction of such courts.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">16.4 Class Action Waiver</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                To the maximum extent permitted by law, any dispute resolution proceedings will be conducted 
                only on an individual basis and not as a class, consolidated, or representative action.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">17. General Provisions</h2>
              
              <h3 className="text-lg font-medium text-white mb-3 mt-6">17.1 Entire Agreement</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                These Terms, together with any Order Forms, DPA, and the Privacy Policy, constitute the entire 
                agreement between the parties and supersede all prior and contemporaneous agreements, 
                understandings, and communications.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">17.2 Severability</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining 
                provisions shall continue in full force and effect.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">17.3 Assignment</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                You may not assign or transfer these Terms or any rights hereunder without CEMSCALE's prior 
                written consent. CEMSCALE may assign these Terms in connection with a merger, acquisition, 
                or sale of all or substantially all of its assets.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">17.4 Waiver</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                No failure or delay by either party in exercising any right under these Terms shall constitute 
                a waiver of that right. A waiver of any breach shall not constitute a waiver of any subsequent breach.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">17.5 Notices</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                All notices under these Terms must be in writing and sent to the contact information provided 
                in the Order Form or, for CEMSCALE, to master@cemscale.com. Notices are deemed received when 
                delivered by email (upon confirmed receipt) or certified mail (upon delivery).
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">17.6 Independent Contractors</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                The relationship between the parties is that of independent contractors. Nothing in these Terms 
                creates a partnership, joint venture, employment, franchise, or agency relationship.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">18. Changes to These Terms</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                CEMSCALE reserves the right to modify these Terms at any time. We will provide at least 30 days' 
                notice of material changes via email to the address associated with your account or through an 
                in-platform notification. Changes will be effective upon the date specified in the notice. 
                Your continued use of the Platform after the effective date constitutes acceptance of the updated 
                Terms. If you do not agree with the changes, you may terminate your Subscription before the 
                effective date.
              </p>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4" data-testid="text-terms-contact">19. Contact Us</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                If you have questions about these Terms or need to contact us regarding your account, please 
                reach out to:
              </p>
              <div className="space-y-2 text-[#a59ecb]">
                <p><span className="text-white font-medium">CEMSCALE LLC</span></p>
                <p>20801 Biscayne Blvd Suite 340, Aventura, FL 33180</p>
                <p>Email: <a href="mailto:master@cemscale.com" className="text-[#a78bfa] hover:text-white transition-colors">master@cemscale.com</a></p>
                <p>Website: <a href="https://cemscale.com" className="text-[#a78bfa] hover:text-white transition-colors">https://cemscale.com</a></p>
              </div>
              <p className="text-[#a59ecb] leading-relaxed mt-4">
                For legal notices, please send correspondence to the above address with "Attention: Legal Department" 
                or email legal inquiries to master@cemscale.com with the subject line "Legal Notice."
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
