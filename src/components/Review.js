import reviewData from '../data/review_data.json';
import siteData from '../data/site_data.json';
import guideData from '../data/sc_data.json';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import ProductBank from "@/components/ProductBank";
import RelatedContent from "@/components/RelatedContent";
const Review = ({post}) => {

    // const reviews = reviewData.posts;
    // const guides = guideData.posts;
    //
    // console.log(guides)
    console.log(post)
    return (

        <div className="flow-root">
            <article className="prose md:prose-md p-4">
                <h1>REVIEW {post.title}</h1>
                <img src={post.product?.thumbnail} />
                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
                <ProductBank products={[{product: post.product},]}/>
                <RelatedContent />

                {/*<button class="btn btn-primary"><a href={post.product.url} target='blank'>Buy on Amazon for {post.product.price}</a></button>*/}
            </article>


        </div>


    )
}
export default Review;

