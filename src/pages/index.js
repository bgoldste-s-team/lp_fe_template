

import PageBuilder from "@/components/PageBuilder";
import Layout from "@/components/Layout"
export default function Home({ homePage, site}) {

    return (
        <Layout site={site}>
       <PageBuilder page={homePage} />
        </Layout>
    );
}


export async function getStaticProps() {
    // console.log("building home page", process.env.siteId, process.env.baseUrl)

    const siteId = process.env.NEXT_PUBLIC_SITE_ID;
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    console.log(siteId, baseUrl)
    const response = await fetch(`${baseUrl}/api/sites/${siteId}/`);
    const site = await response.json();

    const homePage = site.pages.filter((p) => p.is_homepage === true)[0]
    console.log('IS HOMEPAGE', homePage)
    // Replace undefined values with null
    const cleanedSite = JSON.parse(JSON.stringify(site).replace(/undefined/g, null));

    return {
        props: {
           homePage: homePage,
            site: site
        },
    };
}