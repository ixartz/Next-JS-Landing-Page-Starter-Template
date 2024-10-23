import '../styles/global.css';
import '@fontsource/roboto-serif'; // Roboto Serif font

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
