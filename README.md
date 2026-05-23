# Silvia Potente Jewellery

A luxury bespoke jewellery website built with Next.js 14, React, TypeScript, Tailwind CSS, and Framer Motion.

## Brand Identity

**Unique, bespoke, luxurious, made with purpose and intention, technical elegance, modern.**

### Colour Palette

- **Driftwood**: #746661
- **Duck Egg**: #B1E4E3
- **Jade**: #00B2A9
- **French Navy**: #1F2A44
- **Desert Fawn**: #C4BCB7
- **Midnight Black**: #000000
- **White**: #FFFFFF

### Design Philosophy

- Elegant, bespoke, contemporary
- Artistic, minimal yet luxurious
- Geometric and refined
- Inspired by Art Deco, Cubism, ocean tones, handcrafted craftsmanship

## Tech Stack

- **Framework**: Next.js 14+
- **UI Library**: React 18+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **SEO**: Next.js metadata, structured data
- **Accessibility**: WCAG 2.1 AA compliant

## Project Structure

```
.
├── app/                 # Next.js 14 app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── [page]/          # Dynamic pages
├── components/          # Reusable components
│   ├── ui/              # Base UI components
│   ├── layout/          # Layout components
│   └── sections/        # Page section components
├── styles/              # Global styles
├── services/            # API & utility services
├── data/                # Static data & content
└── public/              # Static assets
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

✅ 13-page luxury website structure
✅ Responsive mobile-first design
✅ Dark luxury aesthetic
✅ Framer Motion animations
✅ SEO optimized
✅ Accessibility compliant
✅ Stripe integration prepared (service stubs)
✅ Reusable component architecture
✅ TypeScript for type safety
✅ Performance optimized

## Pages

1. **Home** - Fullscreen hero + featured sections
2. **About** - Designer biography & storytelling
3. **Bespoke** - Custom jewellery consultation process
4. **Remodels** - Heirloom redesign service
5. **Repairs** - Jewellery repair services
6. **Manufacturing** - Behind-the-scenes craftsmanship
7. **Shop** - Signature collection (future ecommerce)
8. **Gallery** - Luxury editorial photo gallery
9. **Contact** - Enquiry form & contact information
10. **Jewellery Care** - Maintenance guide
11. **Warranty & Returns** - Policy information
12. **Sustainable & Ethical Practices** - Brand values
13. **Privacy & Disclaimer** - Legal information

## Future Stripe Integration

The project is structured for future Stripe integration with:

- Service stubs in `/services/stripe/`
- TODO comments marking integration points
- Mock checkout flow component placeholders
- Product data structure ready for payment processing

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## License

Private project for Silvia Potente Jewellery
