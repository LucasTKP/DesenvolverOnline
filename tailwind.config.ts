import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'lsm': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'primary': '#10B981',
        'secondary': '#D9D9D9',
        'terciary': '#0000'
      },

      fontFamily: {
        firaCode: ['var(--font-firaCode)'],
        fira: ['var(--font-fira)'],
      },
    },
  },
  plugins: [],
};
export default config;
