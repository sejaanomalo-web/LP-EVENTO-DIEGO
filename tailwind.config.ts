import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#201747",
          light: "#3A2F6B",
        },
        signal: {
          DEFAULT: "#D3451E",
          hover: "#E25A33",
        },
        sand: {
          DEFAULT: "#F1DAB2",
        },
      },
      fontFamily: {
        sans: ["var(--font-titillium)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        caps: "0.18em",
      },
      backgroundImage: {
        "diamond-pattern":
          "linear-gradient(135deg, transparent 46%, rgba(241,218,178,0.06) 46%, rgba(241,218,178,0.06) 54%, transparent 54%), linear-gradient(45deg, transparent 46%, rgba(241,218,178,0.06) 46%, rgba(241,218,178,0.06) 54%, transparent 54%)",
        "navy-gradient":
          "linear-gradient(180deg, #201747 0%, #1A1238 100%)",
      },
      backgroundSize: {
        diamond: "28px 28px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
