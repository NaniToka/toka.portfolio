/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#07080D',
          card: '#101420',
          hover: '#181E30',
        },
        brand: {
          indigo: '#4F46E5',
          hover: '#4338CA',
          glow: 'rgba(79, 70, 229, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
