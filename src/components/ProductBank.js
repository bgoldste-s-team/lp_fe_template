import ProductLink from "@/components/ProductLink"
export default function ProductBank({ products }) {
    console.log(products)
    return (
        <div className="bg-primary-content/20 p-10">
            <h1>Product Bank</h1>
            { products.map((p) =>
                <ProductLink product={p.product} />
            )}
        </div>
    )
}