/** @type {import('tailwindcss').Config} */

export default {
  content: ['index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
      backgroundImage: {
        loginBackground: 'url(public/BackgroundImage.png)'
      },
      gridTemplateColumns: {
        autoFit: 'repeat(auto-fill, minmax(240px, 1fr))'
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
        backDropColor: '#eadcfd',
        buttonColor: '#383ec5',
        star: 'rgb(252, 255, 50)',
        semiLight: 'rgb(201, 201, 201)',
        groundInf: '#0028998a'
      },
      boxShadow: {
        errorInput: '-1px 0px 5px #e79f9f',
        scaleDown: '0px 3px 13px -7px #afafaf;',
        scaleUp: '0px 0px 72px -8px #bbbbbb;',
        focusShadowInput: '0px 0px 6px #bddbf8'
      }
    },
    keyframes: {
      loadSkeleton: {
        '0%': {
          opacity: '1'
        },
        '50%': {
          opacity: '.5'
        },
        '100%': {
          opacity: '1'
        }
      }
    },
    animation: {
      skeleton: 'loadSkeleton ease-in 1.3s alternate infinite'
    }
  },
  plugins: []
}
