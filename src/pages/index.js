

import PageBuilder from "@/components/PageBuilder";
import Layout from "@/components/Layout"
import FeaturedPages from "@/components/FeaturedPages";



const defaultSite = {
    "id": 221,
    "created_at": "2023-08-13T03:53:24.096Z",
    "updated_at": "2023-09-02T13:06:20.330Z",
    "user": 6,
    "name": "Coming Soon!",
    "description": "Your Site Will be Ready Soon!",
    "theme": "dark",
    "status": "deployed",
    "custom_domain_url": "",
    "custom_domain_status": "live",
    "ad_level": "no_ads_with_amazon",
    "deployment_url": "history-of-cults.pagesake.com",
    "deployment_id": "dpl_H9hiEHTgha5DQZZ8URJgPkoYHExF",
    "logo_image_url": null,
    "pages": [
        {
            "id": 59303,
            "user": 6,
            "site": 221,
            "created_at": "2023-08-26T08:11:48.854Z",
            "updated_at": "2023-09-01T20:05:17.094Z",
            "publish_date": "2023-08-26T15:11:00Z",
            "is_homepage": false,
            "show_in_navbar": true,
            "page_group": "",
            "page_group_slug": "",
            "title": "Welcome to Pagesake!",
            "page_description":"We're building your site and content right now, and everything should be ready shortly! You can refresh this page to see it update in realtime.",
            "content_blocks": [
                {
                    "type": "TextBlock",
                    "page": 0,
                    "id": 0,
                    "order": 0,
                    "header": "Your Content Will Go Here",
                    "subheader": "And it will be great",
                    "body": "Our AI-powered content generation is hard at work building your site right now. Refresh this page to see it update, or head back to your dashboard to make changes to your site",
                    "caption": null,
                    "cta1_text": "Dashboard",
                    "cta1_link": "https://pagesake.com/dashboard",
                    "cta2_text": "Help",
                    "cta2_link": "https://pagesake.com/help",
                    "image_url": ""
                },
               
            ],
            "image_url": null,
            "is_new": false,
            "has_all_blocks": true,
            "slug": ""
        },
        
    ],
    "image_url": null,
    "page_groups": [
        "",
        "blog"
    ],
    "engagement_blocks": [],
    "amazon_store_id": "pagesake-20",
    "amazon_products": []
}
export default function Home({ homePage, site}) {
    console.log(site.pages)
    return (

        <Layout site={site} page={homePage}>

        <PageBuilder page={homePage} site={site} />
        <FeaturedPages pages={site.pages} />
       </Layout>
    );
}


export async function getStaticProps() {
    // console.log("building home page", process.env.siteId, process.env.baseUrl)

    const siteId = process.env.NEXT_PUBLIC_SITE_ID;
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    console.log("ENVIRONMENT VARIABLES!", siteId, baseUrl)




    const response  = await fetch(`${baseUrl}/api/sites/${siteId}`)
    const site = await response.json()
    // const response = await fetch(`${baseUrl}/api/sites/public/`);

    // const sites = await response.json()
    // console.log(sites)
    // const site = await sites.filter((s) => s.id === parseInt(siteId))[0]
      if (!site || !site.pages) {
        return {
            props: {
                homePage: defaultSite.pages[0],
                site: defaultSite,
            },
            revalidate:10
        }
    }
    console.log("~~~?",typeof(sites), siteId, site)
    console.log(site.pages)

    console.log("~~~~", "PAGES", site)
    const homePage = site.pages.filter((p) => p.is_homepage === true)[0]
    console.log('IS HOMEPAGE', homePage, site)
 

  
    return {
        props: {
           homePage: homePage || defaultSite.pages[0],
            site: site || defaultSite
        },
        revalidate: 10, // In seconds

    };
}