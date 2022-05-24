import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    black: '#1d1d1f',
    lightGrey: '#fbfbfd',
    grey: '#dbdbdb',
    darkNav: 'rgba(0, 0, 0, 0.8)',
    borderLight: '#d4d4d4',
    borderDark: '#4b4b4b',
  },
  fontSize: {
    heading: '8rem',
    headingTablet: '5.6rem',
    headingMobile: '3rem',
    paragraph: '1.6rem',
    caption: '1.2rem',
  },
  letterSpacing: {
    heading: '-3px',
  },
  mq: {
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
    bigDesktop: '@media (min-width: 1280px)',
    huge: '@media (min-width: 1440px)',
  },
};
