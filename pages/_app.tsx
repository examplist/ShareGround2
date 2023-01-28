import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Auth from 'components/app/Auth';
import Search from 'components/app/Search';
import Header from 'components/app/Header';
import Footer from 'components/app/Footer';
import Following from 'components/app/Following';
import 'styles/globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setLoading(true);
    });
    router.events.on('routeChangeComplete', () => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <>
        <Head>
          <title>ShareGround</title>
          <link rel="icon" href="/favicon.jpg" />
        </Head>
        <main id="ssr-loading">로딩 중</main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>ShareGround</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <div>
        <Auth />
        <QueryClientProvider client={queryClient}>
          <Search />
          <Header />
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </QueryClientProvider>
        <Footer />
        <Following />
      </div>
    </>
  );
}
