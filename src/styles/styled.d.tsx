import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      lightGrey: string;
      grey: string;
      dark: string;
      borderLight: string;
      borderDark: string;
    };
    fontSize: {
      heading: string;
      headingTablet: string;
      headingMobile: string;
      paragraph: string;
      caption: string;
    };
    letterSpacing: {
      heading: string;
    };
    mq: {
      tablet: string;
      desktop: string;
      bigDesktop: string;
      huge: string;
    };
  }
}
