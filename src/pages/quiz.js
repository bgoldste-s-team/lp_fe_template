import P5Game from '../components/P5Game';
import Layout from "@/components/Layout"

export default function Home({site}) {
    return (
        <Layout site={site}>
            <P5Game />
        </Layout>
    )
}


export async function getStaticProps({ params }) {
    const siteId = process.env.NEXT_PUBLIC_SITE_ID;
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    console.log(siteId, baseUrl)


    const response = await fetch(`${baseUrl}/api/sites/public/`);

    const sites = await response.json()
    console.log(sites)
    const site = await sites.filter((s) => s.id === parseInt(siteId))[0]







    return {
        props: {

            site
        },
        revalidate: 10, // In seconds

    };
}