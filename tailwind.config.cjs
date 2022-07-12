/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      aspectRatio: {
        '1/2': '1 / 2',
        '1/3': '1 / 3',
        '1/4': '1 / 4'
      },
    },
  },
  plugins: [],
}
