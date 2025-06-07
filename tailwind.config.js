/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('../public/heroBg.jpg')",
      },
      colors: {
        primary1: {
          50: "#E8F7F1",
          100: "#D1EFE3",
          200: "#A3DFC6",
          300: "#76CFAB",
          400: "#4BBF93",
          500: "#96CEB4", // Base Color
          600: "#3AA476",
          700: "#2E7D59",
          800: "#235740",
          900: "#19302A",
        },
        secondary1: {
          50: "#FFFDF3",
          100: "#FFFBE6",
          200: "#FFF7CC",
          300: "#FFF4B3",
          400: "#FFF199",
          500: "#FFEEAD", // Base Color
          600: "#FFD566",
          700: "#CCAB52",
          800: "#99813D",
          900: "#665829",
        },
        tertiary1: {
          50: "#FFF4E8",
          100: "#FFE9D1",
          200: "#FFD2A3",
          300: "#FFBC76",
          400: "#FFA64B",
          500: "#FFAD60", // Base Color
          600: "#E68A2F",
          700: "#B16B26",
          800: "#80501C",
          900: "#4D3011",
        },
        background1: {
          50: "#F5EDE6",
          100: "#EBDCCD",
          200: "#D6BA9B",
          300: "#C1986A",
          400: "#AD7844",
          500: "#A66E38", // Base Color
          600: "#89582C",
          700: "#6A4422",
          800: "#4A2E17",
          900: "#2C1B0E",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
