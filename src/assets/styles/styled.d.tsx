import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
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
