import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Articles from "../components/Articles"
import Projects from "../components/Projects"

import styles from "./index.module.scss"

import { useGetRepos } from "../hooks/getRepos"

const IndexPage = ({ data }) => {
  const { repos } = useGetRepos(
    "https://api.github.com/users/anilsenay/repos?per_page=10&sort=created"
  )
  return (
    <Layout showContact currentPage="Home">
      <SEO title="Home" />
      <div className={styles.container}>
        <h1>Hey, I'm Anıl Şenay</h1>
        <h2>I'm a Front-end developer</h2>
        <div className={styles.whoami}>
          I am studying Computer Engineering at Marmara University. I've been
          interested in computers and programming since my childhood.{" "}
          <span className={styles.underline}>Coding</span> and{" "}
          <span className={styles.underline} style={{ borderColor: "#EA4C89" }}>
            design
          </span>
          , which I started with curiosity and passion, is now a big part of my
          life. I am interested in Front-end mostly.
          <p className={styles.learnMoreText}>
            You can read my{" "}
            <Link
              to="/blog"
              className={styles.underline}
              style={{ borderColor: "#82F9A1" }}
            >
              blog
            </Link>
            , look at my{" "}
            <Link
              to="/projects"
              className={styles.underline}
              style={{ borderColor: "#82F9A1" }}
            >
              projects
            </Link>
            , or learn more{" "}
            <Link
              to="/about"
              className={styles.underline}
              style={{ borderColor: "#82F9A1" }}
            >
              about
            </Link>{" "}
            me.
          </p>
        </div>

        <Articles lastestArticles={data.allMarkdownRemark.nodes} />
        <Projects lastestProjects={repos.length > 0 ? repos.slice(0, 3) : []} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      limit: 5
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date
          slug
          title
          keywords
          icon
        }
        wordCount {
          words
        }
      }
    }
  }
`

export default IndexPage
