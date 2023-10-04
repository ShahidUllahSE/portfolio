/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    "./src/**/*.{js,tx,jsx,tsx}"],
  theme: {

    fontFamily:{
      'roboto':"'Roboto','sans-sarif'"
    },
    extend: {

      colors:{
     
        'primary':'#c026d',
        // 'headingColor':'#282938',
        'bgShade':'#F5FCFF',
        'dribble': '#E62872',
        'body':'#1C1E53',
        'secondary':'green',
        'bg-body': 'blue'


      }
    },
  },
  plugins: [],
}

