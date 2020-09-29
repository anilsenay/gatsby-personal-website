import React from "react"

import MenuIcon from "../../assets/menu.svg"

export default function HeaderButton({ ...props }) {
  return (
    <div
      style={{
        width: 48,
        height: 36,
        backgroundColor: "#0b1115",
        border: "1px solid #20383d",
        borderRadius: 6,
        cursor: "pointer",
      }}
      {...props}
    >
      <MenuIcon width={24} height={24} fill="white" />
    </div>
  )
}
