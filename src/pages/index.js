import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Articles from "../components/Articles"

import styles from "./index.module.scss"
import Projects from "../components/Projects"
import { useGetRepos } from "../hooks/getRepos"
import { Link } from "gatsby"

const IndexPage = ({ data }) => {
  const repos = useGetRepos(
    "https://api.github.com/users/anilsenay/repos?per_page=10&sort=created"
  )
  return (
    <Layout showContact currentPage="Home">
      <SEO title="Home" />
      <div className={styles.container}>
        <h1>Hey, I'm Anıl Şenay</h1>
        <h2>I'm a Front-end developer</h2>
        <p className={styles.whoami}>
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
            <Link to="/blog" className={styles.underline}>
              blog
            </Link>
            , look at my{" "}
            <Link to="/projects" className={styles.underline}>
              projects
            </Link>
            , or learn more{" "}
            <Link to="/about" className={styles.underline}>
              about
            </Link>{" "}
            me.
          </p>
        </p>

        <Articles lastestArticles={data.allMarkdownRemark.nodes} />
        <Projects lastestProjects={repos.slice(0, 3)} />
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
