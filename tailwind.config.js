/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        learn: '1400px',
        prices: '680px',
      },
      height: {
        tlCommunityBase: '500px',
        tlCommunityXXL: '650px',
      },
      maxWidth: {
        600: '600px',
        700: '700px',
        788: '788px',
        1000: '1000px',
        1400: '1400px',
      },
      width: {
        75: '18.75rem',
        79.5: '19.5rem',
        90: '22.5rem',
        100: '25rem',
        110: '27.75rem',
        500: '500px',
        550: '550px',
        700: '700px',
        788: '788px',
        800: '800px',
      },
      spacing: {
        0.5: '0.125rem',
      },
      fontSize: {
        8: ['8px', '11px'],
        10: ['11px', '14px'],
        11: ['11px', '15px'],
        12: ['12px', '16px'],
        14: ['14px', '19px'],
        15: ['15px', '20px'],
        17: ['17px', '22px'],
        20: ['20px', '27px'],
        25: ['25px', '33px'],
        30: ['30px', '40px'],
        35: ['35px', '47px'],
        40: ['40px', '53px'],
      },
      fontFamily: {
        segoe: [
          'Segoe UI',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      colors: {
        subtitle: '#464646',
        moduleTitle: '#051F3D',
        description: '#464646',
        footer: '#464646',
        community: '#333232',
        phase: '#4A4A4A',
        bullets: '#4A4A4A',
        notAvailable: '#BBBBBB',
        date: '#323232',
        communityMemberTitle: '#464646',
        colorForms:'#FFFFFF'
      },
      backgroundColor: {
        blueBox: '#4476FF',
        darkBlueBox: '#3A5AB5',
        purpleBox: '#8255f7',
        grayBox: '#F2F2F2',
        module: '#F7F7F7',
        listItemBox: '#5290EE',
        darkBox: '#181818',
        notAvailableBody: 'rgba(194, 194, 194, 0.3)',
        notAvailableFooter: '#B0B0B0',
        available: '#43E8BB',
        buyNowBtn: '#23C287',
        blueButtonLight: '#37A0DC',
        blueButtonMiddle: '#0098E9',
      },
      boxShadow: {
        base: '0 3px 10px #00000008',
        priceSlide: '0px 3px 20px #00000029',
        slideBP: '0 3px 6px #00000029',
        tlcBox: '0px 3px 6px #00000029',
        buyBtn: '0px 5px 15px #0000001C',
      },
      borderColor: {
        grayBorder: '#707070',
      },
      backgroundImage: {
        'circle-pattern': 'url(/src/assets/circlebg.jpg)',
      },
    },
  },
  plugins: [],
}