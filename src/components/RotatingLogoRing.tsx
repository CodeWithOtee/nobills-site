

import Image from "next/image";
import styles from "./RotatingLogoRing.module.css";

const NUM_ELEMENTS = 12;
const RING_SPACING_RATIO = 0.4; // 40% of size
const OUTER_ITEM_SIZE = 80;
const CENTER_ITEM_SIZE = 120;
const logoSrc = "/nobillspnglogo.png";

// Responsive radii calculation
function getRadii(size: number) {
  const spacing = size * RING_SPACING_RATIO;
  const center = 0;
  const inner = center + spacing;
  const outer = inner + spacing;
  return { center, inner, outer };
}

export default function RotatingLogoRing({ size }: { size?: number }) {
  // Always use 420px for desktop/tablet, 90vw for mobile (max 420px)
  let ringSize = 420;
  if (typeof window !== "undefined") {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if (vw < 600) ringSize = Math.min(vw * 0.9, 420);
    else ringSize = 420;
  } else if (size) {
    ringSize = size;
  }
  const elements = Array.from({ length: NUM_ELEMENTS });
  const { center: CENTER_RADIUS, inner: INNER_RADIUS, outer: OUTER_RADIUS } = getRadii(ringSize);
  return (
    <div className={styles.stage + " " + styles.responsiveStage} style={{ width: ringSize, height: ringSize, margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
      {/* Outer ring (counterclockwise) */}
      <div className={styles.outerRing} style={{ width: ringSize, height: ringSize }}>
        {elements.map((_, i) => {
          const angle = (i / NUM_ELEMENTS) * 2 * Math.PI;
          const x = Math.cos(angle) * OUTER_RADIUS + ringSize / 2 - OUTER_ITEM_SIZE / 2;
          const y = Math.sin(angle) * OUTER_RADIUS + ringSize / 2 - OUTER_ITEM_SIZE / 2;
          return (
            <div
              key={i}
              className={styles.ringItem}
              style={{ left: x, top: y, width: OUTER_ITEM_SIZE, height: OUTER_ITEM_SIZE }}
            >
              <Image src={logoSrc} alt={`Logo Outer ${i + 1}`} width={OUTER_ITEM_SIZE} height={OUTER_ITEM_SIZE} />
            </div>
          );
        })}
      </div>
      {/* Inner ring (clockwise) */}
      <div className={styles.ring} style={{ width: ringSize, height: ringSize }}>
        {elements.map((_, i) => {
          const angle = (i / NUM_ELEMENTS) * 2 * Math.PI;
          const x = Math.cos(angle) * INNER_RADIUS + ringSize / 2 - OUTER_ITEM_SIZE / 2;
          const y = Math.sin(angle) * INNER_RADIUS + ringSize / 2 - OUTER_ITEM_SIZE / 2;
          return (
            <div
              key={i}
              className={styles.ringItem}
              style={{ left: x, top: y, width: OUTER_ITEM_SIZE, height: OUTER_ITEM_SIZE }}
            >
              <Image src={logoSrc} alt={`Logo Inner ${i + 1}`} width={OUTER_ITEM_SIZE} height={OUTER_ITEM_SIZE} />
            </div>
          );
        })}
      </div>
      {/* Center logo (static) */}
      <div className={styles.center} style={{ left: ringSize / 2 - CENTER_ITEM_SIZE / 2, top: ringSize / 2 - CENTER_ITEM_SIZE / 2, width: CENTER_ITEM_SIZE, height: CENTER_ITEM_SIZE }}>
        <Image src={logoSrc} alt="Center Logo" width={CENTER_ITEM_SIZE} height={CENTER_ITEM_SIZE} />
      </div>
    </div>
  );
}
