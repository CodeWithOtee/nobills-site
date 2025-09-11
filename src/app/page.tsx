// src/app/page.tsx
"use client";
import RotatingLogoRing from "@/components/RotatingLogoRing";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <section className="flex flex-col items-center justify-center w-full h-screen">
        <div
          className="w-[clamp(260px,40vw,420px)] h-[clamp(260px,40vw,420px)] flex items-center justify-center"
        >
          <RotatingLogoRing size={420} />
        </div>
        <span
          className="mt-8 text-[clamp(1.5rem,3vw,2.5rem)] font-serif font-semibold tracking-wide"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: "0.04em",
          }}
        >
          NOBILLS
        </span>
      </section>
    </main>
  );
}
