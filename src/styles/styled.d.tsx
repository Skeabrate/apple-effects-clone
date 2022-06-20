import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      borderLight: string;
      borderDark: string;
      grey1: string;
      grey2: string;
      grey3: string;
      grey4: string;
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
