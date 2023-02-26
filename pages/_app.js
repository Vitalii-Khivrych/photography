import { ThemeProvider } from 'styled-components';

import { Layout } from '@/components';
import { GlobalStyle, theme } from '@/styles';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
