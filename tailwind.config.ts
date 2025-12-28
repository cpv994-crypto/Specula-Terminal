import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b1021',
        terminal: '#0f162b',
        accent: '#7dd3fc',
        'accent-strong': '#38bdf8',
        chrome: '#1b2340',
        muted: '#b6c2e2'
      },
      boxShadow: {
        glow: '0 0 35px rgba(56, 189, 248, 0.35)'
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains)']
      },
      keyframes: {
        'pulse-ambient': {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.9' }
        },
        'cursor-blink': {
          '0%, 50%': { opacity: '1' },
          '50.1%, 100%': { opacity: '0' }
        }
      },
      animation: {
        'pulse-ambient': 'pulse-ambient 14s ease-in-out infinite',
        'cursor-blink': 'cursor-blink 1.2s step-end infinite'
      }
    }
  },
  plugins: []
};

export default config;
