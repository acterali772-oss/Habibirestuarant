/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        habibi: {
          black: '#0a0506',
          'black-soft': '#14090a',
          card: '#1a0d0e',
          'card-light': '#241213',
          red: '#c0392b',
          'red-bright': '#e23b2b',
          'red-deep': '#8e2418',
          gold: '#d4a64a',
          cream: '#f5f0ea',
          'cream-muted': '#b8aea7',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        elegant: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'red-radial':
          'radial-gradient(circle at 50% 0%, rgba(192,57,43,0.18), transparent 60%)',
        'dark-gradient':
          'linear-gradient(180deg, #0a0506 0%, #14090a 50%, #0a0506 100%)',
        'card-gradient':
          'linear-gradient(160deg, #241213 0%, #1a0d0e 100%)',
      },
    },
  },
  plugins: [],
};
