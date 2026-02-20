import { useEffect, useState } from "react";
import { Header } from "@/components/stripe/Header";
import { Footer } from "@/components/stripe/Footer";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Clock, User, Tag, Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "unified-crm-platform-benefits",
    title: "Why a Unified CRM Platform Is Essential for Growing Businesses in 2026",
    excerpt: "Disconnected tools create data silos, slow response times, and inconsistent customer experiences. A unified CRM platform brings everything together—contacts, conversations, tasks, and insights—in one place.",
    content: [
      "Most growing businesses reach a point where their toolstack becomes a liability. They have one tool for email, another for managing contacts, a spreadsheet for tracking leads, and a separate system for customer support. Each tool works in isolation, and the team spends more time switching between apps than actually serving customers.",
      "A unified CRM platform eliminates these silos by consolidating customer data, communication history, task management, and analytics into a single system. When a team member opens a customer record, they see the full picture: every conversation, every touchpoint, every note from every colleague who has interacted with that customer.",
      "The productivity gains are immediate and measurable. Teams using unified platforms report spending significantly less time on administrative tasks like data entry and context-switching. That time goes back into revenue-generating activities: following up with prospects, resolving customer issues, and building relationships.",
      "For industries like insurance, healthcare, and financial services, a unified platform also simplifies regulatory requirements. Instead of managing data privacy across multiple disconnected systems—each with its own security model and access controls—you have a single system with consistent policies, audit trails, and role-based permissions.",
      "Integration capability is what separates a true unified platform from a tool that just tries to do everything. CEMSCALE connects natively with the tools your team already uses, pulling data in and pushing updates out automatically. This means your existing workflows don't break—they get enhanced.",
      "The long-term value of a unified CRM compounds over time. As your customer data grows and your team scales, having a single source of truth prevents the entropy that plagues businesses running on disconnected systems. New team members onboard faster, handoffs between departments are seamless, and leadership has real-time visibility into business performance.",
      "CEMSCALE was built from the ground up as a unified platform—not assembled from acquisitions or bolted-on features. Every module shares the same data layer, the same interface philosophy, and the same commitment to simplicity."
    ],
    category: "Strategy",
    author: "CEMSCALE Team",
    date: "February 10, 2026",
    readTime: "7 min read",
    featured: true
  },
  {
    id: "omnichannel-engagement-regulated-industries",
    title: "Why Omnichannel Engagement Is Non-Negotiable for Professional Services",
    excerpt: "Insurance agents, healthcare providers, and financial advisors all face the same challenge: reaching clients on their preferred channel while maintaining data security. Omnichannel isn't a luxury—it's a necessity.",
    content: [
      "The concept of omnichannel communication has evolved from a competitive advantage to a fundamental business requirement. In professional services, where trust and accessibility are paramount, the ability to engage clients across multiple channels isn't just about convenience—it's about meeting people where they are.",
      "Consider the journey of an insurance policyholder filing a claim. They might initiate the process through a web form, receive a confirmation via email, get status updates through SMS, and have a detailed conversation with their adjuster over WhatsApp. Each touchpoint needs to be seamless, compliant, and part of a unified conversation thread.",
      "Healthcare providers face similar challenges. Patient communication spans appointment reminders (SMS), lab result notifications (secure messaging), billing inquiries (email), and follow-up care coordination (phone calls). HIPAA requires that each of these interactions maintains appropriate safeguards, regardless of the channel used.",
      "Financial services firms operate under their own set of communication regulations. FINRA requirements for archiving written communications apply to texts and social media messages just as they do to emails. The SEC's marketing rule governs how advisors can promote their services across all channels. A unified platform ensures these requirements are met consistently.",
      "The data makes the case clearly. According to research published in the Harvard Business Review, companies with strong omnichannel engagement strategies retain an average of 89% of their customers, compared to 33% for companies with weak omnichannel strategies. In industries where customer lifetime value can span decades, that difference is enormous.",
      "True omnichannel goes beyond just offering multiple channels. It means maintaining conversation context across channels, so a client doesn't have to repeat themselves when switching from SMS to a phone call. It means having a unified view of all interactions, so every team member can see the full picture. And it means automated workflow triggers that route messages to the right person at the right time.",
      "For Medicare enrollment periods, when agents handle hundreds of inquiries in a compressed timeframe, omnichannel capability becomes critical. An agent might need to send initial information via email, follow up with a text reminder, conduct the consultation over the phone, and send confirmation documents through a secure portal—all while maintaining CMS compliance."
    ],
    category: "Strategy",
    author: "CEMSCALE Team",
    date: "February 3, 2026",
    readTime: "7 min read"
  },
  {
    id: "ai-powered-lead-scoring",
    title: "How AI-Powered Lead Scoring Transforms Sales Pipelines in 2026",
    excerpt: "Manual lead qualification wastes your team's most valuable resource: time. AI-driven scoring models analyze behavioral signals, engagement patterns, and demographic data to surface the prospects most likely to convert.",
    content: [
      "The average sales team spends only 28% of their time actually selling, according to Salesforce's State of Sales report. The rest is consumed by data entry, research, and chasing leads that were never going to convert. AI-powered lead scoring directly addresses this inefficiency by automatically ranking prospects based on their likelihood to close.",
      "Traditional lead scoring relied on static rules: assign 10 points for a job title, 5 points for company size, 3 points for downloading a whitepaper. These models were better than nothing, but they couldn't capture the nuance of buyer behavior. A CEO downloading a whitepaper is very different from an intern doing research for a school project, even though both might score similarly under static rules.",
      "Modern AI scoring models analyze hundreds of signals in real time. They track email engagement patterns (not just opens, but time spent reading), website behavior (which pages, how long, and in what sequence), response times to outreach, sentiment in message replies, and even temporal patterns like when a prospect is most responsive.",
      "In professional services, lead scoring takes on additional dimensions. For insurance agencies, it factors in policy renewal dates, life events (marriage, home purchase, new baby), and coverage gaps identified through data enrichment. For financial advisors, it considers investment timelines, asset thresholds, and expressed financial goals.",
      "The key benefit isn't just identifying hot leads—it's also identifying leads that need nurturing versus those that should be deprioritized. A lead scoring model might flag that a prospect has high intent signals but low urgency, suggesting a drip campaign rather than immediate outreach. This kind of intelligent routing prevents the all-too-common mistake of burning a good lead with premature hard selling.",
      "Implementation matters as much as the model itself. Lead scores should be surfaced directly in the agent's workflow—not buried in a separate analytics dashboard. When an agent opens their morning queue, the highest-scored leads should be at the top, with clear context about why they scored highly and recommended next actions.",
      "CEMSCALE integrates lead scoring directly into the communication workflow, so agents see scoring insights alongside conversation history, enabling data-driven decisions without leaving their primary workspace."
    ],
    category: "AI & Automation",
    author: "CEMSCALE Team",
    date: "January 28, 2026",
    readTime: "6 min read"
  },
  {
    id: "personalized-client-communication",
    title: "The Power of Personalized Client Communication in Professional Services",
    excerpt: "Generic outreach gets ignored. Personalized communication that references a client's history, preferences, and needs builds trust and drives engagement. Here's how modern CRM tools make personalization scalable.",
    content: [
      "Clients today expect businesses to know them. When an insurance agent sends a renewal reminder that references the client's specific policy, coverage details, and upcoming changes—that feels like attentive service. When the same agent sends a generic 'your policy is expiring' notice, it feels transactional.",
      "Personalization at scale has historically been the domain of large enterprises with dedicated marketing teams. Modern CRM platforms have changed that equation entirely. With unified customer data and intelligent automation, even a small team can deliver personalized communication to thousands of clients.",
      "The foundation of personalization is data quality. A CRM that captures and organizes every client interaction—calls, emails, meetings, service requests—creates a rich profile that informs every subsequent communication. When a financial advisor reaches out about portfolio rebalancing, they can reference the client's stated goals, risk tolerance, and recent life events.",
      "Segmentation takes personalization beyond individual messages. By grouping clients based on shared characteristics—industry, policy type, service tier, engagement level—you can create targeted campaigns that feel personal without requiring manual customization for each recipient.",
      "Timing matters as much as content. A well-timed message about health plan options during open enrollment season, or a proactive check-in before a policy anniversary date, demonstrates that you're paying attention to your client's needs. CRM automation ensures these touchpoints happen consistently, without relying on human memory.",
      "The measurable impact of personalization is significant. Businesses that implement personalized client communication strategies consistently report higher client satisfaction scores, improved retention rates, and increased referral activity. The investment in CRM infrastructure pays for itself through stronger, longer-lasting client relationships.",
      "CEMSCALE's unified customer profiles make personalization natural. Every channel, every interaction, every data point feeds into a single view—so every message you send is informed by the full context of your relationship with that client."
    ],
    category: "Marketing",
    author: "CEMSCALE Team",
    date: "January 20, 2026",
    readTime: "6 min read"
  },
  {
    id: "crm-data-security-best-practices",
    title: "CRM Data Security: Protecting Client Information in a Connected World",
    excerpt: "Every customer interaction generates data. Every data point is a potential liability. For businesses handling sensitive client information, CRM security isn't just an IT concern—it's a business survival issue.",
    content: [
      "Data breaches cost businesses an average of $4.88 million per incident in 2024, according to IBM's annual Cost of a Data Breach Report. For industries like healthcare and financial services, the costs are even higher—healthcare breaches averaged $9.77 million, and financial services breaches averaged $6.08 million. Beyond the direct costs, there's reputational damage that can take years to repair.",
      "CRM systems present unique security challenges because they consolidate sensitive information from multiple sources. A single CRM record might contain personally identifiable information (PII), financial data, health information, communication history, and behavioral data. This concentration of value makes CRM databases high-priority targets for threat actors.",
      "Encryption is the foundation of CRM security, but it needs to be comprehensive. Data at rest should be encrypted using AES-256 or equivalent standards. Data in transit should be protected by TLS 1.3. But often overlooked is encryption of data in use—protecting information while it's being processed in memory. Newer hardware-based encryption technologies are making this increasingly feasible.",
      "Access control goes beyond simple username and password authentication. Role-based access control (RBAC) ensures that team members only see the data they need for their specific function. A receptionist scheduling appointments doesn't need to see financial details. A billing specialist doesn't need to see medical records. Implementing the principle of least privilege reduces both the attack surface and the impact scope of any potential breach.",
      "Audit logging creates an immutable record of who accessed what data, when, and what they did with it. For industries handling sensitive data, these logs aren't optional—they're required by frameworks like HIPAA, SOC 2, and various state privacy laws. Effective audit logging captures successful and failed access attempts, data exports, record modifications, and administrative actions.",
      "Third-party integrations introduce additional risk vectors. Every API connection, webhook, and data sync creates a potential pathway for unauthorized access. Evaluating the security posture of integration partners, implementing API key rotation, and monitoring integration traffic for anomalies are essential practices.",
      "Employee training remains the most cost-effective security investment. Phishing attacks account for the majority of initial breach vectors, and no amount of technical security can fully compensate for a team member who clicks a malicious link. Regular security awareness training, simulated phishing exercises, and clear incident reporting procedures create a human firewall that complements technical defenses."
    ],
    category: "Security",
    author: "CEMSCALE Team",
    date: "January 14, 2026",
    readTime: "7 min read"
  },
  {
    id: "customer-retention-strategies",
    title: "Customer Retention in Professional Services: Beyond the First Sale",
    excerpt: "Acquiring a new customer costs 5-7x more than retaining an existing one. In insurance, healthcare, and financial services—where relationships span years or decades—retention strategy is growth strategy.",
    content: [
      "Customer retention has always been more cost-effective than acquisition, but in professional services, the economics are even more pronounced. An insurance policyholder who renews for 10 years generates significantly more lifetime value than the initial premium suggests, especially when accounting for cross-selling opportunities and referrals.",
      "The first step in retention is understanding why customers leave. In insurance, the top reasons are price (37%), poor service experience (28%), life changes (18%), and competitive offers (17%), based on J.D. Power's insurance industry research. Notably, more than half of churn is driven by factors within the company's control: service quality and competitive positioning.",
      "Proactive communication is the single most impactful retention tool. Reaching out before a renewal date, before a complaint escalates, or before a competitor's marketing campaign hits—these proactive touches demonstrate that you value the relationship. Automated workflows can trigger these communications based on data signals, ensuring no client falls through the cracks.",
      "Personalization at scale requires a unified view of the customer. When a policyholder calls about a claim, the agent should immediately see their full history: how long they've been a customer, what other products they hold, their communication preferences, any recent interactions, and their overall satisfaction indicators. This context transforms a transactional interaction into a relationship-building moment.",
      "Net Promoter Score (NPS) surveys, when used correctly, provide actionable retention intelligence. The key is acting on the feedback, not just collecting it. Detractors (scores 0-6) should trigger immediate follow-up workflows. Passives (scores 7-8) represent the most addressable retention risk—they're satisfied but not loyal, and a single negative experience could push them to a competitor.",
      "Cross-selling and upselling, done thoughtfully, actually improve retention. A customer with multiple products or services has higher switching costs and more reasons to stay. The key word is 'thoughtfully'—aggressive cross-selling at inappropriate moments (like during a claim) damages trust. AI-driven recommendation engines can identify the right product, for the right customer, at the right time.",
      "Community and education programs create engagement beyond transactions. Webinars on financial planning, newsletters with industry updates, and resource libraries with relevant content keep your brand present in customers' lives between purchase decisions. These touchpoints build the kind of trust-based relationships that withstand competitive pressure."
    ],
    category: "Strategy",
    author: "CEMSCALE Team",
    date: "January 7, 2026",
    readTime: "7 min read"
  },
  {
    id: "whatsapp-business-api-guide",
    title: "WhatsApp Business API: A Practical Guide for U.S. Companies",
    excerpt: "With over 100 million monthly active users in the United States, WhatsApp is no longer just an international messaging app. Businesses are leveraging the WhatsApp Business API to deliver richer customer experiences.",
    content: [
      "WhatsApp has quietly become a significant communication channel in the United States, with adoption growing steadily among both consumers and businesses. The WhatsApp Business API enables companies to send notifications, provide customer support, and conduct conversations at scale—all within the familiar WhatsApp interface.",
      "Unlike the consumer WhatsApp app, the Business API supports automated messaging, template-based notifications, and integration with CRM and helpdesk systems. This makes it suitable for use cases like appointment confirmations, shipping notifications, payment reminders, and interactive customer support.",
      "Message templates are a core concept in the WhatsApp Business API. For business-initiated conversations, you must use pre-approved templates that have been submitted to and approved by Meta. These templates can include variables for personalization (e.g., customer name, order number), but the overall structure and language must be approved in advance.",
      "The pricing model for WhatsApp Business API is conversation-based. A conversation is a 24-hour window that opens when a message is sent or received. Business-initiated conversations (using templates) have different pricing than user-initiated conversations (where the customer messages you first). Understanding this model is essential for managing costs effectively.",
      "For professional services, WhatsApp offers several advantages over traditional SMS. Messages are end-to-end encrypted by default, providing a higher level of security for sensitive communications. Rich media support allows sending documents, images, and interactive buttons—enabling use cases like sending policy documents or collecting signed forms.",
      "Integration with an omnichannel platform like CEMSCALE means WhatsApp conversations are automatically logged in the CRM, appear in the unified inbox alongside SMS and email threads, and can trigger the same automated workflows. An agent can seamlessly move a conversation from WhatsApp to a phone call without losing context.",
      "Privacy considerations for WhatsApp mirror those of other messaging channels. Customer preferences must be respected, and message content should comply with industry-specific data protection standards. The advantage of a unified platform is that these standards are maintained consistently across all channels."
    ],
    category: "Channels",
    author: "CEMSCALE Team",
    date: "December 28, 2025",
    readTime: "6 min read"
  },
  {
    id: "insurance-crm-digital-transformation",
    title: "Digital Transformation in Insurance: What Agencies Actually Need",
    excerpt: "The insurance industry talks a lot about digital transformation, but most agencies struggle with the basics: scattered client data, manual follow-ups, and disconnected communication tools. Here's a practical roadmap.",
    content: [
      "Digital transformation in insurance has been discussed for over a decade, yet many independent agencies still operate with a patchwork of disconnected tools. They might use one system for policy management, another for email marketing, a personal phone for texting clients, and spreadsheets for tracking leads. This fragmentation creates inefficiency, compliance risk, and poor client experiences.",
      "The starting point for any digital transformation isn't technology—it's process mapping. Before selecting tools, an agency needs to document its current workflows: How does a lead move from first contact to bound policy? How are renewals managed? What happens when a client files a claim? How are cross-sell opportunities identified? Understanding these processes reveals where technology can have the greatest impact.",
      "A centralized CRM platform is the foundation of modern agency operations. It should serve as the single source of truth for client information, communication history, policy details, and task management. When every team member has access to the same up-to-date information, client interactions become more consistent and professional.",
      "Communication automation addresses one of the biggest pain points in agency operations: the sheer volume of routine touchpoints. Birthday messages, policy renewal reminders, payment due notices, claims status updates, and educational content can all be automated with appropriate personalization. This frees agents to focus on high-value activities like consultative selling and complex service requests.",
      "Mobile accessibility is non-negotiable for field agents and producers. They need to access client information, send messages, make calls, and update records from their phones or tablets. A cloud-based platform that works seamlessly across devices ensures that agents can be productive whether they're in the office, at a client's home, or at an industry event.",
      "Data analytics transforms raw information into actionable intelligence. Which marketing channels generate the highest-quality leads? Which policy types have the best retention rates? Which agents are most effective at cross-selling? These insights enable data-driven decisions about resource allocation, marketing spend, and training investments.",
      "The implementation timeline matters. Agencies that try to transform everything at once often fail due to change fatigue and operational disruption. A phased approach—starting with CRM and communication consolidation, then adding automation, then analytics—allows the team to adapt gradually while seeing incremental benefits that build momentum."
    ],
    category: "Industry",
    author: "CEMSCALE Team",
    date: "December 19, 2025",
    readTime: "7 min read"
  }
];

const categories = ["All", "Strategy", "AI & Automation", "Marketing", "Security", "Channels", "Industry"];

export default function Blog() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedPost, setExpandedPost] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured || selectedCategory !== "All" || searchQuery !== "");

  const categoryColors: Record<string, string> = {
    "Strategy": "bg-[#a78bfa]/20 text-[#a78bfa]",
    "AI & Automation": "bg-[#6b4cff]/20 text-[#818cf8]",
    "Marketing": "bg-[#ff805d]/20 text-[#ff805d]",
    "Security": "bg-[#f59e0b]/20 text-[#f59e0b]",
    "Channels": "bg-[#38bdf8]/20 text-[#38bdf8]",
    "Industry": "bg-[#34d399]/20 text-[#34d399]"
  };

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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-blog-title">
              CEMSCALE Blog
            </h1>
            <p className="text-lg text-[#a59ecb] max-w-2xl">
              Insights on customer engagement, security, and growth strategies for professional services.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8b87a5]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#0a0a1a] border border-[#1f1f35] text-white placeholder-[#8b87a5] focus:outline-none focus:border-[#6b4cff] transition-colors text-sm"
                data-testid="input-blog-search"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#6b4cff] text-white"
                    : "bg-[#0a0a1a] border border-[#1f1f35] text-[#a59ecb] hover:border-[#6b4cff]/50 hover:text-white"
                }`}
                data-testid={`button-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {selectedCategory === "All" && searchQuery === "" && featuredPost && (
            <div className="mb-12">
              <div
                className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] p-6 sm:p-8 lg:p-10 cursor-pointer hover:border-[#6b4cff]/40 transition-colors"
                onClick={() => setExpandedPost(expandedPost === featuredPost.id ? null : featuredPost.id)}
                data-testid={`card-featured-${featuredPost.id}`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#6b4cff] text-white">
                    Featured
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[featuredPost.category] || "bg-[#1a1a2e] text-[#a59ecb]"}`}>
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3" data-testid="text-featured-title">
                  {featuredPost.title}
                </h2>
                <p className="text-[#a59ecb] leading-relaxed mb-4 text-base">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#8b87a5]">
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredPost.readTime}
                  </span>
                  <span>{featuredPost.date}</span>
                </div>

                {expandedPost === featuredPost.id && (
                  <div className="mt-8 pt-8 border-t border-[#1f1f35] space-y-5">
                    {featuredPost.content.map((paragraph, i) => (
                      <p key={i} className="text-[#c4bde0] leading-relaxed text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center gap-2 text-[#6b4cff] text-sm font-medium">
                  {expandedPost === featuredPost.id ? "Show less" : "Read full article"}
                  <ChevronRight className={`h-4 w-4 transition-transform ${expandedPost === featuredPost.id ? "rotate-90" : ""}`} />
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularPosts.map((post) => (
              <div
                key={post.id}
                className={`rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] p-6 cursor-pointer hover:border-[#6b4cff]/40 transition-colors ${
                  expandedPost === post.id ? "md:col-span-2" : ""
                }`}
                onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                data-testid={`card-post-${post.id}`}
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category] || "bg-[#1a1a2e] text-[#a59ecb]"}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-[#8b87a5]">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 leading-snug" data-testid={`text-title-${post.id}`}>
                  {post.title}
                </h3>
                <p className="text-[#a59ecb] text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#8b87a5]">
                  <span className="flex items-center gap-1.5">
                    <User className="h-3 w-3" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                {expandedPost === post.id && (
                  <div className="mt-6 pt-6 border-t border-[#1f1f35] space-y-4">
                    {post.content.map((paragraph, i) => (
                      <p key={i} className="text-[#c4bde0] leading-relaxed text-sm">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                <div className="mt-3 flex items-center gap-2 text-[#6b4cff] text-sm font-medium">
                  {expandedPost === post.id ? "Show less" : "Read article"}
                  <ChevronRight className={`h-4 w-4 transition-transform ${expandedPost === post.id ? "rotate-90" : ""}`} />
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#8b87a5] text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="mt-4 text-[#6b4cff] hover:text-[#a78bfa] transition-colors text-sm font-medium"
                data-testid="button-clear-filters"
              >
                Clear filters
              </button>
            </div>
          )}

          <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#6b4cff]/10 to-[#7cffd4]/10 border border-[#1f1f35] p-8 sm:p-10 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Ready to transform your customer engagement?
            </h2>
            <p className="text-[#a59ecb] mb-6 max-w-xl mx-auto">
              See how CEMSCALE helps businesses manage customer engagement across every channel.
            </p>
            <Link href="/#contact">
              <Button
                className="rounded-full px-8 h-11 bg-[#6b4cff] hover:bg-[#7c5fff] text-white font-medium"
                data-testid="button-blog-cta"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
