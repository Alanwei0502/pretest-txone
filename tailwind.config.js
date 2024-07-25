/** @type {import('tailwindcss').Config} */

const primary = 'rgb(22, 83, 142)';
const primary100 = 'rgb(22, 83, 142, 0.1)';
const secondary = 'rgb(22, 83, 142, 0.8)';
const danger = 'rgb(251, 116, 116)';
const disable = 'rgb(152, 152, 152)';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      color: {
        primary,
        secondary,
        'primary-100': primary100,
        danger,
        disable
      },
      height: {
        'screen-minus-header': 'calc(100vh - 64px)',
      },
      flex: {
        'grow-1': '1',
      },
      boxShadow:{
        'header-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.12)',
      },
      backgroundColor: {
        primary,
        secondary,
        'primary-100': primary100,
        danger,
        disable
      },
      borderColor:{
        primary: '#16538E',
        danger,
        disable
      },
      textColor:{
        primary: primary,
      }
    },
  },
  plugins: [],
};
