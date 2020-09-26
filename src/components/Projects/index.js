import React from "react"

import styles from "./projects.module.scss"
import Project from "../HomeProjectCard"

export default function Projects({ lastestProjects }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.headerTitle}>Lastest Projects</span>
        <span className={styles.allLink}>All projects »</span>
      </div>
      <div className={styles.projects}>
        {lastestProjects.map(item => {
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
  )
}
