import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const SocialReel: React.FC<{
  headline?: string;
  subtext?: string;
  accentColor?: string;
}> = ({
  headline = "Build videos with code",
  subtext = "React + TypeScript = Magic",
  accentColor = "#f59e0b",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headlineScale = spring({ frame: frame - 10, fps, config: { damping: 10, stiffness: 180 } });
  const subtextOpacity = interpolate(frame, [30, 45], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subtextY = interpolate(frame, [30, 45], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const lineWidth = interpolate(frame, [50, 70], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const orbScale = 1 + Math.sin(frame * 0.05) * 0.15;

  return (
    <AbsoluteFill style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}>
      {/* Glow */}
      <div style={{ position: "absolute", left: "50%", top: "35%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`, transform: `translate(-50%, -50%) scale(${orbScale})`, opacity: 0.4, filter: "blur(40px)" }} />

      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 40, gap: 30 }}>
        <div style={{ fontSize: 64, fontWeight: 900, color: "#ffffff", fontFamily: "Inter, system-ui, sans-serif", textAlign: "center", transform: `scale(${headlineScale})`, lineHeight: 1.1 }}>
          {headline}
        </div>
        <div style={{ fontSize: 28, fontWeight: 500, color: accentColor, fontFamily: "Inter, system-ui, sans-serif", textAlign: "center", opacity: subtextOpacity, transform: `translateY(${subtextY}px)` }}>
          {subtext}
        </div>
        <div style={{ width: lineWidth, height: 3, backgroundColor: accentColor, borderRadius: 2 }} />
      </div>
    </AbsoluteFill>
  );
};
