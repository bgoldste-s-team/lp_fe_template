import AmazonProductCard from "@/components/AmazonProductCard";

export default function ProductBank({ products }) {
  console.log(products);
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
