import type { AppProps } from 'next/app';
import { GlobalStyles } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import Navigation from 'components/Navigation/Navigation';
import { useScrollPosition } from 'hooks/useScrollPosition';
import ScrollContext from 'context/ScrollContext';

function MyApp({ Component, pageProps }: AppProps) {
  const { isSticky } = useScrollPosition();

  return (
    <ScrollContext.Provider value={{ isSticky }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        <Component {...pageProps} />
      </ThemeProvider>
    </ScrollContext.Provider>
  );
}

export default MyApp;
