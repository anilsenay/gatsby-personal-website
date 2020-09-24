import React from "react"

import styles from "./article.module.scss"

export default function Article() {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}></div>
      <div className={styles.articleInfo}>
        <div className={styles.title}>Example article title</div>
        <div className={styles.info}>Jun 10, 2020 - 10 min read</div>
      </div>
    </div>
  )
}
