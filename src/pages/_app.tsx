import '../styles/global.css';

import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider>
    <Component {...pageProps} />
  </NextUIProvider>
);

export default MyApp;
