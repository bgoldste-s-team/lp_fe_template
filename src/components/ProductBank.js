import AmazonProductCard from "@/components/AmazonProductCard";

export default function ProductBank({ products , site}) {
  console.log(products);
  if (products.length < 1 ) {
    return null;
  }

  if (site.ad_level !== 'full_ads') {
    return null;
  }
  return (
    <div className="bg-primary-content py-2">
      <h2 className="text-center text-3xl p-2">You Might Like..</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2">
      {products.map((p) => (
        <AmazonProductCard key={p.id} product={p} />
      ))}

    </div>

    </div>
  );
} 
