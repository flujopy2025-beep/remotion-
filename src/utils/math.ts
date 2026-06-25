export const lerp = (start: number, end: number, t: number): number => {
  return start + (end - start) * t;
};

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export const randomBetween = (min: number, max: number, seed?: number): number => {
  if (seed !== undefined) {
    const x = Math.sin(seed) * 10000;
    return min + (x - Math.floor(x)) * (max - min);
  }
  return min + Math.random() * (max - min);
};

export const oscillate = (frame: number, frequency: number, amplitude: number = 1): number => {
  return Math.sin(frame * frequency * 0.1) * amplitude;
};
