import TailwindTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    fontFamily: {
      heading: "Inter, sans-serif",
      body: "Karla, sans-serif",
    },
    container: {
      center: true,
      padding: {
        sm: "1.5rem",
        md: "2rem",
        lg: "5.5rem",
      },
    },
    extend: {},
  },
  plugins: [TailwindTypography],
} satisfies Config;
