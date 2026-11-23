import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f5f7fa",
          100: "#e9edf3",
          200: "#cfd9e6",
          300: "#a9bacd",
          400: "#7b92ad",
          500: "#5b7490",
          600: "#475d77",
          700: "#3a4c61",
          800: "#26354a",
          900: "#162338",
          950: "#0b1524",
        },
        brand: {
          50: "#eef8f5",
          100: "#d6efe8",
          200: "#aedfd2",
          300: "#7bc8b6",
          400: "#45ab96",
          500: "#278f7c",
          600: "#1c7465",
          700: "#185d53",
          800: "#164a43",
          900: "#143e39",
        },
        sand: {
          50: "#fbf8f2",
          100: "#f4ecdd",
          200: "#e8d7b8",
          300: "#d9bd8c",
          400: "#caa05f",
          500: "#bd8745",
          600: "#a26c39",
          700: "#825331",
          800: "#6b442d",
          900: "#593a28",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11, 21, 36, 0.04), 0 12px 32px -12px rgba(11, 21, 36, 0.18)",
      },
      maxWidth: {
        content: "78rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
