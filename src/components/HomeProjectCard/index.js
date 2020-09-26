import React from "react"

import styles from "./project.module.scss"
import githubColors from "../../../static/github-colors.json"

import Language from "./language"
import { useGetLanguages } from "../../hooks/getLanguages"

export default function Project({ name, description, url, language }) {
  const langs = useGetLanguages(
    `https://api.github.com/repos/anilsenay/${name}/languages`
  )
  return (
    <a className={styles.container} href={url}>
      <div
        className={styles.leftBorder}
        style={{
          backgroundColor: language ? githubColors[language].color : "",
        }}
      >
        <span className={styles.tipText}>{language}</span>
      </div>

      <div className={styles.projectInfo}>
        <div className={styles.title}>{name}</div>
        <div className={styles.info}>{description}</div>
        <div className={styles.githubUrl}>
          <span>Github: </span>
          <span className={styles.urlText}>{url}</span>
        </div>
        <div className={styles.languages}>
          {Object.keys(langs).map(language => {
            return <Language key={language} language={language} />
          })}
        </div>
      </div>
    </a>
  )
}
