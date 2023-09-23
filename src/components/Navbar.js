
// import Link from "next/link";
// import {FaBars} from "react-icons/fa6";

// const Navbar = ({site}) => {


//   // const { siteName, siteImgUrl }  = useContext(AppContext);
//   const siteName = site.name

//     console.log(site)
//     console.log(site.pages)
//     const pages = site.pages;
//     console.log(pages)
//     const determineFontSize = (text) => {
//       const length = text.length;

//       if (length < 10) return 'text-2xl';
//       if (length < 20) return 'text-xl';
//       if (length < 30) return 'text-base';
//       return 'text-md';
//   };
//     const dynamicFontSize = determineFontSize(siteName);
//   return (



//       <div className="navbar bg-base-100 z-50 top-0 sticky">

//   <div className="navbar-start ">
//     <div className='break-words py-2'>
//     <Link href="/" className={`text-left btn btn-ghost normal-case ${dynamicFontSize}  `}>
//     {siteName}</Link>
//     </div>
//   </div>
//   <div className="navbar-end">
//     <div className="dropdown dropdown-end">
//       <label tabIndex={0} className="btn btn-primary btn-outline">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
//       </label>
//       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

//                       <li key={'home'}>
//                           <Link href="/">Home</Link>
//                       </li>
//                       {pages.filter(p => p.show_in_navbar === true && !p.is_homepage).map( (p) => (
//                           <li key={p.id}>
//                               <Link href={p.slug}>{p.title}</Link>
//                           </li>
//                       ))}
//                         <li key={'search'}>
//                           <Link href="/search">Search</Link>
//                       </li>



       
//       </ul>
//     </div>
//   </div>
  
// </div>


//   )


// };

// export default Navbar;
import Link from "next/link";

const Navbar = ({ site }) => {
    const siteName = site.name;
     const pages = site.pages;
        const determineFontSize = (text) => {
        const length = text.length;

        if (length < 10) return 'text-2xl leading-snug';
        if (length < 20) return 'text-xl leading-snug';
        if (length < 30) return 'text-base leading-snug';
        return 'text-md leading-snug';
    };
    const dynamicFontSize = determineFontSize(siteName);

    return (
     <div className="navbar bg-base-100 z-50 top-0 sticky flex items-center">
            <div className="navbar-start sm:pb-0">
                <div className=" break-words py-4 ">
                    <Link href="/"className={`text-left btn btn-ghost normal-case   ${dynamicFontSize}`}>
                            {siteName}
                     
                    </Link>
                </div>
            </div>
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-primary btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                                <li key={'home'}>
                                    <Link href="/">Home</Link>
                                </li>
                                {pages.filter(p => p.show_in_navbar === true && !p.is_homepage).map( (p) => (
                                    <li key={p.id}>
                                        <Link href={p.slug}>{p.title}</Link>
                                    </li>
                                ))}
                                  <li key={'search'}>
                                    <Link href="/search">Search</Link>
                                </li>

                                { site.show_contact_form &&  <li key={'contact'}>
                                    <Link href="/contact">Contact</Link>
                                </li> }



                 
                </ul>
          
            </div>
            
          </div>
        </div>
    )
};

export default Navbar;


