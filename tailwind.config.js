/** @type {import('tailwindcss').Config} */

// import config from './gitprofile.config';

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
  },
};
