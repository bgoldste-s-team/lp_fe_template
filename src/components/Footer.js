
import Link from "next/link";


const Footer = ({site, pages}) => {
  console.log(site)
  return (
<div className='flex flex-col'>
    <footer className="footer p-10 bg-secondary text-secondary-content">
     <aside>
        <h1 className='text-3xl'>{site.name}</h1>
        <h4 className='text-md'>{site.description}</h4>
        
        </aside>
     
  
    <nav>
      <header className="footer-title">Content</header> 
    {pages.map((page) => (
          <li key={page.id}>
          <Link className="link link-hover" href={page.slug}>{page.title}</Link>
          {/*<p>{page.page_description}</p>*/}
          </li>
        ))}
     <li key="search">
            <Link href={'/search'}>Search</Link>
            </li>
            <li key="sitemap">
         <Link href={'/sitemap.xml'}>Sitemap</Link>
         </li>
    </nav>
  </footer> 


  { site.ad_level === "no_ads" || site.ad_level === "no_ads_with_amazon" ? null :
<div  className='p-2 self-center  '>
  
        <div data-theme='pagesake' className='card max-w-2xl p-4 bg-black'>
          <figure><img className='w-64 p-4' src="/pagesake_logo.png" /></figure>
          <div className='card-body'>
            <h4 className='card-title'>Built With Pagesake </h4>
            <p>Create revenue-generating websites for free, in seconds, with Pagesake. What could you do with a free website?</p>
            </div>
            <div className='card-actions justify-center'>
            <Link href='https://pagesake.com/how-it-works' className='btn'>Learn More</Link>
            <Link href='https://pagesake.com' className='btn btn-primary'>Start Free</Link>
            </div>
        </div>
   </div> 

 }


        </div>
  );
};
export default Footer;
