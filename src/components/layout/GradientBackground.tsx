import React from "react";
import { useCurrentFrame } from "remotion";

interface GradientBackgroundProps {
  colors?: string[];
  angle?: number;
  animate?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  colors = ["#0f172a", "#1e1b4b", "#0f172a"],
  angle = 135,
  animate = true,
  children,
  style = {},
}) => {
  const frame = useCurrentFrame();
  const animatedAngle = animate ? angle + frame * 0.5 : angle;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(${animatedAngle}deg, ${colors.join(", ")})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
