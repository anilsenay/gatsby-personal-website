import React from "react"

import styles from "./projects.module.scss"
import Project from "../HomeProjectCard"

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.headerTitle}>Lastest Projects</span>
        <span className={styles.allLink}>All projects »</span>
      </div>
      <div className={styles.projects}>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}
