import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	*, *::after, *::before{
		-webkit-font-smothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	html{
		font-size: 62.5%;
	}

	body {
		padding: 0;
		margin: 0;
		overflow-x: hidden !important;
		font-size: ${({ theme }) => theme.fontSize.paragraphMobile};
		font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu;
		letter-spacing: -0.6px;
		line-height: 1.2;
		color: ${({ theme }) => theme.colors.black};

		h1, h2, h3, h4, h5, h6{
			font-weight: 500;
		}

		button, a {
			color: ${({ theme }) => theme.colors.black};
		}

		${({ theme }) => theme.mq.tablet}{
			font-size: ${({ theme }) => theme.fontSize.paragraph};
		}
	}
`;
