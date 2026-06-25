import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { GradientBackground } from "../../components/layout/GradientBackground";
import { CenterStack } from "../../components/layout/CenterStack";
import { GlowOrb } from "../../components/effects/GlowOrb";
import type { OutroProps } from "../../types";

export const Outro: React.FC<OutroProps> = ({
  message = "Thanks for watching!",
  ctaText = "Subscribe for more",
  accentColor = "#10b981",
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const messageScale = spring({
    frame: frame - 5,
    fps,
    config: { damping: 12, stiffness: 200 },
  });

  const ctaOpacity = interpolate(frame, [30, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ctaY = interpolate(frame, [30, 45], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const fadeOut = interpolate(
    frame,
    [durationInFrames - 15, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      <GradientBackground colors={["#0f172a", "#064e3b", "#0f172a"]} />
      <GlowOrb color={accentColor} size={400} x={50} y={50} />

      <CenterStack gap={30}>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            fontFamily: "Inter, system-ui, sans-serif",
            textAlign: "center",
            transform: `scale(${messageScale})`,
          }}
        >
          {message}
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: accentColor,
            fontFamily: "Inter, system-ui, sans-serif",
            textAlign: "center",
            opacity: ctaOpacity,
            transform: `translateY(${ctaY}px)`,
            padding: "12px 32px",
            border: `2px solid ${accentColor}`,
            borderRadius: 50,
          }}
        >
          {ctaText}
        </div>
      </CenterStack>
    </AbsoluteFill>
  );
};
