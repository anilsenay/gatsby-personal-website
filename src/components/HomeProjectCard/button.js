import React from "react"

export default function Button() {
  return (
    <div
      style={{
        height: 32,
        width: 116,
        border: "2px solid #436C88",
        borderRadius: 6,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: 14 }}>Go Project</span>
    </div>
  )
}
