import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const CinematicIntro: React.FC<{
  title?: string;
  subtitle?: string;
  accentColor?: string;
}> = ({
  title = "Welcome",
  subtitle = "To the future of video",
  accentColor = "#6366f1",
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const fadeOut = interpolate(frame, [durationInFrames - 15, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleScale = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 200 } });
  const titleOpacity = interpolate(frame, [10, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const subtitleOpacity = interpolate(frame, [25, 45], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subtitleY = interpolate(frame, [25, 45], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const lineWidth = interpolate(frame, [40, 55], [0, 80], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Animated gradient angle
  const angle = 135 + frame * 0.5;

  // Glow orbs
  const orbScale1 = 1 + Math.sin(frame * 0.05) * 0.15;
  const orbScale2 = 1 + Math.sin(frame * 0.03) * 0.15;

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      {/* Gradient background */}
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(${angle}deg, #0f172a, #1e1b4b, #0f172a)` }} />

      {/* Glow orbs */}
      <div style={{ position: "absolute", left: "30%", top: "40%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`, transform: `translate(-50%, -50%) scale(${orbScale1})`, opacity: 0.4, filter: "blur(40px)" }} />
      <div style={{ position: "absolute", left: "70%", top: "60%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, #a855f7 0%, transparent 70%)", transform: `translate(-50%, -50%) scale(${orbScale2})`, opacity: 0.35, filter: "blur(40px)" }} />

      {/* Particles */}
      {Array.from({ length: 40 }).map((_, i) => {
        const seed = i * 3.7;
        const x = (Math.sin(seed) * 10000 - Math.floor(Math.sin(seed) * 10000)) * 100;
        const y = (Math.sin(seed * 2.1) * 10000 - Math.floor(Math.sin(seed * 2.1) * 10000)) * 100;
        const size = 2 + (Math.sin(seed * 1.3) * 10000 - Math.floor(Math.sin(seed * 1.3) * 10000)) * 4;
        const delay = Math.floor((Math.sin(seed * 0.7) * 10000 - Math.floor(Math.sin(seed * 0.7) * 10000)) * 30);
        const opacity = Math.max(0, frame - delay) > 0 ? 0.3 + (Math.sin(seed * 0.5) * 10000 - Math.floor(Math.sin(seed * 0.5) * 10000)) * 0.5 : 0;

        return (
          <div key={i} style={{ position: "absolute", left: `${x}%`, top: `${y - (Math.max(0, frame - delay) * 0.3)}%`, width: size, height: size, borderRadius: "50%", backgroundColor: accentColor, opacity: opacity * Math.min(1, Math.max(0, frame - delay) / 10) }} />
        );
      })}

      {/* Content */}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 30, padding: 60 }}>
        <div style={{ fontSize: 96, fontWeight: 800, color: "#ffffff", fontFamily: "Inter, system-ui, sans-serif", textAlign: "center", transform: `scale(${titleScale})`, opacity: titleOpacity, lineHeight: 1.2 }}>
          {title}
        </div>
        <div style={{ fontSize: 32, color: "rgba(255,255,255,0.7)", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 400, textAlign: "center", letterSpacing: 2, opacity: subtitleOpacity, transform: `translateY(${subtitleY}px)` }}>
          {subtitle}
        </div>
        <div style={{ width: lineWidth, height: 4, backgroundColor: accentColor, borderRadius: 2, marginTop: 10 }} />
      </div>
    </AbsoluteFill>
  );
};
