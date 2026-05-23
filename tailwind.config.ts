import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'driftwood': '#746661',
        'duck-egg': '#B1E4E3',
        'jade': '#00B2A9',
        'french-navy': '#1F2A44',
        'desert-fawn': '#C4BCB7',
        'midnight': '#000000',
      },
      fontFamily: {
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'montserrat-light': ['var(--font-montserrat-light)', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1F2A44',
            a: {
              color: '#00B2A9',
              '&:hover': {
                color: '#B1E4E3',
              },
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
