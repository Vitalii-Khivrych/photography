import { Courgette } from '@next/font/google';
import { Montserrat } from '@next/font/google';
import { Dancing_Script } from '@next/font/google';
import { Martel } from '@next/font/google';

const montserrat = Montserrat({
  // weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const dancing = Dancing_Script({
  subsets: ['latin'],
  // weight: '400',
});

const courgette = Courgette({
  weight: '400',
  subsets: ['latin'],
});
const martel = Martel({
  weight: '400',
  subsets: ['latin'],
});

export const theme = Object.freeze({
  colors: {
    footerText: '#303030',
    active: ' #e01a20',
    accent: '#dc5e23',
    // hover: '#1c997e',
    // name: '#075e98',
    // placeholder: ' #BDBDBD',
    // primaryText: '#000000',
    // secondaryText: '#ffff',

    // icon: '#6E78E8',
    // activeIcon: '#4A56E2',

    // btn: '#4A56E2',
    // accentBtn: '#ffffff',

    white: '#ffffff',
    dark: '#000000',

    // background: 'rgb(231, 234, 242)',
    footerBackground: '#e4dfda',
    mobileMenuBackground: '#ababab;',
    // modalBackground: '#ffffff',
    // selectMenuBackground: 'rgba(255, 255, 255, 0.8)',
    // backdropBackground: 'rgba(0, 0, 0, 0.25)',
  },

  fonts: {
    text: `${montserrat.style.fontFamily},  sans-serif`,
    title: `${dancing.style.fontFamily},  sans-serif`,
    name: `${courgette.style.fontFamily},  sans-serif`,
    nav: `${martel.style.fontFamily},  sans-serif`,
  },

  fontSizes: {
    xs: '12px',
    s: '16px',
    m: '18px',
    l: '24px',
    xl: '30px',
  },

  fontWeights: {
    normal: 400,
    bold: 700,
  },

  lineHeights: {
    small: 1.125,
    normal: 1.5,
  },

  borders: {
    radioBtn: '1px solid #E0E0E0',
    btn: '1px solid #4A56E2',
    select: '1px solid #000000',
    line: '4px solid #24CCA7',
  },

  radii: {
    extraSmall: '2px',
    small: '6px',
    normal: '20px',
    large: '30px',
  },

  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desk: '1280px',
  },

  // spacing: value => `${4 * value}px`,

  shadows: {
    line: '0px 1px 8px rgba(36, 204, 167, 0.5)',
    icon: '0px 3px 10px rgba(74, 86, 226, 0.5))',
    addBtn: '0px 6px 15px rgba(36, 204, 167, 0.5)',
    expenseBtn: ' 0px 6px 15px rgba(255, 101, 150, 0.5)',
    selectMenu: '0px 6px 15px rgba(0, 0, 0, 0.1)',
  },
});
