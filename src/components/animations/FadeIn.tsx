import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  style?: React.CSSProperties;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 20,
  direction = "up",
  distance = 30,
  style = {},
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const offset = interpolate(frame, [delay, delay + duration], [distance, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const transform = (() => {
    switch (direction) {
      case "up": return `translateY(${offset}px)`;
      case "down": return `translateY(${-offset}px)`;
      case "left": return `translateX(${offset}px)`;
      case "right": return `translateX(${-offset}px)`;
      case "none": return "none";
    }
  })();

  return (
    <div style={{ opacity, transform, ...style }}>
      {children}
    </div>
  );
};
