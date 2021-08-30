module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Oswald'],
      'body': ['Open Sans'],
     },
    extend: {
      screens: {
        'full': '1440px'
      },
      colors: {
        accentone: '#453F9C',
        accenttwo: '#6A19A9',
         //  _accent-grad: linear-gradient(to right,rgba(33, 63, 171,1),rgba(106, 25, 169, 1)),
        highlightone: '#FF8A17',
        highlighttwo: '#FF3217',
       //  _highlight-grad: linear-gradient(to right, rgba(255,138,23,1),rgba(255, 50, 23,1)),
        slate: '#1B242F',
  
        // ...
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
