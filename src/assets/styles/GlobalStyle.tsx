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
		
		*::selection {
			background-color: white;
		}

		::-webkit-scrollbar-track {
			background-color: blue;
		}

		::-webkit-scrollbar {
			width: 14px;
			height: 8px;
		}

		::-webkit-scrollbar-thumb {
			background: linear-gradient(0deg, rgba(153,138,116,1) 0%, rgba(219,196,161,1) 50%);
			border-radius: 100px;
			border: 3px solid blue;
			background-clip: padding-box;
		}
	}

	body {
		padding: 0;
		margin: 0;
		font-size: ${({ theme }) => theme.fontSize.paragraph};
	}
`;
