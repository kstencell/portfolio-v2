import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Geist Sans from next/font/google
        sans: ["var(--font-inter-sans)", "ui-sans-serif", "system-ui"],
        // SF Mono from next/font/local
        mono: [
          "var(--font-sf-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
