'use client';

import { Montserrat, Playfair_Display } from 'next/font/google';
import { ReactNode } from 'react';
import '@/styles/globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const montserratLight = Montserrat({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat-light',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata = {
  title: 'Silvia Potente Jewellery | Bespoke Luxury Handcrafted Jewellery',
  description: 'Contemporary handcrafted jewellery designed to transcend time. London-based designer & goldsmith creating bespoke, unique pieces.',
  keywords: 'bespoke jewellery, luxury jewellery, handcrafted, engagement rings, custom jewellery, London, goldsmith',
  author: 'Silvia Potente',
  openGraph: {
    title: 'Silvia Potente Jewellery',
    description: 'Contemporary handcrafted jewellery designed to transcend time.',
    type: 'website',
    url: 'https://silviapotente.com',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silvia Potente Jewellery',
    description: 'Contemporary handcrafted jewellery designed to transcend time.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${montserratLight.variable} ${playfair.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1F2A44" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-midnight text-white font-montserrat-light antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
