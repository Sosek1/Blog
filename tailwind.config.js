/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      'dark/100':'#3A3A3A',
      'dark/300':'#444444',
      'dark/500':'#757575',
      'blue/700':'#4C32FF',
      'light/900':'#F8F8FA',
    },
    fontFamily:{
      'sans':['Open Sans', 'sans-serif']
    },
    fontSize: {
      'h1-mobile':'40px',
      'h2-mobile':'30px;',
      'h3-mobile':'20px',
      'h4-mobile':'18px',
      'p-mobile':'15px'
    },
    fontWeight: {
      'h1-mobile':700,
      'h2-mobile':700,
      'h3-mobile':600,
      'h4-mobile':500,
      'p-mobile':00,
    },
    extend: {},
  },
}
