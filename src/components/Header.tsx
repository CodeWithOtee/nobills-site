import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-6 bg-black text-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-4xl font-serif tracking-wide" style={{ fontFamily: "Georgia, Times, 'Times New Roman', serif" }}>
          NOBILLS
        </span>
      </div>
      {/* Navigation */}
      <nav className="flex items-center gap-8 text-xl font-serif">
        <Link href="/" className="hover:underline underline-offset-4 transition">Home</Link>
        <Link href="/shop" className="hover:underline underline-offset-4 transition">Shop</Link>
        <Link href="/about" className="hover:underline underline-offset-4 transition">About</Link>
        <Link href="/contact" className="hover:underline underline-offset-4 transition">Contact</Link>
        <Link href="/login" className="hover:underline underline-offset-4 transition">Login</Link>
      </nav>
      {/* Cart Icon */}
      <div className="flex items-center gap-2">
        <Link href="/cart" className="relative">
          <Image src="/window.svg" alt="Cart" width={32} height={32} />
          <span className="absolute -top-2 -right-4 text-lg font-serif">0</span>
        </Link>
      </div>
    </header>
  );
}
