import Image from 'next/image'
import { Inter } from 'next/font/google'
import reviewData from '../data/review_data.json';
import Navbar from '../components/Navbar'
import Layout from "../components/Layout"
const inter = Inter({ subsets: ['latin'] })

const Index = () => {
    const posts = reviewData.posts
    return (
        <Layout>


           <h1>My BLog23</h1>
           <button class="btn btn-primary">hello</button>
           <ul>
           { posts.map((p) =>
               <li key={p.id}>
                  <a href={p.slug}>
                      <article class="prose lg:prose-xl">
                        <h1>i{p.title}</h1>
                        <img src={p.product.thumbnail} />
                        <p>d:{p.id} pid:{p.product.id}  </p>
                        <p>{p.content.slice(0,1250)}...</p>
                    </article>
                    </a>
               </li>

           )}
           </ul>

        </Layout>
    )
};
export default Index;