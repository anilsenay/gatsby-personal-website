import React from "react"

import styles from "./search.module.scss"
import SearchIcon from "../../assets/search.svg"

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <SearchIcon />
      <input className={styles.inputArea} placeholder="Search project" />
    </div>
  )
}
