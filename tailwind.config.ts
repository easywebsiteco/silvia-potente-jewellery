import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Silvia Potente Brand Palette
        'driftwood': '#746661',
        'duck-egg': '#B1E4E3',
        'jade': '#00B2A9',
        'french-navy': '#1F2A44',
        'desert-fawn': '#C4BCB7',
        'midnight': '#000000',
        'ivory': '#FFFFFF',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'light': ['Montserrat Light', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(177, 228, 227, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(177, 228, 227, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
