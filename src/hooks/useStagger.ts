import { interpolate, useCurrentFrame } from "remotion";

export const useStagger = ({ index, staggerDelay = 5, duration = 20 }: { index: number; staggerDelay?: number; duration?: number }): number => {
  const frame = useCurrentFrame();
  const delay = index * staggerDelay;
  return interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
};
