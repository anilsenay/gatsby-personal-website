import React, { useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SearchBar from "../components/SearchBar"

import styles from "./blog.module.scss"
import BlogPost from "../components/BlogPost"

const BlogPage = ({ data }) => {
  const [searchInput, setSearchInput] = useState("")
  const filteredPosts =
    searchInput.length > 0
      ? data.allMarkdownRemark.nodes.filter(item => {
          return item.frontmatter.title
            .toLowerCase()
            .includes(searchInput.toLowerCase())
            ? true
            : false
        })
      : data.allMarkdownRemark.nodes

  return (
    <Layout currentPage="Blog">
      <SEO title="Blog" />
      <div className={styles.container}>
        <SearchBar setInput={setSearchInput} />
        <div className={styles.articles}>
          {filteredPosts.map((post, index) => {
            return <BlogPost key={index} data={post} />
          })}
        </div>
      </div>
    </Layout>
  )
}

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
