import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: [
        "Inter",
        "system-ui",
        "Avenir",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      "space-grotesk": [
        "SpaceGrotesk",
        "system-ui",
        "Avenir",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      DMSans: ["DMSans", "system-ui"],
    },
    extend: {
      colors: {
        primary: "#f8c792",
      },
      keyframes: {
        marquee: {
          to: { transform: "translate3d(-50%, 0, 0)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      addUtilities({
        ".translate3d-y-full": {
          transform: "translate3d(0, 101%, 0)",
        },
        ".-translate3d-y-full": {
          transform: "translate3d(0, -101%, 0)",
        },
      });
    }),
  ],
} satisfies Config;
