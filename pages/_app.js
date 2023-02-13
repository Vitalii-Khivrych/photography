import { Inter } from '@next/font/google';
import { ThemeProvider } from 'styled-components';

import { Layout } from '@/components';
import { GlobalStyle, theme } from '@/styles';

const inter = Inter({ subsets: ['latin'] });

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
