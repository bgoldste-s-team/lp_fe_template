
import Link from "next/link";


const Navbar = ({site}) => {


  // const { siteName, siteImgUrl }  = useContext(AppContext);
  const siteName = site.name

    console.log(site)
    console.log(site.pages)
    const pages = site.pages;
    console.log(pages)
  return (

      <div className="navbar bg-primary sticky text-primary-content p-2  top-0 z-50">


          <div className="navbar-start ">
              {/*<img src={siteImgUrl} className="w-16 rounded-full mr-2" />*/}
              <Link href="/"className="btn-md  hidden sm:block btn-ghost self-center text-lg lg:text-2xl text-primary-content break-words px-0 mx-0 ">     {siteName}</Link>
          </div>
          <div className="navbar-center sm:hidden ">
              {/*<img src={siteData.site_image} className="w-16 rounded-full mr-2" />*/}
              <Link href="/"className="btn-md   btn-ghost self-center text-2xl text-primary-content break-words px-0 mx-0 ">

                  {siteName}
              </Link>
          </div>
          <div className="navbar-end">

              <div className="dropdown dropdown-end">

                  <label tabIndex={0} className="btn btn-ghost  ">
                      {/*<svg width="64px" height="64px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>*/}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  fill-primary stroke-accent" stroke-width='1.3'  viewBox="0 0 20 20"  ><g id="SVGRepo_iconCarrier"> <path fill="" className= "" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>
                      {/*className="h-5 w-5 stroke-current" fill="none" viewBox="0 0 64 64"  stroke-width="2"*/}
                  </label>
                  {/*<label tabIndex={0} className="btn btn-ghost rounded-btn">Dropdown</label>*/}
                  {/*<ul tabIndex={0} className="menu dropdown-content    bg-primary-content text-primary  shadow bg-base-100 rounded-box mx-auto w-72 mt-4 p-0">*/}

                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">

                      {pages.map( (p) => (
                          <li key={p.id}>
                              <Link href={p.slug}>{p.title}</Link>
                          </li>
                      ))}



                  </ul>
              </div>
          </div>
      </div>
  )


};

export default Navbar;
