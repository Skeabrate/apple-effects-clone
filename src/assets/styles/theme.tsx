import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    lightGrey: '#f5f5f7',
    grey: '#dbdbdb',
    dark: 'rgba(0, 0, 0, 0.8)',
    borderLight: '#d4d4d4',
    borderDark: '#4b4b4b',
  },
  fontSize: {
    heading: '3.6rem',
    headingMobile: '3rem',
    paragraph: '1.6rem',
    caption: '1.2rem',
  },
  mq: {
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
    bigDesktop: '@media (min-width: 1280px)',
    huge: '@media (min-width: 1440px)',
  },
};
