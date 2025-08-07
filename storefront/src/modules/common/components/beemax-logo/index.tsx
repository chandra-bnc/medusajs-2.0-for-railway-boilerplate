"use client"

import React from "react"

interface BeemaxLogoProps {
  className?: string
  variant?: "default" | "white" | "gold"
}

const BeemaxLogo: React.FC<BeemaxLogoProps> = ({ 
  className = "", 
  variant = "default" 
}) => {
  const colors = {
    default: {
      text: "#4A2C2A",
      accent: "#E0B25C"
    },
    white: {
      text: "#FFFFFF",
      accent: "#FFFFFF"
    },
    gold: {
      text: "#E0B25C",
      accent: "#E0B25C"
    }
  }

  const currentColors = colors[variant]

  return (
    <svg
      viewBox="0 0 200 60"
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hexagon icon */}
      <g transform="translate(10, 10)">
        <path
          d="M20 0 L35 8.66 L35 26.34 L20 35 L5 26.34 L5 8.66 Z"
          fill={currentColors.accent}
          opacity="0.15"
        />
        <path
          d="M20 5 L30 10 L30 25 L20 30 L10 25 L10 10 Z"
          fill="none"
          stroke={currentColors.accent}
          strokeWidth="2"
        />
      </g>
      
      {/* BEEMAX text */}
      <text
        x="55"
        y="35"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="28"
        fontWeight="400"
        fill={currentColors.text}
        letterSpacing="2"
      >
        BEEMAX
      </text>
    </svg>
  )
}

export default BeemaxLogo