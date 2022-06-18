import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      lightGrey: string;
      grey: string;
      darkNav: string;
      borderLight: string;
      borderDark: string;
      greyText: string;
    };
    fontSize: {
      huge: string;
      heading: string;
      heading64: string;
      headingTablet: string;
      headingMobile: string;
      paragraph: string;
      paragraphMobile: string;
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
    containerStyles: Function;
    paddingMobile: Function;
  }
}
