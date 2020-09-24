import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Articles from "../components/Articles"

import styles from "./index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.container}>
      <h1>Anıl Şenay</h1>
      <h2>Personal Website</h2>
      <p className={styles.whoami}>
        Hi, I am Anıl. I am studying Computer Engineering at Marmara University.
        I've been interested in computers and programming since my childhood.{" "}
        <span className={styles.underline}>Coding</span> and{" "}
        <span className={styles.underline} style={{ borderColor: "#EA4C89" }}>
          design
        </span>
        , which I started with a curiosity and passion, is now a big part of my
        life. I am interested in Front-end mostly.
      </p>

      <Articles />
    </div>
  </Layout>
)

export default IndexPage
