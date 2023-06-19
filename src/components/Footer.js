
import Link from "next/link";


const Footer = ({site, pages}) => {
  return (
    <footer className="footer p-10 bg-secondary text-secondary-content">
    <h1>{site.name}</h1>
      <ul>
    {pages.map((page) => (
      <li key={page.id}>
      <Link href={page.slug}>{page.title}</Link>
      <p>{page.page_description}</p>
      </li>
    ))}
  </ul>

    </footer>
  );
};
export default Footer;
