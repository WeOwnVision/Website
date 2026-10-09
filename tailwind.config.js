/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        theme: {
          base: 'var(--bg-base)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-surface-elevated)',
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-tertiary)',
          'text-hover': 'var(--text-hover)',
          accent: 'var(--accent-amber)',
          'accent-hover': 'var(--accent-hover)',
          cognac: 'var(--accent-cognac)',
          'btn-bg': 'var(--btn-primary-bg)',
          'btn-text': 'var(--btn-primary-text)',
          'btn-hover-bg': 'var(--btn-primary-hover-bg)',
          'btn-hover-text': 'var(--btn-primary-hover-text)',
          'btn-sec-bg': 'var(--btn-secondary-bg)',
          'btn-sec-text': 'var(--btn-secondary-text)',
          'btn-sec-hover-bg': 'var(--btn-secondary-hover-bg)',
          'btn-sec-hover-text': 'var(--btn-secondary-hover-text)',
        },
      },
      borderColor: {
        theme: 'var(--border-hairline)',
        'theme-strong': 'var(--border-strong)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
}