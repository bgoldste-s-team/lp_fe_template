// pages/api/sitemap.js

const getBaseUrl = (site) => {
  const deploymentUrl = site.deployment_url;
  const customDomainUrl = site.custom_domain_status === 'live' ? `https://${site.custom_domain_url}` : null;
  return customDomainUrl || `https://${deploymentUrl}`;
}

const generateSiteMap = (pages, site) => {
  const baseUrl = getBaseUrl(site);
  
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.sort((p,q) => q.is_homepage - p.is_homepage)
      .map((p) => {
          return `
      <url>
          <loc>${`${baseUrl}/${p.slug}`}</loc>
          <lastmod>${new Date(p.publish_date).toLocaleDateString()}</lastmod>
      </url>`;
      })
      .join('')}
  </urlset>`;
}

export default async function handler(req, res) {
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  const response = await fetch(`${baseUrl}/api/sites/${siteId}`);
  const site = await response.json();

  const sitemap = generateSiteMap(site.pages, site);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600');
  res.end(sitemap);
}
