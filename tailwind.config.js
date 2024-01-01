/** @type {import('tailwindcss').Config} */

export default {
  content: ['index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        autoFit: 'repeat(auto-fit, minmax(250px, 1fr))'
      },
      gridTemplateRows: {
        autoFitRows: 'repeat(auto-fill, minmax(400px, 1fr))'
      },
      colors: {
        black: '#444',
        fontColor: '#808080',
        gray: '#ececec',
        borderCol: '#363636',
        hoverColor: '#3339b6',
        buttonCol: '#bddbf8',
        letterColNav: '#676767',
        buttonColor: '#383ec5',
        star: 'rgb(252, 255, 50)',
        semiLight: 'rgb(201, 201, 201)',
        groundInf: '#0028998a'
      },
      boxShadow: {
        scaleDown: '0px 3px 13px -7px #afafaf;',
        scaleUp: '0px 0px 72px -8px #bbbbbb;',
        focusShadowInput: '0px 0px 6px #bddbf8'
      }
    }
  },
  plugins: []
}
