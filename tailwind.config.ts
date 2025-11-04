import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eefaf6",
          100: "#d5f3e7",
          200: "#ade7d0",
          300: "#74d6b3",
          400: "#30ba8f",
          500: "#0f9e75",
          600: "#057b5d",
          700: "#05624c",
          800: "#064f3f",
          900: "#063f34"
        }
      },
      fontFamily: {
        heading: ["'Poppins'", "ui-sans-serif", "system-ui"],
        body: ["'Inter'", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        focus: "0 10px 30px -12px rgba(5, 98, 76, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
