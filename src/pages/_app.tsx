import '../styles/global.css';

import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider>
    <GoogleAnalytics trackPageViews gaMeasurementId="G-L21H4M24PB" />
    <Component {...pageProps} />
  </NextUIProvider>
);

export default MyApp;
