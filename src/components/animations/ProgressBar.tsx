import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

interface ProgressBarProps {
  progress: number;
  delay?: number;
  duration?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  borderRadius?: number;
  style?: React.CSSProperties;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  delay = 0,
  duration = 30,
  height = 8,
  color = "#6366f1",
  backgroundColor = "rgba(255,255,255,0.1)",
  borderRadius = 4,
  style = {},
}) => {
  const frame = useCurrentFrame();
  const animatedProgress = interpolate(frame, [delay, delay + duration], [0, progress], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ width: "100%", height, backgroundColor, borderRadius, overflow: "hidden", ...style }}>
      <div style={{ width: `${animatedProgress}%`, height: "100%", backgroundColor: color, borderRadius }} />
    </div>
  );
};
