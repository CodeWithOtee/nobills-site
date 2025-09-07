import Image from "next/image";
import Link from "next/link";

const products = [
  { id: "1", name: "Black Shirt", image: "/product1black.png", price: "$50" },
  { id: "2", name: "White Shirt", image: "/Product2white.png", price: "$55" },
  { id: "3", name: "Black Shirt 2", image: "/product1black.png", price: "$60" },
  { id: "4", name: "White Shirt 2", image: "/Product2white.png", price: "$65" },
];

export default function Shop() {
  return (
    <main className="min-h-screen bg-orange-400 py-12 px-4 sm:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">
        CATALOGUE
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer">
              <div className="p-4 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-700">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
