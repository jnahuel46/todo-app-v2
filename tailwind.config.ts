import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlack: "#000000",
        customRed: "#FF0000",
        neutralGrey: "#B3B3B3",
        neutral00: "#FFFFFF",
        neutral20: "#B3B3B3",
        customGrey: "#555555"
      },
      fontFamily: {
        "open-sans": ['"Open Sans"', "sans-serif"],
      },
      fontSize: {
        "14px": "14px",
      },
      lineHeight: {
        "19px": "19.07px",
      },
    },
  },
  plugins: [],
};
export default config;
