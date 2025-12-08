# CemScale Website

## Overview
A fully responsive website featuring a premium dark theme with Nebula Circuit Wave effects. The site showcases CemScale as an AI-first Customer Engagement Management platform (NOT CRM) with B2B lead data capabilities across email, calls, SMS, WhatsApp, and in-app channels. All content is in English.

## Design Style
**Dark Nebula Theme** - Premium SaaS aesthetic with:
- Dark navy/purple background (#030014)
- Purple accent colors (#6b4cff, #a78bfa)
- Teal highlights (#7cffd4)
- Nebula wave effects and aurora animations
- Feature cards with subtle borders and glow effects
- AI-focused messaging throughout

## Project Structure
```
client/src/
├── components/
│   └── stripe/           # All CemScale components
│       ├── Header.tsx         # Glass effect nav with scroll detection
│       ├── HeroSection.tsx    # "We Bring Clarity to Scattered Data" with email signup
│       ├── DataSection.tsx    # AI-enriched leads and stats
│       ├── ServicesSection.tsx # 4 service flyers (Telephony, Marketing, Engagement, Leads)
│       ├── StatsSection.tsx   # Animated counters with AI metrics
│       ├── PricingSection.tsx # 3 pricing tiers (Starter, Professional, Enterprise)
│       ├── UseCasesSection.tsx # AI capabilities cards
│       ├── EnterpriseSection.tsx # Success stories carousel with auto-rotate
│       ├── StartupSection.tsx # Quick Setup & Live Demo cards
│       ├── CodeSnippet.tsx    # CemScale API code examples
│       ├── CTASection.tsx     # Final call to action
│       └── Footer.tsx         # Comprehensive footer with social links
├── pages/
│   └── home.tsx          # Main homepage (bg-[#030014])
└── index.css             # Global dark theme + animations
```

## Color Palette
- **Background Dark**: #030014 - Main page background
- **Card Background**: #0a0a1a - Cards and sections
- **Highlight Background**: #1a1a2e - Inputs, hover states
- **Primary Purple**: #6b4cff - CTAs, accents
- **Light Purple**: #a78bfa - Secondary accents
- **Teal Accent**: #7cffd4 - Success, highlights, AI indicators
- **Orange Accent**: #ff805d - Alerts
- **Text Primary**: white - Headings
- **Text Secondary**: #a59ecb - Body text
- **Text Muted**: #8b87a5 - Footer, tertiary
- **Border**: #1f1f35 - Card borders

## Typography
- **Primary Font**: Montserrat (Google Fonts)
- Fluid typography system with responsive breakpoints
- Sizes: text-xs (mobile) → text-5xl+ (desktop)

## Key Sections
1. **Hero**: "We Bring Clarity to Scattered Data"
   - AI badge: "Powered by Artificial Intelligence"
   - Email signup form with trust badges
   - Nebula wave background effects
2. **Data Section**: AI-enriched leads ready to convert
   - Feature cards with icons
   - Live data stats panel
3. **Services**: 4 service flyers (2x2 grid on mobile, 4 on desktop)
4. **Stats**: Animated counters with AI-powered data metrics
5. **Pricing**: 3 tiers - Starter ($49), Professional ($149), Enterprise (Custom)
6. **Use Cases**: 6 AI capability cards
7. **Enterprise**: Auto-rotating success stories carousel
8. **Startup**: Quick Start & Live Demo dual cards
9. **Developer**: API code snippets (JS, Python, Ruby, cURL)
10. **CTA**: "Let AI work for your business"
11. **Footer**: Comprehensive navigation with social links

## Pricing Tiers
- **Starter**: $49/user/month - Up to 5 team members, 1k contacts, basic features
- **Professional**: $149/user/month - Up to 25 members, 10k contacts, AI chatbot unlimited, predictive scoring
- **Enterprise**: Custom pricing - Unlimited, white-label, custom AI training, dedicated support

## Responsive Design
- Mobile-first approach with breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- All sections optimized for touch devices
- Consistent padding: px-5 (mobile) → px-6/px-8 (desktop)
- Cards adapt from single column to multi-column grids

## Technical Stack
- React 18 with TypeScript
- Tailwind CSS for styling
- Shadcn/ui components
- Framer Motion for animations
- TanStack Query for data fetching
- Express backend for API endpoints
- Vite for development

## Attached Assets
- `attached_assets/cemscale_logo_*.png` - CemScale logo
- `attached_assets/Flyers_servicios-*.png` - 4 service flyers

## Running the Project
The application runs on port 5000 with `npm run dev`.

## Recent Changes
- **December 2024**: Complete responsive optimization
  - World-class web and mobile experience
  - Simplified Header with scroll-aware glass effect
  - Hero with email signup form and trust badges
  - All sections optimized for mobile (320px+) to desktop
  - Animated stat counters with intersection observer
  - 3-tier pricing section with featured plan highlighting
  - Auto-rotating enterprise carousel
  - AI messaging emphasized throughout ("Powered by Artificial Intelligence")
  - Consistent padding across all sections (px-5 mobile)
  - Proper touch targets and accessible navigation
