"use client";
import Image from "next/image";
import styles from "./LayeredLogo.module.css";
import clsx from "clsx";

interface LayeredLogoProps {
  size?: number;
}

export default function LayeredLogo({ size = 420 }: LayeredLogoProps) {
  return (
    <div
      className={styles.stage}
      style={{ width: size, height: size }}
      aria-label="NOBILLS animated logo"
    >
      {/* Layer 3 (largest, clockwise) */}
      <div className={clsx(styles.layer, styles.layer3)}>
        <Image src="/nobills/logolayer3.png" alt="Logo Layer 3" fill priority sizes="100vw" style={{ objectFit: "contain" }} />
      </div>
      {/* Layer 2 (counter-clockwise) */}
      <div className={clsx(styles.layer, styles.layer2)}>
        <Image src="/nobills/logolayer2.png" alt="Logo Layer 2" fill priority sizes="100vw" style={{ objectFit: "contain" }} />
      </div>
      {/* Layer 1 (clockwise) */}
      <div className={clsx(styles.layer, styles.layer1)}>
        <Image src="/nobills/logolayer1.png" alt="Logo Layer 1" fill priority sizes="100vw" style={{ objectFit: "contain" }} />
      </div>
      {/* Base (center) */}
      <div className={clsx(styles.layer, styles.base)}>
        <Image src="/nobills/logo.png" alt="NOBILLS Logo" fill priority sizes="100vw" style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
}
