'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import IntroductionSection from '@/components/sections/IntroductionSection';
import BespokeSection from '@/components/sections/BespokeSection';
import SignatureCollectionSection from '@/components/sections/SignatureCollectionSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactCTASection from '@/components/sections/ContactCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <BespokeSection />
      <SignatureCollectionSection />
      <GallerySection />
      <ContactCTASection />
    </>
  );
}
