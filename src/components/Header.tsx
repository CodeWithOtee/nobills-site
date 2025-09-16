import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-end px-4 py-4 bg-black text-white">
      {/* Right: Nav + Cart grouped tight */}
      <div className="flex items-center gap-4 md:gap-6">
        <nav className="hidden sm:flex items-center gap-4 md:gap-6 text-base md:text-lg font-serif">
          <Link href="/" className="hover:underline underline-offset-4 transition">Home</Link>
          <Link href="/shop" className="hover:underline underline-offset-4 transition">Shop</Link>
          <Link href="/about" className="hover:underline underline-offset-4 transition">About</Link>
          <Link href="/contact" className="hover:underline underline-offset-4 transition">Contact</Link>
          <Link href="/login" className="hover:underline underline-offset-4 transition">Login</Link>
        </nav>
        <Link href="/cart" className="relative inline-flex items-center justify-center">
          <Image src="/window.svg" alt="Cart" width={28} height={28} />
          <span className="absolute -top-2 -right-3 text-sm md:text-base font-serif">0</span>
        </Link>
      </div>
    </header>
  );
}
