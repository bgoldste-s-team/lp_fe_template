
import Link from "next/link";


const FeaturedPages = ({pages, pageGroupName}) => {
    console.log(pages, pageGroupName)
    return (
  <div className={'bg-base-200'}>
      <div className="hero  ">
          <div className="hero-content text-center">
              <div className="max-w-md">
                  <h1 className="text-5xl font-bold">{pageGroupName ? pageGroupName : 'Pages'} num pages: {pages.length} pg group ={pageGroupName}</h1>
                  {/*<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>*/}

              </div>
          </div>
      </div>
      <div className={'grid grid-cols-1 text-white md:grid-cols-2 place-items-center gap-2'}>
          {pages.map((page) => (

                <div  key={page.id} className="hero  min-h-[60vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-secondary" style={{backgroundImage: `${page.image_url ? `url(${page.image_url})`: ''}`}}>

                           <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content flex flex-col text-center text-neutral-content">

                          <h2 className="card-title">{page.title}</h2>
                          <p>{page.page_description?.slice(0,150)}..</p>
                          <div className="card-actions justify-end">
                              <Link href={page.slug}>
                              <button className="btn btn-primary">Read More</button></Link>
                              {/*<button className="btn btn-ghost">Deny</button>*/}
                          </div>
                      </div>
                  </div>


          ))}
      </div>
  </div>
    );
};
export default FeaturedPages;
