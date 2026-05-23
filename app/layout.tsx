import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const metadata: Metadata = {
  title: {
    default: 'Silvia Potente Jewellery | Bespoke Handcrafted Jewellery London',
    template: '%s | Silvia Potente Jewellery',
  },
  description:
    'Contemporary handcrafted jewellery designed to transcend time. Bespoke engagement rings, custom jewellery, and heirloom redesigns by London-based designer Silvia Potente.',
  keywords: [
    'bespoke jewellery',
    'handmade jewellery',
    'custom engagement rings',
    'jewellery designer London',
    'luxury jewellery',
    'contemporary jewellery',
    'goldsmith',
    'heirloom redesign',
  ],
  authors: [{ name: 'Silvia Potente', url: 'https://silviapotente.co.uk' }],
  creator: 'Silvia Potente',
  publisher: 'Silvia Potente Jewellery',
  metadataBase: new URL('https://silviapotente.co.uk'),
  alternates: {
    canonical: 'https://silviapotente.co.uk',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://silviapotente.co.uk',
    siteName: 'Silvia Potente Jewellery',
    title: 'Silvia Potente Jewellery | Bespoke Handcrafted Jewellery',
    description:
      'Contemporary handcrafted jewellery designed to transcend time. London-based designer & goldsmith.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Silvia Potente Jewellery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silvia Potente Jewellery',
    description: 'Bespoke handcrafted jewellery by London designer Silvia Potente',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};

export { metadata, viewport };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Silvia Potente Jewellery',
              image: 'https://silviapotente.co.uk/logo.png',
              description:
                'Bespoke handcrafted jewellery design and manufacturing by London goldsmith',
              url: 'https://silviapotente.co.uk',
              telephone: '+44',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'London',
                addressCountry: 'GB',
              },
              sameAs: [
                'https://instagram.com/silviapotentejewellery',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-midnight-black text-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
