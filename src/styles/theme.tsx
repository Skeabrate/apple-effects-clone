import { DefaultTheme, css } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    black: '#1d1d1f',
    borderLight: '#d4d4d4',
    borderDark: '#4b4b4b',
    grey1: '#6e6e73',
    grey2: '#86868b',
    grey3: '#f5f5f7',
    grey4: '#fbfbfd',
  },
  fontSize: {
    huge: '12rem',
    heading: '8rem',
    heading64: '6.4rem',
    headingTablet: '5.6rem',
    headingMobile: '3rem',

    font120: () => css`
      font-size: 12rem;
      letter-spacing: -2px;
      line-height: 1;
    `,
    font96: () => css`
      font-size: 9.6rem;
      letter-spacing: -2px;
      line-height: 1;
    `,
    font80: () => css`
      font-size: 8rem;
      letter-spacing: -2px;
      line-height: 1;
    `,
    font64: () => css`
      font-size: 6.4rem;
      letter-spacing: -1.4px;
      line-height: 1.05;
    `,
    font56: () => css`
      font-size: 5.6rem;
      letter-spacing: -1.4px;
      line-height: 1.05;
    `,
    font40: () => css`
      font-size: 4rem;
      letter-spacing: -1px;
      line-height: 1.1;
    `,
    font32: () => css`
      font-size: 3.2rem;
      letter-spacing: -1px;
      line-height: 1.1;
    `,
    font24: () => css`
      font-size: 2.4rem;
      letter-spacing: -1px;
      line-height: 1.1;
    `,
    paragraph: '1.9rem',
    paragraphMobile: '1.7rem',
    caption: '1.2rem',
  },
  mq: {
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
    bigDesktop: '@media (min-width: 1280px)',
    huge: '@media (min-width: 1440px)',
  },
  paddingMobile: () => css`
    padding: 0 6vw;
  `,
};
