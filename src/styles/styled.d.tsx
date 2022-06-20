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
      font120: Function;
      font96: Function;
      font80: Function;
      font64: Function;
      font56: Function;
      font40: Function;
      font32: Function;
      font24: Function;
      paragraph: string;
      paragraphMobile: string;
      caption: string;
    };
    mq: {
      tablet: string;
      desktop: string;
      bigDesktop: string;
      huge: string;
    };
    paddingMobile: Function;
  }
}
