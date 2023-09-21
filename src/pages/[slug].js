import React from 'react';
import { useRouter } from 'next/router';
import Layout from  "@/components/Layout"
import PageBuilder from "@/components/PageBuilder";
const SlugPage = ({ page, site }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
      <Layout site={site} page={page}>

        <PageBuilder page={page } site={site}/>
      </Layout>
  );
};

export async function getStaticProps({ params }) {
    const siteId = process.env.NEXT_PUBLIC_SITE_ID;
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    console.log(siteId, baseUrl)

  const { slug } = params;


  const response  = await fetch(`${baseUrl}/api/sites/${siteId}`)
  const site = await response.json()
    // const response = await fetch(`${baseUrl}/api/sites/public/`);

    // const sites = await response.json()
    // console.log(sites)
    // const site = await sites.filter((s) => s.id === parseInt(siteId))[0]


  // HANDLE IF THE SLUG DOESNT RETURN, 404 or etc

  const data = site;

  const fallBackPage = {
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
        }
  const page = data.pages.find((p) => p.slug === slug) ;
  console.log(page)



  const returnPage = page ? page : fallBackPage;

  if(!page) {
    console.log("PAGE NTO FOUND REDIRECT")
    return {
      redirect: {
        permanent: false,
        destination: '/404'
      }
    }
  }
  return {
    props: {
        returnPage ,
        site
    },
      revalidate: 10, // In seconds

  };
}

export async function getStaticPaths() {
    const siteId = process.env.NEXT_PUBLIC_SITE_ID;
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    console.log("CREATING SLUG FOR PAGE😀😀",siteId, baseUrl);

    try {

        const response  = await fetch(`${baseUrl}/api/sites/${siteId}`)
        const site = await response.json()

        // const response = await fetch(`${baseUrl}/api/sites/public/`);

        // const sites = await response.json()
        // console.log(sites)
        // const site = await sites.filter((s) => s.id === parseInt(siteId))[0]


        if (!site) {
            throw new Error('Response not OK');
        }

        const data = site;
        console.log('data', data);

        const paths = data.pages
            .filter((p) => !p.is_homepage)
            .map((p) => ({
                params: {
                    slug: p.slug,
                },
            }));

        console.log('paths', paths);

        return {
            paths,
            fallback: true,
        };
    } catch (error) {
        console.error(error);
        return {
            paths: [],
            fallback: true
        }
  };
}

export default SlugPage;
