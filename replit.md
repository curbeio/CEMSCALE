# Stripe Website Clone

## Overview
A 100% faithful visual replica of Stripe's homepage (stripe.com), featuring their signature design language, layouts, and interaction patterns.

## Project Structure
```
client/src/
├── components/
│   └── stripe/           # All Stripe-specific components
│       ├── Header.tsx         # Navigation with dropdowns
│       ├── HeroSection.tsx    # Main hero with CTAs
│       ├── DashboardPreview.tsx # Interactive dashboard mockup
│       ├── LogoCarousel.tsx   # Company logos
│       ├── ProductsSection.tsx # Product showcase with tabs
│       ├── StatsSection.tsx   # Key metrics display
│       ├── UseCasesSection.tsx # Use case cards
│       ├── EnterpriseSection.tsx # Enterprise carousel
│       ├── StartupSection.tsx # Atlas & Checkout sections
│       ├── CodeSnippet.tsx    # Developer code examples
│       ├── CTASection.tsx     # Call to action
│       ├── Footer.tsx         # Full footer
│       └── ThemeToggle.tsx    # Dark/light mode toggle
├── pages/
│   └── home.tsx          # Main homepage
└── index.css             # Stripe color palette & animations
```

## Design Features
- **Stripe Color Palette**: Purple (#635bff) primary with gradient accents
- **Typography**: Inter font family with proper hierarchy
- **Animations**: Fade-in, float, and scale animations
- **Dark Mode**: Full dark mode support with theme toggle
- **Responsive**: Mobile-first responsive design
- **Gradients**: Signature Stripe gradients throughout

## Key Sections
1. **Hero**: "Financial Infrastructure to Grow Your Revenue" with animated dashboard
2. **Logo Carousel**: Major company logos (OpenAI, Amazon, Google, etc.)
3. **Products**: Interactive product category switcher
4. **Stats**: Key metrics with animated counters
5. **Use Cases**: AI, SaaS, Marketplaces, E-commerce, etc.
6. **Enterprise**: Customer story carousel
7. **Startups**: Atlas and Checkout showcase
8. **Developer**: Code snippet examples with syntax highlighting
9. **CTA**: Final call to action
10. **Footer**: Comprehensive navigation links

## Technical Stack
- React 18 with TypeScript
- Tailwind CSS for styling
- Shadcn/ui components
- Framer Motion ready for animations
- TanStack Query for data fetching
- Express backend for API endpoints
- Vite for development

## API Endpoints
- `GET /api/dashboard/metrics` - Returns dashboard metrics (netVolume, yesterdayVolume, usdBalance, payouts, newCustomers)
- `GET /api/dashboard/invoices` - Returns invoice summary (paid, open, pastDue)
- `GET /api/dashboard/transactions` - Returns mock transaction data
- `GET /api/dashboard/chart-data` - Returns chart data points

## Running the Project
The application runs on port 5000 with `npm run dev`.

## Recent Changes
- **December 2024**: Initial build of Stripe homepage clone
  - Implemented complete design system matching Stripe's visual language
  - Built all major page sections (Header, Hero, Products, Stats, Enterprise, Footer)
  - Added interactive Dashboard Preview with live data from backend API
  - Integrated frontend with backend using TanStack Query
  - Added loading states with skeleton UI
