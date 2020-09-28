import React from "react"
import { Link, graphql } from "gatsby"

import styles from "./post.module.scss"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"

import DateIcon from "../../assets/date.svg"
import TagIcon from "../../assets/tag.svg"

export default function Post({ data }) {
  const post = data.markdownRemark
  console.log(post)

  if (data === null) {
    return (
      <div>
        <h1>Page Not Found</h1>

        <Link to="/">
          <div>
            <span>If you lost, click here to go homepage </span>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className={styles.container}>
        <h1 className={styles.titleText}>{post.frontmatter.title}</h1>
        <div className={styles.info}>
          <DateIcon />
          <span className={styles.dateText}>
            {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className={styles.dot}>·</span>
          <span className={styles.readMinute}>
            ~{parseInt(post.wordCount.words / 200) + 1} min read
          </span>
          <div className={styles.tags}>
            <TagIcon />
            {post.frontmatter.keywords?.split(", ").map(keyword => (
              <span className={styles.tagText} key={keyword}>
                #{keyword}
              </span>
            ))}
          </div>
        </div>
        <hr />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        keywords
        date
      }
      excerpt
      wordCount {
        words
      }
    }
  }
`
