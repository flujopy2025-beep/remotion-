import { z } from "zod";

// === CinematicIntro ===
export const cinematicIntroSchema = z.object({
  title: z.string().default("Welcome"),
  subtitle: z.string().default("To the future of video"),
  accentColor: z.string().default("#6366f1"),
});
export type CinematicIntroProps = z.infer<typeof cinematicIntroSchema>;

// === KineticTypography ===
export const kineticTypographySchema = z.object({
  words: z
    .array(z.string())
    .default(["Create", "Animate", "Inspire", "Ship"]),
  accentColor: z.string().default("#ec4899"),
});
export type KineticTypographyProps = z.infer<typeof kineticTypographySchema>;

// === DataVisualization ===
export const dataPointSchema = z.object({
  label: z.string(),
  value: z.number(),
  color: z.string(),
});

export const dataVisualizationSchema = z.object({
  title: z.string().default("Performance Metrics"),
  dataPoints: z
    .array(dataPointSchema)
    .default([
      { label: "React", value: 92, color: "#61dafb" },
      { label: "TypeScript", value: 87, color: "#3178c6" },
      { label: "Remotion", value: 95, color: "#6366f1" },
      { label: "Node.js", value: 78, color: "#68a063" },
      { label: "Next.js", value: 84, color: "#ffffff" },
    ]),
});
export type DataVisualizationProps = z.infer<typeof dataVisualizationSchema>;

// === FeatureShowcase ===
export const featureSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});

export const featureShowcaseSchema = z.object({
  title: z.string().default("Why Remotion?"),
  features: z
    .array(featureSchema)
    .default([
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
    ]),
});
export type FeatureShowcaseProps = z.infer<typeof featureShowcaseSchema>;

// === SocialReel ===
export const socialReelSchema = z.object({
  headline: z.string().default("Build videos with code"),
  subtext: z.string().default("React + TypeScript = Magic"),
  accentColor: z.string().default("#f59e0b"),
});
export type SocialReelProps = z.infer<typeof socialReelSchema>;

// === Outro ===
export const outroSchema = z.object({
  message: z.string().default("Thanks for watching!"),
  ctaText: z.string().default("Subscribe for more"),
  accentColor: z.string().default("#10b981"),
});
export type OutroProps = z.infer<typeof outroSchema>;
