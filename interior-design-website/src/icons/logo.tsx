import React from "react";

const Logo = () => {
  return (
    <svg
      width="60"
      height="50"
      viewBox="0 0 60 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <rect width="60" height="50" rx="8" fill="#D4B5A0" opacity="0.2" />
      
      {/* Letter I */}
      <text
        x="12"
        y="36"
        fontSize="32"
        fontWeight="bold"
        fontFamily="Jost, sans-serif"
        fill="#3D3D3D"
      >
        I
      </text>
      
      {/* Letter S */}
      <text
        x="32"
        y="36"
        fontSize="32"
        fontWeight="bold"
        fontFamily="Jost, sans-serif"
        fill="#3D3D3D"
      >
        S
      </text>
    </svg>
  );
};

export default Logo;
