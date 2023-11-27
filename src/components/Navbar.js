import Link from "next/link";

const Navbar = ({ site }) => {
  const siteName = site.name;
  const pages = site.pages;

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start w-full">
        <div className="">
          <Link
            href="/"
            className="text-left normal-case text-lg sm:text:2xl md:text-3xl  text-base-content"
          >
            {siteName}
          </Link>
        </div>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-base-content"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li key={"home"}>
              <Link href="/">Home</Link>
            </li>

            {pages
              .filter((p) => p.show_in_navbar === true && !p.is_homepage)
              .map((p) => (
                <li key={p.id}>
                  <Link href={p.slug}>{p.title}</Link>
                </li>
              ))}

            <li key={"search"}>
              <Link href="/search">Search</Link>
            </li>

            {site.show_contact_form && (
              <li key={"contact"}>
                <Link href="/contact">Contact</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
