import Image from "next/image";
import styles from "./RotatingLogoRing.module.css";

const NUM_ELEMENTS = 12;
const RADIUS = 180; // px
const logoSrc = "/nobillspnglogo.png"; // Use your available logo image

export default function RotatingLogoRing({ size = 420 }: { size?: number }) {
  // Calculate positions for elements in a circle
  const elements = Array.from({ length: NUM_ELEMENTS });
  return (
    <div className={styles.stage} style={{ width: size, height: size }}>
      {/* Rotating ring */}
      <div className={styles.ring} style={{ width: size, height: size }}>
        {elements.map((_, i) => {
          const angle = (i / NUM_ELEMENTS) * 2 * Math.PI;
          const x = Math.cos(angle) * RADIUS + size / 2 - 40; // 40 = half image size
          const y = Math.sin(angle) * RADIUS + size / 2 - 40;
          return (
            <div
              key={i}
              className={styles.ringItem}
              style={{ left: x, top: y }}
            >
              <Image src={logoSrc} alt={`Logo ${i + 1}`} width={80} height={80} />
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
