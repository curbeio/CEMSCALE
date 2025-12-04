# Stripe Website Clone - Design Guidelines

## Design Approach
**Reference-Based:** 100% faithful replica of Stripe's current homepage design (stripe.com), replicating their visual language, layouts, and interaction patterns exactly.

## Typography System

**Primary Font:** Inter (via Google Fonts CDN)
- Hero Headline: 72px/1.1, weight 600, tight letter-spacing (-0.02em)
- Section Headlines: 48px/1.2, weight 600
- Product Titles: 24px/1.3, weight 600
- Body Copy: 18px/1.6, weight 400
- UI Labels: 14px/1.4, weight 500
- Code Snippets: 'Monaco', 'Courier New', monospace, 14px

**Hierarchy:** Bold headlines with ample whitespace, concise subheadings, generous line-height for readability

## Layout System

**Spacing:** Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-32 (desktop), py-20 (tablet), py-16 (mobile)
- Container: max-w-7xl mx-auto px-8
- Component spacing: gap-8 to gap-16 between major elements

**Grid Structure:**
- CSS Grid-based layouts throughout
- Hero: Single column, centered
- Products: 2-column grid (lg:grid-cols-2)
- Use Cases: 3-column grid on desktop (lg:grid-cols-3), stack on mobile

## Component Library

### Hero Section
- Full-width container with centered content
- Large headline with gradient text treatment capability
- Two prominent CTAs side-by-side (gap-4): "Start now" (primary) + "Contact sales" (secondary)
- Subheading below CTAs (max-w-2xl)
- Animated dashboard preview below (see Images section)

### Interactive Dashboard Preview
- Large embedded UI mockup showing Stripe dashboard
- Includes: metrics cards, balance display, charts, transaction lists
- Subtle hover states on interactive elements
- Grid layout for metric cards (grid-cols-2 lg:grid-cols-4)

### Product Showcase Sections (4 major sections)
Each section includes:
- Left: Product category title + description + product links list
- Right: Animated UI preview showing product interface
- Alternating layout (left-right, right-left pattern)
- UI previews include: checkout forms, pricing tables, subscription cards, marketplace dashboards

### Product Navigation Pills
- Horizontal scrollable pill navigation
- Pills with icon + label
- Active state highlighting
- Smooth scroll to respective section

### Logo Carousel
- 8-12 prominent company logos in grid
- Grid: grid-cols-4 lg:grid-cols-8
- Grayscale logos with opacity, subtle hover effect
- Equal-height containers (h-12)

### Use Case Cards
- 3-column grid showcasing different industries
- Each card: icon, title, description, "Learn more" link, 3-4 company logos
- Subtle background, rounded corners (rounded-xl)
- Hover effect with slight elevation

### Stats Section
- 4-column grid showing key metrics
- Large numbers (text-6xl) with descriptive labels below
- Center-aligned, generous spacing (gap-16)

### Enterprise Section
- Large customer case study cards with imagery
- Quote or headline from customer
- "Read story" CTA
- Carousel/slider functionality for multiple stories

### Footer
- Comprehensive 5-6 column layout
- Product categories grouped logically
- Social links, language selector
- Logo + tagline at top
- Newsletter signup form
- Copyright and legal links at bottom

## Animations & Interactions

**Minimal, Purpose-Driven:**
- Smooth scroll behavior between sections
- Fade-in animations on scroll for major sections (intersection observer)
- Dashboard preview: subtle data updates, chart animations
- Product UI previews: micro-interactions showing product functionality
- Hover states: Subtle scale (scale-105) on cards, underline on links
- Transition duration: 200-300ms for most interactions

**Interactive Dashboard Elements:**
- Animated charts with real-time data simulation
- Transaction lists with processing → completed state transitions
- Balance counters with number incrementing animation
- Payment method selector with smooth transitions

## Images

**Hero Dashboard Mockup:**
- Large, high-fidelity screenshot of Stripe Dashboard UI
- Shows: metrics overview, charts, transaction lists, balance cards
- Placement: Below hero headline and CTAs, centered
- Size: max-w-6xl, with subtle shadow and border

**Product UI Previews (4 sections):**
1. **Payments:** Checkout form with multiple payment methods, localization examples
2. **Billing:** Pricing comparison tables, subscription cards, invoice preview
3. **Connect:** Marketplace dashboard showing buyer-platform-seller flow, order management
4. **Issuing/Treasury:** Card management UI, financial account dashboard

**Enterprise Logos:**
- High-resolution logos for: OpenAI, Amazon, Google, Shopify, Slack, Twilio, Airbnb, BMW, Maersk
- Placement: Scattered throughout (hero, use cases, enterprise section)

**Customer Story Images:**
- Professional photos/screenshots for BMW, Amazon, Maersk, Twilio case studies
- Landscape format for desktop, portrait for mobile

## Visual Elements

**Gradient Treatments:**
- Signature Stripe gradients on hero background, section dividers, and accents
- Applied via CSS gradients or background images
- Subtle, non-intrusive, enhancing depth

**Borders & Shadows:**
- Thin borders (border border-gray-200) on cards
- Subtle shadows on elevated elements (shadow-lg for modals/dropdowns)
- Rounded corners: rounded-lg (8px) for cards, rounded-xl (12px) for major sections

**Code Snippets:**
- Embedded code blocks showing API integration examples
- Syntax highlighting with soft color scheme
- Copy button on hover
- Language selector tabs (JavaScript, Python, Ruby, etc.)

## Responsive Behavior

**Breakpoints:**
- Mobile: < 768px (stack everything, single column)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (3-4 column grids, full layouts)

**Mobile Optimizations:**
- Hamburger menu for main navigation
- Stacked CTAs (full-width buttons)
- Simplified dashboard preview
- Horizontal scroll for logo carousel
- Touch-friendly tap targets (min 44px)

This design achieves Stripe's signature professional, developer-focused aesthetic while maintaining exceptional clarity and conversion-optimized user flows.