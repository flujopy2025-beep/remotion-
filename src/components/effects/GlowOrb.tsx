import React from "react";
import { useCurrentFrame } from "remotion";

interface GlowOrbProps {
  color?: string;
  size?: number;
  x?: number;
  y?: number;
  pulseSpeed?: number;
}

export const GlowOrb: React.FC<GlowOrbProps> = ({
  color = "#6366f1",
  size = 300,
  x = 50,
  y = 50,
  pulseSpeed = 0.05,
}) => {
  const frame = useCurrentFrame();
  const scale = 1 + Math.sin(frame * pulseSpeed) * 0.15;
  const opacity = 0.4 + Math.sin(frame * pulseSpeed * 0.7) * 0.15;

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity,
        filter: "blur(40px)",
        pointerEvents: "none",
      }}
    />
  );
};
