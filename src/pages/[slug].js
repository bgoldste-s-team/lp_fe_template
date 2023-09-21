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

  const page = data.pages.find((p) => p.slug === slug) ;
  console.log(page)




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
        page ,
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
