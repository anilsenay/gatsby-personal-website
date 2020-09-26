import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SearchBar from "../components/SearchBar"

import styles from "./blog.module.scss"
import BlogPost from "../components/BlogPost"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.articles}>
        {data.allMarkdownRemark.nodes.map(post => {
          return <BlogPost data={post} />
        })}
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          slug
          title
          keywords
          icon
        }
        excerpt(pruneLength: 300)
        wordCount {
          words
        }
      }
    }
  }
`

export default BlogPage
