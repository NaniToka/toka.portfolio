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
        // Google-palette design tokens as Tailwind aliases
        'bg-base':    '#0F1115',
        'surface':    '#171A21',
        'surface-hover': '#1E222B',
        accent: {
          DEFAULT: '#4285F4',
          hover:   '#669DF6',
        },
        brand: {
          blue:  '#4285F4',
          hover: '#669DF6',
          glow:  'rgba(66, 133, 244, 0.15)',
        },
        success: '#34A853',
        highlight: '#FBBC04',
        danger:  '#EA4335',
        // Keep slate passthrough for existing Tailwind slate-* classes
        slate: {
          50:  'var(--slate-50, #f8fafc)',
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
