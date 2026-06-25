import { interpolate, useCurrentFrame } from "remotion";

interface UseAnimatedValueOptions {
  delay?: number;
  duration?: number;
  from?: number;
  to?: number;
}

export const useAnimatedValue = ({ delay = 0, duration = 30, from = 0, to = 1 }: UseAnimatedValueOptions = {}): number => {
  const frame = useCurrentFrame();
  return interpolate(frame, [delay, delay + duration], [from, to], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
};
