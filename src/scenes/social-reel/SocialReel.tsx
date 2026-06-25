import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { GlowOrb } from "../../components/effects/GlowOrb";
import { Particles } from "../../components/effects/Particles";
import type { SocialReelProps } from "../../types";

export const SocialReel: React.FC<SocialReelProps> = ({
  headline = "Build videos with code",
  subtext = "React + TypeScript = Magic",
  accentColor = "#f59e0b",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headlineScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 10, stiffness: 180 },
  });

  const subtextOpacity = interpolate(frame, [30, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subtextY = interpolate(frame, [30, 45], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
      }}
    >
      <GlowOrb color={accentColor} size={300} x={50} y={35} />
      <Particles count={30} color={accentColor} speed={0.5} />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
          gap: 30,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: "Inter, system-ui, sans-serif",
            textAlign: "center",
            transform: `scale(${headlineScale})`,
            lineHeight: 1.1,
          }}
        >
          {headline}
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: accentColor,
            fontFamily: "Inter, system-ui, sans-serif",
            textAlign: "center",
            opacity: subtextOpacity,
            transform: `translateY(${subtextY}px)`,
          }}
        >
          {subtext}
        </div>

        <div
          style={{
            width: interpolate(frame, [50, 70], [0, 100], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            height: 3,
            backgroundColor: accentColor,
            borderRadius: 2,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

export const SocialReelSquare: React.FC<SocialReelProps> = (props) => {
  return <SocialReel {...props} />;
};
