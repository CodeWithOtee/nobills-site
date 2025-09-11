// src/app/page.tsx
"use client";
import RotatingLogoRing from "@/components/RotatingLogoRing";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <section className="flex flex-col items-center justify-center w-full min-h-screen" style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          className="flex items-center justify-center mx-auto"
          style={{
            width: 'min(90vw,420px)',
            height: 'min(90vw,420px)',
            maxWidth: 420,
            maxHeight: 420,
            position: 'relative',
            left: '0',
            right: '0',
            // Shift left on mobile
            transform: 'translateX(-7vw)',
          }}
        >
          <RotatingLogoRing />
        </div>
        <span
          className="text-[clamp(1.5rem,3vw,2.5rem)] font-serif font-semibold tracking-wide"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: "0.04em",
            display: 'block',
            marginTop: 'clamp(3.5rem,12vw,6.5rem)',
            marginBottom: '2.5rem',
            textAlign: 'center',
          }}
        >
          NOBILLS
        </span>
      </section>
    </main>
  );
}
