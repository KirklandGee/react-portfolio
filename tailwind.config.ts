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
        background: "var(--background)",
        foreground: "var(--foreground)",
        isabelline: "#f5f1edff",
        moonstone: "#08a4bdff",
        licorice: "#0d0106ff",
        "bittersweet-shimmer": "#c14953ff",
        "sea-green": "#09814aff",
      },
      fontFamily: {
        florent: ['florent', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
        extrabold: '800',
        black: '900',
        posterone: '1100',
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
        glow: 'glow 2s ease-in-out infinite',
        glisten: 'glisten 6s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px var(--glow-color), 0 0 10px var(--glow-color)' },
          '50%': { boxShadow: '0 0 20px var(--glow-color), 0 0 30px var(--glow-color)' },
        },
        glisten: {
          '0%, 100%': { backgroundPosition: '100% center' },
          '50%': { backgroundPosition: '0% center' },
        },
      },
      backgroundImage: {
        'gradient-top': 'linear-gradient(0deg, #f5f1edff, #08a4bdff, #0d0106ff, #c14953ff, #09814aff)',
        'gradient-right': 'linear-gradient(90deg, #f5f1edff, #08a4bdff, #0d0106ff, #c14953ff, #09814aff)',
        'gradient-bottom': 'linear-gradient(180deg, #f5f1edff, #08a4bdff, #0d0106ff, #c14953ff, #09814aff)',
        'gradient-left': 'linear-gradient(270deg, #f5f1edff, #08a4bdff, #0d0106ff, #c14953ff, #09814aff)',
        'gradient-top-right': 'linear-gradient(45deg, #f5f1edff, #08a4bdff, #0d0106ff, #c14953ff, #09814aff)',
        'gradient-bottom-right': 'linear-gradient(135deg, #f5f1edff, #08a4bdff, #0d0106ff, #c14953ff, #09814aff)',
        'gradient-top-left': 'linear-gradient(225deg, #f5f1edff, #08a4bdff, #0d0106ff, #c14953ff, #09814aff)',
        'gradient-bottom-left': 'linear-gradient(315deg, #f5f1edff, #08a4bdff, #0d0106ff, #c14953ff, #09814aff)',
        'gradient-radial': 'radial-gradient(#f5f1edff, #08a4bdff, #0d0106ff, #c14953ff, #09814aff)',
      },
    },
  },
  plugins: [
    function({ addBase, theme }: { addBase: (arg0: { ':root': { '--glow-color': string; }; }) => void, theme: (arg0: string) => string }) {
      addBase({
        ':root': {
          '--glow-color': theme('colors.bittersweet-shimmer'),
        },
      });
    },
  ],
};

export default config;
