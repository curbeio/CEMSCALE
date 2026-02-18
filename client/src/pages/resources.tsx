import { useEffect, useState } from "react";
import { Header } from "@/components/stripe/Header";
import { Footer } from "@/components/stripe/Footer";
import { Link } from "wouter";
import {
  ArrowLeft, ArrowRight, BookOpen, FileText, Shield, Scale,
  GraduationCap, HelpCircle, ChevronDown, ChevronUp, Download,
  MessageSquare, Phone, Mail, Globe, Lock, Users, BarChart3,
  CheckCircle2, AlertTriangle, Lightbulb, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is A2P 10DLC and why does it matter for my business?",
    answer: "A2P 10DLC (Application-to-Person 10-Digit Long Code) is the industry standard for business text messaging in the United States. Carriers like AT&T, T-Mobile, and Verizon require all businesses sending SMS/MMS to register their brand and messaging campaigns through The Campaign Registry (TCR). Without registration, your messages may be filtered, throttled, or blocked entirely. CEMSCALE handles the entire registration and compliance process for you."
  },
  {
    question: "How does CEMSCALE handle HIPAA compliance for healthcare clients?",
    answer: "CEMSCALE implements administrative, physical, and technical safeguards required by HIPAA. This includes end-to-end encryption for messages containing Protected Health Information (PHI), role-based access controls, comprehensive audit logging, Business Associate Agreements (BAAs) with all clients, and automatic data retention policies. Our platform is designed so healthcare providers can communicate with patients across channels without risking compliance violations."
  },
  {
    question: "What channels does CEMSCALE support?",
    answer: "CEMSCALE provides unified omnichannel communication across SMS, MMS, WhatsApp Business API, Facebook Messenger, Instagram Direct Messages, iMessage (via Apple Business Chat), Email, and Voice (inbound/outbound calling with IVR). All channels feed into a single conversation thread per contact, so your team always has full context regardless of which channel the customer prefers."
  },
  {
    question: "Can I port my existing phone numbers to CEMSCALE?",
    answer: "Yes. CEMSCALE supports number porting for local, toll-free, and short code numbers. The porting process typically takes 7-14 business days for local numbers and 4-6 weeks for toll-free and short codes. During the transition period, your existing service remains active. Our onboarding team manages the entire porting process to minimize disruption."
  },
  {
    question: "How does the consent management system work?",
    answer: "CEMSCALE's consent ledger automatically records every opt-in and opt-out event with full metadata: timestamp, IP address, user agent, page URL, consent text version, and the specific language the consumer agreed to. This creates an auditable compliance trail that satisfies TCPA requirements, carrier obligations, and state-specific regulations. Opt-outs are processed immediately across all channels."
  },
  {
    question: "What industries does CEMSCALE serve?",
    answer: "CEMSCALE is purpose-built for regulated industries including Insurance (P&C, Life, Health, Medicare), Healthcare (providers, clinics, hospitals), Financial Services (advisors, banks, credit unions), Legal (law firms, legal services), Tax (CPAs, tax preparers, enrolled agents), and Medicare (enrollment, supplements, advantage plans). Our compliance framework is tailored to the specific regulatory requirements of each industry."
  },
  {
    question: "Does CEMSCALE integrate with my existing tools?",
    answer: "CEMSCALE offers native integrations with popular CRM systems, agency management systems (AMS), electronic health record (EHR) platforms, and marketing automation tools. Our REST API and webhook system allow custom integrations with virtually any platform. Data syncs bidirectionally, ensuring your contact records, communication history, and engagement data stay consistent across systems."
  },
  {
    question: "What kind of support does CEMSCALE provide?",
    answer: "All CEMSCALE plans include email support with response within 4 business hours. Professional and Enterprise plans include dedicated account management, phone support, and priority ticket handling. Enterprise clients receive a dedicated Customer Success Manager, custom onboarding programs, and quarterly business reviews. Our support team is based in the United States and specializes in regulated industry communications."
  },
  {
    question: "How is pricing structured?",
    answer: "CEMSCALE offers per-seat licensing with tiered plans based on feature requirements and messaging volume. Plans include a base allocation of messages across channels, with transparent per-message pricing for overages. There are no hidden fees for A2P 10DLC registration, number provisioning, or compliance features—these are included in every plan. Contact our sales team for a customized quote based on your specific needs."
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "Upon cancellation, CEMSCALE provides a 30-day data export window during which you can download all your contact records, communication history, consent logs, and campaign data in standard formats (CSV, JSON). After the export window, data is securely deleted from our systems within 90 days, in compliance with our data retention policy and applicable regulations. We provide written confirmation of data deletion upon request."
  }
];

const glossaryTerms = [
  { term: "A2P (Application-to-Person)", definition: "Messaging sent from a business application to a consumer's mobile phone. Distinct from P2P (person-to-person) messaging between individuals." },
  { term: "10DLC (10-Digit Long Code)", definition: "A standard 10-digit phone number used for A2P messaging. Requires registration with The Campaign Registry for business use." },
  { term: "TCR (The Campaign Registry)", definition: "The centralized registration platform where businesses register their brand and messaging campaigns for A2P 10DLC compliance." },
  { term: "TCPA (Telephone Consumer Protection Act)", definition: "Federal law regulating telemarketing calls, auto-dialed calls, pre-recorded calls, text messages, and unsolicited faxes. Requires prior express consent for marketing messages." },
  { term: "CAN-SPAM Act", definition: "Federal law governing commercial email messages. Requires accurate header information, honest subject lines, opt-out mechanisms, and sender identification." },
  { term: "HIPAA (Health Insurance Portability and Accountability Act)", definition: "Federal law establishing standards for protecting sensitive patient health information. Applies to covered entities and their business associates." },
  { term: "PHI (Protected Health Information)", definition: "Any individually identifiable health information created, received, maintained, or transmitted by a covered entity or business associate." },
  { term: "BAA (Business Associate Agreement)", definition: "A contract between a HIPAA-covered entity and a business associate that establishes the permitted uses and disclosures of PHI." },
  { term: "SOC 2 (Service Organization Control 2)", definition: "An auditing framework for service providers that stores customer data, evaluating controls related to security, availability, processing integrity, confidentiality, and privacy." },
  { term: "GDPR (General Data Protection Regulation)", definition: "European Union regulation on data protection and privacy. Applies to any organization processing personal data of EU residents, regardless of where the organization is located." },
  { term: "CCPA (California Consumer Privacy Act)", definition: "California state law giving consumers rights over their personal information collected by businesses, including the right to know, delete, and opt out of sale." },
  { term: "IVR (Interactive Voice Response)", definition: "An automated telephony system that interacts with callers through voice and DTMF (touch-tone) inputs, routing calls and providing information without a live agent." },
  { term: "NPS (Net Promoter Score)", definition: "A customer loyalty metric measured by asking how likely customers are to recommend your business on a 0-10 scale. Scores are categorized as Promoters (9-10), Passives (7-8), or Detractors (0-6)." },
  { term: "DPA (Data Processing Agreement)", definition: "A legally binding contract between a data controller and data processor that outlines the scope, nature, and purpose of data processing activities." },
  { term: "E.164", definition: "The international standard format for phone numbers, consisting of a plus sign, country code, and subscriber number (e.g., +15551234567 for a US number)." },
  { term: "Opt-in / Opt-out", definition: "Opt-in is the process of a consumer giving explicit consent to receive messages. Opt-out is the process of withdrawing that consent. Both must be clearly documented and honored immediately." },
  { term: "Throughput", definition: "The number of messages a sender can transmit per second. A2P 10DLC throughput is determined by your brand's trust score assigned during TCR registration." },
  { term: "Webhook", definition: "An HTTP callback that delivers real-time data to other applications. Used to receive instant notifications about events like message delivery, opt-outs, and inbound messages." }
];

const complianceChecklist = [
  { category: "SMS Compliance", items: [
    "Register brand with The Campaign Registry (TCR)",
    "Register each messaging campaign with appropriate use case",
    "Obtain explicit written consent before sending any messages",
    "Include clear opt-out instructions in every message (reply STOP)",
    "Process opt-out requests immediately and across all channels",
    "Maintain a consent ledger with timestamps and consent language",
    "Include company identification in initial messages",
    "Respect quiet hours (no messages before 8 AM or after 9 PM local time)",
    "Keep message content consistent with registered campaign use case"
  ]},
  { category: "Email Compliance (CAN-SPAM)", items: [
    "Use accurate 'From' and 'Reply-To' header information",
    "Write honest, non-deceptive subject lines",
    "Include a valid physical postal address in every email",
    "Provide a clear and conspicuous unsubscribe mechanism",
    "Honor unsubscribe requests within 10 business days",
    "Monitor third-party email senders acting on your behalf",
    "Clearly identify the message as an advertisement when applicable"
  ]},
  { category: "Data Security", items: [
    "Encrypt all data at rest using AES-256 or equivalent",
    "Encrypt all data in transit using TLS 1.2 or higher",
    "Implement role-based access controls (RBAC)",
    "Maintain comprehensive audit logs of data access",
    "Conduct regular security assessments and penetration testing",
    "Establish and test an incident response plan",
    "Review and update data retention policies annually",
    "Train all employees on data handling procedures"
  ]},
  { category: "HIPAA (Healthcare)", items: [
    "Execute Business Associate Agreements with all vendors",
    "Implement minimum necessary access to PHI",
    "Maintain audit trails for all PHI access and modifications",
    "Encrypt PHI in all communications and storage",
    "Conduct annual HIPAA risk assessments",
    "Train workforce on HIPAA policies and procedures",
    "Establish breach notification procedures (within 60 days)"
  ]}
];

const guides = [
  {
    title: "Getting Started with A2P 10DLC Registration",
    description: "Step-by-step walkthrough of registering your brand and campaigns with The Campaign Registry. Covers EIN requirements, trust score optimization, and campaign approval best practices.",
    icon: FileText,
    tag: "Guide"
  },
  {
    title: "SMS Opt-In Best Practices for Regulated Industries",
    description: "How to design compliant opt-in workflows for insurance, healthcare, and financial services. Includes sample consent language, web form templates, and verbal consent documentation methods.",
    icon: MessageSquare,
    tag: "Best Practices"
  },
  {
    title: "Omnichannel Communication Strategy Playbook",
    description: "Framework for building a unified communication strategy across SMS, email, WhatsApp, voice, and social channels. Includes channel selection criteria, workflow automation templates, and measurement frameworks.",
    icon: Globe,
    tag: "Playbook"
  },
  {
    title: "HIPAA-Compliant Messaging Guide",
    description: "Detailed guidance on sending patient communications that satisfy HIPAA requirements. Covers message content restrictions, encryption standards, consent management, and audit trail requirements.",
    icon: Shield,
    tag: "Compliance"
  },
  {
    title: "Lead Management for Insurance Agencies",
    description: "Complete guide to capturing, scoring, nurturing, and converting insurance leads. Covers lead source optimization, response time benchmarks, drip campaign design, and pipeline analytics.",
    icon: Users,
    tag: "Industry Guide"
  },
  {
    title: "CEMSCALE API Integration Reference",
    description: "Technical documentation for integrating CEMSCALE with your existing systems. Covers REST API endpoints, webhook configuration, authentication, rate limits, and common integration patterns.",
    icon: BookOpen,
    tag: "Technical"
  }
];

export default function Resources() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"guides" | "faq" | "glossary" | "checklist">("guides");

  return (
    <div className="min-h-screen bg-[#030014] w-full overflow-x-hidden">
      <Header />
      <main className="w-full pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[#a78bfa] hover:text-white transition-colors mb-8" data-testid="link-back-home">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-resources-title">
              Resources
            </h1>
            <p className="text-lg text-[#a59ecb] max-w-2xl">
              Guides, compliance checklists, FAQs, and industry glossary to help you navigate customer engagement in regulated industries.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-10 border-b border-[#1f1f35] pb-4">
            {([
              { key: "guides" as const, label: "Guides & Playbooks", icon: BookOpen },
              { key: "faq" as const, label: "FAQ", icon: HelpCircle },
              { key: "checklist" as const, label: "Compliance Checklist", icon: Shield },
              { key: "glossary" as const, label: "Industry Glossary", icon: GraduationCap },
            ]).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? "bg-[#6b4cff] text-white"
                    : "text-[#a59ecb] hover:text-white hover:bg-[#1a1a2e]"
                }`}
                data-testid={`tab-${tab.key}`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "guides" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guides.map((guide, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] p-6 hover:border-[#6b4cff]/40 transition-colors"
                    data-testid={`card-guide-${i}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#6b4cff]/20 flex items-center justify-center">
                        <guide.icon className="h-5 w-5 text-[#a78bfa]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#7cffd4]/15 text-[#7cffd4]">
                            {guide.tag}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-[#a59ecb] leading-relaxed">
                          {guide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#6b4cff]/10 to-[#7cffd4]/10 border border-[#1f1f35] p-8 text-center">
                <Lightbulb className="h-8 w-8 text-[#7cffd4] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Need a custom resource for your industry?
                </h3>
                <p className="text-[#a59ecb] text-sm mb-5 max-w-lg mx-auto">
                  Our team creates tailored compliance guides and implementation playbooks for specific regulatory environments.
                </p>
                <Link href="/#contact">
                  <Button
                    className="rounded-full px-6 bg-[#6b4cff] hover:bg-[#7c5fff] text-white font-medium"
                    data-testid="button-request-resource"
                  >
                    Request a Resource
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {activeTab === "faq" && (
            <div className="max-w-3xl">
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-[#0a0a1a] border border-[#1f1f35] overflow-hidden"
                    data-testid={`faq-item-${i}`}
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                      className="w-full flex items-start gap-3 p-5 text-left"
                      data-testid={`button-faq-${i}`}
                    >
                      <HelpCircle className="h-5 w-5 text-[#6b4cff] flex-shrink-0 mt-0.5" />
                      <span className="flex-1 text-white font-medium text-sm leading-relaxed">
                        {faq.question}
                      </span>
                      {expandedFaq === i ? (
                        <ChevronUp className="h-4 w-4 text-[#8b87a5] flex-shrink-0 mt-0.5" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-[#8b87a5] flex-shrink-0 mt-0.5" />
                      )}
                    </button>
                    {expandedFaq === i && (
                      <div className="px-5 pb-5 pl-13">
                        <p className="text-[#a59ecb] text-sm leading-relaxed ml-8">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-1">Still have questions?</h3>
                  <p className="text-sm text-[#a59ecb]">Our team is here to help you find the answers you need.</p>
                </div>
                <Link href="/#contact">
                  <Button
                    className="rounded-full px-6 bg-[#6b4cff] hover:bg-[#7c5fff] text-white font-medium"
                    data-testid="button-faq-contact"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {activeTab === "checklist" && (
            <div className="space-y-8">
              <div className="rounded-xl bg-[#0a0a1a] border border-[#1f1f35] p-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="h-5 w-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">Important Disclaimer</h3>
                    <p className="text-sm text-[#a59ecb] leading-relaxed">
                      This checklist is provided for informational purposes only and does not constitute legal advice. Compliance requirements vary by industry, jurisdiction, and specific use case. Consult with qualified legal counsel to determine the specific obligations applicable to your business.
                    </p>
                  </div>
                </div>
              </div>

              {complianceChecklist.map((section, sIdx) => (
                <div key={sIdx} className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] p-6" data-testid={`checklist-section-${sIdx}`}>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[#6b4cff]" />
                    {section.category}
                  </h3>
                  <div className="space-y-3">
                    {section.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-[#7cffd4] flex-shrink-0 mt-0.5" />
                        <span className="text-[#c4bde0] leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="rounded-2xl bg-gradient-to-r from-[#6b4cff]/10 to-[#7cffd4]/10 border border-[#1f1f35] p-8 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  CEMSCALE handles compliance for you
                </h3>
                <p className="text-[#a59ecb] text-sm mb-5 max-w-lg mx-auto">
                  Every item on this checklist is built into the CEMSCALE platform. Our compliance framework manages registration, consent, encryption, and audit logging automatically.
                </p>
                <Link href="/#contact">
                  <Button
                    className="rounded-full px-6 bg-[#6b4cff] hover:bg-[#7c5fff] text-white font-medium"
                    data-testid="button-checklist-demo"
                  >
                    See It in Action
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {activeTab === "glossary" && (
            <div className="max-w-3xl">
              <div className="space-y-4">
                {glossaryTerms.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-[#0a0a1a] border border-[#1f1f35] p-5"
                    data-testid={`glossary-term-${i}`}
                  >
                    <h3 className="text-sm font-semibold text-white mb-1.5">
                      {item.term}
                    </h3>
                    <p className="text-sm text-[#a59ecb] leading-relaxed">
                      {item.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
