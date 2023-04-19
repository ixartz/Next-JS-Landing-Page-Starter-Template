import { AppProps } from "next/app";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-QD8ZTM7F1V"
    ></script>
    <script>
      {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QD8ZTM7F1V');`}
    </script>
    <Component {...pageProps} />
  </>
);

export default MyApp;
