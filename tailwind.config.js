/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        LoginBtn: "#0EB5F9",
      },
      keyframes: {
        dropdown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "10%": { opacity: 0.3, transform: "translateY(-15px)" },
          "30%": { opacity: 0.6, transform: "translateY(-10px)" },
          "50%": { opacity: 0.8, transform: "translateY(-5px)" },
          "70%": { opacity: 0.9, transform: "translateY(-3px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        dropdown: "dropdown 0.5s ease-in",
      },
    },
  },
  plugins: [],
};
