import type { Config } from "tailwindcss"
import preset from "@serum/tailwind-preset"

const config: Config = {
  presets: [preset as any],
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ],
  darkMode: ["class"],
  plugins: [
    require("@tailwindcss/typography")
  ]
}

export default config
