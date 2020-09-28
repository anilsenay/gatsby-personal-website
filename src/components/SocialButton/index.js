import React from "react"

import styles from "./button.module.scss"

export default function SocialButton({ text, hoverText, color, ...props }) {
  return (
    <a className={styles.container} {...props}>
      <span className={styles.text}>{text}</span>
      <span className={styles.hoverText} style={{ color: color }}>
        {hoverText}
      </span>
    </a>
  )
}
