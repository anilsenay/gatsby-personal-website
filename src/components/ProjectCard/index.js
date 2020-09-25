import React from "react"

import styles from "./project.module.scss"

export default function Project() {
  return (
    <div className={styles.container}>
      <div className={styles.leftBorder} />

      <div className={styles.projectInfo}>
        <div className={styles.title}>Change-My-Mind</div>
        <div className={styles.info}>
          A debate app built with React Native / Expo. Using Firebase as
          backend.
        </div>
        <div className={styles.linkText}>
          Github: <a href="#">https://github.com/anilsenay/Change-My-Mind</a>
        </div>
      </div>
    </div>
  )
}
