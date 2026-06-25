import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { GradientBackground } from "../../components/layout/GradientBackground";
import { CenterStack } from "../../components/layout/CenterStack";
import { Particles } from "../../components/effects/Particles";
import { GlowOrb } from "../../components/effects/GlowOrb";
import { AnimatedText } from "../../components/typography/AnimatedText";
import { FadeIn } from "../../components/animations/FadeIn";
import type { CinematicIntroProps } from "../../types";

export const CinematicIntro: React.FC<CinematicIntroProps> = ({
  title = "Welcome",
  subtitle = "To the future of video",
  accentColor = "#6366f1",
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const fadeOut = interpolate(
    frame,
    [durationInFrames - 15, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      <GradientBackground colors={["#0f172a", "#1e1b4b", "#0f172a"]} />
      <GlowOrb color={accentColor} size={400} x={30} y={40} />
      <GlowOrb color="#a855f7" size={350} x={70} y={60} pulseSpeed={0.03} />
      <Particles count={60} color={accentColor} speed={0.8} />

      <CenterStack gap={30}>
        <AnimatedText text={title} fontSize={96} fontWeight={800} delay={10} />
        <FadeIn delay={25} duration={20} direction="up">
          <div
            style={{
              fontSize: 32,
              color: "rgba(255,255,255,0.7)",
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: 400,
              textAlign: "center",
              letterSpacing: 2,
            }}
          >
            {subtitle}
          </div>
        </FadeIn>

        <FadeIn delay={40} duration={15} direction="none">
          <div
            style={{
              width: 80,
              height: 4,
              backgroundColor: accentColor,
              borderRadius: 2,
              marginTop: 10,
            }}
          />
        </FadeIn>
      </CenterStack>
    </AbsoluteFill>
  );
};
