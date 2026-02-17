import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
      },
      colors: {
        hollow: {
          dark: "#0a0a0c",
          void: "#121418",
          mist: "#3a4a5a",
          light: "#c8d4e0",
          glow: "#e8f0f8",
          accent: "#7a9ab8",
        },
      },
      animation: {
        "ray-pulse": "rayPulse 8s ease-in-out infinite",
        "title-glow": "titleGlow 4s ease-in-out infinite",
        float: "float 20s linear infinite",
        bounce: "bounce 2s ease-in-out infinite",
      },
      keyframes: {
        rayPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        titleGlow: {
          "0%, 100%": {
            textShadow:
              "0 0 30px rgba(200, 212, 224, 0.5), 0 0 60px rgba(200, 212, 224, 0.3), 0 0 90px rgba(200, 212, 224, 0.1)",
          },
          "50%": {
            textShadow:
              "0 0 40px rgba(200, 212, 224, 0.7), 0 0 80px rgba(200, 212, 224, 0.4), 0 0 120px rgba(200, 212, 224, 0.2)",
          },
        },
        float: {
          "0%": {
            transform: "translateY(100vh) translateX(0) scale(0)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
            transform: "translateY(90vh) translateX(10px) scale(1)",
          },
          "90%": { opacity: "0.8" },
          "100%": {
            transform: "translateY(-10vh) translateX(-10px) scale(0.5)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
