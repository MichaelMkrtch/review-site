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
        fadein: "fadein 0.2s cubic-bezier(0.79, 0.33, 0.14, 0.53)",
        enter: "enter 0.2s cubic-bezier(0.79, 0.33, 0.14, 0.53)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cyan: {
          350: "#0aefff",
          250: "#70f5ff",
        },
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
    },
  },
  plugins: [],
};
export default config;
