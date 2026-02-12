import { useEffect } from "react";
import { Header } from "@/components/stripe/Header";
import { Footer } from "@/components/stripe/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2" data-testid="text-privacy-title">Privacy Policy</h1>
          <p className="text-[#8b87a5] mb-10">Last Updated: February 12, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">

            <section>
              <p className="text-[#a59ecb] leading-relaxed">
                CEMSCALE LLC ("CEMSCALE," "Company," "we," "us," or "our") is a software-as-a-service (SaaS) company 
                that provides a customer engagement management platform to businesses and organizations ("Clients"). 
                Our platform enables Clients to manage omnichannel communications, lead generation, customer relationship 
                management, telephony, marketing automation, and data analytics across regulated industries including 
                Insurance, Healthcare, Financial Services, Legal, Tax, and Medicare.
              </p>
              <p className="text-[#a59ecb] leading-relaxed mt-4">
                This Privacy Policy describes how we collect, use, store, process, disclose, and safeguard personal 
                information when you visit our website at https://cemscale.com (the "Website"), use our platform 
                (the "Platform" or "Service"), or otherwise interact with us. It applies to all users, including 
                website visitors, prospective Clients, current Clients, and end users whose data is processed 
                through our Platform on behalf of our Clients.
              </p>
              <p className="text-[#a59ecb] leading-relaxed mt-4">
                By accessing our Website or using our Service, you acknowledge that you have read and understood this 
                Privacy Policy. If you do not agree with our practices, please do not use our Website or Service.
              </p>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4">1. Roles: Data Controller vs. Data Processor</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                CEMSCALE operates in two distinct capacities with respect to personal data:
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                  <h3 className="font-medium text-white mb-2">As a Data Controller</h3>
                  <p className="text-sm text-[#a59ecb]">
                    When we collect information directly from you through our Website (e.g., contact forms, demo 
                    requests, newsletter sign-ups), we act as the data controller. We determine the purpose and 
                    means of processing this data and are directly responsible for its protection.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                  <h3 className="font-medium text-white mb-2">As a Data Processor</h3>
                  <p className="text-sm text-[#a59ecb]">
                    When our Clients use our Platform to manage their own customers' data, we act as a data processor 
                    on behalf of the Client (the data controller). In this role, we process personal data strictly 
                    according to our Client's instructions and applicable Data Processing Agreements (DPAs). 
                    If you are an end user of one of our Clients, your data is governed by that Client's own privacy 
                    policy, and you should direct any inquiries about your data to them.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4" data-testid="text-section-data-collect">2. Personal Data We Collect</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                We collect personal information through various means depending on your relationship with us:
              </p>
              
              <h3 className="text-lg font-medium text-white mb-3 mt-6">2.1 Information You Provide Directly</h3>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>Full name and job title</li>
                <li>Email address (business and/or personal)</li>
                <li>Phone number (mobile, business, or landline)</li>
                <li>Company or organization name, size, and industry</li>
                <li>Billing and payment information (processed via secure third-party payment processors)</li>
                <li>Communications content (messages, support tickets, emails exchanged with us)</li>
                <li>Preferences and marketing opt-in/opt-out selections</li>
                <li>Any other information you voluntarily provide through forms, surveys, or correspondence</li>
              </ul>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">2.2 Information Collected Automatically</h3>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>IP address and approximate geolocation</li>
                <li>Browser type, version, and user agent string</li>
                <li>Operating system and device information</li>
                <li>Pages visited, clickstream data, and navigation patterns</li>
                <li>Date, time, and duration of visits</li>
                <li>Referring URLs and search terms</li>
                <li>Cookies, pixel tags, and similar tracking technologies (see Section 8)</li>
              </ul>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">2.3 Information from Third-Party Sources</h3>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>Publicly available business data from professional directories and public registries</li>
                <li>Information from partners, resellers, and referral programs</li>
                <li>Data enrichment from B2B data providers to improve lead quality and accuracy</li>
                <li>Social media profile information when you interact with our social accounts</li>
              </ul>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">2.4 Client Data (Data Processor Role)</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                When Clients use our Platform, they may upload, transmit, or create personal data belonging to their 
                own customers or contacts ("Client Data"). This may include names, email addresses, phone numbers, 
                communication records, behavioral data, transaction history, and any other information our Clients 
                choose to process through our Platform. We process Client Data solely as instructed by the Client 
                and in accordance with our Data Processing Agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4" data-testid="text-section-how-use">3. How We Use Your Data</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                We use the information we collect for the following lawful purposes:
              </p>
              
              <h3 className="text-lg font-medium text-white mb-3 mt-6">3.1 Service Delivery and Operations</h3>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>To provide, maintain, and improve our Platform and Services</li>
                <li>To create and manage your account, authenticate users, and provide customer support</li>
                <li>To process transactions, billing, and invoicing</li>
                <li>To deliver Platform features including omnichannel messaging, telephony, CRM, and analytics</li>
                <li>To monitor system performance, uptime, and troubleshoot technical issues</li>
              </ul>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">3.2 Communications</h3>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>To respond to your inquiries, requests, and support tickets</li>
                <li>To send transactional communications (service alerts, billing notices, security notifications)</li>
                <li>To send marketing communications you have opted into (SMS, email, newsletters)</li>
                <li>To provide product updates, feature announcements, and educational content</li>
              </ul>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">3.3 Improvement and Analytics</h3>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>To analyze usage patterns and improve user experience</li>
                <li>To develop new features, products, and services</li>
                <li>To conduct research and generate aggregated, de-identified insights</li>
                <li>To personalize your experience and provide relevant content</li>
              </ul>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">3.4 Legal and Compliance</h3>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>To comply with applicable laws, regulations, and legal processes</li>
                <li>To enforce our Terms of Service and other agreements</li>
                <li>To maintain records of consent for A2P 10DLC and telecommunications compliance</li>
                <li>To detect, prevent, and address fraud, abuse, and security threats</li>
                <li>To respond to lawful requests from public and government authorities</li>
              </ul>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4">4. Data Storage, Hosting, and Security</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                As a SaaS provider, we take data storage and security seriously. Our infrastructure is designed 
                to meet the needs of regulated industries.
              </p>
              
              <h3 className="text-lg font-medium text-white mb-3 mt-6">4.1 Infrastructure and Hosting</h3>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>Data is stored on enterprise-grade cloud infrastructure within the United States</li>
                <li>We use encrypted databases with access controls and role-based permissions</li>
                <li>All environments (production, staging, development) are logically segregated</li>
                <li>Automated backups are performed regularly with encrypted off-site storage</li>
              </ul>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">4.2 Security Measures</h3>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>All data in transit is encrypted using TLS 1.2 or higher (HTTPS)</li>
                <li>Data at rest is encrypted using AES-256 encryption standards</li>
                <li>Multi-factor authentication (MFA) is available for all accounts</li>
                <li>Regular vulnerability assessments, penetration testing, and security audits</li>
                <li>Role-based access control (RBAC) limiting data access to authorized personnel only</li>
                <li>Network monitoring, intrusion detection systems, and automated threat response</li>
                <li>Employee security training and confidentiality agreements</li>
              </ul>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">4.3 Data Segregation</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                Client Data is logically segregated to ensure that each Client's data is isolated and accessible 
                only to authorized users of that Client's account. Our multi-tenant architecture employs strict 
                access controls to prevent unauthorized cross-tenant data access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4" data-testid="text-section-no-share">5. Data Sharing and Disclosure</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                We are committed to protecting your data. We do not sell, rent, or trade your personal information 
                to third parties for their marketing purposes. We may share personal data only in the following 
                limited circumstances:
              </p>
              
              <h3 className="text-lg font-medium text-white mb-3 mt-6">5.1 Service Providers (Sub-Processors)</h3>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                We engage trusted third-party service providers who assist in delivering our Platform and Services. 
                These sub-processors are contractually bound to process data only as instructed, maintain 
                confidentiality, and implement appropriate security measures. Categories include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>Cloud hosting and infrastructure providers</li>
                <li>Payment processing and billing services</li>
                <li>Email delivery and communication services</li>
                <li>Analytics and monitoring tools</li>
                <li>Customer support and ticketing systems</li>
              </ul>
              <p className="text-[#a59ecb] leading-relaxed mt-4">
                A list of current sub-processors is available upon request. Clients are notified of changes to 
                our sub-processor list and have the right to object as outlined in their DPA.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">5.2 Legal Requirements</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                We may disclose personal data if required by law, regulation, court order, subpoena, or other 
                legal process, or when we believe in good faith that disclosure is necessary to protect our rights, 
                your safety, or the safety of others, investigate fraud, or respond to a government request.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">5.3 Business Transfers</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                In the event of a merger, acquisition, reorganization, bankruptcy, or sale of all or a portion of 
                our assets, personal data may be transferred as part of the transaction. We will notify affected 
                parties and ensure the acquiring entity agrees to honor this Privacy Policy.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">5.4 With Your Consent</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                We may share your information for any other purpose with your explicit, informed consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Data Processing Agreement (DPA)</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                For Clients who use our Platform to process personal data on behalf of their customers, we enter 
                into a Data Processing Agreement that governs:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>The scope, nature, and purpose of data processing</li>
                <li>Types of personal data processed and categories of data subjects</li>
                <li>Obligations and rights of the Client (data controller) and CEMSCALE (data processor)</li>
                <li>Security measures and incident notification procedures</li>
                <li>Sub-processor engagement and notification requirements</li>
                <li>Data return and deletion upon termination of services</li>
                <li>Cooperation with data subject requests and regulatory authorities</li>
                <li>Liability, indemnification, and audit rights</li>
              </ul>
              <p className="text-[#a59ecb] leading-relaxed mt-4">
                Clients may request a copy of our standard DPA by contacting us at master@cemscale.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Data Retention</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                We retain personal data only for as long as necessary to fulfill the purposes for which it was 
                collected, unless a longer retention period is required or permitted by law:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li><span className="text-white font-medium">Account Data:</span> Retained for the duration of the Client's subscription and up to 90 days after account termination, unless otherwise agreed in the DPA</li>
                <li><span className="text-white font-medium">Client Data:</span> Retained and available for export during the subscription term. Upon termination, Client Data is deleted within 90 days unless a legal hold or regulatory requirement mandates longer retention</li>
                <li><span className="text-white font-medium">Website Visitor Data:</span> Contact form submissions and lead data are retained for up to 24 months from the date of collection</li>
                <li><span className="text-white font-medium">Consent Records:</span> Maintained for the duration required by applicable telecommunications regulations (A2P 10DLC) and for at least 5 years for compliance purposes</li>
                <li><span className="text-white font-medium">Billing and Financial Data:</span> Retained for 7 years in accordance with tax and accounting regulations</li>
                <li><span className="text-white font-medium">Logs and Analytics:</span> System logs are retained for up to 12 months; aggregated analytics may be retained indefinitely in de-identified form</li>
              </ul>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                Our Website uses cookies and similar technologies to enhance your experience and gather analytical data:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                  <h3 className="font-medium text-white mb-2">Essential Cookies</h3>
                  <p className="text-sm text-[#a59ecb]">
                    Required for basic website functionality, security, and session management. These cannot be disabled 
                    without impacting the website's ability to function.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                  <h3 className="font-medium text-white mb-2">Analytics Cookies</h3>
                  <p className="text-sm text-[#a59ecb]">
                    Help us understand how visitors interact with our Website by collecting information about pages 
                    visited, time spent, and navigation patterns. This data is aggregated and anonymized.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                  <h3 className="font-medium text-white mb-2">Functional Cookies</h3>
                  <p className="text-sm text-[#a59ecb]">
                    Enable enhanced functionality and personalization, such as remembering your preferences 
                    and display settings.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1a1a2e] border border-[#2a2a45]">
                  <h3 className="font-medium text-white mb-2">Marketing Cookies</h3>
                  <p className="text-sm text-[#a59ecb]">
                    Used to track visitors across websites to deliver relevant advertisements. You may opt out 
                    of marketing cookies through your browser settings or our cookie preference center.
                  </p>
                </div>
              </div>

              <p className="text-[#a59ecb] leading-relaxed mt-4">
                You can control cookies through your browser settings. Disabling certain cookies may limit 
                website functionality. We honor Do Not Track (DNT) browser signals where technically feasible.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">9. SMS & Email Communications</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                If you opt in to receive SMS or email communications from us:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>Message and data rates may apply depending on your carrier and plan</li>
                <li>Message frequency varies; you may receive up to 5 messages per month</li>
                <li>You may opt out at any time by replying <span className="text-white font-medium">STOP</span> to any SMS message</li>
                <li>For help, reply <span className="text-white font-medium">HELP</span> or contact us at master@cemscale.com</li>
                <li>Your consent is not a condition of purchasing any goods or services</li>
                <li>We maintain a full consent ledger recording your opt-in, including timestamp, IP address, and the consent language presented</li>
              </ul>
              <p className="text-[#a59ecb] leading-relaxed mt-4">
                For more details, see our <Link href="/sms-policy" className="text-[#a78bfa] hover:text-white transition-colors">SMS Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">10. International Data Transfers</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                CEMSCALE primarily stores and processes data within the United States. If data is transferred 
                to jurisdictions outside the United States, we ensure appropriate safeguards are in place:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>Standard Contractual Clauses (SCCs) approved by relevant authorities</li>
                <li>Adequacy determinations by applicable regulatory bodies</li>
                <li>Binding Corporate Rules where applicable</li>
                <li>Contractual obligations with sub-processors requiring equivalent data protection standards</li>
              </ul>
              <p className="text-[#a59ecb] leading-relaxed mt-4">
                Clients may request information about cross-border data flows relevant to their account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">11. Your Rights</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                Depending on your jurisdiction, you may have the following rights regarding your personal data:
              </p>
              
              <h3 className="text-lg font-medium text-white mb-3 mt-6">11.1 General Rights</h3>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li><span className="text-white font-medium">Access:</span> Request a copy of the personal data we hold about you</li>
                <li><span className="text-white font-medium">Correction:</span> Request correction of inaccurate or incomplete data</li>
                <li><span className="text-white font-medium">Deletion:</span> Request deletion of your personal data, subject to legal retention requirements</li>
                <li><span className="text-white font-medium">Portability:</span> Request your data in a structured, machine-readable format</li>
                <li><span className="text-white font-medium">Restriction:</span> Request that we limit the processing of your data</li>
                <li><span className="text-white font-medium">Objection:</span> Object to processing based on legitimate interests or direct marketing</li>
                <li><span className="text-white font-medium">Withdraw Consent:</span> Withdraw consent at any time where processing is based on consent</li>
                <li><span className="text-white font-medium">Opt-Out of Communications:</span> Unsubscribe from marketing emails or reply STOP to SMS messages</li>
              </ul>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">11.2 California Residents (CCPA/CPRA)</h3>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                If you are a California resident, the California Consumer Privacy Act (CCPA) and California Privacy 
                Rights Act (CPRA) provide additional rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>Right to know what personal information is collected, used, shared, or sold</li>
                <li>Right to delete personal information held by us and our service providers</li>
                <li>Right to opt out of the sale or sharing of personal information (we do not sell personal information)</li>
                <li>Right to non-discrimination for exercising your privacy rights</li>
                <li>Right to correct inaccurate personal information</li>
                <li>Right to limit the use of sensitive personal information</li>
              </ul>
              <p className="text-[#a59ecb] leading-relaxed mt-4">
                To exercise any of these rights, contact us at master@cemscale.com. We will verify your identity 
                before processing your request and respond within 45 days as required by law.
              </p>

              <h3 className="text-lg font-medium text-white mb-3 mt-6">11.3 European Economic Area (GDPR)</h3>
              <p className="text-[#a59ecb] leading-relaxed">
                If you are located in the EEA, the General Data Protection Regulation (GDPR) provides additional 
                protections. Our legal bases for processing include consent, contractual necessity, legitimate 
                interests, and legal obligation. You have the right to lodge a complaint with your local 
                supervisory authority if you believe your data has been processed in violation of the GDPR.
              </p>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4">12. Data Breach Notification</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                In the event of a security breach that affects personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#a59ecb]">
                <li>We will notify affected Clients without undue delay and no later than 72 hours after becoming aware of the breach, in accordance with our DPA and applicable law</li>
                <li>Notification will include the nature of the breach, categories and approximate number of data subjects affected, likely consequences, and measures taken or proposed</li>
                <li>We will cooperate with Clients and regulatory authorities in investigating and remediating the breach</li>
                <li>We maintain an incident response plan that is tested and updated regularly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">13. Children's Privacy</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                Our Website and Services are not directed at individuals under the age of 18. We do not knowingly 
                collect personal information from children. If we become aware that we have inadvertently collected 
                personal data from a child under 18, we will promptly delete such information. If you believe a 
                child has provided us with personal data, please contact us immediately at master@cemscale.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">14. Third-Party Links and Integrations</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                Our Website and Platform may contain links to third-party websites or integrate with third-party 
                services. We are not responsible for the privacy practices of these third parties. We encourage 
                you to read the privacy policies of any third-party websites you visit. The inclusion of a link 
                or integration does not imply endorsement of the third party's practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">15. Changes to This Policy</h2>
              <p className="text-[#a59ecb] leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
                legal requirements, or other factors. When we make material changes, we will notify you by posting 
                the updated policy on this page with a revised "Last Updated" date. For significant changes, we may 
                also notify Clients via email or through an in-platform notification. We encourage you to review 
                this policy periodically. Your continued use of our Website or Service after changes are posted 
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="p-6 rounded-xl bg-[#0a0a1a] border border-[#1f1f35]">
              <h2 className="text-xl font-semibold text-white mb-4" data-testid="text-section-contact">16. Contact Us</h2>
              <p className="text-[#a59ecb] leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="space-y-2 text-[#a59ecb]">
                <p><span className="text-white font-medium">CEMSCALE LLC</span></p>
                <p>20801 Biscayne Blvd Suite 340, Aventura, FL 33180</p>
                <p>Email: <a href="mailto:master@cemscale.com" className="text-[#a78bfa] hover:text-white transition-colors">master@cemscale.com</a></p>
                <p>Website: <a href="https://cemscale.com" className="text-[#a78bfa] hover:text-white transition-colors">https://cemscale.com</a></p>
              </div>
              <p className="text-[#a59ecb] leading-relaxed mt-4">
                For data subject access requests (DSARs), please email master@cemscale.com with the subject line 
                "Privacy Request" and include your full name and the email address associated with your account. 
                We will respond within 30 days.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
