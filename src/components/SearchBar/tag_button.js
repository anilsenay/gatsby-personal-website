import React from "react"

import styles from "./tag_button.module.scss"

export default function TagButton({ tag, active, ...props }) {
  return (
    <div
      className={styles.container}
      style={{ background: active ? "#243b4a" : "" }}
      {...props}
    >
      <span className={styles.text}>{tag}</span>
    </div>
  )
}
