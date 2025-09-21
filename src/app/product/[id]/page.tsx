
import Image from "next/image";

const productData: Record<string, { name: string; price: string; image: string }> = {
  product1black: { name: "Black Shirt", price: "$50", image: "/product1black.png" },
  product2white: { name: "White Shirt", price: "$50", image: "/product2white.png" },
  // Add more products if needed, matching the catalogue
};

export default function Page({ params }: { params: { id: string } }) {
  const product = productData[params.id];

  if (!product) {
    return <p className="text-center mt-20 font-serif text-lg">Product not found</p>;
  }

  return (
    <main className="min-h-[100svh] md:min-h-[100dvh] bg-white text-black font-serif flex items-center justify-center" style={{ fontFamily: "Georgia, Times, 'Times New Roman', serif" }}>
      <section className="w-full max-w-2xl mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <Image src={product.image} alt={product.name} width={340} height={340} className="object-contain mb-8" />
        <h1 className="text-3xl md:text-4xl font-normal text-center mb-4 tracking-wide">{product.name}</h1>
        <p className="text-xl md:text-2xl text-center font-semibold mb-8">{product.price}</p>
        {/* Add to Cart button or details can go here */}
      </section>
    </main>
  );
}

