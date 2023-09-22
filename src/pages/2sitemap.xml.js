

// function getBaseUrl(site) {
//     const deploymentUrl = site.deployment_url;
//     const customDomainUrl = site.custom_domain_status === 'live' ? `https://${site.custom_domain_url}` : null;
//     const publicInfo =  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL;
//     // remove next since i cant really count on it?
//     return  customDomainUrl   ?? `https://${deploymentUrl}`;
// }


// function generateSiteMap(pages, site) {

//     let url = getBaseUrl(site);

//     return `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 
   
//     ${pages.sort((p,q) => q.is_homepage - p.is_homepage)
//         .map((p) => {
//             return `
//     <url>
//         <loc>${`${url}/${p.slug}`}</loc>
//         <lastmod>${new Date(p.publish_date).toLocaleDateString()} </lastmod>
//     </url>
//     `;
//         })
//         .join('')}
// </urlset>
//         `;
// }

// function SitemapXml() {
//     // getServerSideProps will do the heavy lifting
// }

// export async function getServerSideProps({res}) {
//    const siteId = process.env.NEXT_PUBLIC_SITE_ID;
//     const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
//     console.log(siteId, baseUrl)

 

//   const response  = await fetch(`${baseUrl}/api/sites/${siteId}`)
//   const site = await response.json()




//   const data = site;
//     // We generate the XML sitemap with the posts data
//     const sitemap = generateSiteMap(site.pages, site);

//     res.setHeader('Content-Type', 'text/xml');
//     // we send the XML to the browser
//     res.write(sitemap);
//     res.end();

//     return {
//         props: {},
//     };
// }

// export default SitemapXml;
import React from 'react';
import ReactDOMServer from 'react-dom/server';

// Your base URL logic remains unchanged.
function getBaseUrl(site) {
    const deploymentUrl = site.deployment_url;
    const customDomainUrl = site.custom_domain_status === 'live' ? `https://${site.custom_domain_url}` : null;
    return customDomainUrl || `https://${deploymentUrl}`;
}

const UrlSet = ({ children }) => (
    <>
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            {children}
        </urlset>
    </>
);

const Url = ({ url, publishDate }) => (
    <url>
        <loc>{url}</loc>
        <lastmod>{new Date(publishDate).toLocaleDateString()}</lastmod>
    </url>
);

function generateSiteMap(pages, site) {
    const baseUrl = getBaseUrl(site);

    const urls = pages.sort((p, q) => q.is_homepage - p.is_homepage)
        .map(page => (
            <Url key={page.slug} url={`${baseUrl}/${page.slug}`} publishDate={page.publish_date} />
        ));

    return ReactDOMServer.renderToStaticMarkup(<UrlSet>{urls}</UrlSet>);
}

function SitemapXml() {
    // This will remain empty as we do everything in getServerSideProps
}

export async function getServerSideProps({ res }) {
    const siteId = process.env.NEXT_PUBLIC_SITE_ID;
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

    const response = await fetch(`${baseUrl}/api/sites/${siteId}`);
    const site = await response.json();

    const sitemap = generateSiteMap(site.pages, site);

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SitemapXml;
