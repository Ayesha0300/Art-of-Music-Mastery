/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

// type addVariablesForColors = /*unresolved*/ any
// type addSvgPatterns = /*unresolved*/ any
// // const plugins: [any, any]
// const colors = require("tailwindcss/colors");
// const defaultTheme = require("tailwindcss/defaultTheme");
// const svgToDataUri = require("mini-svg-data-uri");
import svgToDataUri from 'mini-svg-data-uri'
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// plugin to add utilities for SVG patterns
function addSvgPatterns({ matchUtilities, theme }: any) {
  matchUtilities(
    {
      "bg-grid": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-grid-small": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-dot": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
        )}")`,
      }),
    },
    { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
  );
}

//Plugin to add each Tailwind color as global CSS variable
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('color'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, value]) => [`--${key}`, value])
  );
  addBase({
    ':root': newVars,
  });
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,t;s,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  /** @type {import('tailwindcss').Config} */

 

  
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
      
      
      spotlight: "spotlight 2s ease .75s 1 forwards",
      scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      meteor: "meteor 5s linear infinite",
    },
    // keyFrame
    
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    
  },
},

scroll: {
  to: {
    transform: "translate(calc(-50% - 0.5rem))",
  },
},
spotlight: {
  '0%': {
    opacity: '0',
    transform: "translate(-72%, -62%) scale(0.5)",
  },
  '100%': {
    opacity: '1',
    transform: "translate(-50%,-40%) scale(1)",
  },
},



  plugins: [addVariablesForColors, addSvgPatterns],
    
      
};
export default config
