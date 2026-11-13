import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kraft: "#e9ddc6",
        parchment: "#f1e8d6",
        "kraft-surface": "#ddcda8",
        ink: "#241b14",
        muted: "#5d5347",
        rust: "#a1311f",
        "rust-ink": "#e9ddc6",
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Source Serif 4', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Libre Franklin', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, rgba(36,27,20,0.16) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '18px 18px',
      },
      keyframes: {
        sketchIn: {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pageTurn: {
          '0%': { transform: 'rotateY(-8deg) translateX(-6px)', opacity: '0.4' },
          '100%': { transform: 'rotateY(0deg) translateX(0)', opacity: '1' },
        },
        underlineDraw: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        pageTurn: 'pageTurn 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
      },
    },
  },
  plugins: [],
};

export default config;
