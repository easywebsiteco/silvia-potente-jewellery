# Silvia Potente Jewellery - Modern Luxury Website

## Overview

A production-ready, contemporary luxury jewellery website for Silvia Potente, a London-based designer and goldsmith specializing in bespoke, handcrafted pieces.

## Design Philosophy

- **Elegant & Bespoke**: Contemporary design inspired by Art Deco and Cubism
- **Minimal Luxury**: High-end aesthetic with refined whitespace and geometric patterns
- **Artistic Craftsmanship**: Emphasis on handmade quality and personal storytelling
- **Dark Luxury**: Deep navy and black backgrounds with duck egg accents
- **Responsive & Accessible**: Mobile-first design with semantic HTML and ARIA support

## Technology Stack

- **Framework**: Next.js 14+
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image component
- **SEO**: Next.js Metadata API

## Project Structure

```
silvia-potente-jewellery/
├── app/                          # Next.js App Router
│   ├── (site)/                   # Main website layout group
│   │   ├── page.tsx              # Home page
│   │   ├── about/page.tsx        # About page
│   │   ├── bespoke/page.tsx      # Bespoke services page
│   │   ├── remodels/page.tsx     # Remodels page
│   │   ├── repairs/page.tsx      # Repairs page
│   │   ├── manufacturing/page.tsx # Manufacturing page
│   │   ├── shop/page.tsx         # Shop/ecommerce page
│   │   ├── gallery/page.tsx      # Gallery page
│   │   ├── contact/page.tsx      # Contact page
│   │   ├── jewellery-care/page.tsx
│   │   ├── warranty/page.tsx
│   │   ├── sustainable/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── layout.tsx            # Main layout
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/
│   ├── layout/                   # Layout components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── sections/                 # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── IntroSection.tsx
│   │   ├── BespokeSection.tsx
│   │   └── ...
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   └── ...
│   └── images/                   # Image components
│       └── OptimizedImage.tsx
├── lib/
│   ├── animations/               # Animation utilities
│   │   └── variants.ts
│   ├── services/                 # Business logic
│   │   ├── stripe.service.ts     # Stripe integration (TODO)
│   │   ├── contact.service.ts
│   │   └── ...
│   ├── constants/                # App constants
│   │   └── brand.ts
│   └── types/                    # TypeScript types
│       └── index.ts
├── public/                       # Static assets
│   ├── logos/
│   ├── images/
│   └── ...
└── styles/                       # Additional styles
    └── animations.css
```

## Pages

1. **Home** - Hero section with brand story and key CTAs
2. **About** - Designer biography and design philosophy
3. **Bespoke** - Custom jewellery service details
4. **Remodels** - Jewellery redesign services
5. **Repairs** - Repair and restoration services
6. **Manufacturing** - Behind-the-scenes manufacturing process
7. **Shop** - Ecommerce storefront (Stripe ready)
8. **Gallery** - Editorial photography gallery
9. **Contact** - Contact form and location
10. **Jewellery Care** - Care instructions
11. **Warranty & Returns** - Policy information
12. **Sustainable & Ethical** - Sustainability practices
13. **Privacy & Disclaimer** - Legal pages

## Brand Colors

- **Driftwood**: `#746661` - Warm neutral
- **Duck Egg**: `#B1E4E3` - Soft teal accent
- **Jade**: `#00B2A9` - Rich teal
- **French Navy**: `#1F2A44` - Deep blue (primary dark)
- **Desert Fawn**: `#C4BCB7` - Soft taupe
- **Midnight Black**: `#000000` - Pure black
- **White**: `#FFFFFF` - Clean white

## Typography

- **Font**: Montserrat (light & bold weights)
- **Headings**: Montserrat Bold, generous spacing
- **Body**: Montserrat Light, 16px base
- **Philosophy**: Large whitespace, minimal hierarchy

## Features

### ✅ Implemented
- Next.js 14 App Router structure
- TypeScript type safety
- Tailwind CSS theme configuration
- Responsive mobile-first layout
- Framer Motion animation setup
- Reusable component architecture
- SEO metadata configuration
- Brand color palette
- Typography system
- Dark luxury aesthetic

### 🔄 In Progress
- Page components
- Hero animations
- Image gallery
- Contact forms
- Navigation system

### 📋 TODO: Stripe Integration
- Payment processing for shop checkout
- Deposit system for bespoke orders
- Gift voucher purchases
- Subscription management (if needed)

All Stripe integration points are marked with `// TODO: Stripe Integration` comments.

## Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in browser
```

### Build for Production

```bash
# Build
npm run build

# Start production server
npm start
```

## Development Guidelines

### Component Structure

All components should:
- Be functional components with TypeScript
- Export proper types for props
- Use descriptive, semantic naming
- Include JSDoc comments for complex logic
- Follow the single responsibility principle

### Styling

- Use Tailwind CSS classes for styling
- Avoid inline styles except for dynamic values
- Use custom CSS for complex animations only
- Maintain mobile-first responsive design

### Animations

- Use Framer Motion for interactive animations
- Keep animations subtle and purposeful
- Ensure animations don't block user interaction
- Test performance on lower-end devices

### SEO

- Always include meaningful page titles and descriptions
- Use semantic HTML (header, nav, main, article, etc.)
- Add structured data for rich snippets
- Optimize images with alt text and proper formats

## Stripe Integration (Future)

The project structure is prepared for Stripe integration:

```typescript
// lib/services/stripe.service.ts
// TODO: Implement Stripe payment processing
```

When ready to integrate:
1. Install `@stripe/react-stripe-js` and `@stripe/stripe-js`
2. Implement payment methods in `stripe.service.ts`
3. Create checkout components
4. Add webhook handlers
5. Configure environment variables

## Performance

- Images optimized with Next.js Image component
- Code splitting via Next.js dynamic imports
- CSS-in-JS via Tailwind (zero runtime overhead)
- Lazy loading for off-screen content
- Font optimization via system fonts + Montserrat

## Accessibility

- Semantic HTML structure
- ARIA labels and roles where needed
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Focus indicators visible
- Alt text for all images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

Optimized for Vercel:

```bash
# Deploy to Vercel
vercel deploy
```

Or any Node.js hosting:

```bash
# Build and start
npm run build
npm start
```

## Contributing

1. Create feature branches
2. Follow component naming conventions
3. Ensure TypeScript strict mode compliance
4. Test responsive design on mobile
5. Include accessibility considerations

## License

Private project - Silvia Potente Jewellery © 2026
