# CemScale Website

## Overview
A fully responsive website featuring Stripe's signature design language (gradients, typography, animations) with complete CemScale branding and custom content about data unification. The site showcases four core services: Dashboard, Leads, Marketing, and Offline Form.

## Project Structure
```
client/src/
├── components/
│   └── stripe/           # All CemScale components (directory name kept for compatibility)
│       ├── Header.tsx         # Navigation with CemScale branding
│       ├── HeroSection.tsx    # Main hero with data unification messaging
│       ├── DashboardPreview.tsx # Interactive dashboard mockup (dashboard.cemscale.com)
│       ├── LogoCarousel.tsx   # Partner company logos
│       ├── ProductsSection.tsx # CemScale products: Dashboard, Leads, Marketing, Forms
│       ├── ServicesSection.tsx # 4 service flyers from brandbook
│       ├── StatsSection.tsx   # Key metrics display
│       ├── UseCasesSection.tsx # Use case cards for data unification
│       ├── EnterpriseSection.tsx # Enterprise customer stories
│       ├── StartupSection.tsx # Quick Setup & Live Demo sections
│       ├── CodeSnippet.tsx    # CemScale API code examples
│       ├── CTASection.tsx     # Call to action
│       ├── Footer.tsx         # Full footer with CemScale links
│       └── ThemeToggle.tsx    # Dark/light mode toggle
├── pages/
│   └── home.tsx          # Main homepage
└── index.css             # CemScale color palette & animations
```

## Brand Colors
- **Primary Blue**: #6B8CFF - Main brand color
- **Intense Blue**: #4974EA - Secondary blue accent
- **Purple**: #7E4EF2 - Accent color
- **Neon Green**: #7CFD98 - Success/highlight color
- **Orange**: #FF805D - Alert/emphasis color

## Typography
- **Primary Font**: Montserrat (Google Fonts)
- Fluid typography system that scales with viewport

## Design Features
- **CemScale Color Palette**: Blue (#6B8CFF) primary with gradient accents
- **Typography**: Montserrat font family with proper hierarchy
- **Animations**: Fade-in, float, and scale animations
- **Dark Mode**: Full dark mode support with theme toggle
- **Responsive**: Mobile-first design, adapts from mobile to 4K displays
- **Gradients**: Signature CemScale gradients throughout

## Key Sections
1. **Hero**: "One place for scattered data" with animated dashboard
2. **Logo Carousel**: Partner company logos
3. **Products**: Interactive switcher for Dashboard, Leads, Marketing, Forms
4. **Services**: 4 service flyers (Dashboard, Leads, Marketing, Offline Form)
5. **Stats**: Key metrics with animated counters
6. **Use Cases**: Data unification, Analytics, Lead Management, etc.
7. **Enterprise**: Customer story carousel
8. **Quick Start**: Get started & Live Demo sections
9. **Developer**: CemScale API code snippets
10. **CTA**: Final call to action
11. **Footer**: Comprehensive CemScale navigation links

## Technical Stack
- React 18 with TypeScript
- Tailwind CSS for styling
- Shadcn/ui components
- Framer Motion ready for animations
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
- `attached_assets/CemScale_services_flyer_*.png` - 4 service flyers (Dashboard, Leads, Marketing, Offline Form)
- `attached_assets/brandbook_CemScale_*.pdf` - Brand guidelines

## Running the Project
The application runs on port 5000 with `npm run dev`.

## Recent Changes
- **December 2024**: Complete CemScale brand integration
  - Updated all content from Stripe to CemScale branding
  - Implemented CemScale color palette throughout
  - Added ServicesSection with 4 service flyer images
  - Updated ProductsSection with Dashboard, Leads, Marketing, Forms categories
  - Updated CodeSnippet with CemScale API examples
  - Updated DashboardPreview to show dashboard.cemscale.com
  - Added Montserrat font as primary typography
  - Full responsive design system for all screen sizes
