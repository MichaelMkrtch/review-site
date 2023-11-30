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
    },
  },
  plugins: [],
};
