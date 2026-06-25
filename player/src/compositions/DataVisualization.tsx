import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface DataPoint {
  label: string;
  value: number;
  color: string;
}

export const DataVisualization: React.FC<{
  title?: string;
  dataPoints?: DataPoint[];
}> = ({
  title = "Performance Metrics",
  dataPoints = [
    { label: "React", value: 92, color: "#61dafb" },
    { label: "TypeScript", value: 87, color: "#3178c6" },
    { label: "Remotion", value: 95, color: "#6366f1" },
    { label: "Node.js", value: 78, color: "#68a063" },
    { label: "Next.js", value: 84, color: "#ffffff" },
  ],
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const maxValue = Math.max(...dataPoints.map((d) => d.value));

  const titleOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)" }} />

      <div style={{ position: "absolute", inset: 0, padding: 80, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h1 style={{ fontSize: 56, fontWeight: 800, color: "#ffffff", fontFamily: "Inter, system-ui, sans-serif", marginBottom: 60, opacity: titleOpacity }}>
          {title}
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {dataPoints.map((point, index) => {
            const delay = 10 + index * 8;
            const barProgress = spring({ frame: frame - delay, fps, config: { damping: 15, stiffness: 80 } });
            const barWidth = (point.value / maxValue) * 100 * barProgress;
            const labelOpacity = interpolate(frame, [delay, delay + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

            return (
              <div key={index} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ width: 120, fontSize: 18, fontWeight: 600, color: "rgba(255,255,255,0.8)", fontFamily: "Inter, system-ui, sans-serif", opacity: labelOpacity, textAlign: "right" }}>
                  {point.label}
                </div>
                <div style={{ flex: 1, height: 36, backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 8, overflow: "hidden" }}>
                  <div style={{ width: `${barWidth}%`, height: "100%", backgroundColor: point.color, borderRadius: 8, boxShadow: `0 0 20px ${point.color}44` }} />
                </div>
                <div style={{ width: 50, fontSize: 20, fontWeight: 700, color: point.color, fontFamily: "Inter, system-ui, sans-serif", opacity: labelOpacity }}>
                  {Math.round(point.value * barProgress)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
