import React from "react"

import { IconProps } from "types/icon"

const BoxNCase: React.FC<IconProps> = ({
  size = "20",
  color = "#9CA3AF",
  ...attributes
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 384 384"
      fill="none"
      {...attributes}
    >
      <defs>
        <clipPath id="88aa82ea4a">
          <path d="M 70.75 77.582031 L 313.664062 77.582031 L 313.664062 297.273438 L 70.75 297.273438 Z M 70.75 77.582031 "/>
        </clipPath>
        <clipPath id="c11d7a4f58">
          <path d="M 216.1875 91.84375 L 309.386719 254.945312 C 314.390625 263.699219 314.355469 274.457031 309.292969 283.179688 C 304.230469 291.902344 294.910156 297.273438 284.824219 297.273438 L 99.175781 297.273438 C 89.089844 297.273438 79.769531 291.902344 74.707031 283.179688 C 69.644531 274.457031 69.609375 263.699219 74.613281 254.945312 L 167.8125 91.84375 C 172.773438 83.164062 182.003906 77.808594 192 77.808594 C 201.996094 77.808594 211.226562 83.164062 216.1875 91.84375 Z M 216.1875 91.84375 "/>
        </clipPath>
      </defs>
      <g clipRule="nonzero" clipPath="url(#88aa82ea4a)">
        <g clipRule="nonzero" clipPath="url(#c11d7a4f58)">
          <path 
            style={{strokeWidth: 0, fillRule: "nonzero", fillOpacity: 1}}
            fill={color}
            d="M 50.425781 49.519531 L 333.988281 49.519531 L 333.988281 297.273438 L 50.425781 297.273438 Z M 50.425781 49.519531 "
          />
        </g>
      </g>
    </svg>
  )
}

export default BoxNCase