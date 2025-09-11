import Image from "next/image";
import styles from "./RotatingLogoRing.module.css";

const NUM_ELEMENTS = 12;
const RING_SPACING = 90; // px (distance between rings)
const CENTER_RADIUS = 0; // px (center is at the center)
const INNER_RADIUS = 135; // px (distance from center to inner ring)
const OUTER_RADIUS = INNER_RADIUS + RING_SPACING; // px (distance from center to outer ring)
const logoSrc = "/nobillspnglogo.png";

export default function RotatingLogoRing({ size = 420 }: { size?: number }) {
  const elements = Array.from({ length: NUM_ELEMENTS });
  return (
    <div className={styles.stage} style={{ width: size, height: size }}>
      {/* Outer ring (counterclockwise) */}
      <div className={styles.outerRing} style={{ width: size, height: size }}>
        {elements.map((_, i) => {
          const angle = (i / NUM_ELEMENTS) * 2 * Math.PI;
          const x = Math.cos(angle) * OUTER_RADIUS + size / 2 - 40;
          const y = Math.sin(angle) * OUTER_RADIUS + size / 2 - 40;
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
          const x = Math.cos(angle) * INNER_RADIUS + size / 2 - 40;
          const y = Math.sin(angle) * INNER_RADIUS + size / 2 - 40;
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
      <div className={styles.center} style={{ left: size / 2 - 60, top: size / 2 - 60 }}>
        <Image src={logoSrc} alt="Center Logo" width={120} height={120} />
      </div>
    </div>
  );
}
