import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-11/12 max-w-[600px] sm:max-w-[800px] md:max-w-[1000px]">
        <Image
          src="/nobillspnglogo.png"
          alt="NOBILLS Logo"
          width={1000} // max width
          height={1000} // max height
          className="w-full h-auto"
          priority
        />
      </div>
    </main>
  );
}
