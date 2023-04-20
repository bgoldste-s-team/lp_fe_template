import blogData from '../data/blog_data.json';

export async function getStaticPaths() {
    const posts = blogData.posts
    const paths = posts.map((post) => ({
        params: {slug: post.slug, data: "hello"},
    }))

    // console.log(posts)
    // console.log("asdfasdf", paths)
    // debugger;
    // const paths =
    return {
        // paths: [{ params: { slug: '1' } }, { params: { slug: '2' } }],
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
    // console.log(context)
    const slug = context.params.slug;
    // console.log(context)
    const post = blogData.posts.find((post) => post.slug === slug)
    // console.log(slug)
    // // console.log(posts)
    console.log("slug", slug, "post", post)


    return {
        // Passed to the page component as props
        props: { post: post },
    }
}

export default function Post({ post }) {
    // Render post...
    console.log(post)
    return(
        // post.title)


    <div class="flow-root">
        <article class="prose md:prose-md">
            <h1>{post.title}</h1>
            <img src={post.product.thumbnail} />

           {
                post.content.split('\n').map( (line) => 
                   
                    <p>{line}</p>

                   

                )
            }
        </article>
        <button class="btn btn-primary"><a href={post.product.url} target='blank'>{post.product.name}</a></button>
        
    </div>
    )
}