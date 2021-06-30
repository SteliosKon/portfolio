module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        base_indigo: '#3f51b5',
        redish: '#e3204b',
      },
      fontFamily: {
        sans: ['Railway', 'Roboto', 'sans-serif'],
      },
      typography: {
        '3xl': {
          css: {
            fontSize: '1.875rem',
          },
        },
        '4xl': {
          css: {
            fontSize: '2rem',
          },
        },
        '8xl': {
          css: {
            fontSize: '4rem',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
