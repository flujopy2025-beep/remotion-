import React, { useState } from "react";
import { Player } from "@remotion/player";
import {
  CinematicIntro,
  KineticTypography,
  DataVisualization,
  FeatureShowcase,
  SocialReel,
  Outro,
} from "./compositions";

interface CompositionConfig {
  id: string;
  title: string;
  description: string;
  component: React.FC<any>;
  durationInFrames: number;
  fps: number;
  width: number;
  height: number;
  defaultProps: Record<string, any>;
  color: string;
}

const compositions: CompositionConfig[] = [
  {
    id: "cinematic-intro",
    title: "Cinematic Intro",
    description: "Gradient backgrounds, particles, animated text",
    component: CinematicIntro,
    durationInFrames: 150,
    fps: 30,
    width: 1920,
    height: 1080,
    defaultProps: { title: "Welcome", subtitle: "To the future of video", accentColor: "#6366f1" },
    color: "#6366f1",
  },
  {
    id: "kinetic-typography",
    title: "Kinetic Typography",
    description: "Dynamic text with spring physics",
    component: KineticTypography,
    durationInFrames: 180,
    fps: 30,
    width: 1920,
    height: 1080,
    defaultProps: { words: ["Create", "Animate", "Inspire", "Ship"], accentColor: "#ec4899" },
    color: "#ec4899",
  },
  {
    id: "data-visualization",
    title: "Data Visualization",
    description: "Animated bar charts, data-driven",
    component: DataVisualization,
    durationInFrames: 240,
    fps: 30,
    width: 1920,
    height: 1080,
    defaultProps: {
      title: "Performance Metrics",
      dataPoints: [
        { label: "React", value: 92, color: "#61dafb" },
        { label: "TypeScript", value: 87, color: "#3178c6" },
        { label: "Remotion", value: 95, color: "#6366f1" },
        { label: "Node.js", value: 78, color: "#68a063" },
        { label: "Next.js", value: 84, color: "#ffffff" },
      ],
    },
    color: "#61dafb",
  },
  {
    id: "feature-showcase",
    title: "Feature Showcase",
    description: "Product feature cards with stagger animations",
    component: FeatureShowcase,
    durationInFrames: 300,
    fps: 30,
    width: 1920,
    height: 1080,
    defaultProps: {
      title: "Why Remotion?",
      features: [
        { icon: "\u{1F3AC}", title: "Programmatic Video", description: "Write videos in React & TypeScript" },
        { icon: "\u26A1", title: "Lightning Fast", description: "Parallel rendering with GPU acceleration" },
        { icon: "\u{1F3A8}", title: "Full Creative Control", description: "CSS, SVG, WebGL \u2014 anything the browser can do" },
        { icon: "\u{1F4E6}", title: "Scalable", description: "Render thousands of videos with Lambda" },
      ],
    },
    color: "#3b82f6",
  },
  {
    id: "social-reel",
    title: "Social Reel (9:16)",
    description: "Vertical format for Instagram/TikTok",
    component: SocialReel,
    durationInFrames: 150,
    fps: 30,
    width: 1080,
    height: 1920,
    defaultProps: { headline: "Build videos with code", subtext: "React + TypeScript = Magic", accentColor: "#f59e0b" },
    color: "#f59e0b",
  },
  {
    id: "outro",
    title: "Outro",
    description: "Closing scene with call-to-action",
    component: Outro,
    durationInFrames: 120,
    fps: 30,
    width: 1920,
    height: 1080,
    defaultProps: { message: "Thanks for watching!", ctaText: "Subscribe for more", accentColor: "#10b981" },
    color: "#10b981",
  },
];

export const App: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = compositions[selectedIndex];

  // Calculate aspect ratio for responsive player
  const isVertical = selected.height > selected.width;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ padding: "20px 32px", borderBottom: "1px solid #1e293b", display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: "linear-gradient(135deg, #6366f1, #ec4899)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
            R
          </div>
          <div>
            <h1 style={{ fontSize: 18, fontWeight: 700, color: "#f1f5f9" }}>Remotion Studio Pro</h1>
            <p style={{ fontSize: 12, color: "#64748b" }}>Interactive Video Player</p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "row", overflow: "hidden" }}>
        {/* Sidebar - Composition selector */}
        <aside style={{ width: 300, borderRight: "1px solid #1e293b", overflowY: "auto", padding: 16, flexShrink: 0 }}>
          <h2 style={{ fontSize: 12, fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12, padding: "0 8px" }}>
            Compositions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {compositions.map((comp, index) => (
              <button
                key={comp.id}
                onClick={() => setSelectedIndex(index)}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "12px 12px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  backgroundColor: index === selectedIndex ? "#1e293b" : "transparent",
                  transition: "background-color 0.15s",
                }}
              >
                <div style={{ width: 4, height: 36, borderRadius: 2, backgroundColor: comp.color, flexShrink: 0, marginTop: 2, opacity: index === selectedIndex ? 1 : 0.4 }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: index === selectedIndex ? "#f1f5f9" : "#94a3b8", marginBottom: 2 }}>
                    {comp.title}
                  </div>
                  <div style={{ fontSize: 11, color: "#64748b", lineHeight: 1.4 }}>
                    {comp.description}
                  </div>
                  <div style={{ fontSize: 10, color: "#475569", marginTop: 4 }}>
                    {comp.width}x{comp.height} | {comp.durationInFrames / comp.fps}s
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Player area */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, gap: 20, overflow: "hidden" }}>
          <div style={{ width: "100%", maxWidth: isVertical ? 400 : 900, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            {/* Composition title */}
            <div style={{ textAlign: "center" }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>
                {selected.title}
              </h2>
              <p style={{ fontSize: 14, color: "#64748b" }}>
                {selected.width}x{selected.height} | {selected.fps}fps | {(selected.durationInFrames / selected.fps).toFixed(1)}s
              </p>
            </div>

            {/* Player */}
            <div style={{ width: "100%", borderRadius: 12, overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", border: "1px solid #1e293b" }}>
              <Player
                key={selected.id}
                component={selected.component}
                inputProps={selected.defaultProps}
                durationInFrames={selected.durationInFrames}
                fps={selected.fps}
                compositionWidth={selected.width}
                compositionHeight={selected.height}
                style={{ width: "100%" }}
                controls
                autoPlay
                loop
              />
            </div>

            {/* Info badge */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
              <span style={{ padding: "4px 10px", borderRadius: 20, backgroundColor: "#1e293b", fontSize: 11, color: "#94a3b8", border: "1px solid #334155" }}>
                Remotion 4.0
              </span>
              <span style={{ padding: "4px 10px", borderRadius: 20, backgroundColor: "#1e293b", fontSize: 11, color: "#94a3b8", border: "1px solid #334155" }}>
                React + TypeScript
              </span>
              <span style={{ padding: "4px 10px", borderRadius: 20, backgroundColor: "#1e293b", fontSize: 11, color: "#94a3b8", border: "1px solid #334155" }}>
                Zod Schemas
              </span>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer style={{ padding: "12px 32px", borderTop: "1px solid #1e293b", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#475569" }}>
          Built with Remotion + Vite | Deployable on Netlify
        </p>
      </footer>
    </div>
  );
};
