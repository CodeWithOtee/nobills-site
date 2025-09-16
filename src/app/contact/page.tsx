import RotatingLogoRing from "@/components/RotatingLogoRing";

export default function Contact() {
  return (
    <main className="relative bg-black text-white min-h-[100svh] md:min-h-[100dvh] flex items-center justify-center">
      {/* Logo ring background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 z-0">
        <div style={{ width: 'min(90vw,420px)', height: 'min(90vw,420px)', maxWidth: 420, maxHeight: 420 }}>
          <RotatingLogoRing />
        </div>
      </div>
      <section className="relative z-10 w-full flex flex-col md:flex-row items-start justify-center gap-12 px-4 py-16 max-w-6xl mx-auto">
        {/* Left: Contact info */}
        <div className="flex-1 min-w-[260px] max-w-md text-left font-serif" style={{ fontFamily: "Georgia, Times, 'Times New Roman', serif" }}>
          <h1 className="text-3xl md:text-4xl font-normal mb-8 tracking-wide">Contact</h1>
          <div className="mb-8">
            <div className="text-2xl md:text-3xl mb-2">email@example.com</div>
            <div className="text-2xl md:text-3xl mb-6 underline">(555) 555-5555</div>
          </div>
        </div>
        {/* Right: Contact form */}
        <form className="flex-1 min-w-[260px] max-w-xl space-y-6 font-serif" style={{ fontFamily: "Georgia, Times, 'Times New Roman', serif" }}>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm">First Name <span className="text-xs text-white/60">(required)</span></label>
              <input type="text" required className="w-full px-3 py-2 bg-black border border-white text-white rounded" />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-sm">Last Name</label>
              <input type="text" className="w-full px-3 py-2 bg-black border border-white text-white rounded" />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm">Email <span className="text-xs text-white/60">(required)</span></label>
            <input type="email" required className="w-full px-3 py-2 bg-black border border-white text-white rounded" />
          </div>
          <div>
            <label className="block mb-1 text-sm">Subject <span className="text-xs text-white/60">(required)</span></label>
            <input type="text" required className="w-full px-3 py-2 bg-black border border-white text-white rounded" />
          </div>
          <div>
            <label className="block mb-1 text-sm">Message <span className="text-xs text-white/60">(required)</span></label>
            <textarea required className="w-full px-3 py-2 bg-black border border-white text-white rounded min-h-[100px]" />
          </div>
          <button type="submit" className="px-6 py-2 bg-neutral-800 text-white rounded font-serif text-lg hover:opacity-80 transition">Submit</button>
        </form>
      </section>
    </main>
  );
}
