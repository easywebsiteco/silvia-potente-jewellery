/**
 * Static content and copy for the website
 * Ready for CMS integration (Sanity/Contentful)
 */

export const siteContent = {
  // Brand
  brand: {
    name: 'Silvia Potente Jewellery',
    tagline: 'Jewellery that tells your story',
    subtitle: 'Contemporary handcrafted jewellery designed to transcend time',
    location: 'London',
    slogan: 'Unique, bespoke, luxurious, made with purpose and intention',
  },

  // Home page
  home: {
    hero: {
      headline: 'Jewellery that tells your story',
      subheadline: 'Contemporary handcrafted jewellery designed to transcend time',
      tagline: 'London based Designer & Goldsmith',
      cta1: 'Explore Bespoke',
      cta2: 'View Gallery',
    },
    introduction: {
      title: 'Meet the Designer',
      content:
        'With a background in Contemporary Art and traditional jewellery manufacturing, Silvia Potente creates beautifully handcrafted pieces of wearable art designed to be cherished for years to come.',
      cta: 'Learn More',
    },
    bespoke: {
      title: 'Bespoke Collections',
      subtitle: 'Custom jewellery designed uniquely for you',
      services: [
        'Engagement Rings',
        'Wedding Rings',
        'Heirloom Redesigns',
        'Personal Commissions',
      ],
      cta: 'Begin the Conversation',
    },
    shop: {
      title: 'Signature Collection',
      message:
        'A signature range of ready-made jewellery is currently in development. Each piece is crafted with the same dedication to excellence and attention to detail.',
      cta: 'Notify Me',
    },
  },

  // About page
  about: {
    title: 'About Silvia Potente',
    sections: [
      {
        title: 'Contemporary Art & Craftsmanship',
        content:
          'Silvia\'s background in Contemporary Art informs every design decision. Her work bridges the gap between artistic vision and technical precision.',
      },
      {
        title: 'Handmade in London',
        content:
          'Each piece is meticulously crafted in her London studio, using traditional techniques combined with contemporary design sensibilities.',
      },
      {
        title: 'Collaboration & Vision',
        content:
          'The bespoke process is a true collaboration between designer and client. Your story becomes the inspiration for your unique piece.',
      },
    ],
  },

  // Bespoke page
  bespoke: {
    title: 'Bespoke Jewellery',
    intro:
      'Create something extraordinary. Our bespoke service takes you through every step of the design and creation process.',
    process: [
      {
        step: 1,
        title: 'Consultation',
        description: 'Begin with an intimate consultation to understand your vision and requirements.',
      },
      {
        step: 2,
        title: 'Stone Sourcing',
        description: 'We source ethically and carefully select gemstones that match your specifications.',
      },
      {
        step: 3,
        title: 'Design',
        description: 'Collaborative design process with detailed sketches and mock-ups.',
      },
      {
        step: 4,
        title: 'Craftsmanship',
        description: 'Handcrafted by master artisans using traditional and contemporary techniques.',
      },
      {
        step: 5,
        title: 'Delivery',
        description: 'Your bespoke piece, ready to cherish for a lifetime.',
      },
    ],
    timeline: '4–6 weeks',
    deposit: '50% deposit required to begin the process',
  },
};

export default siteContent;
