import React from "react"

export default function Language({ language }) {
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
        marginRight: 12,
        marginBottom: 12,
      }}
    >
      <span style={{ fontSize: 14 }}>{language}</span>
    </div>
  )
}
