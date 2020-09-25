import React from "react"

import styles from "./article.module.scss"
import { Link } from "gatsby"

export default function Article({ data }) {
  return (
    <Link to={data.frontmatter.slug}>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          {data.frontmatter.icon && <img src={data.frontmatter.icon} />}
        </div>
        <div className={styles.articleInfo}>
          <div className={styles.title}>{data.frontmatter.title}</div>
          <div className={styles.info}>
            {new Date(data.frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </div>
    </Link>
  )
}
