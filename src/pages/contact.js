

import PageBuilder from "@/components/PageBuilder";
import Layout from "@/components/Layout"
import FeaturedPages from "@/components/FeaturedPages";
import TitleBlock from "@/components/TitleBlock";
import SearchComponent from "@/components/SearchComponent";
import ContactFormBlock from "@/components/ContactFormBlock";
export default function Contact({ homePage, site}) {
    return (
        <Layout site={site} page={homePage}>
        <h1 className='text-2xl md:text-4xl text-center py-6'> Contact {site.name}</h1>
        {site.show_contact_form && 
        <ContactFormBlock site_id={site.id} />
        }
        <TitleBlock page={homePage} />
        {/*<PageBuilder page={homePage} site={site} />*/}
        {/*<FeaturedPages pages={site.pages} />*/}
       </Layout>
    );
}


export async function getStaticProps() {
    // console.log("building home page", process.env.siteId, process.env.baseUrl)

    const siteId = process.env.NEXT_PUBLIC_SITE_ID;
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
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
    const homePage = site.pages.filter((p) => p.is_homepage === true)[0]
  
    return {
        props: {
           homePage: homePage ,
            site: site 
        },
        revalidate: 10, // In seconds

    };
}