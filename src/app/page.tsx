// src/app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-100 relative">
      {/* Top bar */}
      <div className="w-full flex justify-between items-start px-8 pt-6 absolute top-0 left-0">
        <span className="text-gray-700 text-[18px] font-semibold">Welcome Home</span>
        <div className="flex gap-6">
          <a href="/shop" className="text-gray-700 text-[18px] font-semibold hover:underline">Shop</a>
          <a href="/cart" className="text-gray-700 text-[18px] font-semibold hover:underline">Cart</a>
          <a href="/about" className="text-gray-700 text-[18px] font-semibold hover:underline">About Us</a>
        </div>
      </div>
      {/* Centered logo */}
      <div className="flex flex-1 items-center justify-center w-full h-screen">
        <div className="text-center">
          <Image
            src="/nobillspnglogo.png"
            alt="NOBILLS logo"
            width={320}
            height={320}
            priority
          />
          <p className="mt-6 text-sm text-gray-600">Welcome to NOBILLS</p>
        </div>
      </div>
    </main>
  );
}
