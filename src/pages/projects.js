import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Articles from "../components/Articles"

import styles from "./projects.module.scss"
import SearchBar from "../components/SearchBar"
import Project from "../components/ProjectCard"

import { projects } from "../../static/projects.json"

const ProjectsPage = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    repos.length === 0 &&
      fetch("https://api.github.com/users/anilsenay/repos?per_page=100")
        .then(response => response.json())
        .then(data => setRepos(repos.concat(data)))

    repos.length !== 0 &&
      repos.length !== projects.length &&
      setRepos(
        repos.filter(item => {
          if (projects.some(e => e.name === item.name)) return item
        })
      )
  }, [repos])

  console.log(repos)

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
