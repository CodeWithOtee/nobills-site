import Image from "next/image";
import styles from "./RotatingLogoRing.module.css";

const NUM_ELEMENTS = 12;
const RADIUS = 180; // px (inner ring)
const OUTER_RADIUS = 270; // px (outer ring)
const logoSrc = "/nobillspnglogo.png";

export default function RotatingLogoRing({ size = 420 }: { size?: number }) {
  const elements = Array.from({ length: NUM_ELEMENTS });
  return (
    <div className={styles.stage} style={{ width: size * 1.4, height: size * 1.4 }}>
      {/* Outer ring (counterclockwise) */}
      <div className={styles.outerRing} style={{ width: size * 1.4, height: size * 1.4 }}>
        {elements.map((_, i) => {
          const angle = (i / NUM_ELEMENTS) * 2 * Math.PI;
          const x = Math.cos(angle) * OUTER_RADIUS + (size * 1.4) / 2 - 40;
          const y = Math.sin(angle) * OUTER_RADIUS + (size * 1.4) / 2 - 40;
          return (
            <div
              key={i}
              className={styles.ringItem}
              style={{ left: x, top: y }}
            >
              <Image src={logoSrc} alt={`Logo Outer ${i + 1}`} width={80} height={80} />
            </div>
          );
        })}
      </div>
      {/* Inner ring (clockwise) */}
      <div className={styles.ring} style={{ width: size, height: size }}>
        {elements.map((_, i) => {
          const angle = (i / NUM_ELEMENTS) * 2 * Math.PI;
          const x = Math.cos(angle) * RADIUS + size / 2 - 40;
          const y = Math.sin(angle) * RADIUS + size / 2 - 40;
          return (
            <div
              key={i}
              className={styles.ringItem}
              style={{ left: x, top: y }}
            >
              <Image src={logoSrc} alt={`Logo Inner ${i + 1}`} width={80} height={80} />
            </div>
          );
        })}
      </div>
      {/* Center logo (static) */}
      <div className={styles.center} style={{ left: size / 2 - 60 + (size * 0.2), top: size / 2 - 60 + (size * 0.2) }}>
        <Image src={logoSrc} alt="Center Logo" width={120} height={120} />
      </div>
    </div>
  );
}
