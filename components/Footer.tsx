'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerSections = [
    {
      title: 'Information',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Bespoke', href: '/bespoke' },
        { label: 'Shop', href: '/shop' },
        { label: 'Gallery', href: '/gallery' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Jewellery Care', href: '/care' },
        { label: 'Warranty & Returns', href: '/warranty' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Policies',
      links: [
        { label: 'Sustainable & Ethical Practices', href: '/sustainability' },
        { label: 'Privacy & Disclaimer', href: '/privacy' },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-french-navy/50 border-t border-duck-egg/20 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="block mb-4">
              <h3 className="font-montserrat font-light text-lg tracking-widest text-duck-egg hover:text-jade transition-colors">
                SP Jewellery
              </h3>
            </Link>
            <p className="text-white/70 font-montserrat-light text-sm leading-relaxed">
              Handcrafted jewellery designed to transcend time. London-based designer and goldsmith.
            </p>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-montserrat font-semibold text-sm tracking-wide uppercase mb-4 text-duck-egg">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-duck-egg transition-colors text-sm font-montserrat-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-duck-egg/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* Social Icons */}
            <div className="flex space-x-6 mb-4 sm:mb-0">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-duck-egg transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 100-8 4 4 0 000 8zm4.965-10.322a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-white/60 text-sm font-montserrat-light text-center sm:text-right">
              © {currentYear} Silvia Potente Jewellery. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
