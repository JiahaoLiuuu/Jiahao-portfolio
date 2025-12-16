import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel-header': ['var(--font-pixel-header)', 'monospace'],
        'pixel-body': ['var(--font-pixel-body)', 'monospace'],
      },
      borderRadius: {
        lg: '0',
        md: '0',
        sm: '0',
        DEFAULT: '0',
        full: '0', 
      },
      boxShadow: {
        'pixel': '4px 4px 0 0 rgba(0,0,0,1)',
        'pixel-sm': '2px 2px 0 0 rgba(0,0,0,1)',
        'pixel-lg': '6px 6px 0 0 rgba(0,0,0,1)',
      },
      colors: {
        cyan: {
          500: '#6ee7b7',
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
