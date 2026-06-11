/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        luxury: {
          black: '#050505',
          gold: '#c7a25a',
          softGold: '#e1c98f',
          ivory: '#f8f4eb',
          muted: '#a6a09a',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(199, 162, 90, 0.12), 0 20px 60px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, rgba(199,162,90,0.14), rgba(255,255,255,0.02))',
      },
    },
  },
  plugins: [],
};