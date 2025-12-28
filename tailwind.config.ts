import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'bg-root': 'var(--bg-root)',
        'bg-surface': 'var(--bg-surface)',
        'bg-elev-1': 'var(--bg-elev-1)',
        'bg-elev-2': 'var(--bg-elev-2)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        'text-dim': 'var(--text-dim)',
        danger: 'var(--danger)',
        ok: 'var(--ok)'
      },
      boxShadow: {
        glow: '0 0 35px rgba(92, 200, 255, 0.25)'
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains)']
      },
      keyframes: {
        'cursor-blink': {
          '0%, 50%': { opacity: '1' },
          '50.1%, 100%': { opacity: '0' }
        }
      },
      animation: {
        'cursor-blink': 'cursor-blink 1.2s step-end infinite'
      }
    }
  },
  plugins: []
};

export default config;
