
import Link from "next/link";


const FeaturedPages = ({pages, pageGroupName}) => {
    console.log(pages, pageGroupName)
    return (
  <div className=" bg-primary text-primary-content p-2">
      <div className="hero  ">
          <div className="hero-content text-center">
              <div className="max-w-md">
                   {/*<h1 className="text-5xl font-bold">{pageGroupName ? pageGroupName : 'Pages'} num pages: {pages.length} pg group ={pageGroupName}</h1>*/}
                  <h1 className="text-3xl font-bold py-2 ">More For You</h1>
                  {/*<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>*/}

              </div>
          </div>
      </div>
      <div className={'grid grid-cols-1 text-white md:grid-cols-3 place-items-center gap-2'}>
          {pages.filter((p) => !p.is_homepage ).sort((a,b) => b.title.length - a.title.length).map((page) => (

              <div key={page.id} className="card  bg-base-100 shadow-xl image-full ">
                <figure><img src={page.image_url} alt={page.title} /></figure>
                <div className="card-body text-center items-center  self-center">
                  <h2 className="card-title">{page.title}</h2>
                  <p className="text-sm">{page.page_description}</p>

                <div className="card-actions self-end">
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


