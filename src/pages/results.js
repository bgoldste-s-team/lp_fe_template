import { useRouter } from 'next/router';
import reviewData from "@/data/review_data.json";
import ContentCard from "@/components/ContentCard";
export default function Results() {



    const router = useRouter();
    const { traits } = router.query;
    const traitsArray = traits ? traits.split(',') : [];

    // Filter posts based on the selected traits
    const filteredPosts = reviewData.posts.filter(post =>
        traitsArray.some(trait => post.content.toLowerCase().includes(trait.toLowerCase()))
    );

    // TODO: Replace this with your actual UI
    return (
        <div>
            <h1>Results</h1>
            {filteredPosts.map(post => (
                <li className="card" key={post.id}>
                    <ContentCard content={post} />
                </li>
                // <div key={post.id}>
                //     <h2>{post.title}</h2>
                //     <p>{post.content}</p>
                // </div>
            ))}
        </div>
    );
}