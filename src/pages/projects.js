import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Articles from "../components/Articles"

import styles from "./projects.module.scss"
import SearchBar from "../components/SearchBar"
import Project from "../components/ProjectCard"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.projects}>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  </Layout>
)

export default ProjectsPage
