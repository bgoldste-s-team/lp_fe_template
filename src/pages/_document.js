import { Html, Head, Main, NextScript } from "next/document";
import { ThemeScriptTag } from 'next-themes'
import Script from "next/script";
// import {siteData}  from "@/data/site_data.json";

export default function Document() {
  return (
    <Html lang="en"  >
      <Head></Head>
      <body>
        {/*<ThemeScriptTag />*/}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
