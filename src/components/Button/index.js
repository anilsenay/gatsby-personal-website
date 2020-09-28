import React from "react"

import styles from "./button.module.scss"

export default function Button({ text, type, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      className={styles.container}
      type={type}
      {...props}
    >
      <span className={styles.text}>{text}</span>
    </button>
  )
}
