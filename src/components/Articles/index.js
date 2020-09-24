import React from "react"

import styles from "./articles.module.scss"
import Article from "../HomeArticle"

export default function Articles() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.headerTitle}>Lastest Articles</span>
        <span className={styles.allLink}>All articles »</span>
      </div>
      <div className={styles.articles}>
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  )
}
