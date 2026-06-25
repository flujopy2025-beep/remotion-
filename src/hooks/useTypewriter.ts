import { useCurrentFrame } from "remotion";

export const useTypewriter = ({ text, startFrame = 0, speed = 2 }: { text: string; startFrame?: number; speed?: number }): string => {
  const frame = useCurrentFrame();
  const elapsed = Math.max(0, frame - startFrame);
  const charsToShow = Math.floor(elapsed / speed);
  return text.slice(0, Math.min(charsToShow, text.length));
};
