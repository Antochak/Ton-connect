import {THEME, TonConnectUIProvider} from '@tonconnect/ui-react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import {manifestUrl, META} from '~/meta';
import '../shared/styles/index.css';

interface MyAppProps extends AppProps {
  Component: AppProps['Component'];
}

export default function MyApp(props: MyAppProps) {
  const {Component, pageProps} = props;

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <title>{META.title}</title>
      </Head>
      <TonConnectUIProvider manifestUrl={manifestUrl} uiPreferences={{theme: THEME.DARK}}>
        <Component {...pageProps} />
      </TonConnectUIProvider>
    </>
  );
}
