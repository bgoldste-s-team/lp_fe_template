import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import Script from "next/script";
import siteData from "@/data/site_data.json";

export default function Layout({ children, pageTitle, pageDescription, site , page}) {
  const measurementId = 'G-XYGCHM2B97'//hardcoding global ps analytics siteData["ga_measurement_id"];
  const amazonId = siteData["referral_tag"]
  const firstImageUrl = page.content_blocks?.find(block =>  block.image_url)?.image_url || '';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={firstImageUrl} />
        {/* If you can compute the current URL, add the following line */}
        {/* <meta property="og:url" content={currentURL} /> */}
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={firstImageUrl} />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
                  
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${measurementId}');
        `}
      </Script>
        <Script id="az-b1" type="text/javascript" strategy="lazyOnload">
            {`
            amzn_assoc_ad_type = "link_enhancement_widget";
            amzn_assoc_tracking_id = "${amazonId}";
            amzn_assoc_linkid = "4d7ad7aad1d2f07afbfbd4de67812deb";
            amzn_assoc_placement = "";
            amzn_assoc_marketplace = "amazon";
            amzn_assoc_region = "US";
               `}
        </Script>

        <Script id="az-b2"  strategy="lazyOnload" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&MarketPlace=US"></Script>
      <Navbar site={site} />
      <main className="">{children}</main>
      <Footer site={site} pages={site.pages} />
    </>
  );
}
