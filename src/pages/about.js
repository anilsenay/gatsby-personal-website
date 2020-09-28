import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import styles from "./about.module.scss"

const AboutPage = () => (
  <Layout currentPage="About">
    <SEO title="About" />
    <div className={styles.container}>
      <h1 className={styles.title}>About me</h1>
    </div>
  </Layout>
)

export default AboutPage
