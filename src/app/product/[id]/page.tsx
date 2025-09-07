import Image from "next/image";

const productData: Record<string, { name: string; price: string; image: string }> = {
  product1black: { name: "Black Shirt", price: "$50", image: "/product1black.png" },
  product2white: { name: "White Shirt", price: "$50", image: "/product2white.png" },
};

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = productData[params.id];

  if (!product) return <p className="text-center mt-20 text-white">Product not found</p>;

  return (
    <div className="min-h-screen bg-orange-500 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-white mb-8">{product.name}</h1>
      <Image src={product.image} alt={product.name} width={400} height={400} />
      <p className="mt-4 text-2xl font-semibold text-white">{product.price}</p>
    </div>
  );
}
