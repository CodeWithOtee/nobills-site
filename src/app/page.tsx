// src/app/page.tsx
"use client";
import RotatingLogoRing from "@/components/RotatingLogoRing";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-[100svh] md:min-h-[100dvh] flex items-center justify-center">
      <section className="flex flex-1 items-center justify-center w-full">
        <div className="mx-auto text-center flex flex-col items-center justify-center w-full">
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
            }}
          >
            <RotatingLogoRing />
          </div>
          <Link href="/shop" passHref legacyBehavior>
            <a
              className="text-[clamp(1.5rem,3vw,2.5rem)] font-serif font-semibold tracking-wide block mt-[clamp(3.5rem,12vw,6.5rem)] mb-2 text-center hover:underline underline-offset-4 transition"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: "0.04em",
                cursor: "pointer",
              }}
            >
              NOBILLS
            </a>
          </Link>
          <span className="block text-center text-sm md:text-base font-serif text-white/80 mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            NO LIMIT, NO LABEL
          </span>
        </div>
      </section>
    </main>
  );
}
