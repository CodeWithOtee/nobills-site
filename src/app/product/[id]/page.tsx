import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const products = [
  { id: "1", name: "Black Shirt", image: "/product1black.png", price: "$50" },
  { id: "2", name: "White Shirt", image: "/Product2white.png", price: "$55" },
  { id: "3", name: "Black Shirt 2", image: "/product1black.png", price: "$60" },
  { id: "4", name: "White Shirt 2", image: "/Product2white.png", price: "$65" },
];

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);

  if (!product)
    return <p className="p-8 text-center text-white">Product not found.</p>;

  return (
    <main className="min-h-screen bg-orange-400 flex flex-col items-center justify-center p-8">
      <Link
        href="/shop"
        className="text-white mb-6 underline hover:text-gray-200"
      >
        ← Back to Catalogue
      </Link>
      <h1 className="text-4xl font-bold mb-6 text-white">{product.name}</h1>
      <Image
        src={product.image}
        alt={product.name}
        width={600}
        height={600}
        className="rounded-xl shadow-lg mb-6"
      />
      <p className="text-white text-2xl mb-6">{product.price}</p>
      <button className="bg-white text-orange-500 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
        Add to Cart
      </button>
    </main>
  );
}
