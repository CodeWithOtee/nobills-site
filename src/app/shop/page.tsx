// src/app/catalogue/page.tsx
import Image from "next/image";
import Link from "next/link";

const products = [
  { id: "product1black", name: "Black Shirt", price: "$50", image: "/product1black.png" },
  { id: "product2white", name: "White Shirt", price: "$50", image: "/product2white.png" },
  { id: "product1black", name: "black Shirt", price: "$50", image: "/product1black.png" },
  { id: "product2white", name: "white Shirt", price: "$50", image: "/product2white.png" },
];

export default function Catalogue() {
  return (
    <div className="min-h-screen bg-orange-500 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">Catalogue</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="bg-white p-4 rounded-lg shadow hover:scale-105 transition-transform cursor-pointer">
              <Image src={product.image} alt={product.name} width={250} height={250} />
              <h2 className="mt-2 font-semibold text-center">{product.name}</h2>
              <p className="text-center">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
