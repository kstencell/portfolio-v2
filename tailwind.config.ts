import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
  ],
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
