import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

import { Providers } from '@/app/providers';

import { AppConfig } from '../utils/AppConfig';

const GA_MEASUREMENT_ID = 'G-L21H4M24PB';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <body>
          <Providers>
            <Main />
            <NextScript />
          </Providers>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
