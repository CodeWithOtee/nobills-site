import Image from "next/image";
import { useParams } from "next/navigation";

const products = [
  { id: "product1black", name: "Black Shirt", price: "$50", image: "/product1black.png" },
  { id: "Product2white", name: "White Shirt", price: "$50", image: "/product2white.png" },
  { id: "product1black", name: "Black Shirt", price: "$50", image: "/product1black.png" },
  { id: "Product2white", name: "White Shirt", price: "$50", image: "/product2white.png" },
];

export default function ProductPage() {
  const params = useParams();
  const product = products.find(p => p.id === params.id);

  if (!product) return <div className="text-center mt-20">Product not found</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-500 p-8">
      <h1 className="text-4xl font-bold mb-8">{product.name}</h1>
      <Image src={product.image} alt={product.name} width={400} height={400} />
      <p className="text-2xl mt-4">{product.price}</p>
    </div>
  );
}
