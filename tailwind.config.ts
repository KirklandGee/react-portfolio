import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f5f0e6",
        ink: "#221b16",
        muted: "#6f655a",
        pen: "#b4321f",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
