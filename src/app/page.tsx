import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white">
      <Link href="/shop">
        <div className="w-11/12 max-w-[600px] sm:max-w-[800px] md:max-w-[1000px] cursor-pointer">
          <Image
            src="/nobillspnglogo.png"
            alt="NOBILLS Logo"
            width={1000}
            height={1000}
            className="w-full h-auto"
            priority
          />
        </div>
      </Link>
    </main>
  );
}
