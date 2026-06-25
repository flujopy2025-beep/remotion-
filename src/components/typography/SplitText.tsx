import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface SplitTextProps {
  text: string;
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  delay?: number;
  staggerDelay?: number;
  style?: React.CSSProperties;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  fontSize = 64,
  color = "#ffffff",
  fontWeight = 700,
  delay = 0,
  staggerDelay = 3,
  style = {},
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const chars = text.split("");

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", ...style }}>
      {chars.map((char, i) => {
        const charDelay = delay + i * staggerDelay;
        const scale = spring({ frame: frame - charDelay, fps, config: { damping: 12, stiffness: 200 } });
        const opacity = interpolate(frame, [charDelay, charDelay + 8], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              fontSize,
              fontWeight,
              color,
              fontFamily: "Inter, system-ui, sans-serif",
              transform: `scale(${scale})`,
              opacity,
              whiteSpace: char === " " ? "pre" : undefined,
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};
