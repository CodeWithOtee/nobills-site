
import Image from "next/image";

const productData: Record<string, { name: string; price: string; image: string }> = {
  product1black: { name: "Black Shirt", price: "$50", image: "/product1black.png" },
  product2white: { name: "White Shirt", price: "$50", image: "/product2white.png" },
  // Add more products if needed, matching the catalogue
};

export default function Page({ params }: { params: { id: string } }) {
  const product = productData[params.id];

  if (!product) {
    return <p className="text-center mt-20">Product not found</p>;
  }

  return (
    <div className="min-h-screen bg-orange-500 flex flex-col items-center justify-center p-8 relative">
      {/* Top bar */}
      <div className="w-full flex justify-end items-start px-8 pt-6 absolute top-0 left-0 z-10">
        <div className="flex gap-6">
          <a href="/shop" className="text-white text-[18px] font-semibold hover:underline">Shop</a>
          <a href="/cart" className="text-white text-[18px] font-semibold hover:underline">Cart</a>
          <a href="/about" className="text-white text-[18px] font-semibold hover:underline">About Us</a>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-white mb-8">{product.name}</h1>
      <Image src={product.image} alt={product.name} width={400} height={400} />
      <p className="mt-4 text-2xl font-semibold text-white">{product.price}</p>
    </div>
  );
}

