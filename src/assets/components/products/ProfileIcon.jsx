import React from "react";

const BLUE = "#4fb3c7";

export default function ProfileIcon({ type }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 26 26",
    fill: "none",
  };

  if (type === "beam") {
    return (
      <svg {...common}>
        <path
          d="
            M5 5H21
            M5 21H21
            M13 5V21
            M9 5V8
            M17 5V8
            M9 18V21
            M17 18V21
          "
          stroke={BLUE}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "rebar") {
    return (
      <svg {...common}>
        <circle cx="13" cy="13" r="8" stroke={BLUE} strokeWidth="1.6" />

        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="13"
            y1="4.6"
            x2="13"
            y2="6.4"
            stroke={BLUE}
            strokeWidth="1.6"
            strokeLinecap="round"
            transform={`rotate(${deg} 13 13)`}
          />
        ))}
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect
        x="5.5"
        y="5.5"
        width="15"
        height="15"
        rx="1.5"
        stroke={BLUE}
        strokeWidth="1.6"
      />

      <path
        d="M5.5 10H20.5M5.5 16H20.5"
        stroke={BLUE}
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  );
}
