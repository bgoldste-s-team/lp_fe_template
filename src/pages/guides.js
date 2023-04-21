import reviewData from '../data/review_data.json';
import siteData from '../data/site_data.json';
import guideData from '../data/sc_data.json';
import Navbar from '../components/Navbar';

const GuideIndex = ({guides}) => {
  const reviews = reviewData.posts;
  // const guides = guideData.posts;
  console.log(guides)
  return (
    <div>
      <Navbar />
        <h1>Guides</h1>
        { guides.map((g) => <p key={g.title.slice(0,10)}>{g.title}</p>)}
        </div>
        )
};


export async function getStaticProps(context) {
    const guides = guideData.posts;
    // const posts = reviewData.posts;
    // const combinedData = posts.concat(guides);

    // const slug = context.params.slug;
    
    // const post = combinedData.find((post) => post.slug === slug)
    // console.log(slug)
    // // console.log(posts)
    // console.log("slug", slug, "post", post)


    return {
        // Passed to the page component as props
        props: { guides: guides },
    }
}
export default GuideIndex;