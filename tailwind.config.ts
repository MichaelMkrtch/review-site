import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadein: "fadein 0.1s cubic-bezier(0.79, 0.33, 0.14, 0.53)",
        enter: "enter 0.2s cubic-bezier(0.79, 0.33, 0.14, 0.53)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        edge: "inset 0 1px 0 0 rgba(255, 255, 255, 0.03), inset 0 0 0 1px rgba(255, 255, 255, 0.03), 0 0 2px 1px rgba(0, 0, 0, 0.1), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 4px 4px 0 rgba(0, 0, 0, 0.1), 0 8px 8px 0 rgba(0, 0, 0, 0.1)",
      },
      colors: {
        cyan: {
          250: "#70f5ff",
          350: "#0aefff",
        },
        gray: {
          750: "#2D3139",
          850: "#202528",
          950: "#181a1e",
        },
      },
      content: {
        "half-star": "url('../public/half-star.svg')",
        star: "url('../public/star.svg')",
      },
      fontFamily: {
        sora: ["var(--font-sora)"],
        jakarta: ["var(--font-jakarta)"],
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "30%" },
        },
        enter: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "100" },
        },
      },
      screens: {},
    },
  },
  plugins: [],
};
export default config;
