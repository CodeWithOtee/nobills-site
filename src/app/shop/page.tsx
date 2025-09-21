// src/app/shop/page.tsx
import Image from "next/image";
import Link from "next/link";

const products = [
  { id: "product1black", name: "Black Shirt", price: "$50", image: "/product1black.png" },
  { id: "product2white", name: "White Shirt", price: "$50", image: "/product2white.png" },
];

export default function Shop() {
  return (
    <main className="min-h-[100svh] md:min-h-[100dvh] bg-white text-black font-serif" style={{ fontFamily: "Georgia, Times, 'Times New Roman', serif" }}>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-normal text-center mb-8 tracking-wide">Shop</h1>
        {/* Filter tabs */}
        <div className="flex justify-center items-center gap-8 mb-8 text-lg">
          <span className="cursor-pointer underline underline-offset-4">All</span>
          <span className="cursor-pointer text-black/60">Tees</span>
        </div>
        <hr className="border-t border-black/10 mb-12" />
        {/* Product grid */}
        <div className="flex flex-wrap justify-center gap-12">
          <div className="flex flex-col items-center">
            <Image src="/product1black.png" alt="Black Shirt" width={260} height={260} className="object-contain" />
          </div>
          <div className="flex flex-col items-center">
            <Image src="/product2white.png" alt="White Shirt" width={260} height={260} className="object-contain" />
          </div>
          <div className="flex flex-col items-center">
            <Image src="/blacknobillsboldtripple.png" alt="NOBILLS Bold Shirt" width={260} height={260} className="object-contain" />
          </div>
        </div>
      </section>
    </main>
  );
}
