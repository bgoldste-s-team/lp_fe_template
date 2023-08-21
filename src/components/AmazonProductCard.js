import Image from "next/image";
import Link from "next/link";
import reviewData from "@/data/review_data.json";
import formatSlug from "@/lib/formatSlug";
import {
   FaCartShopping

} from "react-icons/fa6";
export default function AmazonProductCard({ product }) {
  console.log(product)
  return (
<div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={product.thumbnail_image} alt="Album" className=' p-4'/></figure>
  <div className="card-body">
    <h2 className="card-title">{product.product_name}</h2>
    <p>{product.brand}</p>
    {/*<p>{product.product_description?}</p>*/}
    { product.price_value && 
    <div className='badge badge-success'>${product.price_value}</div>
  }
    <div className="card-actions justify-end">
      <Link href={product.url} className="btn btn-primary">
     Buy Now
        <span> 
          <FaCartShopping className='mx-1'/>
        </span >
       
      </Link>
    </div>
  </div>
</div>




    
  );
}


 // <div className="bg-secondary-content text-secondary card card-compact bg-base-100 shadow-xl ">
 //      <figure>
 //        <Image
 //          src={product.thumbnail_image}
 //          alt={product.name}
 //          width="0"
 //          height="0"
 //          sizes="100vw"
 //          className="h-48 w-48 "
 //        ></Image>
 //      </figure>
 //        <div className="card-body ">
 //            <div className="card-title ">
 //              <h2 className="prose-md text-neutral-content">
 //                <Link className="text-neutral" href={product.url}>{product.product_name}</Link>
 //              </h2>
 //            </div>
 //            <div className="card-actions grid grid-cols-2">
                
 //                    <Link className="btn-link btn" href={'asdf'}>
 //                        Read review
 //                    </Link>
                
 //                <button className="btn btn-primary">
 //                  <Link href={product.url}>
 //                    Buy Now{" "}
                   
 //                  </Link>
 //                </button>



 //          </div>
 //        </div>
 //    </div>