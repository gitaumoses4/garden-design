/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#fdf000',
        background: '#72689f',
        text: '#fdfdfd',
        'content-1': '#8757b4',
        'content-2': '#534c8a',
        'content-3': '#b56bb1',
      },
    },
    fontFamily: {
      sans: ['"Open Sans", sans-serif', {
        fontVariationSettings: '"wdth" 100;',
        fontOpticalSizing: 'auto;',
      }],
    }
  },
  plugins: [],
};
