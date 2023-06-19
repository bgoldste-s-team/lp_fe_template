
import Link from "next/link";


const FeaturedPages = ({pages}) => {
    console.log(pages)
    return (
  <div>
      <h1>Featured Pages:</h1>
      <ul>
          {pages.map((page) => (
              <li key={page.id}>
                  <Link href={page.slug}>{page.title}</Link>
                  <p>{page.page_description}</p>
              </li>
          ))}
      </ul>
  </div>
    );
};
export default FeaturedPages;
