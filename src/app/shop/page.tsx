import Image from "next/image";

const products = [
  { id: 1, name: "Black Shirt", image: "/product1black.png", price: "$50" },
  { id: 2, name: "White Shirt", image: "/Product2white.png", price: "$55" },
  { id: 3, name: "Black Shirt 2", image: "/product1black.png", price: "$60" },
  { id: 4, name: "White Shirt 2", image: "/Product2white.png", price: "$65" },
];

export default function Shop() {
  return (
    <main className="min-h-screen bg-orange-400 p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        Catalogue
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-auto"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
