"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";

type PointerGlowProps = {
  children: ReactNode;
  className: string;
};

type PointerStyle = CSSProperties & {
  "--pointer-x": string;
  "--pointer-y": string;
};

export default function PointerGlow({ children, className }: PointerGlowProps) {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = `${((event.clientX - bounds.left) / bounds.width) * 100}%`;
    const y = `${((event.clientY - bounds.top) / bounds.height) * 100}%`;
    event.currentTarget.style.setProperty("--pointer-x", x);
    event.currentTarget.style.setProperty("--pointer-y", y);
  };

  const style: PointerStyle = { "--pointer-x": "50%", "--pointer-y": "45%" };

  return (
    <section className={className} onPointerMove={handlePointerMove} style={style}>
      {children}
    </section>
  );
}
