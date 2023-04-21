import ProductLink from "@/components/ProductLink"
import guideData from "@/data/sc_data.json";
import Link from "next/link";
import Image from "next/image";

const formatSlug = (url) => {
    return "/" + url;
}
export default function ContentCard({content  }) {
    // console.log(content)

    const thumbnail = content?.products?.[0]?.product?.thumbnail;
    console.log("THUMBNAIL?", thumbnail)
    // console.log(content.products[0])
    const guides = guideData.posts;
    return (
        <div className="bg-primary p-10">
            <h4 className="primary-content"><Link href={formatSlug(content.slug)}>{content.title}</Link></h4>
            <Image src={thumbnail}
                   alt={content.title}
                   width="0"
                   height="0"
                   sizes="100vw"
                   className="h-32 w-32 "></Image>
            <p> {content.content.slice(0,250) }...</p>

            <Link href={formatSlug(content.slug)}><btn className="btn btn-secondary">Check It Out</btn></Link>

        </div>
    )
}