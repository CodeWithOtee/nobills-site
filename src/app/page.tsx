import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <Image
          src="/nobillspnglogo.png" // must match the exact file name
          alt="NOBILLS Logo"
          width={300}
          height={300}
          priority
        />
        <h1 className="mt-6 text-4xl font-bold text-gray-800">
          🚀 Welcome to NOBILLS
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Simplicity. Efficiency. Innovation.
        </p>
      </div>
    </main>
  );
}
