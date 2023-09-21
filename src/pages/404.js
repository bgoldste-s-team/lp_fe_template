// pages/404.js
import Layout from "@/components/Layout";
import Link from "next/link";

function Custom404({ site}) {
  const buttonContainerClasses =
    "flex justify-center gap-4 mt-4 flex-row-reverse";
    const page = {title: "Not Found", description:"Something went wrong looking up that Page."}
  return (
    <Layout site={site} page={page}>
      <div className={"card "}>
        <div className={"card-body items-center text-center "}>
          
          <h1 className={"text-3xl text-center py-6"}>Not Found!</h1>
          <h3 className={"text-xl text-center py-2"}>
            Something went wrong looking up that page.
          </h3>
          <div className={buttonContainerClasses}>
            <Link className="btn btn-primary" href={"/"}>
              Home
            </Link>
         
          </div>
        </div>
      </div>
    </Layout>
  );
}


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
export async function getStaticProps() {
    // console.log("building home page", process.env.siteId, process.env.baseUrl)

    const siteId = process.env.NEXT_PUBLIC_SITE_ID;
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    console.log("ENVIRONMENT VARIABLES!", siteId, baseUrl)




    const response  = await fetch(`${baseUrl}/api/sites/${siteId}`)
    const site = await response.json()
    console.log("404 response", site)

 

  
    return {
        props: {
          
            site: site || defaultSite
        },
        revalidate: 10, // In seconds

    };
}

export default Custom404;
