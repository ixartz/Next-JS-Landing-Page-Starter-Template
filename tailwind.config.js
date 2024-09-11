module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#14244c',
          200: '#2c3a5e',
          300: '#435070',
          400: '#5b6682',
          500: '#727c94',
          600: '#8a92a6',
          700: '#a1a7b7',
          800: '#b9bdc9',
          900: '#d0d3db',
        },
        secondary: {
          100: '#dfdcdf',
          200: '#c9c6c9',
          300: '#b2b0b2',
          400: '#9c9a9c',
          500: '#868486',
          600: '#706e70',
          700: '#595859',
          800: '#434243',
          900: '#2d2c2d',
        },
        offwhite: {
          100: '#ebe6e3',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};
