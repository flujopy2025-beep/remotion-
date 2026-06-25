import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}

export const ScaleIn: React.FC<ScaleInProps> = ({ children, delay = 0, style = {} }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame: frame - delay, fps, config: { damping: 12, stiffness: 200 } });
  const opacity = interpolate(frame, [delay, delay + 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return <div style={{ transform: `scale(${scale})`, opacity, ...style }}>{children}</div>;
};
