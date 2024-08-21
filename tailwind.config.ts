const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '7xxl': '1400px',
        '8xl': '1600px',
        '9xl': '1400px'
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'sec2-image': 'var(--2sec-img)',
          'sec3-img': 'var(--3sec-img)',
           'sec3-cart-img':'var(--3sec-card)',
            'roadmap-bg':'var(--road-bg)',
            'token-bg': 'var(--token-bg)',
            'dragon-bg': 'var(--dragon-bg)',
            'team-bg': 'var(--team-bg)',
            'faqs-bg': 'var(--faqs-bg)',
            'footer-bg': 'var(--footer-bg)',
            "buy-bg": 'var(--buy-bg)',
            "card-bg": 'var(--card-bg)',
            "card2-bg": 'var(--card2-bg)',
            "card3-bg": 'var(--card3-bg)',
            "presale-bg" : 'var(--presale-bg)',
      },
      fontFamily: {
        dragonslapper: ['"DragonSlapper"', 'sans-serif'],
        Mont: ['"Mont"', 'sans-serif'],
        // inter: ['"Inter"', 'latin'],
      },
      colors: {
        // 'white': '#FCF9F9',
        'text-orange': '#F89225',
        'text-white2': '#FDFDFD',
        'text-black': '#050505',
        'btn-black': '#000000',
        'border-color': '#F7F2F2',
        'nav-black': '#000203',
        'silver-color': '#333232',
        'box-border': '#707070',
        'progress-brown': '#210600',
        'white': {  DEFAULT: '#FDFDFD',  50: '#FFFFFF',  100: '#FFFFFF',  200: '#FFFFFF',  300: '#FFFFFF',  400: '#FFFFFF',  500: '#FDFDFD',  600: '#E1E1E1',  700: '#C5C5C5',  800: '#A9A9A9',  900: '#8D8D8D',  950: '#7F7F7F'},
  'tree-poppy': {  DEFAULT: '#F89225',  50: '#FEEBD7',  100: '#FDE1C3',  200: '#FCCD9C',  300: '#FBBA74',  400: '#F9A64D',  500: '#F89225',  600: '#DE7607',  700: '#A75905',  800: '#713C04',  900: '#3B1F02',  950: '#201101'},
      },
     
      boxShadow: {
        // 'Logo-shadow': '0 3px 6px rgba(0, 0, 0, 0)',
        'inner-custom': 'inset 0 0 0 2px rgba(107, 114, 128, 0.5)',
      },
      dropShadow: {
        'Logo-shadow': '0 5px 3px rgb(163, 138, 36)',
      },
      keyframes: {
        fadeup:{
          '0%': { transform: 'translatey(20px)' },
          '100%': { transform: 'translatey(0px)' },
        },
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        scroll: {
          '0%' : {
            transform: 'translateX(0)' 
          },
          '100%' : {
            transform: 'translateX(-50%)' 
          },
        },    
      },
      animation: {
        slide: 'slide 5s forwards',
        scroll: 'scroll 50s linear infinite',
        fadeup:'fadeup 2s ease-out forwards',
      },
     
    },
  },
  plugins: [nextui()],
};
