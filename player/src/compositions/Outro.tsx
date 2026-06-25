import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Outro: React.FC<{
  message?: string;
  ctaText?: string;
  accentColor?: string;
}> = ({
  message = "Thanks for watching!",
  ctaText = "Subscribe for more",
  accentColor = "#10b981",
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const messageScale = spring({ frame: frame - 5, fps, config: { damping: 12, stiffness: 200 } });
  const ctaOpacity = interpolate(frame, [30, 45], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ctaY = interpolate(frame, [30, 45], [15, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - 15, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const angle = 135 + frame * 0.5;
  const orbScale = 1 + Math.sin(frame * 0.05) * 0.15;

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(${angle}deg, #0f172a, #064e3b, #0f172a)` }} />
      <div style={{ position: "absolute", left: "50%", top: "50%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`, transform: `translate(-50%, -50%) scale(${orbScale})`, opacity: 0.4, filter: "blur(40px)" }} />

      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 30, padding: 60 }}>
        <div style={{ fontSize: 72, fontWeight: 800, color: "#ffffff", fontFamily: "Inter, system-ui, sans-serif", textAlign: "center", transform: `scale(${messageScale})` }}>
          {message}
        </div>
        <div style={{ fontSize: 28, fontWeight: 600, color: accentColor, fontFamily: "Inter, system-ui, sans-serif", textAlign: "center", opacity: ctaOpacity, transform: `translateY(${ctaY}px)`, padding: "12px 32px", border: `2px solid ${accentColor}`, borderRadius: 50 }}>
          {ctaText}
        </div>
      </div>
    </AbsoluteFill>
  );
};
