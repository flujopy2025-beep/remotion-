import { useCurrentFrame } from "remotion";

export const useParallax = ({ speed = 1, direction = "up" }: { speed?: number; direction?: "up" | "down" | "left" | "right" } = {}): { x: number; y: number } => {
  const frame = useCurrentFrame();
  const distance = frame * speed;
  switch (direction) {
    case "up": return { x: 0, y: -distance };
    case "down": return { x: 0, y: distance };
    case "left": return { x: -distance, y: 0 };
    case "right": return { x: distance, y: 0 };
  }
};
