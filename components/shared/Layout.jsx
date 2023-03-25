import Head from 'next/head';

import { Footer, Header } from '@/components';

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Marina Khivrych photography</title>
        <meta
          name="description"
          content="Website photography Marina Khivrych. These are her the best works. "
        ></meta>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
