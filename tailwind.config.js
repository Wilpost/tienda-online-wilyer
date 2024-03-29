/** @type {import('tailwindcss').Config} */

export default {
  content: ['index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
      backgroundImage: {
        loginBackground: 'url(public/BackgroundImage.png)',
        promoBanner: 'url(public/Banner_Promo.png)'
      },
      gridTemplateColumns: {
        autoFit: 'repeat(auto-fill, minmax(228px, 1fr))'
      },
      gridTemplateRows: {
        autoFitRows: 'repeat(auto-fill, minmax(400px, 1fr))'
      },
      colors: {
        primary: '#121212',
        dark: '#1f1f1f',
        textColor: '#e2e2e2',
        black: '#444',
        fontColor: '#808080',
        gray: '#ececec',
        borderCol: '#363636',
        hoverColor: '#3339b6',
        buttonCol: '#bddbf8',
        letterColNav: '#676767',
        backDropColor: '#eadcfd',
        buttonColor: '#6d3fa5',
        star: 'rgb(252, 255, 50)',
        semiLight: 'rgb(201, 201, 201)',
        groundInf: '#0028998a'
      },
      boxShadow: {
        errorInput: '-1px 0px 5px #e79f9f',
        scaleDown: '0px 3px 13px -7px #afafaf;',
        scaleUp: '0px 0px 72px -8px #bbbbbb;',
        focusShadowInput: '0px 12px 19px 9px #141414',
        shadowForm: '5px 5px 5px #111'
      }
    },
    keyframes: {
      loadSkeleton: {
        '0%': {
          transform: 'translateX(-50px)',
          width: '30px'
        },
        ' 100%': {
          transform: 'translateX(230px)',
          width: '90px'
        }
      },
      animationUnderline: {
        '0%': {
          width: '0px'
        },
        '100%': {
          width: '100%'
        }
      }
    },
    animation: {
      skeleton: 'loadSkeleton ease-out 2.3s infinite',
      animationUnderline: 'animationUnderline ease-out 0.2s both'
    }
  },
  plugins: []
}
