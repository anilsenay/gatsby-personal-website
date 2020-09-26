import React from "react"

import styles from "./projects.module.scss"
import Project from "../HomeProjectCard"
import { Link } from "gatsby"

export default function Projects({ lastestProjects }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.headerTitle}>Lastest Projects</span>
        <span className={styles.allLink}>
          <Link to="/projects">All projects »</Link>
        </span>
      </div>
      <div className={styles.projects}>
        {lastestProjects.map(item => {
          return (
            <Project
              key={item.name}
              name={item.name}
              description={item.description}
              url={item.html_url}
              language={item.language}
            />
          )
        })}
      </div>
    </div>
  )
}
