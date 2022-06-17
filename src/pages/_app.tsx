import type { AppProps } from 'next/app';
import { GlobalStyles } from 'styles/GlobalStyle';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import Navigation from 'components/Navigation/Navigation';
import { useScrollPosition } from 'hooks/useScrollPosition';
import ScrollContext from 'context/ScrollContext';
import Footer from 'components/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const { isSticky } = useScrollPosition();

  return (
    <ScrollContext.Provider value={{ isSticky }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </ScrollContext.Provider>
  );
}

export default MyApp;
