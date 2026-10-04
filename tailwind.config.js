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
        'bg-base': '#0a0a0f',
        'accent-violet': 'rgba(139, 92, 246, 1)',
        bg: {
          dark: '#0a0a0f',
          card: '#101420',
          hover: '#181E30',
        },
        brand: {
          indigo: '#4F46E5',
          hover: '#4338CA',
          glow: 'rgba(79, 70, 229, 0.15)',
        },
        slate: {
          50: 'var(--slate-50, #f8fafc)',
          100: 'var(--slate-100, #f1f5f9)',
          200: 'var(--slate-200, #e2e8f0)',
          300: 'var(--slate-300, #cbd5e1)',
          400: 'var(--slate-400, #94a3b8)',
          500: 'var(--slate-500, #64748b)',
          600: 'var(--slate-600, #475569)',
          700: 'var(--slate-700, #334155)',
          800: 'var(--slate-800, #1e293b)',
          900: 'var(--slate-900, #0f172a)',
          950: 'var(--slate-950, #020617)',
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
