
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
      <div className={'grid grid-cols-1 md:grid-cols-2 place-items-center gap-2'}>
          {pages.map((page) => (
                <div  key={page.id} className="card w-96 bg-neutral text-neutral-content h-full w-full">
                      <div className="card-body items-center text-center">
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
