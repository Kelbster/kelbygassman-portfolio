import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: {
        100: '#0f1010',
        900: '#f8f5f0',
      },
    },
    fontFamily: {
      sans: ["Metropolis", "sans-serif"],
      sansBold: ["Metropolis Bold", "sans-serif"],
      helvetica: ["Helvetica Neue", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
    },
  },
  plugins: [],
};
export default config;
