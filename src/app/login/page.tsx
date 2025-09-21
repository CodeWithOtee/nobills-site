
import RotatingLogoRing from "@/components/RotatingLogoRing";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [mode, setMode] = useState<'signin' | 'signup'>("signin");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message);
      else setSuccess("Signed in successfully!");
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setError(error.message);
      else setSuccess("Account created! Check your email to confirm.");
    }
    setLoading(false);
  }

  return (
    <main className="relative min-h-[100svh] md:min-h-[100dvh] bg-transparent flex items-center justify-center font-serif" style={{ fontFamily: "Georgia, Times, 'Times New Roman', serif" }}>
      {/* Logo ring background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 z-0">
        <div style={{ width: 'min(90vw,420px)', height: 'min(90vw,420px)', maxWidth: 420, maxHeight: 420 }}>
          <RotatingLogoRing />
        </div>
      </div>
      <section className="relative z-10 w-full max-w-md mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-normal text-center mb-8 tracking-wide">Welcome to NOBILLS</h1>
        <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full px-4 py-3 border-2 border-gray-400 rounded text-lg font-serif mb-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="w-full px-4 py-3 border-2 border-gray-400 rounded text-lg font-serif mb-2"
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={loading}
          />
          <button type="submit" className="w-full px-4 py-3 bg-neutral-800 text-white rounded font-serif text-lg hover:opacity-80 transition" disabled={loading}>
            {loading ? (mode === "signin" ? "Signing in..." : "Creating account...") : (mode === "signin" ? "Sign in" : "Create account")}
          </button>
        </form>
        {error && <p className="text-red-400 mt-4">{error}</p>}
        {success && <p className="text-green-400 mt-4">{success}</p>}
        <div className="flex justify-between w-full mt-6 text-base">
          <a href="#" className="text-white hover:underline">Forgot Password?</a>
          <button
            className="text-white hover:underline bg-transparent border-none cursor-pointer"
            style={{ padding: 0 }}
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            type="button"
          >
            {mode === "signin" ? "Create account" : "Sign in"}
          </button>
        </div>
      </section>
    </main>
  );
}
