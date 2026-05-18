import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        ink: "#161616",
        paper: "#f6f3ee",
        mist: "#ebe7de",
        graphite: "#292826",
        sage: "#58685d",
        blue: "#406a80",
        clay: "#9a5d45",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(41, 40, 38, 0.14)",
        glow: "0 18px 60px rgba(64, 106, 128, 0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
