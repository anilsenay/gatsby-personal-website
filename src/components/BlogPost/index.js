import React from "react"
import { Link } from "gatsby"

import styles from "./blog_post.module.scss"
import DateIcon from "../../assets/date.svg"
import TagIcon from "../../assets/tag.svg"

export default function BlogPost({ data }) {
  return (
    <Link to={data.frontmatter.slug}>
      <div className={styles.container}>
        <div className={styles.articleInfo}>
          <div className={styles.title}>{data.frontmatter.title}</div>
          <div className={styles.info}>
            <DateIcon />
            <span className={styles.dateText}>
              {new Date(data.frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className={styles.dot}>·</span>
            <span className={styles.readMinute}>
              ~{parseInt(data.wordCount.words / 200) + 1} min read
            </span>
          </div>
          <p className={styles.shortText}>{data.excerpt}</p>

          <div className={styles.tags}>
            <TagIcon />
            {data.frontmatter.keywords?.split(", ").map(keyword => (
              <span className={styles.tagText} key={keyword}>
                #{keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
