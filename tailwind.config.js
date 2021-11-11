module.exports = {
  purge: [
    './public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': "url('../img/wave-white.png')",
        'wave-pattern-dots': "url('../img/pattern-white-dots.png')",
        'pattern-characters-red': "url('../img/pattern-characters-red.png')",
        'character-mario': "url('../img/character-l.png')",
        'wave-pink': "url('../img/wave-pink.png')",
        'yellow-dots': "url('../img/pattern-yellow-dots.png')",
      }),
      screens:{
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

        'md': '768px',
      // => @media (min-width: 768px) { ... }

        'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

          'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
        'xsm': '320px'

      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
