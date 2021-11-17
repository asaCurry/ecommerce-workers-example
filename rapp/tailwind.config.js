module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Oswald'],
      'body': ['Open Sans'],
     },
    extend: {
      screens: {
        's': '640px',
        // 'md': '768px',
        't-max': {'min': '0', 'max': '799px'},
        't': '800px', // keep as pixel values
        // 'lg': '1024px',
        'd': '1024px', // keep as pixel values
        // 'xl': '1280px',
        'full': '1440px', // keep as pixel values
        // 'super': '2560px', // keep as pixel values // Kludge in layout
      },
      colors: {
        accentone: '#453F9C',
        accenttwo: '#6A19A9',
        lavendar: '#D0CFE6',
         //  _accent-grad: linear-gradient(to right,rgba(33, 63, 171,1),rgba(106, 25, 169, 1)),
        highlightone: '#FF8A17',
        highlighttwo: '#FF3217',
       //  _highlight-grad: linear-gradient(to right, rgba(255,138,23,1),rgba(255, 50, 23,1)),
        slate: '#1B242F',
  
        // ...
      },
      minHeight: {
        '96': '24rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

