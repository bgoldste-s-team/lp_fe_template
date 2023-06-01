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
      <Layout site={site}>
        <h1>{page.title}</h1>
        <p>{page.body} {page.content_blocks.length}</p>
        <PageBuilder page={page}/>
      </Layout>
  );
};

export async function getStaticProps({ params }) {
    const siteId = process.env.NEXT_PUBLIC_SITE_ID;
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    console.log(siteId, baseUrl)

  const { slug } = params;
  const res = await fetch(`${baseUrl}/api/sites/${siteId}/`);
  const data = await res.json();

  const page = data.pages.find((p) => p.slug === slug);
  const site = data;
  return {
    props: {
      page,
    site
    },
  };
}

export async function getStaticPaths() {
    const siteId = process.env.NEXT_PUBLIC_SITE_ID;
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    console.log(siteId, baseUrl)
  const res = await fetch(`${baseUrl}/api/sites/${siteId}/`);
  console.log(res)
  const data = await res.json();

  const paths = data.pages
      .filter((p) => !p.is_homepage)
      .map((p) => ({
        params: {
          slug: p.slug,
        },
      }));

  return {
    paths,
    fallback: true,
  };
}

export default SlugPage;
