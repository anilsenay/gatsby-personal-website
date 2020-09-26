import React from "react"

import styles from "./articles.module.scss"
import Article from "../HomeArticle"
import { Link } from "gatsby"

export default function Articles({ lastestArticles }) {
  console.log(lastestArticles)
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.headerTitle}>Lastest Articles</span>

        <span className={styles.allLink}>
          <Link to="/blog">All articles »</Link>
        </span>
      </div>
      <div className={styles.articles}>
        {lastestArticles.map((item, index) => {
          return <Article key={index} data={item} />
        })}
      </div>
    </div>
  )
}
