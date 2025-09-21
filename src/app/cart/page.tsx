export default function Cart() {
  return (
    <main className="min-h-[100svh] md:min-h-[100dvh] bg-black text-white font-serif flex flex-col justify-between" style={{ fontFamily: "Georgia, Times, 'Times New Roman', serif" }}>
      <section className="max-w-2xl mx-auto w-full pt-20 pb-8 px-4">
        <h1 className="text-3xl md:text-4xl font-normal mb-6 tracking-wide">Shopping Cart</h1>
        <p className="mb-8 text-lg">You have nothing in your shopping cart.</p>
        <a href="/shop" className="inline-block px-8 py-3 bg-neutral-400 text-black rounded font-serif text-lg mb-12 hover:opacity-80 transition">Continue Shopping</a>
      </section>
      <footer className="w-full flex flex-col items-center py-12 px-4 border-t border-neutral-800">
        <h2 className="text-2xl font-serif mb-2">NOBILLS</h2>
        <p className="mb-4 text-center">Sign up with your email address to receive news and updates.</p>
        <form className="w-full max-w-sm flex flex-col items-center gap-3 mb-4">
          <input type="email" required placeholder="Email Address" className="flex-1 px-4 py-2 rounded-l bg-neutral-900 text-white border border-neutral-700 focus:outline-none" />
          <button type="submit" className="px-5 py-2 rounded-r bg-neutral-400 text-black font-medium hover:opacity-80 transition">Sign Up</button>
        </form>
        <nav className="flex gap-8 justify-center items-center text-base font-serif tracking-wide mt-2">
          <a href="/about" className="hover:underline underline-offset-4 transition">About</a>
          <a href="/contact" className="hover:underline underline-offset-4 transition">Contact</a>
          <a href="#" className="hover:underline underline-offset-4 transition">Follow</a>
        </nav>
      </footer>
    </main>
  );
}
