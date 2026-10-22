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
        'jet-black':      '#050505',
        'royal-amethyst': '#3B0A6B',
        'electric-cyan':  '#00E5FF',
        'bg-base':    '#050505',
        'surface':    '#3B0A6B',
        'surface-hover': 'rgba(59,10,107,0.85)',
        accent: {
          DEFAULT: '#00E5FF',
          hover:   '#33EEFF',
        },
        brand: {
          blue:  '#00E5FF',
          hover: '#33EEFF',
          glow:  'rgba(0,229,255,0.15)',
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
