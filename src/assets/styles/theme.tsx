import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    main: 'cyan',
    secondary: 'magenta',
  },
  fontSize: {
    heading: '3.6rem',
    headingMobile: '3rem',
    paragraph: '1.8rem',
    caption: '1.35rem',
  },
  /* fontFamily: {
    greatVibes: '"Great Vibes", cursiv',
    noto: '"EB Garamond", serif',
  }, */
  mq: {
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
    bigDesktop: '@media (min-width: 1280px)',
    huge: '@media (min-width: 1440px)',
  },
};
