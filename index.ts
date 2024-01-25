import plugin from "tailwindcss/plugin"

const tailwindCSSPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": "220 23% 95%",
        "--foreground": "234 16% 35%",
        "--card": "220 23% 95%",
        "--card-foreground": "234 16% 35%",
        "--popover": "220 23% 95%",
        "--popover-foreground": "234 16% 35%",
        "--primary": "266 85% 58%",
        "--primary-foreground": "220 23% 95%",
        "--secondary": "220 21% 89%",
        "--secondary-foreground": "231 97% 72%",
        "--muted": "223 16% 83%",
        "--muted-foreground": "220 23% 95%",
        "--accent": "223 16% 83%",
        "--accent-foreground": "231 97% 72%",
        "--destructive": "347 87% 44%",
        "--destructive-foreground": "220 23% 95%",
        "--border": "233 13% 41%",
        "--input": "233 13% 41%",
        "--ring": "233 13% 41%",
        "--radius": "0.5rem",
      },
      ".dark": {
        "--background": "240 21% 15%",
        "--foreground": "226 64% 88%",
        "--card": "240 21% 15%",
        "--card-foreground": "226 64% 88%",
        "--popover": "240 21% 15%",
        "--popover-foreground": "226 64% 88%",
        "--primary": "267 84% 81%",
        "--primary-foreground": "240 21% 15%",
        "--secondary": "240 23% 9%",
        "--secondary-foreground": "232 97% 85%",
        "--muted": "237 16% 23%",
        "--muted-foreground": "240 21% 15%",
        "--accent": "237 16% 23%",
        "--accent-foreground": "232 97% 85%",
        "--destructive": "343 81% 75%",
        "--destructive-foreground": "240 21% 15%",
        "--border": "227 35% 80%",
        "--input": "227 35% 80%",
        "--ring": "227 35% 80%",
      },
    })
    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
      },
    })
  },
  {
    darkMode: ["class"],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  },
)

export default tailwindCSSPlugin
