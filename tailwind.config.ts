import type { Config } from "tailwindcss"

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './app/**/*.{js,jsx}',
	],theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        primary: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
}

export default config