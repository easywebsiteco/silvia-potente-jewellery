'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-midnight via-french-navy to-midnight overflow-hidden pt-20">
        {/* Background Pattern (SVG) */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <pattern id="geometric" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path
                d="M100,0 L200,100 L100,200 L0,100 Z"
                fill="none"
                stroke="#B1E4E3"
                strokeWidth="1"
              />
            </pattern>
            <rect width="1000" height="1000" fill="url(#geometric)" />
          </svg>
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Logo Circle */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-full border-2 border-duck-egg flex items-center justify-center">
              <span className="text-duck-egg font-montserrat font-bold text-2xl">SP</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-light tracking-wider mb-4 text-white"
          >
            Jewellery that tells your story
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-duck-egg font-montserrat-light mb-2 tracking-wide"
          >
            Contemporary handcrafted jewellery designed to transcend time
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base text-white/70 font-montserrat-light tracking-widest uppercase mb-12"
          >
            London based Designer & Goldsmith
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/bespoke" className="btn-primary">
              Explore Bespoke
            </Link>
            <Link href="/gallery" className="btn-secondary">
              View Gallery
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-duck-egg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="section-spacing bg-gradient-dark">
        <div className="container-max container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-duck-egg font-montserrat font-light mb-6">Meet the Designer</h2>
            <p className="text-white/80 font-montserrat-light text-lg leading-relaxed mb-8">
              With a background in Contemporary Art and traditional jewellery manufacturing, Silvia Potente creates beautifully
              handcrafted pieces of wearable art designed to be cherished for years to come.
            </p>
            <Link href="/about" className="btn-primary">
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bespoke Service Section */}
      <section className="section-spacing">
        <div className="container-max container-luxury">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-duck-egg font-montserrat font-light mb-12"
          >
            Bespoke Collections
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Engagement Rings', href: '/bespoke' },
              { title: 'Wedding Rings', href: '/bespoke' },
              { title: 'Heirloom Redesigns', href: '/remodels' },
              { title: 'Personal Commissions', href: '/bespoke' },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="border border-duck-egg/30 p-8 hover:border-duck-egg transition-colors text-center group"
              >
                <h3 className="font-montserrat font-semibold text-duck-egg mb-4 group-hover:text-jade transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm font-montserrat-light mb-6">
                  Handcrafted with precision and artistic vision
                </p>
                <Link href={item.href} className="btn-ghost">
                  Explore
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon: Shop Section */}
      <section className="section-spacing bg-gradient-dark">
        <div className="container-max container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-duck-egg font-montserrat font-light mb-6">Signature Collection</h2>
            <p className="text-white/70 font-montserrat-light text-lg max-w-2xl mx-auto mb-8">
              A signature range of ready-made jewellery is currently in development. Each piece is crafted with the same dedication to excellence and attention to detail.
            </p>
            <button className="btn-primary" disabled>
              Coming Soon
            </button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-spacing">
        <div className="container-max container-luxury">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-duck-egg font-montserrat font-light mb-12"
          >
            Recent Work
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (idx - 1) * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square bg-french-navy/50 border border-duck-egg/20 flex items-center justify-center group overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-duck-egg/10 to-jade/10 flex items-center justify-center group-hover:from-duck-egg/20 group-hover:to-jade/20 transition-colors">
                  <span className="text-duck-egg/50 font-montserrat text-sm">Gallery Image {idx}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/gallery" className="btn-primary">
              View Full Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-spacing bg-gradient-dark">
        <div className="container-max container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-duck-egg font-montserrat font-light mb-6">Begin the Bespoke Conversation</h2>
            <p className="text-white/70 font-montserrat-light text-lg max-w-2xl mx-auto mb-8">
              Let\'s create something extraordinary together. Contact us to discuss your vision.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
