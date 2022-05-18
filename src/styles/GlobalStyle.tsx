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
		letter-spacing: -0.4px;
		line-height: ${({ theme }) => theme.lineHeight.default};
	}

	body {
		padding: 0;
		margin: 0;
		font-size: ${({ theme }) => theme.fontSize.paragraph};
		font-family: 'Roboto Flex', sans-serif;
		overflow-x: hidden !important;
	}
`;
