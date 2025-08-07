module.exports = {
  darkMode: "class",
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
    "../../node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        xsmall: "512px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        "2xlarge": "1920px",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      colors: {
        beemax: {
          gold: "var(--beemax-gold)",
          "gold-hover": "var(--beemax-gold-hover)",
          "deep-brown": "var(--beemax-deep-brown)",
          pistachio: "var(--beemax-pistachio)",
          neutral: {
            100: "var(--beemax-neutral-100)",
            200: "var(--beemax-neutral-200)",
            300: "var(--beemax-neutral-300)",
            400: "var(--beemax-neutral-400)",
            500: "var(--beemax-neutral-500)",
            600: "var(--beemax-neutral-600)",
            700: "var(--beemax-neutral-700)",
            800: "var(--beemax-neutral-800)",
          },
          text: {
            primary: "var(--beemax-text-primary)",
            secondary: "var(--beemax-text-secondary)",
            light: "var(--beemax-text-light)",
            muted: "var(--beemax-text-muted)",
          },
        },
      },
      keyframes: {
        "accordion-open": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-close": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-open": "accordion-open 0.3s ease-out",
        "accordion-close": "accordion-close 0.3s ease-out",
      },
    },
  },
}
