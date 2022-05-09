import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      lightGrey: string;
      grey: string;
      dark: string;
    };
    fontSize: {
      heading: string;
      headingMobile: string;
      paragraph: string;
      caption: string;
    };
    /* fontFamily: {
			greatVibes: '"Great Vibes", cursiv',
			noto: '"EB Garamond", serif',
		}, */
    mq: {
      tablet: string;
      desktop: string;
      bigDesktop: string;
      huge: string;
    };
  }
}
