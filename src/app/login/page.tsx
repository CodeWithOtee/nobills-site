import RotatingLogoRing from "@/components/RotatingLogoRing";

export default function Login() {
  return (
    <main className="relative min-h-[100svh] md:min-h-[100dvh] bg-white flex items-center justify-center font-serif" style={{ fontFamily: "Georgia, Times, 'Times New Roman', serif" }}>
      {/* Logo ring background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 z-0">
        <div style={{ width: 'min(90vw,420px)', height: 'min(90vw,420px)', maxWidth: 420, maxHeight: 420 }}>
          <RotatingLogoRing />
        </div>
      </div>
      <section className="relative z-10 w-full max-w-md mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-normal text-center mb-8 tracking-wide">Welcome to NOBILLS</h1>
        <form className="w-full flex flex-col gap-6">
          <input type="email" required placeholder="Email" className="w-full px-4 py-3 border-2 border-gray-400 rounded text-lg font-serif mb-2" />
          <input type="password" required placeholder="Password" className="w-full px-4 py-3 border-2 border-gray-400 rounded text-lg font-serif mb-2" />
          <button type="submit" className="w-full px-4 py-3 bg-neutral-800 text-white rounded font-serif text-lg hover:opacity-80 transition">Sign in</button>
        </form>
        <div className="flex justify-between w-full mt-6 text-base">
          <a href="#" className="text-black/70 hover:underline">Forgot Password?</a>
          <a href="#" className="text-black/70 hover:underline">Create account</a>
        </div>
      </section>
    </main>
  );
}
