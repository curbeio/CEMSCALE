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
    question: "What is CEMSCALE?",
    answer: "CEMSCALE is a unified Customer Engagement Management (CEM) platform designed for professional services industries. It brings together customer communication, contact management, lead tracking, and workflow automation into a single platform—eliminating the need for disconnected tools."
  },
  {
    question: "How does CEMSCALE protect sensitive client data?",
    answer: "CEMSCALE implements enterprise-grade security including end-to-end encryption for all communications, role-based access controls, comprehensive audit logging, and automatic data retention policies. For healthcare clients, we support HIPAA safeguards including Business Associate Agreements (BAAs). Our platform is SOC 2 aligned and undergoes regular security assessments."
  },
  {
    question: "What communication channels does CEMSCALE support?",
    answer: "CEMSCALE provides a unified inbox that brings together email, WhatsApp, Facebook Messenger, Instagram Direct Messages, and iMessage conversations. All channels feed into a single conversation thread per contact, so your team always has full context regardless of which channel the customer prefers."
  },
  {
    question: "What industries does CEMSCALE serve?",
    answer: "CEMSCALE is built for professional services industries including Insurance (P&C, Life, Health, Medicare), Healthcare (providers, clinics, hospitals), Financial Services (advisors, banks, credit unions), Legal (law firms, legal services), Tax (CPAs, tax preparers, enrolled agents), and Medicare (enrollment, supplements, advantage plans)."
  },
  {
    question: "Does CEMSCALE integrate with my existing tools?",
    answer: "CEMSCALE offers native integrations with popular CRM systems, agency management systems (AMS), electronic health record (EHR) platforms, and marketing automation tools. Our REST API and webhook system allow custom integrations with virtually any platform. Data syncs bidirectionally, ensuring your contact records, communication history, and engagement data stay consistent across systems."
  },
  {
    question: "What kind of support does CEMSCALE provide?",
    answer: "All CEMSCALE plans include email support with response within 4 business hours. Professional and Enterprise plans include dedicated account management, phone support, and priority ticket handling. Enterprise clients receive a dedicated Customer Success Manager, custom onboarding programs, and quarterly business reviews. Our support team is based in the United States."
  },
  {
    question: "How is pricing structured?",
    answer: "CEMSCALE offers per-seat licensing with tiered plans based on feature requirements. Plans include access to all core modules—contact management, unified inbox, workflow automation, and analytics. Contact our sales team for a customized quote based on your specific needs."
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "Upon cancellation, CEMSCALE provides a 30-day data export window during which you can download all your contact records, communication history, and data in standard formats (CSV, JSON). After the export window, data is securely deleted from our systems within 90 days, in accordance with our data retention policy. We provide written confirmation of data deletion upon request."
  },
  {
    question: "How long does onboarding take?",
    answer: "Most teams are fully operational within 1-2 weeks. Our onboarding process includes data migration from your existing tools, team training sessions, and custom workflow configuration. Enterprise clients receive a dedicated onboarding manager to ensure a smooth transition."
  },
  {
    question: "Can I try CEMSCALE before committing?",
    answer: "Yes. We offer guided product demos where our team walks you through the platform using scenarios relevant to your industry. You can also request a sandbox environment to explore features hands-on before making a decision. Contact us to schedule your personalized demo."
  }
];

const glossaryTerms = [
  { term: "CEM (Customer Engagement Management)", definition: "A strategy and technology approach focused on managing and optimizing all interactions between a business and its customers across every touchpoint and channel." },
  { term: "CRM (Customer Relationship Management)", definition: "Software that helps businesses manage customer data, interactions, and relationships. A CRM centralizes contact information, communication history, and sales pipeline data." },
  { term: "Omnichannel", definition: "A communication approach that provides a seamless customer experience across all channels (email, messaging, social media, phone) with unified conversation history." },
  { term: "HIPAA (Health Insurance Portability and Accountability Act)", definition: "Federal law establishing standards for protecting sensitive patient health information. Applies to covered entities and their business associates." },
  { term: "PHI (Protected Health Information)", definition: "Any individually identifiable health information created, received, maintained, or transmitted by a covered entity or business associate." },
  { term: "BAA (Business Associate Agreement)", definition: "A contract between a HIPAA-covered entity and a business associate that establishes the permitted uses and disclosures of PHI." },
  { term: "SOC 2 (Service Organization Control 2)", definition: "An auditing framework for service providers that stores customer data, evaluating controls related to security, availability, processing integrity, confidentiality, and privacy." },
  { term: "RBAC (Role-Based Access Control)", definition: "A security approach that restricts system access based on a user's role within the organization, ensuring team members only see data relevant to their function." },
  { term: "NPS (Net Promoter Score)", definition: "A customer loyalty metric measured by asking how likely customers are to recommend your business on a 0-10 scale. Scores are categorized as Promoters (9-10), Passives (7-8), or Detractors (0-6)." },
  { term: "Lead Scoring", definition: "A methodology for ranking prospects based on their likelihood to convert, using behavioral signals, engagement patterns, and demographic data to prioritize sales efforts." },
  { term: "Pipeline Management", definition: "The process of tracking and managing sales opportunities as they progress through defined stages—from initial contact to closed deal—with visibility into value and probability at each stage." },
  { term: "Workflow Automation", definition: "The use of technology to automate repetitive business processes such as follow-up reminders, task assignments, status updates, and notification triggers based on predefined rules." },
  { term: "DPA (Data Processing Agreement)", definition: "A legally binding contract between a data controller and data processor that outlines the scope, nature, and purpose of data processing activities." },
  { term: "API (Application Programming Interface)", definition: "A set of protocols and tools that allows different software applications to communicate with each other, enabling data sharing and integration between platforms." },
  { term: "Webhook", definition: "An HTTP callback that delivers real-time data to other applications. Used to receive instant notifications about events like new contacts, status changes, and form submissions." },
  { term: "SLA (Service Level Agreement)", definition: "A commitment between a service provider and client that defines expected performance standards, response times, uptime guarantees, and remedies for non-compliance." }
];

const complianceChecklist = [
  { category: "Data Security Best Practices", items: [
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
  ]},
  { category: "Client Data Management", items: [
    "Maintain a single source of truth for all client records",
    "Document data collection purposes and legal basis",
    "Implement data minimization—only collect what's necessary",
    "Provide clients with access to their data upon request",
    "Establish clear data retention and deletion schedules",
    "Ensure secure data export capabilities for client portability",
    "Review third-party integrations for data handling standards"
  ]},
  { category: "Team Operations", items: [
    "Define clear roles and permissions for each team member",
    "Conduct regular access reviews and remove inactive accounts",
    "Implement strong password policies and multi-factor authentication",
    "Train team members on secure client communication practices",
    "Document standard operating procedures for client interactions",
    "Establish escalation protocols for sensitive client matters"
  ]}
];

const guides = [
  {
    title: "Getting Started with CEMSCALE",
    description: "Step-by-step walkthrough of setting up your CEMSCALE workspace. Covers team invitations, role configuration, contact importing, and connecting your first communication channel.",
    icon: FileText,
    tag: "Guide"
  },
  {
    title: "Omnichannel Communication Strategy Playbook",
    description: "Framework for building a unified communication strategy across email, WhatsApp, and social channels. Includes channel selection criteria, workflow automation templates, and measurement frameworks.",
    icon: Globe,
    tag: "Playbook"
  },
  {
    title: "Client Data Security Guide",
    description: "Detailed guidance on protecting sensitive client information within your CRM. Covers encryption standards, access controls, audit trail best practices, and data handling procedures.",
    icon: Shield,
    tag: "Security"
  },
  {
    title: "Lead Management for Insurance Agencies",
    description: "Complete guide to capturing, scoring, nurturing, and converting insurance leads. Covers lead source optimization, response time benchmarks, follow-up workflows, and pipeline analytics.",
    icon: Users,
    tag: "Industry Guide"
  },
  {
    title: "Workflow Automation Best Practices",
    description: "How to design efficient automated workflows for client onboarding, follow-up sequences, task assignments, and team notifications. Reduce manual work while improving client experience.",
    icon: MessageSquare,
    tag: "Best Practices"
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
              Guides, best practices, FAQs, and industry glossary to help you get the most out of customer engagement.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-10 border-b border-[#1f1f35] pb-4">
            {([
              { key: "guides" as const, label: "Guides & Playbooks", icon: BookOpen },
              { key: "faq" as const, label: "FAQ", icon: HelpCircle },
              { key: "checklist" as const, label: "Security Checklist", icon: Shield },
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
                  Our team creates tailored guides and implementation playbooks for your specific industry and use case.
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
                  CEMSCALE has security built in
                </h3>
                <p className="text-[#a59ecb] text-sm mb-5 max-w-lg mx-auto">
                  These best practices are built into the CEMSCALE platform. Our security framework manages encryption, access controls, and audit logging automatically.
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
