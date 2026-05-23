'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Bespoke', href: '/bespoke' },
    { label: 'Remodels', href: '/remodels' },
    { label: 'Repairs', href: '/repairs' },
    { label: 'Manufacturing', href: '/manufacturing' },
    { label: 'Shop', href: '/shop' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-midnight/95 backdrop-blur-sm border-b border-duck-egg/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full border-2 border-duck-egg flex items-center justify-center group-hover:border-jade transition-colors">
              <span className="text-duck-egg font-montserrat font-bold text-lg group-hover:text-jade transition-colors">SP</span>
            </div>
            <span className="hidden sm:inline text-duck-egg font-montserrat font-light tracking-widest text-sm group-hover:text-jade transition-colors">
              SILVIA POTENTE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white font-montserrat-light text-sm tracking-wide uppercase transition-colors hover:text-duck-egg"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col space-y-1.5 group"
            aria-label="Toggle navigation"
          >
            <span className="w-6 h-0.5 bg-duck-egg group-hover:bg-jade transition-colors" />
            <span className="w-6 h-0.5 bg-duck-egg group-hover:bg-jade transition-colors" />
            <span className="w-6 h-0.5 bg-duck-egg group-hover:bg-jade transition-colors" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-french-navy/90 backdrop-blur-sm"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-white font-montserrat-light text-sm tracking-wide uppercase transition-colors hover:text-duck-egg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block btn-primary text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Enquire
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
