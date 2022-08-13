import React from 'react'

const PlayButton = ({ ...props }) => {
  return (
    <svg
      width="82"
      height="82"
      viewBox="0 0 82 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="41"
        cy="41"
        r="36"
        fill="#41B3A3"
        stroke="#41B3A3"
        strokeWidth="10"
      />
      <path d="M61 41.5L45 58L45 25L61 41.5Z" fill="#EEEAB8" />
      <rect x="32" y="25" width="9" height="33" fill="#EEEAB8" />
    </svg>
  )
}

export default PlayButton
