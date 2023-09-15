import Document, { Head, Html, Main, NextScript } from 'next/document';

import { Providers } from '@/app/providers';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
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
