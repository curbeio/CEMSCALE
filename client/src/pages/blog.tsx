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
    id: "a2p-10dlc-compliance-guide",
    title: "A2P 10DLC Compliance: What Every Business Needs to Know in 2026",
    excerpt: "The transition to A2P 10DLC registration is no longer optional. Carriers are actively filtering unregistered traffic, and businesses that fail to comply risk having their messages blocked entirely. Here's what you need to understand.",
    content: [
      "Application-to-Person (A2P) messaging over 10-digit long codes (10DLC) has become the standard for business SMS in the United States. Since the major carriers—AT&T, T-Mobile, and Verizon—began enforcing registration requirements, the landscape of business texting has changed dramatically.",
      "The Campaign Registry (TCR) serves as the central hub for A2P 10DLC registration. Every business that sends SMS or MMS messages to consumers must register their brand and each individual messaging campaign. This two-step process ensures that carriers can verify the legitimacy of message senders and protect consumers from spam.",
      "Brand registration requires providing your company's legal name, EIN (Employer Identification Number), and business details. The TCR assigns a trust score based on factors like company size, industry, and history. This trust score directly impacts your messaging throughput—higher trust means more messages per second.",
      "Campaign registration is where you describe the purpose of your messaging. Each campaign needs a clear use case (marketing, customer service, account notifications, etc.), sample messages, opt-in workflow details, and privacy policy links. Carriers review these campaigns and can reject those that don't meet their standards.",
      "For regulated industries like insurance, healthcare, and financial services, compliance goes beyond just registering. HIPAA considerations, state-specific insurance communication regulations, and financial disclosure requirements all layer on top of A2P 10DLC rules. A platform purpose-built for these industries handles these complexities natively.",
      "The penalties for non-compliance are real. Unregistered messages face per-message surcharges of $0.005 to $0.01, dramatically increasing costs. More critically, carriers can throttle or completely block unregistered traffic. Some businesses have seen their deliverability drop below 20% after carrier enforcement actions.",
      "Opt-in management is a cornerstone of A2P 10DLC compliance. Every recipient must have explicitly consented to receive messages, and you must maintain records of when and how that consent was obtained. This includes the timestamp, the specific language they agreed to, the source (web form, in-person, etc.), and any relevant context.",
      "CEMSCALE's built-in consent ledger automatically captures and stores all required consent data points—IP address, user agent, page URL, consent text version, and timestamp—creating an auditable trail that satisfies both carrier requirements and regulatory standards."
    ],
    category: "Compliance",
    author: "CEMSCALE Team",
    date: "February 10, 2026",
    readTime: "8 min read",
    featured: true
  },
  {
    id: "omnichannel-engagement-regulated-industries",
    title: "Why Omnichannel Engagement Is Non-Negotiable for Regulated Industries",
    excerpt: "Insurance agents, healthcare providers, and financial advisors all face the same challenge: reaching clients on their preferred channel while maintaining compliance. Omnichannel isn't a luxury—it's a necessity.",
    content: [
      "The concept of omnichannel communication has evolved from a competitive advantage to a fundamental business requirement. In regulated industries, where trust and accessibility are paramount, the ability to engage clients across multiple channels isn't just about convenience—it's about meeting people where they are.",
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
      "In regulated industries, lead scoring takes on additional dimensions. For insurance agencies, it factors in policy renewal dates, life events (marriage, home purchase, new baby), and coverage gaps identified through data enrichment. For financial advisors, it considers investment timelines, asset thresholds, and expressed financial goals.",
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
    id: "sms-marketing-roi",
    title: "SMS Marketing ROI: Real Numbers Behind Text Message Campaigns",
    excerpt: "SMS boasts a 98% open rate and 45% response rate—dwarfing email's performance. But raw metrics only tell part of the story. Understanding the true ROI of SMS marketing requires looking at conversion attribution, lifetime value impact, and compliance costs.",
    content: [
      "Text message marketing continues to deliver exceptional engagement metrics. Industry data consistently shows SMS open rates between 95% and 98%, with most messages read within three minutes of delivery. Compare this to email marketing, where average open rates hover around 20-25%, and the channel preference becomes clear.",
      "But open rates are a vanity metric if they don't translate to business outcomes. The real question is: what revenue does SMS generate per dollar spent? The answer varies by industry and execution quality, but well-run SMS campaigns typically generate $25-50 in revenue per dollar spent, according to data compiled by marketing analytics firms.",
      "For regulated industries, SMS ROI calculations must account for compliance infrastructure costs. A2P 10DLC registration fees, consent management systems, opt-out processing, and regulatory monitoring all factor into the true cost basis. Businesses that try to cut corners on compliance end up paying more through carrier surcharges and blocked messages.",
      "The most effective SMS strategies combine transactional and promotional messaging within a compliant framework. Appointment reminders (transactional) build the habit of checking messages from your business, which increases engagement when you send a promotional offer. Policy renewal reminders (transactional) create a natural opportunity to cross-sell additional coverage.",
      "Timing and frequency are critical variables. Research from multiple SMS marketing studies suggests that 2-4 messages per month is the sweet spot for most businesses. Exceeding this threshold leads to higher opt-out rates without proportional revenue gains. However, time-sensitive communications—like open enrollment reminders or claim status updates—are expected and welcomed even at higher frequencies.",
      "Personalization drives measurable improvements in SMS performance. Messages that include the recipient's first name, reference their specific product or service, or acknowledge their history with your company see 15-25% higher conversion rates than generic blasts. A unified CRM platform makes this level of personalization possible at scale.",
      "Attribution modeling for SMS requires tracking the full customer journey. A text message might not directly generate a sale, but it could be the touchpoint that drives a website visit, which leads to a phone consultation, which closes the deal. Multi-touch attribution gives SMS credit for its role in the conversion path, revealing its true contribution to revenue."
    ],
    category: "Marketing",
    author: "CEMSCALE Team",
    date: "January 20, 2026",
    readTime: "7 min read"
  },
  {
    id: "crm-data-security-best-practices",
    title: "CRM Data Security: Protecting Client Information in a Connected World",
    excerpt: "Every customer interaction generates data. Every data point is a potential liability. For businesses in regulated industries, CRM security isn't just an IT concern—it's a business survival issue.",
    content: [
      "Data breaches cost businesses an average of $4.88 million per incident in 2024, according to IBM's annual Cost of a Data Breach Report. For regulated industries, the costs are even higher—healthcare breaches averaged $9.77 million, and financial services breaches averaged $6.08 million. Beyond the direct costs, there's reputational damage that can take years to repair.",
      "CRM systems present unique security challenges because they consolidate sensitive information from multiple sources. A single CRM record might contain personally identifiable information (PII), financial data, health information, communication history, and behavioral data. This concentration of value makes CRM databases high-priority targets for threat actors.",
      "Encryption is the foundation of CRM security, but it needs to be comprehensive. Data at rest should be encrypted using AES-256 or equivalent standards. Data in transit should be protected by TLS 1.3. But often overlooked is encryption of data in use—protecting information while it's being processed in memory. Newer hardware-based encryption technologies are making this increasingly feasible.",
      "Access control goes beyond simple username and password authentication. Role-based access control (RBAC) ensures that team members only see the data they need for their specific function. A receptionist scheduling appointments doesn't need to see financial details. A billing specialist doesn't need to see medical records. Implementing the principle of least privilege reduces both the attack surface and the blast radius of any potential breach.",
      "Audit logging creates an immutable record of who accessed what data, when, and what they did with it. For regulated industries, these logs aren't optional—they're required by frameworks like HIPAA, SOC 2, and various state privacy laws. Effective audit logging captures successful and failed access attempts, data exports, record modifications, and administrative actions.",
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
    title: "Customer Retention in Regulated Industries: Beyond the First Sale",
    excerpt: "Acquiring a new customer costs 5-7x more than retaining an existing one. In insurance, healthcare, and financial services—where relationships span years or decades—retention strategy is growth strategy.",
    content: [
      "Customer retention has always been more cost-effective than acquisition, but in regulated industries, the economics are even more pronounced. An insurance policyholder who renews for 10 years generates significantly more lifetime value than the initial premium suggests, especially when accounting for cross-selling opportunities and referrals.",
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
      "For regulated industries, WhatsApp offers several advantages over traditional SMS. Messages are end-to-end encrypted by default, providing a higher level of security for sensitive communications. Rich media support allows sending documents, images, and interactive buttons—enabling use cases like sending policy documents or collecting signed forms.",
      "Integration with an omnichannel platform like CEMSCALE means WhatsApp conversations are automatically logged in the CRM, appear in the unified inbox alongside SMS and email threads, and can trigger the same automated workflows. An agent can seamlessly move a conversation from WhatsApp to a phone call without losing context.",
      "Compliance considerations for WhatsApp mirror those of other messaging channels. Consent must be obtained before sending business-initiated messages, opt-out mechanisms must be honored, and message content must comply with industry-specific regulations. The advantage of a dedicated compliance framework is that these requirements are enforced consistently across all channels."
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

const categories = ["All", "Compliance", "Strategy", "AI & Automation", "Marketing", "Security", "Channels", "Industry"];

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
    "Compliance": "bg-[#7cffd4]/20 text-[#7cffd4]",
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
              Insights on customer engagement, compliance, and growth strategies for regulated industries.
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
              See how CEMSCALE helps regulated businesses communicate compliantly across every channel.
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
