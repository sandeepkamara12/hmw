/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      /* Custom breakpoints with minimum width */
      'esm': '480px',
      'vsm': '575px',
      /* Custom breakpoints with maximum width */
      'mobile': { 'max': '767px' },
      'tablet': { 'max': '1024px' },
      'laptop': { 'max': '1280px' },
    },
    borderWidth: {
      DEFAULT: '1.5px',
    },
    borderRadius: {
      'none': '0',
      '1': '1px',
      DEFAULT: '2px',
      '3': '3px',
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      spacing: {
        '5': '0.313rem',
        '15': '0.938rem',
      },
      /* Theme Colors */
      colors: {
        white: 'rgb(var(--color-white) / 1)',
        black: 'rgb(var(--color-black) / 1)',
        primary: 'rgb(var(--color-primary) / 1)',
        hover: 'rgb(var(--color-hover) / 1)',
        fieldBg: 'rgb(var(--color-fieldBg) / 1)',
        fieldOutline: 'rgb(var(--color-fieldOutline) / 1)',
        disabled: 'rgb(var(--color-disabled) / 1)',
        secondary: 'rgb(var(--color-secondary) / 1)',
        active: 'rgb(var(--color-active) / 1)',
        error: 'rgb(var(--color-error) / 1)',
        placeholder: 'rgb(var(--color-placeholder) / 1)',
        fieldNoFocus: 'rgb(var(--color-fieldNoFocus) / 1)',
      },
      /* Default breakpoints with minimum width */
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1290px',
        '2xl': '1366px',
      },
      /* Theme Font Sizes */
      fontSize: {
        "base": ['0.75rem', '0.938rem'], /* Font Size: 12px, Line Height:15px */
        "14": ['0.875rem', '1.25rem'], /* Font Size: 14px, Line Height:20px */
        '16': ['1rem', '1.188rem'], /* Font Size: 16px, Line Height:19px */
        '18': ['1.125rem', '1.313rem'], /* Font Size: 16px, Line Height:19px */
        '28': ['1.75rem', '2.125rem'], /* Font Size: 16px, Line Height:34px */
        '32': ['2rem', '2.375rem'], /* Font Size: 32px, Line Height:38px */
      },
      lineHeight: {
        '17': '1.063rem',
        '15': '0.938rem',
        '20': '1.25rem',
        '21': '1.313rem',
        '33': '2.063rem',
      },
      maxWidth: {
        'small-container': '400px',
      },
    },
  },
  plugins: [],
}