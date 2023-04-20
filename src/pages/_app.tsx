import { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GoogleAnalytics
      trackPageViews={{ ignoreHashChange: true }}
      gaMeasurementId={"G-QD8ZTM7F1V"}
    />

    <Component {...pageProps} />
  </>
);

export default MyApp;
