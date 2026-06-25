import React from "react";

interface CenterStackProps {
  children: React.ReactNode;
  gap?: number;
  style?: React.CSSProperties;
}

export const CenterStack: React.FC<CenterStackProps> = ({
  children,
  gap = 20,
  style = {},
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        inset: 0,
        gap,
        padding: 60,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
