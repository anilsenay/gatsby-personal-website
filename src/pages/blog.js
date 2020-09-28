import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SearchBar from "../components/SearchBar"
import BlogPost from "../components/BlogPost"

import styles from "./blog.module.scss"

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
        <h1>Blog</h1>
        <p className={styles.searchInfoText}>
          I've been writing mostly about programming, mostly front-end
          technologies. In total, I've written{" "}
          {data.allMarkdownRemark.nodes.length} blog post here so far. You may
          use the search below to filter by title.
        </p>
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
