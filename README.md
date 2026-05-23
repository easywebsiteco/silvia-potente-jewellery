# Silvia Potente Jewellery - Luxury Bespoke Website

## Overview

A production-ready luxury jewellery website built with modern web technologies. This site showcases handcrafted, bespoke jewellery with an emphasis on craftsmanship, elegance, and contemporary design.

## Tech Stack

- **Framework**: Next.js 14+
- **React**: 18.3+
- **TypeScript**: Full type safety
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **SEO**: Next.js optimizations with metadata
- **Accessibility**: WCAG 2.1 AA compliant

## Project Structure

```
.
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── about/
│   ├── bespoke/
│   ├── remodels/
│   ├── repairs/
│   ├── manufacturing/
│   ├── shop/
│   ├── gallery/
│   ├── contact/
│   ├── care/
│   ├── warranty/
│   ├── sustainability/
│   └── privacy/
├── components/          # Reusable React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ...
├── styles/             # Global styles
├── services/           # Business logic & API calls
│   └── stripe/        # Stripe integration stubs
├── data/              # Static data & content
├── utils/             # Helper functions
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
└── public/            # Static assets
```

## Brand Colors

- **Driftwood**: #746661
- **Duck Egg**: #B1E4E3
- **Jade**: #00B2A9
- **French Navy**: #1F2A44
- **Desert Fawn**: #C4BCB7
- **Midnight Black**: #000000
- **White**: #FFFFFF

## Typography

- **Headings**: Montserrat Bold
- **Body**: Montserrat Light
- Emphasis on spacious, elegant layouts

## Features

- ✅ Responsive mobile-first design
- ✅ Smooth scroll animations
- ✅ Luxury cinematic hero sections
- ✅ SEO optimized metadata
- ✅ Accessibility (ARIA, semantic HTML)
- ✅ Image optimization & lazy loading
- ✅ Dark luxury aesthetic
- ✅ Future Stripe integration ready
- ✅ CMS-ready data architecture

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/easywebsiteco/silvia-potente-jewellery.git
cd silvia-potente-jewellery

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Stripe Integration

Stripe integration is prepared but not fully implemented. See `/services/stripe/` for:
- Payment processing stubs
- Deposit calculations
- Gift voucher structure
- TODO comments for implementation

## Future Enhancements

- [ ] CMS Integration (Sanity/Contentful)
- [ ] Full Stripe checkout
- [ ] Email notifications
- [ ] Analytics & tracking
- [ ] Blog system
- [ ] Customer portal

## Code Standards

- TypeScript for all components
- Functional components with hooks
- Reusable component patterns
- Clear naming conventions
- Comprehensive comments
- Mobile-first responsive design

## Accessibility

This site follows WCAG 2.1 AA standards:
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Focus management

## SEO

- Open Graph metadata
- Structured data (JSON-LD)
- Meta descriptions
- Semantic HTML
- Sitemap ready

## License

Private project for Silvia Potente Jewellery

## Contact

For inquiries: contact@silviapotente.com
