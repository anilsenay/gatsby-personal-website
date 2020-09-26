import React from "react"

import styles from "./project.module.scss"
import githubColors from "../../../static/github-colors.json"

export default function Project({ name, description, url, language }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.leftBorder}
        style={{
          backgroundColor: language ? githubColors[language].color : "",
        }}
      >
        <span className={styles.tipText}>{language}</span>
      </div>

      <div className={styles.projectInfo}>
        <div className={styles.title}>{name}</div>
        <div className={styles.info}>{description}</div>
        <div className={styles.linkText}>
          Github: <a href={url}>{url}</a>
        </div>
      </div>
    </div>
  )
}
