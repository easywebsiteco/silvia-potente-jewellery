/**
 * Global TypeScript type definitions
 */

// Product types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: 'rings' | 'necklaces' | 'bracelets' | 'earrings';
  inStock: boolean;
  featured: boolean;
}

// Bespoke inquiry
export interface BespokeInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  inquiryType: 'engagement' | 'wedding' | 'heirloom' | 'custom';
  message: string;
  budget?: number;
  timeline?: string;
  createdAt: Date;
}

// Contact form
export interface ContactForm {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

// Blog post (future CMS)
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  updatedAt: Date;
  featuredImage: string;
  tags: string[];
}

// Gallery image
export interface GalleryImage {
  id: string;
  title: string;
  description?: string;
  image: string;
  category?: string;
}

// Stripe payment
export interface StripePaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'processing' | 'succeeded' | 'failed';
  clientSecret?: string;
}

// Cart item
export interface CartItem extends Product {
  quantity: number;
}
