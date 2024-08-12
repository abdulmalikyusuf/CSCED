import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

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
      QuickSand: [
        "QuickSand",
        "system-ui",
        "Avenir",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      amatic: [
        "Amatic",
        "system-ui",
        "Avenir",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      DMSans: ["DMSans", "system-ui"],
      NunitoSans: ["NunitoSans", "system-ui"],
    },
    extend: {
      colors: {
        black: "#111",
        white: "#FFF",
        transparent: "transparent",
        primary: "#015AA5",
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
    addVariablesForColors,
  ],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
