import React, { useEffect, useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import styles from "./projects.module.scss"
import SearchBar from "../components/SearchBar"
import Project from "../components/ProjectCard"

import { useGetRepos } from "../hooks/getRepos"

const ProjectsPage = () => {
  const repos = useGetRepos()

  return (
    <Layout>
      <SEO title="Projects" />
      <div className={styles.container}>
        <SearchBar />
        <div className={styles.projects}>
          {repos.map(item => {
            return (
              <Project
                name={item.name}
                description={item.description}
                url={item.html_url}
                language={item.language}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage
