import type { Config } from "tailwindcss"
import preset from "@serum/tailwind-preset"

export default {
  presets: [preset as any],
  content: ["./src/**/*.{ts,tsx}"]
} satisfies Config
