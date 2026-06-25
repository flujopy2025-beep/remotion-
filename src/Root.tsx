import React from "react";
import { Composition } from "remotion";
import { CinematicIntro } from "./scenes/intro";
import { KineticTypography } from "./scenes/kinetic-typography";
import { DataVisualization } from "./scenes/data-viz";
import { FeatureShowcase } from "./scenes/showcase";
import { SocialReel, SocialReelSquare } from "./scenes/social-reel";
import { Outro } from "./scenes/outro";

import {
  cinematicIntroSchema,
  kineticTypographySchema,
  dataVisualizationSchema,
  featureShowcaseSchema,
  socialReelSchema,
  outroSchema,
} from "./types";

export const Root: React.FC = () => {
  return (
    <>
      {/* === 16:9 Landscape Compositions === */}

      <Composition
        id="CinematicIntro"
        component={CinematicIntro}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        schema={cinematicIntroSchema}
        defaultProps={{
          title: "Welcome",
          subtitle: "To the future of video",
          accentColor: "#6366f1",
        }}
      />

      <Composition
        id="KineticTypography"
        component={KineticTypography}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        schema={kineticTypographySchema}
        defaultProps={{
          words: ["Create", "Animate", "Inspire", "Ship"],
          accentColor: "#ec4899",
        }}
      />

      <Composition
        id="DataVisualization"
        component={DataVisualization}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
        schema={dataVisualizationSchema}
        defaultProps={{
          title: "Performance Metrics",
          dataPoints: [
            { label: "React", value: 92, color: "#61dafb" },
            { label: "TypeScript", value: 87, color: "#3178c6" },
            { label: "Remotion", value: 95, color: "#6366f1" },
            { label: "Node.js", value: 78, color: "#68a063" },
            { label: "Next.js", value: 84, color: "#ffffff" },
          ],
        }}
      />

      <Composition
        id="FeatureShowcase"
        component={FeatureShowcase}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        schema={featureShowcaseSchema}
        defaultProps={{
          title: "Why Remotion?",
          features: [
            {
              icon: "\u{1F3AC}",
              title: "Programmatic Video",
              description: "Write videos in React & TypeScript",
            },
            {
              icon: "\u26A1",
              title: "Lightning Fast",
              description: "Parallel rendering with GPU acceleration",
            },
            {
              icon: "\u{1F3A8}",
              title: "Full Creative Control",
              description: "CSS, SVG, WebGL \u2014 anything the browser can do",
            },
            {
              icon: "\u{1F4E6}",
              title: "Scalable",
              description: "Render thousands of videos with Lambda",
            },
          ],
        }}
      />

      {/* === 9:16 Vertical (Stories/Reels) === */}

      <Composition
        id="SocialReel"
        component={SocialReel}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
        schema={socialReelSchema}
        defaultProps={{
          headline: "Build videos with code",
          subtext: "React + TypeScript = Magic",
          accentColor: "#f59e0b",
        }}
      />

      {/* === 1:1 Square (Instagram Feed) === */}

      <Composition
        id="SocialReelSquare"
        component={SocialReelSquare}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1080}
        schema={socialReelSchema}
        defaultProps={{
          headline: "Build videos with code",
          subtext: "React + TypeScript = Magic",
          accentColor: "#f59e0b",
        }}
      />

      {/* === Outro === */}

      <Composition
        id="Outro"
        component={Outro}
        durationInFrames={120}
        fps={30}
        width={1920}
        height={1080}
        schema={outroSchema}
        defaultProps={{
          message: "Thanks for watching!",
          ctaText: "Subscribe for more",
          accentColor: "#10b981",
        }}
      />
    </>
  );
};
