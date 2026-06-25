import React, { useMemo } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { randomBetween } from "../../utils/math";

interface ParticlesProps {
  count?: number;
  color?: string;
  maxSize?: number;
  speed?: number;
}

export const Particles: React.FC<ParticlesProps> = ({
  count = 50,
  color = "#6366f1",
  maxSize = 6,
  speed = 1,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      x: randomBetween(0, width, i * 1.1),
      y: randomBetween(0, height, i * 2.2),
      size: randomBetween(1, maxSize, i * 3.3),
      speedX: randomBetween(-0.5, 0.5, i * 4.4) * speed,
      speedY: randomBetween(-1, -0.2, i * 5.5) * speed,
      opacity: randomBetween(0.2, 0.8, i * 6.6),
      delay: randomBetween(0, 30, i * 7.7),
    }));
  }, [count, width, height, maxSize, speed]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {particles.map((p, i) => {
        const adjustedFrame = Math.max(0, frame - p.delay);
        const x = p.x + adjustedFrame * p.speedX;
        const y = p.y + adjustedFrame * p.speedY;
        const opacity = adjustedFrame > 0 ? p.opacity * Math.min(1, adjustedFrame / 10) : 0;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x % width,
              top: ((y % height) + height) % height,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: color,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
};
