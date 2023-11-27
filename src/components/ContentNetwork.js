
import Link from 'next/link';


export default function ContentNetwork({}) {
  const contentNetworkData = [
      {
        title: "Best Free Tools for Side Hustlers - #1 will surprise you",
        description: "Launch your side hustle in seconds with these FREE tools.",
        url: "https://bestsidehustletools.com/",
        thumbnail_url: "https://dexterlabs-public.s3.amazonaws.com/images/five-buck-sites-62099-image.png",
        site: "Best Side Hustle Tools",
        accent:"success",
        badgeCopy:"FREE"

      },
      {
        title: "Websites, as cheap as $5.",
        description: "Professional Websites for as little as $5/month.",
        url: "https://fivebucksites.com/",
        thumbnail_url: "https://dexterlabs-public.s3.amazonaws.com/images/five-buck-sites-14626-image.png",
        site: "Five Buck Sites",
        accent:"secondary",
        badgeCopy:"COOL"

      },
       {
        title: "Get a Job When No One is Hiring",
        description: "Practical Tips for searching for a job in a **** economy.",
        url: "https://dumpsterfirejobs.com/",
        thumbnail_url: "https://dexterlabs-public.s3.amazonaws.com/images/dumpster-fire-jobs-5632-image.png",
        site: "Dumpster Fire Jobs",
        accent:"error",
        badgeCopy:"USEFUL"

      },
    ];
return (
  <div className="bg-primary p-4">
    <h2 className="text-primary-content text-center py-2 text-3xl">Related Content</h2>
    <ul className="grid gap-4 justify-center grid-auto-rows: minmax(120px, auto) md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {contentNetworkData.map((c) => (
        <li key={c.title}>
          <div className="card card-compact p-4 w-120 h-120 bg-base-100 shadow-xl overflow-hidden">
            <figure><img className='w-40 h-40' src={c.thumbnail_url} alt="Thumbnail for article" /></figure>
            <div className='card-body'>
              <div className='h-24 overflow-hidden items-center flex flex-row justify-between' >
                <h2 className="card-title  text-xl mb-2">{c.title}</h2>

                <div className={`mr-4 badge badge-${c.accent}`}>{c.badgeCopy}</div>
              </div>
                 <Link href={c.url} className="  text-md mb-2 font-bold link">{c.site}</Link>
              <p className="">{c.description}</p>
           
            </div>
            <div className="card-actions justify-center">
              <Link href={c.url} className='btn btn-primary btn-wide'> Read More</Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
}





