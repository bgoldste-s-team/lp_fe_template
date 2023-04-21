import Image from "next/image";
import Link from "next/link";
import reviewData from "@/data/review_data.json";
export default function ProductLink({ product}) {
    const review = reviewData.posts.find((r) => r.product.id === product.id)
    const slug = review?.slug;
    console.log(review)
    return (


        <div className="flex items-center gap-x-6">
            <Image src={product.thumbnail}   width="0"
                           height="0"
                           sizes="100vw"
                           className="h-32 w-32 "></Image>
            {/*<img className="h-16 w-16 rounded-full"*/}
            {/*     src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
            {/*     alt="" />*/}
                <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{product.name}</h3>
                    {/*<p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>*/}
                    { slug ?
                    <Link className="p-4" href={slug}>Read review</Link>
                        : null }
                    <button  className='btn btn-primary'><Link href={product.url}>Buy Now {!product.price.includes("None") ? "for " + product.price: null}</Link></button>
                </div>
        </div>


    )
}