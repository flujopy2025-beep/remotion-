import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { GradientBackground } from "../../components/layout/GradientBackground";
import { FadeIn } from "../../components/animations/FadeIn";
import type { FeatureShowcaseProps } from "../../types";

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  title = "Why Remotion?",
  features = [
    { icon: "\u{1F3AC}", title: "Programmatic Video", description: "Write videos in React & TypeScript" },
    { icon: "\u26A1", title: "Lightning Fast", description: "Parallel rendering with GPU acceleration" },
    { icon: "\u{1F3A8}", title: "Full Creative Control", description: "CSS, SVG, WebGL \u2014 anything the browser can do" },
    { icon: "\u{1F4E6}", title: "Scalable", description: "Render thousands of videos with Lambda" },
  ],
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill>
      <GradientBackground colors={["#0f172a", "#172554", "#0f172a"]} />

      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <FadeIn delay={0} duration={15}>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
              fontFamily: "Inter, system-ui, sans-serif",
              marginBottom: 50,
              textAlign: "center",
            }}
          >
            {title}
          </h1>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 30,
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
          }}
        >
          {features.map((feature, index) => {
            const delay = 15 + index * 12;
            const cardScale = spring({
              frame: frame - delay,
              fps,
              config: { damping: 12, stiffness: 150 },
            });
            const cardOpacity = interpolate(frame, [delay, delay + 10], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });

            return (
              <div
                key={index}
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderRadius: 16,
                  padding: 36,
                  border: "1px solid rgba(255,255,255,0.1)",
                  transform: `scale(${cardScale})`,
                  opacity: cardOpacity,
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 16 }}>{feature.icon}</div>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#ffffff",
                    fontFamily: "Inter, system-ui, sans-serif",
                    marginBottom: 8,
                  }}
                >
                  {feature.title}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "Inter, system-ui, sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  {feature.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
