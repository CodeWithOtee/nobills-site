import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex items-center justify-center">
        <Image
          src="/nobillspnglogo.png" // make sure this matches your file name
          alt="NOBILLS Logo"
          width={600}  // bigger width
          height={600} // bigger height
          priority
        />
      </div>
    </main>
  );
}
