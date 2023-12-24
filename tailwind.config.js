/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          350: "#0aefff",
          250: "#70f5ff",
        },
      },
      fontFamily: {
        sans: ["Sora", '"Plus Jakarta Sans"', "system-ui"],
      },
      animation: {
        fadein: "fadein 0.2s cubic-bezier(0.79, 0.33, 0.14, 0.53)",
        enter: "enter 0.2s cubic-bezier(0.79, 0.33, 0.14, 0.53)",
        exit: "exit 0.2s cubic-bezier(0.79, 0.33, 0.14, 0.53)",
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
        exit: {
          "0%": { transform: "scale(1)", opacity: "100" },
          "100%": { transform: "scale(0.95)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
