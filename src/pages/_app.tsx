import { Footer } from '@/components';
import Header from '@/components/common/Header/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kham Udom</title>
        <meta name="description" content="Kham Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
