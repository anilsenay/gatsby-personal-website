import React from "react"

import styles from "./project.module.scss"
import Button from "./button"

export default function Project() {
  return (
    <div className={styles.container}>
      <div className={styles.leftBorder} />

      <div className={styles.projectInfo}>
        <div className={styles.title}>Example project title</div>
        <div className={styles.info}>Information</div>
        <Button />
      </div>
    </div>
  )
}
