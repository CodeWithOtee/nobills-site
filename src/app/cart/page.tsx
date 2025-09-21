import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Cart() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Order form state
  const [orderEmail, setOrderEmail] = useState("");
  const [orderProduct, setOrderProduct] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderError, setOrderError] = useState("");
  const [orderLoading, setOrderLoading] = useState(false);

  async function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    const { error } = await supabase.from("newsletter").insert([{ email }]);
    if (error) {
      setError("Failed to sign up. Please try again.");
    } else {
      setSuccess(true);
      setEmail("");
    }
    setLoading(false);
  }

  async function handleOrderSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOrderLoading(true);
    setOrderError("");
    setOrderSuccess(false);
    const { error } = await supabase.from("orders").insert([
      { email: orderEmail, product: orderProduct }
    ]);
    if (error) {
      setOrderError("Failed to place order. Please try again.");
    } else {
      setOrderSuccess(true);
      setOrderEmail("");
      setOrderProduct("");
    }
    setOrderLoading(false);
  }

  return (
    <main className="min-h-[100svh] md:min-h-[100dvh] bg-black text-white font-serif flex flex-col justify-between" style={{ fontFamily: "Georgia, Times, 'Times New Roman', serif" }}>
      <section className="max-w-2xl mx-auto w-full pt-20 pb-8 px-4">
        <h1 className="text-3xl md:text-4xl font-normal mb-6 tracking-wide">Shopping Cart</h1>
        <p className="mb-8 text-lg">You have nothing in your shopping cart.</p>
        <a href="/shop" className="inline-block px-8 py-3 bg-neutral-400 text-black rounded font-serif text-lg mb-12 hover:opacity-80 transition">Continue Shopping</a>
        {/* Simple Order Form */}
        <form className="w-full max-w-sm flex flex-col items-center gap-3 mb-8" onSubmit={handleOrderSubmit}>
          <input
            type="email"
            required
            placeholder="Your Email"
            className="flex-1 px-4 py-2 rounded bg-neutral-900 text-white border border-neutral-700 focus:outline-none"
            value={orderEmail}
            onChange={e => setOrderEmail(e.target.value)}
            disabled={orderLoading}
          />
          <input
            type="text"
            required
            placeholder="Product Name"
            className="flex-1 px-4 py-2 rounded bg-neutral-900 text-white border border-neutral-700 focus:outline-none"
            value={orderProduct}
            onChange={e => setOrderProduct(e.target.value)}
            disabled={orderLoading}
          />
          <button
            type="submit"
            className="px-5 py-2 rounded bg-neutral-400 text-black font-medium hover:opacity-80 transition"
            disabled={orderLoading}
          >
            {orderLoading ? "Placing Order..." : "Place Order"}
          </button>
        </form>
        {orderSuccess && <p className="text-green-400 mb-2">Order placed successfully!</p>}
        {orderError && <p className="text-red-400 mb-2">{orderError}</p>}
      </section>
      <footer className="w-full flex flex-col items-center py-12 px-4 border-t border-neutral-800">
        <h2 className="text-2xl font-serif mb-2">NOBILLS</h2>
        <p className="mb-4 text-center">Sign up with your email address to receive news and updates.</p>
        <form className="w-full max-w-sm flex flex-col items-center gap-3 mb-4" onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            required
            placeholder="Email Address"
            className="flex-1 px-4 py-2 rounded-l bg-neutral-900 text-white border border-neutral-700 focus:outline-none"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            className="px-5 py-2 rounded-r bg-neutral-400 text-black font-medium hover:opacity-80 transition"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        {success && <p className="text-green-400 mb-2">Thank you for signing up!</p>}
        {error && <p className="text-red-400 mb-2">{error}</p>}
        <nav className="flex gap-8 justify-center items-center text-base font-serif tracking-wide mt-2">
          <a href="/about" className="hover:underline underline-offset-4 transition">About</a>
          <a href="/contact" className="hover:underline underline-offset-4 transition">Contact</a>
          <a href="#" className="hover:underline underline-offset-4 transition">Follow</a>
        </nav>
      </footer>
    </main>
  );
}
