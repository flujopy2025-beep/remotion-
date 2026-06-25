export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : { r: 0, g: 0, b: 0 };
};

export const withOpacity = (hex: string, opacity: number): string => {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const palette = {
  indigo: "#6366f1",
  purple: "#a855f7",
  pink: "#ec4899",
  amber: "#f59e0b",
  emerald: "#10b981",
  cyan: "#06b6d4",
  sky: "#0ea5e9",
  dark: "#0f172a",
  darker: "#020617",
};
