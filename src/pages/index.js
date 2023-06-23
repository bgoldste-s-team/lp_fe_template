

import PageBuilder from "@/components/PageBuilder";
import Layout from "@/components/Layout"
import FeaturedPages from "@/components/FeaturedPages";
export default function Home({ homePage, site}) {
    console.log(site.pages)
    return (

        <Layout site={site}>

        <PageBuilder page={homePage} site={site} />
        <FeaturedPages pages={site.pages} />
       </Layout>
    );
}


export async function getStaticProps() {
    // console.log("building home page", process.env.siteId, process.env.baseUrl)

    const siteId = process.env.NEXT_PUBLIC_SITE_ID;
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    console.log(siteId, baseUrl)
    const response = await fetch(`${baseUrl}/api/sites/public/`);

    const sites = await response.json()
    console.log(sites)
    const site = await sites.filter((s) => s.id === parseInt(siteId))[0]
    console.log("~~~?",typeof(sites), siteId, site)
    console.log(site.pages)

    console.log("~~~~", "PAGES", site)
    const homePage = site.pages.filter((p) => p.is_homepage === true)[0]
    console.log('IS HOMEPAGE', homePage, site)
    // Replace undefined values with null
    const cleanedSite = JSON.parse(JSON.stringify(site).replace(/undefined/g, null));

    return {
        props: {
           homePage: homePage,
            site: site
        },
        revalidate: 10, // In seconds

    };
}