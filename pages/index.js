// import Head from 'next/head';
// import Image from 'next/image';
// import { Inter } from '@next/font/google';

import {
  AboutMeHome,
  Hero,
  HomeGallery,
  HomePortfolio,
  InstagramGallerySection,
} from '@/components';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <HomeGallery />
      {/* <AboutMeHome />
      <HomePortfolio />
      <InstagramGallerySection /> */}
    </>
  );
}
