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
    paragraph: '1.9rem',
    paragraphMobile: '1.7rem',
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
  containerStyles: () => css`
		maxWidth: '2000px',
    margin: '0 auto',
	`,
  paddingMobile: () => css`
    padding: 0 6vw;
  `,
};
