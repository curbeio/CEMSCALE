# CemScale Website

## Overview
A fully responsive website featuring a premium dark theme inspired by Growsphere CRM design (Dribbble reference). The site showcases CemScale as a Customer Engagement Management platform with B2B lead data capabilities across email, calls, SMS, WhatsApp, and in-app channels.

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
2. **Logo Carousel**: Partner company logos (muted colors)
3. **Data Section**: B2B database features with stats
4. **Services**: 4 service flyers (Telephony, Marketing, CRM, Leads)
5. **Stats**: Key metrics with gradient text
6. **Use Cases**: 6 capability cards with icons
7. **Enterprise**: Success stories carousel
8. **Startup**: Quick Start & Live Demo cards
9. **Developer**: API code snippets with syntax highlighting
10. **CTA**: Final call to action with purple accent
11. **Footer**: Comprehensive navigation links

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

## Recent Changes
- **December 2024**: Complete Growsphere-style dark theme
  - Implemented dark navy/purple color scheme (#030014 base)
  - Hero with "One platform. Infinite growth." and infinity symbol
  - 4 feature cards: Chatbot, App Integrations, Security, AI Drafting
  - All sections updated to dark theme with proper contrast
  - Global html/body background set to dark
  - Text contrast improved for accessibility (#8b87a5 minimum)
