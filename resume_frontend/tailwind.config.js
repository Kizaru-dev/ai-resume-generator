/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        "modern-dark": {
          "primary": "#6366f1", // Indigo 500
          "primary-focus": "#4f46e5",
          "primary-content": "#ffffff",
          "secondary": "#ec4899", // Pink 500
          "secondary-focus": "#db2777",
          "secondary-content": "#ffffff",
          "accent": "#0ea5e9", // Sky 500
          "accent-focus": "#0284c7",
          "accent-content": "#ffffff",
          "neutral": "#1e293b", // Slate 800
          "neutral-focus": "#0f172a",
          "neutral-content": "#f8fafc",
          "base-100": "#0f172a", // Slate 900
          "base-200": "#1e293b", // Slate 800
          "base-300": "#334155", // Slate 700
          "base-content": "#f8fafc", // Slate 50
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
        "modern-light": {
          "primary": "#6366f1", // Indigo 500
          "primary-focus": "#4f46e5",
          "primary-content": "#ffffff",
          "secondary": "#ec4899", // Pink 500
          "secondary-focus": "#db2777",
          "secondary-content": "#ffffff",
          "accent": "#0ea5e9", // Sky 500
          "accent-focus": "#0284c7",
          "accent-content": "#ffffff",
          "neutral": "#f1f5f9", // Slate 100
          "neutral-focus": "#e2e8f0",
          "neutral-content": "#0f172a",
          "base-100": "#ffffff", // White
          "base-200": "#f8fafc", // Slate 50
          "base-300": "#f1f5f9", // Slate 100
          "base-content": "#0f172a", // Slate 900
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
      "luxury",
      "black"
    ],
  },
}
