/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#fbfaf9',
      'violet': '#592941',
      'cadet-violet': '#3b3561',
      'gray': '#919498',
      'rose': '#bd9391',
      'green': '#cadbc8',
      'blue': '#3494ba',
      'black': '#252525',
    },
    fontFamily:{
      'jost': ['"Jost"','cursive'],
      'shadows-into-light': ['"Shadows Into Light"','cursive'],
    }
  },
  plugins: [],
}

