import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    textStrokeWidth: {
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
    },
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
      Montserrat: ["Montserrat", "system-ui"],
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
    plugin(function ({ addUtilities, matchUtilities, addComponents, theme }) {
      addUtilities({
        ".translate3d-y-full": {
          transform: "translate3d(0, 101%, 0)",
        },
        ".-translate3d-y-full": {
          transform: "translate3d(0, -101%, 0)",
        },
      });
      addComponents({
        ".gradient-text": {
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        },
      });
      matchUtilities(
        {
          "text-stroke": (value) => ({
            WebkitTextStrokeWidth: value,
          }),
        },
        { values: theme("spacing"), modifiers: "any" }
      );
      matchUtilities(
        {
          [`text-stroke`]: (value) => ({ WebkitTextStrokeColor: value }),
        },
        { values: theme("colors") }
      );
    }),
  ],
} satisfies Config;
