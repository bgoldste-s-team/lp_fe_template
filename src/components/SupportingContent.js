import reviewData from '../data/review_data.json';
import siteData from '../data/site_data.json';
import guideData from '../data/sc_data.json';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
const SupportingContent = ({post}) => {
    // const reviews = reviewData.posts;
    // const guides = guideData.posts;
    //
    // console.log(guides)
    console.log(post)
    return (
        <div>
            <Navbar/>
            <div className="flow-root">
                <article className="prose md:prose-md">
                    <h1>{post.title}</h1>
                    <img src={post.products[0].product.thumbnail} />

                    {
                        post.content.split('\n').map((line) =>

                            <p key={line.slice(0, 10)}>{line}</p>
                        )
                    }
                        {/*<button class="btn btn-primary"><a href={post.product.url} target='blank'>Buy on Amazon for {post.product.price}</a></button>*/}
                </article>


            </div>
            <Footer />
        </div>

    )
}
export default SupportingContent;

