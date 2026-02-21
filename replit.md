# CemScale Website

## Overview
A fully responsive website featuring a premium dark theme inspired by Growsphere CRM design (Dribbble reference). The site showcases CemScale as a B2B SaaS Customer Engagement Management software platform for professional services teams, with unified CRM, workflow automation, and omnichannel communication capabilities.

## Design Style
**Growsphere-Inspired Dark Theme** - Premium SaaS aesthetic with:
- Dark navy/purple background (#030014)
- Purple accent colors (#6b4cff, #a78bfa)
- Teal highlights (#7cffd4)
- Centered hero with infinity symbol
- Feature cards with subtle borders and glow effects

## Project Structure
```
client/src/
├── components/
│   └── stripe/           # All CemScale components
│       ├── Header.tsx         # Dark translucent nav with CemScale logo
│       ├── HeroSection.tsx    # "One platform. Infinite growth." with feature cards
│       ├── TelephonySection.tsx # Cloud telephony features, metrics, and dashboard
│       ├── MarketingSection.tsx # Multi-channel marketing automation platform
│       ├── EngagementSection.tsx # Customer engagement and CRM features
│       ├── LeadsSection.tsx    # Lead management, scoring, and pipeline
│       ├── LogoCarousel.tsx   # Partner company logos (dark theme)
│       ├── DataSection.tsx    # B2B data features and stats
│       ├── ServicesSection.tsx # 4 service flyers (Telephony, Marketing, CRM, Leads)
│       ├── StatsSection.tsx   # Key metrics with gradient text
│       ├── UseCasesSection.tsx # Capability cards
│       ├── EnterpriseSection.tsx # Success stories carousel
│       ├── StartupSection.tsx # Quick Setup & Live Demo cards
│       ├── CodeSnippet.tsx    # CemScale API code examples
│       ├── CTASection.tsx     # Final call to action
│       └── Footer.tsx         # Full footer with dark theme
├── pages/
│   └── home.tsx          # Main homepage (bg-[#030014])
└── index.css             # Global dark theme + animations
```

## Color Palette (Growsphere Style)
- **Background Dark**: #030014 - Main page background
- **Card Background**: #0a0a1a - Cards and sections
- **Highlight Background**: #1a1a2e - Inputs, hover states
- **Primary Purple**: #6b4cff - CTAs, accents
- **Light Purple**: #a78bfa - Secondary accents
- **Teal Accent**: #7cffd4 - Success, highlights
- **Orange Accent**: #ff805d - Alerts
- **Text Primary**: white - Headings
- **Text Secondary**: #a59ecb - Body text
- **Text Muted**: #8b87a5 - Footer, tertiary
- **Border**: #1f1f35 - Card borders

## Typography
- **Primary Font**: Montserrat (Google Fonts)
- Fluid typography system that scales with viewport

## Key Sections
1. **Hero**: "One platform. Infinite ∞ growth." with centered layout
   - Dark gradient background with purple spotlight
   - Infinity symbol in headline
   - Dual CTAs: "Get Started Now" + "Schedule a Demo"
   - 4 Feature cards: Chatbot, App Integrations, Security, AI Drafting
2. **Telephony Section**: Cloud telephony features and capabilities
   - Cloud PBX, Call Recording, IVR, Real-Time Analytics
   - Live call dashboard with metrics
   - Global coverage, instant setup, enterprise security cards
3. **Marketing Section**: Multi-channel marketing automation
   - Email, SMS, WhatsApp, Social Media channels
   - Automation workflows with conversion metrics
   - AI-powered email builder with subject line generator
4. **Engagement Section**: Customer engagement and CRM
   - Active Users, Conversations, NPS Score, Retention metrics
   - Customer journey funnel visualization
   - Recent interactions feed with sentiment analysis
5. **Leads Section**: Lead management and scoring
   - Sales pipeline with stages and values
   - AI lead scoring tiers (Hot, Warm, Nurture, Cold)
   - Lead sources breakdown and recent leads feed
6. **Logo Carousel**: Partner company logos (muted colors)
7. **Data Section**: B2B database features with stats
8. **Services**: 4 service flyers (Telephony, Marketing, CRM, Leads)
9. **Stats**: Key metrics with gradient text
10. **Use Cases**: 6 capability cards with icons
11. **Enterprise**: Success stories carousel
12. **Startup**: Quick Start & Live Demo cards
13. **Developer**: API code snippets with syntax highlighting
14. **CTA**: Final call to action with purple accent
15. **Footer**: Comprehensive navigation links

## Technical Stack
- React 18 with TypeScript
- Tailwind CSS for styling
- Shadcn/ui components
- Framer Motion for animations
- TanStack Query for data fetching
- Express backend for API endpoints
- Vite for development

## API Endpoints
- `GET /api/dashboard/metrics` - Returns dashboard metrics
- `GET /api/dashboard/invoices` - Returns invoice summary
- `GET /api/dashboard/transactions` - Returns transaction data
- `GET /api/dashboard/chart-data` - Returns chart data points

## Attached Assets
- `attached_assets/cemscale_logo_*.png` - CemScale logo
- `attached_assets/Flyers_servicios-*.png` - 4 service flyers
- `attached_assets/brandbook_CemScale_*.pdf` - Brand guidelines

## Running the Project
The application runs on port 5000 with `npm run dev`.

## Stripe-Safe Language Policy
- **NEVER use**: "telemarketing", "A2P", "10DLC", "TCPA", "CAN-SPAM", "bulk SMS", "auto-dialing", "robocalls", "cold calling", "regulated industries"
- **Avoid standalone**: "leads", "marketing", "campaigns", "outreach", "blasting"
- **Use instead**: "client acquisition", "engagement automation", "workflows", "sequences", "professional services", "contact management"
- **Hero disclaimer**: "Software platform only — not a telemarketing service"
- **Positioning**: B2B SaaS customer engagement software (not marketing services)

## Pages
- `/` - Homepage with all sections
- `/blog` - Blog articles
- `/resources` - FAQ, guides, checklist
- `/privacy-policy` - Privacy Policy
- `/terms` - Terms & Conditions
- `/sms-policy` - SMS Policy
- `/acceptable-use` - Acceptable Use & Messaging Policy (anti-spam, anti-telemarketing)
- `/refund-policy` - Refund Policy (software subscription terms)

## Recent Changes
- **February 2026**: Stripe-safe language overhaul
  - Replaced "lead generation" → "client acquisition", "marketing automation" → "engagement automation"
  - Replaced "campaigns" → "workflows/sequences" across all components
  - Added SaaS disclaimer to hero: "Software platform only"
  - Created Acceptable Use Policy page (anti-spam, consent requirements, prohibited uses)
  - Created Refund Policy page (software subscription billing terms)
  - Updated Footer with company address, all policy links
  - Reframed PricingSection as software subscription pricing
  - Removed all "regulated industries" references → "professional services"
- **December 2024**: Added four comprehensive content modules
  - TelephonySection: Cloud PBX, call recording, IVR, analytics dashboard
  - MarketingSection: Multi-channel engagement automation
  - EngagementSection: Customer journey funnel, interaction tracking, health scores
  - All sections include data-testid attributes for testing
  - Responsive design with flex-wrap and gap utilities
- **December 2024**: Complete Growsphere-style dark theme
  - Implemented dark navy/purple color scheme (#030014 base)
  - Hero with "One platform. Infinite growth." and infinity symbol
  - All sections updated to dark theme with proper contrast
  - Global html/body background set to dark
  - Text contrast improved for accessibility (#8b87a5 minimum)
