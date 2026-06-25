import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { GradientBackground } from "../../components/layout/GradientBackground";
import type { KineticTypographyProps } from "../../types";

export const KineticTypography: React.FC<KineticTypographyProps> = ({
  words = ["Create", "Animate", "Inspire", "Ship"],
  accentColor = "#ec4899",
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const framesPerWord = Math.floor(durationInFrames / words.length);
  const currentWordIndex = Math.min(
    Math.floor(frame / framesPerWord),
    words.length - 1
  );
  const localFrame = frame - currentWordIndex * framesPerWord;

  const scale = spring({
    frame: localFrame,
    fps,
    config: { damping: 8, stiffness: 150, mass: 0.8 },
  });

  const opacity = interpolate(
    localFrame,
    [0, 5, framesPerWord - 10, framesPerWord],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const rotation = interpolate(localFrame, [0, 10], [-5, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <GradientBackground colors={["#0f172a", "#1a0533", "#0f172a"]} />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 500,
            height: 500,
            borderRadius: "50%",
            border: `2px solid ${accentColor}33`,
            transform: `rotate(${frame}deg)`,
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: "Inter, system-ui, sans-serif",
            transform: `scale(${scale}) rotate(${rotation}deg)`,
            opacity,
            textTransform: "uppercase",
            letterSpacing: -3,
          }}
        >
          {words[currentWordIndex]}
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 30 }}>
          {words.map((_, i) => (
            <div
              key={i}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor:
                  i === currentWordIndex ? accentColor : "rgba(255,255,255,0.3)",
                transform: i === currentWordIndex ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
